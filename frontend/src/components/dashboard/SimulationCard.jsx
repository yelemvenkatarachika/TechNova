import Card from "../ui/Card";

const SimulationCard = ({ simulation }) => {
  if (!simulation) return null;

  return (
    <Card>
      <h3 className="text-green-400 text-lg mb-4">Simulated Attack</h3>
      <pre className="text-sm text-green-300 whitespace-pre-wrap">
        {JSON.stringify(simulation, null, 2)}
      </pre>
    </Card>
  );
};

export default SimulationCard;