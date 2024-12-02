import React, { useContext, useEffect, useState } from "react"
import Banner from "./Banner"
import Categories from "./Categories"
import BestSelling from "./BestSelling"
import FeaturedBooks from "./FeaturedBooks"
import Deals from "./Deals"
import NewReleases from "./NewReleases"
import BiographiesBooks from "./BiographiesBooks"
import AuthorsList from "./AuthorsList"
import { MainContext } from "../../context/MainProvider"
const Homepage = () => {
    const { dataProducts, handleAddCart } = useContext(MainContext)
    useEffect(() => {
        console.log("dataProducts", dataProducts)

        return () => {
            console.log("comp will unmount")
        }
    }, [])

    return (
        <div>
            <Banner />
            <Categories />
            <BestSelling
                dataProducts={dataProducts}
                onAddCart={handleAddCart}
            />
            <FeaturedBooks
                dataProducts={dataProducts}
                onAddCart={handleAddCart}
            />
            <Deals />
            <NewReleases
                dataProducts={dataProducts}
                onAddCart={handleAddCart}
            />
            <BiographiesBooks />
            <AuthorsList />
        </div>
    )
}

export default Homepage
