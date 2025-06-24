import React from "react";
import { houses } from "../assets/assets";
import PropertyCard from "./PropertyCard";

const FeaturedProperties = () => {
    return (
        <>
        <div className="flex flex-col items-center px-6 md:px-16 bg-slate-50 py-20">

            <div>
                {
                    houses.slice(0,1).map((house, index) => (
                        <PropertyCard key={house._id} house={house} index={index}/>
                    ))
                }
            </div>

        </div>
        </>
    )
}

export default FeaturedProperties;