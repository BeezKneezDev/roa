import { connect } from 'react-redux';
import SideBar from "../layouts/SideBar";
import slides from '../data/programs.json'
import React, { useEffect, useState } from 'react';
import { setCurrentIndex } from "../slices/sliderSlice";
import ContentSlider from './../components/ContentSlider';


const KuraReo = ({ setCurrentIndex }) => {
    const [isSidebarOpen, setSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
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

    const handleButtonClick = function (index) {
        setCurrentIndex(index - 1); // Dispatch the setCurrentIndex action
    }.bind(this);


    return (
        <div className="flex flex-no-wrap min-h-screen ">

            <button
                className={`lg:hidden z-20 fixed top-0 left-0 m-4 bg-gray-500 p-2 rounded-lg text-white`}
                onClick={toggleSidebar}
            >
                Menu
            </button>

            <SideBar
                isSidebarOpen={isSidebarOpen} // Pass the state to SideBar
                toggleSidebar={toggleSidebar} // Pass the function to SideBar
                vision={'Delivering Te Reo Māori programmes that promote cultural intelligence while fostering a love for Te Reo Māori.'}
                menuItems={[
                    {
                        text: 'PACKAGES',
                        link: '#',
                        css: 'text-base font-bold'
                    },
                    {
                        text: 'OFFICE BASIC',
                        handleClick: handleButtonClick.bind(this, 2),
                        css: 'text-sm ml-5'
                    },
                    {
                        text: 'OFFICE PREMIUM',
                        handleClick: handleButtonClick.bind(this, 6),
                        css: 'text-sm ml-5'
                    },
                    {
                        text: 'SMALL ORGANIZATION',
                        handleClick: handleButtonClick.bind(this, 1),
                        css: 'text-sm ml-5'
                    },
                    {
                        text: 'COMMUNITY PACKAGE',
                        handleClick: handleButtonClick.bind(this, 1),
                        css: 'text-sm ml-5'
                    },
                    {
                        text: 'SUPPLEMENTARY',
                        handleClick: handleButtonClick.bind(this, 1),
                        css: 'text-sm ml-5'
                    },
                    {
                        text: 'ENQUIRE NOW',
                        href: 'mailto:admin@roaltd.co.nz',
                        css: 'text-green-500 font-bold mt-5'
                    },

                ]}
            />


            <div className=" w-full lg:min-h-full mx-auto" style={{ backgroundImage: `url("images/bg-green.jpg")` }}>
                <div className="w-full h-full flex overflow-hidden">
                    <ContentSlider slides={slides} />
                </div>
            </div>
        </div >
    );
};

const mapDispatchToProps = {
    setCurrentIndex,
};

export default connect(null, mapDispatchToProps)(KuraReo);