import React, { useEffect } from 'react';
import Main from '../layouts/Main';

import { useDispatch } from 'react-redux';
import { setSidebarOpen } from '../slices/sidebarSlice';

const Resources = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        if (window.innerWidth <= 1023) {
            dispatch(setSidebarOpen(false));
        }
    }, []);

    const menuItems = [
        {
            text: 'Direct Links',
            link: '#',
            css: 'text-base font-bold'
        },
        {
            text: 'Resources',
            subtext: 'Rauringa.co.nz',
            href: 'https://rauringa.co.nz',
            css: 'text-sm ml-5'
        }

    ];

    return (
        <Main
            vision={'Transforming the accessibility and availability of Te Reo Māori resources.'}
            menuItems={menuItems}
        >
            <div className=" w-full h-auto mx-auto py-20" style={{ backgroundImage: `url("images/bg-yellow.png")` }}>
                <div className="w-full h-full flex">


                    <div className="  m-auto lg:w-[780px] px-5 lg:px-8    ">
                        <h2 className=" text-white text-center text-4xl lg:text-5xl font-medium pb-4">Our Resources</h2>

                        <div className=" bg-white px-5 py-8 lg:p-12 rounded-lg shadow-xl">


                            <div className="">
                                <div>
                                    <p>Rau Ringa inspires curiosity, exploration, and experimentation with te reo Māori by creating authentic te reo Māori books, puzzles, and games for tamariki ages 5 - 12.</p>
                                    <p>Our resources are first and foresmost Māori (not translated from English) and can be found in homes, in Kohanga and Early Childhood centers, Schools, Kura, and local community spaces such as Marae, and public spaces such as Doctors waiting rooms.</p>
                                    <div className=" text-center mt-10">
                                        <a href="https://rauringa.co.nz/"
                                            target="blank"
                                            className="bg-[#F5BA18] text-white px-4 py-2 rounded-full hover:bg-yellow-500 focus:outline-none focus:bg-yellow-100">
                                            Visit Now!
                                        </a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>



                </div>
            </div>

        </Main>

    );
};

export default Resources;