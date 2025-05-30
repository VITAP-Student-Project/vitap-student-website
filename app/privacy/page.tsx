import Navigation from "@/components/navigation"
import PrivacyPage from "@/components/privacy-page"
import Footer from "@/components/footer"

export default function Privacy() {
  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen">
      <Navigation />
      <PrivacyPage />
      <Footer />
    </div>
  )
}
