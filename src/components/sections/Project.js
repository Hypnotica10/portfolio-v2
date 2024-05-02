import React, { useEffect, useState } from 'react';
import Icon from '../icons/icon';

const SelfProject = ({ project }) => {
    return (
        <div className='project-inner px-7 py-8 bg-light-navy rounded flex flex-col items-start justify-between h-full relative pointer-events-none hover:translate-y-[-7px] focus:translate-y-[-7px] transition-all'>
            <div className='flex flex-col justify-between'>
                <div className='flex items-center justify-between mb-9 w-full'>
                    <div className='w-10 h-10 text-green'>
                        <Icon name='Folder' />
                    </div>
                    <div className='flex items-center '>
                        {project.iconGithub && (
                            <div className='w-9 h-9 p-1.5'>
                                <a href={project.link} className='hover:text-green relative z-10 pointer-events-auto'>
                                    {project.iconGithub}
                                </a>
                            </div>
                        )}
                        {project.iconDemo && (
                            <div className='w-9 h-9 p-1.5'>
                                <a href={project.demo} className='hover:text-green relative z-10 pointer-events-auto'>
                                    {project.iconDemo}
                                </a>
                            </div>
                        )}
                    </div>
                </div>
                <h3 className='mb-2.5'>
                    <a href={project.demo ? project.demo : project.link} className='text-xxl text-lightest-slate before:absolute before:w-full before:h-full before:top-0 before:left-0 before:bottom-0 before:right-0 before:block transition-all pointer-events-auto hover:text-green focus:text-green'>{project.title}</a>
                </h3>
                <p className='sm:text-base text-sm text-light-slate'>{project.desc}</p>
            </div>
            <ul className='mt-5 flex gap-4 text-xs font-mono'>
                {project.techList && project.techList.map((item, index) => (
                    <li key={index} className=''>{item}</li>
                ))}
            </ul>
        </div>
    )
}

const Project = ({ projects }) => {
    const [list, setList] = useState([]);
    const [showMore, setShowMore] = useState(true);
    const allProject = projects.filter((item) => item.id > 3);
    const firstSix = projects.slice(3, 9);
    const handleClick = () => {
        setShowMore(!showMore)
        if (showMore) {
            setList(allProject);
            return;
        }
        setList(firstSix);
    }

    useEffect(() => {
        setList(firstSix);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        const li = document.querySelectorAll('.fadeup-enter');
        if (!li) return;
        let time = -100;
        li.forEach((item) => {
            setTimeout(() => {
                time += 100;
                item.classList.add('fadeup-enter-active');
                item.style.transitionDelay = `${time}ms`;
            }, time)
        })
    }, [list])

    return (
        <div className='md:py-[100px] sm:py-20 py-14'>
            <div className='flex flex-col justify-center items-center'>
                <h2 className='mb-2.5 [font-size:_clamp(22px,5vw,32px)] font-bold leading-[1.1]'>Other Noteworthy Projects</h2>
                <a href='##' className='inline-block text-green relative before:absolute before:w-0 before:h-px before:bg-green before:bottom-0 before:transition-all text-sm font-mono hover:before:w-full'>view the archie</a>
            </div>
            <ul className='mt-12 grid lg:grid-cols-3 sm:grid-cols-2 lg:px-0 sm:px-5 gap-4'>
                {list && list.map((item) =>
                    item.id > 2 && item.id < 10 ?
                        (
                            <li className='shadow-mobileMenu' key={item.id}>
                                <SelfProject project={item} />
                            </li>
                        )
                        :
                        (
                            <li className='shadow-mobileMenu fadeup-enter' key={item.id}>
                                <SelfProject project={item} />
                            </li>
                        )
                )}
            </ul>
            <div className='flex'>
                <span className='button big-button mt-20 mx-auto cursor-pointer' onClick={handleClick}>{showMore ? 'Show More' : 'Show Less'}</span>
            </div>
        </div>
    );
};

export default Project;