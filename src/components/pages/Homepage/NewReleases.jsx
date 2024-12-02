import React from "react"
import Product from "../../elements/Product"

const NewReleases = ({ dataProducts, onAddCart }) => {
    const handleAddCart = (productId, quantity, product) => {
        onAddCart(productId, quantity, product)
    }
    return (
        <section className="mb-[95px] sm:mb-[80px] ">
            <div className="container">
                <h1 className="heading  text-center mb-[40px]">New Release</h1>
                <div className="flex justify-start sm:flex-col  sm:gap-y-[13px] tablet:flex-row laptop:gap-x-[30px] ">
                    <div className=" bg-[#fff6f6] px-[30px] py-[50px]  sm:w-full mobile:flexCenter mobile:flex-col tablet:w-[33%] ">
                        <img
                            src="/images/deal.png"
                            alt=""
                        />
                        <h1 className="text-[40px] my-[15px] mobile:my-[7px] font-medium text-left ">Get Extra</h1>
                        <h1 className="text-[50px] text-[#F75454] my-[15px] mobile:my-[7px] font-bold text-left ">
                            Sale -20%
                        </h1>
                        <h1 className="text-[30px] text-[#BEB4B4] my-[15px] mobile:my-[7px]  text-left ">
                            On Order Over $100
                        </h1>
                        <button className=" bg-[#f52f2f] text-[#fff] my-[15px] mobile:my-[7px] p-[13px_48px] text-[16px]">
                            View More
                        </button>
                    </div>
                    <div className="w-[55%] flex flex-wrap justify-around items-start gap-y-[10px] sm:w-full laptop:grid laptop:grid-cols-3 tablet:w-[60%] ">
                        {dataProducts?.map(
                            (product, i) =>
                                i < 9 && (
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
            </div>
        </section>
    )
}

export default NewReleases
