import React from 'react';
import { PiProjectorScreenChartFill } from 'react-icons/pi';
import html from '../../../assets/skills/HTML.png';
import css from '../../../assets/skills/CSS.png';
import js from '../../../assets/skills/js.png';
import bootstrap from '../../../assets/skills/bootstrap.png';
import DB from '../../../assets/skills/DB.png';
import Express from '../../../assets/skills/ex.png';
import Firebase from '../../../assets/skills/Firebase.png';
import Git from '../../../assets/skills/Git-logo.svg.png';
import tailwind from '../../../assets/skills/tailwind.png';
import react from '../../../assets/skills/react.png';
import node from '../../../assets/skills/images.png';
import strip from '../../../assets/skills/strip.png';
import axios from '../../../assets/skills/axios.png';
import redux from '../../../assets/skills/Redux.png';
import jwt from '../../../assets/skills/jwt.png';
import wordpress from '../../../assets/skills/wordpress.png';
import nextJs from '../../../assets/skills/next-js.png';
import socketIo from '../../../assets/skills/socket-io.png';
import Marquee from "react-fast-marquee";

const Skills = () => {



    return (
        <div className='my-16  py-10'>
            <div className='flex items-center justify-center gap-5'>
                <PiProjectorScreenChartFill className='text-4xl text-white mt-2' />
                <h3 className='text-center text-4xl font-bold text-white'>My Skills
                </h3>
            </div>

            <div className='mt-5'>
                <Marquee className=' md:ml-0 px-5 grid lg:grid-cols-6 gap-10 my-10'>
                    <div>
                        <div className="mx-5 card w-[150px] md:w-[150px] rounded-lg border-2 shadow-xl">
                            <div className="card-body h-[170px] bg-white rounded-lg">
                                <figure><img src={html} alt="Shoes" /></figure>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div
                            className="mx-5 card w-[150px] md:w-[150px]  rounded-lg border-2">
                            <div className="card-body h-[170px] bg-white rounded-lg">
                                <figure>
                                    <img src={css} alt="Shoes" />
                                </figure>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div
                            className="mx-5 card w-[150px] md:w-[150px] rounded-lg border-2">
                            <div className="card-body h-[170px] bg-white rounded-lg">
                                <figure><img src={js} alt="Shoes" /></figure>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div
                            className="mx-5 card w-[150px] md:w-[150px] rounded-lg border-2">
                            <div className="card-body h-[170px] bg-white rounded-lg">
                                <figure><img src={bootstrap} alt="Shoes" /></figure>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div
                            className="mx-5 card w-[150px] md:w-[150px] rounded-lg border-2">
                            <div className="card-body h-[170px] bg-white rounded-lg">
                                <figure><img className='overflow-hidden' src={tailwind} alt="Shoes" /></figure>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div
                            className="mx-5 card w-[150px] md:w-[150px] rounded-lg border-2">
                            <div className="card-body h-[170px] bg-white rounded-lg">
                                <figure><img className='h-[100px] md:h-[100px]' src={react} alt="Shoes" /></figure>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div
                            className="mx-5 card w-[150px] md:w-[150px] rounded-lg border-2">
                            <div className="card-body h-[170px] bg-white rounded-lg">
                                <figure><img className='h-[100px] md:h-[100px]' src={redux} alt="Shoes" /></figure>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div
                            className="mx-5 card w-[150px] md:w-[150px] rounded-lg border-2">
                            <div className="card-body h-[170px] bg-white rounded-lg">
                                <figure><img className='h-[100px] md:h-[100px]' src={axios} alt="Shoes" /></figure>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div
                            className="mx-5 card w-[150px] md:w-[150px] rounded-lg border-2">
                            <div className="card-body h-[170px] bg-white rounded-lg">
                                <figure><img className='h-[100px] md:h-[100px]' src={jwt} alt="Shoes" /></figure>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div
                            className="mx-5 card w-[150px] md:w-[150px] rounded-lg border-2">
                            <div className="card-body h-[170px] bg-white rounded-lg">
                                <figure><img className='h-[100px] md:h-[100px]' src={nextJs} alt="Shoes" /></figure>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div
                            className="mx-5 card w-[150px] md:w-[150px] rounded-lg border-2">
                            <div className="card-body h-[170px] bg-white rounded-lg">
                                <figure><img className='h-[100px] md:h-[100px]' src={wordpress} alt="Shoes" /></figure>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div
                            className="mx-5 card w-[150px] md:w-[150px] rounded-lg border-2">
                            <div className="card-body h-[170px] bg-white rounded-lg">
                                <figure><img className='h-[100px] md:h-[100px]' src={socketIo} alt="Shoes" /></figure>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div
                            className="mx-5 card w-[150px] md:w-[150px] rounded-lg border-2">
                            <div className="card-body h-[170px] bg-white rounded-lg">
                                <figure><img className='h-[100px]  md:h-[90px]' src={node} alt="Shoes" /></figure>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div
                            className="mx-5 card w-[150px] md:w-[150px] rounded-lg border-2">
                            <div className="card-body h-[170px] bg-white rounded-lg">
                                <figure><img className='h-[100px]  md:h-[100px]' src={Firebase} alt="Shoes" /></figure>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div
                            className="mx-5 card w-[150px] md:w-[150px] rounded-lg border-2">
                            <div className="card-body h-[170px] bg-white rounded-lg">
                                <figure><img src={DB} alt="Shoes" /></figure>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div
                            className="mx-5 card w-[150px] md:w-[150px] rounded-lg border-2">
                            <div className="card-body h-[170px] bg-white rounded-lg">
                                <figure><img className='pt-5' src={Git} alt="Shoes" /></figure>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div
                            className="mx-5 card w-[150px] md:w-[150px] rounded-lg border-2">
                            <div className="card-body h-[170px] bg-white rounded-lg">
                                <figure><img className='overflow-hidden' src={Express} alt="Shoes" /></figure>
                                <p className=' text-black font-bold'>Express</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div
                            className="mx-5 card w-[150px] md:w-[150px] rounded-lg border-2">
                            <div className="card-body h-[170px] bg-white rounded-lg">
                                <figure><img className='pt-5' src={strip} alt="Shoes" /></figure>
                            </div>
                        </div>
                    </div>

                </Marquee>
            </div>
        </div>
    );
};

export default Skills;