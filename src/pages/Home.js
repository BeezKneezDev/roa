import React, { useEffect, useState } from 'react';
import Main from '../layouts/Main';

import { useDispatch } from 'react-redux';
import { setSidebarOpen } from '../slices/sidebarSlice';

const Home = () => {

    const dispatch = useDispatch();

    const menuItems = [
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
    ];

    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        if (window.innerWidth <= 1023) {
            dispatch(setSidebarOpen(false));
        }
        setTimeout(() => {
            setIsLoaded(true);
        }, 1000); // Adjust the delay as needed

    }, [dispatch]);

    return (
        <Main
            vision={'Transforming the accessibility and availability of Te Reo Māori resources.'}
            menuItems={menuItems}
        >
            <div
                className={` w-full h-auto mx-auto  transition-opacity duration-1000 ease-in-out bg-container`}
                style={{
                    backgroundImage: `url("images/bg-blue.jpg")`,
                }}
            >
                <div className="w-full h-full flex">
                    <img
                        className={`logo-container w-[90%]  m-auto ${isLoaded ? 'scale-100' : 'scale-0'  // Apply the scale class based on the loaded state
                            } transform transition-transform duration-1000 ease-in-out`}
                        src="images/logo.svg"
                        alt="Logo"
                    />
                </div>
            </div>
        </Main>
    );
};

export default Home;