import { useState } from "react";

const InputForm = ({ onAnalyze, loading }) => {
  const [bio, setBio] = useState("");
  const [posts, setPosts] = useState("");

  const handleSubmit = () => {
    const postArray = posts.split("\n").filter(p => p.trim() !== "");
    onAnalyze({ bio, posts: postArray });
  };

  return (
    <div className="card">
      <h2>Analyze Your Digital Persona</h2>

      <textarea
        placeholder="Enter your bio..."
        value={bio}
        onChange={(e) => setBio(e.target.value)}
      />

      <br /><br />

      <textarea
        placeholder="Enter posts (one per line)..."
        value={posts}
        onChange={(e) => setPosts(e.target.value)}
      />

      <br /><br />

      <button onClick={handleSubmit}>
        {loading ? "Analyzing..." : "Analyze Risk"}
      </button>
    </div>
  );
};

export default InputForm;