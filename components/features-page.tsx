export default function FeaturesPage() {
  return (
    <section className="pt-24 pb-16 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">Features</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Discover all the powerful features that make VITAP Student the ultimate student app
          </p>
        </div>

        <div className="space-y-20">
          {/* Academic Features */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">📚 Academic Hub</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
                <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-3">Real-time Attendance</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Track your attendance across all subjects with real-time updates and detailed analytics.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
                <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-3">Smart Timetable</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  View your class schedule with intelligent notifications and conflict detection.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
                <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-3">Grade Analytics</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Comprehensive grade tracking with CGPA calculations and performance trends.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
                <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-3">Performance Insights</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Detailed analytics and insights to help you understand your academic progress.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
                <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-3">Exam Schedules</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Stay updated with exam dates, timings, and venue information.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
                <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-3">Course Materials</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Access course materials, assignments, and important announcements.
                </p>
              </div>
            </div>
          </div>

          {/* Utility Features */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">⚡ Smart Utilities</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm text-center border border-gray-100 dark:border-gray-700">
                <div className="text-3xl mb-3">🌦️</div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Weather</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">Live local weather updates</p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm text-center border border-gray-100 dark:border-gray-700">
                <div className="text-3xl mb-3">📅</div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Events</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">Campus event notifications</p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm text-center border border-gray-100 dark:border-gray-700">
                <div className="text-3xl mb-3">🔔</div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Alerts</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">Class and exam alerts</p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm text-center border border-gray-100 dark:border-gray-700">
                <div className="text-3xl mb-3">🛠️</div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Tools</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">Student-made utilities</p>
              </div>
            </div>
          </div>

          {/* Security Features */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">🔐 Security & Privacy</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
                <h3 className="font-semibold text-xl text-gray-900 dark:text-white mb-4">Data Encryption</h3>
                <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                  <li>• iOS Keychain for secure credential storage</li>
                  <li>• AES encryption with RSA key protection on Android</li>
                  <li>• Local data storage with no external servers</li>
                </ul>
              </div>
              <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
                <h3 className="font-semibold text-xl text-gray-900 dark:text-white mb-4">Privacy Protection</h3>
                <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                  <li>• No data sharing with third parties</li>
                  <li>• Transparent open-source codebase</li>
                  <li>• Compliance with privacy regulations</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
