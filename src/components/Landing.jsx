import React from 'react'
import Nav from './Nav.jsx';
import LandingHead from './LandingHead.jsx';

const Landing = () => {
  return (
    <main className='flex flex-col justify-around items-center max-sm:items-start w-full h-auto gap-5 mt-[3rem] max-sm:mt-[1rem]'>
      <Nav />
      <LandingHead/>
    </main>
  )
}

export default Landing
