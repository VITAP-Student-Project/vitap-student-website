export default function TermsPage() {
  return (
    <div className="bg-[#fffef0] dark:bg-zinc-950 min-h-screen">
      {/* Page header */}
      <section className="pt-24 pb-12 bg-pink-300 dark:bg-zinc-900 border-b-2 border-black dark:border-yellow-300">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="inline-block bg-black text-pink-300 border-2 border-black px-3 py-1 text-xs font-black uppercase tracking-widest mb-4"
            style={{ boxShadow: "3px 3px 0px #555" }}
          >
            Legal
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-black dark:text-white uppercase leading-none mb-4">
            Terms & Conditions
          </h1>
          <div className="w-24 h-2 bg-black dark:bg-pink-300 mb-4" />
          <p className="text-sm font-bold text-zinc-800 dark:text-zinc-400">
            <span className="bg-black text-white px-2 py-0.5 font-black text-xs uppercase">Effective Date:</span>{" "}
            October 8, 2024
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-8">

        {/* Intro banner */}
        <div
          className="bg-yellow-100 dark:bg-yellow-950 border-2 border-black p-6 border-l-8 border-l-yellow-500"
          style={{ boxShadow: "4px 4px 0px #000" }}
        >
          <p className="font-medium text-sm text-zinc-800 dark:text-zinc-200 leading-relaxed">
            These Terms and Conditions ("Terms") govern your use of the VIT-AP Student App, developed by Udhay Adithya J. By using this App, you agree to comply with these Terms. If you do not agree with any part of these Terms, you must not use the App.
          </p>
        </div>

        {/* Sections */}
        {[
          {
            num: "01",
            title: "Eligibility",
            accent: "bg-yellow-300",
            content: (
              <div className="border-2 border-black p-5 bg-white dark:bg-zinc-900" style={{ boxShadow: "3px 3px 0px #000" }}>
                <p className="text-sm font-medium text-zinc-700 dark:text-zinc-400">This App is intended solely for the students of VIT-AP University. To access the App, you must have valid VTOP credentials issued by VIT-AP University. Non-students are not authorised to use the App.</p>
              </div>
            ),
          },
          {
            num: "02",
            title: "Account Login",
            accent: "bg-pink-300",
            content: (
              <div className="space-y-4">
                <div className="border-2 border-black p-5 bg-white dark:bg-zinc-900" style={{ boxShadow: "3px 3px 0px #000" }}>
                  <p className="text-sm font-medium text-zinc-700 dark:text-zinc-400">The App uses VTOP credentials provided by VIT-AP University to authenticate users. You cannot create or modify your login credentials within the App. Any changes must be made directly through VTOP.</p>
                </div>
                <div className="bg-red-100 dark:bg-red-950 border-2 border-black border-l-8 border-l-red-500 p-5" style={{ boxShadow: "3px 3px 0px #000" }}>
                  <p className="text-sm font-bold text-red-800 dark:text-red-200"><span className="bg-red-500 text-white px-1.5 py-0.5 text-xs font-black uppercase mr-2">Important</span>You must not share your VTOP credentials with anyone. If your account is compromised due to sharing credentials or unauthorised access, you are solely responsible for any consequences.</p>
                </div>
              </div>
            ),
          },
          {
            num: "03",
            title: "Data Collection and Use",
            accent: "bg-blue-300",
            content: (
              <div className="space-y-4">
                <div className="border-2 border-black p-5 bg-white dark:bg-zinc-900" style={{ boxShadow: "3px 3px 0px #000" }}>
                  <ul className="space-y-3 text-sm font-medium text-zinc-700 dark:text-zinc-400">
                    <li className="flex gap-2"><span className="text-blue-500 font-black">—</span>Firebase Analytics collects anonymized usage data including screen navigation patterns, interaction events, and aggregated user group information.</li>
                    <li className="flex gap-2"><span className="text-blue-500 font-black">—</span>Your full registration number is never collected or stored. Only the first 5 characters are used for grouping in analytics.</li>
                    <li className="flex gap-2"><span className="text-blue-500 font-black">—</span>By using the App, you agree to Google's <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 underline font-bold">Terms of Service</a> for Firebase.</li>
                  </ul>
                </div>
                <div className="bg-red-100 dark:bg-red-950 border-2 border-black border-l-8 border-l-red-500 p-5" style={{ boxShadow: "3px 3px 0px #000" }}>
                  <p className="text-sm font-bold text-red-800 dark:text-red-200"><span className="bg-red-500 text-white px-1.5 py-0.5 text-xs font-black uppercase mr-2">Important</span>Your VTOP credentials are stored locally in encrypted form. The developer is not responsible for inaccuracies in academic data fetched from VTOP.</p>
                </div>
              </div>
            ),
          },
          {
            num: "04",
            title: "Data Scraping Consent",
            accent: "bg-green-300",
            content: (
              <div className="bg-blue-100 dark:bg-blue-950 border-2 border-black border-l-8 border-l-blue-500 p-6" style={{ boxShadow: "3px 3px 0px #000" }}>
                <p className="text-sm font-medium text-zinc-800 dark:text-zinc-200">By using this App, you explicitly agree that your academic data will be scraped from the VTOP Portal for the purpose of displaying it in the App. The developer acts solely as a service provider and is not responsible for any legal issues related to scraping data from the VTOP Portal.</p>
              </div>
            ),
          },
          {
            num: "05",
            title: "Limitation of Liability",
            accent: "bg-orange-300",
            content: (
              <div className="border-2 border-black p-5 bg-white dark:bg-zinc-900" style={{ boxShadow: "3px 3px 0px #000" }}>
                <ul className="space-y-3 text-sm font-medium text-zinc-700 dark:text-zinc-400">
                  {[
                    "The App displays academic data fetched from VTOP. The developer is not responsible for any inaccuracies or unavailability of the data on VTOP. For issues with data, users must contact the Software Development Cell of VIT-AP University.",
                    "In the event of technical issues or bugs, users can report them using the in-app report feature.",
                    "If the VTOP portal is unavailable, the App will display locally stored data, but no new data can be fetched until VTOP is operational again.",
                  ].map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="bg-orange-300 border border-black w-5 h-5 flex items-center justify-center text-xs font-black flex-shrink-0 mt-0.5">!</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ),
          },
          {
            num: "06",
            title: "Changes to Terms",
            accent: "bg-purple-300",
            content: (
              <div className="border-2 border-black p-5 bg-white dark:bg-zinc-900" style={{ boxShadow: "3px 3px 0px #000" }}>
                <p className="text-sm font-medium text-zinc-700 dark:text-zinc-400">The developer reserves the right to update or modify these Terms at any time. Any changes will be communicated via in-app notification. Continued use of the App after updates constitutes acceptance of the modified Terms.</p>
              </div>
            ),
          },
          {
            num: "07",
            title: "Termination of Access",
            accent: "bg-red-300",
            content: (
              <div className="border-2 border-black p-5 bg-white dark:bg-zinc-900" style={{ boxShadow: "3px 3px 0px #000" }}>
                <p className="text-sm font-medium text-zinc-700 dark:text-zinc-400">The developer reserves the right to terminate or suspend access to the App for users who violate these Terms.</p>
              </div>
            ),
          },
          {
            num: "08",
            title: "Governing Law",
            accent: "bg-yellow-300",
            content: (
              <div className="border-2 border-black p-5 bg-white dark:bg-zinc-900" style={{ boxShadow: "3px 3px 0px #000" }}>
                <p className="text-sm font-medium text-zinc-700 dark:text-zinc-400">These Terms are governed by the laws of the state of Andhra Pradesh, India. Any legal disputes arising from the use of the App will be resolved under Indian jurisdiction.</p>
              </div>
            ),
          },
          {
            num: "09",
            title: "Contact Information",
            accent: "bg-green-300",
            content: (
              <div className="border-2 border-black p-6 bg-white dark:bg-zinc-900 space-y-4" style={{ boxShadow: "3px 3px 0px #000" }}>
                <p className="text-sm font-medium text-zinc-700 dark:text-zinc-400">For any queries, issues, or concerns related to the App, contact the developer directly:</p>
                <div className="space-y-2">
                  <p className="font-black text-black dark:text-white uppercase">Udhay Adithya J</p>
                  <p className="text-sm font-medium">
                    <span className="font-black text-xs uppercase bg-green-300 border border-black px-1.5 py-0.5 mr-2">Email</span>
                    <a href="mailto:udhayxd@gmail.com" className="text-blue-600 dark:text-blue-400 underline font-bold">udhayxd@gmail.com</a>
                  </p>
                </div>
                <div className="bg-yellow-100 dark:bg-yellow-950 border-2 border-black border-l-4 border-l-yellow-500 p-4 mt-3">
                  <p className="text-xs font-bold text-yellow-800 dark:text-yellow-200">Users must not contact VIT-AP University or any third parties regarding issues with the App, as the University is not responsible for the development or operation of the App.</p>
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
