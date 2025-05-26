"use client"

import { useState } from "react"
import Navigation from "@/components/navigation"
import HomePage from "@/components/home-page"
import FeaturesPage from "@/components/features-page"
import PrivacyPage from "@/components/privacy-page"
import TermsPage from "@/components/terms-page"
import Footer from "@/components/footer"

type PageType = "home" | "features" | "privacy" | "terms"

export default function LandingPage() {
  const [currentPage, setCurrentPage] = useState<PageType>("home")

  const showPage = (pageId: PageType) => {
    setCurrentPage(pageId)
    window.scrollTo(0, 0)
  }

  const renderCurrentPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage />
      case "features":
        return <FeaturesPage />
      case "privacy":
        return <PrivacyPage />
      case "terms":
        return <TermsPage />
      default:
        return <HomePage />
    }
  }

  return (
    <div className="bg-gray-50 font-sans">
      <Navigation currentPage={currentPage} onPageChange={showPage} />
      {renderCurrentPage()}
      <Footer onPageChange={showPage} />
    </div>
  )
}
