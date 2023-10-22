import { useState } from "react"
import Header from "./components/elements/Header"
import Footer from "./components/elements/Footer"
import { Outlet } from "react-router-dom"

function App() {
  return (
    <>
      <Header />
      <div className="mt-[156px]">
        <Outlet />
      </div>
      <Footer />
    </>
  )
}

export default App
