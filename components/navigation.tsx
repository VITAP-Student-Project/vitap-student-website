"use client"

import { useState } from "react"
import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"

interface NavigationProps {
  currentPage: string
  onPageChange: (page: "home" | "features" | "privacy" | "terms") => void
}

export default function Navigation({ currentPage, onPageChange }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const handlePageChange = (page: "home" | "features" | "privacy" | "terms") => {
    onPageChange(page)
    setMobileMenuOpen(false)
  }

  return (
    <nav className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md fixed w-full z-50 border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center">
                <img
                  src="/app_icon.png"
                  alt="VITAP Companion Logo"
                  className="w-8 h-8 rounded-lg object-contain"
                />
              </div>
            </div>
            <span className="font-bold text-xl text-gray-900 dark:text-white">VITAP Companion</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => handlePageChange("home")}
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => handlePageChange("features")}
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Features
            </button>
            <button
              onClick={() => handlePageChange("privacy")}
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Privacy
            </button>
            <button
              onClick={() => handlePageChange("terms")}
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Terms
            </button>
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              {theme === "dark" ? (
                <Sun className="h-4 w-4 text-gray-700 dark:text-gray-300" />
              ) : (
                <Moon className="h-4 w-4 text-gray-700 dark:text-gray-300" />
              )}
            </button>
            <a
              href="https://github.com/Udhay-Adithya/vit_ap_student_app"
              target="_blank"
              rel="noopener noreferrer"
              className="modern-button-primary"
            >
              GitHub
            </a>
          </div>
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              {theme === "dark" ? (
                <Sun className="h-4 w-4 text-gray-700 dark:text-gray-300" />
              ) : (
                <Moon className="h-4 w-4 text-gray-700 dark:text-gray-300" />
              )}
            </button>
            <button onClick={toggleMobileMenu} className="text-gray-700 dark:text-gray-300">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
          <div className="px-4 py-2 space-y-2">
            <button
              onClick={() => handlePageChange("home")}
              className="block text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 py-2 w-full text-left"
            >
              Home
            </button>
            <button
              onClick={() => handlePageChange("features")}
              className="block text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 py-2 w-full text-left"
            >
              Features
            </button>
            <button
              onClick={() => handlePageChange("privacy")}
              className="block text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 py-2 w-full text-left"
            >
              Privacy
            </button>
            <button
              onClick={() => handlePageChange("terms")}
              className="block text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 py-2 w-full text-left"
            >
              Terms
            </button>
            <a
              href="https://github.com/Udhay-Adithya/vit_ap_student_app"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 py-2"
            >
              GitHub
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
