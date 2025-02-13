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
    <div className="flex flex-col items-center justify-start min-h-screen bg-gradient-to-br from-blue-200 to-pink-200 text-black pt-32">
      <h1 className="text-5xl font-bold text-pink-600 font-['Prata'] mb-6">Friendship Test</h1>

      <div className="bg-white bg-opacity-90 p-8 rounded-xl shadow-lg max-w-md w-full mb-10 text-center">
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
            {["What is your friend's favorite color?", "What is your friend's favorite food?", "What is your friend's favorite hobby?", "What is your friend's favorite movie?", "What is your friend's dream vacation destination?"].map((question, index) => (
              <div key={index} className="mb-3">
                <p className="text-left text-sm font-semibold">{question}</p>
                <input
                  type="text"
                  className="w-full p-3 border-2 border-pink-500 rounded-xl"
                  onChange={(e) => handleInputChange("person1", `q${index + 1}`, e.target.value)}
                />
              </div>
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
            {["What is your friend's favorite color?", "What is your friend's favorite food?", "What is your friend's favorite hobby?", "What is your friend's favorite movie?", "What is your friend's dream vacation destination?"].map((question, index) => (
              <div key={index} className="mb-3">
                <p className="text-left text-sm font-semibold">{question}</p>
                <input
                  type="text"
                  className="w-full p-3 border-2 border-pink-500 rounded-xl"
                  onChange={(e) => handleInputChange("person2", `q${index + 1}`, e.target.value)}
                />
              </div>
            ))}
            <button
              onClick={submitPerson2}
              className="w-full py-3 bg-gradient-to-r from-pink-300 to-pink-400 text-white rounded-full text-lg shadow-md hover:scale-105 transition-transform"
            >
              Submit
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default FriendshipTest;
