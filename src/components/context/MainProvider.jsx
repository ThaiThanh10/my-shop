import React, { createContext, useEffect, useState } from "react"
import { commerce } from "../../lib/commerce"
import { message } from "antd"

export const MainContext = createContext()
const MainProvider = ({ children }) => {
    const [dataProducts, setDataProducts] = useState([])
    const [cart, setCart] = useState({})
    const [listProduct, setListProduct] = useState([])
    const [checkoutToken, setCheckoutToken] = useState()
    const getDataProducts = async () => {
        const { data } = await commerce.products.list()
        setDataProducts(data)
    }
    const getDataCart = async () => {
        const cart = await commerce.cart.retrieve()
        setCart(cart)
        setListProduct(cart.line_items)
        console.log("🚀cart---->", cart)
    }
    const sendDataCart = async (productId, quantity) => {
        await commerce.cart.add(productId, quantity)
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
    const handleAddCart = (productId, quantity, product) => {
        sendDataCart(productId, quantity)

        const newLineItems = [...listProduct]
        if (!newLineItems.length) {
            product.quantity = 1
            newLineItems.push(product)
            setListProduct(newLineItems)
            message.success("Them vao gio hang thanh cong")
            return
        }
        if (newLineItems.length) {
            const findSameItem = (element) => element.id === productId
            const isSameItem = newLineItems.findIndex(findSameItem)
            if (isSameItem === -1) {
                product.quantity = 1
                newLineItems.push(product)
                setListProduct(newLineItems)
                message.success("Them vao gio hang thanh cong")
            } else {
                newLineItems[isSameItem].quantity += 1
                setListProduct(newLineItems)
                message.success("Item has been added successfully")
            }
        }
    }
    const handleUpdateCartQty = (id, quantity) => {
        console.log("🚀id---->", id)
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
    useEffect(() => {
        getDataProducts()
        getDataCart()
        console.log(1)
    }, [])
    useEffect(() => {
        getDataCart()
        console.log(2)
    }, [listProduct.length])
    return (
        <MainContext.Provider
            value={{
                dataProducts,
                setDataProducts,
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
            }}
        >
            {children}
        </MainContext.Provider>
    )
}

export default MainProvider
