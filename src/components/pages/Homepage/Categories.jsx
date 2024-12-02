import React from "react"
import { Link } from "react-router-dom"

const Categories = () => {
    return (
        <section>
            <div className="container  mb-[95px] sm:mb-[80px] ">
                <div className="mb-[30px] flexBetween  ">
                    <h1 className="heading ">Categories</h1>
                    <Link to="/productlist" className="flexCenter  gap-x-[13px] text-[16px] hover:text-red-500  ">
                        All Categories
                    </Link>
                </div>
                <div className="flexBetween sm:flex-col sm:gap-y-[13px] mobile:grid mobile:grid-cols-2 mobile:gap-[14px] laptop:grid-cols-4 ">
                    <div className="border-[1px] w-[23%]  px-[35px] py-[25px] rounded-[10px] bg-indigo-100 sm:w-full ">
                        <img
                            src="/images/camera-take-pictures-svgrepo-com.svg"
                            alt=""
                        />
                        <h1 className="text my-[20px]">Arts & Photography</h1>
                        <a>Shop Now</a>
                    </div>
                    <div className="border-[1px] w-[23%]  px-[25px] py-[25px] rounded-[10px] bg-orange-100 sm:w-full ">
                        <img
                            src="/images/chef-hat-svgrepo-com.svg"
                            alt=""
                        />
                        <h1 className="text my-[20px]">Food & Drink</h1>
                        <a>Shop Now</a>
                    </div>
                    <div className="border-[1px] w-[23%]  px-[25px] py-[25px] rounded-[10px] bg-pink-100 sm:w-full ">
                        <img
                            src="/images/hearts-love-svgrepo-com.svg"
                            alt=""
                        />
                        <h1 className="text my-[20px]">Romance</h1>
                        <a>Shop Now</a>
                    </div>
                    <div className="border-[1px] w-[23%]  px-[25px] py-[25px] rounded-[10px] bg-blue-100 sm:w-full ">
                        <img
                            src="/images/health-medical-svgrepo-com.svg"
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
