import React, { useState } from "react"

interface TextBoxProps {
  onSubmit: (text: string) => void
}

const TextBox = ({ onSubmit }: TextBoxProps) => {
  const [text, setText] = useState("")

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onSubmit(text)
    setText("")
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={text} onChange={handleChange} />
      <button type="submit">Send</button>
    </form>
  )
}

export default TextBox
