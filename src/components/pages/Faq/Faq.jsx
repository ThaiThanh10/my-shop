import React from "react"
import { CaretRightOutlined } from "@ant-design/icons"
import { Collapse, theme } from "antd"
const { Panel } = Collapse
const Faq = () => {
    const { token } = theme.useToken()
    const panelStyle = {
        marginBottom: 10,
        // background: token.colorFillAlter,
        borderRadius: token.borderRadiusLG,
        border: "1px solid #dfdcd7",
    }

    return (
        <div className="container mt-[80px] ">
            <h1 className=" text-[40px] font-medium tracking-wide leading-[48px] text-center mb-[60px] ">
                Frequently Asked Question
            </h1>
            <div className="mb-[80px]">
                <h1 className="text-[22px] leading-[22px] mb-[32px] ">Shopping</h1>
                <Collapse
                    accordion={true}
                    bordered={false}
                    expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
                    style={{
                        background: token.colorBgContainer,
                    }}
                >
                    <Panel
                        header="Delivery charges for orders from the Online Shop?"
                        key="1"
                        style={panelStyle}
                    >
                        <div className="px-[28px]">
                            <p className="py-[15px] text-[14px] ">
                                A placerat ac vestibulum integer vehicula suspendisse nostra aptent
                                fermentum tempor a magna erat ligula parturient curae sem conubia
                                vestibulum ac inceptos sodales condimentum cursus nunc mi
                                consectetur condimentum.
                            </p>
                            <p className="text-[14px] ">
                                Tristique parturient nulla ullamcorper at ullamcorper non orci
                                iaculis neque augue.
                            </p>
                        </div>
                    </Panel>
                    <Panel
                        header="How long will delivery take?"
                        key="2"
                        style={panelStyle}
                    >
                        <div className="px-[28px]">
                            <p className="py-[15px] text-[14px] ">
                                A placerat ac vestibulum integer vehicula suspendisse nostra aptent
                                fermentum tempor a magna erat ligula parturient curae sem conubia
                                vestibulum ac inceptos sodales condimentum cursus nunc mi
                                consectetur condimentum.
                            </p>
                            <p className="text-[14px] ">
                                Tristique parturient nulla ullamcorper at ullamcorper non orci
                                iaculis neque augue.
                            </p>{" "}
                        </div>
                    </Panel>
                    <Panel
                        header="Do I receive an invoice for my order?"
                        key="3"
                        style={panelStyle}
                    >
                        <p className="py-[15px] text-[14px] ">
                            A placerat ac vestibulum integer vehicula suspendisse nostra aptent
                            fermentum tempor a magna erat ligula parturient curae sem conubia
                            vestibulum ac inceptos sodales condimentum cursus nunc mi consectetur
                            condimentum.
                        </p>
                        <p className="text-[14px] ">
                            Tristique parturient nulla ullamcorper at ullamcorper non orci iaculis
                            neque augue.
                        </p>{" "}
                    </Panel>
                    <Panel
                        header="Tellus ridicdiam eleifend id ullamcorper?"
                        key="4"
                        style={panelStyle}
                    >
                        <p className="py-[15px] text-[14px] ">
                            A placerat ac vestibulum integer vehicula suspendisse nostra aptent
                            fermentum tempor a magna erat ligula parturient curae sem conubia
                            vestibulum ac inceptos sodales condimentum cursus nunc mi consectetur
                            condimentum.
                        </p>
                        <p className="text-[14px] ">
                            Tristique parturient nulla ullamcorper at ullamcorper non orci iaculis
                            neque augue.
                        </p>{" "}
                    </Panel>
                </Collapse>
            </div>
            <div className="mb-[80px]">
                <h1 className="text-[22px] leading-[22px] mb-[32px] ">Payment</h1>
                <Collapse
                    accordion={true}
                    bordered={false}
                    expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
                    style={{
                        background: token.colorBgContainer,
                    }}
                >
                    <Panel
                        header="When the order payment is taken of my bank account?"
                        key="1"
                        style={panelStyle}
                    >
                        <p className="py-[15px] text-[14px] ">
                            A placerat ac vestibulum integer vehicula suspendisse nostra aptent
                            fermentum tempor a magna erat ligula parturient curae sem conubia
                            vestibulum ac inceptos sodales condimentum cursus nunc mi consectetur
                            condimentum.
                        </p>
                        <p className="text-[18px] ">
                            Tristique parturient nulla ullamcorper at ullamcorper non orci iaculis
                            neque augue.
                        </p>
                    </Panel>
                    <Panel
                        header="What is wishlist?"
                        key="2"
                        style={panelStyle}
                    >
                        <p className="py-[15px] text-[18px] ">
                            A placerat ac vestibulum integer vehicula suspendisse nostra aptent
                            fermentum tempor a magna erat ligula parturient curae sem conubia
                            vestibulum ac inceptos sodales condimentum cursus nunc mi consectetur
                            condimentum.
                        </p>
                        <p className="text-[18px] ">
                            Tristique parturient nulla ullamcorper at ullamcorper non orci iaculis
                            neque augue.
                        </p>{" "}
                    </Panel>
                    <Panel
                        header="What should I do if I receive a damaged or wrong product?"
                        key="3"
                        style={panelStyle}
                    >
                        <p className="py-[15px] text-[18px] ">
                            A placerat ac vestibulum integer vehicula suspendisse nostra aptent
                            fermentum tempor a magna erat ligula parturient curae sem conubia
                            vestibulum ac inceptos sodales condimentum cursus nunc mi consectetur
                            condimentum.
                        </p>
                        <p className="text-[18px] ">
                            Tristique parturient nulla ullamcorper at ullamcorper non orci iaculis
                            neque augue.
                        </p>{" "}
                    </Panel>
                    <Panel
                        header="Can I change or cancel my order?"
                        key="4"
                        style={panelStyle}
                    >
                        <p className="py-[15px] text-[18px] ">
                            A placerat ac vestibulum integer vehicula suspendisse nostra aptent
                            fermentum tempor a magna erat ligula parturient curae sem conubia
                            vestibulum ac inceptos sodales condimentum cursus nunc mi consectetur
                            condimentum.
                        </p>
                        <p className="text-[18px] ">
                            Tristique parturient nulla ullamcorper at ullamcorper non orci iaculis
                            neque augue.
                        </p>{" "}
                    </Panel>
                    <Panel
                        header={`"What is "package tracking" in my orders?"`}
                        key="5"
                        style={panelStyle}
                    >
                        <p className="py-[15px] text-[18px] ">
                            A placerat ac vestibulum integer vehicula suspendisse nostra aptent
                            fermentum tempor a magna erat ligula parturient curae sem conubia
                            vestibulum ac inceptos sodales condimentum cursus nunc mi consectetur
                            condimentum.
                        </p>
                        <p className="text-[18px] ">
                            Tristique parturient nulla ullamcorper at ullamcorper non orci iaculis
                            neque augue.
                        </p>{" "}
                    </Panel>
                </Collapse>
            </div>
        </div>
    )
}

export default Faq
