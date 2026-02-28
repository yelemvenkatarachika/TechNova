const RiskScore = ({ score }) => {
  const getColor = () => {
    if (score >= 70) return "#ff3b3b";
    if (score >= 40) return "#ffb300";
    return "#00ff9c";
  };

  return (
    <div className="section-card" style={{ textAlign: "center" }}>
      <h2 style={{ fontSize: 90, margin: 0, color: getColor() }}>
        {score}
      </h2>
      <p style={{ fontSize: 24 }}>
        {score >= 70 ? "High Risk" : score >= 40 ? "Medium Risk" : "Low Risk"}
      </p>
    </div>
  );
};

export default RiskScore;