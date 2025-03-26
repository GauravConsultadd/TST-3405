import type React from "react"
import UseCaseCard from "./UseCaseCard"

export interface UseCase {
  id: number
  title: string
  description: string
}

const UseCaseGallery: React.FC = () => {
  const useCases: UseCase[] = [
    {
      id: 1,
      title: "Leads and Invoices",
      description: "Analyze data and prepare fresh leads for your sales team. Generate QuickBooks recurring invoices.",
    },
    {
      id: 2,
      title: "Sales Upskilling",
      description:
        "Analyze the mistakes in language and tone to improve sales calls. Guide to building customer-first mindset.",
    },
    {
      id: 3,
      title: "Marketing",
      description: "Develop a cohesive AI-based email to nurture leads, drive click-throughs, and boost conversions.",
    },
    {
      id: 4,
      title: "Sales Forecast",
      description:
        "Analyze historical data to predict future sales on daily range of days and forecast on holiday sales.",
    },
    {
      id: 5,
      title: "Invoicing and Billing",
      description:
        "Help with invoicing and billing management for clients. Automate recurring invoices for businesses.",
    },
    {
      id: 6,
      title: "Resume Screening",
      description: "Analyze resumes to identify top candidates and specify the candidates and schedule interviews.",
    },
    {
      id: 7,
      title: "Client Data Analysis",
      description: "Analyze client data to identify trends and patterns to improve decision-making.",
    },
    {
      id: 8,
      title: "Regulatory Compliance",
      description: "Use AI-powered tools to monitor compliance with regulations and ensure regulatory requirements.",
    },
    {
      id: 9,
      title: "Document Automation",
      description: "Automate document creation, such as contracts, proposals, reports, using AI-powered templates.",
    },
  ]

  return (
    <section id="use-cases" className="py-16 md:py-24 px-8 text-center">
      <h2 className="text-3xl font-bold mb-2">Use case gallery</h2>
      <p className="text-gray-600 mb-12">Learn how our AI agent can manage your business</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {useCases.map((useCase) => (
          <UseCaseCard key={useCase.id} useCase={useCase} />
        ))}
      </div>

      <button className="bg-black text-white px-6 py-3 rounded-full text-sm inline-flex items-center gap-2 hover:bg-gray-800 transition-colors">
        Explore more use cases
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 0L6.59 1.41L12.17 7H0V9H12.17L6.59 14.59L8 16L16 8L8 0Z" fill="currentColor" />
        </svg>
      </button>
    </section>
  )
}

export default UseCaseGallery

