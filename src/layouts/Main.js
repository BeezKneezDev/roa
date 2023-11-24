import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SideBar from './SideBar';
import { setSidebarHeight, setSidebarOpen } from '../slices/sidebarSlice';
import IconMenuUnfold from './../icons/menu-unfold';
import IconMenuFold from '../icons/menu-fold';

const Main = ({ vision, menuItems, children }) => {
    const dispatch = useDispatch();

    const sidebarHeight = useSelector((state) => state.sidebar.sidebarHeight);
    const isSidebarOpen = useSelector((state) => state.sidebar.isSidebarOpen);

    const toggleSidebar = () => {
        dispatch(setSidebarOpen(!isSidebarOpen));
        // Assuming you still want to update the sidebar height based on document height
        const documentHeight = document.documentElement.scrollHeight;
        dispatch(setSidebarHeight(`${documentHeight}px`));
    };

    useEffect(() => {
        const handleResize = () => {
            const documentHeight = document.documentElement.scrollHeight;
            dispatch(setSidebarHeight(`${documentHeight}px`));

            // Dispatch action to update isSidebarOpen in Redux state
            if (window.innerWidth >= 1024) {
                dispatch(setSidebarOpen(true));
            } else {
                dispatch(setSidebarOpen(false));
            }
        };

        const documentHeight = document.documentElement.scrollHeight;
        const newSidebarHeight = documentHeight > 670 ? `${documentHeight}px` : '100%';
        dispatch(setSidebarHeight(newSidebarHeight));

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [dispatch]);

    return (
        <div className="flex flex-no-wrap min-h-screen">
            <div
                className={`lg:hidden z-20 fixed top-0 left-0 m-4 text-white flex h-[50px] cursor-pointer`}
                onClick={toggleSidebar}
            >
                {!isSidebarOpen && <IconMenuUnfold />}
                {isSidebarOpen && <IconMenuFold />}


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
