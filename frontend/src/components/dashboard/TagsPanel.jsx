const TagsPanel = ({ tags }) => {
  if (!tags || tags.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-3 mt-6">
      {tags.map((tag, index) => (
        <span
          key={index}
          className="px-4 py-2 bg-green-500/10 border border-green-400 text-green-300 rounded-full text-sm"
        >
          {tag}
        </span>
      ))}
    </div>
  );
};

export default TagsPanel;