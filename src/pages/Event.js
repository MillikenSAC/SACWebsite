import React from 'react'
import '../styles/Event.css'
import Calendar from '../components/Calendar'

function Event() {
  return (
    <div class="flex w-screen h-fit flex-col max-w-full overflow-x-hidden relative bg-blue-100">
      <link href="https://fonts.googleapis.com/css2?family=Prata&display=swap" rel="stylesheet"></link>
      <div class="flex w-fit h-fit place-self-center mt-20 text-center text-sky-950 text-[10rem] font-thin font-['Prata']">
        sac calendar
      </div>

      <div class="-translate-y-[3rem]">
        <Calendar/>
      </div>
    </div>
  )
}

export default Event