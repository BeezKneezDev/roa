import * as React from "react";

function ContentTile({ heading, description }) {
    return (
        <div className=" border-b-2 border-dotted mb-5 pb-2 border-b-gray-200">
            <h4 className=" font-bold text-xl text-md">{heading}</h4>
            <p className=" text-lg font-medium">{description}</p>
        </div>
    );
}

export default ContentTile;