import React from 'react';
import { email, social } from '../../data';

const Social = () => {
    return (
        <div className='md:block hidden'>
            <div className='left fixed bottom-0 left-10'>
                <ul className='flex flex-col items-center justify-center [&>*:last-child]:mb-5 after:w-px after:h-24 after:bg-current'>
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
            <div className='right fixed bottom-0 right-10'>
                <div className="[writing-mode:vertical-lr] after:w-px after:h-24 after:bg-current flex items-center justify-center">
                    <a href={`mailto:${email}`} className='text-xs inline-block my-5 p-2.5 tracking-widest hover:text-green focus:text-green transition-all hover:-translate-y-1 focus:-translate-y-1'>{email}</a>
                </div>
            </div>
        </div>
    );
};

export default Social;