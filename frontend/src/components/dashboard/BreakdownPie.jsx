import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const COLORS = ["#22c55e", "#f59e0b", "#ef4444", "#3b82f6"];

const BreakdownPie = ({ breakdown = {} }) => {
  const data = [
    { name: "PII Exposure", value: breakdown.pii_exposure || 0 },
    { name: "Professional Exposure", value: breakdown.professional_exposure || 0 },
    { name: "Location Exposure", value: breakdown.location_exposure || 0 },
    { name: "Routine Exposure", value: breakdown.routine_exposure || 0 },
  ];

  return (
    <div className="glass-card">
      <h2>Risk Breakdown</h2>

      <div style={{ display: "flex", gap: "40px", alignItems: "center" }}>
        
        {/* PIE */}
        <ResponsiveContainer width={300} height={300}>
          <PieChart>
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
        </ResponsiveContainer>

        {/* LEGEND */}
        <div>
          {data.map((entry, index) => (
            <div key={index} style={{ marginBottom: "12px", display: "flex", alignItems: "center" }}>
              <div
                style={{
                  width: "14px",
                  height: "14px",
                  backgroundColor: COLORS[index],
                  marginRight: "10px",
                  borderRadius: "3px"
                }}
              />
              <span>{entry.name}</span>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default BreakdownPie;