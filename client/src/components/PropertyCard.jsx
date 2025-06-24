import React from "react";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBath, faBed, faLocationDot, faMoneyCheck, faRulerCombined, faStar, faTriangleCircleSquare, faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';

const PropertyCard = ({house, index}) => {
    return (
        <>
        <Link to={'/properties/' + house._id} onClick={() => scrollTo(0,0)} key={house._id}
        className='relative max-w-90 w-full rounded-xl overflow-hidden bg-white text-gray-500/90 
        shadow-[0px_4px_4px_rgba(0,0,0,0.05)]' >

            {/* --- */}
            <img src={house.image} alt="House Image" />
            {
                // Display this text for some properties
                index % 2 === 0 &&
                <p className="px-3 py-1 absolute top-3 left-3 text-xs bg-[#FF0091] text-gray-200 font-medium rounded-full">
                    New
                </p>
            }

            {/* --- */}
            <div className="p-4 pt-5">

                <div className="flex items-center justify-between px-2 text-gray-800 pb-2 border-b border-b-gray-400">
                    <p className="text-xl font-medium">
                        <FontAwesomeIcon icon={faLocationDot} className="text-lg me-2" /> {house.location}
                    </p>
                    <p>
                        <FontAwesomeIcon icon={faStar} className="text-amber-500" />4.5
                    </p>
                </div>

                <div className="flex items-center justify-between px-2 mt-3 font-medium pb-2 border-b border-b-gray-400">
                    <p>{house.type}</p>
                    <p><FontAwesomeIcon icon={faBed} className="me-1"/> {house.bedRoom} </p>
                    <p><FontAwesomeIcon icon={faBath} className="me-1"/> {house.bathRoom} </p>
                    <p><FontAwesomeIcon icon={faRulerCombined} className="me-1"/> {house.size} </p>

                </div>

                <div className="flex items-center justify-between px-2 mt-3">
                    <p><FontAwesomeIcon icon={faMoneyCheck} className="me-1" /> {house.price} ETB</p>
                    <button className="text-sm p-1 rounded text-white bg-[#FF0091] hover:opacity-85 cursor-pointer">
                        View Detail
                    </button>
                </div>

            </div>
        </Link>
        </>
    )
}

export default PropertyCard;