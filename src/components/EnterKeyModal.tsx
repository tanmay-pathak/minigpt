import { useEffect } from "react"

type Props = {
  onSubmit: (key: string) => void
}

const EnterKeyModal = ({ onSubmit }: Props) => {
  useEffect(() => {
    // Disable scroll on mount
    document.body.style.overflow = "hidden"

    // Enable scroll on unmount
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [])

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 flex justify-center items-center z-20">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-lg font-medium mb-4">Enter your API key</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault()
            // @ts-ignore
            onSubmit(e.target.elements.apiKey.value)
          }}
        >
          <input
            type="password"
            name="apiKey"
            className="w-full px-2 py-1 border border-gray-300 rounded mb-4"
          />
          <button
            type="submit"
            className="px-4 py-1 bg-blue-500 text-white rounded"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default EnterKeyModal
