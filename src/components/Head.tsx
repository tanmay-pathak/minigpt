import React from "react"
import NextHead from "next/head"

const Head = () => {
  return (
    <NextHead>
      <title>MiniGPT</title>
      <meta name="description" content="Minimalistic UI for ChatGPT" />
      <link rel="icon" href="/favicon.svg" />
    </NextHead>
  )
}

export default Head
