const BreakdownCard = ({ breakdown }) => {
  return (
    <div className="glass-card">
      <h3>Risk Breakdown</h3>
      {Object.entries(breakdown).map(([key, value]) => (
        <div className="break-item" key={key}>
          <span>{key.replace("_", " ")}</span>
          <span>{value}</span>
        </div>
      ))}
    </div>
  );
};

export default BreakdownCard;