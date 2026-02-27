const Button = ({ children, onClick, type = "button", loading }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="px-6 py-3 rounded-xl bg-green-500 text-black font-semibold hover:bg-green-400 transition-all duration-300 disabled:opacity-50"
      disabled={loading}
    >
      {loading ? "Analyzing..." : children}
    </button>
  );
};

export default Button;