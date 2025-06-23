import React from "react";

const Hero = () => {
    return (
        <>
            <div className="bg-[url('/src/assets/hero-10.jpg')] bg-cover bg-center bg-no-repeat h-screen">
                <div className="flex flex-col items-center px-6 md:px-16 lg:px-24 xl:px-32 w-full h-screen bg-[rgba(255,255,255,0.5)] text-gray-900">
                    
                    <div className="mt-50">
                        <p className="md:text-3xl font-black text-center">Homes for Every Stage of Life</p>
                        <h1 className="md:text-6xl font-light mt-2 max-w-3xl text-center">
                            Find a place that reflects who you are!
                        </h1>
                        {/* <p className="max-w-130 mt-2 text-sm md:text-base">
                            Whether you’re starting fresh, growing your family, or investing in the future—we’ve got you covered. Get your home—faster, easier, and without the guesswork.
                        </p> */}
                    </div>

                </div>
            </div>
        </>
    )
}

export default Hero;