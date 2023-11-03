import ChatBubble from "@components/ChatBubble"
import EnterKeyModal from "@components/EnterKeyModal"
import TextBar from "@components/TextBar"
import Welcome from "@components/Welcome"
import { useLocalStorage } from "@uidotdev/usehooks"
import OpenAI from "openai"
import { useEffect, useRef, useState } from "react"
import {
  LOCAL_STORAGE_API_KEY,
  LOCAL_STORAGE_CONVERSATION_KEY,
  MODEL,
} from "../constants"

const Body = () => {
  const [apiKey, setApiKey] = useLocalStorage(LOCAL_STORAGE_API_KEY, null)
  const [conversation, setConversation] = useLocalStorage(
    LOCAL_STORAGE_CONVERSATION_KEY,
    [],
  )
  const [showModal, setShowModal] = useState(!apiKey)
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef?.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(scrollToBottom, [conversation])

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

    const completion = await api.chat.completions.create({
      model: MODEL,
      messages: conversationSoFar,
      stream: true,
    })

    const response = { content: "", role: "system" }
    conversationSoFar.push(response)

    for await (const chunk of completion) {
      if (chunk.choices[0].delta.content) {
        response.content += chunk.choices[0].delta.content
      }
      setConversation(conversationSoFar)
    }
  }

  const handleApiKeySubmit = (apiKey: string): void => {
    setApiKey(apiKey)
    setShowModal(false)
  }

  return (
    <div className="mx-3 mt-10 mb-28 text-center">
      {conversation.length == 0 ? (
        <Welcome />
      ) : (
        <>
          {conversation.map((msg, i) => {
            const className =
              msg.role == "user"
                ? "flex flex-row-reverse text-right"
                : "flex text-left"
            return (
              <div className={className} key={i}>
                <ChatBubble message={msg.content} isUser={msg.role == "user"} />
              </div>
            )
          })}
        </>
      )}
      <div ref={messagesEndRef} />
      <TextBar onSubmit={handleSend} onClear={() => setConversation([])} />
      {showModal && <EnterKeyModal onSubmit={handleApiKeySubmit} />}
    </div>
  )
}

export default Body
