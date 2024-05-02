import React from 'react';
import TitleSection from './TitleSection';
import { projects } from '../../data';
import Project from './Project';

const SelfProject = ({ project }) => {
    return (
        <>
            <div className='project-content row-start-1 row-end-1 md:p-0 px-6 pt-6 pb-5 md:bg-transparent'>
                <p className='my-2.5 text-green font-mono text-xs inline-block uppercase relative z-10'>{project.overline}</p>
                <h3 className='mb-5'>
                    <a href={project.link} className='text-title hover:text-green transition-all relative z-10'>{project.title}</a>
                </h3>
                <div className='md:p-6 rounded sm:text-base text-sm md:bg-light-navy text-light-slate relative z-10 text-left md:shadow-mobileMenu flex flex-col gap-2.5'>
                    {project.desc && project.desc.map((item, index) => (
                        <p key={index} className=''>{item}</p>
                    ))}
                </div>
                <ul className='mt-6 mb-2.5 flex flex-wrap relative z-10 text-light-slate text-xs gap-5 font-mono capitalize'>
                    {project.techList && project.techList.map((item, index) => (
                        <li key={index} className=''>{item}</li>
                    ))}
                </ul>
                <div className='inline-flex justify-end items-center text-lightest-slate relative z-10'>
                    <a href={project.link} className='block w-10 h-10 p-2.5 hover:text-green'>
                        {project.iconGithub}
                    </a>
                    <a href={project.demo} className='block w-10 h-10 p-2.5 hover:text-green'>
                        {project.iconDemo}
                    </a>
                </div>
            </div>
            <div className='relative project-image row-start-1 row-end-1 rounded group h-full overflow-hidden'>
                <a href={project.link} className='block w-full h-full md:bg-green rounded before:absolute before:w-full before:h-full before:transition-all md:before:bg-navy before:mix-blend-screen group-hover:before:mix-blend-normal transition-all'>
                    <div className='rounded relative w-full h-full mix-blend-multiply grayscale contrast-100 brightness-90 transition-all md:group-hover:mix-blend-normal md:group-hover:grayscale-0'>
                        <img src={require(`../../image/${project.image}`)} alt='' className='block absolute bottom-0 left-0 right-0 top-0 object-cover object-center w-full h-full rounded transition-all' />
                    </div>
                </a>
            </div>
        </>
    )
}

const Work = () => {
    return (
        <section id='work' className='main-content'>
            <div className='md:py-[100px] sm:py-20 py-14'>
                <TitleSection title='Some Things I’ve Built' ordinal='03.' />
                <ul className='md:[&>*:not(:last-child)]:mb-20 sm:[&>*:not(:last-child)]:mb-10 [&>*:not(:last-child)]:mb-7 xl:[&>:nth-child(odd)>:nth-child(odd)]:col-start-7 xl:[&>:nth-child(odd)>:nth-child(odd)]:col-end-13 xl:[&>:nth-child(even)>:nth-child(odd)]:col-start-1 xl:[&>:nth-child(even)>:nth-child(odd)]:col-end-7 xl:[&>:nth-child(odd)>:nth-child(even)]:col-start-1 xl:[&>:nth-child(odd)>:nth-child(even)]:col-end-8 xl:[&>:nth-child(even)>:nth-child(even)]:col-start-6 xl:[&>:nth-child(even)>:nth-child(even)]:col-end-13 md:[&>:nth-child(odd)>:nth-child(odd)]:text-right md:[&>:nth-child(even)>:nth-child(odd)]:text-left md:[&>:nth-child(odd)>:first-child>:nth-child(4)]:justify-end md:[&>:nth-child(even)>:first-child>:nth-child(5)]:justify-start
                lg:[&>:nth-child(odd)>:nth-child(odd)]:col-start-5 lg:[&>:nth-child(odd)>:nth-child(odd)]:col-end-13 lg:[&>:nth-child(even)>:nth-child(odd)]:col-start-1 lg:[&>:nth-child(even)>:nth-child(odd)]:col-end-9 lg:[&>:nth-child(odd)>:nth-child(even)]:col-start-1 lg:[&>:nth-child(odd)>:nth-child(even)]:col-end-8 lg:[&>:nth-child(even)>:nth-child(even)]:col-start-6 lg:[&>:nth-child(even)>:nth-child(even)]:col-end-13
                md:[&>:nth-child(odd)>:nth-child(odd)]:col-start-4 md:[&>:nth-child(odd)>:nth-child(odd)]:col-end-13 md:[&>:nth-child(even)>:nth-child(odd)]:col-start-1 md:[&>:nth-child(even)>:nth-child(odd)]:col-end-10 md:[&>:nth-child(odd)>:nth-child(even)]:col-start-1 md:[&>:nth-child(odd)>:nth-child(even)]:col-end-8 md:[&>:nth-child(even)>:nth-child(even)]:col-start-6 md:[&>:nth-child(even)>:nth-child(even)]:col-end-13
                [&>:nth-child(odd)>:nth-child(odd)]:col-start-1 [&>:nth-child(odd)>:nth-child(odd)]:col-end-13 [&>:nth-child(even)>:nth-child(odd)]:col-start-1 [&>:nth-child(even)>:nth-child(odd)]:col-end-13 [&>:nth-child(odd)>:nth-child(even)]:col-start-1 [&>:nth-child(odd)>:nth-child(even)]:col-end-13 [&>:nth-child(even)>:nth-child(even)]:col-start-1 [&>:nth-child(even)>:nth-child(even)]:col-end-13
                '>
                    {projects && projects.map((item) =>
                        item.overline === 'Featured Project' && (
                            <li key={item.id} className='grid grid-cols-12 gap-2.5 items-center rounded overflow-hidden'>
                                <SelfProject project={item} />
                            </li>
                        )
                    )}
                </ul>
            </div>
            <Project projects={projects} />
        </section>
    );
};

export default Work;