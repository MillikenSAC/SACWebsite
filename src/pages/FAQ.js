import React, { useState } from "react";
import '../styles/FAQ.css'
import saclogo from '../assets/logo.webp';
import { FaInstagram } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const faqs = [
    {
      question: "What events do we host?",
      answer:
        "Student council hosts annual events such as Semi Formal, Talent Show, Spirit Weeks, Carnival, and so much more. We have some exciting new events planned for this year!",
    },
    {
      question: "How can I get involved?",
      answer:
        "Applications open in early May for the following year’s team. There are appointed positions as well as elected positions. Elections take place near the end of the month, once campaign week is over.",
    },
    {
      question: "What are some benefits of joining SAC?",
      answer:
        "It is a fantastic opportunity to meet new people, grow your leadership skills, and get involved in the school community!",
    },
    {
      question: "Where do we meet?",
      answer:
        "We meet in room 314 every Tuesday after school. Drop by if you have any questions!",
    },
    {
      question: "How do I start a club?",
      answer:
        "Yay! We are so excited that you’re interested in starting a club. Firstly, you’ll need to grab a teacher advisor who has agreed to work with you. Then, gather some student interest and fill out the club form for principal approval. Finally, pitch your club to SAC for final approval.",
    },
    {
      question: "How do grants work?",
      answer: `
      Club Grant funding comes directly from the Student Activity Fee, so the number of students who pay this fee determines the amount available for grants.
      
      We run multiple grant periods annually, during which proposals can be submitted on a rolling basis. To apply for club funding from SAC:
      - Fill out the proposal form based on the success criteria (found HERE).
      - Submit it by the grant period deadline.
      - After the deadline, SAC will consider your proposal against the others submitted.
      - The proposals that best fulfill the success criteria will be awarded the grant money, based on the amount available that period.
      
      The amount available and deadline will be communicated during President's Council Meetings. Please reach out to Social Affairs with any other questions!
    `,
    },
    {
      question: "Who are your teacher advisors?",
      answer: "Ms. Virk and Mr. Birch.",
    },
  ];

  return (
    <div className="flex w-screen h-fit flex-col max-w-full overflow-x-hidden relative">
      <div className="bggradientfullFAQ"></div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Centered FAQ Section */}
        <div className="flex flex-col items-center text-center">
          <div className="h-fit w-fit py-1 mt-32 place-self-center px-2 text-sm font-semibold font-['Inter'] text-indigo-900 rounded-full inline-block bg-indigo-200">
            FREQUENTLY ASKED QUESTIONS
          </div>
          <link
            href="https://fonts.googleapis.com/css2?family=Prata&display=swap"
            rel="stylesheet"
          ></link>
          <div className="flex w-fit h-fit place-self-center relative text-center text-sky-950 lg:text-[5rem] text-[3rem] font-thin font-['Prata']">
            Your Questions Answered
          </div>
  
          <div className="accordion-group w-full max-w-2xl z-10 mt-6 mb-20">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`accordion border-b border-solid border-gray-800 py-6 ${
                  activeIndex === index ? "active" : ""
                }`}
              >
                <button
                  className="accordion-toggle flex items-center justify-between w-full text-xl font-medium text-gray-600 hover:text-indigo-600 transition duration-500"
                  onClick={() => toggleFAQ(index)}
                >
                  <h5>{faq.question}</h5>
                  <svg
                    className={`transition-transform duration-500 ${
                      activeIndex === index ? "rotate-180" : ""
                    }`}
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </button>
                <div
                  className={`accordion-content overflow-hidden transition-all duration-500 ${
                    activeIndex === index ? "max-h-[300px]" : "max-h-0"
                  }`}
                  style={{
                    maxHeight: activeIndex === index ? "300px" : "0",
                  }}
                >
                  <div className="mt-4 text-gray-600 text-base text-left">
                    {faq.answer.split("\n").map((line, i) => {
                      if (line.trim().startsWith("-")) {
                        const text = line.replace("-", "").trim();
                        const isLink = text.includes("HERE");
                        if (isLink) {
                          const [beforeLink, afterLink] = text.split("HERE");
                          return (
                            <li key={i} className="ml-4 list-disc">
                              {beforeLink.trim() + " "}
                              <a
                                href="https://docs.google.com/document/d/1JZ2KVYu4j0xglI_4MJyvIL0HfS58rinpue751IxDi4c/edit?usp=sharing"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-indigo-600 hover:underline"
                              >
                                here
                              </a>{" "}
                              {afterLink.trim()}
                            </li>
                          );
                        }
                        return (
                          <li key={i} className="ml-4 list-disc">
                            {text}
                          </li>
                        );
                      }
                      return line.trim() ? (
                        <p key={i} className="mb-2">
                          {line.trim()}
                        </p>
                      ) : null;
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Footer */}
    <footer className="text-black py-6 mt-auto px-6">
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        
        {/* Logo section - centering adjustment */}
        <div className="flex justify-center mb-4 sm:mb-0 sm:justify-start">
          <img
            src={saclogo}
            alt="School Logo"
            className="h-16 w-auto mx-auto sm:mx-0"
          />
        </div>

        {/* School info */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 mt-4 sm:mt-0">
          <div className="text-center sm:text-left text-sm leading-6">
            <p className="font-normal">7522 Kennedy Rd</p>
            <p className="font-normal">Markham ON L3R 9S5</p>
            <p className="font-normal">(905) 477-0072</p>
          </div>

          {/* Social icons */}
          <div className="flex space-x-4 justify-center sm:justify-end sm:flex-grow mt-4 sm:mt-0">
            <a
              onClick={() => window.open("https://www.instagram.com/milliken_sac/", '_blank')}
              className="group relative block"
            >
              <div className="w-8 h-8 flex items-center justify-center transition-transform group-hover:scale-110 duration-200 ease-in-out">
                <FaInstagram
                  className="text-indigo-900 group-hover:text-indigo-600 duration-200 ease-in-out"
                  size={32}
                />
              </div>
            </a>
            <a
              onClick={() => window.open("https://github.com/MillikenSAC", '_blank')}
              className="group relative block"
            >
              <div className="w-8 h-8 flex items-center justify-center transition-transform group-hover:scale-110 duration-200 ease-in-out">
                <FaGithub
                  className="text-indigo-900 group-hover:text-indigo-600 duration-200 ease-in-out"
                  size={32}
                />
              </div>
            </a>
          </div>
        </div>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
    </div>
  </footer>
    </div>
  );  
}


export default FAQ;
