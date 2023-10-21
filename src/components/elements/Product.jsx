import { HeartFilled, HeartOutlined } from "@ant-design/icons"
import React, { useContext, useState } from "react"
import { Link } from "react-router-dom"

const Product = (props) => {
    const { title, id, authors, price, onClick, handleWishlist, iconWishlist, href = "#" } = props
    return (
        <div className="border-[1px]  item w-[242px] aspect-[0.75] relative z-9 item  border-[#eae8e4] p-[25px] bg-[#fff] flex flex-col justify-between items-start hover:border-[#000] hover:shadow-[0_0_40px_0_rgba(22,22,25,0.1)] ">
            <Link
                to="/product"
                className="mx-auto"
            >
                <img
                    className="mb-3 px-4 mx-auto"
                    src={`https://picsum.photos/seed/${id}/120/180`}
                    alt=""
                />
            </Link>
            <div className="pt-[10px] w-4/5 z-1 bg-[#fff] absolute bottom-[25px] left-[25px] ">
                <div className="relative">
                    <div className="content w-[200px] absolute bottom-0 left-0 pt-[10px]  transition-all ease-in-out duration-300 bg-[#fff] z-10  ">
                        <h1 className="w-max text-[12px] text-red-500 ">PAPERBACK</h1>
                        <h1 className="text-[16px] max-w-[180px] line-clamp-1 ">{title}</h1>
                        <h1 className="text-[14px] my-[4px] w-max ">{authors}</h1>
                        <h1 className="text-[18 px] w-max">{price}</h1>
                    </div>
                    <div className="flexBetween">
                        <button
                            onClick={onClick}
                            className="flex relative justify-start items-center w-max mt-3  py-1 text-[16px] hover-underline-animation "
                        >
                            Add to cart
                            <img
                                className="ml-[15px]  "
                                src="/images/shopping-bag.png"
                                alt=""
                            />
                        </button>
                        <button
                            onClick={handleWishlist}
                            className="mt-[7px] text-rose-600 duration-200 transition-all "
                        >
                            {iconWishlist ? (
                                <HeartFilled style={{ display: "block" }} />
                            ) : (
                                <HeartOutlined style={{ display: "block" }} />
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product
