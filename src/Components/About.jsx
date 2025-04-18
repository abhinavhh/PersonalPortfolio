import React from 'react'
import profile from '../assets/abhinavImg2.jpeg.png'
import ScrollAnimation from '../Animations/ScrollAnimation'
const About = () => {
  return (
    <section id='about'
        class="pt-10 overflow-hidden md:pt-0 sm:pt-16 2xl:pt-16">
        <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div class="grid items-center grid-cols-1 md:grid-cols-2">

                <div>
                    <ScrollAnimation animation='slideUp'>
                        <h2 class="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">About Me</h2>
                    </ScrollAnimation>
                    <ScrollAnimation animation='slideRight'>
                        <p class="max-w-lg mt-3 text-xl leading-relaxed text-gray-600 md:mt-8">
                        BTech student passionate about Full Stack development. Currently, I am learning and exploring various technologies to enhance my skills in this field. I have experience in web development and I enjoy working on projects that challenge me to learn and grow.
                        </p>
                    </ScrollAnimation>
                </div>

                <div class="relative">
                    <img class="absolute inset-x-0 bottom-0 -mb-48 -translate-x-1/2 left-1/2" src="https://cdn.rareblocks.xyz/collection/celebration/images/team/1/blob-shape.svg" alt="" />

                    <img class="relative w-full xl:max-w-lg xl:mx-auto 2xl:origin-bottom 2xl:scale-110" src={profile} alt="" />
                </div>

            </div>
        </div>
    </section>
  )
}

export default About
