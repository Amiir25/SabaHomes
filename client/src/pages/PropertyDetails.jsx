import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { commonSpecifications, houses } from "../assets/assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faBath, faBed, faRulerCombined, faHouse, faPlane } from "@fortawesome/free-solid-svg-icons"
import ClientRating from "../components/ClientRating"

const PropertyDetails = () => {

    const { id } = useParams();
    const [house, setHouse] = useState(null);
    const [mainImage, setMainImage] = useState(null);

    useEffect(() => {
        const selectedHouse = houses.find(house => house._id === id);
        selectedHouse && setHouse(selectedHouse);
        selectedHouse && setMainImage(selectedHouse.rooms[0]);
    }, [])

    return house && (
        <>
            <div className="py-24 md:py-35 px-4 md:px-16 lg:px-24 xl:px-32">

                {/* House Details */}
                <div className="flex items-start md:items-center gap-2">
                    <h1 className="text-3xl md:text-4xl">
                        <FontAwesomeIcon icon={faLocationDot} className="mr-2" />
                        {house.location}
                        <span className="text-sm mx-2">({house.type})</span>
                    </h1>
                    <p className="text-xs py-1.5 px-3 text-white bg-[#FF0091] rounded-full">20% OFF</p>
                </div>

                {/* Price */}
                <p className="text-lg mt-2 text-gray-500">
                    ETB <span className="text-gray-800 text-shadow-lg">{house.price}</span>
                </p>

                {/* Images */}
                <div className="flex flex-col lg:flex-row gap-8 mt-6">

                    <div className="lg:w-1/2 w-full">
                        <img src={mainImage} alt="Room Image" className="w-full rounded-xl shadow-lg object-cover" />
                    </div>

                    <div className="flex flex-wrap gap-4 lg:w-1/2 w-full">
                        {
                            house?.rooms.length > 1 &&
                            house.rooms.map((room, index) => (
                                <img src={room} alt="Room Image" key={index}
                                    onClick={() => setMainImage(room)}
                                    className={`w-42 rounded-xl shadow-md object-cover cursor-pointer
                                    ${mainImage === room && "outline-3 outline-pink-500"}`} />
                            ))
                        }
                    </div>

                </div>

                {/* Room Highlights */}
                <div className="flex flex-col md:flex-row md:justify-between mt-10 py-10">

                    <div className="flex flex-col">

                        <h1 className="text-3xl md:text-4xl">Experiance Luxury Like Never Before</h1>

                        <div className="flex items-center justify-evenly text-xs md:text-lg text-gray-500 mt-6">
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

                    </div>

                    <button className="bg-[#FF0091] active:scale-95 transition-all text-white rounded-md
                    max-md:w-full max-md:mt-6 md:px-25 py-3 md:py-4 text-2xl cursor-pointer">
                        Site Visit
                    </button>
                </div>

                {/* Common Specifications */}
                <div className="mt-25 space-y-4">
                    {
                        commonSpecifications.map((spec, index) => (
                            <div key={index} className="flex itmes-start gap-2">

                                <FontAwesomeIcon icon={faPlane} />

                                <div>
                                    <p className="text-base">{spec.title}</p>
                                    <p className="text-gray-500">{spec.description}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>

                {/* Description */}
                <div className="max-w-3xl border-y border-gray-300 my-15 py-10 text-gray-500">
                    <p>
                        Guests will be allocated on the ground floor according to availability. You get a comfortable
                        Two bedroom apartment has a true city feeling. The price quoted is for two guests, at the guest
                        slot please mark the number of guests to get the exact price for groups. The Guests will be
                        allocated ground floor according to availability. You get a comfortable Two bedroom apartment
                        has a true city feeling.
                    </p>
                </div>

                {/* Agent */}
                <div>

                    <div className="flex gap-4">
                        <img src={house.image} alt="Agent" className="h-14 w-14 md:h-18 md:w-18 rounded-full" />

                        <div>
                            <p className="text-lg md:text-xl">Agent {house.type}</p>
                            <div className="flex items-center mt-1">
                                <ClientRating/>
                                <p className="ml-2">200+ reviews</p>
                            </div>
                        </div>
                    </div>

                    <button className="px-6 py-2.5 mt-4 rounded text-white bg-[#FF0091]
                    hover:bg-primary-dull transition-all cursor-pointer">
                        Contact Now
                    </button>

                </div>

            </div>
        </>
    )
}

export default PropertyDetails;