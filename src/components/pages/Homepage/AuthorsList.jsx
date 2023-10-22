import axios from "axios"
import React, { useEffect, useState } from "react"
import { RightOutlined } from "@ant-design/icons"

const AuthorsList = () => {
    const [listAuthors, setlistAuthors] = useState()
    const getUser = async () => {
        await axios
            .get("https://randomuser.me/api/?results=10&inc=name,picture")
            .then((res) => setlistAuthors(res.data.results))
    }
    useEffect(() => {
        getUser()
    }, [])

    return (
        <section className=" container mb-[95px]">
            <div className="mb-[56px] flexBetween">
                <h1 className="heading ">Favorite Authors</h1>
                <button className="flexCenter gap-x-[13px] text-[16px] hover:text-red-500  ">
                    View All
                    <RightOutlined />
                </button>
            </div>
            <div className="flexBetween">
                {listAuthors?.map(
                    (it, i) =>
                        i < 5 && (
                            <div
                                key={i + 1}
                                className="text-center"
                            >
                                <img
                                    className="rounded-full mb-[32px] max-w-[140px] "
                                    src={it.picture.large}
                                    alt=""
                                />
                                <h1 className="mb-[5px] text-[16px] text-[#161619] leading-[20px] font-bold ">
                                    {it.name.first + it.name.last}
                                </h1>
                                <p className="text-[14px] text-[#7C6E65] " >25 Published Books</p>
                            </div>
                        )
                )}
            </div>
        </section>
    )
}

export default AuthorsList
