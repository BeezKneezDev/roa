import * as React from "react";

function LogoContentTile({ image, description }) {
    return (
        <div className="flex pb-5"> {/* logo/content block */}
            <div className="pr-3 py-3 basis-[20%]">
                <img className=" " src={image} />
            </div>
            <div className=" basis-[80%]">
                <p className=" m-auto text-lg font-medium">{description}</p>
            </div>
        </div>
    );
}

export default LogoContentTile;