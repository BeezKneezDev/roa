import * as React from "react";


function StaffProfile({ image, name, role, tag }) {
    return (
        <div className="h-[550px] xl:h-full basis-1/2 relative bg-cover bg-center flex m-auto" style={{ backgroundImage: `url("${image}")` }}>

            <div class="opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-1 flex justify-center items-center">
                <div className=" w-full self-center h-full p-5 text-sm bg-white ml-auto mr-auto flex items-center">

                    <div className="block text-blue-900 font-semibold ">
                        <span >&gt; </span>
                        <span className="">{name}</span>
                        <span className=" block text-black font-medium"> - {role}</span>
                        <span className=" font-medium">{tag}</span>
                    </div>


                </div>
            </div>

        </div>
    );
}

export default StaffProfile;

