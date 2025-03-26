import type React from "react"
import type { UseCase } from "./UseCaseGallery"

interface UseCaseCardProps {
  useCase: UseCase
}

const UseCaseCard: React.FC<UseCaseCardProps> = ({ useCase }) => {
  return (
    <div className="bg-white rounded-lg p-6 text-left shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200 h-full">
      <div className="mb-4">
        <div className="w-8 h-8 rounded-full bg-black"></div>
      </div>
      <h3 className="text-lg font-medium mb-2">{useCase.title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{useCase.description}</p>
    </div>
  )
}

export default UseCaseCard

