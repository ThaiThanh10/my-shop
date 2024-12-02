import React, { createContext, useEffect, useState } from "react"
import { commerce } from "../../lib/commerce"
import { message } from "antd"

export const MainContext = createContext()
const MainProvider = ({ children }) => {
    const [dataProducts, setDataProducts] = useState([])
    const [cart, setCart] = useState({})
    const [listProduct, setListProduct] = useState([])
    const [results, setResults] = useState()
    const [checkoutToken, setCheckoutToken] = useState()
    const [cate, setCate] = useState([])
    const getCate = async () => {
        const cate = await commerce.categories.list()
        setCate(cate.data)
    }
    const getDataProducts = async () => {
        const { data } = await commerce.products.list()
        setDataProducts(data)
        setResults(data)
        const cart = await commerce.cart.retrieve()
        console.log('🚀cart---->', cart);
        setCart(cart)
        setListProduct(cart.line_items)
    }
    const getDataCart = async () => {
        const cart = await commerce.cart.retrieve()
        setCart(cart)
        setListProduct(cart.line_items)
    }

    const handleRemove = (productId) => {
        const newListProduct = [...listProduct]
        const updateList = newListProduct.filter((product) => product.id !== productId)
        setListProduct(updateList)
        message.success("Xoa san pham thanh cong")
        const handleRemove = async (productId) => {
            await commerce.cart.remove(productId)
        }
        handleRemove(productId)
    }
    const handleAddCart = (productId, quantity) => {
        const sendDataCart = async (productId, quantity) => {
            message.loading("Dang them gio hang")
            const cart = await commerce.cart.add(productId, quantity)
            setCart(cart)
            setListProduct(cart.line_items)
            message.success("Them vao gio hang thanh cong")
        }
        sendDataCart(productId, quantity)
    }
    const handleUpdateCartQty = (id, quantity) => {
        const selectedItem = listProduct.findIndex((ele) => ele.id == id)
        const newLineItems = [...listProduct]
        newLineItems[selectedItem].quantity = quantity
        setListProduct(newLineItems)
        message.success("Cap nhat gio hang thanh cong")
        const updateQuantity = async (id, quantity) => {
            await commerce.cart.update(id, { quantity })
        }
        updateQuantity(id, quantity)
    }
    const calculateTotal = (arr) => {
        const itemPrice = arr.map((it) => parseFloat((it.price.raw * it.quantity).toFixed(2)))
        const totalPrice = itemPrice.reduce((acc, currentItem) => {
            return acc + currentItem
        }, 0)
        return totalPrice.toFixed(2)
    }
    const getToken = async () => {
        const cartId = await commerce.cart.id()
        const token = await commerce.checkout.generateToken(cartId, { type: "cart" })
        setCheckoutToken(token)
    }
    const getLoginToken = async () => {
        commerce.customer.login('alanthaivt113@gmail.com', 'http://localhost:5173/').then((token) => console.log(token));
    }
    useEffect(() => {
        getDataProducts()
        getLoginToken()
        // getDataCart()
        getCate()
    }, [])

    return (
        <MainContext.Provider
            value={{
                dataProducts,
                setDataProducts,
                results,
                setResults,
                cart,
                setCart,
                handleAddCart,
                listProduct,
                setListProduct,
                handleRemove,
                handleUpdateCartQty,
                calculateTotal,
                checkoutToken,
                getToken,
                cate,
                setCate,
                getCate,
            }}
        >
            {children}
        </MainContext.Provider>
    )
}

export default MainProvider
