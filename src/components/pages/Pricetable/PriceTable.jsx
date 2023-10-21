import React from "react"

export const PricingBox = () => {
    return (
        <div className="border border-solid border-[#eae8e4] transition-all duration-[0.2s] ease-[ease-in-out] w-max p-[80px_34px_40px] hover:translate-y-[-3px] hover:shadow-[0_0_40px_0_rgba(22,22,25,0.1)] hover:border-[#161619] ">
            <div className="text-center pb-[70px]">
                <h1 className="text-[30px] font-semibold leading-[36px] mb-[16px] ">Starter</h1>
                <h1 className="text-[30px] leading-[26px] font-semibold  mb-[16px] ">$25.99</h1>
                <p className="text-[#7F7F83] text-[14px] ">Per Month</p>
            </div>
            <div className="flex flex-col justify-center items-center gap-y-[12px] mb-[45px]">
                <h1 className="text-[16px]">400+ Pages</h1>
                <h1 className="text-[16px]">Quality & Customer Experience</h1>
                <h1 className="text-[16px]">Power And Predictive Dialing</h1>
                <h1 className="text-[16px]">24/7 phone and email support</h1>
            </div>
            <button className="button ">
                Submit Message
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </button>
        </div>
    )
}

const UIPricingTable = () => {
    return (
        <div className="container my-[80px]">
            <h1 className=" text-[30px] font-semibold  leading-[36px] text-center mb-[64px] ">
                Pricing Table
            </h1>
            <div className="flex justify-center items-start gap-x-[10px] ">
                <PricingBox />
                <PricingBox />
                <PricingBox />
                <PricingBox />
            </div>
        </div>
    )
}

export default UIPricingTable
