const SimulationCard = ({ simulation }) => {
  if (!simulation) return null;

  const recommendations = Array.isArray(simulation.recommendations)
    ? simulation.recommendations
    : [];

  return (
  <div className="simulation-card">
    <h2 className="simulation-title">Simulated Attack Scenario</h2>

    <div className="simulation-section">

      <div className="simulation-block">
        <strong>Attack Vector:</strong>
        <p>{simulation.attack_vector}</p>
      </div>

      <div className="simulation-block">
        <strong>Impact:</strong>
        <p>{simulation.impact}</p>
      </div>

      <div className="simulation-block">
        <strong>Severity:</strong>
        <span className={`severity-badge ${simulation.severity?.toLowerCase()}`}>
          {simulation.severity}
        </span>
      </div>

    </div>

    {recommendations.length > 0 && (
      <div className="recommendations-section">
        <h3>Recommended Actions</h3>

        {recommendations.map((rec, index) => {
          const text =
            rec.description || rec.details || rec.text || "Security improvement recommended";

          return (
            <div key={index} className="recommendation-item">
              {text}
            </div>
          );
        })}
      </div>
    )}
  </div>
);
};

export default SimulationCard;