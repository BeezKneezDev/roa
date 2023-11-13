import React, { useEffect, useState } from 'react';
import SideBar from "../layouts/SideBar";


const Resources = () => {
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


            <div className=" w-full h-full mx-auto" style={{ backgroundImage: `url("images/bg-yellow.png")` }}>
                <div className="w-full h-full flex">


                    <div className=" m-auto w-[800px] ">
                        <h2 className=" text-white text-center text-5xl font-medium pb-4">Our Resources</h2>

                        <div className=" bg-white p-12 rounded-lg shadow-xl">


                            <div className="">
                                <div>
                                    <p>Rau-Ringa Inspires curiosity, exploration, and experimentation with te reo Māori by creating authentic te reo Māori books, puzzles, and games for tamariki ages 5 - 12.</p>
                                    <p>Our resources are first and foresmost Māori (not translated from English) and can be found in homes, in Kohanga and Early Childhood centers, Schools, Kura, and local community spaces such as Marae, and public spaces such as Doctors waiting rooms.</p>
                                    <div className=" text-center mt-10">
                                        <a href="https://rauringa.co.nz/"
                                            target="blank"
                                            className="bg-yellow-400 text-white px-4 py-2 rounded-full hover:bg-yellow-500 focus:outline-none focus:bg-yellow-500">
                                            Read More
                                        </a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>



                </div>
            </div>
        </div>
    );
};

export default Resources;