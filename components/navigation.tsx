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
    <nav className="bg-yellow-300 dark:bg-zinc-900 fixed w-full z-50 border-b-2 border-black dark:border-yellow-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-9 h-9 border-2 border-black dark:border-yellow-300 flex items-center justify-center bg-white dark:bg-zinc-800" style={{ boxShadow: "2px 2px 0px #000" }}>
              <img
                src="/app_icon.png"
                alt="VITAP Student Logo"
                className="w-7 h-7 object-contain"
              />
            </div>
            <span className="font-black text-xl text-black dark:text-yellow-300 tracking-tight uppercase">VITAP Student</span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {[
              { href: "/", label: "Home" },
              { href: "/features", label: "Features" },
              { href: "/privacy", label: "Privacy" },
              { href: "/terms", label: "Terms" },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`px-4 py-2 text-sm font-bold border-2 border-transparent transition-all duration-100 uppercase tracking-wide
                  ${isActive(href)
                    ? "bg-black text-yellow-300 border-black dark:bg-yellow-300 dark:text-black dark:border-yellow-300"
                    : "text-black dark:text-yellow-300 hover:bg-black hover:text-yellow-300 hover:border-black dark:hover:bg-yellow-300 dark:hover:text-black dark:hover:border-yellow-300"
                  }`}
              >
                {label}
              </Link>
            ))}

            {/* Theme toggle */}
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="ml-2 p-2 border-2 border-black dark:border-yellow-300 bg-white dark:bg-zinc-800 text-black dark:text-yellow-300 hover:bg-black hover:text-yellow-300 dark:hover:bg-yellow-300 dark:hover:text-black transition-all duration-100"
              style={{ boxShadow: "2px 2px 0px #000" }}
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>

            {/* GitHub */}
            <a
              href="https://github.com/VITAP-Student-Project/vitap-student-website"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-1 p-2 border-2 border-black dark:border-yellow-300 bg-black dark:bg-yellow-300 text-white dark:text-black hover:bg-zinc-700 dark:hover:bg-yellow-200 transition-all duration-100"
              style={{ boxShadow: "2px 2px 0px #555" }}
              aria-label="GitHub"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
          </div>

          {/* Mobile controls */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 border-2 border-black dark:border-yellow-300 bg-white dark:bg-zinc-800 text-black dark:text-yellow-300"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
            <button
              onClick={toggleMobileMenu}
              className="p-2 border-2 border-black dark:border-yellow-300 bg-white dark:bg-zinc-800 text-black dark:text-yellow-300 font-bold"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-yellow-300 dark:bg-zinc-900 border-t-2 border-black dark:border-yellow-300">
          <div className="px-4 py-3 space-y-1">
            {[
              { href: "/", label: "Home" },
              { href: "/features", label: "Features" },
              { href: "/privacy", label: "Privacy" },
              { href: "/terms", label: "Terms" },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`block px-4 py-2 text-sm font-bold border-2 transition-all duration-100 uppercase tracking-wide
                  ${isActive(href)
                    ? "bg-black text-yellow-300 border-black dark:bg-yellow-300 dark:text-black dark:border-yellow-300"
                    : "text-black dark:text-yellow-300 border-transparent hover:bg-black hover:text-yellow-300 hover:border-black"
                  }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {label}
              </Link>
            ))}
            <a
              href="https://github.com/VITAP-Student-Project/vitap-student-website"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-4 py-2 text-sm font-bold border-2 border-transparent text-black dark:text-yellow-300 uppercase tracking-wide hover:bg-black hover:text-yellow-300 hover:border-black"
              onClick={() => setMobileMenuOpen(false)}
            >
              GitHub ↗
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
