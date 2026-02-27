import { motion } from "framer-motion";

export default function SimulationCard({ simulation }) {
  if (!simulation) return null;

  return (
    <motion.div
      className="sim-card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <h2>🛡 Simulated Attack Analysis</h2>

      <div className="sim-row">
        <span>Attack Vector:</span>
        <strong className="neon">{simulation.attack_vector}</strong>
      </div>

      <div className="sim-row">
        <span>Impact:</span>
        <strong>{simulation.impact}</strong>
      </div>

      <div className="sim-row">
        <span>Severity:</span>
        <strong className={
          simulation.severity === "High"
            ? "danger"
            : simulation.severity === "Medium"
            ? "warning"
            : "safe"
        }>
          {simulation.severity}
        </strong>
      </div>

      <h3>Recommendations</h3>

      {simulation.recommendations?.map((rec, index) => (
        <div key={index} className="recommendation">
          <p><strong>{rec.type}</strong></p>
          <p>{rec.details}</p>
        </div>
      ))}
    </motion.div>
  );
}