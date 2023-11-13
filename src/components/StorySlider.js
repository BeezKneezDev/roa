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
    <div className="story-slider w-full  relative flex items-center overflow-hidden " style={{ backgroundImage: `url("images/bg-white.jpg")` }}>
      {stories[currentIndex]}
      <div className=' fixed  bottom-10 w-full  text-center story-nav '>
        <div className='  bg-slate-100 lg:bg-white inline-block py-1 px-3 rounded-xl'>
          <button onClick={goToPreviousSlide}>Previous</button> | <button onClick={goToNextSlide}>Next</button>
        </div>
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
