import ChatBubble from "@components/ChatBubble"
import EnterKeyModal from "@components/EnterKeyModal"
import TextBar from "@components/TextBar"
import Welcome from "@components/Welcome"
import { useLocalStorage } from "@uidotdev/usehooks"
import OpenAI from "openai"
import { useState } from "react"
import {
  DEFAULT_SYSTEM_PROMPT,
  LOCAL_STORAGE_API_KEY,
  LOCAL_STORAGE_CONVERSATION_KEY,
} from "../constants"

const Body = () => {
  const [apiKey, setApiKey] = useLocalStorage(LOCAL_STORAGE_API_KEY, null)
  const [conversation, setConversation] = useLocalStorage(
    LOCAL_STORAGE_CONVERSATION_KEY,
    [DEFAULT_SYSTEM_PROMPT],
  )
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
    <div className="mx-3 mt-10 mb-28 text-center">
      {conversation.length == 1 && <Welcome />}
      {conversation.map((msg, i) => {
        if (i == 0) {
          return
        }
        const className = msg.role == "user" ? "flex flex-row-reverse" : "flex"
        return (
          <div className={className} key={i}>
            <ChatBubble message={msg.content} isUser={msg.role == "user"} />
          </div>
        )
      })}
      <TextBar
        onSubmit={handleSend}
        onClear={() => setConversation([DEFAULT_SYSTEM_PROMPT])}
      />
      {showModal && <EnterKeyModal onSubmit={handleApiKeySubmit} />}
    </div>
  )
}

export default Body
