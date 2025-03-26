import Header from "./components/Header"
import Hero from "./components/Hero"
import SolutionsSection from "./components/SolutionsSection"
import UseCaseGallery from "./components/UseCaseGallery"
import IntegrationsSection from "./components/IntegrationsSection"
import CtaSection from "./components/CtaSection"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main>
        <Hero />
        <SolutionsSection />
        <UseCaseGallery />
        <IntegrationsSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  )
}

export default App

