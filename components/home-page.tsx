export default function HomePage() {
  return (
    <div>
      {/* Hero Section - Full Screen Height */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Text content */}
            <div className="text-center lg:text-left">
              <div className="animate-slide-up">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6">
                  Your Academic Life,
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {" "}
                    Simplified
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto lg:mx-0 leading-relaxed">
                  The VITAP Companion App revolutionizes how VIT-AP students access academic information, track
                  attendance, and stay organized with real-time updates.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
                  <a
                    href="https://github.com/Udhay-Adithya/vit_ap_student_app/releases"
                    className="modern-button-primary-large"
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Download App
                  </a>
                  <a
                    href="https://github.com/Udhay-Adithya/vit_ap_student_app"
                    className="modern-button-secondary-large"
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                    View Source
                  </a>
                </div>
              </div>
            </div>

            {/* Right side - App Screenshot */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur-2xl opacity-20 scale-105"></div>
                <div className="relative bg-gray-900 rounded-3xl p-2 shadow-2xl">
                  <img
                    src="/placeholder.svg?height=600&width=300"
                    alt="VITAP Companion App Screenshot"
                    className="w-72 h-auto rounded-2xl"
                  />
                </div>
                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg animate-bounce-subtle">
                  📚
                </div>
                <div
                  className="absolute -bottom-4 -left-4 w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white text-sm shadow-lg animate-bounce-subtle"
                  style={{ animationDelay: "0.5s" }}
                >
                  ⚡
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* App Preview Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Experience the Future of Student Apps
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">Designed with students, for students</p>
          </div>
          <div className="flex justify-center">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-2xl">
              <div className="text-center animate-bounce-subtle">
                <div className="w-32 h-60 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 rounded-3xl shadow-lg p-4 mx-auto mb-4">
                  <div className="bg-white dark:bg-gray-800 rounded-2xl h-full flex flex-col justify-between p-3">
                    <div className="h-4 bg-gray-200 dark:bg-gray-600 rounded mb-2"></div>
                    <div className="space-y-2">
                      <div className="h-2 bg-blue-300 dark:bg-blue-600 rounded"></div>
                      <div className="h-2 bg-green-300 dark:bg-green-600 rounded w-3/4"></div>
                      <div className="h-2 bg-purple-300 dark:bg-purple-600 rounded w-1/2"></div>
                    </div>
                  </div>
                </div>
                <p className="text-sm font-medium text-gray-700 dark:text-gray-300">Dashboard</p>
              </div>
              <div className="text-center animate-bounce-subtle" style={{ animationDelay: "0.1s" }}>
                <div className="w-32 h-60 bg-gradient-to-br from-green-100 to-blue-100 dark:from-green-900 dark:to-blue-900 rounded-3xl shadow-lg p-4 mx-auto mb-4">
                  <div className="bg-white dark:bg-gray-800 rounded-2xl h-full flex flex-col justify-between p-3">
                    <div className="h-4 bg-gray-200 dark:bg-gray-600 rounded mb-2"></div>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="h-8 bg-blue-200 dark:bg-blue-700 rounded"></div>
                      <div className="h-8 bg-green-200 dark:bg-green-700 rounded"></div>
                      <div className="h-8 bg-purple-200 dark:bg-purple-700 rounded"></div>
                      <div className="h-8 bg-yellow-200 dark:bg-yellow-700 rounded"></div>
                    </div>
                  </div>
                </div>
                <p className="text-sm font-medium text-gray-700 dark:text-gray-300">Timetable</p>
              </div>
              <div className="text-center animate-bounce-subtle" style={{ animationDelay: "0.3s" }}>
                <div className="w-32 h-60 bg-gradient-to-br from-yellow-100 to-orange-100 dark:from-yellow-900 dark:to-orange-900 rounded-3xl shadow-lg p-4 mx-auto mb-4">
                  <div className="bg-white dark:bg-gray-800 rounded-2xl h-full flex flex-col justify-between p-3">
                    <div className="h-4 bg-gray-200 dark:bg-gray-600 rounded mb-2"></div>
                    <div className="space-y-2">
                      <div className="w-16 h-16 bg-gray-200 dark:bg-gray-600 rounded-full mx-auto"></div>
                      <div className="h-2 bg-blue-300 dark:bg-blue-600 rounded"></div>
                      <div className="h-2 bg-green-300 dark:bg-green-600 rounded w-2/3 mx-auto"></div>
                    </div>
                  </div>
                </div>
                <p className="text-sm font-medium text-gray-700 dark:text-gray-300">Profile</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Remove Community Platform */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Everything You Need</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Powerful features designed for the modern student
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 dark:border-gray-700">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">📚</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Academic Hub</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Real-time attendance tracking, detailed timetables, grades, and performance insights all in one place.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 dark:border-gray-700">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Smart Notifications</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Never miss important class alerts, exam schedules, or university announcements.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 dark:border-gray-700">
              <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🌦️</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Live Utilities</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Local weather updates, campus events, and quick access to useful student-made tools.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 dark:border-gray-700">
              <div className="w-12 h-12 bg-red-100 dark:bg-red-900 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🔐</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Secure & Private</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Advanced encryption with platform-specific security measures to protect your academic data.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 dark:border-gray-700">
              <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🎨</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Beautiful Design</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Adaptive themes, responsive design, and intuitive navigation for the best user experience.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 dark:border-gray-700">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-4">
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
      <section className="py-20 bg-white dark:bg-gray-900">
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
                  <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mt-1">
                    <span className="text-sm font-bold text-blue-600 dark:text-blue-400">📱</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">VITAP Companion App</h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      Flutter-based mobile application with modern UI and comprehensive student features
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mt-1">
                    <span className="text-sm font-bold text-purple-600 dark:text-purple-400">🔗</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">VTOP API</h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      FastAPI wrapper providing RESTful access to VTOP data with authentication and rate limiting
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mt-1">
                    <span className="text-sm font-bold text-green-600 dark:text-green-400">🐍</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">VTOP Client Library</h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      Python library for programmatic VTOP portal interaction with session management
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href="https://github.com/Udhay-Adithya/vit_ap_student_app" className="modern-button-primary">
                  App Repository
                </a>
                <a href="https://github.com/Udhay-Adithya/vit_ap_vtop_api" className="modern-button-secondary">
                  API Repository
                </a>
                <a href="https://github.com/Udhay-Adithya/vitap-vtop-client" className="modern-button-secondary">
                  Python Library
                </a>
              </div>
            </div>
            <div className="bg-gray-900 dark:bg-gray-800 rounded-2xl p-8 text-green-400 font-mono text-sm border border-gray-700">
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

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">1000+</div>
              <div className="text-blue-100">Active Users</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">99.9%</div>
              <div className="text-blue-100">Uptime</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">Open</div>
              <div className="text-blue-100">Source</div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Support the Project</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            This project involves monthly hosting costs. Your support helps keep the app running and supports student
            innovation!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://www.buymeacoffee.com/udhayxd" className="modern-button-accent">
              ☕ Buy Me a Coffee
            </a>
            <a href="upi://pay?pa=udhayxd@okaxis&pn=Udhay%20Adithya" className="modern-button-success">
              💳 Donate via UPI
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
