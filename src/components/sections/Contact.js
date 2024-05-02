import React from 'react';
import { email } from '../../data';

const Contact = () => {
    return (
        <section id='contact' className='main-content'>
            <div className='md:py-[100px] sm:py-20 py-14 max-w-[600px] mx-auto flex flex-col items-center mb-20'>
                <h2 data-ordinal='04.' className='capitalize text-lg flex items-center font-mono text-green font-normal relative tracking-tight mt-2.5 mb-5
                                                before:content-[attr(data-ordinal)] before:mr-2.5 before:relative before:text-green before:font-mono before:text-base before:top-px before:font-normal
                '>
                    What’s Next?
                </h2>
                <h2 className='[font-size:_clamp(40px,5vw,60px)] font-bold leading-[1.1] mb-5'>Get In Touch</h2>
                <p className='text-center'>Although I’m not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!</p>
                <a href={`mailto:${email}`} className='button big-button mt-12'>Say Hello</a>
            </div>
        </section>
    );
};

export default Contact;