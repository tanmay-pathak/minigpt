import React, { useState } from "react"

interface TextBoxProps {
  onSubmit: (text: string) => void
}

const TextBox = ({ onSubmit }: TextBoxProps) => {
  const [text, setText] = useState("")

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (text) {
      onSubmit(text)
    }
    setText("")
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }

  return (
    <form onSubmit={handleSubmit} className="fixed bottom-0 flex w-full p-6">
      <input
        type="text"
        value={text}
        onChange={handleChange}
        className="w-full rounded-xl"
      />
      <button
        type="submit"
        className="ml-3 rounded-xl bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Send
      </button>
    </form>
  )
}

export default TextBox
