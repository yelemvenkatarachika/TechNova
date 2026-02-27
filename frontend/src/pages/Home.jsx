import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center px-6">
      
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl font-bold text-white"
      >
        PersonaRisk AI
      </motion.h1>

      <p className="mt-6 text-gray-400 max-w-2xl">
        AI-powered Social Engineering Risk Intelligence Platform. 
        Detect exposure. Simulate threats. Strengthen resilience.
      </p>

      <Link
        to="/dashboard"
        className="mt-10 px-8 py-3 bg-primary text-black font-semibold rounded-lg hover:scale-105 transition"
      >
        Analyze Profile
      </Link>

    </div>
  );
}