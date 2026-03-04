export default function PrivacyPage() {
  return (
    <div className="bg-[#fffef0] dark:bg-zinc-950 min-h-screen">
      {/* Page header */}
      <section className="pt-24 pb-12 bg-blue-300 dark:bg-zinc-900 border-b-2 border-black dark:border-yellow-300">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="inline-block bg-black text-blue-300 border-2 border-black px-3 py-1 text-xs font-black uppercase tracking-widest mb-4"
            style={{ boxShadow: "3px 3px 0px #555" }}
          >
            Legal
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-black dark:text-white uppercase leading-none mb-4">
            Privacy Policy
          </h1>
          <div className="w-24 h-2 bg-black dark:bg-blue-300 mb-4" />
          <p className="text-sm font-bold text-zinc-800 dark:text-zinc-400">
            <span className="bg-black text-white px-2 py-0.5 font-black text-xs uppercase">Effective Date:</span>{" "}
            October 8, 2024
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-8">

        {/* Intro banner */}
        <div
          className="bg-blue-100 dark:bg-blue-950 border-2 border-black p-6 border-l-8 border-l-blue-500"
          style={{ boxShadow: "4px 4px 0px #000" }}
        >
          <p className="font-medium text-sm text-zinc-800 dark:text-zinc-200 leading-relaxed">
            This Privacy Policy explains how your information is collected, used, and protected when you use the VITAP Student mobile application, developed by Udhay Adithya J, for the students of VIT-AP University. By using this App, you agree to the collection and use of information in accordance with this policy.
          </p>
        </div>

        {/* Sections */}
        {[
          {
            num: "01",
            title: "Information We Collect",
            accent: "bg-yellow-300",
            content: (
              <ul className="space-y-4 text-sm font-medium text-zinc-700 dark:text-zinc-400">
                <li className="flex gap-3">
                  <span className="bg-yellow-300 border border-black px-1.5 py-0.5 text-xs font-black uppercase flex-shrink-0 h-fit">VTOP</span>
                  <span><strong>VTOP Credentials:</strong> Used to fetch academic data. All data is stored locally on your device.</span>
                </li>
                <li className="flex gap-3">
                  <span className="bg-pink-300 border border-black px-1.5 py-0.5 text-xs font-black uppercase flex-shrink-0 h-fit">Analytics</span>
                  <span><strong>Usage Analytics:</strong> Firebase Analytics collects anonymized data including screen navigation events, interaction events, and anonymized user group info.</span>
                </li>
                <li className="flex gap-3">
                  <span className="bg-green-300 border border-black px-1.5 py-0.5 text-xs font-black uppercase flex-shrink-0 h-fit">Local</span>
                  <span>The App does <strong>not</strong> collect or store academic data on external servers.</span>
                </li>
              </ul>
            ),
          },
          {
            num: "02",
            title: "Data Usage",
            accent: "bg-pink-300",
            content: (
              <div className="space-y-4">
                <div className="border-2 border-black p-5 bg-white dark:bg-zinc-900" style={{ boxShadow: "3px 3px 0px #000" }}>
                  <h3 className="font-black text-sm uppercase mb-2 text-black dark:text-white">VTOP Data Fetching</h3>
                  <p className="text-sm font-medium text-zinc-700 dark:text-zinc-400">The App fetches data from the VTOP Portal to provide updated academic information. This data is used exclusively for displaying your academic information.</p>
                </div>
                <div className="border-2 border-black p-5 bg-white dark:bg-zinc-900" style={{ boxShadow: "3px 3px 0px #000" }}>
                  <h3 className="font-black text-sm uppercase mb-2 text-black dark:text-white">Analytics Usage</h3>
                  <ul className="space-y-1 text-sm font-medium text-zinc-700 dark:text-zinc-400">
                    {["Understand feature engagement", "Identify areas for improvement", "Analyze aggregated usage patterns (not individuals)", "Trend analysis across student cohorts"].map(i => (
                      <li key={i} className="flex items-start gap-2"><span className="text-pink-500 font-black">—</span>{i}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ),
          },
          {
            num: "03",
            title: "Data Storage & Security",
            accent: "bg-green-300",
            content: (
              <div className="space-y-4">
                {[
                  { title: "Local Storage", body: "All academic data is stored locally on your device. The App does not store or collect this data on external servers." },
                  { title: "Encryption", body: "On iOS, Keychain is used to securely store credentials. On Android, credentials are encrypted using AES encryption, and the AES secret key is further encrypted with RSA stored in the Android KeyStore." },
                  { title: "Firebase Analytics", body: "Usage data is processed through Firebase Analytics in anonymized form. No personally identifiable information is stored with analytics events." },
                ].map(({ title, body }) => (
                  <div key={title} className="border-2 border-black p-5 bg-white dark:bg-zinc-900" style={{ boxShadow: "3px 3px 0px #000" }}>
                    <h3 className="font-black text-sm uppercase mb-2 text-black dark:text-white">{title}</h3>
                    <p className="text-sm font-medium text-zinc-700 dark:text-zinc-400">{body}</p>
                  </div>
                ))}
              </div>
            ),
          },
          {
            num: "04",
            title: "Sharing of Information",
            accent: "bg-blue-300",
            content: (
              <div className="space-y-4">
                <div className="border-2 border-black p-5 bg-white dark:bg-zinc-900" style={{ boxShadow: "3px 3px 0px #000" }}>
                  <h3 className="font-black text-sm uppercase mb-2 text-black dark:text-white">No Third-Party Sharing</h3>
                  <p className="text-sm font-medium text-zinc-700 dark:text-zinc-400">We do not share any personal information with third parties. The only exception is Firebase Analytics, which processes anonymized usage data. By using the App, you agree to Google's <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 underline font-bold">Privacy Policy</a>.</p>
                </div>
                <div className="border-2 border-black p-5 bg-white dark:bg-zinc-900" style={{ boxShadow: "3px 3px 0px #000" }}>
                  <h3 className="font-black text-sm uppercase mb-2 text-black dark:text-white">Anonymization</h3>
                  <p className="text-sm font-medium text-zinc-700 dark:text-zinc-400">Analytics data contains no personally identifiable information. User group properties (joining year/branch) cannot be traced back to individual users.</p>
                </div>
              </div>
            ),
          },
          {
            num: "05",
            title: "User Responsibility",
            accent: "bg-orange-300",
            content: (
              <div className="border-2 border-black p-5 bg-white dark:bg-zinc-900" style={{ boxShadow: "3px 3px 0px #000" }}>
                <p className="text-sm font-medium text-zinc-700 dark:text-zinc-400">You are solely responsible for safeguarding your VTOP credentials. The App does not share or distribute these credentials. If you share your credentials with others and unauthorized access occurs, the App is not responsible for any misuse of your account.</p>
              </div>
            ),
          },
          {
            num: "06",
            title: "Data Retention",
            accent: "bg-purple-300",
            content: (
              <div className="space-y-4">
                {[
                  { title: "Analytics Data", body: "Firebase Analytics data is retained for up to 14 months before automatic deletion." },
                  { title: "VTOP Data", body: "Academic data is stored locally on your device and is not retained by the developer. If you delete the App, all locally stored data will be removed." },
                ].map(({ title, body }) => (
                  <div key={title} className="border-2 border-black p-5 bg-white dark:bg-zinc-900" style={{ boxShadow: "3px 3px 0px #000" }}>
                    <h3 className="font-black text-sm uppercase mb-2 text-black dark:text-white">{title}</h3>
                    <p className="text-sm font-medium text-zinc-700 dark:text-zinc-400">{body}</p>
                  </div>
                ))}
              </div>
            ),
          },
          {
            num: "07",
            title: "Legal Disclaimer on Data Scraping",
            accent: "bg-yellow-300",
            content: (
              <div className="bg-yellow-100 dark:bg-yellow-950 border-2 border-black border-l-8 border-l-yellow-500 p-6" style={{ boxShadow: "3px 3px 0px #000" }}>
                <p className="text-sm font-medium text-zinc-800 dark:text-zinc-200">The App fetches academic data from the VTOP Portal using scraping methods. By using the App, you agree to have your data fetched from VTOP for your convenience. The responsibility for using this method lies solely with the user. Any issues regarding the legality of VTOP's data usage must be addressed with VIT-AP University administration.</p>
              </div>
            ),
          },
          {
            num: "08",
            title: "Changes to This Policy",
            accent: "bg-pink-300",
            content: (
              <div className="border-2 border-black p-5 bg-white dark:bg-zinc-900" style={{ boxShadow: "3px 3px 0px #000" }}>
                <p className="text-sm font-medium text-zinc-700 dark:text-zinc-400">I reserve the right to make changes to this Privacy Policy at any time. Any updates will be communicated through in-app notifications. Continued use of the App following modifications indicates your acceptance of the revised policy.</p>
              </div>
            ),
          },
          {
            num: "09",
            title: "Governing Law",
            accent: "bg-blue-300",
            content: (
              <div className="border-2 border-black p-5 bg-white dark:bg-zinc-900" style={{ boxShadow: "3px 3px 0px #000" }}>
                <p className="text-sm font-medium text-zinc-700 dark:text-zinc-400">This Privacy Policy is governed by the laws of the Republic of India. Any disputes arising from the use of the App will be addressed in accordance with Indian law.</p>
              </div>
            ),
          },
          {
            num: "10",
            title: "Contact Information",
            accent: "bg-green-300",
            content: (
              <div className="border-2 border-black p-6 bg-white dark:bg-zinc-900" style={{ boxShadow: "3px 3px 0px #000" }}>
                <p className="text-sm font-medium text-zinc-700 dark:text-zinc-400 mb-4">For any questions or concerns regarding this Privacy Policy, please contact:</p>
                <div className="space-y-2">
                  <p className="font-black text-black dark:text-white uppercase">Udhay Adithya J</p>
                  <p className="text-sm font-medium text-zinc-700 dark:text-zinc-400">
                    <span className="font-black text-xs uppercase bg-green-300 border border-black px-1.5 py-0.5 mr-2">Email</span>
                    <a href="mailto:udhayxd@gmail.com" className="text-blue-600 dark:text-blue-400 underline font-bold">udhayxd@gmail.com</a>
                  </p>
                </div>
              </div>
            ),
          },
        ].map(({ num, title, accent, content }) => (
          <div key={num} className="space-y-4">
            <div className="flex items-center gap-4">
              <div
                className={`${accent} border-2 border-black px-3 py-1 text-sm font-black`}
                style={{ boxShadow: "2px 2px 0px #000" }}
              >
                {num}
              </div>
              <h2 className="text-xl md:text-2xl font-black text-black dark:text-white uppercase">{title}</h2>
            </div>
            {content}
          </div>
        ))}
      </div>
    </div>
  )
}
