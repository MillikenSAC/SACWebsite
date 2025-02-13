import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function FriendshipTest() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [names, setNames] = useState({ person1: "", person2: "" });
  const [answers, setAnswers] = useState({ person1: {}, person2: {} });
  const [score, setScore] = useState(null);

  const handleNameChange = (person, value) => {
    setNames((prev) => ({ ...prev, [person]: value }));
  };

  const handleInputChange = (person, question, value) => {
    setAnswers((prev) => ({
      ...prev,
      [person]: { ...prev[person], [question]: value },
    }));
  };

  const startQuiz = () => {
    if (!names.person1 || !names.person2) {
      alert("Please enter both names!");
      return;
    }
    setStep(2);
  };

  const submitPerson1 = () => setStep(3);

  const submitPerson2 = () => {
    let matchCount = 0;
    const totalQuestions = 5;
    for (let i = 1; i <= totalQuestions; i++) {
      if (answers.person1[`q${i}`]?.toLowerCase() === answers.person2[`q${i}`]?.toLowerCase()) {
        matchCount++;
      }
    }
    setScore(Math.floor((matchCount / totalQuestions) * 100));
    setStep(4);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-200 to-pink-200 text-black">
      <h1 className="text-5xl font-bold text-pink-600 font-['Prata'] mb-6">Friendship Test</h1>

      <div className="bg-white bg-opacity-90 p-8 rounded-xl shadow-lg max-w-md w-full text-center">
        {/* STEP 1: Enter Names */}
        {step === 1 && (
          <>
            <p className="mb-4 text-lg">Enter your names to start!</p>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 mb-3 border-2 border-pink-500 rounded-xl"
              value={names.person1}
              onChange={(e) => handleNameChange("person1", e.target.value)}
            />
            <input
              type="text"
              placeholder="Friend's Name"
              className="w-full p-3 mb-4 border-2 border-pink-500 rounded-xl"
              value={names.person2}
              onChange={(e) => handleNameChange("person2", e.target.value)}
            />
            <button
              onClick={startQuiz}
              className="w-full py-3 bg-gradient-to-r from-pink-300 to-pink-400 text-white rounded-full text-lg shadow-md hover:scale-105 transition-transform"
            >
              Start Quiz
            </button>
          </>
        )}

        {/* STEP 2: Person 1 Answers */}
        {step === 2 && (
          <>
            <p className="mb-4 text-lg">{names.person1}, answer these questions about {names.person2}!</p>
            {[1, 2, 3, 4, 5].map((q) => (
              <input
                key={q}
                type="text"
                placeholder={`Q${q}: Favorite thing?`}
                className="w-full p-3 mb-3 border-2 border-pink-500 rounded-xl"
                onChange={(e) => handleInputChange("person1", `q${q}`, e.target.value)}
              />
            ))}
            <button
              onClick={submitPerson1}
              className="w-full py-3 bg-gradient-to-r from-pink-300 to-pink-400 text-white rounded-full text-lg shadow-md hover:scale-105 transition-transform"
            >
              Next
            </button>
          </>
        )}

        {/* STEP 3: Person 2 Answers */}
        {step === 3 && (
          <>
            <p className="mb-4 text-lg">{names.person2}, now it's your turn to answer the same questions!</p>
            {[1, 2, 3, 4, 5].map((q) => (
              <input
                key={q}
                type="text"
                placeholder={`Q${q}: Favorite thing?`}
                className="w-full p-3 mb-3 border-2 border-pink-500 rounded-xl"
                onChange={(e) => handleInputChange("person2", `q${q}`, e.target.value)}
              />
            ))}
            <button
              onClick={submitPerson2}
              className="w-full py-3 bg-gradient-to-r from-pink-300 to-pink-400 text-white rounded-full text-lg shadow-md hover:scale-105 transition-transform"
            >
              Submit
            </button>
          </>
        )}

        {/* STEP 4: Results */}
        {step === 4 && (
          <>
            <p className="text-3xl font-bold text-pink-600 mt-2">{names.person1} & {names.person2}</p>
            <p className="text-5xl font-bold text-pink-500 mt-2">{score}%</p>
            <p className="text-lg text-gray-800 mt-2">
              {score > 80 ? "You're the perfect pair! 💖" : score > 50 ? "You have a strong friendship! 💙" : "You're friendly, but could get closer! 🤝"}
            </p>
            <div className="flex justify-between mt-6">
              <button
                onClick={() => navigate("/sacentines")}
                className="py-2 px-4 bg-gradient-to-r from-pink-300 to-pink-400 text-white rounded-full text-lg hover:scale-105 transition-transform"
              >
                Home
              </button>
              <button
                onClick={() => navigate("/sacentines/compatibility")}
                className="py-2 px-4 bg-gradient-to-r from-blue-300 to-blue-400 text-white rounded-full text-lg hover:scale-105 transition-transform"
              >
                Compatibility Test
              </button>
            </div>
          </>
        )}
      </div>

    </div>
  );
}

export default FriendshipTest;
