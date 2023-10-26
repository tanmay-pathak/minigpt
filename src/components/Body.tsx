import React from "react"
import { useLocalStorage } from "@uidotdev/usehooks"

type Props = {}

const Body = (props: Props) => {
  const [value, setValue] = useLocalStorage("test", [])

  return <div className="px-4 sm:px-0"></div>
}

export default Body
