import type React from "react"

const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center px-8 py-4 bg-[#f5f5f0] border-b border-gray-200">
      <div className="flex items-center gap-6">
        <a href="#" className="text-sm text-gray-800 hover:text-gray-600">
          Intro
        </a>
        <a href="#use-cases" className="text-sm text-gray-800 hover:text-gray-600">
          Use Cases
        </a>
      </div>
      <div>
        <a href="/" className="font-medium text-gray-800">
          LLMSoftware.com
        </a>
      </div>
      <div className="flex items-center gap-6">
        <a href="/login" className="text-sm text-gray-800 hover:text-gray-600">
          Login
        </a>
        <a href="/home" className="bg-black text-white px-4 py-2 rounded text-sm">
          Go Home
        </a>
      </div>
    </header>
  )
}

export default Header

