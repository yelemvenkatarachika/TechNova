const Card = ({ children }) => {
  return (
    <div className="bg-[#0f172a] border border-green-500/20 rounded-2xl p-6 shadow-lg backdrop-blur-md">
      {children}
    </div>
  );
};

export default Card;