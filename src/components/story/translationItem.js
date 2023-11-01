import * as React from "react";


function TranslationItem({ english, maori, description, colour = 'text-yellow-300' }) {
    return (

        <div className="flex border-b-2 border-dotted border-b-gray-200 py-4">
            <div className=" basis-[35%]  font-semibold text-lg m-auto ">
                <span className={`uppercase ${colour}`}>{english}</span>
                <span> | </span>
                <span>{maori}</span>
            </div>
            <div className="basis-[65%]">
                <p className=" font-medium">{description}</p>
            </div>
        </div>

    );
}

export default TranslationItem;