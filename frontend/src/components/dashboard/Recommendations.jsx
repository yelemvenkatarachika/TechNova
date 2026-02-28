const Recommendations = ({ tags = [] }) => {
  if (!Array.isArray(tags) || tags.length === 0) {
    return null;
  }

  return (
    <div className="simulation-card">
      <h2>Risk Indicators</h2>
      <ul>
        {tags.map((tag, index) => (
          <li key={index} style={{ marginBottom: "10px" }}>
            {tag}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Recommendations;