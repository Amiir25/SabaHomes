import React, { useState } from "react";
import { houses } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBath, faBed, faHouse, faLocationDot, faRuler, faRulerCombined } from "@fortawesome/free-solid-svg-icons";

// Checkbox component to create multiple checkboxes
const Checkbox = ({label, selected = false, onChange = () => {}}) => {
    return (
        <>
        <label className="flex gap-3 items-center cursor-pointer mt-2 text-sm">
            <input type="checkbox" checked={selected} onChange={(e) => onChange(e.target.checked, label)} />
            <span className="font-light select-none">{label}</span>
        </label>
        </>
    )
}

// Radio component to create multiple radio buttons for filter section
const RadioButton = ({label, selected = false, onChange = () => {}}) => {
    return (
        <>
        <label className="flex gap-3 items-center cursor-pointer mt-2 text-sm">
            <input type="checkbox" checked={selected} name="sortOption"
            onChange={(e) => onChange(e.target.checked, label)} />
            <span className="font-light select-none">{label}</span>
        </label>
        </>
    )
}

const Properties = () => {

    const navigate = useNavigate();
    let [openFilters, setOpenFilters] = useState(false);

    // Filters
    const propertyTypes = [
        "Villa",
        "Appartment",
        "Commercial"
    ];
    const priceRanges = [
        "1M to 5M",
        "5M to 10M",
        "10M to 20M",
        "20M to 30M",
        "30M to 40M",
        "40M to 50M",
    ];
    const sortOption = [
        "Price Low to High",
        "Price High to Low",
        "Newest First"
    ];

    return (
        <>
            <div className="flex flex-col-reverse lg:flex-row items-start justify-between
            pt-24 md:pt-35 px-6 md:px-16 lg:px-24 xl:px-32">

                {/* Left contnet */}
                <div className="">

                    <div>
                        <h1 className="text-4xl md:text-[40px]">Properties</h1>
                        <p className="text-sm md:text-base text-gray-500/90 mt-3 max-w-174">
                            Take advantage of our limited-time offers and special packages
                            to enhance your stay and create unforgattable memories.
                        </p>
                    </div>

                    {
                        houses.map((house) => (
                            <div
                                key={house._id}
                                className="flex items-start py-10 gap-6 border-b border-gray-300 last:pb-30 last:border-0" >

                                <img src={house.image} alt={`${house.type} Image`} title="View Properties"
                                    onClick={() => { navigate(`/properties/${house._id}`) }}
                                    className="w-84 md:w-112 rounded-xl shadow-lg object-cover cursor-pointer" />

                                {/* --- */}
                                <div className="py-5">

                                    {/* Location */}
                                    <div className="flex items-center gap-2">
                                        <FontAwesomeIcon icon={faLocationDot} className="text-xl" />
                                        <p className="text-gray-800 text-2xl md:text-3xl font-playfair cursor-pointer">{house.location}</p>
                                    </div>

                                    {/* Detail */}
                                    <div className="grid grid-cols-2 gap-4 text-xs md:text-sm text-gray-500 mt-3 max-w-48">

                                        <div className="flex items-center gap-1">
                                            <FontAwesomeIcon icon={faHouse} />
                                            <p>{house.type}</p>
                                        </div>

                                        <div className="flex items-center gap-1">
                                            <FontAwesomeIcon icon={faRulerCombined} />
                                            <p>{house.size}</p>
                                        </div>

                                        <div className="flex items-center gap-1">
                                            <FontAwesomeIcon icon={faBed} />
                                            <p>{house.bedRoom}</p>
                                        </div>

                                        <div className="flex items-center gap-1">
                                            <FontAwesomeIcon icon={faBath} />
                                            <p>{house.bathRoom}</p>
                                        </div>

                                    </div>

                                    {/* Price */}
                                    <p className="text-sm md:text-lg mt-5 text-gray-500">
                                        ETB <span className="text-gray-800 text-shadow-lg">{house.price}</span>
                                    </p>

                                    {/* Button */}
                                    <button 
                                    className="text-sm md:text-lg p-1 md:p-2 mt-4 rounded text-white bg-[#FF0091] hover:opacity-85 cursor-pointer">
                                        View Detail
                                    </button>

                                </div>

                            </div>
                        ))
                    }

                </div>

                {/* Right content (Filters) */}
                <div className="bg-white w-80 border border-gray-300 text-gray-600 max-lg:mb-8 min-lg:mt-16 py-2">

                    <div className={`flex items-center justify-between px-5 py-2.5 min-l:border-b 
                        border-gray-300 min-lg:border-b ${openFilters && "border-b"}`}>
                        
                        <p className="text-base font-medium text-gray-800">FILTERS</p>
                    
                        <div>
                            <span
                            onClick={() => setOpenFilters(!openFilters)} className="lg:hidden" >
                                {openFilters ? 'HIDE' : 'SHOW'}
                            </span>
                            <span className="hidden lg:block">CLEAR</span>
                        </div>

                    </div>

                    {/* --- */}
                    <div className={`${openFilters ? 'h-auto' : 'h-0 lg:h-auto'}
                    overflow-hidden transition-all duration-700`}>

                        <div className="px-5 pt-5">
                            <p>Popular Filters</p>
                            {
                                propertyTypes.map((type, index) => (
                                    <Checkbox key={index} label={type} />
                                ))
                            }
                        </div>

                        <div className="px-5 pt-5">
                            <p>Price Range</p>
                            {
                                priceRanges.map((range, index) => (
                                    <Checkbox key={index} label={`ETB ${range}`} />
                                ))
                            }
                        </div>

                        <div className="px-5 pt-5">
                            <p>Sort By</p>
                            {
                                sortOption.map((sortBy, index) => (
                                    <RadioButton key={index} label={sortBy} />
                                ))
                            }
                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}

export default Properties;