import * as React from "react";


function StaffProfile({ image, name, role, tag }) {
    return (
        <div className="h-[550px] xl:h-full basis-1/2   bg-cover bg-center flex" style={{ backgroundImage: `url("${image}")` }}>
            <div className=" self-end p-5 text-sm bg-white">
                <span className="block text-blue-900 font-semibold ">
                    <span >&gt; </span>
                    <span className="">{name}</span>
                    <span className=" text-black font-medium"> - {role}</span>
                </span>
                <span className=" font-medium">{tag}</span>
            </div>
        </div>
    );
}

export default StaffProfile;

