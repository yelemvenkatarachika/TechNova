import { useState } from "react";
import { analyzePersona } from "../services/api";

import Navbar from "../components/Navbar";
import InputForm from "../components/InputForm";
import RiskMeter from "../components/RiskMeter";
import BreakdownPie from "../components/BreakdownPie";
import SimulationCard from "../components/SimulationCard";

const Dashboard = () => {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleAnalyze = async (data) => {
    setLoading(true);
    const response = await analyzePersona(data);
    setResult(response);
    setLoading(false);
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <InputForm onAnalyze={handleAnalyze} loading={loading} />

        {result && (
          <div className="dashboard-grid">
            <RiskMeter score={result.overall_risk_score} />
            <BreakdownPie breakdown={result.breakdown} />
            <SimulationCard simulation={result.simulated_attack} />
          </div>
        )}
      </div>
    </>
  );
};

export default Dashboard;