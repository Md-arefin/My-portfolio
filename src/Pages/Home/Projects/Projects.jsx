import React from 'react';
import { HiLink } from 'react-icons/hi';
import { Element } from 'react-scroll';
import { Link } from 'react-router-dom';
import { AiOutlineFundProjectionScreen } from 'react-icons/ai';
import { BsGithub, BsFillCarFrontFill, BsShop } from 'react-icons/bs';
import { FaCameraRetro } from 'react-icons/fa';
import { SiGoogleclassroom } from 'react-icons/si';
import { HiUserGroup } from 'react-icons/hi';
import { GiConsoleController } from 'react-icons/gi';



const Projects = () => {

    return (
        <Element name="Projects">

            <div className='my-16 py-10' id='Projects'>
                <div className='flex items-center justify-center gap-5'>
                    <AiOutlineFundProjectionScreen className='text-3xl' />
                    <h1 className='text-center text-3xl font-bold'>My Projects</h1>
                </div>

                {/* Projects */}

                <div className='my-16 md:w-[85%] mx-auto'>
                    {/* 1*/}
                    <div className='flex flex-col md:flex-row justify-between gap-10 group'>
                        <div className='lg:w-1/2'>
                            <div className='flex gap-5'>
                                <HiUserGroup className='text-3xl text-rose-700' />
                                <h2 className='text-center text-3xl font-bold hover:bg-black hover:text-white'>Galaxy Meet</h2>
                            </div>
                            <p className='md:my-5'>
                                Galaxy Meet is a feature-rich video calling web application with a role-based access system that distinguishes between administrators and regular users. It leverages a robust technology stack that includes AXIOS, React, Tailwind CSS, Firebase, MongoDB, and JWT for secure authentication. Hosting on Vercel ensures excellent performance. To enhance real-time communication, the application uses Socket.io, which allows users to connect seamlessly for video calls. The use of JavaScript, Redux, Node.js, and Express.js ensures a smooth and responsive user experience. Administrators have the power to manage user roles and permissions, while regular users can easily connect and enjoy the seamless video calling experience provided by Galaxy Meet.
                            </p>
                            <div className='mt-10 text-center flex flex-col md:flex-row gap-10 md:items-center md:justify-between mb-32 '>
                                <Link target='_blank' to='https://galaxy-meeting-app.web.app/'>
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
                                        <Link target='_blank' to='https://github.com/Md-arefin/online-meeting-recording-app-client'>
                                            <li className='bg-rose-600 rounded-lg text-lg font-semibold hover:bg-black hover:text-white '>
                                                <span className='text-center rounded-lg'><BsGithub className='text-lg' />Client Side</span>
                                            </li>
                                        </Link>

                                        <Link target='_blank' to='https://github.com/Md-arefin/online-meeting-recording-app-server/tree/main'>
                                            <li className='bg-rose-600 rounded-lg text-lg font-semibold mt-5 hover:bg-black hover:text-white'>
                                                <span className='text-center rounded-lg'> <BsGithub className='text-lg' />Server Side</span>
                                            </li>
                                        </Link>
                                    </ul>
                                </details>
                            </div>
                        </div>

                        <div className='lg:mt-20 group-hover:scale-[1.3] transition-all duration-300 ease-in-out'>
                            <img className='rounded-xl' src="https://i.ibb.co/6w4Vv7y/Screenshot-153.png" alt="" />
                        </div>
                    </div>

                    {/* 2*/}
                    <div className='flex flex-col md:flex-row justify-between gap-10 group'>
                        <div className='lg:mt-20 group-hover:scale-[1.3] transition-all duration-300 ease-in-out'>
                            <img className='rounded-xl' src="https://i.ibb.co/q7zXCj2/AF-Elegance.png" alt="" />
                        </div>
                        <div className='lg:w-1/2'>
                            <div className='flex gap-5'>
                                <BsShop className='text-3xl mt-2 text-rose-700' />
                                <h2 className='text-center text-3xl font-bold mb-5 hover:bg-black hover:text-white'>A&F Elegance</h2>
                            </div>
                            <p className='md:my-5'>
                                A&F Elegance is an e-commerce website specializing in dress sales, implementing a role-based access system distinguishing between admins and regular users. The technology stack used for this project includes AXIOS, React, Tailwind CSS, Firebase, MongoDB, Stripe for payment processing, JWT for authentication, Vercel for hosting, JavaScript, React Query, Node.js, and Express.js. The platform allows admins to manage products through functions like adding, editing, and deleting items, as well as overseeing user management, including promotions to admin roles and user deletions. On the user side, customers can shop for dresses, review their purchases, and interact with the website.
                            </p>
                            <div className='mt-10 text-center flex flex-col md:flex-row gap-10 md:items-center md:justify-between mb-32 '>
                                <Link target='_blank' to='https://af-elegance.web.app/'>
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
                                        <Link target='_blank' to='https://github.com/Md-arefin/AF-elegance-client'>
                                            <li className='bg-rose-600 rounded-lg text-lg font-semibold hover:bg-black hover:text-white '>
                                                <span className='text-center rounded-lg'><BsGithub className='text-lg' />Client Side</span>
                                            </li>
                                        </Link>

                                        <Link target='_blank' to='https://github.com/Md-arefin/AF-elegance-server'>
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
                    <div className='flex flex-col-reverse md:flex-row justify-between gap-10 group'
                    >
                        <div className='lg:w-1/2' >
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

                                        <Link target='_blank' to='https://github.com/Md-arefin/speedy-wheel-server'>
                                            <li className='bg-rose-600 rounded-lg text-lg font-semibold mt-5 hover:bg-black hover:text-white'>
                                                <span className='text-center rounded-lg'> <BsGithub className='text-lg' />Server Side</span>
                                            </li>
                                        </Link>
                                    </ul>
                                </details>
                            </div>
                        </div>
                        <div className='lg:mt-20'>
                            <img className='rounded-xl group-hover:scale-[1.3] transition-all duration-300 ease-in-out' src="https://i.ibb.co/TwR7ynH/Screenshot-41-1.png" alt="" />
                        </div>
                    </div>

                    {/* 4 */}
                    <div className='flex flex-col md:flex-row justify-between gap-10 group'>
                        <div className='lg:mt-20 group-hover:scale-[1.3] transition-all duration-300 ease-in-out'>
                            <img className='rounded-xl' src="https://i.ibb.co/DGqYXL2/Creative-Capture-1.png" alt="" />
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
                    </div>

                    {/* 5 */}
                    <div className='flex flex-col-reverse md:flex-row justify-between gap-10 group'>
                        <div className='lg:w-1/2'>
                            <div className='flex gap-5'>
                                <SiGoogleclassroom className='text-3xl mt-2 text-rose-700' />
                                <h2 className='text-center text-3xl font-bold mb-5'>College Hub</h2>
                            </div>
                            <p className='md:my-5'>
                                Welcome to College Hub, your one-stop destination for college bookings! Our sleek web app offers a seamless user experience with a user-friendly navigation bar, search functionality for colleges, and captivating college cards displaying admission dates, events, research, and sports. Dive deeper into college details by clicking 'Details,' and explore the graduate gallery and research paper links. Share your thoughts in the review section. Secure login and registration, along with profile editing, enhance personalization. Enjoy full responsiveness across all devices and discover a creative 404 route. College Hub - your gateway to a world of educational opportunities!

                            </p>
                            <div className='mt-10 text-center flex flex-col md:flex-row gap-10 md:items-center md:justify-between mb-32'>
                                <Link target='_blank' to="https://college-hub-5bd22.web.app/" >
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
                                        <Link target='_blank' to='https://github.com/Md-arefin/college-hub-client' >
                                            <li className='bg-rose-600 rounded-lg text-lg font-semibold hover:bg-black hover:text-white'>
                                                <span className='text-center rounded-lg'><BsGithub className='text-lg' />Client Side</span>
                                            </li>
                                        </Link>

                                        <Link target='_blank' to='https://github.com/Md-arefin/college-hub-server'>
                                            <li className='bg-rose-600 rounded-lg text-lg font-semibold mt-5 hover:bg-black hover:text-white '>
                                                <span className='text-center rounded-lg'> <BsGithub className='text-lg' />Server Side</span>
                                            </li>
                                        </Link>
                                    </ul>
                                </details>
                            </div>
                        </div>
                        <div>
                            <div className='lg:mt-5 group-hover:scale-[1.3] transition-all duration-300 ease-in-out'>
                                <img className='rounded-xl' src="https://i.ibb.co/WyyR3Y8/College-Hub-1.png" alt="" />
                            </div>
                        </div>
                    </div>

                    {/* 6 */}
                    <div className='flex flex-col md:flex-row justify-between gap-10 group'>
                        <div>
                            <div className='lg:mt-10 group-hover:scale-[1.3] transition-all duration-300 ease-in-out'>
                                <img className='rounded-xl' src="https://i.ibb.co/rF2rbjy/Screenshot-43-1.png" alt="" />
                            </div>
                        </div>
                        <div className='lg:w-1/2'>
                            <div className='flex gap-5'>
                                <GiConsoleController className='text-4xl mt-1 text-rose-700' />
                                <h2 className='text-center text-2xl md:text-3xl font-bold mb-5'>Elite Gamers Gear</h2>
                            </div>
                            <p>
                                I have developed an online platform where individuals can discover a wide range of gaming accessories. The website is built using React, Tailwind, DaisyUI, Firebase, MongoDB, Node.js, Express.js, and various NPM packages. While it functions similarly to an e-commerce site, payment integration has not been implemented yet. Sellers have the ability to add products for sale, update product details if necessary, and delete listings. They can view all products available for sale but have exclusive editing rights for their own listings. To showcase elite products on the homepage, I have utilized React tabs and other relevant components.
                            </p>
                            <div className='mt-10 text-center flex flex-col md:flex-row gap-10 md:items-center md:justify-between mb-32 '>
                                <Link target='_blank' to='https://video-games-world.web.app/'>
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
                                        <Link target='_blank' to='https://github.com/Md-arefin/elite-gaming'>
                                            <li className='bg-rose-600 rounded-lg text-lg font-semibold hover:bg-black hover:text-white'>
                                                <span className='text-center rounded-lg'><BsGithub className='text-lg' />Client Side</span>
                                            </li>
                                        </Link>

                                        <Link target='_blank' to='https://github.com/Md-arefin/elite-gaming-server'>
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

            </div >
        </Element >
    );
};

export default Projects;