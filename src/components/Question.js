import React, { useState } from "react";
import { CiSquareMinus } from "react-icons/ci";
import { CiSquarePlus } from "react-icons/ci";

export default function Question({question, answer}){ 

    const [showAnswer, setShowAnswer] = useState(false);

    return (
        <div onClick={() => setShowAnswer(!showAnswer)} className="border border-gray-400 select-none text-indigo-900 rounded-xl shadow-xl hover:font-bold bg-indigo-200 font-['Inter'] w-5/6 place-self-center">
            <article className="flex items-center justify-between p-4 lg:p-6 cursor-pointer">
                <h2
                    className="cursor-pointer"
                >
                    {question}
                </h2>
                <ul>
                    {!showAnswer && (
                    <li>
                        <button onClick={() => setShowAnswer(true)} class="place-self-center flex">
                            <CiSquarePlus size="2.5rem" />
                        </button>
                    </li>
                    )}
                    {showAnswer && (
                    <li>
                        <button onClick={() => setShowAnswer(false)} class="place-self-center flex">
                            <CiSquareMinus size="2.5rem"/>
                        </button>
                    </li>
                    )}
                </ul>
            </article>

            <article className={`${showAnswer && "transition-all duration-200 ease-in-out py-2 lg:py-4"}`}>
                {showAnswer && <p class="px-4 lg:px-6">{answer}</p>}
            </article>
        </div>
    )
  }