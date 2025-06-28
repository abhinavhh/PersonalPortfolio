
import heroImage from "../assets/Me.png";
import { Button } from "@mui/material";
import { Instagram, LinkedIn, GitHub} from "@mui/icons-material";
import SocialButton from "./Button";
const Hero = () => {

    const handleResumeOpen = () => {
        window.open('../../public/ABHINAV U (5).pdf')
    }
  return (
    <section id='home'
        className='mt-16 p-12 flex flex-col-reverse justify-center items-center md:flex-row gap-10 lg:justify-around lg:px-2'
    >
        <div className="flex flex-col justify-center items-center gap-4 md:items-start">
            <div className="mt-6 text-justify px-6 items-center">
                <h1 className='text-3xl flex flex-col font-bold'>
                    Hi, <span className='text-5xl font-bold text-blue-800'>
                            I'm Abhinav
                        </span>
                    <p className='text-base'>
                        B.Tech 2025 graduate passionate about crafting efficient software solutions.
                    </p>
                </h1>
                Full-Stack Developer | Problem Solver | Tech Enthusiast
            </div>
            <div className='flex items-center justify-center gap-4 md:ml-6'>
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
        <div className="lg:mr-12">
            <img src={heroImage} 
            alt="image"
            className="md:w-[300px] lg:w-[350px]"
            />
        </div>
    </section>
  )
}

export default Hero
