import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "VITAP Companion App - Revolutionize Your Student Experience",
  description:
    "The ultimate student app for VIT-AP University. Access academic information, track attendance, view timetables, and stay organized with real-time updates.",
  keywords: "VIT-AP, VITAP, student app, VTOP, academic tracker, attendance, timetable, grades, university app",
  authors: [{ name: "Udhay Adithya J", email: "udhayxd@gmail.com" }],
  creator: "Udhay Adithya J",
  publisher: "Udhay Adithya J",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://vitap-companion.vercel.app",
    title: "VITAP Companion App - Revolutionize Your Student Experience",
    description:
      "The ultimate student app for VIT-AP University. Access academic information, track attendance, view timetables, and stay organized.",
    siteName: "VITAP Companion",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "VITAP Companion App",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "VITAP Companion App - Revolutionize Your Student Experience",
    description:
      "The ultimate student app for VIT-AP University. Access academic information, track attendance, view timetables, and stay organized.",
    images: ["/og-image.png"],
    creator: "@udhayxd",
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://vitap-companion.vercel.app" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "VITAP Companion App",
              description:
                "The ultimate student app for VIT-AP University students to access academic information, track attendance, and stay organized.",
              applicationCategory: "EducationalApplication",
              operatingSystem: ["iOS", "Android"],
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
              author: {
                "@type": "Person",
                name: "Udhay Adithya J",
                email: "udhayxd@gmail.com",
              },
              publisher: {
                "@type": "Person",
                name: "Udhay Adithya J",
              },
              downloadUrl: "https://github.com/Udhay-Adithya/vit_ap_student_app/releases",
              screenshot: "/app-screenshot.png",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.8",
                ratingCount: "1000",
              },
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
