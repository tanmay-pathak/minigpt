import React from "react"
import NextHead from "next/head"

const Head = () => {
  return (
    <NextHead>
      <title>MiniGPT</title>
      <meta name="description" content="Minimalistic UI for ChatGPT" />
      <link rel="icon" href="/favicon.ico" />
    </NextHead>
  )
}

export default Head
