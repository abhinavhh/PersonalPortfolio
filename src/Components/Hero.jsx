
import heroImage from "../assets/Me.png";
import { Button } from "@mui/material";
import { Instagram, LinkedIn, GitHub} from "@mui/icons-material";
import SocialButton from "./Button";
const Hero = () => {

    const handleResumeOpen = () => {
        window.open('../../public/ABHINAV U (5).pdf')
    }
  return (
    <section id='home' className='mt-16 flex flex-col-reverse justify-center items-center md:flex-row md:gap-12 overflow-x-hidden px-4 md:mt-24'>
        <div className="flex flex-col gap-4 md:items-start">
            <div className="mt-6 text-justify flex flex-col gap-2 text-base">
                <h1 className='text-5xl flex gap-3 md:flex-col font-bold'>
                    Hey, <span className='text-5xl font-bold text-blue-800'>
                            I'm Abhinav
                        </span>
                   
                </h1>
                <p className='text-base font-bold'>
                        B.Tech 2025 graduate passionate about crafting efficient software solutions.
                </p>
                Full-Stack Developer | Problem Solver | Tech Enthusiast
            </div>
            <div className='flex gap-8'>
                <div className='flex items-start gap-4 '>
                    <SocialButton icon={GitHub} label="GitHub" link="https://github.com/abhinavhh" color="#00000"/>
                    <SocialButton icon={LinkedIn} label="GitHub" link="https://www.linkedin.com/in/abhinav-u-212b64286/" color="#00000"/>
                    <SocialButton icon={Instagram} label="GitHub" link="https://www.instagram.com/abhinavanil1830?igsh=MTJoc3hjeWlmbmRtag==" color="#00000"/>  
                </div>
                <div>
                    <button 
                        className="border-2 px-2 py-0.5 rounded-2xl text-cyan-400 bg-black font-bold md:ml-6"
                        onClick={handleResumeOpen}
                    >
                        Resume
                    </button>
                </div>
            </div>
            
        </div>
        <div className="md:ml-4">
            <img src={heroImage} 
            alt="image"
            className="mt-6 w-full max-w-[350px]"
            />
        </div>
    </section>
  )
}

export default Hero
