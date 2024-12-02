import React from "react"
import { commerce } from "../../../lib/commerce"

const Banner = () => {
    const getOrd = async () => {
        try {
            const ord = await commerce.customer.about("61463977-2f57-4874-a362-94ab31584515")
            console.log("🚀ord---->", ord)
        } catch (error) {
            console.log("🚀error---->", error)
        }
    }
    return (
        <section className="banner mb-[95px] sm:mb-[80px]  ">
            <div className="container laptop:py-[105px] flexCenter sm:flex-col sm:py-[70px] mobile:flex-row ">
                <div className="w-1/2 sm:w-full mobile:w-1/2 ">
                    <p className="text-[#beb4b4] laptop:text-[24px] font-extrabold uppercase sm:text-[20px] ">
                        The Bookworm Editors&apos;
                    </p>
                    <h1 className="text-[#000] text-semibold laptop:text-[56px] py-[15px] sm:text-[45px] mobile:text-[36px] ">
                        Featured Books of the <br />{" "}
                        <span className="text-[#000] font-extrabold laptop:text-[56px] mobile:text-[36px]">
                            February
                        </span>{" "}
                    </h1>
                    <div className="sm:flexCenter mobile:justify-start ">
                        <button
                            onClick={getOrd}
                            style={{ maxWidth: "175px", padding: "13px 45px" }}
                            className="button "
                        >
                            See More
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                    </div>
                </div>
                <img
                    className=" w-1/2 sm:w-full mobile:w-1/2 "
                    src="/images/banner.png"
                    alt=""
                />
            </div>
        </section>
    )
}

export default Banner
