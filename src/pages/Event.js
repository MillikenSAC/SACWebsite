import React from 'react'
import '../styles/Event.css'
import Calendar from '../components/Calendar'

function Event() {
  return (
    <div class="flex w-screen h-fit flex-col max-w-full overflow-x-hidden relative bg-gray-50">
      <link href="https://fonts.googleapis.com/css2?family=Prata&display=swap" rel="stylesheet"></link>   
      <div class="flex w-fit h-fit place-self-center mt-20 mb-5 text-center text-sky-950 lg:text-[6rem] md:text-[4rem] text-[3rem] font-thin font-['Prata']">
          SACtivities 
      </div>

      <div class="-translate-y-[3rem]">
        <Calendar/>
      </div>
    </div>
  )
}

export default Event