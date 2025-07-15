"use client"

import { Download, Code, Star, Heart } from "lucide-react"
import { ContributorsSection } from "./contributors"

export default function HomePage() {
  return (
    <div>
      {/* Hero Section - Minimal Design */}
      <section className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left side - Text content */}
            <div className="text-center lg:text-left">
              <div className="animate-slide-up">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6">
                  Your Academic Life, <span className="text-blue-600 dark:text-blue-400">Simplified</span>
                </h1>
                <p className="text-sm md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto lg:mx-0 leading-relaxed">
                  The VITAP Student App revolutionizes how VIT-AP students access academic information, track
                  attendance, and stay organized with real-time updates.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
                  <a href="https://play.google.com/store/apps/details?id=com.udhay.vitapstudentapp" className="btn-primary-large">
                    <Download className="w-5 h-5 mr-2" />
                    Download App
                  </a>
                  <a href="https://github.com/VITAP-Student-Project/vitap_student_app" className="btn-secondary-large">
                    <Code className="w-5 h-5 mr-2" />
                    View Source
                  </a>
                </div>
              </div>
            </div>

            {/* Right side - App Screenshot */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="bg-gray-900 dark:bg-gray-800 rounded-3xl p-2 shadow-2xl">
                  <img
                    src="/home.png"
                    alt="VITAP Student App Screenshot"
                    className="w-72 h-auto rounded-2xl"
                  />
                </div>
                {/* Simple floating elements */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-lg animate-bounce-subtle">
                  📚
                </div>
                <div
                  className="absolute -bottom-4 -left-4 w-10 h-10 bg-gray-600 dark:bg-gray-400 rounded-full flex items-center justify-center text-white text-sm shadow-lg animate-bounce-subtle"
                  style={{ animationDelay: "0.5s" }}
                >
                  ⚡
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Features Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Everything You Need</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Powerful features designed for the modern student
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 dark:border-gray-700">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">📚</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Academic Hub</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Real-time attendance tracking, detailed timetables, grades, and performance insights all in one place.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 dark:border-gray-700">
              <div className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Smart Notifications</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Never miss important class alerts, exam schedules, or university announcements.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 dark:border-gray-700">
              <div className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🌦️</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Live Utilities</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Local weather updates, campus events, and quick access to useful student-made tools.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 dark:border-gray-700">
              <div className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🔐</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Secure & Private</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Advanced encryption with platform-specific security measures to protect your academic data.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 dark:border-gray-700">
              <div className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🎨</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Beautiful Design</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Clean interface, responsive design, and intuitive navigation for the best user experience.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 dark:border-gray-700">
              <div className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Performance Analytics</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Comprehensive analytics and insights to track your academic progress and performance trends.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Developer Ecosystem Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Built for Developers</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Comprehensive tools and APIs for the VITAP ecosystem
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Complete Development Stack</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-8 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mt-1">
                    <span className="text-sm font-bold text-blue-600 dark:text-blue-400">📱</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">VITAP Student App</h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      Flutter-based mobile application with modern UI and comprehensive student features
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-8 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center mt-1">
                    <span className="text-sm font-bold text-gray-600 dark:text-gray-400">🔗</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Vtop API</h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      FastAPI wrapper providing RESTful access to VTOP data with authentication and rate limiting
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-8 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center mt-1">
                    <span className="text-sm font-bold text-gray-600 dark:text-gray-400">🐍</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Vtop Client Library</h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      Python library for programmatic VTOP portal interaction with session management
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-8 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center mt-1">
                    <span className="text-sm font-bold text-orange-600 dark:text-orange-400">🦀</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Rust Vtop Library</h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      High-performance Rust library integrated with Flutter via flutter_rust_bridge for native mobile performance
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href="https://github.com/VITAP-Student-Project/vitap_student_app" className="btn-secondary">
                  App Repository
                </a>
                <a href="https://github.com/Udhay-Adithya/vit_ap_vtop_api" className="btn-secondary">
                  API Repository
                </a>
                <a href="https://github.com/Udhay-Adithya/vitap-vtop-client" className="btn-secondary">
                  Python Library
                </a>
                <a href="https://docs.rs/crate/lib_vtop/latest" className="btn-secondary">
                  Rust Library
                </a>
              </div>
            </div>
            <div className="bg-gray-900 dark:bg-gray-800 rounded-xl p-8 text-green-400 font-mono text-sm border border-gray-700">
              <div className="mb-4">
                <span className="text-gray-500"># Install the VTOP client library</span>
                <br />
                <span className="text-blue-400">pip install</span>{" "}
                git+https://github.com/Udhay-Adithya/vitap-vtop-client.git
              </div>
              <div className="mb-4">
                <span className="text-gray-500"># Quick start example</span>
                <br />
                <span className="text-purple-400">from</span> vitap_vtop_client.client{" "}
                <span className="text-purple-400">import</span> VtopClient
                <br />
                <br />
                <span className="text-blue-400">async with</span> VtopClient(reg_no, password){" "}
                <span className="text-blue-400">as</span> client:
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;attendance = <span className="text-blue-400">await</span>{" "}
                client.get_attendance()
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-400">print</span>(attendance)
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contributors Section */}
      <ContributorsSection />

      {/* Support/Donation Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Support the Project</h2>
          <p className="text-base md:text-xl text-gray-600 dark:text-gray-300 mb-8">
            This app is built and maintained by a student, with the goal of helping others. If you’ve found it helpful,
            consider supporting in a small but meaningful way!
          </p>

          <div className="bg-white dark:bg-gray-800 rounded-xl p-8 mb-8 border border-gray-200 dark:border-gray-700">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Star the Project on GitHub</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              The best (and completely free) way to support this project is by giving it a star on GitHub. It shows appreciation and helps others discover the project too!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://github.com/Udhay-Adithya/vit_ap_student_app"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary inline-flex items-center"
              >
                <Star className="w-5 h-5 mr-2" />
                Star App Repository
              </a>
              <a
                href="https://github.com/Udhay-Adithya/vit_ap_vtop_api"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary inline-flex items-center"
              >
                <Star className="w-5 h-5 mr-2" />
                Star API Repository
              </a>
              <a
                href="https://github.com/Udhay-Adithya/vitap-vtop-client"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary inline-flex items-center"
              >
                <Star className="w-5 h-5 mr-2" />
                Star Client Repository
              </a>
            </div>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-8 border border-blue-200 dark:border-blue-800">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Optional Donations</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              There’s absolutely no pressure to donate, this app will always be free to use. But if you’d still like to support the project financially, here are a couple of ways:
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://buymeacoffee.com/udhayxdw"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary inline-flex items-center"
              >
                <Heart className="w-5 h-5 mr-2" />
                Buy Me a Coffee
              </a>
              <a
                href="upi://pay?pa=udhayxd@okaxis&pn=Udhay%20Adithya"
                className="btn-secondary inline-flex items-center"
              >
                💳 Donate via UPI
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
