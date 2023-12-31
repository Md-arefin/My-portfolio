import React from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
    const navItems = <>
        <li>
            <Link to='/'>Home</Link>
        </li>
        <li>
            <Link
                activeClass="active"
                to="Projects"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}>Projects</Link>
        </li>
        <li>
            <Link  activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}>About</Link>
        </li>
        <li>
            <Link  activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}>Contact</Link>
        </li>
    </>

    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navItems}
                        </ul>
                    </div>
                    <Link to='/' className="btn bg-black border-0 font-bold hover:bg-white hover:text-black normal-case text-xl rounded">My Portfolio</Link>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navItems}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;