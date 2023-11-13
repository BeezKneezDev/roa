import React, { useEffect, useState } from 'react';
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
import Main from '../layouts/Main';

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

  const handleButtonClick = function (index) {
    setCurrentIndex(index - 1); // Dispatch the setCurrentIndex action
  }.bind(this);

  const menuItems = [
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
  ];


  

  return (

    <Main
      vision={'Transforming the accessibility and availability of Te Reo Māori resources.'}
      menuItems={menuItems}
    >
      <StorySlider stories={stories} />
    </Main>

  );
};

const mapDispatchToProps = {
  setCurrentIndex,
};

export default connect(null, mapDispatchToProps)(About);