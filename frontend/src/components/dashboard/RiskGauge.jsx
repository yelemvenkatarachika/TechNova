import { motion } from "framer-motion";

const RiskGauge = ({ score }) => {
  const color =
    score < 40 ? "text-green-400" :
    score < 70 ? "text-yellow-400" :
    "text-red-400";

  return (
    <div className="flex flex-col items-center">
      <motion.div
        className={`text-6xl font-bold ${color}`}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        {score}
      </motion.div>
      <p className="text-gray-400 mt-2">Risk Score</p>
    </div>
  );
};

export default RiskGauge;