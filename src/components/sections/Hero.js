import React from 'react';
import { desc, linkApp, listCompany, name } from '../../data';

const Hero = () => {
    return (
        <section className='hero main-content flex flex-col'>
            <div>
                <h1 className='ml-2 sm:mb-8 mb-5 text-base font-mono text-green'>Hi, my name is</h1>
            </div>
            <div>
                <h2 className='text-h2 inline-block tracking-tight'>{name}.</h2>
            </div>
            <div>
                <h3 className='text-h2 text-slate mt-1.5 tracking-tight'>I build things for the web.</h3>
            </div>
            <div className='max-w-xl mt-5'>
                <p className=''>{desc} <a href={listCompany[0].link} className='inline-block text-green relative before:absolute before:w-0 before:h-px before:bg-green before:bottom-0 hover:before:w-full before:transition-all'>{listCompany.name}</a></p>
            </div>
            <div className='mt-12'>
                <a href={linkApp} className='button big-button'>Check out my app!</a>
            </div>
        </section>
    );
};

export default Hero;