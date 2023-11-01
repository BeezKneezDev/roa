import * as React from "react";


function Slide6() {
    return (
        <div className=" flex">
            <div className=" basis-1/2 flex">
                <div className=" m-auto p-28">
                    <h3 className=" font-bold text-3xl ">Ngā Rau</h3>
                    <p className="text-lg font-medium">
                        <span className=" block text-blue-900">What are our offerings?</span>
                        Roa LTD have three offerings. Rau Ringa creates and self-publishes high-quality physical Te Reo Māori Resources. Rau Kura delivers Te Reo Māori programmes,
                        including personal and professional coaching and tutoring. Rau Taki provides organizations with expertise in research and strategic planning to enhance Māori
                        language and cultural proficiency.</p>
                </div>
            </div>
            <div className=" basis-1/2 flex">
                <div className=" m-auto p-28 flex flex-col items-center">
                    <img width={350} src="images/0.png" />
                    <p className="text-center text-lg font-medium p-8">Ka tupu, ka hua, ka puāwai. Ka puta ki Te Nehenehenui ki ngā tohunga o Te Wao Tapunui a Tāne. Ki ngā hautututanga a Kea, ki ngā ketekete a Kākā, ki ngā torohanga a Pīpīwharauroa.</p>
                </div>
            </div>
        </div>
    );
}

export default Slide6;

