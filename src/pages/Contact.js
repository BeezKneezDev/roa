import React, { useEffect, useState } from 'react';
import SideBar from "../layouts/SideBar";
import ContactForm from "../components/ContactForm";


const Contact = () => {
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
                        text: 'Direct Links',
                        link: '#',
                        css: 'text-base font-bold'
                    },
                    {
                        text: 'Regular Roa Ltd Contact',
                        subtext: 'admin@roaltd.co.nz',
                        href: 'mailto:admin@roaltd.co.nz',
                        css: 'text-sm ml-5'
                    },
                    {
                        text: 'Kura Reo Expression of Interest',
                        subtext: 'amy-leigh@roaltd.co.nz',
                        href: 'mailto:amy-leigh@roaltd.co.nz',
                        css: 'text-sm ml-5'
                    },
                    {
                        text: 'Murikura Expression of Interest',
                        subtext: 'anne@roaltd.co.nz',
                        href: 'mailto:anne@roaltd.co.nz',
                        css: 'text-sm ml-5'
                    },

                ]}
            />


            <div className=" w-full h-full mx-auto" style={{ backgroundImage: `url("images/bg-green.jpg")` }}>
                <div className="w-full h-full flex">
                    <ContactForm />
                </div>
            </div>
        </div>
    );
};

export default Contact;