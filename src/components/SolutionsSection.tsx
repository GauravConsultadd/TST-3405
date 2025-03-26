import type React from "react"

interface Category {
  id: number
  name: string
}

const SolutionsSection: React.FC = () => {
  const categories: Category[] = [
    { id: 1, name: "Finance" },
    { id: 2, name: "Human Resources" },
    { id: 3, name: "Legal" },
    { id: 4, name: "Project Management" },
  ]

  return (
    <section className="py-16 md:py-24 px-8 text-center bg-white">
      <h2 className="text-3xl font-bold mb-10">AI solutions for challenging areas of your business</h2>
      <div className="flex flex-wrap justify-center gap-4 mb-4">
        {categories.map((category) => (
          <button
            key={category.id}
            className="bg-[#2c3e2d] text-white px-6 py-3 rounded-full text-sm hover:bg-[#1a2a1b] transition-colors"
          >
            {category.name}
          </button>
        ))}
      </div>
      <p className="text-gray-600 mt-4">and more</p>
    </section>
  )
}

export default SolutionsSection

