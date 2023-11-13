import * as React from "react";
import TranslationItem from './story/translationItem';



function SlideContent2({ heading, vision, items }) {
    return (
        <div className="px-5 py-20 lg:py-12">
            <header><h3 className=" text-yellow-300 uppercase px-10 md:px-0 md:text-center font-semibold text-5xl ">{heading}</h3></header>
            <div className=" xl:flex">
                <div className=" basis-3/5 flex flex-col px-10">

                    {items.map(item => (
                        <TranslationItem
                            english={item.english}
                            maori={item.maori}
                            description={item.description} />
                    ))}


                </div>

                <div className=" pt-20 py-10  basis-2/5 flex xl:pt-0">
                    <div className=" italic font-semibold text-center relative px-10 w-[80%]  m-auto ">

                        <div className="  absolute -top-20 -left-20 w-[9em]">
                            <img src="/images/03.png" />
                        </div>
                        <div className="  absolute -top-20 -right-20 w-[9em] ">
                            <img src="/images/03.png" />
                        </div>
                        <div className="  absolute -bottom-8 -right-20 w-[9em] ">
                            <img src="/images/03.png" />
                        </div>
                        <div className="  absolute -bottom-8 -left-20 w-[9em] ">
                            <img src="/images/03.png" />
                        </div>
                        <div dangerouslySetInnerHTML={{ __html: vision }} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SlideContent2;

