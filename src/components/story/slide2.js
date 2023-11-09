import * as React from "react";
import ContentTile from "../ContentTile";
import LogoContentTile from "../LogoContentTile";

function Slide2() {
    return (
        <div className=" ">
            <header className="pb-10"><h3 className="text-center font-semibold text-5xl "><span className=" uppercase">Roa Ltd</span> Overview</h3></header>
            <div className=" flex">
                <div className="flex basis-1/2 border-r-2 border-dotted mb-5 pb-2"> {/* first col */}
                    <div className=" p-6 flex flex-col justify-around">
                        <img className="" width={80} src="/images/03.png" />
                        <img width={80} src="/images/03.png" />
                        <img width={80} src="/images/03.png" />
                    </div>
                    <div className=" pr-20 flex-1">
                        <ContentTile
                            heading={'Te Whakakitenga'}
                            description={'Our vision is to transform the accessibility and availability of Te Reo Māori resources.'}
                        />
                        <ContentTile
                            heading={'Te Whāinga Matua'}
                            description={'Our purpose is to share Te Reo Māori with the world by equipping learners with tools and practices to support their journey.'}
                        />
                        <ContentTile
                            heading={'Ngā Kaiarataki'}
                            description={'Roa Ltd is managed by Hariru Roa, Dr Raukura Roa, Moana Turner, and Anne Roa and supported by Robyn Roa and Tom Roa.'}
                        />
                        <ContentTile
                            heading={'Ngā Tikanga'}
                            description={'Roa Ltd will lead by prioritising Te Reo Māori, tikanga, and people. "Tōmua ko te reo, tōmua ko te tikanga, tōmua ko te tangata. Tōmuri ko te pūtea, tōmuri ko te whakahīhī."'}
                        />


                    </div>
                </div>
                <div className=" basis-1/2 pt-10 pl-16 pr-20"> {/* second col */}

                    <div className="flex relative">
                        <div className=" basis-3/5 ">
                            <ContentTile
                                heading={'Te Hau'}
                                description={'We am to provide authentically Māori reo resources.'}
                            />
                            <ContentTile
                                heading={'Ngā Rau'}
                                description={'Roa Ltd has three offerings.'}
                            />
                        </div>
                        <div className=" basis-2/5 absolute -right-10 bottom-0">
                            <img className=" " width={350} src="images/0.png" />
                        </div>
                    </div>
                    <div>


                        <LogoContentTile
                            image={'images/logo-ringa.png'}
                            description={'creates and publishes high-quality physical Te Reo Māori Resources.'}
                        />
                        <LogoContentTile
                            image={'images/logo-kura.png'}
                            description={'delivers Te Reo Māori programmes, including personal and professional coaching and tutoring.'}
                        />
                        <LogoContentTile
                            image={'images/logo-mati.png'}
                            description={'is our strategic planning and research division that is still in development.'}
                        />



                    </div>
                </div>
            </div>
        </div>
    );
}

export default Slide2;

