import React from 'react';
import ContactForm from "../components/ContactForm";
import Main from '../layouts/Main';

import { useDispatch } from 'react-redux';
import { setSidebarOpen } from '../slices/sidebarSlice';
import { useEffect } from 'react';

const Contact = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        if (window.innerWidth <= 1023) {
            dispatch(setSidebarOpen(false));
        }
    }, [dispatch]);

    const menuItems = [
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

    ];

    return (
        <Main
            vision={'Transforming the accessibility and availability of Te Reo Māori resources.'}
            menuItems={menuItems}
        >
            <div className=" w-full h-automx-auto" style={{ backgroundImage: `url("images/bg-blue.jpg")` }}>
                <div className="w-full h-full flex">
                    <ContactForm />
                </div>
            </div>
        </Main>

    );
};

export default Contact;