import React from "react";
import { Link } from 'react-router-dom';

const PropertyCard = ({house, index}) => {
    return (
        <>
        <Link to={'/properties/' + house._id} onClick={() => scrollTo(0,0)} key={house._id}>

            <img src={house.image} alt="House Image" />
            {
                // Display this text for some properties
                index % 2 === 0 &&
                <p className="">
                    Best Seller
                </p>
            }
        </Link>
        </>
    )
}

export default PropertyCard;