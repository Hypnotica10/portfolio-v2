import React from 'react';

const Experience = () => {
    return (
        <section id='experience' className='main-content'>
            <div className='md:py-[100px] sm:py-20 py-14'>
                <h2 data-ordinal='02.' className='capitalize text-heading flex items-center text-lightest-slate font-bold relative mt-2.5 mb-10
                                                before:content-[attr(data-ordinal)] before:mr-2.5 before:relative before:text-green before:font-mono before:text-ordinal before:top-1 before:font-normal
                                                after:relative after:block after:ml-5 after:bg-lightest-navy lg:after:w-52 sm:after:w-4/12 after:w-auto tracking-tight after:h-px
                '>
                    Where I’ve Worked
                </h2>
            </div>
        </section>
    );
};

export default Experience;