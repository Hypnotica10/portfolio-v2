import React from 'react';
import About from './About';
import Experience from './Experience';
import Work from './Work';
import Contact from './Contact';
import Hero from './Hero';

const Main = () => {
    return (
        <main id='main' className='pt-28 xl:px-[150px] md:px-[100px] px-5'>
            <Hero />
            <About />
            <Experience />
            <Work />
            <Contact />
        </main>
    );
};

export default Main;