import React, { useEffect, useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import SideBar from './SideBar';

const Main = ({ vision, menuItems, children }) => {
    const location = useLocation();

    const [isSidebarOpen, setSidebarOpen] = useState(true);
    const [sidebarHeight, setSidebarHeight] = useState('100vh');

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
        const documentHeight = document.documentElement.scrollHeight;
        setSidebarHeight(`${documentHeight}px`);
    };

    useEffect(() => {
        const handleResize = () => {
            const documentHeight = document.documentElement.scrollHeight;
            setSidebarHeight(`${documentHeight}px`);
            if (window.innerWidth >= 1024) {
                setSidebarOpen(true);
            } else {
                setSidebarOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="flex flex-no-wrap min-h-screen">
            <div
                className={`lg:hidden z-20 fixed top-0 left-0 m-4 text-white flex h-[50px] cursor-pointer`}
                onClick={toggleSidebar}
            >
                <div className=' brand-blue-bg h-full w-[25px] '></div>
                <div className=' bg-black h-full w-[8px] '></div>
                <img className='ml-1 p-1' src='/images/menu-logo.png' />
            </div>

            <SideBar
                sidebarHeight={sidebarHeight}
                isSidebarOpen={isSidebarOpen}
                toggleSidebar={toggleSidebar}
                vision={vision}
                menuItems={menuItems}
            />

            {/* Main Content */}
 
                {children}
    
        </div>
    );
};

export default Main;
