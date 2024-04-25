import React from 'react';
import Icon from '../icons/icon';
import MobileMenu from './MobileMenu';
import { useEffect } from 'react';

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

const Header = () => {
    useEffect(() => {
        const nav = document.querySelector('nav');
        let pos = window.scrollY;
        const handleScroll = () => {
            const newPos = window.scrollY;
            if (newPos > 50) {
                if (newPos < pos) {
                    nav.classList.add('animate-fadeInDown');
                    nav.classList.remove('animate-fadeOutUp');
                } else {
                    nav.classList.remove('animate-fadeInDown');
                    nav.classList.add('animate-fadeOutUp');
                }
            } else {
                nav.classList.remove('animate-fadeOutUp', 'animate-fadeInDown');
            }
            pos = newPos
        }
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])
    return (
        <header>
            <nav className='md:px-[40px] lg:px-10 px-6 md:py-8 py-4 flex items-center backdrop-blur fixed top-0 left-0 w-full z-50'>
                <div className='logo relative z-50'>
                    <a href='/' className='block w-12 h-12 relative transition-all text-green group'>
                        <div className='hex-container absolute top-0 left-0 transition-all'>
                            <Icon name='Hex' />
                        </div>
                        <div className='logo-container absolute top-0 left-0 z-10 transition-all group-hover:-translate-x-[4px] group-hover:-translate-y-[4px] group-focus:-translate-x-[4px] group-focus:-translate-y-[4px]'>
                            <Icon name='Logo' />
                        </div>
                    </a>
                </div>
                <ul className='navbar-nav ml-auto hidden font-mono md:flex'>
                    {menu && menu.map((item) => (
                        <li key={item.id} className='mx-1.5 hover:text-green focus:text-green transition-all'>
                            <a data-id={`${item.id}.`} href={item.tagID} className={`inline-block p-2.5 capitalize before:content-[attr(data-id)] text-xs before:mr-1.5 before:text-green text-lightest-slate`}>{item.name}</a>
                        </li>
                    ))}
                </ul>
                <div className='cv ml-4 md:block hidden'>
                    <a href='/' className='small-button'>resume</a>
                </div>
                <MobileMenu />
            </nav>
        </header>
    );
};

export default Header;