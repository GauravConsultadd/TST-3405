import type React from "react"

interface Integration {
  id: number
  name: string
  logo?: string
}

const IntegrationsSection: React.FC = () => {
  const integrations: Integration[] = [
    { id: 1, name: "DocuSign" },
    { id: 2, name: "QuickBooks" },
    { id: 3, name: "HubSpot" },
    { id: 4, name: "Financials" },
    { id: 5, name: "Salesforce" },
  ]

  return (
    <section className="py-16 md:py-24 px-8 text-center">
      <h2 className="text-3xl font-bold mb-12">Over 10+ integrations</h2>

      <div className="flex flex-wrap justify-center gap-8 mb-12">
        {integrations.map((integration) => (
          <div
            key={integration.id}
            className="w-[120px] h-[80px] bg-gray-100 rounded-lg flex items-center justify-center"
          >
            {integration.logo ? (
              <img src={integration.logo || "/placeholder.svg"} alt={integration.name} />
            ) : (
              <div className="text-gray-400 text-sm">{integration.name}</div>
            )}
          </div>
        ))}
      </div>

      <button className="bg-black text-white px-6 py-3 rounded-full text-sm inline-flex items-center gap-2 hover:bg-gray-800 transition-colors">
        See more integrations
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 0L6.59 1.41L12.17 7H0V9H12.17L6.59 14.59L8 16L16 8L8 0Z" fill="currentColor" />
        </svg>
      </button>
    </section>
  )
}

export default IntegrationsSection

