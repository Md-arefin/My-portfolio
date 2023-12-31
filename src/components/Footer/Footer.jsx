import React from 'react';
import my1 from '../../assets/my-1 (1).jpg';

const Footer = () => {


    return (
        <div>
            <footer className="footer p-10 bg-slate-600 text-black">
                <div>
                    <div className="avatar">
                        <div className="w-24 mx-16 mb-5 rounded">
                            <img src={my1} />
                        </div>
                    </div>
                    <p>
                        <span className='font-bold text-3xl font-serif'>
                            Rakibul Ansari Arifin
                        </span>
                    </p>
                </div>
                <div>
                    <span className="footer-title">Services</span>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
            </footer>
            <div className="footer footer-center p-4 bg-slate-300 text-black">
                <div>
                    <p>Copyright © 2023 - All right reserved by Rakibul Ansari Arifin Ltd.</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;