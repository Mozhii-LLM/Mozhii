"use client"

import { useRouter } from "next/navigation"

export default function Chat() {
  const router = useRouter()

  const logout = () => {
    localStorage.removeItem("user")
    router.push("/login")
  }

  return (
    <div className="h-screen flex flex-col">
      <header className="bg-black text-white p-4 flex justify-between">
        <h1>Mozhii AI</h1>
        <button onClick={logout}>Logout</button>
      </header>

      <div className="flex-1 flex items-center justify-center text-gray-400">
        Chat UI coming soon...
      </div>
    </div>
  )
}
