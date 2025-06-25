import React from "react";
import Title from "./Title";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { exclusiveOffers } from "../assets/assets";

const ExclusiveOffers = () => {
    return (
        <>
        <div className="flex flex-col items-center px-6 md:px-16 lg:px-24 xl:px-32 pt-20 pb-30">

            <div className="flex flex-col md:flex-row items-center justify-between w-full">
                <Title 
                title="Exclusive Offers"
                subtitle="Take advantage of our limited-time offers and special packages to enhance your stay and create unforgattable memories."
                align="left" />

                <button className="group flex items-center gap-2 font-medium cursor-pointer max-md:mt-12">
                    View All Offers
                    <FontAwesomeIcon icon={faArrowRight} className="group-hover:translate-x-1 transition-all" />
                </button>
            </div>

            {/* --- */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 pt-12 md:pt-18">
                {
                    exclusiveOffers.map((item) => (
                        <div key={item.id} style={{backgroundImage: `url(${item.image})`}} className="text-white bg-no-repeat bg-cover bg-center rounded-xl">
                            
                            <div className="group relative felx flex-col items-start justify-between
                            pt-12 pb-6 px-4 md:pt-18 bg-[rgba(0,0,0,0.6)] rounded-xl">

                                <p className="px-3 py-1 absolute top-4 left-4 text-xs bg-[#FF0091] text-gray-200 font-medium rounded-full">
                                    {item.priceOff}% OFF
                                </p>

                                <div>
                                    <p className="text-2xl font-medium">{item.description}</p>
                                    <p className="text-xs text-white/70 mt-2">Expires {item.expiryDate}</p>
                                </div>

                                <button className="flex items-center gap-2 mt-8">
                                    View Offer
                                    <FontAwesomeIcon icon={faArrowRight} className="group-hover:translate-x-1 transition-all"/>
                                </button>

                            </div>

                        </div>
                    ))
                }
            </div>

        </div>
        </>
    )
}

export default ExclusiveOffers;