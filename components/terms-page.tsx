export default function TermsPage() {
  return (
    <section className="pt-24 pb-16 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-8">Terms and Conditions</h1>
        <p className="text-gray-600 dark:text-gray-300 mb-8">
          <strong>Effective Date:</strong> 2024-10-08
        </p>

        <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-6 mb-8">
          <p className="text-yellow-800 dark:text-yellow-200">
            These Terms and Conditions ("Terms") govern your use of the VIT-AP Student ("App"), developed by Udhay
            Adithya J. By using this App, you agree to comply with these Terms. If you do not agree with any part of
            these Terms, you must not use the App.
          </p>
        </div>

        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">1. Eligibility</h2>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
              <p className="text-gray-600 dark:text-gray-300">
                This App is intended solely for the students of VIT-AP University. To access the App, you must have
                valid VTOP credentials issued by VIT-AP University. Non-students of VIT-AP University are not authorised
                to use the App.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">2. Account Login</h2>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                The App uses VTOP credentials provided by VIT-AP University to authenticate users. You cannot create or
                modify your login credentials within the App. Any changes to your VTOP credentials must be made directly
                through VTOP, not through the App.
              </p>
              <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
                <p className="text-red-800 dark:text-red-200">
                  <strong>Important:</strong> You must not share your VTOP credentials with anyone. If your account is
                  compromised due to sharing credentials or unauthorised access, you are solely responsible for any
                  consequences.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">3. Data Collection and Use</h2>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2 mb-4">
                <li>
                  The App uses Firebase Analytics to collect anonymized usage data including:
                  <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                    <li>Screen navigation patterns</li>
                    <li>Interaction events</li>
                    <li>Aggregated user group information (joining year and branch)</li>
                  </ul>
                </li>
                <li>
                  Your full registration number is never collected or stored. Only derived properties (first 5 characters) are used for grouping in analytics.
                </li>
                <li>
                  By using the App, you agree to Google's{' '}
                  <a
                    href="https://policies.google.com/terms"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    Terms of Service
                  </a>{' '}
                  for Firebase.
                </li>
              </ul>
              <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
                <p className="text-red-800 dark:text-red-200">
                  <strong>Important:</strong> Your VTOP credentials are stored locally in encrypted form, and the App fetches academic data from the VTOP portal. The developer is not responsible for any inaccuracies in the academic data fetched from VTOP.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">4. Data Scraping Consent</h2>
            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6">
              <p className="text-blue-800 dark:text-blue-200">
                By using this App, you explicitly agree that your academic data will be scraped from the VTOP Portal for
                the purpose of displaying it in the App. The developer of the App acts solely as a service provider and
                is not responsible for any legal issues related to scraping data from the VTOP Portal. It is the user's
                responsibility to ensure their consent to this process by using the App.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">5. Limitation of Liability</h2>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                <li>
                  The App displays academic data fetched from the VTOP Portal. The developer is not responsible for
                  any inaccuracies or unavailability of the data on VTOP. For any issues with the data, users must
                  contact the <strong>Software Development Cell of VIT-AP University</strong>.
                </li>
                <li>
                  In the event of technical issues or bugs, users can report them using the in-app report feature.
                </li>
                <li>
                  If the VTOP portal is unavailable, the App will display locally stored data, but no new data can be
                  fetched until VTOP is operational again.
                </li>
              </ul>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              6. Changes to Terms and Conditions
            </h2>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
              <p className="text-gray-600 dark:text-gray-300">
                The developer reserves the right to update or modify these Terms at any time. Any changes will be
                communicated to users via an in-app notification. Continued use of the App after such updates
                constitutes acceptance of the modified Terms.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">7. Termination of Access</h2>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
              <p className="text-gray-600 dark:text-gray-300">
                The developer reserves the right to terminate or suspend access to the App for users who violate these Terms.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">8. Governing Law</h2>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
              <p className="text-gray-600 dark:text-gray-300">
                These Terms are governed by the laws of the state of Andhra Pradesh, India. Any legal disputes arising
                from the use of the App will be resolved under Indian jurisdiction.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">9. Contact Information</h2>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                For any queries, issues, or concerns related to the App, users must contact the developer directly:
              </p>
              <div className="space-y-2">
                <p className="text-gray-600 dark:text-gray-300">
                  <strong>Udhay Adithya J</strong>
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  <strong>Email:</strong> udhayxd@gmail.com
                </p>
              </div>
              <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4 mt-4">
                <p className="text-yellow-800 dark:text-yellow-200">
                  Users must not contact VIT-AP University or any third parties regarding issues with the App, as the
                  University is not responsible for the development or operation of the App.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}