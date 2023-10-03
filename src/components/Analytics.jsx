import React from "react";
import laptop from "../assets/laptop.jpg"

const Analytics = () => {
    return(
        <div className="w-full bg-white py-16 px-4">
            <div className="max-w-[1200px] mx-auto grid md:grid-cols-2">
                <img src={laptop} alt="/" className="w-[500px] mx-auto my-4" />

            <div className="bg-white text-black flex flex-col justify-center text-center md:text-left">
                <p className="text-[#00df9a] uppercase font-bold">data analytics dashboard</p>
                <h1 className="font-bold md:text-4xl sm:text-3xl text-2xl py-2">Manage Data Analytics Centrally</h1>
                <p className="md:py-4">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita exercitationem quod totam tempora nesciunt, veniam, numquam, praesentium ratione provident porro beatae. Cupiditate odio reprehenderit reiciendis facilis dignissimos accusantium error consequatur!
                </p>
                <button className="text-[#00df9a] bg-black py-3 px-6 rounded-md font-medium w-[200px] my-6 mx-auto md:mx-0">Get Started</button>
            </div>
        </div>
        </div>
    )
}

export default Analytics;