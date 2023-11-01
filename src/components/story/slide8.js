import * as React from "react";
import TranslationItem from "./translationItem";


function Slide8() {
    return (
        <div>
            <header><h3 className=" text-green-600 uppercase text-center font-semibold text-5xl ">Rau Ringa</h3></header>
            <div className=" flex">
                <div className=" basis-3/5 flex flex-col px-10">
                    <TranslationItem
                        colour={'text-green-600'}
                        english={'Why'}
                        maori={'Pae Tata'}
                        description={'We are here to empower and equip learners of all ages and backgrounds with Te Reo Māori.'} />
                    <TranslationItem
                        colour={'text-green-600'}
                        english={'What'}
                        maori={'Te Ihuoneone'}
                        description={"We deliver Te Reo Māori programmes that promote cultural intelligence while fostering a love for Te Reo Māori."} />
                    <TranslationItem
                        colour={'text-green-600'}
                        english={'Who'}
                        maori={'Whakaminenga'}
                        description={'Our programmes are catered to beginners to intermediate level learners.'} />
                    <TranslationItem
                        colour={'text-green-600'}
                        english={'Where'}
                        maori={'Papa Tūwaewae'}
                        description={'We deliver programmes at the marae, online and at workplaces.'} />
                    <TranslationItem
                        colour={'text-green-600'}
                        english={'How'}
                        maori={'Ihumanea'}
                        description={'Rau Kura is based on our personalized approach to coaching and tutoring. Our teaching methods are designed to break down barriers to growth and learning,'} />
                    <TranslationItem
                        colour={'text-green-600'}
                        english={'Measure'}
                        maori={'Eke Panuku'}
                        description={'By Matariki 2028, our objectives are to have 600 enrolments, and $2.5m in revenue.'} />
                </div>

                <div className=" basis-2/5 flex relative">
                    <div className=" italic font-semibold text-center px-28 m-auto">
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
                        <p>Tūtaki atu ana a Rau Māreikura ki a Kākā ketekete. Kākā wahanui, Kākā mōhio, Kākā huruhuru e. Koia te tohunga whāngai i te mātauranga.</p>

                        <p>Tau rawa ake ana a Rau Māreikura ki ngā manga o te rākau. Akoakongia ana e Rau Māreikura te mātauranga ki ngā Uri o Te Wao Tapunui a Tāne.</p>

                        <p>Toro ana a Rau ki ngā pūkenga o Kākā kia poua te mātauranga ki ngā uri me ngā tōpito o Te Wao Tapunui a Tāne.</p>

                        <p>Ka tupu te mōhio, ka hua te mātau, ka puāwai te kaiaka.</p>

                        <p>Ka puta ko <span className="text-green-600">Rau Kura.</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Slide8;

