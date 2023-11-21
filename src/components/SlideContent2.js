import * as React from "react";
import TranslationItem from './story/translationItem';



function SlideContent2({ heading, vision, items, image1, image2, image3, image4, image5,classes, colour }) {
    return (
        <div className="px-5 py-20 lg:py-12">
            <header><h3 className=" uppercase px-10 md:px-0 md:text-center font-semibold text-5xl " style={{color: colour}}>{heading}</h3></header>
            <div className=" xl:flex">
                <div className=" basis-3/5 flex flex-col px-10">

                    {items.map(item => (
                        <TranslationItem
                            colour={colour}
                            english={item.english}
                            maori={item.maori}
                            description={item.description} />
                    ))}


                </div>

                <div className=" pt-60 py-10  basis-2/5 flex xl:pt-20">
                    <div className=" italic font-semibold text-center relative px-10 w-[80%]  m-auto ">
                    <div className="  absolute left-1/2 transform -translate-x-1/2 -top-48   w-[9em]">
                            <img class="scale-150" src={image5} />
                        </div>
                        <div className="  absolute -top-20 -left-20 w-[9em]">
                            <img className={classes} src={image1} />
                        </div>
                        <div className="  absolute -top-20 -right-20 w-[9em] ">
                            <img className={classes} src={image2} />
                        </div>
                        <div className="  absolute -bottom-8 -right-20 w-[9em] ">
                            <img className={classes} src={image4} />
                        </div>
                        <div className="  absolute -bottom-8 -left-20 w-[9em] ">
                            <img className={classes} src={image3} />
                        </div>
                        <div dangerouslySetInnerHTML={{ __html: vision }} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SlideContent2;

