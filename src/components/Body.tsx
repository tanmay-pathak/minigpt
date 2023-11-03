import ChatBubble from "@components/ChatBubble"
import EnterKeyModal from "@components/EnterKeyModal"
import TextBar from "@components/TextBar"
import Welcome from "@components/Welcome"
import { useApi } from "@hooks/api"
import { useLocalStorage } from "@uidotdev/usehooks"
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
  const { fetchApi } = useApi(apiKey, MODEL)

  const scrollToBottom = () => {
    messagesEndRef?.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(scrollToBottom, [conversation])

  const handleSend = async (text) => {
    let conversationSoFar = []
    setConversation((msg) => {
      conversationSoFar = [...msg, { content: text, role: "user" }]
      return conversationSoFar
    })

    fetchApi(conversationSoFar).then((result) => {
      setConversation(() => [
        ...conversationSoFar,
        { content: result.choices[0].message.content, role: "system" },
      ])
    })
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
