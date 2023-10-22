import React from "react"
import { Link, useNavigate } from "react-router-dom"
import Header from "../../elements/Header"
import Footer from "../../elements/Footer"

const ErrorPage = () => {
    const navigate = useNavigate()
    return (
        <>
            <Header />
            <div className="container  flexCenter flex-col  mt-[156px] pt-[64px] pb-[128px] ">
                <h1 className=" text-[200px] text-[#161619] text-semibold leading-[240px] ">404</h1>
                <h1 className="text-[20px] leading-[24px] mb-[10px]">
                    Woops, looks like this page does not exist
                </h1>
                <h1 className=" text-[14px] text-[#161619]  leading-[21px] mb-[40px] ">
                    You could either go back or go to homepage
                </h1>
                <button
                    onClick={() => navigate("/")}
                    style={{ maxWidth: "280px", padding: "18px 93px" }}
                    className="button "
                >
                    See More
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>{" "}
            </div>
            <Footer />
        </>
    )
}

export default ErrorPage
