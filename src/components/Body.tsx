import React from "react"
import { useLocalStorage } from "@uidotdev/usehooks"

const Body = () => {
  const [conversation, setConversation] = useLocalStorage("conversation", [])

  return <div className="m-1 text-center">Hey</div>
}

export default Body
