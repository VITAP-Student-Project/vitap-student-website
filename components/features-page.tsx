export default function FeaturesPage() {
  return (
    <div className="bg-[#fffef0] dark:bg-zinc-950 min-h-screen">
      {/* Page header */}
      <section className="pt-24 pb-12 border-b-2 border-black dark:border-yellow-300 bg-yellow-300 dark:bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="inline-block bg-black text-yellow-300 border-2 border-black px-3 py-1 text-xs font-black uppercase tracking-widest mb-4"
            style={{ boxShadow: "3px 3px 0px #555" }}
          >
            All Features
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-black dark:text-white uppercase leading-none mb-4">
            Features
          </h1>
          <div className="w-24 h-2 bg-black dark:bg-yellow-300 mb-4" />
          <p className="text-base font-bold text-zinc-800 dark:text-zinc-300 max-w-2xl border-l-4 border-black dark:border-yellow-300 pl-4">
            Discover all the powerful features that make VITAP Student the ultimate student app.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">

        {/* ── ACADEMIC HUB ────────────────────────────── */}
        <div>
          <div className="flex items-center gap-4 mb-10">
            <div
              className="bg-yellow-300 border-2 border-black px-4 py-2 text-2xl font-black border-r-0"
              style={{ boxShadow: "4px 4px 0px #000" }}
            >
              📚
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-black dark:text-white uppercase border-b-4 border-yellow-300 pb-1">
              Academic Hub
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { title: "Real-time Attendance", desc: "Track your attendance across all subjects with real-time updates and detailed analytics.", accent: "bg-yellow-100 dark:bg-yellow-950" },
              { title: "Smart Timetable", desc: "View your class schedule with intelligent notifications and conflict detection.", accent: "bg-pink-100 dark:bg-pink-950" },
              { title: "Grade Analytics", desc: "Comprehensive grade tracking with CGPA calculations and performance trends.", accent: "bg-blue-100 dark:bg-blue-950" },
              { title: "Performance Insights", desc: "Detailed analytics and insights to help you understand your academic progress.", accent: "bg-green-100 dark:bg-green-950" },
              { title: "Exam Schedules", desc: "Stay updated with exam dates, timings, and venue information.", accent: "bg-orange-100 dark:bg-orange-950" },
              { title: "Course Materials", desc: "Access course materials, assignments, and important announcements.", accent: "bg-purple-100 dark:bg-purple-950" },
            ].map(({ title, desc, accent }) => (
              <div
                key={title}
                className={`${accent} p-6 border-2 border-black dark:border-zinc-600 transition-all duration-100 hover:-translate-x-1 hover:-translate-y-1`}
                style={{ boxShadow: "4px 4px 0px #000" }}
              >
                <h3 className="font-black text-lg text-black dark:text-white uppercase mb-3">{title}</h3>
                <p className="text-sm font-medium text-zinc-700 dark:text-zinc-400 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── SMART UTILITIES ─────────────────────────── */}
        <div>
          <div className="flex items-center gap-4 mb-10">
            <div
              className="bg-blue-300 border-2 border-black px-4 py-2 text-2xl font-black border-r-0"
              style={{ boxShadow: "4px 4px 0px #000" }}
            >
              ⚡
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-black dark:text-white uppercase border-b-4 border-blue-300 pb-1">
              Smart Utilities
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {[
              { emoji: "🌦️", label: "Weather", desc: "Live local weather updates", bg: "bg-blue-200 dark:bg-blue-950" },
              { emoji: "📅", label: "Events", desc: "Campus event notifications", bg: "bg-pink-200 dark:bg-pink-950" },
              { emoji: "🔔", label: "Alerts", desc: "Class and exam alerts", bg: "bg-yellow-200 dark:bg-yellow-950" },
              { emoji: "🛠️", label: "Tools", desc: "Student-made utilities", bg: "bg-green-200 dark:bg-green-950" },
            ].map(({ emoji, label, desc, bg }) => (
              <div
                key={label}
                className={`${bg} border-2 border-black p-6 text-center transition-all duration-100 hover:-translate-x-1 hover:-translate-y-1`}
                style={{ boxShadow: "4px 4px 0px #000" }}
              >
                <div className="text-4xl mb-3">{emoji}</div>
                <h3 className="font-black text-black dark:text-white uppercase mb-1">{label}</h3>
                <p className="text-xs font-medium text-zinc-700 dark:text-zinc-400">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── SECURITY ─────────────────────────────────── */}
        <div>
          <div className="flex items-center gap-4 mb-10">
            <div
              className="bg-green-300 border-2 border-black px-4 py-2 text-2xl font-black border-r-0"
              style={{ boxShadow: "4px 4px 0px #000" }}
            >
              🔐
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-black dark:text-white uppercase border-b-4 border-green-300 pb-1">
              Security &amp; Privacy
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div
              className="bg-white dark:bg-zinc-900 border-2 border-black p-8 transition-all duration-100 hover:-translate-x-1 hover:-translate-y-1"
              style={{ boxShadow: "4px 4px 0px #000" }}
            >
              <h3 className="font-black text-xl text-black dark:text-white uppercase mb-5 border-b-2 border-green-300 pb-2">
                Data Encryption
              </h3>
              <ul className="space-y-3">
                {[
                  "iOS Keychain for secure credential storage",
                  "AES encryption with RSA key protection on Android",
                  "Local data storage with no external servers",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm font-medium text-zinc-700 dark:text-zinc-400">
                    <span className="mt-0.5 w-5 h-5 bg-green-300 border border-black flex items-center justify-center text-xs font-black flex-shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div
              className="bg-white dark:bg-zinc-900 border-2 border-black p-8 transition-all duration-100 hover:-translate-x-1 hover:-translate-y-1"
              style={{ boxShadow: "4px 4px 0px #000" }}
            >
              <h3 className="font-black text-xl text-black dark:text-white uppercase mb-5 border-b-2 border-green-300 pb-2">
                Privacy Protection
              </h3>
              <ul className="space-y-3">
                {[
                  "No data sharing with third parties",
                  "Transparent open-source codebase",
                  "Compliance with privacy regulations",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm font-medium text-zinc-700 dark:text-zinc-400">
                    <span className="mt-0.5 w-5 h-5 bg-green-300 border border-black flex items-center justify-center text-xs font-black flex-shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
