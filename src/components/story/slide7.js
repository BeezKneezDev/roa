import * as React from "react";
import SlideContent2 from "../SlideContent2";

const items = [
    {
        english: 'Why',
        maori: 'Pae Tata',
        description: 'We are here to inspire curiosity and encourage exploration and experimentation in Te Reo Māori.'
    },
    {
        english: 'What',
        maori: 'Te Ihuoneone',
        description: "We create and publish authentically Māori children's books and games.",
    },
    {
        english: 'Who',
        maori: 'Whakaminenga',
        description: 'Our resources are for children aged 5 - 12.',
    },
    {
        english: 'Where',
        maori: 'Ihumanea',
        description: 'Our resources will be found in homes, schools, and local community spaces such as the marae. They will be purchased online on our website, and at NZ retail stores.',
    },
    {
        english: 'How',
        maori: 'Pae Tata',
        description: 'Our content is first and foremost Māori (not translated from English). The content is innovative and affordable.',
    },
    {
        english: 'Measure',
        maori: 'Eke Panuku',
        description: 'By Matariki 2028, our goal is to have 200,000 engaged users, 5 popular books or games.',
    }
]

function Slide7() {
    return (
        <SlideContent2
            heading={'Rau Ringa'}
            items={items}
            colour={'#F5BA18'}
            classes={''}
            image1={'/images/slide7/11.png'}
            image2={'/images/slide7/22.png'}
            image3={'/images/slide7/33.png'}
            image4={'/images/slide7/44.png'}
            image5={'/images/slide7/55.png'}
            vision={'<p>Tūtaki atu ana a Rau Māreikura ki a Kea haututū. Kea nanakia, Kea raweke, Kea tinihanga e. Koia te tohunga whāngai i te ngao pākiki.</p><p>Tau rawa ake ana a Rau Māreikura ki ngā maunga whakahī, ki ngā awa kōpikopiko, ki ngā marae manomano.</p><p>Tohatohaina ana e Rau Māreikura te ngao pākiki ki ngā uri o Te Wao Tapunui a Tāne.</p><p>Toro ana a Rau Māreikura ki ngā pūkenga o Kea kia horapa te ngao pākiki ki ngā tōpito o Te Wao Tapunui a Tāne.</p><p>Ka tupu te atamai, ka hua te tākaro, ka puāwai te auaha. Ka puta ko Rau Ringa.</p>'} />
    );
}

export default Slide7;

