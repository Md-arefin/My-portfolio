import React from 'react';
import { BiSolidContact } from 'react-icons/bi';
import { BsSendFill } from 'react-icons/bs';
import { Player, Controls } from '@lottiefiles/react-lottie-player';

const Contact = () => {
    return (
        <div className='my-16'>
            <div className='flex items-center justify-center gap-5'>
                <BiSolidContact className='text-4xl  mt-2' />
                <h3 className='text-center text-4xl font-bold '>Contact
                </h3>
            </div>

            <div>
                <div className="hero flex flex-col md:flex-row my-10">
                    <div className='md:w-[50%] mx-5'>
                        <Player
                            className='md:w-[80%]'
                            autoplay
                            loop
                            src="https://assets9.lottiefiles.com/packages/lf20_in4cufsz.json"

                        >
                            <Controls visible={!true} buttons={['play', 'repeat', 'frame', 'debug']} />
                        </Player>
                    </div>
                    <div className="hero-content md:w-[45%]">
                        <div className="card w-full shadow-2xl bg-white rounded-3xl">
                            <div className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="text-black label-text">Your Name</span>
                                    </label>
                                    <input type="text" placeholder="Enter your name" className="input input-bordered rounded-xl" />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="text-black label-text">Email</span>
                                    </label>
                                    <input type="text" placeholder="Enter your email" className="input input-bordered rounded-xl" />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-black">Massage</span>
                                    </label>
                                    <input type="text" placeholder="type here" className="input input-bordered rounded-xl" />
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary text-lg rounded-xl"><BsSendFill/>Send</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;