import * as React from "react";
import { Link } from "react-router-dom";

function MenuItem({ text, link, css, href, handleClick, subtext }) {


    return (
        <li className="flex w-full justify-between  hover:text-gray-500 cursor-pointer items-center mb-4">
            <div className="flex items-center font-medium capitalize text-base">
                {link && <Link to={link} className={css}>{text}</Link>}

                {href && <a href={href} target='_blank' className={css}>
                    <span>{text}</span>
                    {subtext && <span className="block text-sm font-medium text-gray-300 lowercase">{subtext}</span>}
                </a>}


                {handleClick && <div className={css} onClick={handleClick}>
                    <span className="block text-sm font-medium">{text}</span>
                    {subtext && <span className="block text-sm font-medium text-gray-300">{subtext}</span>}
                </div>}
            </div>
        </li>
    );
}

export default MenuItem;