import { PieChart, Pie, Cell, Tooltip } from "recharts";

const BreakdownPie = ({ breakdown }) => {
  const data = Object.keys(breakdown).map(key => ({
    name: key,
    value: breakdown[key]
  }));

  const COLORS = ["#22c55e", "#eab308", "#f97316", "#ef4444"];

  return (
    <PieChart width={300} height={300}>
      <Pie data={data} dataKey="value" outerRadius={100}>
        {data.map((entry, index) => (
          <Cell key={index} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
    </PieChart>
  );
};

export default BreakdownPie;