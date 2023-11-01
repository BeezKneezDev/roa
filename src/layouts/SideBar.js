import React from 'react'
import Social from '../components/SocialIcons';
import Header from '../components/Header';
import MenuItem from '../components/MenuItem';
import { Link, useLocation } from 'react-router-dom';


const SideBar = ({ vision, menuItems }, props) => {
    const location = useLocation();

    return (



        <div className=" w-72  absolute sm:relative  shadow md:h-full flex-col justify-between hidden sm:flex">
            <div className="px-10">

                <Header vision={vision} />




                <ul className="mt-12">
                    {location.pathname != '/' && <MenuItem text={'Home'} link={'/'} css='text-base font-bold uppercase' />}
                    {menuItems.map((item) => (
                        <MenuItem text={item.text} link={item.link} href={item.href} css={item.css} handleClick={item.handleClick} subtext={item.subtext} />
                    ))}

                </ul>

            </div>

            <Social />

        </div>

    )
}

export default SideBar