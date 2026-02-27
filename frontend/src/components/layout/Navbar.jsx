import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      style={{
        width: "100%",
        padding: "20px 40px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 10,
      }}
    >
      <Link
        to="/"
        style={{
          textDecoration: "none",
          fontWeight: "700",
          fontSize: "20px",
          color: "#00ff9c",
        }}
      >
        PersonaRisk AI
      </Link>

      <div style={{ display: "flex", gap: "30px" }}>
        <Link
          to="/dashboard"
          style={{
            textDecoration: "none",
            color: "#9ca3af",
            fontWeight: "500",
          }}
        >
          Dashboard
        </Link>

        <a
          href="https://github.com/yelemvenkatarachika/TechNova"
          target="_blank"
          rel="noreferrer"
          style={{
            textDecoration: "none",
            color: "#9ca3af",
            fontWeight: "500",
          }}
        >
          GitHub
        </a>
      </div>
    </nav>
  );
};

export default Navbar;