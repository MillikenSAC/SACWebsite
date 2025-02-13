import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function FriendshipTest() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [names, setNames] = useState({ person1: "", person2: "" });
  const [answers, setAnswers] = useState({ person1: {}, person2: {} });
  const [score, setScore] = useState(null);
  const [correctCount, setCorrectCount] = useState(0);

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

    setCorrectCount(matchCount);
    setScore(Math.floor((matchCount / totalQuestions) * 100));
    setStep(4);
  };

  const resetQuiz = () => {
    setStep(1);
    setNames({ person1: "", person2: "" });
    setAnswers({ person1: {}, person2: {} });
    setScore(null);
    setCorrectCount(0);
  };

  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-gradient-to-br from-blue-200 to-pink-200 text-black pt-32 px-4">
      <h1 className="text-5xl font-bold text-pink-600 font-['Prata'] mb-6 text-center">
        Friendship Test
      </h1>

      <div className="bg-white bg-opacity-90 p-8 rounded-xl shadow-lg max-w-lg w-full mb-10 text-center mx-auto">
        
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
            <div className="flex justify-between mt-6">
          <button
            onClick={() => navigate("/sacentines")}
            className="py-2 px-4 bg-gradient-to-r from-pink-300 to-pink-400 text-white rounded-full text-lg hover:scale-105 transition-transform"
          >
            Back
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

        {/* STEP 4: Results */}
        {step === 4 && (
          <>
            <h2 className="text-3xl font-bold text-pink-600 mb-4">Results</h2>
            <p className="text-lg">
              {names.person1} and {names.person2}, you got <span className="font-bold text-pink-500">{correctCount}</span> out of 5 questions correct!
            </p>
            <p className="text-lg mt-2">
              Your friendship compatibility score is <span className="font-bold text-pink-500">{score}%</span> 🎉
            </p>
            
            {/* Buttons */}
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
