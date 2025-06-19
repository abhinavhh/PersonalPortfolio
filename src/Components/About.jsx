import ScrollAnimation from '../Animations/ScrollAnimation'
const About = () => {
  return (
    <section id='about'
        class="mt-16 px-12 pt-6">
        <div class="">
            <div class="sm:grid items-center sm:grid-cols-1 md:grid-cols-2 flex flex-col-reverse">
                <div>
                    <img src="" alt="my-image" />
                </div>
                <div>
                    <ScrollAnimation animation='slideUp'>
                        <h2 class="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">About Me</h2>
                    </ScrollAnimation>
                    <ScrollAnimation animation='slideRight'>
                        <p class="mt-3 text-lg leading-relaxed">
                        BTech student passionate about Full Stack development. Currently, I am learning and exploring various technologies to enhance my skills in this field. I have experience in web development and I enjoy working on projects that challenge me to learn and grow.
                        </p>
                    </ScrollAnimation>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About
