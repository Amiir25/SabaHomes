import React, { useEffect, useState } from "react";
import { assets, locations } from "../assets/assets";

const Hero = () => {

    // Images for dynamic background
    const bgImages = [
        // 'bg-image-1.jpg', 'bg-image-2.jpg', 'bg-image-3.jpg', 'bg-image-4.jpg',
        // 'bg-image-5.jpg', 'bg-image-6.jpg', 'bg-image-7.jpg', 'bg-image-8.jpg',
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prev => (prev + 1) % bgImages.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [bgImages.length]);
    return (
        <>
            <div className='relative h-screen'>
                {/* Sliding image container */}
                {
                    bgImages.map((image, i) => (
                        <div 
                        key={i}
                        style={{ backgroundImage: `url(${image})` }}
                        className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-3000
                        ${ i === currentIndex ? 'opacity-100' : 'opacity-0' }`}></div>
                    ))
                }

                <div className="relative z-10 px-6 md:px-16 lg:px-24 xl:px-32 w-screen h-screen
                    bg-gradient-to-r from-white/95 via-white/80 to-white/0 text-gray-900">
                    <div className="pt-35 md:pt-45 w-fit text-center">
                        {/* <p className="md:text-3xl font-black">Homes for Every Stage of Life</p> */}
                        <h1 className="text-3xl md:text-7xl font-light mt-2 max-w-3xl [text-shadow:4px_4px_12px_rgba(0,0,0,0.8)]">
                            Find Your Perfect Home in Addis Ababa!
                        </h1>
                        <p className="max-w-2xl mt-4 md:text-3xl text-center mx-auto [text-shadow:1px_1px_2px_rgba(0,0,0,0.4)] tracking-wider">
                        SabaHomes connects you to the finest apartments, villas, and offices across Addis Ababa.
                        </p>
                    </div>

                    {/* Form */}
                    <form className='w-fit mt-6 bg-white/80 border text-gray-900 rounded-lg px-6 py-4 
                    flex flex-col md:flex-row max-md:items-start gap-4 max-md:mx-auto'>
                        {/* Location */}
                        <div>
                            <label htmlFor="locationInput" className="block text-sm md:text-md">Location</label>
                            <input list='locations' id="locationInput" type="text"
                            className=" rounded border border-gray-400 px-2 py-1 md:py-1.5 mt-1.5 text-sm outline-none" placeholder="Select location" required />

                            <datalist id="locations">
                                {
                                    locations.map((location, index) => (
                                        <option value={location} key={index} />
                                    ))
                                }
                            </datalist>
                        </div>
                        {/* Propery type */}
                        <div>
                            <label htmlFor="locationInput" className="block text-sm md:text-md">Property type</label>
                            <input list='locations' id="locationInput" type="text"
                            className=" rounded border border-gray-400 px-2 py-1 md:py-1.5 mt-1.5 text-sm outline-none" placeholder="Select type" required />

                            <datalist id="locations">
                                {
                                    locations.map((location, index) => (
                                        <option value={location} key={index} />
                                    ))
                                }
                            </datalist>
                        </div>
                        {/* Price */}
                        <div>
                            <label htmlFor="locationInput" className="block text-sm md:text-md">Price limit</label>
                            <input list='locations' id="locationInput" type="text"
                            className=" rounded border border-gray-400 px-2 py-1 md:py-1.5 mt-1.5 text-sm outline-none" placeholder="Select price limit" required />

                            <datalist id="locations">
                                {
                                    locations.map((location, index) => (
                                        <option value={location} key={index} />
                                    ))
                                }
                            </datalist>
                        </div>

                        <button className='flex items-center justify-center gap-1 rounded-md bg-[#FF0091] text-white hover:opacity-80
                        py-3 px-4 my-auto cursor-pointer max-md:w-full max-md:py-1' >
                            <img src={assets.searchIcon} alt="Search Icon" className="h-5 transition-all duration-500" />
                            <span>Search</span>
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Hero;