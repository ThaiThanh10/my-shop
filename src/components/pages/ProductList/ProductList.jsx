import React, { useContext, useEffect, useState } from "react"
import { Collapse, Col, InputNumber, Row, Slider, Dropdown, Space } from "antd"
import { PlusOutlined, MinusOutlined, DownOutlined } from "@ant-design/icons"
import Product from "../../elements/Product"
import { MainContext } from "../../context/MainProvider"
import { commerce } from "../../../lib/commerce"
const { Panel } = Collapse

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

const ProductList = () => {
    const { dataProducts, handleAddCart } = useContext(MainContext)
    const [cate, setCate] = useState([])
    const [results, setResults] = useState(dataProducts)
    const getCate = async () => {
        const cate = await commerce.categories.list()
        setCate(cate.data)
    }
    const handleCate = (id) => {
        if (id == "cat_ypbroE4e8w8n4e") {
            setResults(dataProducts)
        } else {
            const result = dataProducts.filter((item) => item.categories[0].id == id)
            setResults(result)
        }
    }
    useEffect(() => {
        getCate()
        handleCate("cat_ypbroE4e8w8n4e")
    }, [])
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
                        accordion
                        expandIconPosition="end"
                        defaultActiveKey="1"
                    >
                        <Panel
                            key="1"
                            header="Categories"
                        >
                            {cate?.map((it) => (
                                <div
                                    onClick={() => handleCate(it.id)}
                                    key={it.id}
                                    className="py-[7px] px-[5px] cursor-pointer hover:bg-[#f7f7f7]"
                                >
                                    <p className="text ml-[10px] transition-all duration-[0.2s] ease-[ease] hover:translate-x-[15px] ">
                                        {it.name}
                                    </p>
                                </div>
                            ))}
                        </Panel>
                        <Panel
                            key="2"
                            header="Author"
                        >
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
                        </Panel>
                        <Panel
                            key="3"
                            header="Language"
                        >
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
                        </Panel>
                        <Panel
                            key="4"
                            header="Format"
                        >
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
                        </Panel>
                        <Panel
                            key="5"
                            header="Filter by price"
                        >
                            <IntegerStep />
                        </Panel>
                    </Collapse>
                </div>
                <div className="w-[72%]">
                    <div className="pt-[9px] mb-[42px] ">
                        <h1>Showing 12 of 126 results</h1>
                    </div>
                    <div className="grid grid-cols-3 gap-y-[8px] ">
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
                </div>
            </div>
        </div>
    )
}

export default ProductList
