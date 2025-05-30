import Navigation from "@/components/navigation"
import FeaturesPage from "@/components/features-page"
import Footer from "@/components/footer"

export default function Features() {
  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen">
      <Navigation />
      <FeaturesPage />
      <Footer />
    </div>
  )
}
