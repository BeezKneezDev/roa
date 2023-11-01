import ContactForm from "../components/ContactForm";
import SideBar from "../layouts/SideBar";
import Content from './../layouts/Content';

const Contact = () => {
    return (
        <div className="flex flex-no-wrap h-screen">

            <SideBar
                vision={'Transforming the accessibility and availability of Te Reo Māori resources'}
                menuItems={[
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

                ]}
            />


            <div className=" w-full h-full mx-auto" style={{ backgroundImage: `url("images/bg-green.jpg")` }}>
                <div className="w-full h-full flex">
                    <ContactForm />
                </div>
            </div>
        </div>
    );
};

export default Contact;