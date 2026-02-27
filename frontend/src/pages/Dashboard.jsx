import { useState } from "react";
import axios from "axios";

import Navbar from "../components/layout/Navbar";
import Container from "../components/layout/Container";
import Footer from "../components/layout/Footer";

import Section from "../components/ui/SectionTitle";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";

import RiskGauge from "../components/dashboard/RiskGauge";
import BreakdownPie from "../components/dashboard/BreakdownPie";
import SimulationCard from "../components/dashboard/SimulationCard";
import TagsPanel from "../components/dashboard/TagsPanel";

const Dashboard = () => {
  const [bio, setBio] = useState("");
  const [posts, setPosts] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const analyze = async () => {
    setLoading(true);

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/analyze",
        {
          bio,
          posts: posts.split("\n")
        }
      );

      setResult(response.data);
    } catch (error) {
      console.error(error);
      alert("Backend not connected.");
    }

    setLoading(false);
  };

  return (
    <>
      <Navbar />
      <Container>

        <SectionTitle title="Enter Persona Data">
          <Card>
            <div className="flex flex-col gap-6">
              <Input
                label="Bio"
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                textarea
              />

              <Input
                label="Posts (one per line)"
                value={posts}
                onChange={(e) => setPosts(e.target.value)}
                textarea
              />

              <Button onClick={analyze} loading={loading}>
                Analyze Risk
              </Button>
            </div>
          </Card>
        </SectionTitle>

        {result && (
          <SectionTitle title="Risk Analysis">
            <div className="grid md:grid-cols-2 gap-10">
              <Card>
                <RiskGauge score={result.overall_risk_score} />
              </Card>

              <Card>
                <BreakdownPie breakdown={result.breakdown} />
              </Card>
            </div>

            <TagsPanel tags={result.risk_tags} />
            <SimulationCard simulation={result.simulated_attack} />
          </SectionTitle>
        )}

      </Container>
      <Footer />
    </>
  );
};

export default Dashboard;