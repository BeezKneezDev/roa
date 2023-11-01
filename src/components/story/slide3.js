import * as React from "react";


function Slide3() {
    return (
        <div className=" flex">
            <div className=" basis-1/2 flex">
                <div className=" m-auto p-28">
                    <h3 className=" font-bold text-3xl ">Te Whakakitenga</h3>
                    <p className="text-lg font-medium">
                        <span className=" block text-blue-900">What is our vision?</span>
                        To transform the accessibility and availability of Te Reo Māori resources.</p>
                </div>
            </div>
            <div className=" basis-1/2 flex">
                <div className=" m-auto p-28 flex flex-col items-center">
                    <img width={350} src="images/0.png" />
                    <p className="text-center text-lg font-medium p-8">Rā runga mai o te hau maiangi, pā mai ai te reo Māori, koia ko Rau Māreikura. He rau tata, he rau ngāwari, he rau waiwaiā.</p>
                </div>
            </div>
        </div>
    );
}

export default Slide3;

