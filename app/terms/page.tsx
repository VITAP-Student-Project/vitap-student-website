import Navigation from "@/components/navigation"
import TermsPage from "@/components/terms-page"
import Footer from "@/components/footer"

export default function Terms() {
  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen">
      <Navigation />
      <TermsPage />
      <Footer />
    </div>
  )
}
