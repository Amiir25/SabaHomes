import React from "react";
import Hero from "../components/Hero";
import FeaturedProperties from "../components/FeaturedProperties";
import ExclusiveOffers from "../components/ExclusiveOffers";
import HappyClients from "../components/HappyClients";
import NewsLetter from "../components/NewsLetter";

const Home = () => {
    return(
        <>
            <Hero/>
            <FeaturedProperties/>
            <ExclusiveOffers/>
            <HappyClients/>
            <NewsLetter/>
        </>
    )
}

export default Home;