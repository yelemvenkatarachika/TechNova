const Section = ({ title, children }) => {
  return (
    <div className="mb-10">
      <h2 className="text-green-400 text-2xl font-semibold mb-6">
        {title}
      </h2>
      {children}
    </div>
  );
};

export default Section;