import React from "react"
import { useLocalStorage } from "@uidotdev/usehooks"
import ChatBubble from "@components/ChatBubble"
import TextBox from "@components/TextBox"

const Body = () => {
  const [conversation, setConversation] = useLocalStorage("conversation", [
    { message: "Hi", isUser: false },
    { message: "Hello", isUser: true },
  ])

  const handleSend = (text) => {
    setConversation((msg) => [...msg, { message: text, isUser: true }])
  }

  return (
    <div className="m-1 text-center">
      {conversation.map((msg, i) => {
        const className = msg.isUser ? "flex flex-row-reverse" : "flex"
        return (
          <div className={className} key={i}>
            <ChatBubble message={msg.message} isUser={msg.isUser} />
          </div>
        )
      })}
      <TextBox onSubmit={handleSend} />
    </div>
  )
}

export default Body
