import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-black border-b border-green-500/30 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <Link to="/" className="text-green-400 text-xl font-bold tracking-wide">
          PersonaRisk AI
        </Link>

        <div className="flex gap-6 text-sm text-gray-300">
          <Link
            to="/dashboard"
            className="hover:text-green-400 transition-colors duration-300"
          >
            Dashboard
          </Link>
          <a
            href="https://github.com"
            target="_blank"
            className="hover:text-green-400 transition-colors duration-300"
          >
            GitHub
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;