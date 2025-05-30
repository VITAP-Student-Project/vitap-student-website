import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "VITAP Student - Revolutionize Your Student Experience",
  description:
    "The ultimate student app for VIT-AP University. Access academic information, track attendance, view timetables, and stay organized with real-time updates.",
  keywords: "VIT-AP, VITAP, student app, VTOP, academic tracker, attendance, timetable, grades, university app",
  authors: [{ name: "Udhay Adithya J", url: "https://udhay-adithya.me" }],
  creator: "Udhay Adithya J",
  publisher: "Udhay Adithya J",
  robots: "index, follow",
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
    other: [
      {
        rel: 'android-chrome-192x192',
        url: '/android-chrome-192x192.png',
        sizes: '192x192'
      },
      {
        rel: 'android-chrome-512x512',
        url: '/android-chrome-512x512.png',
        sizes: '512x512'
      }
    ]
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://vitap-companion.vercel.app",
    title: "VITAP Student - Revolutionize Your Student Experience",
    description:
      "The ultimate student app for VIT-AP University. Access academic information, track attendance, view timetables, and stay organized.",
    siteName: "VITAP Student",
    images: [
      {
        url: "app_icon.png",
        width: 1200,
        height: 630,
        alt: "VITAP Student App",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "VITAP Student App - Revolutionize Your Student Experience",
    description:
      "The ultimate student app for VIT-AP University. Access academic information, track attendance, view timetables, and stay organized.",
    images: ["/app_icon.png"],
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
              name: "VITAP Student App",
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
              screenshot: "/home.png",
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
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
