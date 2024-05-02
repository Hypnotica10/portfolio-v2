import React from 'react';

const TitleSection = ({ title, ordinal }) => {
    return (
        <h2 data-ordinal={`${ordinal}`} className='capitalize text-heading flex items-center text-lightest-slate font-bold relative mt-2.5 mb-10 tracking-tight
                                                before:content-[attr(data-ordinal)] before:mr-2.5 before:relative before:text-green before:font-mono before:text-ordinal before:top-1 before:font-normal
                '>
            {title}
        </h2>
    );
};

export default TitleSection;