import React from "react"
import { RightOutlined } from "@ant-design/icons"
export const BiographiesBox = () => {
    return (
        <div className="w-1/3 flex  border-solid border-[1px] border-[#eae8e4] transition-all duration-[0.2s] ease-[ease-in-out] hover:shadow-[0_0_40px_0_rgba(22,22,25,0.1)]  p-[30px] ">
            <img src="https://picsum.photos/180/220" alt="" />
            <div className="ml-[20px] flex flex-col  ">
                <h1 className="text-[12px] text-[#F75454] ">Hard Cover</h1>
                <h1 className="line-clamp-2 text-[16px] my-[5px] text-bold ">
                    The Rural Diaries: Love, Livestock, and Big Life Lessons Down on
                    Mischief Farm
                </h1>
                <h1 className="text-[14px] text-[#7C6E65] ">Hillaru Burton</h1>
                <h1 className="text-[18px] my-[5px] ">$15</h1>
            </div>
        </div>
    );
};
const BiographiesBooks = () => {
    return (
        <section>
            <div className="container mb-[95px]">
                <div className="container ">
                    <div className="mb-[30px] flex justify-between items-center">
                        <h1 className="heading ">Biographies Books</h1>
                        <button className="flex justify-center items-center gap-x-[13px] text-[16px] hover:text-red-500  ">
                            View All
                            <RightOutlined />
                        </button>
                    </div>
                </div>
                <div className="flex gap-x-[8px]">
                    <BiographiesBox />
                    <BiographiesBox />
                    <BiographiesBox />
                </div>
            </div>
        </section>
    )
}

export default BiographiesBooks
