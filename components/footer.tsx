import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <Link href="/" className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center">
                <img
                  src="/app_icon.png"
                  alt="VITAP Student Logo"
                  className="w-8 h-8 rounded-lg object-contain"
                />
              </div>
              <span className="font-normal text-xl">VITAP Student</span>
            </Link>
            <p className="text-gray-400 mb-6 max-w-md">
              Revolutionizing the student experience at VIT-AP University through innovative technology and
              student-focused development.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Projects</h3>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a
                  href="https://github.com/Udhay-Adithya/vit_ap_student_app"
                  className="hover:text-white transition-colors"
                >
                  Vitap Student
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Udhay-Adithya/vit_ap_vtop_api"
                  className="hover:text-white transition-colors"
                >
                  Vitap Vtop Api
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Udhay-Adithya/vitap-vtop-client"
                  className="hover:text-white transition-colors"
                >
                  Vtop Client
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Legal</h3>
            <ul className="space-y-3 text-gray-400">
              <li>
                <Link href="/privacy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <a
                  href="https://github.com/Udhay-Adithya/vit_ap_student_app/blob/main/LICENSE"
                  className="hover:text-white transition-colors"
                >
                  MIT License
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 dark:border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-400 text-sm mt-2">
            © 2025 VITAP Student. Developed by{" "}
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
