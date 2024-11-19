import React from 'react'
import '../styles/FAQ.css'
import Question from '../components/Question'

function FAQ() {
  return (
    <div class="flex w-screen h-fit flex-col max-w-full overflow-x-hidden relative">
      <div className="bggradientfullFAQ"></div>
      <div class="h-fit w-fit py-1 mt-32 place-self-center px-2 text-sm font-semibold font-['Inter'] text-indigo-900 rounded-full inline-block bg-indigo-200 ">FREQUENTLY ASKED QUESTIONS</div>
      <link href="https://fonts.googleapis.com/css2?family=Prata&display=swap" rel="stylesheet"></link>
      <div class="flex w-fit h-fit place-self-center relative text-center text-sky-950 lg:text-[5rem] text-[3rem] font-thin font-['Prata']">
        Your questions answered.
      </div>

      <div class="flex flex-col my-14 gap-y-6">
        <Question question="What events do we host?" answer="Student council hosts annual events such as Semi Formal, Talent Show, Spirit Weeks, Carnival and so much more. We have some exciting new events planned for this year!"/>
        <Question question="How can I get involved?" answer="Applications open in early May for the following year’s team. There are appointed positions as well as elected positions. Elections take place near the end of the month, once campaign week is over. "/>
        <Question question="What are some benefits of joining SAC?" answer="It is a fantastic opportunity to meet new people, grow your leadership skills, and get involved in the school community! "/>
        <Question question="Where do we meet?" answer="We meet in room 314 every Tuesday after school. Drop by if you have any questions! "/>
        <Question question="How do I start a club?" answer="Yay! We are so excited that you’re interested in starting a club. Firstly you’ll need to grab a teacher advisor who has agreed to work with you. You will then need to go around the school and gather some student interest. Compile a list of people who may be interested in joining your club! Then fill out this form with detailed information, to be submitted to the principal for approval. Once you have been approved, your final step will be pitching your club to SAC at one of our meetings afterschool. If you get our approval as well, congratulations! You have just started a new club at Milliken. "/>
        <Question question="How do I start an event?" answer="Creating an event is similar to club process, you’ll need to submit an application through this form. Once the principal approves your event, you will then need to pitch to SAC in order to run the event. We suggest proposing events one month in advance due to backlogs with admin. "/>
        <Question question="How do grants work? (tentative)" answer="something here"/>
        <Question question="What is the SE fee? " answer="The SE fee is an optional fee that goes towards funding student activities. Students who have paid the SE fee will be eligible for discounted tickets, merch and other events throughout the year. "/>        
        <Question question="Who are your teacher advisors?" answer="Ms Virk and Mr Birch"/>
        <Question question="I have more questions who do I ask!?" answer="Feel free to email Emily: 341085132@gapps.yrdsb.ca or Steven: 349903153@gapps.yrdsb.ca or drop by one of our bimonthly Town Halls! 
        
"/>


      </div>
    </div>
  )
}

export default FAQ