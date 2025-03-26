import type React from "react"

interface FooterLink {
  id: number
  name: string
  url: string
}

interface FooterLinksGroup {
  popularIntegrations: FooterLink[]
  topCategories: FooterLink[]
  productLinks: FooterLink[]
  reachUs: FooterLink[]
}

const Footer: React.FC = () => {
  const footerLinks: FooterLinksGroup = {
    popularIntegrations: [
      { id: 1, name: "Google", url: "#" },
      { id: 2, name: "HubSpot", url: "#" },
      { id: 3, name: "Salesforce", url: "#" },
    ],
    topCategories: [
      { id: 1, name: "Data & Storage", url: "#" },
      { id: 2, name: "Marketing", url: "#" },
      { id: 3, name: "Sales", url: "#" },
    ],
    productLinks: [
      { id: 1, name: "Playground", url: "#" },
      { id: 2, name: "Pricing", url: "#" },
      { id: 3, name: "Privacy", url: "#" },
      { id: 4, name: "AI Agents", url: "#" },
    ],
    reachUs: [
      { id: 1, name: "Contact", url: "#" },
      { id: 2, name: "Careers", url: "#" },
      { id: 3, name: "Press", url: "#" },
      { id: 4, name: "Events", url: "#" },
    ],
  }

  return (
    <footer className="bg-[#f5f5f0] py-16 px-8 border-t border-gray-200">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        <div>
          <h3 className="text-base font-medium mb-4 text-gray-800">Popular Integrations</h3>
          <ul className="space-y-2">
            {footerLinks.popularIntegrations.map((link) => (
              <li key={link.id}>
                <a href={link.url} className="text-sm text-gray-600 hover:text-gray-900 hover:underline">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-base font-medium mb-4 text-gray-800">Top Integration Categories</h3>
          <ul className="space-y-2">
            {footerLinks.topCategories.map((link) => (
              <li key={link.id}>
                <a href={link.url} className="text-sm text-gray-600 hover:text-gray-900 hover:underline">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-base font-medium mb-4 text-gray-800">Product Related Links</h3>
          <ul className="space-y-2">
            {footerLinks.productLinks.map((link) => (
              <li key={link.id}>
                <a href={link.url} className="text-sm text-gray-600 hover:text-gray-900 hover:underline">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-base font-medium mb-4 text-gray-800">Reach Us</h3>
          <ul className="space-y-2">
            {footerLinks.reachUs.map((link) => (
              <li key={link.id}>
                <a href={link.url} className="text-sm text-gray-600 hover:text-gray-900 hover:underline">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-12 text-center text-xs text-gray-500">
        <p>© {new Date().getFullYear()} llmsoftware.com | All rights reserved</p>
      </div>
    </footer>
  )
}

export default Footer

