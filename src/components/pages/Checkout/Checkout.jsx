import React, { useContext, useEffect, useState } from "react"
import {
    Collapse,
    Form,
    Input,
    Radio,
    Space,
    Select,
    Spin,
    Modal,
    Result,
    message,
    Button,
} from "antd"
import { MainContext } from "../../context/MainProvider"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import InputField from "../../elements/InputField"
import { commerce } from "../../../lib/commerce"
import { useNavigate } from "react-router-dom"

const phoneRegExp = /(0[3|5|7|8|9])+([0-9]{8})\b/g
const countries = [
    { value: "Ho Chi Minh", label: "Ho Chi Minh" },
    {
        value: "Da Nang",
        label: "Da Nang",
    },
]
const Checkout = () => {
    const { checkoutToken, setCart, setListProduct } = useContext(MainContext)
    const { listProduct, calculateTotal } = useContext(MainContext)
    const [value, setValue] = useState(1)
    const [country, setCountry] = useState()
    const [order, setOrder] = useState({})
    const [isModalOpen, setIsModalOpen] = useState(false)
    const navigate = useNavigate()
    const showModal = () => {
        setIsModalOpen(true)
    }
    const handleOk = () => {
        setIsModalOpen(false)
    }
    const handleCancel = () => {
        setIsModalOpen(false)
    }
    const onCityChange = (value) => {
        console.log("🚀value---->", value)
        setCountry(value)
    }
    const schema = yup
        .object({
            firstName: yup.string().required("nhap ten"),
            lastName: yup.string().required("nhap ten"),
            email: yup.string().email().required("please enter a valid email"),
            phone: yup.string().matches(phoneRegExp, "Phone number is not valid"),
            shippingAddress: yup.string().required("nhap dia chi "),
        })
        .required()

    const form = useForm({
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            country: "",
        },
        resolver: yupResolver(schema),
    })
    const refreshCart = async () => {
        const newCart = await commerce.cart.refresh()
        setCart(newCart)
        setListProduct(newCart.line_items)
        console.log("🚀newCart---->", newCart)
    }
    const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
        try {
            const incomingOrder = await commerce.checkout.capture(checkoutTokenId, newOrder)
            setOrder(incomingOrder)
            refreshCart()
        } catch (error) {
            console.log("🚀error---->", error)
        }
    }
    const handleSubmit = (values, checkoutToken) => {
        if (!country) {
            message.warning("Please select country")
            return
        }
        if (!Object.keys(values).length) return
        const orderData = {
            line_items: checkoutToken.line_items,
            customer: {
                firstname: values.firstName,
                lastname: values.lastName,
                email: values.email,
                phone: values.phone,
            },
            shipping: {
                name: "Primary",
                street: values.shippingAddress,
                town_city: values.country,
            },
            payment: {
                gateway: "test_gateway",
                card: {
                    token: "gway_4oG3G0DGPqEjo6",
                    number: "4242424242424242",
                    expiry_month: "02",
                    expiry_year: "24",
                    cvc: "123",
                    postal_zip_code: "94107",
                },
            },
        }
        handleCaptureCheckout(checkoutToken.id, orderData)
        showModal()
    }
    const onChange = (key) => {
        console.log(key)
    }
    return (
        <div>
            <Modal
                open={isModalOpen}
                onOk={handleOk}
                okButtonProps={{ styles: { background: "#000" }, type: "default" }}
                onCancel={handleCancel}
            >
                {order.customer ? (
                    <Result
                        status="success"
                        title="Successfully Purchased  "
                        subTitle={`Order ref: ${order?.customer_reference} .`}
                        extra={[
                            <h1 className="mb-[10px]">
                                Check your email for details. If you have any trouble, then contact
                                us
                            </h1>,
                            <Button
                                onClick={() => navigate("/")}
                                key="buy"
                            >
                                Continue Buying
                            </Button>,
                        ]}
                    />
                ) : (
                    <div className="flexCenter">
                        <Spin
                            tip="Loading"
                            size="large"
                        />
                    </div>
                )}
            </Modal>
            <div>
                <div className=" container flexBetween py-[24px]  ">
                    <h1 className="page-title">Shop</h1>
                    <h1>Home / Shop</h1>
                </div>
            </div>
            <hr className="h-[1px]  w-screen bg-[#EAE8E4]  " />
            <div className="bg-[#FFF6F6]">
                <div className="container pt-[64px] pb-[56px] ">
                    <h1 className="text-[30px] text-center font-medium leading-[36px] mb-[48px] ">
                        Checkout
                    </h1>
                    <div className="flexBetween items-start ">
                        <div className="bg-[#fff] w-[60%] p-[33px_27px] ">
                            <h1 className="text-[18px] font-semibold leading-[22px] text-center mb-[25px]  ">
                                Billing Details
                            </h1>
                            <Form layout="vertical">
                                <div className="flex justify-between items-start ">
                                    <div className="w-[47%]">
                                        <InputField
                                            name="firstName"
                                            label="First Name"
                                            form={form}
                                            errors={form.formState.errors}
                                            touchedFields={form.formState.touchedFields}
                                        />
                                    </div>
                                    <div className="w-[47%]">
                                        <InputField
                                            name="lastName"
                                            label="Last Name"
                                            form={form}
                                            errors={form.formState.errors}
                                            touchedFields={form.formState.touchedFields}
                                        />
                                    </div>
                                </div>
                                <div className="flex justify-between items-start ">
                                    <div className="w-[47%]">
                                        <InputField
                                            name="phone"
                                            label="Phone"
                                            form={form}
                                            errors={form.formState.errors}
                                            touchedFields={form.formState.touchedFields}
                                        />
                                    </div>
                                    <div className="w-[47%]">
                                        <InputField
                                            name="email"
                                            label="Email"
                                            form={form}
                                            errors={form.formState.errors}
                                            touchedFields={form.formState.touchedFields}
                                        />
                                    </div>
                                </div>
                                <div className="mb-[18px]">
                                    <Space wrap>
                                        <div className="mr-[30px] flexCenter gap-x-[18px]  ">
                                            <h1>Province</h1>
                                            <Select
                                                defaultValue="Viet Nam"
                                                style={{
                                                    width: 120,
                                                }}
                                            />
                                        </div>
                                        <div className="mr-[30px] flexCenter gap-x-[18px]  ">
                                            <h1>City</h1>
                                            <Select
                                                style={{
                                                    width: 120,
                                                }}
                                                onChange={onCityChange}
                                                options={countries.map((country) => ({
                                                    label: country.label,
                                                    value: country.value,
                                                }))}
                                            />
                                        </div>
                                        <div className="flexCenter gap-x-[18px]  ">
                                            <h1 className="text-[14px]">Zip Code</h1>
                                            <Input
                                                style={{ maxWidth: "150px" }}
                                                placeholder="Zip Code "
                                            />
                                        </div>
                                    </Space>{" "}
                                </div>
                                <InputField
                                    name="shippingAddress"
                                    label="Shipping Address"
                                    form={form}
                                    errors={form.formState.errors}
                                    touchedFields={form.formState.touchedFields}
                                />
                                <button
                                    className="button"
                                    onClick={form.handleSubmit((data) => {
                                        handleSubmit({ ...data, country }, checkoutToken)
                                    })}
                                    type="submit"
                                >
                                    Submit
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </button>
                            </Form>
                        </div>
                        <div className="w-[37%] bg-[#fff] p-[30px] ">
                            {checkoutToken?.line_items.map((item) => (
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
                                            <h1 className="text-[14px]">
                                                Quantity: {item.quantity}
                                            </h1>
                                        </div>
                                    </div>
                                    <div className="pt-[10px] flex flex-col gap-y-[15px] ">
                                        <h1 className="text-[14px]">
                                            ${(item.price.raw * item.quantity).toFixed(2)}
                                        </h1>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Checkout
