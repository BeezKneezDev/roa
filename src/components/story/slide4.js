import * as React from "react";


function Slide4() {
    return (
        <div className=" flex">
            <div className=" basis-1/2 flex">
                <div className=" m-auto p-28">
                    <h3 className=" font-bold text-3xl ">TE WHĀINGA MATUA</h3>
                    <p className="text-lg font-medium">
                        <span className=" block text-blue-900">What is our mission?</span>
                        To share Te Reo Māori with the world by expanding opportunities and equipping learners with powerful tools and practices to support their journey.</p>
                </div>
            </div>
            <div className=" basis-1/2 flex">
                <div className=" m-auto p-28 flex flex-col items-center">
                    <img width={350} src="images/0.png" />
                    <p className="text-center text-lg font-medium p-8">Mārakerake ana tō Rau mārohirohi. Pūrangiaho ana tō Rau aumangea. Rangona ana tō Rau manawanui. Ka paiheretia ki te angitū.</p>
                </div>
            </div>
        </div>
    );
}

export default Slide4;

