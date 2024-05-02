import React from 'react';
import { Tab, TabPane } from './Tab';
import { tabContent } from '../../data';
import TitleSection from './TitleSection';

const Experience = () => {
    return (
        <section id='experience' className='main-content'>
            <div className='max-w-[700px] mx-auto md:py-[100px] sm:py-20 py-14'>
                <TitleSection title='Where I’ve Worked' ordinal='02.' />
                <Tab active={1}>
                    {tabContent && tabContent.map((item) => (
                        <TabPane key={item.id} id={item.id} company={item.company} detail={item.detail} />
                    ))}
                </Tab>
            </div>
        </section>
    );
};

export default Experience;