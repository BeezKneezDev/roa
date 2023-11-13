import React, { useEffect, useState } from 'react';
import SideBar from "../layouts/SideBar";
import Content from './../layouts/Content';

const Home = () => {

    const [isSidebarOpen, setSidebarOpen] = useState(true);
    const [sidebarHeight, setSidebarHeight] = useState('100vh'); // Set an initial height, e.g., 100vh (100% of the viewport height)

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
        const documentHeight = document.documentElement.scrollHeight;
        setSidebarHeight(`${documentHeight}px`);
    };

    useEffect(() => {
        // Function to handle window resize event
        const handleResize = () => {
            // Check the window width and set isSidebarOpen accordingly
            const documentHeight = document.documentElement.scrollHeight;
            setSidebarHeight(`${documentHeight}px`);
            if (window.innerWidth >= 1024) {
                setSidebarOpen(true); // Show sidebar on large screens
            } else {
                setSidebarOpen(false); // Hide sidebar on smaller screens
            }
        };

        // Add event listener for window resize
        window.addEventListener('resize', handleResize);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="flex flex-no-wrap h-screen">

            <button
                className={`lg:hidden z-20 fixed top-0 left-0 m-4 bg-gray-500 p-2 rounded-lg text-white`}
                onClick={toggleSidebar}
            >
                Menu
            </button>

            <SideBar
                sidebarHeight={sidebarHeight}
                isSidebarOpen={isSidebarOpen} // Pass the state to SideBar
                toggleSidebar={toggleSidebar} // Pass the function to SideBar
                vision={'Transforming the accessibility and availability of Te Reo Māori resources'}
                menuItems={[
                    {
                        text: 'About',
                        link: 'about',
                        css: 'text-base font-bold uppercase'
                    },
                    {
                        text: 'Reo Programmes',
                        link: 'kura-reo',
                        css: 'text-base font-bold uppercase'
                    },
                    {
                        text: 'Resources',
                        link: 'resources',
                        css: 'text-base font-bold uppercase'
                    },
                    {
                        text: 'Contact Us',
                        link: 'contact',
                        css: 'text-base font-bold uppercase text-blue-900'
                    },
                ]}
            />


            <Content />
        </div>
    );
};

export default Home;