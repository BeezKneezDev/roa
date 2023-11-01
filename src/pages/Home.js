import SideBar from "../layouts/SideBar";
import Content from './../layouts/Content';

const Home = () => {
    return (
        <div className="flex flex-no-wrap h-screen">

            <SideBar
                vision={'Transforming the accessibility and availability of Te Reo Māori resources'}
                menuItems={[
                    {
                        text: 'About',
                        link: 'about',
                        css: 'text-base font-bold uppercase'
                    },
                    {
                        text: 'Reo Programmes',
                        link: 'kura-reo',
                        css: 'text-base font-bold uppercase'
                    },
                    {
                        text: 'Resources',
                        link: 'resources',
                        css: 'text-base font-bold uppercase'
                    },
                    {
                        text: 'Contact Us',
                        link: 'contact',
                        css: 'text-base font-bold uppercase text-blue-900'
                    },
                ]}
            />


            <Content />
        </div>
    );
};

export default Home;