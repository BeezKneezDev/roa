import * as React from "react";
import StaffProfile from "../StaffProfile";


function Slide5() {
    return (
        <div className=" xl:flex px-5  py-20 lg:p-0">
            <div className=" basis-1/2 flex">
                <div className=" xl:m-auto pt-10 px-10 xl:p-28">
                    <h3 className=" font-bold text-3xl ">Ngā Kaiarataki</h3>
                    <p className="text-lg font-medium">
                        <span className=" block text-blue-900">Who are our leaders?</span>
                        Roa Ltd is managed by Anne Roa, Hariru Roa, Moana Turner, and Dr Raukura Roa and supported by Robyn Roa and Tom Roa.</p>

                    <p className="text-lg font-medium">
                        <span className=" block text-blue-900">How we lead?</span>
                        Tōmua ko te reo, tōmua ko te tikanga, tōmua ko te tangata. Tōmuri ko te pūtea, tōmuri ko te whakahīhī.</p>
                </div>
            </div>
            <div className=" pt-10 lg:pt-0 pb-30 xl:pb-0 basis-1/2 flex h-full">
                <div className=" px-10 xl:p-0 m-auto h-auto md:h-screen w-full  flex flex-col items-center">
                    <div className=" sm:flex w-full h-auto md:h-full">
                        <StaffProfile
                            image={'images/staff/anne.jpg'}
                            name={'Anne Roa'}
                            role={'Managing Director'}
                            tag={'Te rua pōtaki, te pitau whakarei.'}
                        />
                        <StaffProfile
                            image={'images/staff/anne.jpg'}
                            name={'Anne Roa'}
                            role={'Managing Director'}
                            tag={'Te rua pōtaki, te pitau whakarei.'}
                        />
                    </div>

                    <div className=" sm:flex w-full h-auto md:h-full">
                        <StaffProfile
                            image={'images/staff/hariru.png'}
                            name={'Hariru'}
                            role={'Director'}
                            tag={'Te rua pōtaki, te pitau whakarei.'}
                        />
                        <StaffProfile
                            image={'images/staff/hariru.png'}
                            name={'Hariru'}
                            role={'Director'}
                            tag={'Te rua pōtaki, te pitau whakarei.'}
                        />
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Slide5;

