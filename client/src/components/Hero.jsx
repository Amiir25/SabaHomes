import React from "react";

const Hero = () => {
    return (
        <>
        <div className="flex flex-col items-start justify-center px-6 md:px-16 lg:px-24 xl:px-32 border
        bg-[url('/src/assets/hero.jpg')] bg-cover bg-center bg-no-repeat h-screen text-gray-900">
            <p className="bg-gray-900/80 text-gray-200 font-semibold px-3.5 py-1 rounded-full mt-20">Homes for Every Stage of Life</p>
            <h1 className="text-2xl md:text-5xl md:text-[56px] md:leading-[56px] font-bold md:font-extrabold max-w-xl mt-4">
                Find a place that reflects who you are
            </h1>
            <p>Whether you’re starting fresh, growing your family, or investing in the future—we’ve got you covered. Get your home—faster, easier, and without the guesswork</p>
        </div>
        </>
    )
}

export default Hero;