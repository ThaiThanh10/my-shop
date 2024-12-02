import React from "react"
import { RightOutlined } from "@ant-design/icons"
import { Progress } from "antd"

export const DealBox = () => {
    return (
        <div className="w-1/2 flex sm:flex-col sm:gap-y-[10px] laptop:flex-row laptop:gap-x-[25px] mobile:gap-y-[15px] mobile:flexCenter mobile:flex-col sm:w-full items-start p-[40px] bg-[#fff] border-solid border-[1px] border-[#eae8e4] transition-all duration-[0.2s] ease-[ease-in-out] hover:shadow-[0_0_40px_0_rgba(22,22,25,0.1)] ">
            <img className="sm:mx-auto  "
                src="https://picsum.photos/200/320"
                alt=""
            />
            <div className="ml-[35px] flex flex-col sm:ml-0 sm:max-w-[280px] ">
                <h1 className="text-[12px] text-[#F75454]">Kindle Edition</h1>
                <h1 className="text-[18px] my-[5px] leading-[27px] ">
                    Dark in Death: An Eve Dallas Novel (In Death, Book 46)
                </h1>
                <h1 className="text-[#7c6e65] text-[14px]  ">Nora Roberts</h1>
                <h1 className="text-[#161619] text-[18px] mt-[5px] mb-[13px] font-semibold ">
                    79,99$
                </h1>
                <p className="text-[18px]">
                    <span className="font-semibold">Hurry Up!</span> Offer ends in:
                </p>
                <div className="flexCenter justify-start my-[16px]  ">
                    <div className="py-[12px] sm:px-[15px] px-[19px] border-r border-r-[#EAE8E4] ">
                        <h1>114</h1>
                        <h1>Days</h1>
                    </div>
                    <div className="py-[12px] sm:px-[15px] px-[19px] border-r border-r-[#EAE8E4]">
                        <h1>03</h1>
                        <h1>Hours</h1>
                    </div>
                    <div className="py-[12px] sm:px-[15px] px-[19px] border-r border-r-[#EAE8E4]">
                        <h1>60</h1>
                        <h1>Mins</h1>
                    </div>
                    <div className="py-[12px] sm:px-[15px] px-[19px]">
                        <h1>25</h1>
                        <h1>Secs</h1>
                    </div>
                </div>
                <h1 className="text-[14px]">Already sold: 14</h1>
                <Progress
                    className="sm:max-w-[200px]"
                    percent={60}
                    status="active"
                    showInfo={false}
                />
            </div>
        </div>
    )
}

const Deals = () => {
    return (
        <section className="bg-[#fff6f6]  mb-[95px] sm:mb-[80px] ">
            <div className="container py-[96px] ">
                <div className="mb-[32px] flexBetween">
                    <h1 className="heading ">Deals of the Week</h1>
                    <h1 className="text-[16px] hover:text-red-500  ">View All</h1>
                </div>
                <div className="flex sm:grid sm:grid-cols-1 sm:gap-y-[10px] tablet:grid-cols-2 tablet:gap-x-[10px] ">
                    <DealBox />
                    <DealBox />
                </div>
            </div>
        </section>
    )
}

export default Deals
