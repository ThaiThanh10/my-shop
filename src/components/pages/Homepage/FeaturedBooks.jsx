import React from "react"
import Product from "../../elements/Product"

const FeaturedBooks = ({ dataProducts, onAddCart }) => {
    const handleAddCart = (productId, quantity, product) => {
        onAddCart(productId, quantity, product)
    }
    return (
        <section>
            <div className="container mb-[95px]">
                <h1 className="heading text-center mb-[25px]">Featured Books</h1>
                <ul className="flex justify-center items-center gap-x-[40px] text-[#7c6e65] mb-[25px] ">
                    <li className="text py-[15px] hover:text-[#000]">Featured</li>
                    <li className="text py-[15px] hover:text-[#000]">On Sale</li>
                    <li className="text py-[15px] hover:text-[#000]">Most Viewed</li>
                </ul>
                <div className="mb-[10px]">
                    <div className="grid grid-cols-5  ">
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
                    </div>
                </div>
                <div>
                    <div className="grid grid-cols-5">
                        {dataProducts?.map(
                            (product, i) =>
                                i >= 5 &&
                                i < 10 && (
                                    <Product
                                        key={product.id}
                                        id={product.id}
                                        onClick={() => handleAddCart(product.id, 1, product)}
                                        iconWishlist={product.isLike}
                                        handleWishlist={() => handleWishlist(product)}
                                        title={product.name}
                                        authors={product.sku}
                                        price={product.price.formatted_with_symbol}
                                    />
                                )
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FeaturedBooks
