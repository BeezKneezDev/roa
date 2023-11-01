import Header from "../components/Header";
import Social from "../components/SocialIcons";
import Slide2 from '../components/story/slide2';
import Slide1 from '../components/story/slide1';
import Slide3 from "../components/story/slide3";
import Slide4 from "../components/story/slide4";
import Slide5 from "../components/story/slide5";
import Slide6 from "../components/story/slide6";
import Slide7 from "../components/story/slide7";
import Slide8 from "../components/story/slide8";
import Slide9 from "../components/story/slide9";

import StorySlider from "../components/StorySlider";

import { connect } from 'react-redux';
import { setCurrentIndex } from "../slices/storySliderSlice";
import SideBar from "../layouts/SideBar";

const stories = [
  <Slide1 />,
  <Slide2 />,
  <Slide3 />,
  <Slide4 />,
  <Slide5 />,
  <Slide6 />,
  <Slide7 />,
  <Slide8 />,
  <Slide9 />
];


const About = ({ setCurrentIndex }) => {

  const handleButtonClick = function (index) {
    setCurrentIndex(index - 1); // Dispatch the setCurrentIndex action
  }.bind(this);

  return (
    <div className="flex flex-no-wrap h-screen">

      <SideBar
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