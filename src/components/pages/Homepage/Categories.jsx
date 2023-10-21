import React from "react"
import { RightOutlined } from "@ant-design/icons"

const Categories = () => {
    return (
        <section>
            <div className="container  mb-[95px]">
                <div className="mb-[30px] flexBetween ">
                    <h1 className="heading ">Categories</h1>
                    <button className="flexCenter  gap-x-[13px] text-[16px] hover:text-red-500  ">
                        All Categories
                        <RightOutlined />
                    </button>
                </div>
                <div className="flexBetween  ">
                    <div className="border-[1px] w-[23%]  px-[35px] py-[25px] rounded-[10px] bg-indigo-100 ">
                        <img
                            className="scale-[1.5]"
                            src="/images/gallery.png"
                            alt=""
                        />
                        <h1 className="text my-[20px]">Arts & Photography</h1>
                        <a>Shop Now</a>
                    </div>
                    <div className="border-[1px] w-[23%]  px-[25px] py-[25px] rounded-[10px] bg-orange-100 ">
                        <img
                            className="scale-[1.5]"
                            src="/images/chef.png"
                            alt=""
                        />
                        <h1 className="text my-[20px]">Food & Drink</h1>
                        <a>Shop Now</a>
                    </div>
                    <div className="border-[1px] w-[23%]  px-[25px] py-[25px] rounded-[10px] bg-pink-100 ">
                        <img
                            className="scale-[1.5]"
                            src="/images/love.png"
                            alt=""
                        />
                        <h1 className="text my-[20px]">Romance</h1>
                        <a>Shop Now</a>
                    </div>
                    <div className="border-[1px] w-[23%]  px-[25px] py-[25px] rounded-[10px] bg-blue-100 ">
                        <img
                            className="scale-[1.5]"
                            src="/images/stethoscope.png"
                            alt=""
                        />
                        <h1 className="text my-[20px]"> Health</h1>
                        <a>Shop Now</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Categories
