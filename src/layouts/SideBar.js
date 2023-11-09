import React from 'react'
import Social from '../components/SocialIcons';
import Header from '../components/Header';
import MenuItem from '../components/MenuItem';
import { useLocation } from 'react-router-dom';


const SideBar = ({ vision, menuItems, isSidebarOpen, toggleSidebar }, props) => {
    const location = useLocation();

    return (


        <div className={` bg-white w-72 h-auto flex-col justify-between lg:relative ${isSidebarOpen ? ' absolute flex z-10' : 'hidden '} `}>
            <div className="px-10">

                <Header vision={vision} />

                <ul className="mt-12">
                    {location.pathname != '/' && <MenuItem text={'Home'} link={'/'} css='text-base font-bold uppercase' />}
                    {menuItems.map((item) => (
                        <MenuItem
                            text={item.text}
                            link={item.link}
                            href={item.href}
                            css={item.css}
                            handleClick={item.handleClick}
                            subtext={item.subtext}
                        />
                    ))}
                </ul>

            </div>

            <Social />

        </div >

    )
}

export default SideBar