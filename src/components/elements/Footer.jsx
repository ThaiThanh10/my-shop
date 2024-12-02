import { Divider } from "antd"
import React from "react"

const Footer = () => {
    return (
        <footer>
            <Divider style={{ marginTop: 0 }} />
            <div className=" pb-[70px] sm:pb-[50px] ">
                <div className="container">
                    <div className="mb-[70px] sm:mb-[50px] ">
                        <div className="text-center mb-5">
                            <h5 className="text-[33px] font-medium mb-[12px] ">
                                Join Our Newsletter
                            </h5>
                            <p className="text-[#7c6e65] text-[20px] mb-[32px] ">
                                Signup to be the first to hear about exclusive deals, special offers
                                and upcoming collections
                            </p>
                        </div>
                        <div className="flex justify-center items-center sm:flex-col tablet:flex-row ">
                            <input
                                className=" border-[1px] mr-[18px] bg-[#f6f5f3] min-w-[380px] tablet:min-w-[330px] sm:min-w-[280px] px-[20px] py-[10px] text-[16px] min-h-[40px] outline-none border-[#000] border-solid"
                                type="text"
                                placeholder="Enter email for weekly newsletter."
                            />
                            <button
                                style={{ maxWidth: "200px", padding: "13px 45px" }}
                                className=" p-[13px_45px] button "
                            >
                                Subscribe
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                            </button>
                        </div>
                    </div>
                    <div className="flex sm:flex-col laptop:flex-row ">
                        <div className="w-[1/5] sm:mb-[20px] mobile:mb-[40px] ">
                            <img
                                className="mb-[30px] sm:mb-[20px] mobile:mx-auto laptop:mx-0 "
                                src="/images/logo.svg"
                                alt=""
                            />
                            <div className="tablet:flexBetween tablet:justify-around laptop:flex-col laptop:items-start " >
                                <h1 className=" pt-[10px] text-[#161619] ">
                                    <b className="text-[16px] ">Address:</b> <br /> 1418 River
                                    Drive, Suite 35 Cottonhall, CA 9622 <br /> United States
                                </h1>
                                <div className="flex flex-col mt-[10px] mobile:flex-row mobile:gap-x-[70px] laptop:flex-col laptop:gap-y-[10px] ">
                                    <a
                                        href="mailto:sale@bookworm.com"
                                        className="text-[18px]  "
                                    >
                                        <b className="text-[16px] ">Email:</b> <br />{" "}
                                        sale@bookworm.com
                                    </a>
                                    <a
                                        href="tel:+1246-345-0695"
                                        className="text-[18px]  "
                                    >
                                        <b className="text-[16px] ">Phone:</b> <br /> +1
                                        246-345-0695
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-around items-start w-[75%] sm:w-full sm:grid sm:grid-cols-2 sm:gap-[13px] tablet:grid-cols-4  ">
                            <div>
                                <h4 className=" text-[20px] leading-[21px] font-semibold mb-[30px] sm:mb-[20px] ">
                                    Explore
                                </h4>
                                <ul>
                                    <li className="py-[10px]">
                                        <a>About as</a>
                                    </li>
                                    <li className="py-[10px]">
                                        <a>Sitemap</a>
                                    </li>
                                    <li className="py-[10px]">
                                        <a>Bookmarks</a>
                                    </li>
                                    <li className="py-[10px]">
                                        <a>Sign in/Join</a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h4 className=" text-[20px] leading-[21px] font-semibold text mb-[30px] sm:mb-[20px] ">
                                    Customer Service
                                </h4>
                                <ul>
                                    <li className="py-[10px]">
                                        <a>Help Center</a>
                                    </li>
                                    <li className="py-[10px]">
                                        <a>Returns</a>
                                    </li>
                                    <li className="py-[10px]">
                                        <a>Product Recalls</a>
                                    </li>
                                    <li className="py-[10px]">
                                        <a>Accessibility</a>
                                    </li>
                                    <li className="py-[10px]">
                                        <a>Contact Us</a>
                                    </li>
                                    <li className="py-[10px]">
                                        <a>Store Pickup</a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="text-[20px] leading-[21px] font-semibold text mb-[30px] sm:mb-[20px] ">
                                    Policy
                                </h4>
                                <ul>
                                    <li className="py-[10px]">
                                        <a>Return Policy</a>
                                    </li>
                                    <li className="py-[10px]">
                                        <a>Terms Of Use</a>
                                    </li>
                                    <li className="py-[10px]">
                                        <a>Security</a>
                                    </li>
                                    <li className="py-[10px]">
                                        <a>Privacy</a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="text-[20px] leading-[21px] font-semibold text mb-[30px] sm:mb-[20px] ">
                                    Categories
                                </h4>
                                <ul>
                                    <li className="py-[10px]">
                                        <a>Action</a>
                                    </li>
                                    <li className="py-[10px]">
                                        <a>Comedy</a>
                                    </li>
                                    <li className="py-[10px]">
                                        <a>Drama</a>
                                    </li>
                                    <li className="py-[10px]">
                                        <a>Horror</a>
                                    </li>
                                    <li className="py-[10px]">
                                        <a>Kids</a>
                                    </li>
                                    <li className="py-[10px]">
                                        <a>Romantic Comedy</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Divider style={{ margin: 0 }} />
            <div className="container">
                <p className="py-[10px]">©2020 Book Worm. All rights reserved</p>
            </div>
        </footer>
    )
}

export default Footer
