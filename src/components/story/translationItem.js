import * as React from "react";


function TranslationItem({ english, maori, description, colour }) {
    return (

        <div className="md:flex border-b-2 border-dotted border-b-gray-200 py-4">
            <div className=" sm:basis-[40%]  font-semibold text-lg m-auto ">
                <span className='uppercase' style={{color: colour }}>{english}</span>
                <span> | </span>
                <span>{maori}</span>
            </div>
            <div className="sm:basis-[60%]">
                <p className=" font-medium">{description}</p>
            </div>
        </div>

    );
}

export default TranslationItem;