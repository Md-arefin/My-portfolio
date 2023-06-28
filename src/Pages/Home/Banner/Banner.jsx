import React from 'react';
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import { BiDownload, BiCodeAlt } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const Banner = () => {



    const handleDownloadResume = () => {
        const resumeUrl = 'https://drive.google.com/file/d/1G6oxPaJ6v2srwkytfb0Ry5e1th5yOwmZ/view?usp=drive_link'
        const downloadLink = document.createElement('a');
        downloadLink.href = resumeUrl;
        downloadLink.download = 'Resume-of-Rakibul-Ansari-Arifin.pdf';
        downloadLink.click();
    };

    return (
        <section className='my-16'>
            <div className='flex flex-col-reverse gap-10 md:flex-row md:mx-16'>
                <div className='md:w-1/2 mt-16 px-5'>
                    <h1>
                        Hi, I am <br />
                    </h1>
                    <p className='mt-5 text-3xl md:text-5xl font-bold'>Rakibul Ansari Arifin</p>
                    <p className='my-5 font-semibold text-lg'>MERN Stack Developer</p>
                    <p>
                        Welcome to my portfolio, where innovation meets functionality. As a MERN Stack Developer, I specialize in creating robust and scalable web applications. With a passion for seamless user experiences and a knack for transforming ideas into MERN-powered solutions, I bring your digital vision to life. Explore my work and let's embark on a journey of code, creativity, and limitless possibilities.
                    </p>
                    <div className='flex flex-col md:flex-row gap-10 my-5'>


                        <div onClick={handleDownloadResume} className="btn bg-rose-700 rounded text-lg flex justify-between">
                            <button >My Resume</button>
                            <BiDownload className='text-2xl' />
                        </div>

                        <Link to='/projects'>
                            <div className="btn bg-white text-black rounded text-lg flex justify-between hover:text-white">
                                <button>My Projects</button>
                                <BiCodeAlt className='text-2xl' />
                            </div>
                        </Link>

                    </div>
                </div>

                <div className='md:w-[50%] mx-5'>
                    <Player
                        className='w-[80%]'
                        autoplay
                        loop
                        src="https://assets2.lottiefiles.com/packages/lf20_yJVY8r9xVg.json"

                    >
                        <Controls visible={!true} buttons={['play', 'repeat', 'frame', 'debug']} />
                    </Player>
                </div>
            </div>
        </section>
    );
};

export default Banner;