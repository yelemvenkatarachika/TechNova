import { useState } from "react";
import axios from "axios";
import RiskGauge from "../components/dashboard/RiskGauge";
import BreakdownPie from "../components/dashboard/BreakdownPie";
import SimulationCard from "../components/dashboard/SimulationCard";
import TagsPanel from "../components/dashboard/TagsPanel";

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
          bio: bio,
          posts: posts.split("\n").filter((p) => p.trim() !== ""),
        }
      );

      const data = response.data;

      setResult({
        overall_risk_score: data?.overall_risk_score ?? 0,
        breakdown: data?.breakdown ?? {},
        simulated_attack: data?.simulated_attack ?? {},
        risk_tags: data?.risk_tags ?? []
      });

    } catch (error) {
      console.error("API Error:", error);
    }

    setLoading(false);
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
        <>
          {/* Debug JSON (optional — remove later) */}
         

          <div className="results-grid">
            <RiskGauge score={result.overall_risk_score} />
            <BreakdownPie breakdown={result.breakdown} />
            <SimulationCard simulation={result.simulated_attack} />
            <TagsPanel tags={result.risk_tags} />
          </div>
        </>
      )}
    </div>
  );
};

export default Dashboard;