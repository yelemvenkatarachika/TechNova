import { useState } from "react";
import axios from "axios";
import RiskGauge from "../components/dashboard/RiskScore";
import BreakdownPie from "../components/dashboard/BreakdownPie";
import SimulationCard from "../components/dashboard/SimulationCard";
import TagsPanel from "../components/dashboard/Recommendations";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const Dashboard = () => {
  const [bio, setBio] = useState("");
  const [posts, setPosts] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const analyzeProfile = async () => {
    setLoading(true);
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/analyze",
        {
          bio,
          posts: posts.split("\n").filter(p => p.trim() !== "")
        }
      );
      setResult(response.data);
    } catch (error) {
      console.error("API Error:", error);
    }
    setLoading(false);
  };

  const downloadPDF = async () => {
    const input = document.getElementById("report-section");
    const canvas = await html2canvas(input);
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF();
    pdf.addImage(imgData, "PNG", 0, 0, 210, 295);
    pdf.save("PersonaRisk_Report.pdf");
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-card">
        <h2>Analyze Your Digital Exposure</h2>

        <textarea
          placeholder="Enter your bio..."
          value={bio}
          onChange={(e) => setBio(e.target.value)}
        />

        <textarea
          placeholder="Enter posts (one per line)..."
          value={posts}
          onChange={(e) => setPosts(e.target.value)}
        />

        <button onClick={analyzeProfile}>
          {loading ? "Analyzing..." : "Analyze Profile"}
        </button>
      </div>

      {result && (
        <div id="report-section" className="results-grid">
          <RiskGauge score={result.overall_risk_score} />
          <BreakdownPie breakdown={result.breakdown} />
          <SimulationCard simulation={result.simulated_attack} />
          <TagsPanel tags={result.risk_tags} />
          <button onClick={downloadPDF}>
            Download Full Risk Report
          </button>
        </div>
      )}
    </div>
  );
};

export default Dashboard;