import React from 'react';

const HamburgerButton = ({ openMenuSide, handleClickHamButton }) => {

    return (
        <button type='button' className='md:hidden block ml-auto p-4 bg-transparent relative z-50' onClick={handleClickHamButton}>
            <div className='ham-box inline-block relative w-8 h-6'>
                <div className={`absolute top-1/2 right-0 w-8 h-0.5 rounded bg-green ${openMenuSide ? 'rotate-[225deg] ham-main-active' : 'rotate-0 ham-main'}`}></div>
                <div className={`absolute block h-0.5 bg-green left-auto right-0 rounded ${openMenuSide ? 'w-full top-[10px] opacity-0 ham-before-active' : 'w-[120%] top-0 opacity-100 ham-before'}`}></div>
                <div className={`absolute block h-0.5 bg-green left-auto right-0 rounded ${openMenuSide ? 'w-full bottom-[10px] rotate-[135deg] ham-after-active' : 'w-[80%] bottom-0 rotate-0 ham-after'}`}></div>
            </div>
        </button>
    );
};

export default HamburgerButton;

