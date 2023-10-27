import React from "react"

const Footer = () => {
  return (
    <p className="bottom-0 left-0 right-0 z-10 mt-10 text-center text-xs font-medium text-gray-600">
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
