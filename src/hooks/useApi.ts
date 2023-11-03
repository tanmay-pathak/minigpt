import { OPENAI_URL } from "@constants"

export const useApi = (apiKey: string, modelName: string) => {
  const fetchApi = async (conversation: string[]) => {
    const response = await fetch(OPENAI_URL, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      method: "POST",
      body: JSON.stringify({
        model: modelName,
        messages: conversation,
      }),
    })
    const data = await response.json()
    return data
  }

  return { fetchApi }
}
