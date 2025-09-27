import React, { useEffect, useState } from "react";
import { assets, locations } from "../assets/assets";

const Hero = () => {

    // Background images for large screen
    const desktopBgImages = [
        'bg-large-1.jpg', 'bg-large-2.jpg', 'bg-large-3.jpg', 'bg-large-4.jpg',
        'bg-large-5.jpg', 'bg-large-6.jpg', 'bg-large-7.jpg', 'bg-large-8.jpg'
    ];

    // Background images for small screen
    const mobileBgImages = [
        'bg-small-1.jpg', 'bg-small-2.jpg', 'bg-small-3.jpg', 'bg-small-4.jpg',
        'bg-small-5.jpg', 'bg-small-6.jpg', 'bg-small-7.jpg', 'bg-small-8.jpg'
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prev => (prev + 1) % desktopBgImages.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [desktopBgImages.length]);
    return (
        <>
            <div className='relative h-screen'>
                {/* Desktop background */}
                {
                    desktopBgImages.map((image, i) => (
                        <div 
                        key={i}
                        style={{ backgroundImage: `url(/bg-large/${image})` }}
                        className={`hidden md:block absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-3000
                        ${ i === currentIndex ? 'opacity-100' : 'opacity-0' }`}/>
                    ))
                }
                {/* Mobile backgrounds */}
                {
                    mobileBgImages.map((image, i) => (
                        <div
                        key={i}
                        style={{ backgroundImage: `url(/bg-small/${image})` }}
                        className={`absolute md:hidden inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-3000
                        ${ i === currentIndex ? 'opacity-100' : 'opacity-0' }`}/>
                    ))
                }

                <div className="relative z-10 px-6 md:px-16 lg:px-24 xl:px-32 w-screen h-screen
                    bg-gradient-to-r from-white/40 via-white/90 to-white/40
                    md:from-white/95 md:via-white/80 md:to-white/0 text-gray-900">
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
                    <form className='w md:w-fit mt-6 bg-white/50 border text-gray-900 rounded-lg px-8 py-4 
                    flex flex-col md:flex-row max-md:items-start gap-4 max-md:mx-auto'>
                        {/* Location */}
                        <div>
                            <label htmlFor="locationInput" className="block text-sm md:text-md">Location</label>
                            <input list='locations' id="locationInput" type="text"
                            placeholder="Select location" required
                            className=" rounded border border-gray-400 px-9 py-1 md:py-1.5 mt-1.5 text-sm outline-none" />

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
                            placeholder="Select type" required
                            className=" rounded border border-gray-400 px-9 py-1 md:py-1.5 mt-1.5 text-sm outline-none" />

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
                            placeholder="Select price limit" required
                            className=" rounded border border-gray-400 px-9 py-1 md:py-1.5 mt-1.5 text-sm outline-none" />

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