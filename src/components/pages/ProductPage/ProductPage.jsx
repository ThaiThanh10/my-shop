import React, { useState } from "react"
import { Rate } from "antd"
// import { HeartOutlined, ShareAltOutlined } from "@ant-design/icons"
import { DislikeOutlined, HeartOutlined, LikeOutlined, ShareAltOutlined } from "@ant-design/icons"
import { DATA_PAGE_1 } from "../../../DATA_PAGE_1"
import Product from "../../elements/Product"

const desc = ["Terrible", "Bad", "Normal", "Good", "Wonderful"]
export const ReviewBox = () => {
    return (
        <div className="w-full border-b border-b-solid border-[#eae8e4] mb-[30px] ">
            <div className="flex justify-start items-center ">
                <h1 className=" text-[16px] font-medium  text-left mr-[10px]  ">Amazing Story</h1>
                <Rate value="5" />
            </div>
            <p className="m-[16px_0_24px] text-[14px]">
                Such an incredibly complex story! I had to buy it because there was a waiting list
                of 30+ at the local library for this book. Thrilled that I made the purchase
            </p>
            <p>February 22, 2020</p>
            <div className="flex justify-start items-center gap-x-[30px] py-[24px]">
                <div className="flex ">
                    <LikeOutlined />
                    <p className="ml-[6px]">90</p>
                </div>
                <div className="flex ">
                    <DislikeOutlined />
                    <p className="ml-[6px]">20</p>
                </div>
            </div>
        </div>
    )
}

const ProductPage = () => {
    const [value, setValue] = useState()

    return (
        <div>
            {" "}
            <div className=" container flexBetween py-[24px] ">
                <h1 className="page-title">Single Product</h1>
                <h1>Home / Shop / Product</h1>
            </div>
            <hr className="h-[1px]  w-screen bg-[#EAE8E4]  " />
            <div className="container flex ">
                <div className="p-[56px_15px] border-r-[#eae8e4] border-r border-solid w-[40%] ">
                    <img
                        className="mx-auto"
                        src="/images/productDetail.jpg"
                        alt=""
                    />
                </div>
                <div>
                    <div className="p-[60px_40px_36px]">
                        <h1 className="text-[30px] font-medium  leading-[36px] text-left">
                            Where the Crawdads Sing
                        </h1>
                        <div className="flex justify-center items-center gap-x-[20px] w-max m-[16px_0_23px] ">
                            <span>
                                <Rate
                                    tooltips={desc}
                                    value="4"
                                />
                                {value ? (
                                    <span className="text-[16px] ml-[20px] ">
                                        {desc[value - 1]}
                                    </span>
                                ) : (
                                    ""
                                )}
                            </span>
                            <p className="text-[16px]  ">(3,714)</p>
                            <h1 className="text-[16px]  ">Author: Anna Banks</h1>
                        </div>
                        <h1 className=" text-[22px] font-medium leading-[33px] text-left mb-[16px] ">
                            $29.95 - $59.95
                        </h1>
                        <h1 className="text-[14px] font-medium ">Book Format: </h1>
                        <div className="flex items-center gap-x-[15px]  pt-[25px] ">
                            <button className="text-left pb-[10px] w-[100px]  border-b-[#eae8e4] border-b border-solid hover:border-b-[#000] active:border-b-[#000] ">
                                <h1 className="text-[16px]  ">Hardcover</h1>
                                <p className="text-[16px] my-[6px] ">$9,59</p>
                            </button>
                            <button className="text-left pb-[10px] w-[100px] border-b-[#eae8e4] border-b border-solid hover:border-b-[#000] active:border-b-[#000] ">
                                <h1 className="text-[16px]  ">Paperback</h1>
                                <p className="text-[16px] my-[6px] ">$8,59</p>
                            </button>
                            <button className="text-left pb-[10px] w-[100px] border-b-[#eae8e4] border-b border-solid hover:border-b-[#000] active:border-b-[#000] ">
                                <h1 className="text-[16px]  ">Kindle</h1>
                                <p className="text-[16px] my-[6px] ">$7,59</p>
                            </button>
                        </div>
                        <p className="pb-[35px] text-[14px] max-w-[550px] ">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat. Excepteur sint occaecat.
                        </p>
                        <div>
                            <button style={{ maxWidth: '250px', padding: "13px 45px" }} className="button ">
                                Go Back
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                            </button>
                        </div>{" "}
                    </div>
                    <div className=" p-[30px_40px] w-full border-t-[#eae8e4] border-t border-solid   ">
                        <div className=" flex justify-center items-center w-max gap-x-[30px] ">
                            <button className="flex justify-center items-center gap-x-[15px] text-[16px] ">
                                <HeartOutlined />
                                Add to wishlist
                            </button>
                            <button className="flex justify-center items-center gap-x-[15px] text-[16px] ">
                                <ShareAltOutlined />
                                Share
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="h-[1px]  w-screen bg-[#EAE8E4]  " />
            <div>
                <div className="flex justify-center items-center gap-x-[90px] py-[30px] ">
                    <li className="text-left list-none pb-[10px] w-[135px]  border-b-[#eae8e4] border-b-[2px] border-solid hover:border-b-[#000] active:border-b-[#000] ">
                        <h1 className="text-[16px] mx-auto w-max ">Descriptions</h1>
                    </li>
                    <li className="text-left list-none pb-[10px] w-[135px] border-b-[#eae8e4] border-b-[2px] border-solid hover:border-b-[#000] active:border-b-[#000] ">
                        <h1 className="text-[16px] mx-auto w-max ">Product Detail</h1>
                    </li>
                    <li className="text-left list-none pb-[10px] w-[135px] border-b-[#eae8e4] border-b-[2px] border-solid hover:border-b-[#000] active:border-b-[#000] ">
                        <h1 className="text-[16px] mx-auto w-max ">Video</h1>
                    </li>
                    <li className="text-left list-none pb-[10px] w-[135px] border-b-[#eae8e4] border-b-[2px] border-solid hover:border-b-[#000] active:border-b-[#000] ">
                        <h1 className="text-[16px] mx-auto w-max ">Review</h1>
                    </li>
                </div>
                <div className="max-w-[1080px] mx-auto mb-[30px] ">
                    <p>
                        We aim to show you accurate product information. Manufacturers, suppliers
                        and others provide what you see here, and we have not verified it. See our
                        disclaimer
                    </p>
                    <p>
                        We aim to show you accurate product information. Manufacturers, suppliers
                        and others provide what you see here, and we have not verified it. See our
                        disclaimer
                    </p>
                    <p>A Reese Witherspoon x Hello Sunshine Book Club Pick</p>
                    <p>
                        &apos;I can&apos;t even express how much I love this book! I didn&apos;t
                        want this story to end!&apos;--Reese Witherspoon
                    </p>
                    <p className="my-[20px]">
                        &apos;Painfully beautiful.&apos;--The New York Times Book Review
                    </p>
                    <p className="my-[20px]">
                        &apos;Perfect for fans of Barbara Kingsolver.&apos;--Bustle
                    </p>
                    <p className="mb-[20px]">
                        For years, rumors of the &apos;Marsh Girl&apos; have haunted Barkley Cove, a
                        quiet town on the North Carolina coast. So in late 1969, when handsome Chase
                        Andrews is found dead, the locals immediately suspect Kya Clark, the
                        so-called Marsh Girl. But Kya is not what they say. Sensitive and
                        intelligent, she has survived for years alone in the marsh that she calls
                        home, finding friends in the gulls and lessons in the sand. Then the time
                        comes when she yearns to be touched and loved. When two young men from town
                        become intrigued by her wild beauty, Kya opens herself to a new life--until
                        the unthinkable happens.
                    </p>
                    <p className="mb-[20px]">
                        Perfect for fans of Barbara Kingsolver and Karen Russell, Where the Crawdads
                        Sing is at once an exquisite ode to the natural world, a heartbreaking
                        coming-of-age story, and a surprising tale of possible murder. Owens reminds
                        us that we are forever shaped by the children we once were, and that we are
                        all subject to the beautiful and violent secrets that nature keeps
                    </p>
                    <p>WHERE THE CRAWDADS LP</p>
                </div>
                <span className="w-screen h-[1px] bg-[#eae8e4] block scale-x-150 "></span>
            </div>
            <div className=" max-w-[800px] p-[64px_15px_24px] mx-auto w-full ">
                <div className="flex items-center p-[12px_32px]">
                    <h1 className="w-[55%] text-[14px] font-bold ">Format</h1>
                    <p className="text-[14px]">Paperback | 384 pages</p>
                </div>
                <div className="flex items-center p-[12px_32px]">
                    <h1 className="w-[55%] text-[14px] font-bold ">Dimensions </h1>
                    <p className="text-[14px]">9126 x 194 x 28mm | 301g</p>
                </div>
                <div className="flex items-center p-[12px_32px]">
                    <h1 className="w-[55%] text-[14px] font-bold ">Public Date</h1>
                    <p className="text-[14px]">20 Dec 2020</p>
                </div>
                <div className="flex items-center p-[12px_32px]">
                    <h1 className="w-[55%] text-[14px] font-bold ">Publisher</h1>
                    <p className="text-[14px]">Little, Brown Book Group</p>
                </div>
                <div className="flex items-center p-[12px_32px]">
                    <h1 className="w-[55%] text-[14px] font-bold ">Imprint</h1>
                    <p className="text-[14px]">Corsair</p>
                </div>
                <div className="flex items-center p-[12px_32px]">
                    <h1 className="w-[55%] text-[14px] font-bold ">Publication City/Country:</h1>
                    <p className="text-[14px]">London, United Kingdom</p>
                </div>
                <div className="flex items-center p-[12px_32px]">
                    <h1 className="w-[55%] text-[14px] font-bold ">Language</h1>
                    <p className="text-[14px]">English</p>
                </div>
            </div>
            <div className=" max-w-[800px] p-[64px_15px_56px] mx-auto w-full flexCenter ">
                <div className="w-[230px] aspect-[0.70] p-[25px] relative border border-solid border-1 border-[#EAE8E4] hover:border-[#000] hover:shadow-[0_0_40px_0_rgba(22,22,25,0.1)]  ">
                    <img
                        className="mx-auto"
                        src="/images/book1.jpg"
                        alt=""
                    />
                    <h1 className="text-[16px] text-medium m-[16px_0_4px] ">
                        Where The Crawdads Sing Overview
                    </h1>
                    <p className="text-[#7C6E65] text-[14px] ">Solomon</p>
                    <span className="absolute bottom-0 right-0 p-[4px_16px] bg-[#000] text-[#fff] ">
                        1:45
                    </span>
                </div>
                <div className="w-[230px] aspect-[0.70] p-[25px] relative border border-solid border-1 border-[#EAE8E4] hover:border-[#000] hover:shadow-[0_0_40px_0_rgba(22,22,25,0.1)]  ">
                    <img
                        className="mx-auto"
                        src="/images/book2.jpg"
                        alt=""
                    />
                    <h1 className="text-[16px] text-medium m-[16px_0_4px] ">
                        Where The Crawdads Sing Overview
                    </h1>
                    <p className="text-[#7C6E65] text-[14px] ">Solomon</p>
                    <span className="absolute bottom-0 right-0 p-[4px_16px] bg-[#000] text-[#fff] ">
                        1:45
                    </span>
                </div>
            </div>
            <div className="container max-w-[1000px] mb-[72px] ">
                <h1 className="text-[18px] text-medium ">Customer Review</h1>
                <div className="flex justify-between mt-[30px] mb-[50px]">
                    <div className="w-[60%]">
                        <div className="flex">
                            <div className=" flex justify-start items-center gap-x-[30px] ">
                                <h1 className="text-[60px] font-bold text-left ">4.6</h1>
                                <span>
                                    <p className="text-[18px] text-[#161619]">3,714 reviews</p>
                                    <Rate
                                        tooltips={desc}
                                        value={value}
                                    />
                                </span>
                            </div>
                        </div>
                        <div className="mt-[30px]">
                            <button className=" w-[180px] py-[14px] px-[18px]  text-[18px] border border-solid border-[#000] hover:bg-[#000] hover:text-white ">
                                See all reviews
                            </button>
                            <button className=" w-[180px] py-[14px] px-[18px]  mx-[20px] text-[18px] border border-solid border-[#000] hover:bg-[#000] hover:text-white ">
                                Write a review
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-col gap-y-[20px] w-1/2">
                        <Rate
                            tooltips={desc}
                            value="1"
                        />
                        <Rate
                            tooltips={desc}
                            value="2"
                        />
                        <Rate
                            tooltips={desc}
                            value="3"
                        />
                        <Rate
                            tooltips={desc}
                            value="4"
                        />
                        <Rate
                            tooltips={desc}
                            value="5"
                        />
                    </div>
                </div>
                <div>
                    <h1 className=" text-[20px] font-medium tracking-wide leading-[48px] text-left mb-[30px] ">
                        1-5 of 44 reviews
                    </h1>
                    <div>
                        <ReviewBox />
                        <ReviewBox />
                    </div>
                </div>
                <div>
                    <h1 className=" text-[24px] font-semibold tracking-wide leading-[48px] text-left ">
                        Write a review
                    </h1>
                    <div className="flex justify-start items-center gap-x-[20px] mb-[30px] ">
                        <h1 className=" text-[18px] font-medium tracking-wide text-left mt-[4px] ">
                            Rate:{" "}
                        </h1>
                        <Rate
                            tooltips={desc}
                            onChange={setValue}
                            value={value}
                        />
                    </div>
                    <h1 className=" text-[16px] font-medium tracking-wide text-left mt-[4px] mb-[20px] ">
                        Details please! Your review helps other shoppers.
                    </h1>
                    <textarea
                        className=" block w-full text-[16px] text-[#7c6e65] border border-solid border-[#dfdcd7] mb-[30px] p-4 focus:border-[#161619] "
                        rows="7"
                        id="descriptionTextarea"
                        placeholder="What did you like or dislike? What should other shoppers know before buying?"
                    ></textarea>
                    <h1 className=" text-[16px] font-medium text-left mt-[4px] mb-[20px] ">
                        Title
                    </h1>
                    <input
                        type="text"
                        className=" w-full text-[16px] text-[#7c6e65] border border-solid border-[#dfdcd7] mb-[30px] p-4 focus:border-[#161619]   rounded-0 px-4"
                        placeholder="3000 characters remaining"
                    ></input>
                    <button style={{ maxWidth: '250px', padding: "13px 45px" }} className="button ">
                        Submit Review
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </div>
            <div className="container mb-[95px]">
                <h1 className="text-[30px] font-bold mb-[33px] " >Customers Also Considered</h1>
                <div className="grid grid-cols-5 ">
                    {DATA_PAGE_1.map(
                        (it, i) =>
                            i < 5 && (
                                <Product
                                    id={it.id}
                                    onClick={() => handleAdd(it)}
                                    iconWishlist={it.isLike}
                                    handleWishlist={() => handleWishlist(it)}
                                    key={i + 1}
                                    title={it.title}
                                    authors={it.authors[0].author.name}
                                    price={it.price}
                                />
                            )
                    )}
                </div>
            </div>
        </div>
    )
}

export default ProductPage
