import React from "react"

const Footer = () => {
    return (
        <footer>
            <span className="w-screen h-[1px] bg-[#eae8e4] block mb-[95px] "></span>

            <div className="border-top space-top-3">
                <div className="border-b-[1px] border-b-[#eae8e4] border-b-solid pb-[90px] ">
                    <div className="container">
                        <div className="pb-[90px]">
                            <div className="text-center mb-5">
                                <h5 className="text-[30px] font-medium mb-[12px] ">Join Our Newsletter</h5>
                                <p className="text-[#7c6e65] text-[20px] mb-[32px] ">
                                    Signup to be the first to hear about exclusive deals, special
                                    offers and upcoming collections
                                </p>
                            </div>
                            <div className="flex justify-center items-center ">
                                <input
                                    className=" border-[1px] mr-[18px] bg-[#f6f5f3] min-w-[380px] px-[20px] py-[10px] text-[20px] min-h-[40px] outline-none border-[#000] border-solid"
                                    type="text"
                                    placeholder="Enter email for weekly newsletter."
                                />
                                <button style={{ maxWidth: '200px', padding: "13px 45px" }} className=" p-[13px_45px] button ">
                                    Subscribe
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </button>
                            </div>
                        </div>

                        <div className="flex justify-between items-start">
                            <div>
                                <div className="pb-6">
                                    <a>
                                        <img
                                            className="mb-[30px]"
                                            src="/images/logo.svg"
                                            alt=""
                                        />
                                    </a>
                                    <address className=" mb-5">
                                        <span className="mb-2 font-light text-[#000]">
                                            1418 River Drive, Suite 35 Cottonhall, CA 9622 <br />{" "}
                                            United States
                                        </span>
                                    </address>
                                    <div className="mb-4 flex justify-center items-start flex-col gap-y-3 ">
                                        <a
                                            href="mailto:sale@bookworm.com"
                                            className="text-[18px] font-light "
                                        >
                                            sale@bookworm.com
                                        </a>
                                        <a
                                            href="tel:+1246-345-0695"
                                            className="text-[18px] font-light "
                                        >
                                            +1 246-345-0695
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h4 className=" text mb-[30px]">Explore</h4>
                                <ul>
                                    <li className="py-2">
                                        <a>About as</a>
                                    </li>
                                    <li className="py-2">
                                        <a>Sitemap</a>
                                    </li>
                                    <li className="py-2">
                                        <a>Bookmarks</a>
                                    </li>
                                    <li className="py-2">
                                        <a>Sign in/Join</a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h4 className=" text mb-[30px]">Customer Service</h4>
                                <ul>
                                    <li className="py-2">
                                        <a>Help Center</a>
                                    </li>
                                    <li className="py-2">
                                        <a>Returns</a>
                                    </li>
                                    <li className="py-2">
                                        <a>Product Recalls</a>
                                    </li>
                                    <li className="py-2">
                                        <a>Accessibility</a>
                                    </li>
                                    <li className="py-2">
                                        <a>Contact Us</a>
                                    </li>
                                    <li className="py-2">
                                        <a>Store Pickup</a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h4 className=" text mb-[30px]">Policy</h4>
                                <ul>
                                    <li className="py-2">
                                        <a>Return Policy</a>
                                    </li>
                                    <li className="py-2">
                                        <a>Terms Of Use</a>
                                    </li>
                                    <li className="py-2">
                                        <a>Security</a>
                                    </li>
                                    <li className="py-2">
                                        <a>Privacy</a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h4 className=" text mb-[30px]">Categories</h4>
                                <ul>
                                    <li className="py-2">
                                        <a>Action</a>
                                    </li>
                                    <li className="py-2">
                                        <a>Comedy</a>
                                    </li>
                                    <li className="py-2">
                                        <a>Drama</a>
                                    </li>
                                    <li className="py-2">
                                        <a>Horror</a>
                                    </li>
                                    <li className="py-2">
                                        <a>Kids</a>
                                    </li>
                                    <li className="py-2">
                                        <a>Romantic Comedy</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="flex text-center  justify-between items-center">
                        <p className="py-[10px]">©2020 Book Worm. All rights reserved</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
