import React from 'react'
import profile from '../assets/Me.png'
const Hero = () => {
  return (
    <section id="home" className="mt-16 px-12 flex items-center justify-around flex-col-reverse md:flex-row">
        <div className='flex justify-start flex-col'>
            <div className="lg:flex gap-2 font-bold text-5xl leading-tight">
                <h1>
                 Hello,
                </h1>
                <h1>This is <span className='text-blue-900'>Abhinav Anil</span>
                </h1>
            </div>
            <p className='text-xl font-normal'>Full Stack Developer</p>
        </div>
        <div>
            <div 
                // style={{backgroundImage:`url(${gradient})`}}
                >
                <img 
                    src={profile} 
                    alt="profile"
                    className='h-auto mx-auto object-contain'
                />
            </div> 
        </div>
    </section>
  )
}

export default Hero
