import React, { useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet';
import '../styles/Clubs.css';
import ClubResourceCard from '../components/ClubResourceCard.js';
import { useLocation } from 'react-router-dom';
import saclogo from '../assets/logo.webp';
import { FaInstagram } from 'react-icons/fa';
import { clubResources } from '../data/ClubData.js';

function Election() {
  const location = useLocation();
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);

  const contentRefs = useRef([]);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const faqs = [
    {
      question: 'General Information',
      answer: (
        <div className="text-gray-700 space-y-4">
          <h4 className="font-semibold">Role Description</h4>
          <ol className="list-decimal ml-6 space-y-2">
            <li>
                  Grade Representatives are responsible for representing the views and opinions of their grade during Council meetings. 
            </li>
            <li>
                  They are responsible for sharing information regarding Council activities with these same peers.
            </li>
            <li>
                  Grade Representatives must actively seek information from their grade at least once per semester.
            </li>
            <li>
                  Grade Representatives must assist the Publicity Coordinators with their duties.
            </li>
          </ol>
            <div className='text-center'>
                <a href='https://docs.google.com/presentation/d/1B_-UBoakgpcRh7o5l7G_A9UaDZDajy8ceR-WmomgOw4/edit?usp=sharing'
                target="_blank"
                rel="noopener noreferrer"
                className='text-indigo-600 hover:underline text-center'>See Info Sesion Slideshow Here.</a>
            </div>
        </div>
      ),
    },
    {
      question: 'Election Procedures',
      answer: (
        <div className="text-gray-700 space-y-4">
          <h4 className="font-semibold">A. General Principles</h4>
          <ol className="list-decimal ml-6 space-y-2">
            <li>
              <span className="font-medium">Qualifications</span>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>
                  Grade 9 Representative candidates are required to have a minimum 60% average with no individual marks below 50%. Administration has final say on a candidate's inclusion on the ballot. 
                </li>
                <li>Grade 9 Representative candidates must be enrolled in Milliken Mills High School as a grade 9 student.</li>
              </ul>

            </li>
          </ol>

          <h4 className="font-semibold">B. Election Procedure</h4>
          <ol className="list-decimal ml-6 space-y-4">
            <li>
              <span className="font-medium">Campaign Regulation</span>
              <br></br>
              <br></br>
              <span className="font-medium">a. Campaign Materials</span>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>No attack or negative campaigning toward other candidates.</li>
                <li>All campaign materials must be approved by administration.</li>
                <li>
                  Candidates who fail to submit speeches before the deadline will be unable to deliver a speech.
                </li>
                <li>Maximum of <strong>10 posters</strong> (8.5&quot; × 11&quot;) and <strong>1 banner</strong> in the school.</li>
              </ul>

                <br></br>
              <span className="font-medium">b. Campaign Materials</span>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>Candidates will give a speech to the Grade 9 student body on <strong>Monday, September 15th</strong>.</li>
              </ul>
            </li>

            <li>
              <span className="font-medium">Voting</span>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>Voting will take place after the speeches until the end of <strong>Period 1</strong>.</li>
                <li>All Grade 9 students enrolled at Milliken Mills High School are eligible to vote.</li>
              </ul>
            </li>
          </ol>

        <div className='text-center'>
            <a href='https://docs.google.com/document/d/1UhgZyAxfrJhouzjkL_tYfi1tfC8WFcUGqqaIdTZ6SQM/edit?usp=sharing'
            target="_blank"
            rel="noopener noreferrer"
            className='text-indigo-600 hover:underline text-center'>See Official Document Here.</a>
        </div>
        
        </div>
      ),
    },
    {
    question: "Election Rules",
    answer: (
        <div className="text-gray-700 space-y-4">
        <p>
            As a grade 9 Representative candidate you are bound by certain campaign rules. Failure to abide by these rules can lead to disqualification at the discretion of SAC and Administration.
        </p>

        <h4 className="font-semibold">Campaign Timeline</h4>
        <ul className="list-disc ml-6 space-y-1">
            <li>Campaigning is allowed from <strong>Monday, Sept 8</strong> to <strong>Friday, Sept 12</strong>.</li>
            <li>Approved candidates will be contacted via GAPPS email on <strong>Sunday, Sept 7</strong>.</li>
            <li>Speeches must be submitted for approval by <strong>Wednesday, Sept 10 at 11:59 p.m.</strong> Email walter.birch@gapps.yrdsb.ca</li>
            <li>All materials must be removed by <strong>by Wednesday, Sept 17</strong>.</li>
        </ul>

        <h4 className="font-semibold">Posters & Banners</h4>
        <ul className="list-disc ml-6 space-y-1">
            <li>Only place posters on <strong>concrete walls and pillars</strong>. Posters on metal, lockers, doors,
            drywall, or glass will be removed.</li>
            <li>All posters must have administrative approval 
            (Mr. Melnyk, Ms. Wonnacott, or Ms. Schuur) before posting.</li>
            <li>Limit: <strong>10 posters</strong> (8.5” × 11”) and <strong>1 banner</strong> per candidate.</li>
            <li>
            Suggestion: Hand in posters in the morning for approval by the end of the day.
            Colour copies/printing are at your own expense.
            </li>
            <li>Fasten posters/banners with <strong>string, masking tape, or sticky tack ONLY</strong>.</li>
            <li>
            Banner paper and art supplies are available in the SAC office.
            Email Steven Tang (349903153@gapps.yrdsb.ca) and Tristin Tran (348858887@gapps.yrdsb.ca)
            to request supplies. Use responsibly and clean up after use.
            </li>
            <li>Do not cover or remove another candidate’s posters.</li>
        </ul>

        <h4 className="font-semibold">Candidate Speeches</h4>
        <ul className="list-disc ml-6 space-y-1">
            <li>Speeches will take place on <strong>Friday, Sept 20 during Period 1</strong>.</li>
            <li>Arrive a few minutes early for the assembly.</li>
            <li>Timing is subject to change.</li>
        </ul>

        <div className='text-center'>
            <a href='https://docs.google.com/document/d/10Hc_s6nYcGCY-c7ULKNcFs_FQzoJTE6_xgzbfkG_a_A/edit?usp=sharing'
            target="_blank"
            rel="noopener noreferrer"
            className='text-indigo-600 hover:underline text-center'>See Official Document Here.</a>
        </div>
        </div>
    )
    },
    {
    question: "Important Dates",
    answer: (
        <div className="text-gray-700 space-y-3">
        <div className="overflow-x-auto rounded-lg border border-indigo-900">
            <table className="min-w-full table-auto text-left">
            <thead className="border border-b-black">
                <tr>
                <th className="px-4 py-3 text-sm font-semibold text-gray-700">Date / Time</th>
                <th className="px-4 py-3 text-sm font-semibold text-gray-700">Purpose</th>
                </tr>
            </thead>
            <tbody className="divide-y divide-indigo-900">
                <tr>
                <td className="px-4 py-3 align-top">
                    <div>Thursday, September 4</div>
                    <div className="text-sm text-gray-500">3:30 p.m.</div>
                </td>
                <td className="px-4 py-3">Info session for the Grade 9 Representative election.</td>
                </tr>

                <tr>
                <td className="px-4 py-3 align-top">
                    <div>Thursday, September 4 – Saturday, September 6</div>
                </td>
                <td className="px-4 py-3">
                    Click this link to access the Application Form:&nbsp;
                    <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLScsqGPDAbly55clrzgxhbJDxwxkGLXCaWHTYIk7j4CpJ8ow-Q/viewform"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-600 underline hover:no-underline"
                    >
                    Here
                    </a>
                </td>
                </tr>

                <tr>
                <td className="px-4 py-3 align-top">
                    <div>Saturday, September 6</div>
                    <div className="text-sm text-gray-500">Due by 11:59 p.m.</div>
                </td>
                <td className="px-4 py-3">Application Form due.</td>
                </tr>

                <tr>
                <td className="px-4 py-3">Sunday, September 7</td>
                <td className="px-4 py-3">Approved candidates will be informed by email by the end of the day.</td>
                </tr>

                <tr className="">
                <td className="px-4 py-3">Monday, September 8 – Friday, September 12</td>
                <td className="px-4 py-3 font-semibold">CAMPAIGN PERIOD</td>
                </tr>

                <tr>
                <td className="px-4 py-3 align-top">
                    <div>Wednesday September 10</div>
                    <div className="text-sm text-gray-500">Due by 11:59 p.m.</div>
                </td>
                <td className="px-4 py-3">Speech Submission</td>
                </tr>

                <tr>
                <td className="px-4 py-3 align-top">
                    <div>Monday, September 15 </div>
                    <div className="text-sm text-gray-500">Period 1</div>
                </td>
                <td className="px-4 py-3">Candidate speeches</td>
                </tr>

                <tr>
                <td className="px-4 py-3 align-top">
                    <div>Monday, September 15</div>
                    <div className="text-sm text-gray-500">End of Speeches: End of Period 1</div>
                </td>
                <td className="px-4 py-3">
                    Voting opens at the end of the campaign speeches
                </td>
                </tr>

                <tr>
                <td className="px-4 py-3">Tuesday, September 16</td>
                <td className="px-4 py-3">Grade 9 Representative announced by announcement and joins the SAC meeting after school at 3:30 p.m.!</td>
                </tr>

                <tr>
                <td className="px-4 py-3">Wednesday, September 17</td>
                <td className="px-4 py-3">All campaign materials (posters, banners) must be removed by 4:30 p.m.</td>
                </tr>

               
            </tbody>
            </table>
        </div>

        <p className="text-sm italic text-gray-600">
            Candidates will receive an email for any changes.
        </p>
        </div>
    ),
    }
  ];

  return (
    <>
      <Helmet>
        <title>Election Info | Milliken SAC</title>
        <meta
          name="description"
          content="Grade 9 Representative Elections — information session slides, procedures, rules, and key dates."
        />
        <meta property="og:title" content="Election Info | Milliken SAC" />
        <meta
          property="og:description"
          content="Grade 9 Representative Elections — information session slides, procedures, rules, and key dates."
        />
        <meta
          property="og:image"
          content="https://www.millikensac.com/static/media/logo.d3847a72bdbc78d4577d.webp"
        />
        <meta property="og:url" content="https://www.millikensac.com/election" />
      </Helmet>

      <div className="flex w-screen h-fit min-h-screen flex-col max-w-full overflow-x-hidden relative bg-gray-50">
        <div className="bggradientfull"></div>

        <link
          href="https://fonts.googleapis.com/css2?family=Prata&display=swap"
          rel="stylesheet"
        ></link>

        <div className="flex w-fit h-fit place-self-center mt-28 text-center text-sky-950 lg:text-[5rem] text-[3rem] font-thin font-['Prata']">
          Election Info
        </div>

        <div class="w-screen place-items-center place-content-center">
            <div class="z-20 w-4/6 md:flex pb-10 hidden text-neutral-800 justify-center text-center text-xs md:text-sm lg:text-lg xl:text-l font-['Inter']">Welcome Grade 9s! Here’s everything you need to know about running for Student Council Rep. Check out the details below to stay informed and prepared.</div>
        </div>

        {/* Election info / Accordion */}
        <div className="flex flex-col items-center text-center mx-4">
          <div className="accordion-group w-full max-w-2xl z-10 mt-6 mb-20">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`accordion border-b border-solid border-gray-800 py-6 ${
                  activeIndex === index ? 'active' : ''
                }`}
              >
                <button
                  className="accordion-toggle flex items-center justify-between w-full text-xl font-medium text-gray-700 hover:text-indigo-600 transition duration-500"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={activeIndex === index}
                  aria-controls={`faq-panel-${index}`}
                >
                  <h5 className="text-left">{faq.question}</h5>
                  <svg
                    className={`transition-transform duration-500 ${
                      activeIndex === index ? 'rotate-180' : ''
                    }`}
                    width="22"
                    height="30"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
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
                  id={`faq-panel-${index}`}
                  ref={(el) => (contentRefs.current[index] = el)}
                  className="accordion-content overflow-hidden transition-[height] duration-500 ease-in-out text-left"
                  style={{
                    height:
                      activeIndex === index && contentRefs.current[index]
                        ? `${contentRefs.current[index].scrollHeight}px`
                        : '0px',
                  }}
                >
                  <div className="mt-4 text-base">
                    {React.isValidElement(faq.answer) ? (
                      faq.answer
                    ) : (
                      <p className="text-gray-700 whitespace-pre-wrap">{faq.answer}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <footer className="text-black py-6 mt-auto px-6">
          <div className="w-full mx-auto p-4 md:py-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              {/* Logo */}
              <div className="flex justify-center mb-4 sm:mb-0 sm:justify-start">
                <img src={saclogo} alt="School Logo" className="h-16 w-auto mx-auto sm:mx-0" />
              </div>

              {/* School info + social */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 mt-4 sm:mt-0">
                <div className="text-center sm:text-left text-sm leading-6">
                  <p className="font-normal">7522 Kennedy Rd</p>
                  <p className="font-normal">Markham ON L3R 9S5</p>
                  <p className="font-normal">(905) 477-0072</p>
                </div>

                <div className="flex space-x-4 justify-center sm:justify-end sm:flex-grow mt-4 sm:mt-0">
                  <button
                    onClick={() =>
                      window.open('https://www.instagram.com/milliken_sac/', '_blank')
                    }
                    className="group relative block"
                    aria-label="Open Milliken SAC Instagram in a new tab"
                  >
                    <div className="w-8 h-8 flex items-center justify-center transition-transform group-hover:scale-110 duration-200 ease-in-out">
                      <FaInstagram
                        className="text-indigo-900 group-hover:text-indigo-600 duration-200 ease-in-out"
                        size={32}
                        aria-hidden="true"
                      />
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          </div>
        </footer>
      </div>
    </>
  );
}

export default Election;
