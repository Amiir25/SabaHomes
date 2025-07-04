import React from "react";
import Title from "./Title";
import ClientRating from "./ClientRating";
import { happyClients } from "../assets/assets";

const HappyClients = () => {
    return (
        <>
            <div className="flex flex-col items-center px-6 md:px-16 lg:px-24 bg-gray-100 pt-20 pb-30">

                <Title
                    title="Happy Clients"
                    subtitle="Discover why discending travelers consistently choose QuickStay their exclusive and luxurious accomodation around the world." />

                {/* --- */}
                <div className="flex flex-wrap items-center justify-center gap-6 mt-20 mb-10">
                    {
                        happyClients.map((testimonial) => (
                            <div key={testimonial.id} className="bg-white p-6 rounded-xl shadow max-w-xs">
                                <div className="flex items-center gap-3">
                                    <img className="w-12 h-12 rounded-full" src={testimonial.image} alt={testimonial.name} />
                                    <div>
                                        <p className="font-playfair text-xl">{testimonial.name}</p>
                                        <p className="text-gray-500">{testimonial.address}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-1 mt-4">
                                    <ClientRating/>
                                </div>
                                <p className="text-gray-500 max-w-90 mt-4">"{testimonial.review}"</p>
                            </div>
                        ))
                    }
                </div>

            </div>
        </>
    )
}

export default HappyClients;