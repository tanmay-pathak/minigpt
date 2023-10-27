import ChatBubble from "@components/ChatBubble"
import EnterKeyModal from "@components/EnterKeyModal"
import TextBox from "@components/TextBox"
import { useLocalStorage } from "@uidotdev/usehooks"
import OpenAI from "openai"
import { useState } from "react"

const Body = () => {
  const [apiKey, setApiKey] = useLocalStorage("apiKey", null)
  const [conversation, setConversation] = useLocalStorage("conversation", [
    {
      role: "system",
      content: "You are a helpful assistant.",
    },
  ])
  const [showModal, setShowModal] = useState(!apiKey)

  const api = new OpenAI({
    apiKey: apiKey,
    dangerouslyAllowBrowser: true,
  })

  const handleSend = async (text) => {
    let conversationSoFar = []
    setConversation((msg) => {
      conversationSoFar = [...msg, { content: text, role: "user" }]
      return conversationSoFar
    })

    const response = await api.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: conversationSoFar,
    })

    setConversation(() => [
      ...conversationSoFar,
      { content: response.choices[0].message.content, role: "system" },
    ])
  }

  const handleApiKeySubmit = (apiKey: string): void => {
    setApiKey(apiKey)
    setShowModal(false)
  }

  return (
    <div className="m-1 text-center">
      {conversation.map((msg, i) => {
        const className = msg.role == "user" ? "flex flex-row-reverse" : "flex"
        return (
          <div className={className} key={i}>
            <ChatBubble message={msg.content} isUser={msg.role == "user"} />
          </div>
        )
      })}
      <TextBox onSubmit={handleSend} />
      {showModal && <EnterKeyModal onSubmit={handleApiKeySubmit} />}
    </div>
  )
}

export default Body
