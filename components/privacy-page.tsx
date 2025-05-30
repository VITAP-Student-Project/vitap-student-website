export default function PrivacyPage() {
  return (
    <section className="pt-24 pb-16 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-8">Privacy Policy</h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            <strong>Effective Date:</strong> 2024-10-08
          </p>

          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6 mb-8">
            <p className="text-blue-800 dark:text-blue-200">
              This Privacy Policy explains how your information is collected, used, and protected when you use the VITAP Student mobile application (the "App"), developed by Udhay Adithya J, for the students of VIT-AP University. By using this App, you agree to the collection and use of information in accordance with this policy.
            </p>
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">1. Information We Collect</h2>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                  <li>
                    <strong>VTOP Credentials:</strong> You log into the App using your VTOP credentials (username and
                    password). These credentials are used to fetch academic data from the VTOP Portal. All data is stored
                    locally on your device.
                  </li>
                  <li>
                    <strong>Usage Analytics:</strong> We use Firebase Analytics to collect anonymized usage data including:
                    <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                      <li>Screen navigation events (pages visited)</li>
                      <li>Interaction events (button clicks/taps)</li>
                      <li>Anonymized user group information (joining year and branch derived from your registration number)</li>
                    </ul>
                  </li>
                  <li>
                    <strong>No Data Collected for Academic Access:</strong> The App does not collect or store any
                    academic data fetched from VTOP on external servers. All data is stored locally on your device.
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">2. Data Usage</h2>
              <div className="space-y-4">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
                  <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-3">VTOP Data Fetching</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    The App fetches data from the VTOP Portal to provide you with updated information on your academic
                    performance, timetable, attendance, grades, and other university-related data. This data is used
                    exclusively for the purpose of displaying your academic information on the App.
                  </p>
                </div>

                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
                  <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-3">Analytics</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">Usage data is collected to:</p>
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
                    <li>Understand feature engagement and user behavior</li>
                    <li>Identify areas for app improvement</li>
                    <li>Analyze aggregated usage patterns (not individual users)</li>
                    <li>Anonymized group data (joining year/branch) helps identify trends across student cohorts</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">3. Data Storage and Security</h2>
              <div className="space-y-4">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
                  <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-3">Local Storage</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    All academic data fetched from VTOP is stored <strong>locally on your device</strong>. The App does
                    not store or collect this data on external servers.
                  </p>
                </div>

                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
                  <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-3">Encryption</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Your VTOP credentials are stored in encrypted format:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
                    <li>
                      On iOS, <strong>Keychain</strong> is used to securely store the credentials.
                    </li>
                    <li>
                      On Android, your credentials are encrypted using <strong>AES encryption</strong>, and the AES
                      secret key is further encrypted with <strong>RSA</strong> stored in the{" "}
                      <strong>Android KeyStore</strong>.
                    </li>
                  </ul>
                </div>

                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
                  <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-3">Firebase Analytics</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Usage data is processed through Firebase Analytics in anonymized form. No personally identifiable
                    information is stored with analytics events.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">4. Sharing of Information</h2>
              <div className="space-y-4">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
                  <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-3">No Third-Party Sharing</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    We do not share any of your personal information with third parties. The only exception is Firebase
                    Analytics, which processes anonymized usage data. By using the App, you agree to Google's{" "}
                    <a
                      href="https://policies.google.com/privacy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      Privacy Policy
                    </a>.
                  </p>
                </div>

                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
                  <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-3">Anonymization</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Analytics data contains no personally identifiable information. User group properties (joining
                    year/branch) cannot be traced back to individual users.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">5. User Responsibility</h2>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
                <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-3">
                  Credentials Responsibility
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  You are solely responsible for safeguarding your VTOP credentials. The App does not share or
                  distribute these credentials. If you share your credentials with others and unauthorized access
                  occurs, the App is not responsible for any misuse of your account.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">6. Data Retention</h2>
              <div className="space-y-4">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
                  <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-3">Analytics Data</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Firebase Analytics data is retained for up to <strong>14 months</strong> before automatic deletion.
                  </p>
                </div>

                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
                  <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-3">VTOP Data</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Academic data fetched from VTOP is stored locally on your device and is not retained by the
                    developer. If you delete the App, all locally stored data will be removed.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                7. Legal Disclaimer on Data Scraping
              </h2>
              <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-6">
                <p className="text-yellow-800 dark:text-yellow-200">
                  The App fetches academic data from the VTOP Portal using scraping methods. By using the App, you agree
                  to have your data fetched from VTOP for your convenience. The responsibility for using this method
                  lies solely with the user. The App merely serves as a service to make your data accessible in a
                  user-friendly way. Any issues regarding the legality or terms of VTOP's data usage must be addressed
                  with the VIT-AP University administration.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                8. Changes to this Privacy Policy
              </h2>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
                <p className="text-gray-600 dark:text-gray-300">
                  I reserve the right to make changes to this Privacy Policy at any time. Any updates will be
                  communicated through in-app notifications. Continued use of the App following any modifications
                  indicates your acceptance of the revised policy.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">9. Governing Law</h2>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
                <p className="text-gray-600 dark:text-gray-300">
                  This Privacy Policy is governed by the laws of the Republic of India. Any disputes or issues arising
                  from the use of the App will be addressed in accordance with Indian law.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">10. Contact Information</h2>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  For any questions or concerns regarding this Privacy Policy, please contact me at:
                </p>
                <div className="space-y-2">
                  <p className="text-gray-600 dark:text-gray-300">
                    <strong>Udhay Adithya J</strong>
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    <strong>Email:</strong> udhayxd@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}