export const useApi = (apiKey: string, modelName: string) => {
  const fetchApi = async (conversation: string[]) => {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
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
