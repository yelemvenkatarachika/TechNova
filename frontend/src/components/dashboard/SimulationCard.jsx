const SimulationCard = ({ simulation }) => {
  if (!simulation) return null;

  const recommendations = Array.isArray(simulation.recommendations)
    ? simulation.recommendations
    : simulation.recommendations
    ? [simulation.recommendations]
    : [];

  return (
    <div className="simulation-card">
      <h2 className="simulation-title">Simulated Attack</h2>

      <div className="simulation-section">
        <div className="simulation-row">
          <span className="simulation-label">Attack Vector</span>
          <span className="simulation-value">{simulation.attack_vector}</span>
        </div>

        <div className="simulation-row">
          <span className="simulation-label">Impact</span>
          <span className="simulation-value">{simulation.impact}</span>
        </div>

        <div className="simulation-row">
          <span className="simulation-label">Severity</span>
          <span className={`severity-badge ${simulation.severity?.toLowerCase()}`}>
            {simulation.severity}
          </span>
        </div>
      </div>

      {recommendations.length > 0 && (
        <div className="recommendations-section">
          <h3>Recommended Actions</h3>
          <ul>
            {recommendations.map((rec, index) => (
              <li key={index}>
                <span className="rec-text">{rec.description}</span>
                {rec.urgency && (
                  <span className={`urgency-badge ${rec.urgency.toLowerCase()}`}>
                    {rec.urgency}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SimulationCard;