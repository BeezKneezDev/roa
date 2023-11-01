import * as React from "react";
import TranslationItem from "./translationItem";


function Slide7() {
    return (
        <div>
            <header><h3 className=" text-yellow-300 uppercase text-center font-semibold text-5xl ">Rau Ringa</h3></header>
            <div className=" flex">
                <div className=" basis-3/5 flex flex-col px-10">
                    <TranslationItem
                        english={'Why'}
                        maori={'Pae Tata'}
                        description={'We are here to inspire curiosity and encourage exploration and experimentation in Te Reo Māori.'} />
                    <TranslationItem
                        english={'What'}
                        maori={'Te Ihuoneone'}
                        description={"We create and publish authentically Māori children's books and games."} />
                    <TranslationItem
                        english={'Who'}
                        maori={'Whakaminenga'}
                        description={'Our resources are for children aged 5 - 12.'} />
                    <TranslationItem
                        english={'Where'}
                        maori={'Ihumanea'}
                        description={'Our resources will be found in homes, schools, and local community spaces such as the marae. They will be purchased online on our website, and at NZ retail stores.'} />
                    <TranslationItem
                        english={'How'}
                        maori={'Pae Tata'}
                        description={'Our content is first and foremost Māori (not translated from English). The content is innovative and affordable.'} />
                    <TranslationItem
                        english={'Measure'}
                        maori={'Eke Panuku'}
                        description={'By Matariki 2028, our goal is to have 200,000 engaged users, 5 popular books or games.'} />
                </div>

                <div className=" basis-2/5 flex relative">
                    <div className=" italic font-semibold text-center px-28 m-auto ">
                        <div className="  absolute -top-10 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            <img src="/images/0.png" />
                        </div>
                        <div className="  absolute -top-10 left-4 w-[9em]">
                            <img src="/images/03.png" />
                        </div>
                        <div className="  absolute -top-10 right-4 w-[9em] ">
                            <img src="/images/03.png" />
                        </div>
                        <div className="  absolute -bottom-8 right-4 w-[9em] ">
                            <img src="/images/03.png" />
                        </div>
                        <div className="  absolute -bottom-8 left-4 w-[9em] ">
                            <img src="/images/03.png" />
                        </div>
                        <p>Tūtaki atu ana a Rau Māreikura ki a Kea haututū. Kea nanakia, Kea raweke, Kea tinihanga e. Koia te tohunga whāngai i te ngao pākiki.</p>

                        <p>Tau rawa ake ana a Rau Māreikura ki ngā maunga whakahī, ki ngā awa kōpikopiko, ki ngā marae manomano.</p>

                        <p>Tohatohaina ana e Rau Māreikura te ngao pākiki ki ngā uri o Te Wao Tapunui a Tāne.</p>

                        <p>Toro ana a Rau Māreikura ki ngā pūkenga o Kea kia horapa te ngao pākiki ki ngā tōpito o Te Wao Tapunui a Tāne.</p>

                        <p>Ka tupu te atamai, ka hua te tākaro, ka puāwai te auaha. Ka puta ko Rau Ringa.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Slide7;

