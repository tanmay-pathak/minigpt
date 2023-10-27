import React from "react"
import { useLocalStorage } from "@uidotdev/usehooks"

const Body = () => {
  const [value, setValue] = useLocalStorage("test", [])

  return <div className="flex-1 bg-[#343541]"></div>
}

export default Body
