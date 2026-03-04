"use client"

import { Download, Code, Star, Heart } from "lucide-react"
import { ContributorsSection } from "./contributors"

const ACCENT_COLORS = [
  "bg-yellow-300",
  "bg-pink-300",
  "bg-blue-300",
  "bg-green-300",
  "bg-orange-300",
  "bg-purple-300",
]

export default function HomePage() {
  return (
    <div className="bg-[#fffef0] dark:bg-zinc-950">

      {/* ── HERO ──────────────────────────────────────── */}
      <section className="min-h-screen flex items-center pt-16 border-b-2 border-black dark:border-yellow-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Text */}
            <div>
              {/* eyebrow label */}
              <div className="inline-block bg-pink-300 border-2 border-black px-3 py-1 text-xs font-black uppercase tracking-widest mb-6"
                style={{ boxShadow: "3px 3px 0px #000" }}>
                Open Source · Free Forever
              </div>

              <h1 className="text-5xl md:text-7xl font-black text-black dark:text-white leading-none mb-6 uppercase">
                Your Academic Life,{" "}
                <span className="bg-yellow-300 dark:bg-yellow-300 text-black px-2 inline-block border-2 border-black"
                  style={{ boxShadow: "4px 4px 0px #000" }}>
                  Simplified.
                </span>
              </h1>

              <p className="text-lg font-medium text-black dark:text-zinc-300 mb-8 border-l-4 border-black dark:border-yellow-300 pl-4">
                The VITAP Student App revolutionizes how VIT-AP students access academic information, track attendance, and stay organized — with real-time updates.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="https://play.google.com/store/apps/details?id=com.udhay.vitapstudentapp"
                  className="btn-primary-large">
                  <Download className="w-5 h-5 mr-2" />
                  Download App
                </a>
                <a href="https://github.com/VITAP-Student-Project/vitap_student_app"
                  className="btn-secondary-large">
                  <Code className="w-5 h-5 mr-2" />
                  View Source
                </a>
              </div>

              {/* Stats row */}
              <div className="mt-10 flex flex-wrap gap-4">
                {[
                  { label: "Open Source", value: "100%" },
                  { label: "Free to Use", value: "Always" },
                  { label: "Data Stored", value: "Locally" },
                ].map(({ label, value }) => (
                  <div key={label} className="bg-white dark:bg-zinc-800 border-2 border-black dark:border-yellow-300 px-4 py-3"
                    style={{ boxShadow: "3px 3px 0px #000" }}>
                    <p className="text-2xl font-black text-black dark:text-yellow-300">{value}</p>
                    <p className="text-xs font-bold uppercase tracking-wider text-zinc-600 dark:text-zinc-400">{label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Phone mockup */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="bg-black border-4 border-black p-2"
                  style={{ boxShadow: "8px 8px 0px #FFE500" }}>
                  <img
                    src="/home.png"
                    alt="VITAP Student App Screenshot"
                    className="w-64 h-auto"
                  />
                </div>
                {/* Decorative stickers */}
                <div className="absolute -top-5 -right-5 w-14 h-14 bg-yellow-300 border-2 border-black flex items-center justify-center text-2xl font-black"
                  style={{ boxShadow: "3px 3px 0px #000" }}>
                  📚
                </div>
                <div className="absolute -bottom-5 -left-5 w-12 h-12 bg-pink-300 border-2 border-black flex items-center justify-center text-xl font-black"
                  style={{ boxShadow: "3px 3px 0px #000" }}>
                  ⚡
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MARQUEE TICKER ───────────────────────────── */}
      <div className="overflow-hidden bg-black dark:bg-yellow-300 border-b-2 border-black dark:border-black py-3">
        <div className="flex animate-marquee whitespace-nowrap gap-0">
          {[...Array(3)].map((_, i) => (
            <span key={i} className="flex gap-0">
              {["OPEN SOURCE", "FREE FOREVER", "TRACK ATTENDANCE", "SMART TIMETABLE", "GRADE ANALYTICS", "SECURE & PRIVATE", "REAL-TIME DATA", "BUILT BY STUDENTS"].map((t) => (
                <span key={t} className="text-yellow-300 dark:text-black font-black text-sm uppercase tracking-widest px-8">
                  {t} <span className="text-pink-400 dark:text-pink-600 mx-2">★</span>
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      {/* ── FEATURES GRID ────────────────────────────── */}
      <section className="py-20 border-b-2 border-black dark:border-yellow-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-14">
            <div className="inline-block bg-blue-300 border-2 border-black px-3 py-1 text-xs font-black uppercase tracking-widest mb-4"
              style={{ boxShadow: "3px 3px 0px #000" }}>
              Features
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-black dark:text-white uppercase">Everything You Need</h2>
            <div className="w-24 h-2 bg-yellow-300 border border-black mt-3" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { emoji: "📚", title: "Academic Hub", desc: "Real-time attendance tracking, detailed timetables, grades, and performance insights all in one place.", bg: "bg-yellow-100" },
              { emoji: "⚡", title: "Smart Notifications", desc: "Never miss important class alerts, exam schedules, or university announcements.", bg: "bg-pink-100" },
              { emoji: "🌦️", title: "Live Utilities", desc: "Local weather updates, campus events, and quick access to useful student-made tools.", bg: "bg-blue-100" },
              { emoji: "🔐", title: "Secure & Private", desc: "Advanced encryption with platform-specific security measures to protect your academic data.", bg: "bg-green-100" },
              { emoji: "🎨", title: "Beautiful Design", desc: "Clean interface, responsive design, and intuitive navigation for the best user experience.", bg: "bg-orange-100" },
              { emoji: "📊", title: "Analytics", desc: "Comprehensive analytics and insights to track your academic progress and performance trends.", bg: "bg-purple-100" },
            ].map(({ emoji, title, desc, bg }) => (
              <div key={title}
                className={`${bg} dark:bg-zinc-800 p-7 border-2 border-black dark:border-zinc-600 cursor-default transition-all duration-100 hover:-translate-x-1 hover:-translate-y-1`}
                style={{ boxShadow: "4px 4px 0px #000" }}>
                <div className="text-4xl mb-4">{emoji}</div>
                <h3 className="text-xl font-black text-black dark:text-white mb-3 uppercase">{title}</h3>
                <p className="text-sm font-medium text-zinc-700 dark:text-zinc-300 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DEVELOPER ECOSYSTEM ──────────────────────── */}
      <section className="py-20 bg-white dark:bg-zinc-900 border-b-2 border-black dark:border-yellow-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-14">
            <div className="inline-block bg-green-300 border-2 border-black px-3 py-1 text-xs font-black uppercase tracking-widest mb-4"
              style={{ boxShadow: "3px 3px 0px #000" }}>
              Dev Ecosystem
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-black dark:text-white uppercase">Built for Developers</h2>
            <div className="w-24 h-2 bg-green-300 border border-black mt-3" />
          </div>

          <div className="grid md:grid-cols-2 gap-10 items-start">
            {/* Left: stack list */}
            <div>
              <h3 className="text-2xl font-black text-black dark:text-white mb-6 uppercase">Complete Dev Stack</h3>
              <div className="space-y-4">
                {[
                  { icon: "📱", label: "VITAP Student App", desc: "Flutter-based mobile application with modern UI and comprehensive student features", accent: "bg-yellow-300" },
                  { icon: "🔗", label: "Vtop API", desc: "FastAPI wrapper providing RESTful access to VTOP data with authentication and rate limiting", accent: "bg-pink-300" },
                  { icon: "🐍", label: "Vtop Client Library", desc: "Python library for programmatic VTOP portal interaction with session management", accent: "bg-blue-300" },
                  { icon: "🦀", label: "Rust Vtop Library", desc: "High-performance Rust library integrated with Flutter via flutter_rust_bridge", accent: "bg-orange-300" },
                ].map(({ icon, label, desc, accent }) => (
                  <div key={label} className="flex items-start gap-4 p-5 border-2 border-black dark:border-zinc-600 bg-[#fffef0] dark:bg-zinc-800"
                    style={{ boxShadow: "3px 3px 0px #000" }}>
                    <div className={`${accent} border-2 border-black w-10 h-10 flex items-center justify-center text-lg flex-shrink-0 font-bold`}>
                      {icon}
                    </div>
                    <div>
                      <h4 className="font-black text-black dark:text-white uppercase text-sm mb-1">{label}</h4>
                      <p className="text-sm font-medium text-zinc-600 dark:text-zinc-400">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                {[
                  { label: "App Repo", href: "https://github.com/VITAP-Student-Project/vitap_student_app" },
                  { label: "API Repo", href: "https://github.com/Udhay-Adithya/vit_ap_vtop_api" },
                  { label: "Python Lib", href: "https://github.com/Udhay-Adithya/vitap-vtop-client" },
                  { label: "Rust Lib", href: "https://docs.rs/crate/lib_vtop/latest" },
                ].map(({ label, href }) => (
                  <a key={label} href={href} className="btn-secondary text-sm py-2 px-4">{label}</a>
                ))}
              </div>
            </div>

            {/* Right: code block */}
            <div className="bg-zinc-900 dark:bg-black border-2 border-black p-0"
              style={{ boxShadow: "6px 6px 0px #000" }}>
              {/* Terminal header */}
              <div className="bg-zinc-800 dark:bg-zinc-900 border-b-2 border-black px-4 py-2 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500 border border-black" />
                <div className="w-3 h-3 rounded-full bg-yellow-400 border border-black" />
                <div className="w-3 h-3 rounded-full bg-green-500 border border-black" />
                <span className="ml-3 text-xs font-mono text-zinc-400">vtop_example.py</span>
              </div>
              <div className="p-6 font-mono text-sm text-green-400 leading-7">
                <div>
                  <span className="text-zinc-500"># Install the VTOP client library</span>
                </div>
                <div>
                  <span className="text-blue-400">pip install</span>{" "}
                  <span className="text-yellow-300">git+https://github.com/Udhay-Adithya/vitap-vtop-client.git</span>
                </div>
                <br />
                <div>
                  <span className="text-zinc-500"># Quick start example</span>
                </div>
                <div>
                  <span className="text-purple-400">from</span> vitap_vtop_client.client{" "}
                  <span className="text-purple-400">import</span> VtopClient
                </div>
                <br />
                <div>
                  <span className="text-blue-400">async with</span> VtopClient(reg_no, password){" "}
                  <span className="text-blue-400">as</span> client:
                </div>
                <div>&nbsp;&nbsp;&nbsp;&nbsp;attendance = <span className="text-blue-400">await</span>{" "}
                  client.<span className="text-yellow-300">get_attendance()</span>
                </div>
                <div>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-pink-400">print</span>(attendance)</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTRIBUTORS ─────────────────────────────── */}
      <ContributorsSection />

      {/* ── SUPPORT ──────────────────────────────────── */}
      <section className="py-20 bg-[#fffef0] dark:bg-zinc-950 border-b-2 border-black dark:border-yellow-300">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <div className="inline-block bg-pink-300 border-2 border-black px-3 py-1 text-xs font-black uppercase tracking-widest mb-4"
              style={{ boxShadow: "3px 3px 0px #000" }}>
              Support
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-black dark:text-white uppercase">Support the Project</h2>
            <div className="w-24 h-2 bg-pink-300 border border-black mt-3 mx-auto" />
            <p className="text-base font-medium text-zinc-700 dark:text-zinc-300 mt-6 max-w-2xl mx-auto">
              This app is built and maintained by a student, for students. If you've found it helpful, consider supporting in a small but meaningful way!
            </p>
          </div>

          {/* Star section */}
          <div className="bg-white dark:bg-zinc-900 border-2 border-black p-8 mb-6"
            style={{ boxShadow: "5px 5px 0px #000" }}>
            <h3 className="text-2xl font-black text-black dark:text-white uppercase mb-2">⭐ Star on GitHub</h3>
            <p className="text-sm font-medium text-zinc-600 dark:text-zinc-400 mb-6">
              The best (and completely free) way to support. It shows appreciation and helps others discover the project!
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              {[
                { label: "Star App Repo", href: "https://github.com/Udhay-Adithya/vit_ap_student_app" },
                { label: "Star API Repo", href: "https://github.com/Udhay-Adithya/vit_ap_vtop_api" },
                { label: "Star Client Repo", href: "https://github.com/Udhay-Adithya/vitap-vtop-client" },
              ].map(({ label, href }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                  className="btn-secondary inline-flex items-center text-sm">
                  <Star className="w-4 h-4 mr-2" />
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* Donate section */}
          <div className="bg-yellow-300 border-2 border-black p-8"
            style={{ boxShadow: "5px 5px 0px #000" }}>
            <h3 className="text-2xl font-black text-black uppercase mb-2">💛 Optional Donations</h3>
            <p className="text-sm font-medium text-zinc-700 mb-6">
              No pressure at all — this app will always be free. But if you'd like to chip in:
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://buymeacoffee.com/udhayxdw" target="_blank" rel="noopener noreferrer"
                className="btn-secondary inline-flex items-center text-sm">
                <Heart className="w-4 h-4 mr-2" />
                Buy Me a Coffee
              </a>
              <a href="upi://pay?pa=udhayxd@okaxis&pn=Udhay%20Adithya"
                className="btn-secondary inline-flex items-center text-sm">
                💳 Donate via UPI
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
