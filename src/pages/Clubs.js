import React from 'react';
import '../styles/Clubs.css';
import ClubCard from '../components/ClubCard.js';
import logo from '../assets/logo.png';
import robotics from '../assets/robotics.png';

function Clubs() {
  return (

    
    <div class="flex w-screen h-fit min-h-screen flex-col max-w-full overflow-x-hidden relative bg-blue-100">
      <link href="https://fonts.googleapis.com/css2?family=Prata&display=swap" rel="stylesheet"></link>
      <div class="flex w-fit h-fit place-self-center mt-20 text-center text-sky-950 text-[10rem] font-thin font-['Prata']">
        clubs
      </div>

      <div class="grid w-5/6 max-w-full grid-cols-3 gap-y-10 place-items-center place-self-center mb-10 mt-5 ">
        <ClubCard name="Milliken Robotics" desc="The best club at Milliken" imgSrc={robotics} link="https://www.instagram.com/mmhs.robotics/"/>
        <ClubCard name="Milliken SAC" desc="The Milliken Mills High School Student Actiity Council" imgSrc={logo} link="https://www.instagram.com/milliken_sac/"/>
        <ClubCard name="Milliken SAC" desc="The Milliken Mills High School Student Actiity Council" imgSrc={logo} link="https://www.instagram.com/milliken_sac/"/>
        <ClubCard name="Milliken SAC" desc="The Milliken Mills High School Student Actiity Council" imgSrc={logo} link="https://www.instagram.com/milliken_sac/"/>
        <ClubCard name="Milliken SAC" desc="The Milliken Mills High School Student Actiity Council" imgSrc={logo} link="https://www.instagram.com/milliken_sac/"/>
        <ClubCard name="Milliken SAC" desc="The Milliken Mills High School Student Actiity Council" imgSrc={logo} link="https://www.instagram.com/milliken_sac/"/>
      </div>
    </div>
  )
}

export default Clubs