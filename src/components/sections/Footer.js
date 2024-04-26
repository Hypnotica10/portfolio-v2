import React from 'react';
import Icon from '../icons/icon';

const Footer = () => {
    return (
        <footer>
            <div className='p-4 flex items-center justify-center'>
                <a href='/' className='inline-flex items-center justify-center flex-col text-xs group gap-2.5'>
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