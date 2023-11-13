import * as React from "react";


function SlideContent({ heading, subheading, blurb, image, vision }) {
    return (
        <div className=" xl:flex px-5 py-20 lg:py-12">
            <div className=" basis-1/2 flex">
                <div className=" xl:m-auto p-10 xl:p-28">
                    <h3 className=" font-bold text-3xl ">{heading}</h3>
                    <p className="text-lg font-medium">
                        <span className=" block text-blue-900">{subheading}</span>
                        {blurb}</p>
                </div>
            </div>
            <div className=" basis-1/2 flex">
                <div className=" m-auto p-10 xl:p-28 flex flex-col items-center">
                    <img width={350} src={image} />
                    <p className="text-center text-lg font-medium p-8">{vision}</p>
                </div>
            </div>
        </div>
    );
}

export default SlideContent;

