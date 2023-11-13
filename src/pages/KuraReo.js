import { connect } from 'react-redux';
import slides from '../data/programs.json';
import { setCurrentIndex } from '../slices/sliderSlice';
import ContentSlider from '../components/ContentSlider';
import Main from '../layouts/Main';


const KuraReo = ({ setCurrentIndex }) => {

    const handleButtonClick = function (index) {
        setCurrentIndex(index - 1); // Dispatch the setCurrentIndex action
    }.bind(this);

    const menuItems = [
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

    ];

    return (

        <Main 
            vision={'Delivering Te Reo Māori programmes that promote cultural intelligence while fostering a love for Te Reo Māori.'}
            menuItems={menuItems}
        >
            <div className=" w-full lg:min-h-full mx-auto" style={{ backgroundImage: `url("images/bg-green.jpg")` }}>
                <div className="w-full h-full flex overflow-hidden">
                    <ContentSlider slides={slides} />
                </div>
            </div>
        </Main>
        
    );
};

const mapDispatchToProps = {
    setCurrentIndex,
};

export default connect(null, mapDispatchToProps)(KuraReo);