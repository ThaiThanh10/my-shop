import React from "react"
import Product from "../../elements/Product"
import { slickSettings } from "./BestSelling"
import Slider from "react-slick"

const FeaturedBooks = ({ dataProducts, onAddCart }) => {
    const handleAddCart = (productId, quantity, product) => {
        onAddCart(productId, quantity, product)
    }
    return (
        <section>
            <div className="container mb-[95px] sm:mb-[80px] ">
                <h1 className="heading text-center mb-[25px]">Featured Books</h1>
                <ul className="flex justify-center items-center gap-x-[40px] text-[#7c6e65] mb-[25px] ">
                    <li className="text-[17px] py-[15px] hover:text-[#000]">Featured</li>
                    <li className="text-[17px] py-[15px] hover:text-[#000]">On Sale</li>
                    <li className="text-[17px] py-[15px] hover:text-[#000]">Most Viewed</li>
                </ul>
                <div className="mb-[10px]">
                    {/* <div className="grid grid-cols-5 sm:grid-cols-1 sm:gap-y-[13px] mobile:grid-cols-3 tablet:grid-cols-4 ">
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
                        )}{" "}
                    </div> */}
                    <Slider {...slickSettings}>
                        {dataProducts?.map((product, i) => (
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
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    )
}

export default FeaturedBooks
