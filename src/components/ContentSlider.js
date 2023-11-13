import React from 'react';
import { connect } from 'react-redux';
import { setCurrentIndex } from '../slices/sliderSlice';
import IconLeft from './../icons/IconLeft';
import IconRight from './../icons/IconRight';

const ContentSlider = ({ slides, currentIndex, setCurrentIndex }) => {
    const goToPreviousSlide = () => {
        const newIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const goToNextSlide = () => {
        const newIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    const leftColClasses = slides[currentIndex].classes ? 'basis-1/2 lg:pr-4' : '';
    const rightColClasses = slides[currentIndex].classes ? 'basis-1/2 lg:pl-4' : '';


    return (
        <div className="content-slider m-auto relative py-20 lg:py-12">

            <div className="slide ">
                <div className=" m-auto lg:w-[780px] px-8 lg:px-2  ">
                    <h2 className=" text-white text-center text-5xl font-medium pb-4">{slides[currentIndex].heading}</h2>
                    <h3 className=" text-white text-center text-lg font-medium pb-4">{slides[currentIndex].subheading}</h3>
                    <div className=" bg-white p-8 lg:p-12 rounded-lg shadow-xl">
                        <span className=" block text-center text-4xl font-semibold pb-2">{slides[currentIndex].price}</span>

                        <div className={slides[currentIndex].classes}>
                            {slides[currentIndex].blurb && <div dangerouslySetInnerHTML={{ __html: slides[currentIndex].blurb }}></div>}
                            <div className={leftColClasses}>
                                {slides[currentIndex].offers && <span className=" block  pt-5 font-bold pb-2">Offers:</span>}
                                {slides[currentIndex].offers && <div dangerouslySetInnerHTML={{ __html: slides[currentIndex].offers }}></div>}
                            </div>

                            <div className={rightColClasses}>
                                {slides[currentIndex].includes && <span className=" block  pt-5 font-bold pb-2">Includes:</span>}
                                {slides[currentIndex].includes && <div dangerouslySetInnerHTML={{ __html: slides[currentIndex].includes }}></div>}
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className='text-center py-10'>
                <button className="prev-button px-2" onClick={goToPreviousSlide}>
                    <IconLeft />
                </button>
                <button className="next-button px-2" onClick={goToNextSlide}>
                    <IconRight />
                </button>
            </div>


        </div>
    );
};

const mapStateToProps = (state) => ({
    currentIndex: state.slider.currentIndex, // Update 'slider' to match your slice name
});

const mapDispatchToProps = {
    setCurrentIndex,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContentSlider);