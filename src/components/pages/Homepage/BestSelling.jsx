import React from "react"
import { RightOutlined, LeftOutlined } from "@ant-design/icons"
import Product from "../../elements/Product"
import Slider from "react-slick"
import { stripHtml } from "string-strip-html"

function SampleNextArrow(props) {
    const { onClick } = props
    return (
        <div
            className=" absolute top-1/2 mobile:-right-[5.5%] right-[-2.5%] z-9 w-[30px] flexCenter hover:scale-110 transition-all duration-150 ease-in-out  "
            onClick={onClick}
        >
            <img src="/images/next.svg" alt="" />
        </div>
    )
}

function SamplePrevArrow(props) {
    const { onClick } = props
    return (
        <div
            className=" absolute top-1/2 mobile:-left-[5.5%] left-[-2.5%] z-9 w-[30px] flexCenter hover:scale-110 transition-all duration-150 ease-in-out  "
            onClick={onClick}
        >
            <img src="/images/previous.svg" alt="" />
        </div>
    )
}

export const slickSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    // fade: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                dots: true
            }
        },
        {
            breakpoint: 900,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                dots: true
            }
        },
        {
            breakpoint: 700,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                dots: true
            }
        },
        {
            breakpoint: 400,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true
            }
        },
    ]
}
const BestSelling = ({ dataProducts, onAddCart }) => {
    const handleAddCart = (productId, quantity, product) => {
        onAddCart(productId, quantity, product)
    }

    return (
        <section>
            <div className="container mb-[95px]  sm:mb-[80px] ">
                <div className="mb-[30px] flexBetween ">
                    <h1 className="heading ">Best Selling</h1>
                    <button className=" text-[16px] hover:text-red-500  ">View All</button>
                </div>
                {/* <div className="grid grid-cols-5 gap-x-[20px] sm:grid-cols-1 sm:gap-y-[13px] sm:items-center mobile:grid-cols-3 mobile:gap-x-[8px] tablet:grid-cols-4">
                    {dataProducts?.map(
                        (product, i) =>
                            i < 5 && (
                                <Product
                                    id={product.id}
                                    onClick={() => handleAddCart(product.id, 1, product)}
                                    iconWishlist={product.isLike}
                                    handleWishlist={() => handleWishlist(product)}
                                    key={product.id}
                                    title={product.name}
                                    authors={product.sku}
                                    price={product.price.formatted_with_symbol}
                                />
                            )
                    )}
                </div> */}
                <Slider {...slickSettings}>
                    {dataProducts?.map((product, i) => (
                        <Product
                            desc={stripHtml(product.description).result}
                            id={product.id}
                            onClick={() => handleAddCart(product.id, 1, product)}
                            iconWishlist={product.isLike}
                            handleWishlist={() => handleWishlist(product)}
                            key={product.id}
                            title={product.name}
                            authors={product.sku}
                            price={product.price.formatted_with_symbol}
                        />
                    ))}
                </Slider>
            </div>
        </section>
    )
}

export default BestSelling
