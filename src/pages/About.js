import React, { useEffect, useState } from 'react';
import SideBar from "../layouts/SideBar";
import Slide2 from '../components/story/slide2';
import Slide1 from '../components/story/slide1';
import Slide3 from "../components/story/slide3";
import Slide4 from "../components/story/slide4";
import Slide5 from "../components/story/slide5";
import Slide6 from "../components/story/slide6";
import Slide7 from "../components/story/slide7";
import Slide8 from "../components/story/slide8";

import StorySlider from "../components/StorySlider";

import { connect } from 'react-redux';
import { setCurrentIndex } from "../slices/storySliderSlice";

const stories = [
  <Slide1 />,
  <Slide2 />,
  <Slide3 />,
  <Slide4 />,
  <Slide5 />,
  <Slide6 />,
  <Slide7 />,
  <Slide8 />
];


const About = ({ setCurrentIndex }) => {

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

  const handleButtonClick = function (index) {
    setCurrentIndex(index - 1); // Dispatch the setCurrentIndex action
  }.bind(this);

  return (
    <div className="flex flex-no-wrap min-h-screen">

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
        vision={'Transforming the accessibility and availability of Te Reo Māori resources.'}
        menuItems={[
          {
            text: 'RAU MĀREIKURA',
            link: '#',
            css: 'text-base font-bold'
          },
          {
            text: 'ROA LTD',
            handleClick: handleButtonClick.bind(this, 1),
            css: 'text-sm ml-5'
          },
          {
            text: 'Ngā Kaiarataki',
            subtext: '/OUR TEAM',
            handleClick: handleButtonClick.bind(this, 5),
            css: 'text-sm ml-5'
          },
          {
            text: 'RAU RINGA',
            subtext: '/REO RESOURCES',
            handleClick: handleButtonClick.bind(this, 7),
            css: 'text-sm ml-5'
          },
          {
            text: 'RAU KURA',
            subtext: '/REO PROGRAMMES',
            handleClick: handleButtonClick.bind(this, 8),
            css: 'text-sm ml-5'
          },
          {
            text: 'RAU TAKI',
            subtext: '/REO STRATEGIES',
            handleClick: handleButtonClick.bind(this, 9),
            css: 'text-sm ml-5'
          }
        ]}
      />

      <StorySlider stories={stories} />

    </div>
  );
};

const mapDispatchToProps = {
  setCurrentIndex,
};

export default connect(null, mapDispatchToProps)(About);