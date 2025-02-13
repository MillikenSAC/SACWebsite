import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function CompatibilityTest() {
  const navigate = useNavigate();
  const [friend1, setFriend1] = useState("");
  const [friend2, setFriend2] = useState("");
  const [score, setScore] = useState(null);
  const [message, setMessage] = useState("");

  const calculateCompatibility = () => {
    if (!friend1 || !friend2) {
      alert("Please enter both names!");
      return;
    }
    const randomScore = Math.floor(Math.random() * 101);
    setScore(randomScore);

    if (randomScore > 80) {
      setMessage("You're the perfect pair! 💖");
    } else if (randomScore > 50) {
      setMessage("You have a strong friendship! 💙");
    } else {
      setMessage("You're friendly, but you could get closer! 🤝");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-pink-200 to-blue-200 text-black">
      <h1 className="text-5xl font-bold text-pink-600 font-['Prata'] mb-6">Compatibility Test</h1>

      <div className="bg-white bg-opacity-90 p-8 rounded-xl shadow-lg max-w-md w-full text-center">
        <p className="mb-4 text-lg">Type in two names and see how strong your friendship is!</p>

        <input
          type="text"
          placeholder="Friend 1"
          className="w-full p-3 mb-3 border-2 border-pink-500 rounded-xl"
          value={friend1}
          onChange={(e) => setFriend1(e.target.value)}
        />
        <input
          type="text"
          placeholder="Friend 2"
          className="w-full p-3 mb-4 border-2 border-pink-500 rounded-xl"
          value={friend2}
          onChange={(e) => setFriend2(e.target.value)}
        />

        <button
          onClick={calculateCompatibility}
          className="w-full py-3 bg-gradient-to-r from-pink-300 to-pink-400 text-white rounded-full text-lg shadow-md hover:scale-105 transition-transform"
        >
          Test Compatibility
        </button>

        {score !== null && (
          <div className="mt-6">
            <p className="text-2xl font-bold text-pink-600">{friend1} and {friend2}, your score is:</p>
            <p className="text-5xl font-bold text-pink-500 mt-2">{score}%</p>
            <p className="text-xl text-gray-800 mt-2">{message}</p>
          </div>
        )}

        <div className="flex justify-between mt-6">
          <button
            onClick={() => navigate("/sacentines")}
            className="py-2 px-4 bg-gradient-to-r from-pink-300 to-pink-400 text-white rounded-full text-lg hover:scale-105 transition-transform"
          >
            Home
          </button>
          <button
            onClick={() => navigate("/sacentines/friendship")}
            className="py-2 px-4 bg-gradient-to-r from-blue-300 to-blue-400 text-white rounded-full text-lg hover:scale-105 transition-transform"
          >
            Friendship Test
          </button>
        </div>
      </div>
    </div>
  );
}

export default CompatibilityTest;
