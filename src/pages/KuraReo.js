import { Link } from "react-router-dom";
import Social from "../components/SocialIcons";
import ContentSlider from './../components/ContentSlider';

import { connect } from 'react-redux';
import { setCurrentIndex } from "../slices/sliderSlice";

import slides from '../data/programs.json'
import MenuItem from "../components/MenuItem";
import Header from "../components/Header";
import SideBar from "../layouts/SideBar";

const KuraReo = ({ setCurrentIndex }) => {
    const handleButtonClick = function (index) {
        setCurrentIndex(index - 1); // Dispatch the setCurrentIndex action
    }.bind(this);


    return (
        <div className="flex flex-no-wrap h-screen">

            <SideBar
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


            <div className=" w-full h-full mx-auto" style={{ backgroundImage: `url("images/bg-green.jpg")` }}>
                <div className="w-full h-full flex">
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

