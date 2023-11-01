import * as React from "react";
import { Link } from "react-router-dom";

function Header({ vision }) {
    return (
        <div className='pt-20'>
            <h1 className=' text-lg font-bold'>
                <Link to={'/'} className="" >Roa Ltd</Link>
            </h1>

            <p className='pt-2'>{vision}</p>
        </div>
    );
}

export default Header;