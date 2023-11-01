import React from 'react';
import { connect } from 'react-redux';
import { setCurrentIndex } from '../slices/storySliderSlice';

const StorySlider = ({ stories, currentIndex, setCurrentIndex }) => {
  const goToPreviousSlide = () => {
    const newIndex = currentIndex === 0 ? stories.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNextSlide = () => {
    const newIndex = currentIndex === stories.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="story-slider w-full h-screen relative flex items-center " style={{ backgroundImage: `url("images/bg-white.jpg")` }}>
      {stories[currentIndex]}
      <div className=' absolute  left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-0 bottom-20'>
        <button onClick={goToPreviousSlide}>Previous</button> | <button onClick={goToNextSlide}>Next</button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  currentIndex: state.storySlider.currentIndex,
});

const mapDispatchToProps = {
  setCurrentIndex,
};

export default connect(mapStateToProps, mapDispatchToProps)(StorySlider);