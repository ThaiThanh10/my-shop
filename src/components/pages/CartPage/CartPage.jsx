import React, { useContext, useState } from "react"
import { Collapse, Divider, Input, Radio, Space, message } from "antd"
import { CloseOutlined } from "@ant-design/icons"
import { MainContext } from "../../context/MainProvider"
import { useNavigate } from "react-router-dom"
const { Panel } = Collapse

const CartPage = () => {
    const { listProduct, calculateTotal, getToken, handleUpdateCartQty, setListProduct } =
        useContext(MainContext)
    const navigate = useNavigate()

    const onChange = (key) => {
        console.log(key)
    }
    const handleRemove = (productId) => {
        const newListProduct = [...listProduct]
        const updateList = newListProduct.filter((product) => product.id !== productId)
        setListProduct(updateList)
    }
    const checkout = () => {
        getToken()
        navigate("/checkout")
    }
    return (
        <div>
            {" "}
            <div>
                <div className=" container flexBetween py-[24px]  ">
                    <h1 className="page-title">Shop</h1>
                    <h1>Home / Shop</h1>
                </div>
            </div>
            <Divider style={{ margin: 0 }} />
            <div className="bg-[#FFF6F6]">
                <div className="container pt-[64px] pb-[56px] ">
                    <h1 className="text-[30px] text-center font-medium leading-[36px] mb-[48px] ">
                        Your Cart
                    </h1>
                    <div className="flexBetween items-start  sm:flex-col">
                        <table className="sm:w-full" >
                            <tbody>
                                <tr>
                                    <th>Product</th>
                                    <th>Price</th>
                                    <th className="text-center">Quantity</th>
                                    <th>Total</th>
                                </tr>
                                {listProduct?.map((product) => (
                                    <tr key={product.id}>
                                        <td className=" flex items-center gap-x-[16px] ">
                                            <img
                                                // className="w-[70px]"
                                                src={`https://picsum.photos/seed/${product.id}/120/180`}
                                                alt=""
                                            />
                                            <div>
                                                <h1>{product.name}</h1>
                                                <h1>{product.sku}</h1>
                                            </div>
                                        </td>
                                        <td>${product.price.raw}</td>
                                        <td>
                                            <div className="flexCenter gap-x-[10px] p-[16px] borer-solid border-[1px] border-[#EAE8E4] ">
                                                <button
                                                    onClick={() =>
                                                        handleUpdateCartQty(
                                                            product.id,
                                                            product.quantity - 1
                                                        )
                                                    }
                                                    className=" w-[33px] text-[22px]  px-[10px] "
                                                    type="button "
                                                >
                                                    -
                                                </button>
                                                <p className="text-[22px]">
                                                    {product.quantity == 0
                                                        ? handleRemove(product.id)
                                                        : product.quantity}
                                                </p>
                                                <button
                                                    onClick={() =>
                                                        handleUpdateCartQty(
                                                            product.id,
                                                            product.quantity + 1
                                                        )
                                                    }
                                                    className=" w-[33px] text-[22px] px-[10px] "
                                                    type="button"
                                                >
                                                    +
                                                </button>
                                            </div>
                                        </td>
                                        <td>
                                            ${(product.price.raw * product.quantity).toFixed(2)}
                                        </td>
                                        <td className="border-t border-solid-[#fff]">
                                            <button onClick={() => handleRemove(product.id)}>
                                                {" "}
                                                <CloseOutlined />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <div className="w-[27%] sm:w-full ">
                            <Collapse
                                expandIconPosition="end"
                                defaultActiveKey={["1", "2", "3"]}
                            // onChange={onChange}
                            >
                                <Panel
                                    header="Cart Totals"
                                    key="1"
                                >
                                    <div className="flex flex-col p-[31px] gap-y-[] ">
                                        <div className="flexBetween py-[9.6px]">
                                            <h1>Subtotal</h1>
                                            <p>${calculateTotal(listProduct)}</p>
                                        </div>
                                        <div className="flexBetween py-[9.6px]">
                                            <h1>Shipping</h1>
                                            <p>Free Shipping</p>
                                        </div>
                                    </div>
                                </Panel>
                                <Panel
                                    header="Shipping"
                                    key="2"
                                >
                                    <Radio.Group
                                        style={{
                                            padding: "31px",
                                        }}
                                        value={1}
                                    >
                                        <Space direction="vertical">
                                            <Radio value={1}>Free Shipping</Radio>
                                            <Radio
                                                disabled
                                                value={2}
                                            >
                                                Flat Rate: $15
                                            </Radio>
                                            <Radio
                                                disabled
                                                value={3}
                                            >
                                                Local Pickup: $8
                                            </Radio>
                                        </Space>
                                    </Radio.Group>
                                </Panel>
                            </Collapse>{" "}
                            <div className="flexBetween p-[31px] bg-[#fff] rounded-[0_0_8px_8px] ">
                                <h1>Total</h1>
                                <p>${calculateTotal(listProduct)}</p>
                            </div>
                            <button
                                onClick={checkout}
                                className="button"
                            >
                                Proceed to checkout
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartPage
