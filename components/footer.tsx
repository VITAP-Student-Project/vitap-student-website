import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-black dark:bg-zinc-950 text-white border-t-2 border-black dark:border-yellow-300">
      {/* Top accent bar */}
      <div className="flex h-2">
        <div className="flex-1 bg-yellow-300" />
        <div className="flex-1 bg-pink-400" />
        <div className="flex-1 bg-blue-400" />
        <div className="flex-1 bg-green-400" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6 group">
              <div className="w-10 h-10 border-2 border-yellow-300 flex items-center justify-center bg-zinc-900"
                style={{ boxShadow: "3px 3px 0px #FFE500" }}>
                <img src="/app_icon.png" alt="VITAP Student Logo" className="w-7 h-7 object-contain" />
              </div>
              <span className="font-black text-xl text-white uppercase tracking-tight group-hover:text-yellow-300 transition-colors">
                VITAP Student
              </span>
            </Link>
            <p className="text-zinc-400 text-sm font-medium max-w-sm leading-relaxed border-l-2 border-yellow-300 pl-4">
              Revolutionizing the student experience at VIT-AP University through innovative technology and student-focused development.
            </p>
            {/* Social */}
            <div className="flex gap-3 mt-6">
              <a href="https://github.com/VITAP-Student-Project/vitap-student-website"
                target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 border-2 border-zinc-700 bg-zinc-800 flex items-center justify-center text-white hover:bg-yellow-300 hover:text-black hover:border-yellow-300 transition-all duration-100"
                style={{ boxShadow: "2px 2px 0px #333" }}>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Projects */}
          <div>
            <h3 className="font-black text-sm uppercase tracking-widest text-yellow-300 mb-5 border-b-2 border-yellow-300 pb-2">Projects</h3>
            <ul className="space-y-3">
              {[
                { label: "Vitap Student", href: "https://github.com/VITAP-Student-Project/vitap_student_app/" },
                { label: "Vitap Vtop Api", href: "https://github.com/Udhay-Adithya/vit_ap_vtop_api" },
                { label: "Vtop Client", href: "https://github.com/Udhay-Adithya/vitap-vtop-client" },
                { label: "Vtop Rust Library", href: "https://github.com/VITAP-Student-Project/vitap_student_app/tree/main/lib/src/rust" },
              ].map(({ label, href }) => (
                <li key={label}>
                  <a href={href} className="text-sm font-medium text-zinc-400 hover:text-yellow-300 transition-colors hover:pl-2 duration-100 flex items-center gap-1">
                    <span className="text-zinc-700">→</span> {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-black text-sm uppercase tracking-widest text-pink-300 mb-5 border-b-2 border-pink-300 pb-2">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/privacy" className="text-sm font-medium text-zinc-400 hover:text-pink-300 transition-colors flex items-center gap-1">
                  <span className="text-zinc-700">→</span> Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm font-medium text-zinc-400 hover:text-pink-300 transition-colors flex items-center gap-1">
                  <span className="text-zinc-700">→</span> Terms & Conditions
                </Link>
              </li>
              <li>
                <a href="https://github.com/Udhay-Adithya/vit_ap_student_app/blob/main/LICENSE"
                  className="text-sm font-medium text-zinc-400 hover:text-pink-300 transition-colors flex items-center gap-1">
                  <span className="text-zinc-700">→</span> MIT License
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t-2 border-zinc-800 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-zinc-500 text-xs font-medium uppercase tracking-wider">
            © 2025 VITAP Student — Developed by{" "}
            <a href="mailto:udhayxd@gmail.com" className="text-yellow-300 hover:text-yellow-200 transition-colors">
              Udhay Adithya J
            </a>
          </p>
          <p className="text-zinc-600 text-xs font-medium uppercase tracking-wider">
            Not affiliated with VIT-AP University · Made with ❤️ for students
          </p>
        </div>
      </div>
    </footer>
  )
}
