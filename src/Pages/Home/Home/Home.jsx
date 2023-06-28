import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Skills/>
            <About/>
            <Projects/>
            <Contact/>
        </div>
    );
};

export default Home;