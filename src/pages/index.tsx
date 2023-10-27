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
    <>
      <Head />
      <NavBar />
      <Body />
      <Footer />
    </>
  )
}
