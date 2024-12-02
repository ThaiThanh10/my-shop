import { useState } from "react"
import Header from "./components/elements/Header"
import Footer from "./components/elements/Footer"
import { Outlet } from "react-router-dom"
import "/node_modules/slick-carousel/slick/slick.css"
import "/node_modules/slick-carousel/slick/slick-theme.css"

function App() {
  return (
    <>
      <Header />
      <div className="tablet:mt-[156px] sm:mt-[93px] ">
        <Outlet />
      </div>
      <Footer />
    </>
  )
}

export default App
