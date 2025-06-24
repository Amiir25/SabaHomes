import React from "react";
import { houses } from "../assets/assets";
import PropertyCard from "./PropertyCard";
import Title from "./Title";
import { useNavigate } from "react-router-dom";

const FeaturedProperties = () => {

    const navigate = useNavigate();
    return (
        <>
        <div className="flex flex-col items-center px-6 md:px-16 lg:px-24 bg-slate-50 py-20">

            {/* Title */}
            <Title
            title="Featured Properties"
            subtitle="Discover our handpicked selection of exceptional properties in Addis Ababa, offering unparalleled luxury experiance." />

            {/* Houses */}
            <div className="flex flex-wrap items-center justify-center gap-6 mt-20">
                {
                    houses.slice(0,3).map((house, index) => (
                        <PropertyCard key={house._id} house={house} index={index}/>
                    ))
                }
            </div>

            {/* Button */}
            <button
            onClick={() => {navigate('/properties')}}
            className="my-16 px-4 py-2 text-sm font-medium border border-gray-300 rounded bg-white
            hover:bg-gray-50 transition-all cursor-pointer">
                View All Properties
            </button>

        </div>
        </>
    )
}

export default FeaturedProperties;