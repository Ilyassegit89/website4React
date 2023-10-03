import React from "react";

const HeroContent = () => {
    return(
        <div className="text-white bg-[#030303]">
            <div className="max-w-[800px] -mt-24 w-full h-screen mx-auto text-center flex flex-col justify-center ">
                <p className="text-[#00df9a] uppercase font-bold p-2">growing with data Analytics</p>
                <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">Grow with data.</h1>
                <div>
                    <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4"> fast, flexible Financing for</p>
                </div>
                <p className="md:text-2xl text-xl font-bold text-gray-500">Monitor your data analytics to increase revenue for BTB, BTC,&SASS plateforms</p>
                <button className="bg-[#00df9a] w-[200px] rounded-md my-6 mx-auto py-3">Get Started </button>
            </div>
        </div>
    )
}

export default HeroContent;