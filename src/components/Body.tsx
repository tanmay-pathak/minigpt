import React from "react"
import { useLocalStorage } from "@uidotdev/usehooks"
import ChatBubble from "@components/ChatBubble"

const Body = () => {
  const [conversation, setConversation] = useLocalStorage("conversation", [])

  const messages = [
    { message: "Hi", isUser: false },
    { message: "Hello", isUser: true },
  ]

  return (
    <div className="m-1 text-center">
      {messages.map((msg, i) => {
        const className = msg.isUser ? "flex flex-row-reverse" : "flex"
        return (
          <div className={className} key={i}>
            <ChatBubble message={msg.message} isUser={msg.isUser} />
          </div>
        )
      })}
    </div>
  )
}

export default Body
