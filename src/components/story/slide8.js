import * as React from "react";
import SlideContent2 from "../SlideContent2";


const items = [

    {
        colour: 'text-green-600',
        english: 'Why',
        maori: 'Pae Tata',
        description: 'We are here to empower and equip learners of all ages and backgrounds with Te Reo Māori.',
    },
    {
        colour: 'text-green-600',
        english: 'What',
        maori: 'Te Ihuoneone',
        description: "We deliver Te Reo Māori programmes that promote cultural intelligence while fostering a love for Te Reo Māori."
    },
    {
        colour: 'text-green-600',
        english: 'Who',
        maori: 'Whakaminenga',
        description: 'Our programmes are catered to beginners to intermediate level learners.',
    },
    {
        colour: 'text-green-600',
        english: 'Where',
        maori: 'Papa Tūwaewae',
        description: 'We deliver programmes at the marae, online and at workplaces.',
    },
    {
        colour: 'text-green-600',
        english: 'How',
        maori: 'Ihumanea',
        description: 'Rau Kura is based on our personalized approach to coaching and tutoring. Our teaching methods are designed to break down barriers to growth and learning,',
    },
    {
        colour: 'text-green-600',
        english: 'Measure',
        maori: 'Eke Panuku',
        description: 'By Matariki 2028, our objectives are to have 600 enrolments, and $2.5m in revenue.',
    }
]

function Slide8() {
    return (

        <SlideContent2
            heading={'Rau Ringa'}
            colour={'#2bae5b'}
            items={items}
            image1={'/images/slide8/1.png'}
            image2={'/images/slide8/2.png'}
            image3={'/images/slide8/3.png'}
            image4={'/images/slide8/4.png'}
            image5={'/images/slide8/5.png'}
            vision={'<p>Tūtaki atu ana a Rau Māreikura ki a Kākā ketekete. Kākā wahanui, Kākā mōhio, Kākā huruhuru e. Koia te tohunga whāngai i te mātauranga.</p><p>Tau rawa ake ana a Rau Māreikura ki ngā manga o te rākau. Akoakongia ana e Rau Māreikura te mātauranga ki ngā Uri o Te Wao Tapunui a Tāne.</p><p>Toro ana a Rau ki ngā pūkenga o Kākā kia poua te mātauranga ki ngā uri me ngā tōpito o Te Wao Tapunui a Tāne.</p><p>Ka tupu te mōhio, ka hua te mātau, ka puāwai te kaiaka.</p><p>Ka puta ko <span className="text-green-600">Rau Kura.</span></p>'} />

    );
}

export default Slide8;

