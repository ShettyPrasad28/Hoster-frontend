import React from 'react'

const Body = () => {
  return (
    <div className='space-y-8 lg:flex'>
      <div className="flex items-center justify-center lg:flex-1 lg:order-2 lg:justify-end">
        <img src="./assets/Blue-Shape.svg" alt="1st-image" className="-rotate-45 h-72 md:h-96 lg:h-[400px]"/>
        <img src="./assets/Pink-Shape.svg" alt="2nd-image"className="absolute -rotate-[30deg] h-72 md:h-96 lg:h-[400px]"/>
        <img src="./assets/Purple-Shape.svg" alt="3rd-image"className="absolute -rotate-[15deg] h-72 md:h-96 lg:h-[400px]" />
        <img src="./assets/Hero-Model.png" alt="hero" className='absolute h-72 md:h-96 lg:h-[400px]'/>
      </div>
      <div className="space-y-3 lg:flex-1 lg:order-1">
        <h1 className="text-5xl font-bold font-playfair leading-tight">Host your website in less than  5 minutes</h1>
        <p className='font-lato text-gray-500 '>With Hoster , got your website up and running in no less than 5 minuteswith the most competitive pricing packages available online</p>
        <form action="" className="flex flex-col gap-4 md:flex-row">
          <input className="rounded-md px-4 py-3 placeholder:text-gray-500 "type="email" placeholder='Enter email address'  />
          <button className="rounded-md px-4 py-3 bg-blue-400 hover:bg-blue-600 text-white">Join waitlist</button>
        </form>
        <div className='flex gap-2'>
          <img className=""src="./assets/Checkmark.svg" alt="check" />
          <p className='font-lato text-gray-400'>No spam,ever.Unsubscribe anytime</p>
        </div>
      </div>
    </div>
  )
}

export default Body