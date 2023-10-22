import React, { useContext, useState } from "react"
import { Collapse, Col, InputNumber, Row, Slider, Dropdown, Space } from "antd"
import { PlusOutlined, MinusOutlined, DownOutlined } from "@ant-design/icons"
import Product from "../../elements/Product"
import { MainContext } from "../../context/MainProvider"

const dataCate = [
    "All",
    "Magazine",
    "Novel",
    "Life",
    "Arts",
    "Comics",
    "Education & Reference",
    "Humanities & Social & Sciences",
    "Science & Technology",
    "Kids",
    "Sports",
]
const dataAuthor = ["Anne Frank", "JK Rowling", "Jack London"]
const dataFormat = ["Audio CD", "Audio Book", "Hardcover", "Kindle Books", "Paperback"]
const dataLang = ["English", "German", "French", "Spanish", "Turkish"]

export const IntegerStep = () => {
    const [inputValue, setInputValue] = useState(1)
    const onChange = (newValue) => {
        setInputValue(newValue)
    }
    return (
        <Row>
            <Col span={12}>
                <Slider
                    min={1}
                    max={20}
                    onChange={onChange}
                    value={typeof inputValue === "number" ? inputValue : 0}
                />
            </Col>
            <Col span={4}>
                <InputNumber
                    min={1}
                    max={20}
                    style={{
                        margin: "0 16px",
                    }}
                    value={inputValue}
                    onChange={onChange}
                />
            </Col>
        </Row>
    )
}
const items = [
    {
        key: "1",
        label: "Categories",
        children: (
            <div>
                {dataCate.map((it, i) => (
                    <div
                        key={i}
                        className="py-[7px] px-[5px] cursor-pointer hover:bg-[#f7f7f7]"
                    >
                        <p className="text ml-[10px] transition-all duration-[0.2s] ease-[ease] hover:translate-x-[15px] ">
                            {it}
                        </p>
                    </div>
                ))}
            </div>
        ),
    },
    {
        key: "2",
        label: "Author",
        children: (
            <div>
                {dataAuthor.map((it, i) => (
                    <div
                        key={i * 3}
                        className="py-[7px] px-[5px]  hover:bg-[#f7f7f7]"
                    >
                        <p className="text ml-[10px] transition-all duration-[0.2s] ease-[ease] hover:translate-x-[15px] ">
                            {it}
                        </p>
                    </div>
                ))}
            </div>
        ),
    },
    {
        key: "3",
        label: "Language",
        children: (
            <div>
                {dataLang.map((it, i) => (
                    <div
                        key={i * 3}
                        className="py-[7px] px-[5px]  hover:bg-[#f7f7f7]"
                    >
                        <p className="text ml-[10px] transition-all duration-[0.2s] ease-[ease] hover:translate-x-[15px] ">
                            {it}
                        </p>
                    </div>
                ))}
            </div>
        ),
    },
    {
        key: "4",
        label: "Format",
        children: (
            <div>
                {" "}
                {dataFormat.map((it, i) => (
                    <div
                        key={i}
                        className="py-[7px] px-[5px]  hover:bg-[#f7f7f7]"
                    >
                        <p className="text ml-[10px] transition-all duration-[0.2s] ease-[ease] hover:translate-x-[15px] ">
                            {it}
                        </p>
                    </div>
                ))}
            </div>
        ),
    },
    {
        key: "5",
        label: "Filter by price",
        children: <IntegerStep />,
    },
]

const ProductList = () => {
    const { dataProducts, setDataProducts } = useContext(MainContext)

    return (
        <div>
            <div>
                <div className=" container flexBetween py-[24px] ">
                    <h1 className="page-title">Shop</h1>
                    <h1>Home / Shop</h1>
                </div>
            </div>
            <hr className="h-[1px]  w-screen bg-[#EAE8E4]  " />
            <div className="flexBetween items-start container pt-[56px] pb-[90px] ">
                <div className="w-1/4">
                    <Collapse
                        // accordion
                        items={items}
                        expandIconPosition="end"
                        defaultActiveKey="1"
                    />
                </div>
                <div className="w-[72%]">
                    <div className="pt-[9px] mb-[42px] ">
                        <h1>Showing 12 of 126 results</h1>
                    </div>
                    <div className="grid grid-cols-3 gap-y-[8px] ">
                        {dataProducts.map(
                            (it, i) =>
                                i < 9 && (
                                    <Product
                                        id={it.id}
                                        onClick={() => handleAdd(it)}
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
                </div>
            </div>
        </div>
    )
}

export default ProductList
