import React, { useEffect, useState } from "react";
import { assets, locations } from "../assets/assets";

const Hero = () => {

    // Images for dynamic background
    const bgImages = [
        'bg-6.png', 'bg-8.png', 'bg-9.jpg', 'bg-10.jpg'
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prevIndex => 
                prevIndex === bgImages.length - 1 ? 0 : prevIndex + 1
            )
        }, 5000);
    }, [bgImages.length]);
    return (
        <>
            <div style={{ backgroundImage: `url(${bgImages[currentIndex]})` }} className='bg-cover bg-center bg-no-repeat h-screen'>
                <div className="flex flex-col items-left gap-10 px-6 md:px-16 lg:px-24 xl:px-32 w-full h-screen
                bg-gradient-to-r from-white/95 via-white/90 to-white/0 text-gray-900">

                    <div className="mt-45 w-fit text-center">
                        {/* <p className="md:text-3xl font-black">Homes for Every Stage of Life</p> */}
                        <h1 className="md:text-7xl font-light mt-2 max-w-3xl [text-shadow:4px_4px_12px_rgba(0,0,0,0.8)]">
                            Find Your Perfect Home in Addis Ababa!
                        </h1>
                        <p className="max-w-2xl mt-4 text-3xl text-center mx-auto [text-shadow:1px_1px_2px_rgba(0,0,0,0.4)] tracking-wider">
                           SabaHomes connects you to the finest apartments, villas, and offices across Addis Ababa.
                        </p>
                    </div>

                    {/* Form */}
                    <form className='bg-[rgba(255,255,255,0.8)] border text-gray-900 rounded-lg px-6 py-4  flex flex-col md:flex-row max-md:items-start gap-4 max-md:mx-auto'>

                        <div>
                            <div className='flex items-center gap-2'>
                                <label htmlFor="locationInput">Location</label>
                            </div>
                            <input list='locations' id="locationInput" type="text"
                                className=" rounded border border-gray-400 px-2 py-1.5 mt-1.5 text-sm outline-none" placeholder="Search location" required />

                            <datalist id="locations">
                                {
                                    locations.map((location, index) => (
                                        <option value={location} key={index} />
                                    ))
                                }
                            </datalist>
                        </div>

                        <div>
                            <div className='flex items-center gap-2'>
                                <label htmlFor="propertyType">Property Type</label>
                            </div>
                            <input id="propertyType" type=""
                                className=" rounded border border-gray-400 px-2 py-1.5 mt-1.5 text-sm outline-none" placeholder="" />
                        </div>

                        <div>
                            <div className='flex items-center gap-2'>
                                <label htmlFor="propertyStatus">Property Status</label>
                            </div>
                            <input id="propertyStatus" type=""
                                className=" rounded border border-gray-400 px-2 py-1.5 mt-1.5 text-sm outline-none" />
                        </div>

                        <div>
                            <div className='flex items-center gap-2'>
                                <label htmlFor="priceLimit">Price Limit</label>
                            </div>
                            <input id="priceLimit" type=""
                                className=" rounded border border-gray-400 px-2 py-1.5 mt-1.5 text-sm outline-none" />
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