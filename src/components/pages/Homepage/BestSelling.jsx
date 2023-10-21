import React from "react"
import { RightOutlined } from "@ant-design/icons"
import Product from "../../elements/Product"

const BestSelling = ({ dataProducts, onAddCart }) => {
    const handleAddCart = (productId, quantity, product) => {
        onAddCart(productId, quantity, product)
    }
    return (
        <section>
            <div className="container mb-[95px] overflow-hidden ">
                <div className="mb-[30px] flexBetween ">
                    <h1 className="heading ">Best Selling</h1>
                    <button className="flex justify-center items-center gap-x-[13px] text-[18px] hover:text-red-500  ">
                        View All
                        <RightOutlined />
                    </button>
                </div>
                <div className="grid grid-cols-5 ">
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
                </div>
            </div>
        </section>
    )
}

export default BestSelling
