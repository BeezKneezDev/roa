import * as React from "react";


function Slide5() {
    return (
        <div className=" flex">
            <div className=" basis-1/2 flex">
                <div className=" m-auto p-28">
                    <h3 className=" font-bold text-3xl ">Ngā Kaiarataki</h3>
                    <p className="text-lg font-medium">
                        <span className=" block text-blue-900">Who are our leaders?</span>
                        Roa Ltd is managed by Anne Roa, Hariru Roa, Moana Turner, and Dr Raukura Roa and supported by Robyn Roa and Tom Roa.</p>

                    <p className="text-lg font-medium">
                        <span className=" block text-blue-900">How we lead?</span>
                        Tōmua ko te reo, tōmua ko te tikanga, tōmua ko te tangata. Tōmuri ko te pūtea, tōmuri ko te whakahīhī.</p>
                </div>
            </div>
            <div className=" basis-1/2 flex h-full">
                <div className=" m-auto h-screen w-full  flex flex-col items-center">
                    <div className=" flex w-full h-full">
                        <div className=" basis-1/2 bg-cover bg-center" style={{ backgroundImage: `url("images/staff/anne.jpg")` }}>

                        </div>
                        <div className=" basis-1/2 flex items-end">
                            <div className=" p-5 text-sm">
                                <span className="block text-blue-900 font-semibold ">
                                    <span >&gt; </span>
                                    <span className="">Anne Roa</span>
                                    <span className=" text-black font-medium"> - Managing Director</span>
                                </span>
                                <span className=" font-medium">Te rua pōtaki, te pitau whakarei. </span>
                            </div>
                        </div>
                    </div>

                    <div className=" flex w-full h-full">

                        <div className=" basis-1/2">
                            <div className=" p-5 text-sm">
                                <span className="block text-blue-900 font-semibold ">
                                    <span >&gt; </span>
                                    <span className="">Hariru</span>
                                    <span className=" text-black font-medium"> - Director</span>
                                </span>
                                <span className=" font-medium">Te rua pōtaki, te pitau whakarei. </span>
                            </div>
                        </div>
                        <div className=" basis-1/2 bg-cover bg-center" style={{ backgroundImage: `url("images/staff/hariru.png")` }}>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Slide5;

