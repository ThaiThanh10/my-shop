import axios from "axios"
import React, { useEffect, useState } from "react"
import Slider from "react-slick"
import { slickSettings } from "./BestSelling"

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
        <section className=" container mb-[95px]  ">
            <div className="mb-[56px] flexBetween sm:flex-col sm:gap-y-[13px] mobile:mb-[45px] tablet:flex-row ">
                <h1 className="heading ">Favorite Authors</h1>
                <button className="text-[16px] hover:text-red-500  ">View All</button>
            </div>
            {/* <div className="flexBetween sm:flex-col sm:gap-y-[13px] mobile:flex-row mobile:gap-x-[25px] ">
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
                                <p className="text-[14px] text-[#7C6E65] ">25 Published Books</p>
                            </div>
                        )
                )}
            </div> */}
            <Slider {...slickSettings}>
                {listAuthors?.map(
                    (it, i) =>
                    (
                        <div
                            key={i + 1}
                            className="text-center"
                        >
                            <img
                                className="rounded-full mb-[32px] max-w-[140px] mx-auto "
                                src={it.picture.large}
                                alt=""
                            />
                            <h1 className="mb-[5px] text-[16px] text-[#161619] leading-[20px] font-bold ">
                                {it.name.first + it.name.last}
                            </h1>
                            <p className="text-[14px] text-[#7C6E65] ">25 Published Books</p>
                        </div>
                    )
                )}
            </Slider>
        </section>
    )
}

export default AuthorsList
