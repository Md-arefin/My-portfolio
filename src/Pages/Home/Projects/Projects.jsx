import React from 'react';
import { AiOutlineFundProjectionScreen } from 'react-icons/ai';
import { HiLink } from 'react-icons/hi';
import { BsGithub, BsFillCarFrontFill } from 'react-icons/bs';
import { FaCameraRetro } from 'react-icons/fa';
import { GiForkKnifeSpoon, GiConsoleController } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import { InView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { Element } from 'react-scroll';



const Projects = () => {

    const springAnimation = {
        hidden: {
            opacity: 0,
            x: 100
        },

        visible: {
            opacity: 1, x: 0,
            transition: {
                type: 'spring',
                stiffness: 100,
                damping: 10,
                // duration: '5'
            }
        },
    };

    const secondAnimation = {
        hidden: {
            opacity: 0,
            x: -100
        },

        visible: {
            opacity: 1, x: 0,
            transition: {
                type: 'spring',
                stiffness: 100,
                damping: 10,
                // duration: '5'
            }
        },
    };
    const thirdAnimation = {
        hidden: {
            opacity: 0,
            x: 100
        },

        visible: {
            opacity: 1, x: 0,
            transition: {
                type: 'spring',
                stiffness: 100,
                damping: 10,
                // duration: '5'
            }
        },
    };

    const forthAnimation = {
        hidden: {
            opacity: 0,
            x: -100
        },

        visible: {
            opacity: 1, x: 0,
            transition: {
                type: 'spring',
                stiffness: 100,
                damping: 10,
                // duration: '5'
            }
        },
    };


    return (
        <Element name="Projects">

            <div className='my-16 py-10' id='Projects'>
                <div className='flex items-center justify-center gap-5'>
                    <AiOutlineFundProjectionScreen className='text-3xl' />
                    <h1 className='text-center text-3xl font-bold'>My Projects</h1>
                </div>


                <div className='my-16 md:w-[85%] mx-auto'>
                    <InView>
                        {({ inView, ref }) => (
                            <motion.div
                                ref={ref}
                                initial="hidden"
                                animate={inView ? 'visible' : 'hidden'}
                                variants={springAnimation}
                                className='flex flex-col-reverse md:flex-row justify-between gap-10'
                            // initial={{ x: -1000 }} // Initial position outside the viewport on the left
                            // animate={{ x: 0 }} // Target position (current position)
                            // exit={{ x: -1000 }} // Exit position (when component unmounts)
                            // transition={{ type: 'spring', stiffness: 100, damping: 10, duration: '5' }} // Spring animation settings
                            >
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
                                    <div className='mt-10 text-center flex flex-col md:flex-row gap-10 md:items-center md:justify-between mb-32'>
                                        <Link target='_blank' to='https://speedy-wheels-6772f.web.app/'>
                                            <div className="text-lg btn bg-rose-600 hover:bg-black hover:text-white rounded-xl uppercase m-1 lg:w-[250px] w-full">
                                                <button >Live link</button>
                                                <HiLink className='text-white text-lg' />
                                            </div>
                                        </Link>
                                        <details className="dropdown">
                                            <summary className="bg-white text-black hover:bg-black  hover:text-white rounded-xl uppercase m-1 lg:w-[250px] btn w-full">
                                                <BsGithub className='text-lg rounded-lg' />GitHub
                                            </summary>

                                            <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box md:w-52 w-full">
                                                <Link target='_blank' to='https://github.com/Md-arefin/speedy-wheels-client'>
                                                    <li className='bg-rose-600 rounded-lg text-lg font-semibold hover:bg-black hover:text-white'>
                                                        <span className='text-center rounded-lg'><BsGithub className='text-lg' />Client Side</span>
                                                    </li>
                                                </Link>

                                                <Link target='_blank' to=''>
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
                            </motion.div>
                        )}
                    </InView>

                    {/* 2*/}
                    <InView>
                        {({ inView, ref }) => (
                            <motion.div
                                ref={ref}
                                initial="hidden"
                                animate={inView ? 'visible' : 'hidden'}
                                variants={secondAnimation}
                                className='flex flex-col md:flex-row justify-between gap-10'>
                                <div className='lg:mt-20'>
                                    <img className='rounded-xl' src="https://i.ibb.co/PW1GQnJ/Screenshot-44-1.png" alt="" />
                                </div>
                                <div className='lg:w-1/2'>
                                    <div className='flex gap-5'>
                                        <FaCameraRetro className='text-3xl mt-2 text-rose-700' />
                                        <h2 className='text-center text-3xl font-bold mb-5 hover:bg-black hover:text-white'>Creative Capture</h2>
                                    </div>
                                    <p className='md:my-5'>
                                        I developed an e-learning site for photography enthusiasts, offering courses for aspiring photographers. The site is built using technologies that includes React.js, Tailwind, DaisyUI, Firebase, MongoDB, Node.js, Stripe for payment processing, Express.js, React-Query, JWT, and several NPM packages. The platform features distinct user-based dashboards tailored for students, instructors, and administrators. On the homepage, visitors are presented with a curated selection of top-rated classes and renowned instructors, prioritized based on the number of enrolled students. This setup ensures that users can easily explore and access high-quality photography courses while providing instructors with visibility and recognition based on their popularity among learners.
                                    </p>
                                    <div className='mt-10 text-center flex flex-col md:flex-row gap-10 md:items-center md:justify-between mb-32 '>
                                        <Link target='_blank' to='https://creative-capture-2ad74.web.app/'>
                                            <div className="text-lg btn bg-rose-600 hover:bg-black hover:text-white rounded-xl uppercase m-1 lg:w-[250px] w-full">
                                                <button >Live link</button>
                                                <HiLink className='text-white text-lg' />
                                            </div>
                                        </Link>
                                        <details className="dropdown ">
                                            <summary className="text-lg bg-white text-black hover:bg-black  hover:text-white rounded-xl uppercase m-1 lg:w-[250px] w-full btn">
                                                <BsGithub className='text-lg' /> GitHub
                                            </summary>
                                            <ul className="p-2 shadow menu dropdown-content z-[1] bg-transparent rounded-box md:w-52 w-full">
                                                <Link target='_blank' to='https://github.com/Md-arefin/creative-capture'>
                                                    <li className='bg-rose-600 rounded-lg text-lg font-semibold hover:bg-black hover:text-white '>
                                                        <span className='text-center rounded-lg'><BsGithub className='text-lg' />Client Side</span>
                                                    </li>
                                                </Link>

                                                <Link target='_blank' to='https://github.com/Md-arefin/creative-capture-server'>
                                                    <li className='bg-rose-600 rounded-lg text-lg font-semibold mt-5 hover:bg-black hover:text-white'>
                                                        <span className='text-center rounded-lg'> <BsGithub className='text-lg' />Server Side</span>
                                                    </li>
                                                </Link>
                                            </ul>
                                        </details>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </InView>
                    {/* 3 */}
                    <InView>
                        {({ inView, ref }) => (
                            <motion.div
                                ref={ref}
                                initial="hidden"
                                animate={inView ? 'visible' : 'hidden'}
                                variants={thirdAnimation}
                                className='flex flex-col-reverse md:flex-row justify-between gap-10'>
                                <div className='lg:w-1/2'>
                                    <div className='flex gap-5'>
                                        <GiConsoleController className='text-4xl mt-1 text-rose-700' />
                                        <h2 className='text-center text-3xl font-bold mb-5'>Elite Gamers Gear</h2>
                                    </div>
                                    <p className='md:my-5'>
                                        I have developed an online platform where individuals can discover a wide range of gaming accessories. The website is built using React, Tailwind, DaisyUI, Firebase, MongoDB, Node.js, Express.js, and various NPM packages. While it functions similarly to an e-commerce site, payment integration has not been implemented yet. Sellers have the ability to add products for sale, update product details if necessary, and delete listings. They can view all products available for sale but have exclusive editing rights for their own listings. To showcase elite products on the homepage, I have utilized React tabs and other relevant components.
                                    </p>
                                    <div className='mt-10 text-center flex flex-col md:flex-row gap-10 md:items-center md:justify-between mb-32'>
                                        <Link target='_blank' to='https://video-games-world.web.app/'>
                                            <div className="text-lg btn bg-rose-600 hover:bg-black hover:text-white rounded-xl uppercase m-1 lg:w-[250px] w-full">
                                                <button >Live link</button>
                                                <HiLink className='text-white text-lg' />
                                            </div>
                                        </Link>
                                        <details className="dropdown">
                                            <summary className="bg-white text-black hover:bg-black  hover:text-white rounded-xl uppercase m-1 lg:w-[250px] btn text-lg w-full">
                                                <BsGithub className='text-lg' /> GitHub
                                            </summary>
                                            <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-full md:w-52">
                                                <Link target='_blank' to='https://github.com/Md-arefin/elite-gaming'>
                                                    <li className='bg-rose-600 rounded-lg text-lg font-semibold hover:bg-black hover:text-white'>
                                                        <span className='text-center rounded-lg'><BsGithub className='text-lg' />Client Side</span>
                                                    </li>
                                                </Link>

                                                <Link target='_blank' to='https://github.com/Md-arefin/elite-gaming-server'>
                                                    <li className='bg-rose-600 rounded-lg text-lg font-semibold mt-5 hover:bg-black hover:text-white '>
                                                        <span className='text-center rounded-lg'> <BsGithub className='text-lg' />Server Side</span>
                                                    </li>
                                                </Link>
                                            </ul>
                                        </details>
                                    </div>
                                </div>
                                <div>
                                    <div className='lg:mt-5'>
                                        <img className='rounded-xl' src="https://i.ibb.co/rF2rbjy/Screenshot-43-1.png" alt="" />
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </InView>
                    {/* 4 */}
                    <InView>
                        {({ inView, ref }) => (
                            <motion.div
                            ref={ref}
                                initial="hidden"
                                animate={inView ? 'visible' : 'hidden'}
                                variants={forthAnimation}
                            className='flex flex-col md:flex-row justify-between gap-10'>
                                <div>
                                    <div className='lg:mt-10'>
                                        <img className='rounded-xl' src="https://i.ibb.co/ydv9NBb/Screenshot-42-1.png" alt="" />
                                    </div>
                                </div>
                                <div className='lg:w-1/2'>
                                    <div className='flex gap-5'>
                                        <GiForkKnifeSpoon className='text-3xl mt-2 text-rose-700' />
                                        <h2 className='text-center text-2xl md:text-3xl font-bold mb-5'>Turkish Table Treasure</h2>
                                    </div>
                                    <p>
                                        I have developed an online website where users can explore renowned Turkish chefs. The website is built using React, Bootstrap, Firebase, Node.js, Express.js, and several NPM packages. The platform features profiles of six famous chefs, showcasing their personal cooking styles and the number of recipes they have created. Additionally, the site offers a collection of popular recipes curated by these chefs. Users can also access a blog page for interesting culinary content. This platform serves as a comprehensive hub for discovering talented Turkish chefs, their unique cooking approaches, delightful recipes, and engaging food-related articles.
                                    </p>
                                    <div className='mt-10 text-center flex flex-col md:flex-row gap-10 md:items-center md:justify-between mb-32 '>
                                        <Link target='_blank' to="https://bespoke-pastelito-b45c1f.netlify.app/">
                                            <div className="text-lg btn bg-rose-600 hover:bg-black hover:text-white rounded-xl uppercase m-1 lg:w-[250px] w-full">
                                                <button >Live link</button>
                                                <HiLink className='text-white text-lg' />
                                            </div>
                                        </Link>
                                        <details className="dropdown">
                                            <summary className="text-lg bg-white text-black hover:bg-black  hover:text-white rounded-xl uppercase m-1 lg:w-[250px] btn w-full">
                                                <BsGithub className='text-lg' />GitHub
                                            </summary>
                                            <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-full md:w-52">
                                                <Link target='_blank' to='https://github.com/Md-arefin/turkish-table-treasure-Client'>
                                                    <li className='bg-rose-600 rounded-lg text-lg font-semibold hover:bg-black hover:text-white'>
                                                        <span className='text-center rounded-lg'><BsGithub className='text-lg' />Client Side</span>
                                                    </li>
                                                </Link>

                                                <Link target='_blank' to='https://github.com/Md-arefin/turkish-table-treasure-Server'>
                                                    <li className='bg-rose-600 rounded-lg text-lg font-semibold mt-5 hover:bg-black hover:text-white'>
                                                        <span className='text-center rounded-lg'> <BsGithub className='text-lg' />Server Side</span>
                                                    </li>
                                                </Link>
                                            </ul>
                                        </details>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </InView>
                </div>

            </div >
        </Element >
    );
};

export default Projects;