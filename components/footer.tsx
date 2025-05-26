"use client"

interface FooterProps {
  onPageChange: (page: "home" | "features" | "privacy" | "terms") => void
}

export default function Footer({ onPageChange }: FooterProps) {
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center">
                <img
                  src="/app_icon.png"
                  alt="VITAP Companion Logo"
                  className="w-8 h-8 rounded-lg object-contain"
                />
              </div>
              <span className="font-bold text-xl">VITAP Companion</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Revolutionizing the student experience at VIT-AP University through innovative technology and
              student-focused development.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/Udhay-Adithya/vit_ap_student_app"
                className="w-10 h-10 bg-gray-800 dark:bg-gray-700 rounded-lg flex items-center justify-center hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Projects</h3>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a
                  href="https://github.com/Udhay-Adithya/vit_ap_student_app"
                  className="hover:text-white transition-colors"
                >
                  Mobile App
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Udhay-Adithya/vit_ap_vtop_api"
                  className="hover:text-white transition-colors"
                >
                  VTOP API
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Udhay-Adithya/vitap-vtop-client"
                  className="hover:text-white transition-colors"
                >
                  Python Client
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Legal</h3>
            <ul className="space-y-3 text-gray-400">
              <li>
                <button onClick={() => onPageChange("privacy")} className="hover:text-white transition-colors">
                  Privacy Policy
                </button>
              </li>
              <li>
                <button onClick={() => onPageChange("terms")} className="hover:text-white transition-colors">
                  Terms & Conditions
                </button>
              </li>
              <li>
                <a
                  href="https://github.com/Udhay-Adithya/vit_ap_student_app/blob/main/LICENSE"
                  className="hover:text-white transition-colors"
                >
                  GPL v3.0 License
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 dark:border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 VITAP Companion App. Developed by{" "}
            <a href="mailto:udhayxd@gmail.com" className="text-blue-400 hover:text-blue-300 transition-colors">
              Udhay Adithya J
            </a>
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Not affiliated with VIT-AP University. Made with ❤️ for fellow students.
          </p>
        </div>
      </div>
    </footer>
  )
}
