import React from 'react'
import ScrollAnimation from '../Animations/ScrollAnimation'
const Projects = () => {
  return (
    <div id="projects" className='text-black mt-16 px-12 pt-6'>
      <ScrollAnimation animation="scale">
            <h2 className="text-black text-4xl font-bold mb-16">Projects</h2>
          </ScrollAnimation>

          <div className="grid md:grid-cols-3 gap-8 mb-32">
            <ScrollAnimation animation="slideUp" delay={0}>
              <div className="bg-white p-6 rounded-lg shadow-lg h-64 flex items-center justify-center">
                <h3 className="text-2xl font-bold text-center">Slide Up</h3>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation animation="slideRight" delay={200}>
              <div className="bg-white p-6 rounded-lg shadow-lg h-64 flex items-center justify-center">
                <h3 className="text-2xl font-bold text-center">Slide Right</h3>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation animation="scale" delay={400}>
              <div className="bg-white p-6 rounded-lg shadow-lg h-64 flex items-center justify-center">
                <h3 className="text-2xl font-bold text-center">Scale In</h3>
              </div>
            </ScrollAnimation>
          </div>
    </div>
  )
}

export default Projects
