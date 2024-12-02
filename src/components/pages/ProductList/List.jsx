import { Pagination, Select, Space } from "antd"
import React, { useContext, useState } from "react"
import Product from "../../elements/Product"
import { MainContext } from "../../context/MainProvider"
const ListProduct = ({ handleChange }) => {
    const { handleAddCart, results, setResults, dataProducts } = useContext(MainContext)
    const [current, setCurrent] = useState(1)
    const onChangePagination = (page) => {
        setCurrent(page)
        const newListProduct = [...dataProducts]
        const currentPage = newListProduct.slice((page - 1) * 9, page * 9)
        setResults(currentPage)
    }
    const onChange = (value) => {
        handleChange(value)
    }
    return (
        <div className="laptop:w-[72%] sm:w-full">
            <div className="laptop:pt-[9px] mb-[30px] flexBetween laptop:flex-row laptop:items-center sm:flex-col sm:items-start gap-y-[10px] sm:pt-[20px] ">
                <h1>Showing 12 of 126 results</h1>
                <div className="flexCenter gap-x-[45px] pr-[25px] sm:flex-row gap-y-[10px] ">
                    <div>
                        <Space wrap>
                            <Select
                                defaultValue="Default Sorting"
                                style={{
                                    width: 180,
                                }}
                                onChange={onChange}
                                options={[
                                    {
                                        label: "Name",
                                        options: [
                                            { label: "A -> Z", value: "ascendingName" },
                                            { label: "Z -> A", value: "descendingName" },
                                        ],
                                    },
                                    {
                                        label: "Price",
                                        options: [
                                            { label: "Ascending", value: "ascendingPrice" },
                                            {
                                                label: "Descending",
                                                value: "descendingPrice",
                                            },
                                        ],
                                    },
                                ]}
                            />
                        </Space>
                    </div>
                    <div className="flexCenter" >
                        <button className="p-[10.5px] border border-[#eae8e4] ">
                            <img
                                src="/images/small-view-icon.svg"
                                alt=""
                            />
                        </button>
                        <button className="p-[10.5px] border border-[#eae8e4] ">
                            <img
                                className="w-[18px] aspect-[1] "
                                src="/images/details-icon-view.svg"
                                alt=""
                            />
                        </button>
                    </div>
                </div>
            </div>
            <div className="grid mobile:grid-cols-3 justify-around  gap-y-[13px] sm:grid-cols-1  ">
                {results?.map(
                    (it, i) =>
                        i < 9 && (
                            <Product
                                id={it.id}
                                onClick={() => handleAddCart(it.id, 1, it)}
                                iconWishlist={it.isLike}
                                handleWishlist={() => handleWishlist(it)}
                                key={i + 1}
                                title={it.name}
                                authors={it.sku}
                                price={it.price.formatted_with_symbol}
                            />
                        )
                )}
            </div>
            <div>
                {!results?.length && <h1 className="text">There is no result for your product</h1>}
            </div>
            <div className="flexCenter">
                <Pagination
                    style={{
                        marginTop: "30px",
                    }}
                    current={current}
                    onChange={onChangePagination}
                    total={50}
                />
            </div>
        </div>
    )
}

export default ListProduct
