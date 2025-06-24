import React from "react";
import { houses } from "../assets/assets";
import PropertyCard from "./PropertyCard";

const FeaturedProperties = () => {
    return (
        <>
        <div className="flex flex-col items-center px-6 md:px-16 lg:px-24 bg-slate-50 py-20">

            <div className="flex flex-wrap items-center justify-center gap-6 mt-20">
                {
                    houses.slice(0,3).map((house, index) => (
                        <PropertyCard key={house._id} house={house} index={index}/>
                    ))
                }
            </div>

        </div>
        </>
    )
}

export default FeaturedProperties;