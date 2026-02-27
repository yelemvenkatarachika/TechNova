const Input = ({ label, value, onChange, textarea }) => {
  return (
    <div className="flex flex-col gap-2 w-full">
      <label className="text-green-400 text-sm">{label}</label>

      {textarea ? (
        <textarea
          value={value}
          onChange={onChange}
          className="bg-black border border-green-500/30 rounded-xl p-4 text-white focus:outline-none focus:border-green-400"
          rows={4}
        />
      ) : (
        <input
          value={value}
          onChange={onChange}
          className="bg-black border border-green-500/30 rounded-xl p-3 text-white focus:outline-none focus:border-green-400"
        />
      )}
    </div>
  );
};

export default Input;