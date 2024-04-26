import React, { useEffect, useRef, useState } from 'react';
import HamburgerButton from './HamburgerButton';
import useClickOutSide from '../../hook/useClickOutSide';

const menu = [
    {
        id: 1,
        name: 'about',
        tagID: '#about',
    },
    {
        id: 2,
        name: 'experience',
        tagID: '#experience',
    },
    {
        id: 3,
        name: 'work',
        tagID: '#work',
    },
    {
        id: 4,
        name: 'contact',
        tagID: '#contact',
    },
];

const MobileMenu = () => {
    const [openMenuSide, setOpenMenuSide] = useState(false);

    const ref = useRef(null)

    const handleClickOutSide = () => {
        setOpenMenuSide(false);
    }

    useClickOutSide(ref, handleClickOutSide)

    const handleClickHamButton = () => {
        setOpenMenuSide(!openMenuSide);
    }

    const handleResize = e => {
        if (e.currentTarget.innerWidth > 768) {
            setOpenMenuSide(false);
        }
    };

    useEffect(() => {
        if (openMenuSide) {
            document.querySelector('body').classList.add('overflow-hidden');
        } else {
            document.querySelector('body').classList.remove('overflow-hidden')
        }
    }, [openMenuSide]);

    useEffect(() => {
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])
    return (
        <div className='ml-auto md:hidden block' ref={ref}>
            <HamburgerButton openMenuSide={openMenuSide} handleClickHamButton={handleClickHamButton} />
            <div className={`mobile-menu py-[50px] fixed top-0 right-0 bottom-0 h-screen px-2.5 shadow-mobileMenu bg-light-navy w-[min(400px,_75vw)] transition-all z-40 flex flex-col items-center ${openMenuSide ? 'translate-x-0' : 'translate-x-[200%]'}`}>
                <ul className='navbar-nav flex font-mono flex-col items-center py-[50px] text-lightest-slate w-full'>
                    {menu && menu.map((item) => (
                        <li key={item.id} className='mx-1.5 hover:text-green focus:text-green transition-all w-full'>
                            <a data-id={`0${item.id}.`} href={item.tagID} className={`tracking-widest block pt-2.5 px-5 pb-5 capitalize text-center before:content-[attr(data-id)] before:mb-1.5 before:block text-lg before:text-green`}>{item.name}</a>
                        </li>
                    ))}
                </ul>
                <div className='cv'>
                    <a href='/' className='button big-button'>resume</a>
                </div>
            </div>
        </div>
    );
};

export default MobileMenu;