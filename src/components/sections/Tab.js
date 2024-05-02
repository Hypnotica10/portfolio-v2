import React, { useEffect, useState } from 'react';

export const Tab = ({ children, active = 0 }) => {
    const [activeTab, setActiveTab] = useState(active);
    const [tabsData, setTabsData] = useState([]);

    const setCords = (line, element, viewport) => {
        if (viewport.innerWidth >= 640) {
            const height = Math.ceil(element.clientHeight) - 0.5;
            const top = Math.ceil(element.offsetTop);
            line.style.left = `0px`;
            line.style.height = `${height}px`;
            line.style.width = `2px`;
            line.style.top = `${top}px`;
            return;
        }
        line.style.top = 'auto';
        const width = element.clientWidth;
        const left = element.offsetLeft;
        line.style.width = `${width}px`;
        line.style.left = `${left}px`;
        line.style.height = `2px`;
        line.style.bottom = `0px`;
    }

    const handleClick = (e, tabOrdinal) => {
        setActiveTab(tabOrdinal);
        const lineActive = document.querySelector('.line-active');
        setCords(lineActive, e.target, window)
    }

    useEffect(() => {
        const data = [];

        React.Children.forEach(children, (child) => {
            if (!React.isValidElement(child)) return;
            const { props: {
                id,
                company,
                detail,
            } } = child;

            data.push({ id, company, detail })
        });

        setTabsData(data);
    }, [children])

    const handleLineActive = (e) => {
        const lineActive = document.querySelector('.line-active');
        const buttonActive = document.querySelector('.button-active');
        if (!buttonActive) return;
        setCords(lineActive, buttonActive, e.currentTarget)
    }

    useEffect(() => {
        const lineActive = document.querySelector('.line-active');
        const buttonActive = document.querySelector('.button-active');
        if (!buttonActive) return;
        setCords(lineActive, buttonActive, window)
    }, [tabsData])

    useEffect(() => {
        window.addEventListener('resize', handleLineActive);

        return () => {
            window.removeEventListener('resize', handleLineActive);
        }
    })
    return (
        <div className='flex flex-col sm:flex-row w-full'>
            <div className='relative sm:mb-0 mb-10'>
                <div className='nav-tab flex sm:flex-col flex-row w-auto overflow-x-auto relative'>
                    {tabsData && tabsData.map((tab) => {
                        return (
                            <button
                                key={tab.id}
                                data-id={tab.id}
                                type='button'
                                className={`font-mono whitespace-nowrap text-sm px-5 py-2.5 text-left transition-all sm:border-l-2 sm:border-b-0 border-b-2 border-l-0 sm:border-lightest-navy  border-lightest-navy ${activeTab === tab.id ? 'button-active bg-lightest-navy text-green' : ''} hover:bg-lightest-navy focus:bg-lightest-navy hover:text-green focus:text-green`}
                                onClick={(e) => handleClick(e, tab.id)}
                            >
                                {tab.company}
                            </button>
                        )
                    })}
                    <div className='absolute line-active bg-green rounded transition-all sm:top-0 sm:left-0 sm:bottom-auto'></div>
                </div>
            </div>
            <div className='sm:ml-5 sm:px-0 px-1.5'>
                {tabsData[activeTab - 1] && (
                    <div className=''>
                        <h3 className='flex gap-1.5 mb-3 items-center flex-wrap'>
                            <span className='text-xxl'>{tabsData[activeTab - 1].detail.position}</span>
                            <span className='text-green flex gap-1.5'>
                                @
                                <a href={tabsData[activeTab - 1].detail.linkCompany} className='inline-block text-green relative before:absolute before:w-0 before:h-px before:bg-green before:bottom-0 hover:before:w-full before:transition-all'>{tabsData[activeTab - 1].company}</a>
                            </span>
                        </h3>
                        <p className='mb-6 text-sm font-mono'>{tabsData[activeTab - 1].detail.time}</p>
                        <div className=''>
                            <ul className=''>
                                {tabsData[activeTab - 1].detail.desc.map((item, index) => (
                                    <li key={index} className='pl-7 mb-2.5 text-base relative before:content-["▹"] before:absolute before:left-0 before:text-green'>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export const TabPane = ({ children }) => {
    return { children }
}
