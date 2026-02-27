import { PieChart, Pie, Cell, Tooltip } from "recharts";

const BreakdownPie = ({ breakdown }) => {
  const data = Object.entries(breakdown).map(([key, value]) => ({
    name: key,
    value
  }));

  const COLORS = ["#00ff88", "#ffaa00", "#ff0033", "#00aaff"];

  return (
    <div className="card">
      <h3>Risk Breakdown</h3>
      <PieChart width={400} height={300}>
        <Pie
          data={data}
          dataKey="value"
          outerRadius={100}
          label
        >
          {data.map((entry, index) => (
            <Cell key={index} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </div>
  );
};

export default BreakdownPie;