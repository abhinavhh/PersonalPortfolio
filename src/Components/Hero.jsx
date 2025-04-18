import React from 'react'
import profile from '../assets/Me.png'
import gradient from '../assets/Gradient.png'
const Hero = () => {
  return (
    <section className=" dark:bg-gray-900 flex items-center justify-center">
        <div className="flex flex-col-reverse items-center justify-between max-w-screen-xl px-4 py-8 md:flex-row">
            <div className="place-self-center lg:col-span-7">
                <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Hello! <br />I am <span className='text-cyan-600'>Abhinav Anil</span></h1>
                <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">I'm a FullStack Developer</p>
            </div>
            <div 
                // style={{backgroundImage:`url(${gradient})`}}
                className="flex items-center justify-center md:bg-transparent mb-6">
                <img 
                    src={profile} 
                    alt="profile"
                />
            </div>                
        </div>
    </section>
  )
}

export default Hero
