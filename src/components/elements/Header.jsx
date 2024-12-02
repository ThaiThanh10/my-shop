import React, { useContext, useState } from "react"
import { UserOutlined, ShoppingOutlined, DownOutlined, SearchOutlined } from "@ant-design/icons"
import { Link, useNavigate, useLocation } from "react-router-dom"
import { Badge, Button, Divider, Input, Popover } from "antd"
import { MainContext } from "../context/MainProvider"
import { commerce } from "../../lib/commerce"

const Header = () => {
    const { listProduct, setListProduct, handleRemove, handleUpdateCartQty, calculateTotal, cate } =
        useContext(MainContext)
    const [open, setOpen] = useState(false)
    const [valueSearch, setValueSearch] = useState()
    const navigate = useNavigate()
    const location = useLocation()
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
        navigate(`/productlist/${valueSearch}`)
        setValueSearch("")
    }
    const handleRemoveCart = (productId) => {
        const newListProduct = [...listProduct]
        const updateList = newListProduct.filter((product) => product.id !== productId)
        setListProduct(updateList)
    }
    return (
        <header className="fixed top-0 left-0 w-screen z-[99] bg-[#fff] ">
            <div className="container flexBetween py-[8px] sm:flex-row-reverse tablet:flex-row mobile:flex-row ">
                <div className="flexCenter gap-x-[40px] sm:hidden tablet:flex mobile:flex ">
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
                            <div className="w-[330px] sm:w-[260px] mobile:w-[300px] ">
                                {listProduct.length ? (
                                    <div>
                                        {listProduct.map((item) => (
                                            <div>
                                                <div
                                                    key={item.id}
                                                    className="flex justify-between items-start p-[10px_5px] gap-x-[20px] sm:gap-x-[13px] mobile:gap-x-[16px] "
                                                >
                                                    <img
                                                        className="w-[70px] sm:w-[50px] mobile:w-[60px] "
                                                        src={`https://picsum.photos/seed/${item.id}/120/180`}
                                                        alt=""
                                                    />
                                                    <div className="w-[178px] flex flex-col gap-y-[15px] pt-[10px] sm:w-[160px] sm:pt-0 sm:gap-y-[8px] mobile:pt-[8px] ">
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
                                                            <h1 className="text-[14px]">
                                                                {" "}
                                                                {item.quantity == 0
                                                                    ? handleRemoveCart(item.id)
                                                                    : item.quantity}
                                                            </h1>
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
                                                    <div className="pt-[10px] flex flex-col gap-y-[15px] sm:pt-0 mobile:pt-[8px] ">
                                                        <h1 className="text-[14px]">
                                                            $
                                                            {(
                                                                item.price.raw * item.quantity
                                                            ).toFixed(2)}
                                                        </h1>
                                                        <button
                                                            onClick={() => handleRemove(item.id)}
                                                            className="text-[14px]"
                                                        >
                                                            Xóa
                                                        </button>
                                                    </div>
                                                </div>
                                                <Divider />
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <h1 className="text-[16px] text-[#161619]  py-[10px] ">
                                        Ban chua them gi vao gio hang{" "}
                                    </h1>
                                )}
                                <div>
                                    <h1 className="flexBetween mb-[13px] ">
                                        {" "}
                                        <span className="text-[16px] text-[#161619] font-semibold ">
                                            Total:
                                        </span>
                                        <span> ${calculateTotal(listProduct)}</span>{" "}
                                    </h1>
                                    <div className="flex justify-around items-center">
                                        <button
                                            className="border border-[#000] rounded-full px-[13px] py-[5px] hover:bg-[#000] hover:text-[#fff] "
                                            onClick={handleEmptyCart}
                                        >
                                            Empty Cart
                                        </button>
                                        <button
                                            onClick={() => navigate("/cart")}
                                            className="border border-[#000] rounded-full px-[13px] py-[5px] hover:bg-[#000] hover:text-[#fff] "
                                        >
                                            Xem Gio Hang
                                        </button>
                                    </div>
                                </div>
                            </div>
                        }
                        title={
                            <h1 className="text-[18px] text-[#161619] text-center ">
                                Shopping Cart
                            </h1>
                        }
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
            <Divider style={{ margin: 0 }} />
            <div className="container sm:gap-y-[15px] flexBetween desktop:py-[18px] sm:py-[12px] tablet:py-[15px] sm:flexCenter sm:flex-col sm:gap-y-[15px mobile:flexBetween mobile:flex-row  ">
                <div className="flexCenter gap-x-[48px] tablet:gap-x-[20px] ">
                    <Link to="/">
                        {" "}
                        <img
                            src="/images/logo.svg"
                            alt=""
                        />
                    </Link>
                    <div className="dropDown sm:hidden tablet:block ">
                        <span className="flexCenter  dropbtn ">
                            <Link
                                to="/productlist"
                                className="text mr-[8px] "
                            >
                                Categories
                            </Link>
                            <img
                                src="/images/Symbol.svg"
                                alt=""
                            />
                        </span>
                        <div className="dropdown-content ">
                            {cate?.map((it) => (
                                <li
                                    onClick={() => {
                                        navigate(`/cate/${it.id}`)
                                    }}
                                    key={it.id}
                                >
                                    <p className="navItem">{it.name}</p>
                                </li>
                            ))}
                        </div>
                    </div>
                    <div className=" dropDown sm:hidden tablet:block ">
                        <h1 className="flex justify-center items-center dropbtn">
                            <p className="text mr-[8px] ">Shop</p>
                            <img
                                src="/images/Symbol.svg"
                                alt=""
                            />
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
                    <div className=" dropDown sm:hidden tablet:block ">
                        <h1 className="flex justify-center items-center dropbtn">
                            <p className="text mr-[8px] ">Blog</p>
                            <img
                                src="/images/Symbol.svg"
                                alt=""
                            />
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
                        </div>
                    </div>
                    <div className=" dropDown sm:hidden tablet:block ">
                        <h1 className="flex justify-center items-center dropbtn">
                            <p className="text mr-[8px] ">Others</p>
                            <img
                                src="/images/Symbol.svg"
                                alt=""
                            />
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
                    className="  tablet:inline-flex max-w-[300px] tablet:max-w-[150px] "
                    value={valueSearch}
                    onChange={(e) => setValueSearch(e.target.value)}
                    suffix={<SearchOutlined onClick={handleSearch} />}
                // style={{ maxWidth: "300px" }}
                />
            </div>
        </header>
    )
}

export default Header
