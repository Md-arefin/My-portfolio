import React from 'react';
import { AiOutlineFundProjectionScreen } from 'react-icons/ai';
import { HiLink } from 'react-icons/hi';
import { BsGithub, BsFillCarFrontFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Projects = () => {
    return (
        <div className='my-16 py-10'>
            <div className='flex items-center justify-center gap-5'>
                <AiOutlineFundProjectionScreen className='text-3xl' />
                <h1 className='text-center text-3xl font-bold'>My Projects</h1>
            </div>


            <div className='my-16 md:w-[85%] mx-auto'>

                <div className='flex flex-col-reverse md:flex-row justify-between gap-10'>
                    <div className='lg:w-1/2'>
                        <div className='flex gap-5'>
                            <BsFillCarFrontFill className='text-3xl mt-2 text-rose-700'/>
                            <h2 className='text-3xl font-bold mb-5'> SpeedyWheel</h2>
                        </div>
                        <p>
                            SpeedyWheel is a modern rental car site powered by React, Tailwind, DaisyUI, Stripe, Node.js, Express, Firebase, and MongoDB. The website features a sleek design with responsive layouts, ensuring a seamless user experience across devices.

                            For secure and convenient payments, SpeedyWheel integrates Stripe, a trusted payment gateway. Node.js and Express provide a robust backend infrastructure to handle business logic and data management effectively.

                            Using Firebase, SpeedyWheel simplifies authentication, database management, and hosting, ensuring reliable performance and real-time updates. MongoDB serves as the efficient database solution for data storage and retrieval.

                            SpeedyWheel leverages various npm packages to enhance functionality and streamline development processes. This powerful tech stack enables SpeedyWheel to deliver a speedy, reliable, and user-friendly rental car experience.
                        </p>
                        <div className='mt-10 text-center flex flex-col md:flex-row gap-10 items-center justify-center mb-32'>
                            <div className="text-lg btn bg-rose-600 hover:bg-black hover:text-white rounded-xl uppercase m-1 lg:w-[250px] ">
                                <button >Live link</button>
                                <HiLink className='text-white text-lg' />
                            </div>
                            <details className="dropdown">
                                <summary className="bg-white text-black hover:bg-black  hover:text-white rounded-xl uppercase m-1 lg:w-[250px] btn">
                                    <BsGithub className='text-lg' />
                                    GitHub
                                </summary>

                                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                                    <li className='bg-rose-600 rounded-lg text-lg font-semibold'>
                                        <Link><BsGithub className='text-lg' /> Client Side</Link>
                                    </li>
                                    <li className='bg-rose-600 rounded-lg text-lg font-semibold mt-5'>
                                        <Link><BsGithub className='text-lg' /> Server Side</Link>
                                    </li>
                                </ul>
                            </details>
                        </div>
                    </div>
                    <div className='lg:mt-20'>
                        <img className='rounded-xl' src="https://i.ibb.co/TwR7ynH/Screenshot-41-1.png" alt="" />
                    </div>
                </div>


                {/* 2*/}
                <div className='flex flex-col md:flex-row justify-between gap-10'>
                    <div className='lg:mt-20'>
                        <img className='rounded-xl' src="https://i.ibb.co/TwR7ynH/Screenshot-41-1.png" alt="" />
                    </div>
                    <div className='lg:w-1/2'>
                        <h2 className='text-center text-3xl font-bold mb-5'>SpeedyWheel</h2>
                        <p>
                            SpeedyWheel is a modern rental car site powered by React, Tailwind, DaisyUI, Stripe, Node.js, Express, Firebase, and MongoDB. The website features a sleek design with responsive layouts, ensuring a seamless user experience across devices.

                            For secure and convenient payments, SpeedyWheel integrates Stripe, a trusted payment gateway. Node.js and Express provide a robust backend infrastructure to handle business logic and data management effectively.

                            Using Firebase, SpeedyWheel simplifies authentication, database management, and hosting, ensuring reliable performance and real-time updates. MongoDB serves as the efficient database solution for data storage and retrieval.

                            SpeedyWheel leverages various npm packages to enhance functionality and streamline development processes. This powerful tech stack enables SpeedyWheel to deliver a speedy, reliable, and user-friendly rental car experience.
                        </p>
                        <div className='mt-10 text-center flex flex-col md:flex-row gap-10 items-center justify-center mb-32'>
                            <div className="text-lg btn bg-rose-600 hover:bg-black hover:text-white rounded-xl uppercase m-1 lg:w-[250px] ">
                                <button >Live link</button>
                                <HiLink className='text-white text-lg' />
                            </div>
                            <details className="dropdown ">
                                <summary className="text-lg bg-white text-black hover:bg-black  hover:text-white rounded-xl uppercase m-1 lg:w-[250px] btn">
                                    <BsGithub className='text-lg' /> GitHub
                                </summary>
                                <ul className="p-2 shadow menu dropdown-content z-[1] bg-transparent rounded-box w-52">
                                    <li className='bg-rose-600 rounded-lg text-lg font-semibold'>
                                        <Link><BsGithub className='text-lg' />Client Side</Link>
                                    </li>
                                    <li className='bg-rose-600 rounded-lg text-lg font-semibold mt-5'>
                                        <Link><BsGithub className='text-lg' />Server Side</Link>
                                    </li>
                                </ul>
                            </details>
                        </div>
                    </div>
                </div>
                {/* 3 */}
                <div className='flex flex-col-reverse md:flex-row justify-between gap-10'>
                    <div className='lg:w-1/2'>
                        <h2 className='text-center text-3xl font-bold mb-5'>SpeedyWheel</h2>
                        <p>
                            SpeedyWheel is a modern rental car site powered by React, Tailwind, DaisyUI, Stripe, Node.js, Express, Firebase, and MongoDB. The website features a sleek design with responsive layouts, ensuring a seamless user experience across devices.

                            For secure and convenient payments, SpeedyWheel integrates Stripe, a trusted payment gateway. Node.js and Express provide a robust backend infrastructure to handle business logic and data management effectively.

                            Using Firebase, SpeedyWheel simplifies authentication, database management, and hosting, ensuring reliable performance and real-time updates. MongoDB serves as the efficient database solution for data storage and retrieval.

                            SpeedyWheel leverages various npm packages to enhance functionality and streamline development processes. This powerful tech stack enables SpeedyWheel to deliver a speedy, reliable, and user-friendly rental car experience.
                        </p>
                        <div className='mt-10 text-center flex flex-col md:flex-row gap-10 items-center justify-center mb-32'>
                            <div className="text-lg btn bg-rose-600 hover:bg-black hover:text-white rounded-xl uppercase m-1 lg:w-[250px] ">
                                <button >Live link</button>
                                <HiLink className='text-white text-lg' />
                            </div>
                            <details className="dropdown">
                                <summary className="bg-white text-black hover:bg-black  hover:text-white rounded-xl uppercase m-1 lg:w-[250px] btn text-lg">
                                    <BsGithub className='text-lg' /> GitHub
                                </summary>
                                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                                    <li className='bg-rose-600 rounded-lg text-lg font-semibold'>
                                        <Link><BsGithub className='text-lg' />Client Side</Link>
                                    </li>
                                    <li className='bg-rose-600 rounded-lg text-lg font-semibold mt-5'>
                                        <Link><BsGithub className='text-lg' />Server Side</Link>
                                    </li>
                                </ul>
                            </details>
                        </div>
                    </div>
                    <div>
                        <div className='lg:mt-20'>
                            <img className='rounded-xl' src="https://i.ibb.co/TwR7ynH/Screenshot-41-1.png" alt="" />
                        </div>
                    </div>
                </div>

                {/* 4 */}
                <div className='flex flex-col md:flex-row justify-between gap-10'>
                    <div>
                        <div className='lg:mt-20'>
                            <img className='rounded-xl' src="https://i.ibb.co/TwR7ynH/Screenshot-41-1.png" alt="" />
                        </div>
                    </div>
                    <div className='lg:w-1/2'>
                        <h2 className='text-center text-3xl font-bold mb-5'>SpeedyWheel</h2>
                        <p>
                            SpeedyWheel is a modern rental car site powered by React, Tailwind, DaisyUI, Stripe, Node.js, Express, Firebase, and MongoDB. The website features a sleek design with responsive layouts, ensuring a seamless user experience across devices.

                            For secure and convenient payments, SpeedyWheel integrates Stripe, a trusted payment gateway. Node.js and Express provide a robust backend infrastructure to handle business logic and data management effectively.

                            Using Firebase, SpeedyWheel simplifies authentication, database management, and hosting, ensuring reliable performance and real-time updates. MongoDB serves as the efficient database solution for data storage and retrieval.

                            SpeedyWheel leverages various npm packages to enhance functionality and streamline development processes. This powerful tech stack enables SpeedyWheel to deliver a speedy, reliable, and user-friendly rental car experience.
                        </p>
                        <div className='mt-10 text-center flex flex-col md:flex-row gap-10 items-center justify-center mb-32'>
                            <div className="text-lg btn bg-rose-600 hover:bg-black hover:text-white rounded-xl uppercase m-1 lg:w-[250px] ">
                                <button >Live link</button>
                                <HiLink className='text-white text-lg' />
                            </div>
                            <details className="dropdown">
                                <summary className="text-lg bg-white text-black hover:bg-black  hover:text-white rounded-xl uppercase m-1 lg:w-[250px] btn">
                                    <BsGithub className='text-lg' />GitHub
                                </summary>
                                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                                    <li className='bg-rose-600 rounded-lg text-lg font-semibold'>
                                        <Link><BsGithub className='text-lg' />Client Side</Link>
                                    </li>
                                    <li className='bg-rose-600 rounded-lg text-lg font-semibold mt-5'>
                                        <Link><BsGithub className='text-lg' />Server Side</Link>
                                    </li>
                                </ul>
                            </details>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Projects;