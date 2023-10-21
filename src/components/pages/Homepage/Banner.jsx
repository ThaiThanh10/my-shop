import React from "react"

const Banner = () => {
    return (
        <section className="banner mb-[95px]  ">
            <div className="container flex justify-between items-center py-[105px]">
                <div className="w-1/2">
                    <p className="text-[#beb4b4] text-[24px] font-extrabold uppercase ">
                        The Bookworm Editors&apos;
                    </p>
                    <h1 className="text-[#000] text-semibold text-[56px] py-[15px] ">
                        Featured Books of the <br />{" "}
                        <span className="text-[#000] font-extrabold text-[56px]">February</span>{" "}
                    </h1>
                    <button
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
                <img
                    className="scale-[0.75] w-1/2"
                    src="/images/banner.png"
                    alt=""
                />
            </div>
        </section>
    )
}

export default Banner
