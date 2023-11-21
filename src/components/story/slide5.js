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
                            name={'Anne Roa (BA, BCS, Te Panekiretanga o Te Reo, TEFL)'}
                            role={'Managing Director'}
                            tag={'Te rua pōtaki, te pitau whakarei.'}
                        />
                        <StaffProfile
                            image={'images/staff/hariru.png'}
                            name={'Hariru Roa (MA, BSci, BMPA, Te Panekiretanga o Te Reo)'}
                            role={'Director'}
                            tag={'Te rau rengarenga, te rau kawariki o Roa Ltd.'}
                        />
                        
                    </div>

                    <div className=" sm:flex w-full h-auto md:h-full">
                        <StaffProfile
                            image={'images/staff/moana.jpg'}
                            name={'Moana Turner (BA, GradDip Teaching, Registered Teacher)'}
                            role={'Director'}
                            tag={'Te rau pākiki, te rau atawhai o Roa Ltd.'}
                        />
                        <StaffProfile
                            image={'images/staff/raukura.jpg'}
                            name={'Dr Raukura Roa (PhD, MA, BAHons, BMPA, Fulbright, Te Panekiretanga o Te Reo)'}
                            role={'Director'}
                            tag={'Te rau mātāmua, te tuakana kūmara o Roa Ltd.'}
                        />
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Slide5;

