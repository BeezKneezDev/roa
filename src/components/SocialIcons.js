import * as React from "react";
import IconMail from "../icons/IconMail";
import IconBxlFacebook from "../icons/IconFacebook";
import IconInstagram from '../icons/IconInsta';
import IconHubspot from '../icons/IconHub';

function SocialIcons() {
    return (
        <div className="px-5 ">
            <ul className="w-full flex items-center justify-between ">
                <li className="cursor-pointer  pt-5 pb-3">
                    <a href="mailto:admin@roaltd.co.nz" >
                        <IconMail />
                    </a>
                </li>
                <li className="cursor-pointer  pt-5 pb-3">
                    <a href="https://www.facebook.com/people/RoaLtd/100093976977397/" target="blank">
                        <IconBxlFacebook />
                    </a>
                </li>
                <li className="cursor-pointer  pt-5 pb-3">
                    <a href="" target="blank">
                        <IconInstagram />
                    </a>
                </li>
                <li className="cursor-pointer  pt-5 pb-3">
                    <a href="" target="blank">
                        <IconHubspot />
                    </a>
                </li>

            </ul>
        </div>
    );
}

export default SocialIcons;