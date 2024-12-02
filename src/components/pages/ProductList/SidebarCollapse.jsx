import { Col, Collapse, InputNumber, Slider } from "antd"
import React, { useState } from "react"
const { Panel } = Collapse
const dataAuthor = ["Anne Frank", "JK Rowling", "Jack London"]
const dataFormat = ["Audio CD", "Audio Book", "Hardcover", "Kindle Books", "Paperback"]
const dataLang = ["English", "German", "French", "Spanish", "Turkish"]

export const IntegerStep = () => {
    const [inputValueBegin, setInputValueBegin] = useState(1)
    const [inputValueEnd, setInputValueEnd] = useState(10)
    const onChange = (newValue) => {
        setInputValueBegin(newValue[0])
        setInputValueEnd(newValue[1])
    }
    return (
        <Col
            style={{
                padding: "7px 15px",
            }}
        >
            <div className="w-full">
                <Slider
                    min={1}
                    max={300}
                    onChange={onChange}
                    range
                    defaultValue={[0, 10]}
                />
            </div>
            <div className="flexCenter flex-col mt-[18px] ">
                <div className="flexCenter gap-x-[15px] ">
                    <h1 className="text-[15px] text-[#161619] ">Price :</h1>
                    <InputNumber
                        readOnly={true}
                        controls={false}
                        min={1}
                        max={300}
                        style={{
                            margin: "0 16px",
                        }}
                        value={`$${inputValueBegin} - $${inputValueEnd}`}
                    />
                </div>
            </div>
        </Col>
    )
}

const SidebarCollapse = ({ cate, onSelectCate }) => {
    const handleCate = (id) => {
        onSelectCate(id)
    }
    return (
        <div className=" sm:w-full laptop:w-1/4">
            <Collapse expandIconPosition="end">
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
    )
}

export default SidebarCollapse
