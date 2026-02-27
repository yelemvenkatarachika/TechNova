const RiskOverview = ({ score, level }) => {
  return (
    <div className="glass-card center">
      <h2>Risk Score</h2>
      <div className="risk-score">{score}</div>
      <p className={`risk-level ${level.toLowerCase()}`}>{level}</p>
    </div>
  );
};

export default RiskOverview;