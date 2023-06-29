import React from 'react';
import { AiOutlineFundProjectionScreen } from 'react-icons/ai';
import { HiLink } from 'react-icons/hi';
import { BsGithub, BsFillCarFrontFill } from 'react-icons/bs';
import { FaCameraRetro } from 'react-icons/fa';
import { GiForkKnifeSpoon, GiConsoleController } from 'react-icons/gi';
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
                            <BsFillCarFrontFill className='text-3xl mt-2 text-rose-700' />
                            <h2 className='text-3xl font-bold mb-5'> SpeedyWheel</h2>
                        </div>
                        <p>
                            SpeedyWheel is a modern rental car site powered by React, Tailwind, DaisyUI, Stripe, Node.js, Express, Firebase, and MongoDB. The website features a sleek design with responsive layouts, ensuring a seamless user experience across devices.

                            For secure and convenient payments, SpeedyWheel integrates Stripe, a trusted payment gateway. Node.js and Express provide a robust backend infrastructure to handle business logic and data management effectively.

                            Using Firebase, SpeedyWheel simplifies authentication, database management, and hosting, ensuring reliable performance and real-time updates. MongoDB serves as the efficient database solution for data storage and retrieval.

                            SpeedyWheel leverages various npm packages to enhance functionality and streamline development processes. This powerful tech stack enables SpeedyWheel to deliver a speedy, reliable, and user-friendly rental car experience.
                        </p>
                        <div className='mt-10 text-center flex flex-col md:flex-row gap-10 items-center justify-center mb-32'>
                            <Link to='https://gilded-rabanadas-2de7f6.netlify.app/'>
                                <div className="text-lg btn bg-rose-600 hover:bg-black hover:text-white rounded-xl uppercase m-1 lg:w-[250px] ">
                                    <button >Live link</button>
                                    <HiLink className='text-white text-lg' />
                                </div>
                            </Link>
                            <details className="dropdown">
                                <summary className="bg-white text-black hover:bg-black  hover:text-white rounded-xl uppercase m-1 lg:w-[250px] btn">
                                   <BsGithub className='text-lg rounded-lg' />GitHub
                                </summary>

                                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                                    <Link to='https://github.com/Md-arefin/speedy-wheels-client'>
                                        <li className='bg-rose-600 rounded-lg text-lg font-semibold hover:bg-black hover:text-white'>
                                        <span className='text-center rounded-lg'><BsGithub className='text-lg' />Client Side</span>
                                        </li>
                                    </Link>

                                    <Link to=''>
                                        <li className='bg-rose-600 rounded-lg text-lg font-semibold mt-5 hover:bg-black hover:text-white'>
                                            <span className='text-center rounded-lg'> <BsGithub className='text-lg' />Server Side</span>
                                        </li>
                                    </Link>
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
                        <img className='rounded-xl' src="https://i.ibb.co/PW1GQnJ/Screenshot-44-1.png" alt="" />
                    </div>
                    <div className='lg:w-1/2'>
                        <div className='flex gap-5'>
                            <FaCameraRetro className='text-3xl mt-2 text-rose-700' />
                            <h2 className='text-center text-3xl font-bold mb-5 hover:bg-black hover:text-white'>Creative Capture</h2>
                        </div>
                        <p>
                            SpeedyWheel is a modern rental car site powered by React, Tailwind, DaisyUI, Stripe, Node.js, Express, Firebase, and MongoDB. The website features a sleek design with responsive layouts, ensuring a seamless user experience across devices.

                            For secure and convenient payments, SpeedyWheel integrates Stripe, a trusted payment gateway. Node.js and Express provide a robust backend infrastructure to handle business logic and data management effectively.

                            Using Firebase, SpeedyWheel simplifies authentication, database management, and hosting, ensuring reliable performance and real-time updates. MongoDB serves as the efficient database solution for data storage and retrieval.

                            SpeedyWheel leverages various npm packages to enhance functionality and streamline development processes. This powerful tech stack enables SpeedyWheel to deliver a speedy, reliable, and user-friendly rental car experience.
                        </p>
                        <div className='mt-10 text-center flex flex-col md:flex-row gap-10 items-center justify-center mb-32'>
                            <Link to='https://creative-capture.netlify.app/'>
                                <div className="text-lg btn bg-rose-600 hover:bg-black hover:text-white rounded-xl uppercase m-1 lg:w-[250px] ">
                                    <button >Live link</button>
                                    <HiLink className='text-white text-lg' />
                                </div>
                            </Link>
                            <details className="dropdown ">
                                <summary className="text-lg bg-white text-black hover:bg-black  hover:text-white rounded-xl uppercase m-1 lg:w-[250px] btn">
                                    <BsGithub className='text-lg' /> GitHub
                                </summary>
                                <ul className="p-2 shadow menu dropdown-content z-[1] bg-transparent rounded-box w-52">
                                    <Link to='https://github.com/Md-arefin/creative-capture'>
                                        <li className='bg-rose-600 rounded-lg text-lg font-semibold hover:bg-black hover:text-white'>
                                        <span className='text-center rounded-lg'><BsGithub className='text-lg' />Client Side</span>
                                        </li>
                                    </Link>

                                    <Link to='https://github.com/Md-arefin/creative-capture-server'>
                                        <li className='bg-rose-600 rounded-lg text-lg font-semibold mt-5 hover:bg-black hover:text-white'>
                                            <span className='text-center rounded-lg'> <BsGithub className='text-lg' />Server Side</span>
                                        </li>
                                    </Link>
                                </ul>
                            </details>
                        </div>
                    </div>
                </div>
                {/* 3 */}
                <div className='flex flex-col-reverse md:flex-row justify-between gap-10'>
                    <div className='lg:w-1/2'>
                        <div className='flex gap-5'>
                            <GiConsoleController className='text-4xl mt-1 text-rose-700' />
                            <h2 className='text-center text-3xl font-bold mb-5'>Elite Gamers Gear</h2>
                        </div>
                        <p>
                            SpeedyWheel is a modern rental car site powered by React, Tailwind, DaisyUI, Stripe, Node.js, Express, Firebase, and MongoDB. The website features a sleek design with responsive layouts, ensuring a seamless user experience across devices.

                            For secure and convenient payments, SpeedyWheel integrates Stripe, a trusted payment gateway. Node.js and Express provide a robust backend infrastructure to handle business logic and data management effectively.

                            Using Firebase, SpeedyWheel simplifies authentication, database management, and hosting, ensuring reliable performance and real-time updates. MongoDB serves as the efficient database solution for data storage and retrieval.

                            SpeedyWheel leverages various npm packages to enhance functionality and streamline development processes. This powerful tech stack enables SpeedyWheel to deliver a speedy, reliable, and user-friendly rental car experience.
                        </p>
                        <div className='mt-10 text-center flex flex-col md:flex-row gap-10 items-center justify-center mb-32'>
                            <Link to='https://jovial-trifle-a9e90c.netlify.app/'>
                                <div className="text-lg btn bg-rose-600 hover:bg-black hover:text-white rounded-xl uppercase m-1 lg:w-[250px] ">
                                    <button >Live link</button>
                                    <HiLink className='text-white text-lg' />
                                </div>
                            </Link>
                            <details className="dropdown">
                                <summary className="bg-white text-black hover:bg-black  hover:text-white rounded-xl uppercase m-1 lg:w-[250px] btn text-lg">
                                    <BsGithub className='text-lg' /> GitHub
                                </summary>
                                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                                    <Link to='https://github.com/Md-arefin/elite-gaming'>
                                        <li className='bg-rose-600 rounded-lg text-lg font-semibold hover:bg-black hover:text-white'>
                                        <span className='text-center rounded-lg'><BsGithub className='text-lg' />Client Side</span>
                                        </li>
                                    </Link>

                                    <Link to='https://github.com/Md-arefin/elite-gaming-server'>
                                        <li className='bg-rose-600 rounded-lg text-lg font-semibold mt-5 hover:bg-black hover:text-white'>
                                            <span className='text-center rounded-lg'> <BsGithub className='text-lg' />Server Side</span>
                                        </li>
                                    </Link>
                                </ul>
                            </details>
                        </div>
                    </div>
                    <div>
                        <div className='lg:mt-20'>
                            <img className='rounded-xl' src="https://i.ibb.co/rF2rbjy/Screenshot-43-1.png" alt="" />
                        </div>
                    </div>
                </div>

                {/* 4 */}
                <div className='flex flex-col md:flex-row justify-between gap-10'>
                    <div>
                        <div className='lg:mt-20'>
                            <img className='rounded-xl' src="https://i.ibb.co/ydv9NBb/Screenshot-42-1.png" alt="" />
                        </div>
                    </div>
                    <div className='lg:w-1/2'>
                        <div className='flex gap-5'>
                            <GiForkKnifeSpoon className='text-3xl mt-2 text-rose-700' />
                            <h2 className='text-center text-3xl font-bold mb-5'>Turkish Table Treasure</h2>
                        </div>
                        <p>
                            SpeedyWheel is a modern rental car site powered by React, Tailwind, DaisyUI, Stripe, Node.js, Express, Firebase, and MongoDB. The website features a sleek design with responsive layouts, ensuring a seamless user experience across devices.

                            For secure and convenient payments, SpeedyWheel integrates Stripe, a trusted payment gateway. Node.js and Express provide a robust backend infrastructure to handle business logic and data management effectively.

                            Using Firebase, SpeedyWheel simplifies authentication, database management, and hosting, ensuring reliable performance and real-time updates. MongoDB serves as the efficient database solution for data storage and retrieval.

                            SpeedyWheel leverages various npm packages to enhance functionality and streamline development processes. This powerful tech stack enables SpeedyWheel to deliver a speedy, reliable, and user-friendly rental car experience.
                        </p>
                        <div className='mt-10 text-center flex flex-col md:flex-row gap-10 items-center justify-center mb-32'>
                            <Link to="https://bespoke-pastelito-b45c1f.netlify.app/">
                                <div className="text-lg btn bg-rose-600 hover:bg-black hover:text-white rounded-xl uppercase m-1 lg:w-[250px] ">
                                    <button >Live link</button>
                                    <HiLink className='text-white text-lg' />
                                </div>
                            </Link>
                            <details className="dropdown">
                                <summary className="text-lg bg-white text-black hover:bg-black  hover:text-white rounded-xl uppercase m-1 lg:w-[250px] btn">
                                    <BsGithub className='text-lg' />GitHub
                                </summary>
                                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                                    <Link to='https://github.com/Md-arefin/turkish-table-treasure-Client'>
                                        <li className='bg-rose-600 rounded-lg text-lg font-semibold hover:bg-black hover:text-white'>
                                        <span className='text-center rounded-lg'><BsGithub className='text-lg' />Client Side</span>
                                        </li>
                                    </Link>

                                    <Link to='https://github.com/Md-arefin/turkish-table-treasure-Server'>
                                        <li className='bg-rose-600 rounded-lg text-lg font-semibold mt-5 hover:bg-black hover:text-white'>
                                            <span className='text-center rounded-lg'> <BsGithub className='text-lg' />Server Side</span>
                                        </li>
                                    </Link>
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