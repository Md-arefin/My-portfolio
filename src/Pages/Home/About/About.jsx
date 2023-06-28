import React from 'react';
import { LiaUserSecretSolid } from 'react-icons/lia';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className='my-16'>
            <div className='flex items-center justify-center gap-5 mb-10'>
                <LiaUserSecretSolid className='text-3xl' />
                <h1 className='text-center text-3xl font-bold'>About me</h1>
            </div>

            <div className='flex items-center justify-evenly gap-5 flex-col md:flex-row '>
                <div className='lg:w-1/2 px-10 lg:ml-[150px]'>
                    <img className='lg:w-[70%] rounded-3xl' src="https://i.ibb.co/NCtyc0J/my-1-1.jpg" alt="" />
                </div>
                <div className='lg:w-1/2 lg:mr-[100px] px-2'>
                    <h3 className='text-3xl font-bold mb-5'>A dedicated Front-end Developer</h3>
                    <p className='px-2'>
                        As a passionate and dedicated full stack developer, I recently completed an online course in web development from <Link className='font-bold text-xl' to='https://web.programming-hero.com/home/'>ProgrammingHero</Link>. I thrive on coding and continually exploring new horizons. With a diverse skill set, I can tackle challenges from both the front-end and back-end aspects of web development. I've built personal projects that showcase my skills and ability to transform ideas into functional websites. Starting small, I've solidified my understanding of fundamental concepts and taken on more complex assignments. This hands-on experience hones my handle error and solving bug and fosters a growth mindset capabilities. I actively engage in coding communities, connecting with like-minded individuals, sharing knowledge, and staying updated on industry trends. Eager to embark on new challenges, contribute my expertise to innovative projects, and continue learning, I am ready to make a positive impact as a full stack developer. With a solid foundation in web development and a passion for exploring new technologies, I'm poised to create meaningful solutions in the digital landscape.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;