import React from 'react';
import {AiOutlineFundProjectionScreen } from 'react-icons/ai';

const Projects = () => {
    return (
        <div className='my-16 py-10 bg-slate-400'>
            <div className='flex items-center justify-center gap-5'>
                <AiOutlineFundProjectionScreen className='text-3xl'/>
                <h1 className='text-center text-3xl font-bold'>My Projects</h1> 
            </div>
            <div className='h-[300px]'></div>
        </div>
    );
};

export default Projects;