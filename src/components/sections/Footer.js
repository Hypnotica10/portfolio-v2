import React from 'react';
import Icon from '../icons/icon';
import { social } from '../../data';

const Footer = () => {
    return (
        <footer>
            <div className='p-4 flex flex-col items-center justify-center'>
                <div className='md:hidden block md:mb-0 mb-2.5'>
                    <ul className='flex gap-5'>
                        {social && social.map((item) => (
                            <li key={item.id}>
                                <a href={item.linkTo} className='inline-block p-2.5 hover:text-green transition-all focus:text-green hover:-translate-y-1 focus:-translate-y-1'>
                                    <div className='w-5 h-5'>
                                        {item.icon}
                                    </div>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <a href='https://github.com/bchiang7/v4' className='inline-flex items-center justify-center flex-col text-xs group gap-2.5'>
                    <span className='group-hover:text-green transition-all'>Designed by Brittany Chiang</span>
                    <span className='group-hover:text-green transition-all flex gap-4'>
                        <span className='flex items-center justify-center gap-1.5'>
                            <div className='w-4 h-4'>
                                <Icon name='Star' />
                            </div>
                            <span>7,171</span>
                        </span>
                        <span className='flex items-center justify-center gap-1.5'>
                            <div className='w-4 h-4'>
                                <Icon name='Fork' />
                            </div>
                            <span>3,489</span>
                        </span>
                    </span>
                </a>
            </div>
        </footer>
    );
};

export default Footer;