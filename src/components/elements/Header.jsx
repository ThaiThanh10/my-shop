import React, { useContext, useState } from "react"
import { UserOutlined, ShoppingOutlined, DownOutlined, SearchOutlined } from "@ant-design/icons"
import { Link, useNavigate, useSearchParams, Form } from "react-router-dom"
import { Badge, Button, Input, Popover } from "antd"
import { MainContext } from "../context/MainProvider"
import { commerce } from "../../lib/commerce"
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

const Header = () => {
    const { cart, listProduct, setListProduct, handleRemove, handleUpdateCartQty, calculateTotal } =
        useContext(MainContext)
    const [open, setOpen] = useState(false)
    const hide = () => {
        setOpen(false)
    }
    const handleOpenChange = (newOpen) => {
        setOpen(newOpen)
    }
    const handleEmptyCart = () => {
        const newListProduct = [...listProduct]
        newListProduct.splice(0)
        setListProduct(newListProduct)
        const emptyCart = async () => {
            await commerce.cart.empty()
        }
        emptyCart()
    }
    const handleSearch = () => {

    }
    return (
        <header className="fixed top-0 left-0 w-screen z-[99] bg-[#fff] ">
            <div className="container flexBetween py-[8px] ">
                <div className="flexCenter gap-x-[40px]">
                    <div>
                        <h1>Can we help you?</h1>
                    </div>
                    <div>
                        <h1>+1 246-345-0695</h1>
                    </div>
                </div>
                <div className="flexCenter gap-x-[32px]">
                    <Popover
                        placement="bottomRight"
                        content={
                            <div>
                                {listProduct?.map((item) => (
                                    <div
                                        key={item.id}
                                        className="flex justify-between items-start p-[10px_5px] gap-x-[20px] "
                                    >
                                        <img
                                            className="w-[70px]"
                                            src={`https://picsum.photos/seed/${item.id}/120/180`}
                                            alt=""
                                        />
                                        <div className="w-[178px] flex flex-col gap-y-[15px] pt-[10px] ">
                                            <h1 className="text-[14px]">{item.name}</h1>
                                            <div className="flexCenter justify-start gap-x-[15px]">
                                                <button
                                                    onClick={() =>
                                                        handleUpdateCartQty(
                                                            item.id,
                                                            item.quantity - 1
                                                        )
                                                    }
                                                >
                                                    -
                                                </button>
                                                <h1 className="text-[14px]">{item.quantity}</h1>
                                                <button
                                                    onClick={() =>
                                                        handleUpdateCartQty(
                                                            item.id,
                                                            item.quantity + 1
                                                        )
                                                    }
                                                >
                                                    +
                                                </button>
                                            </div>
                                        </div>
                                        <div className="pt-[10px] flex flex-col gap-y-[15px] ">
                                            <h1 className="text-[14px]">
                                                ${(item.price.raw * item.quantity).toFixed(2)}
                                            </h1>
                                            <button
                                                onClick={() => handleRemove(item.id)}
                                                className="text-[14px]"
                                            >
                                                Xóa
                                            </button>
                                        </div>
                                    </div>
                                ))}
                                <h1>Total: ${calculateTotal(listProduct)} </h1>
                                <div className="flex justify-around items-center">
                                    <button onClick={handleEmptyCart}>Empty Cart</button>
                                    <button>
                                        <Link to="/cart">Xem Gio Hang</Link>
                                    </button>
                                </div>
                            </div>
                        }
                        title="Shopping Cart"
                        trigger="click"
                        open={open}
                        onOpenChange={handleOpenChange}
                    >
                        {" "}
                        <Badge
                            onClick={hide}
                            count={listProduct?.length}
                            size="small"
                            color="#000"
                        >
                            <ShoppingOutlined />
                        </Badge>
                    </Popover>
                    <UserOutlined />
                </div>
            </div>
            <hr className="h-[1px] w-screen bg-[#EAE8E4] " />
            <div className="container py-[25px] flexBetween ">
                <div className="flexCenter gap-x-[48px] ">
                    <Link to="/">
                        {" "}
                        <img
                            src="/images/logo.svg"
                            alt=""
                        />
                    </Link>
                    <div className="dropDown">
                        <span className="flexCenter  dropbtn ">
                            <Link
                                to="/productlist"
                                className="text mr-[8px] "
                            >
                                Categories
                            </Link>
                            <DownOutlined />
                        </span>
                        <div className="dropdown-content ">
                            {dataCate.map((it, i) => (
                                <li key={i}>
                                    <p className="navItem">{it}</p>
                                </li>
                            ))}
                        </div>
                    </div>
                    <div className=" dropDown  ">
                        <h1 className="flex justify-center items-center dropbtn">
                            <p className="text mr-[8px] ">Shop</p>
                            <DownOutlined />
                        </h1>
                        <div className="dropdown-content">
                            <li>
                                <Link to="/productlist">
                                    <p className=" navItem ">Shop List</p>
                                </Link>
                            </li>
                            <li>
                                <Link to="/product">
                                    <p className=" navItem ">Product Detail</p>
                                </Link>
                            </li>
                            <li>
                                <h1>
                                    <p className=" navItem ">Order</p>
                                </h1>
                            </li>
                            <li>
                                <Link to="/cart">
                                    <p className=" navItem ">Shop Cart</p>
                                </Link>
                            </li>
                            <li>
                                <Link to="/checkout">
                                    <p className=" navItem ">Shop Checkout</p>
                                </Link>
                            </li>
                        </div>
                    </div>
                    <div className=" dropDown  ">
                        <h1 className="flex justify-center items-center dropbtn">
                            <p className="text mr-[8px] ">Blog</p>
                            <DownOutlined />
                        </h1>
                        <div className="dropdown-content">
                            <li>
                                <h1>
                                    <p className=" navItem ">Blog 1</p>
                                </h1>
                            </li>
                            <li>
                                <h1>
                                    <p className=" navItem ">Blog 2</p>
                                </h1>
                            </li>
                            <li>
                                <h1>
                                    <p className=" navItem ">Blog 3</p>
                                </h1>
                            </li>
                            <li>
                                <h1>
                                    <p className=" navItem ">Blog 4</p>
                                </h1>
                            </li>
                            <li>
                                <h1>
                                    <p className=" navItem ">Blog 5</p>
                                </h1>
                            </li>
                        </div>
                    </div>
                    <div className=" dropDown  ">
                        <h1 className="flex justify-center items-center dropbtn">
                            <p className="text mr-[8px] ">Others</p>
                            <DownOutlined />
                        </h1>
                        <div className="dropdown-content">
                            <li>
                                <h1>
                                    <p className=" navItem ">404</p>
                                </h1>
                            </li>
                            <li>
                                <h1>
                                    <p className=" navItem ">About us</p>
                                </h1>
                            </li>
                            <li>
                                <h1>
                                    <p className=" navItem ">Contact</p>
                                </h1>
                            </li>
                            <li>
                                <h1>
                                    <p className=" navItem ">FAQ</p>
                                </h1>
                            </li>
                            <li>
                                <h1>
                                    <p className=" navItem ">Price</p>
                                </h1>
                            </li>
                            <li>
                                <h1>
                                    <p className=" navItem ">Term Conditions</p>
                                </h1>
                            </li>
                        </div>
                    </div>
                </div>
                <Input
                    suffix={<SearchOutlined onClick={handleSearch} />}
                    style={{ maxWidth: "300px" }}
                />
            </div>
            {/* <hr className="h-[1px] w-screen bg-[#EAE8E4] " /> */}
        </header>
    )
}

export default Header
