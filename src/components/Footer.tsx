import React from "react"

type Props = {}

const Footer = (props: Props) => {
  return (
    <p className="mt-6 text-center text-xs font-medium text-gray-600">
      Made with <span style={{ color: "#e25555" }}>&#9829;</span> by{" "}
      <a
        className="font-medium text-blue-600 transition duration-150 ease-in-out hover:text-blue-500 focus:underline focus:outline-none"
        href="https://tanmaypathak.com"
      >
        Tanmay
      </a>
    </p>
  )
}

export default Footer
