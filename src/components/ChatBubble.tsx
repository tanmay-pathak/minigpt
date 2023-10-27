interface ChatBubbleProps {
  message: string
  isUser: boolean
}

const ChatBubble = ({ message, isUser }: ChatBubbleProps) => {
  const bubbleClass = isUser
    ? "bg-blue-500 text-white rounded-br-lg rounded-tl-lg rounded-tr-lg p-2 max-w-xs mt-2"
    : "bg-gray-200 text-gray-700 rounded-bl-lg rounded-tl-lg rounded-tr-lg p-2 max-w-xs mt-2"

  return (
    <div className={`chat-bubble ${bubbleClass}`}>
      <p>{message}</p>
    </div>
  )
}

export default ChatBubble
