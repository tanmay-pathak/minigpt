import React from "react"
import dynamic from "next/dynamic"
import Head from "@components/Head"
import Footer from "@components/Footer"
import NavBar from "@components/NavBar"

const Body = dynamic(() => import("@components/Body"), {
  ssr: false,
})

export default function Home() {
  return (
    <div className="flex flex-col gap-0">
      <Head />
      <NavBar />
      <Body />
      <Footer />
    </div>
  )
}
