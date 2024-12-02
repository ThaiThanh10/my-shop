import React, { useContext, useEffect, useState } from "react"
import { Divider, Pagination } from "antd"
import { MainContext } from "../../context/MainProvider"
import PageTitle from "../../elements/PageTitle"
import SidebarCollapse from "./SidebarCollapse"
import ListProduct from "./List"
import { useParams } from "react-router-dom"
const ProductList = () => {
    const { dataProducts, setResults, cate, results } = useContext(MainContext)
    const cateId = useParams()
    const searchValue = useParams()
    const [current, setCurrent] = useState(1);

    const handleChange = (value) => {
        const newListProduct = [...dataProducts]
        if (value.includes("Name")) {
            const result = newListProduct.sort((a, b) => {
                const nameA = a.name.toUpperCase() // ignore upper and lowercase
                const nameB = b.name.toUpperCase() // ignore upper and lowercase
                if (nameA < nameB) {
                    return -1
                }
                if (nameA > nameB) {
                    return 1
                }
                return 0
            })
            if (value == "ascendingName") {
                setResults(result)
            } else {
                setResults(result.reverse())
            }
        }
        if (value.includes("Price")) {
            const result = newListProduct.sort((a, b) => a.price.raw - b.price.raw)
            if (value == "ascendingPrice") {
                setResults(result)
            }
            if (value == "descendingPrice") {
                setResults(result.reverse())
            }
        }
    }

    const handleCate = (id) => {
        if (id == "cat_ypbroE4e8w8n4e") {
            setResults(dataProducts)
        } else {
            const result = dataProducts.filter((item) => item.categories[0].id == id)
            setResults(result)
        }
    }
    const search = (value) => {
        const newResult = dataProducts.filter(
            (item) =>
                item.name.toLowerCase().includes(value.toLowerCase()) ||
                item.sku.toLowerCase().includes(value.toLowerCase())
        )
        setResults(newResult)
    }
    useEffect(() => {
        if (cateId.id) {
            handleCate(cateId.id)
        }
    }, [cateId.id])
    useEffect(() => {
        if (searchValue.id) {
            search(searchValue.id)
            console.log('🚀searchValue.id---->', searchValue.id);
        }
    }, [dataProducts.length])
    useEffect(() => {
        if (searchValue.id) {
            console.log("🚀searchValue.id---->", searchValue.id)
            search(searchValue.id)
        }
    }, [searchValue.id])
    return (
        <div>
            <Divider />
            <PageTitle />
            <Divider />
            <div className="flexBetween items-start container pt-[32px] pb-[90px] sm:flex-col laptop:flex-row ">
                <SidebarCollapse
                    cate={cate}
                    onSelectCate={handleCate}
                />
                <ListProduct handleChange={handleChange} />
            </div>
        </div>
    )
}

export default ProductList
