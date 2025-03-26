import type React from "react"

const CtaSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 px-8 text-center bg-[#f5f5f0]">
      <h2 className="text-3xl font-bold mb-8 max-w-4xl mx-auto leading-tight">
        Organize your company with LLM software for a seamless acquisition from day one. Be due diligence-ready at all
        times.
      </h2>
      <button className="bg-black text-white px-6 py-3 rounded-full text-sm hover:bg-gray-800 transition-colors">
        Try it for free
      </button>
    </section>
  )
}

export default CtaSection

