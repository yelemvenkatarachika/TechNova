import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const Home = () => {
  return (
    <>
      <Navbar />

      <div
        style={{
          minHeight: "90vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: "40px",
          position: "relative",
        }}
      >
        {/* Glow Background */}
        <div
          style={{
            position: "absolute",
            width: "600px",
            height: "600px",
            background: "radial-gradient(circle, #00ff9c22 0%, transparent 70%)",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 0,
          }}
        />

        <div style={{ zIndex: 1 }}>
          <h1
            style={{
              fontSize: "72px",
              fontWeight: "800",
              marginBottom: "20px",
              background: "linear-gradient(90deg, #00ff9c, #ffffff)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            PersonaRisk AI
          </h1>

          <p
            style={{
              maxWidth: "750px",
              fontSize: "20px",
              color: "#9ca3af",
              marginBottom: "50px",
              lineHeight: "1.6",
            }}
          >
            AI-powered Social Engineering Risk Intelligence Platform.
            Detect exposure. Simulate threats. Strengthen resilience.
          </p>

          <Link to="/dashboard">
            <button
              style={{
                fontSize: "18px",
                padding: "18px 42px",
                borderRadius: "12px",
                boxShadow: "0 0 25px #00ff9c55",
              }}
            >
              Analyze Profile
            </button>
          </Link>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Home;