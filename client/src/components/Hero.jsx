import React from "react";
import { assets, locations } from "../assets/assets";

const Hero = () => {
    return (
        <>
            <div className="bg-[url('/src/assets/hero.jpg')] bg-cover bg-center bg-no-repeat h-screen">
                <div className="flex flex-col items-center justify-around px-6 md:px-16 lg:px-24 xl:px-32 w-full h-screen
                bg-[rgba(255,255,255,0.6)] text-gray-900 text-center">

                    <div className="mt-50">
                        <p className="md:text-3xl font-black">Homes for Every Stage of Life</p>
                        <h1 className="md:text-6xl font-light mt-2 max-w-3xl">
                            Find a place that reflects who you are!
                        </h1>
                        {/* <p className="max-w-130 mt-2 text-sm md:text-base">
                            Whether you’re starting fresh, growing your family, or investing in the future—we’ve got you covered. Get your home—faster, easier, and without the guesswork.
                        </p> */}
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