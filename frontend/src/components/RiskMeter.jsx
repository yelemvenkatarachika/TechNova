import { motion } from "framer-motion";

const RiskMeter = ({ score }) => {
  const color = score > 70 ? "#ff0033" : score > 40 ? "#ffaa00" : "#00ff88";

  return (
    <div className="card" style={{ textAlign: "center" }}>
      <h3>Overall Risk Score</h3>

      <motion.div
        initial={{ rotate: -180 }}
        animate={{ rotate: (score / 100) * 180 - 180 }}
        transition={{ duration: 1 }}
        style={{
          width: "200px",
          height: "200px",
          borderRadius: "50%",
          border: `12px solid ${color}`,
          margin: "auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "2rem",
          fontWeight: "bold"
        }}
      >
        {score}
      </motion.div>
    </div>
  );
};

export default RiskMeter;