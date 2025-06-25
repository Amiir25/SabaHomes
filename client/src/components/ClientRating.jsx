import { faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const ClientRating = ({rating = 4}) => {
    return (
        <>
            {Array(5).fill('').map((_, index) => (
                <FontAwesomeIcon icon={rating > index ? faStar : faStarHalf} 
                className="text-amber-500" />
            ))}
        </>
    )
}

export default ClientRating;