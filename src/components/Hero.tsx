import type React from "react"

const Hero: React.FC = () => {
  return (
    <section className="py-16 md:py-24 px-8 text-center bg-[#f5f5f0]">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          AI agent-driven platform that connects all your apps
        </h1>
        <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
          A powerful tool for small and medium business owners and CEOs to save 50% of their time—streamline, grow, and
          succeed effortlessly.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button className="bg-black text-white px-6 py-3 rounded font-medium text-sm hover:bg-gray-800 transition-colors">
            Request a demo
          </button>
          <button className="bg-transparent text-black px-6 py-3 rounded font-medium text-sm border border-black hover:bg-gray-100 transition-colors">
            Try the Playground
          </button>
        </div>
        <div className="h-[300px] bg-white rounded-xl max-w-5xl mx-auto"></div>
      </div>
    </section>
  )
}

export default Hero

