import Head from "@components/Head"
import NavBar from "@components/NavBar"
import dynamic from "next/dynamic"

const Body = dynamic(() => import("@components/Body"), {
  ssr: false,
})

export default function Home() {
  return (
    <div className="flex flex-col gap-0">
      <Head />
      <NavBar />
      <Body />
    </div>
  )
}
