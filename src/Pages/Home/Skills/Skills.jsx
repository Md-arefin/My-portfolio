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
// import html from '../../../assets/skills/HTML.png'

const Skills = () => {
    return (
        <div className='my-16 bg-slate-500 py-10'>
            <div className='flex items-center justify-center gap-5'>
                <PiProjectorScreenChartFill className='text-4xl text-slate-950 mt-2' />
                <h3 className='text-center text-4xl font-bold text-black'>My Skills
                </h3>
            </div>

            <div className='ml-8 md:ml-0 px-10 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-10 my-10'>
                <div>
                    <div className="mx-5 card w-[150px] h-[190px] border-black rounded-lg border-2 shadow-xl">
                        <div className="card-body bg-white rounded-lg">
                            <figure><img src={html} alt="Shoes" /></figure>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="mx-5 card w-[150px] h-[190px] border-black rounded-lg border-2">
                        <div className="card-body bg-white rounded-lg">
                            <figure><img src={css} alt="Shoes" /></figure>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="mx-5 card w-[150px] h-[190px] border-black rounded-lg border-2">
                        <div className="card-body bg-white rounded-lg">
                            <figure><img src={js} alt="Shoes" /></figure>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="mx-5 card w-[150px] h-[190px] border-black rounded-lg border-2">
                        <div className="card-body bg-white rounded-lg">
                            <figure><img src={bootstrap} alt="Shoes" /></figure>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="mx-5 card w-[150px] h-[190px] border-black rounded-lg border-2">
                        <div className="card-body bg-white rounded-lg">
                            <figure><img className='overflow-hidden' src={tailwind} alt="Shoes" /></figure>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="mx-5 card w-[150px] border-black rounded-lg border-2">
                        <div className="card-body bg-white rounded-lg">
                            <figure><img src={react} alt="Shoes" /></figure>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="mx-5 card w-[150px] h-[190px]  border-black rounded-lg border-2">
                        <div className="card-body bg-white rounded-lg">
                            <figure><img className='h-[110px]' src={node} alt="Shoes" /></figure>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="mx-5 card w-[150px] h-[190px] border-black rounded-lg border-2">
                        <div className="card-body bg-white rounded-lg">
                            <figure><img src={Firebase} alt="Shoes" /></figure>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="mx-5 card w-[150px] h-[190px] border-black rounded-lg border-2">
                        <div className="card-body bg-white rounded-lg">
                            <figure><img src={DB} alt="Shoes" /></figure>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="mx-5 card w-[150px] h-[190px]  border-black rounded-lg border-2">
                        <div className="card-body bg-white rounded-lg">
                            <figure><img className='pt-10' src={Git} alt="Shoes" /></figure>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="mx-5 card w-[150px]  h-[190px] border-black rounded-lg border-2">
                        <div className="card-body bg-white rounded-lg">
                            <figure><img src={Express} alt="Shoes" /></figure>
                            <p className='text-2xl text-black font-bold'>Express</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Skills;