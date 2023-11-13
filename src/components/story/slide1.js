import * as React from "react";

function Slide1() {
    return (
        <div className="flex flex-col items-center w-full px-5 py-20 lg:py-12" style={{ backgroundImage: `url("images/bg-white.jpg")` }}>
            <h3 className="text-center text-blue-900 font-bold text-3xl uppercase"> Rau Māreikura</h3>
            <div className=" max-h-[450px]  lg:max-h-[650px]"><img className=" dynamic-image" src="/images/0.png" /></div>
            <h4 className=" uppercase font-bold text-lg">Business overview | Roa Ltd</h4>
            <span className=" block text-xs pt-1">&copy; Roa Ltd 2023</span>
        </div>
    );
}

export default Slide1;

