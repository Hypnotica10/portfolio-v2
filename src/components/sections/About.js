import React from 'react';
import Avatar from '../../image/avatar.jpg';
import { listCompany, listTechnologies } from '../../data';
import TitleSection from './TitleSection';

const About = () => {
    return (
        <section id='about' className='main-content'>
            <div className='md:py-[100px] sm:py-20 py-14'>
                <TitleSection title='About Me' ordinal='01.' />
                <div className='flex flex-wrap md:flex-row flex-col'>
                    <div className='md:w-7/12'>
                        <p className='mb-4'>Hello! My name is Brittany and I enjoy creating things that live on the internet. My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!</p>
                        <p className='mb-4'>Fast-forward to today, and I’ve had the privilege of working at <a href={listCompany[1].link} className="inline-block text-green relative before:absolute before:w-0 before:h-px before:bg-green before:bottom-0 hover:before:w-full before:transition-all">{listCompany[1].name}</a>, <a href={listCompany[2].link} className="inline-block text-green relative before:absolute before:w-0 before:h-px before:bg-green before:bottom-0 hover:before:w-full before:transition-all">{listCompany[2].name}</a>, <a href={listCompany[3].link} className="inline-block text-green relative before:absolute before:w-0 before:h-px before:bg-green before:bottom-0 hover:before:w-full before:transition-all">{listCompany[3].name}</a>, and <a href={listCompany[4].link} className="inline-block text-green relative before:absolute before:w-0 before:h-px before:bg-green before:bottom-0 hover:before:w-full before:transition-all">{listCompany[4].name}</a>. My main focus these days is building accessible, inclusive products and digital experiences at <a href={listCompany[0].link} className="inline-block text-green relative before:absolute before:w-0 before:h-px before:bg-green before:bottom-0 hover:before:w-full before:transition-all">{listCompany[0].name}</a> for a variety of clients.</p>
                        <p className='mb-5'>Here are a few technologies I’ve been working with recently:</p>
                        <ul className='flex flex-wrap items-start'>
                            {listTechnologies && listTechnologies.map((item) => (
                                <li key={item.id} className='w-1/2 mb-2.5 pl-5 relative before:content-["▹"] before:absolute before:left-0 before:text-green font-mono md:text-xs 860:text-base sm:text-base text-xs'>
                                    {item.name}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className='md:w-5/12 flex justify-center md:pl-5 md:mt-0 mt-12'>
                        <div className='about-image lg:w-80 lg:h-80 860:w-60 860:h-60 md:w-52 md:h-52 sm:w-80 sm:h-80 w-48 h-48 relative rounded group transition-all 
                                        after:w-full after:h-full after:absolute after:top-0 after:left-0 after:bottom-0 after:right-0 after:border-2 after:border-green after:translate-x-3 after:translate-y-3 after:rounded after:-z-10 hover:after:translate-x-[14px] hover:after:translate-y-[14px]
                                        before:w-full before:h-full before:absolute before:top-0 before:left-0 before:bottom-0 before:right-0 before:bg-navy before:rounded 
                                        before:mix-blend-screen hover:before:mix-blend-normal hover:before:-translate-x-2 hover:before:-translate-y-2
                        '>
                            <div className='image relative w-full h-full rounded bg-green hover:-translate-x-1 hover:-translate-y-1 transition-all'>
                                <img src={Avatar} alt='' className='block object-cover w-full h-full rounded mix-blend-multiply grayscale contrast-100 transition-all group-hover:mix-blend-normal group-hover:grayscale-0' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;