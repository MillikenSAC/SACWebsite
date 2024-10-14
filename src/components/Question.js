import React, { useState, useEffect } from "react";
import { CiSquareMinus } from "react-icons/ci";
import { CiSquarePlus } from "react-icons/ci";

export default function Question({ question, answer }) {
  const [showAnswer, setShowAnswer] = useState(false);
  const [renderContent, setRenderContent] = useState(false);

  // Effect to delay hiding content until after the shrink animation completes
  useEffect(() => {
    if (showAnswer) {
      setRenderContent(true); // Show content immediately when expanding
    } else {
      const timer = setTimeout(() => setRenderContent(false), 500); // Delay hiding content during shrink
      return () => clearTimeout(timer); // Cleanup the timer
    }
  }, [showAnswer]);

  return (
    <div
      onClick={() => setShowAnswer(!showAnswer)}
      className="border border-gray-400 select-none text-indigo-900 rounded-xl shadow-xl hover:font-bold bg-indigo-200 font-['Inter'] w-5/6 place-self-center"
    >
      <article className="flex items-center justify-between p-4 lg:p-6 cursor-pointer">
        <h2 className="cursor-pointer">{question}</h2>
        <ul>
          {!showAnswer && (
            <li>
              <button
                onClick={() => setShowAnswer(true)}
                className="place-self-center flex"
              >
                <CiSquarePlus size="2.5rem" />
              </button>
            </li>
          )}
          {showAnswer && (
            <li>
              <button
                onClick={() => setShowAnswer(false)}
                className="place-self-center flex"
              >
                <CiSquareMinus size="2.5rem" />
              </button>
            </li>
          )}
        </ul>
      </article>

      <article
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          showAnswer ? "max-h-screen opacity-100 py-2 lg:py-4" : "max-h-0 opacity-0"
        }`}
      >
        {renderContent && <p className="px-4 lg:px-6">{answer}</p>}
      </article>
    </div>
  );
}
