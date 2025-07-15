"use client"

import { useState } from "react"
import { useTheme } from "next-themes"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { Moon, Sun, Menu, X } from "lucide-react"

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const pathname = usePathname()

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const isActive = (path: string) => pathname === path

  return (
    <nav className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm fixed w-full z-50 border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center">
              <img
                src="/app_icon.png"
                alt="VITAP Student Logo"
                className="w-8 h-8 rounded-lg object-contain"
              />
            </div>
            <span className="font-medium text-xl text-gray-900 dark:text-white">VITAP Student</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive("/")
                ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20"
                : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                }`}
            >
              Home
            </Link>
            <Link
              href="/features"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive("/features")
                ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20"
                : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                }`}
            >
              Features
            </Link>
            <Link
              href="/privacy"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive("/privacy")
                ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20"
                : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                }`}
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive("/terms")
                ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20"
                : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                }`}
            >
              Terms
            </Link>
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
            <div className="flex space-x-4 text-white">
              <a
                href="https://github.com/Udhay-Adithya/vit_ap_student_app"
                className="w-8 h-8 bg-gray-800 dark:bg-gray-700 rounded-lg flex items-center justify-center hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
            </div>
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
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
          <div className="px-4 py-2 space-y-2">
            <Link
              href="/"
              className={`block px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive("/")
                ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20"
                : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/features"
              className={`block px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive("/features")
                ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20"
                : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              href="/privacy"
              className={`block px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive("/privacy")
                ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20"
                : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className={`block px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive("/terms")
                ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20"
                : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Terms
            </Link>
            <a
              href="https://github.com/VITAP-Student-Project/vitap_student_app"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              GitHub
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
