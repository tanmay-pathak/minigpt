import React from "react"
import dynamic from "next/dynamic"
import Head from "@components/Head"
import Footer from "@components/Footer"

const Body = dynamic(() => import("@components/Body"), {
  ssr: false,
})

export default function Home() {
  return (
    <>
      <Head />
      <main className="flex min-h-screen justify-center bg-gradient-to-b from-gray-50 via-gray-50 to-gray-100 py-20">
        <div>
          <h1 className="px-5 text-center text-4xl font-bold leading-tight tracking-tight sm:mt-4 sm:text-6xl">
            MiniGPT
          </h1>

          <h2 className="mx-auto mt-8 max-w-4xl px-10 text-center text-base tracking-tight text-gray-600 sm:text-2xl md:mt-5 md:text-2xl">
            A minimalistic ChatGPT UI that lets you use your own OpenAI API key.
            All of the data is stored locally within your browser.
          </h2>

          <Body />
          <Footer />
        </div>
      </main>
    </>
  )
}
