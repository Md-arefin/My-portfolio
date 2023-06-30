import React from 'react';
import { PiProjectorScreenChartFill } from 'react-icons/pi';
import html from '../../../assets/skills/HTML.png'
import css from '../../../assets/skills/CSS.png'
import js from '../../../assets/skills/js.png'
import bootstrap from '../../../assets/skills/bootstrap.png'
import DB from '../../../assets/skills/DB.png'
import Express from '../../../assets/skills/ex.png'
import Firebase from '../../../assets/skills/Firebase.png'
import Git from '../../../assets/skills/Git-logo.svg.png'
import tailwind from '../../../assets/skills/tailwind.png'
import react from '../../../assets/skills/react.png'
import node from '../../../assets/skills/images.png'
import strip from '../../../assets/skills/strip.png'
import { motion } from 'framer-motion';

const Skills = () => {

    const cardVariants = {
        hover: {
            scale: 1.7,
            rotate: 360,
            boxShadow: '0 0 20px 0 rgba(255, 0, 0, 0.5), 0 0 40px 0 rgba(255, 0, 0, 0.5), 0 0 80px 0 rgba(255, 0, 0, 0.5)',
        },
        initial: {
            scale: 1,
            rotate: 0,
            boxShadow: '0px 0px 0px rgba(0, 0, 0, 0)',
        },
    };

    return (
        <div className='my-16  py-10'>
            <div className='flex items-center justify-center gap-5'>
                <PiProjectorScreenChartFill className='text-4xl text-white mt-2' />
                <h3 className='text-center text-4xl font-bold text-white'>My Skills
                </h3>
            </div>

            <div className=' md:ml-0 px-5 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-10 my-10'>
                <div>
                    <motion.div
                        whileHover="hover"
                        initial="initial"
                        variants={cardVariants}
                        transition={{ duration: 0.3 }}

                        className="mx-5 card w-[100px] md:w-[150px] rounded-lg border-2 shadow-xl">
                        <div className="card-body bg-white rounded-lg">
                            <figure><img src={html} alt="Shoes" /></figure>
                        </div>
                    </motion.div>
                </div>
                <div>
                    <motion.div
                        whileHover="hover"
                        initial="initial"
                        variants={cardVariants}
                        transition={{ duration: 0.3 }}
                        className="mx-5 card w-[100px] md:w-[150px]  rounded-lg border-2">
                        <div className="card-body bg-white rounded-lg">
                            <figure>
                                <img src={css} alt="Shoes" />
                            </figure>
                        </div>
                    </motion.div>
                </div>
                <div>
                    <motion.div
                        whileHover="hover"
                        initial="initial"
                        variants={cardVariants}
                        transition={{ duration: 0.3 }}
                        className="mx-5 card w-[100px] md:w-[150px] rounded-lg border-2">
                        <div className="card-body bg-white rounded-lg">
                            <figure><img src={js} alt="Shoes" /></figure>
                        </div>
                    </motion.div>
                </div>
                <div>
                    <motion.div
                        whileHover="hover"
                        initial="initial"
                        variants={cardVariants}
                        transition={{ duration: 0.3 }}
                        className="mx-5 card w-[100px] md:w-[150px] rounded-lg border-2">
                        <div className="card-body bg-white rounded-lg">
                            <figure><img src={bootstrap} alt="Shoes" /></figure>
                        </div>
                    </motion.div>
                </div>
                <div>
                    <motion.div
                        whileHover="hover"
                        initial="initial"
                        variants={cardVariants}
                        transition={{ duration: 0.3 }}
                        className="mx-5 card w-[100px] md:w-[150px] rounded-lg border-2">
                        <div className="card-body bg-white rounded-lg">
                            <figure><img className='overflow-hidden' src={tailwind} alt="Shoes" /></figure>
                        </div>
                    </motion.div>
                </div>
                <div>
                    <motion.div
                        whileHover="hover"
                        initial="initial"
                        variants={cardVariants}
                        transition={{ duration: 0.3 }}
                        className="mx-5 card w-[100px] md:w-[150px] rounded-lg border-2">
                        <div className="card-body bg-white rounded-lg">
                            <figure><img className='h-[35px] md:h-[100px]' src={react} alt="Shoes" /></figure>
                        </div>
                    </motion.div>
                </div>
                <div>
                    <motion.div
                        whileHover="hover"
                        initial="initial"
                        variants={cardVariants}
                        transition={{ duration: 0.3 }}
                        className="mx-5 card w-[100px] md:w-[150px] rounded-lg border-2">
                        <div className="card-body bg-white rounded-lg">
                            <figure><img className='w-[100px]  md:h-[90px]' src={node} alt="Shoes" /></figure>
                        </div>
                    </motion.div>
                </div>
                <div>
                    <motion.div
                        whileHover="hover"
                        initial="initial"
                        variants={cardVariants}
                        transition={{ duration: 0.3 }}
                        className="mx-5 card w-[100px] md:w-[150px] rounded-lg border-2">
                        <div className="card-body bg-white rounded-lg">
                            <figure><img className='h-[35px]  md:h-[100px]' src={Firebase} alt="Shoes" /></figure>
                        </div>
                    </motion.div>
                </div>
                <div>
                    <motion.div
                        whileHover="hover"
                        initial="initial"
                        variants={cardVariants}
                        transition={{ duration: 0.3 }}
                        className="mx-5 card w-[100px] md:w-[150px] rounded-lg border-2">
                        <div className="card-body bg-white rounded-lg">
                            <figure><img src={DB} alt="Shoes" /></figure>
                        </div>
                    </motion.div>
                </div>

                <div>
                    <motion.div
                        whileHover="hover"
                        initial="initial"
                        variants={cardVariants}
                        transition={{ duration: 0.3 }}
                        className="mx-5 card w-[100px] md:w-[150px] rounded-lg border-2">
                        <div className="card-body bg-white rounded-lg">
                            <figure><img className='pt-5' src={Git} alt="Shoes" /></figure>
                        </div>
                    </motion.div>
                </div>
                <div>
                    <motion.div
                        whileHover="hover"
                        initial="initial"
                        variants={cardVariants}
                        transition={{ duration: 0.3 }}
                        className="mx-5 card w-[100px] md:w-[150px] rounded-lg border-2">
                        <div className="card-body bg-white rounded-lg">
                            <figure><img className='overflow-hidden' src={Express} alt="Shoes" /></figure>
                            <p className=' text-black font-bold'>Express</p>
                        </div>
                    </motion.div>
                </div>
                <div>
                    <motion.div
                        whileHover="hover"
                        initial="initial"
                        variants={cardVariants}
                        transition={{ duration: 0.3 }}
                        className="mx-5 card w-[100px] md:w-[150px] rounded-lg border-2">
                        <div className="card-body bg-white rounded-lg">
                            <figure><img className='pt-5' src={strip} alt="Shoes" /></figure>
                        </div>
                    </motion.div>
                </div>

            </div>
        </div>
    );
};

export default Skills;