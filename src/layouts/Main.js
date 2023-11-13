import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import SideBar from './SideBar';


const Main = ({vision, menuItems, children}) => {
    const location = useLocation();

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
                vision={vision}
                menuItems={menuItems}
            />

        {/* Main Content */}
        {children}

        </div>

    )
}

export default Main