"use client"

import { Code, ExternalLink, Users } from "lucide-react"
import { useEffect, useState } from "react"

interface Contributor {
  id: number
  login: string
  avatar_url: string
  html_url: string
  contributions: number
}

const CARD_ACCENTS = [
  "border-yellow-300",
  "border-pink-400",
  "border-blue-400",
  "border-green-400",
  "border-orange-400",
  "border-purple-400",
]

function ContributorsSection() {
  const [contributors, setContributors] = useState<Contributor[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchContributors = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/repos/VITAP-Student-Project/vitap-student-website/contributors"
        )
        if (response.ok) {
          const data = await response.json()
          setContributors(data)
        }
      } catch (error) {
        console.error("Failed to fetch contributors:", error)
      } finally {
        setLoading(false)
      }
    }
    fetchContributors()
  }, [])

  if (loading) {
    return (
      <section className="py-20 bg-white dark:bg-zinc-900 border-b-2 border-black dark:border-yellow-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-pulse">
              <div className="h-8 bg-zinc-200 dark:bg-zinc-700 w-64 mx-auto mb-4" />
              <div className="h-4 bg-zinc-200 dark:bg-zinc-700 w-96 mx-auto mb-8" />
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="flex flex-col items-center gap-3">
                    <div className="w-20 h-20 bg-zinc-200 dark:bg-zinc-700 border-2 border-black" />
                    <div className="h-4 bg-zinc-200 dark:bg-zinc-700 w-16" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  if (contributors.length === 0) return null

  return (
    <section className="py-20 bg-white dark:bg-zinc-900 border-b-2 border-black dark:border-yellow-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-14">
          <div
            className="inline-block bg-purple-300 border-2 border-black px-3 py-1 text-xs font-black uppercase tracking-widest mb-4"
            style={{ boxShadow: "3px 3px 0px #000" }}
          >
            Community
          </div>
          <div className="flex items-center gap-4 mb-2">
            <div
              className="bg-yellow-300 border-2 border-black w-12 h-12 flex items-center justify-center"
              style={{ boxShadow: "3px 3px 0px #000" }}
            >
              <Users className="w-6 h-6 text-black" />
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-black dark:text-white uppercase">
              Contributors
            </h2>
          </div>
          <div className="w-24 h-2 bg-purple-300 border border-black" />
          <p className="text-sm font-medium text-zinc-600 dark:text-zinc-400 mt-4 max-w-2xl border-l-4 border-purple-300 pl-4">
            This project is made possible by amazing people who contribute their time and effort.
            We're grateful for every contribution, big or small! 🙏
          </p>
        </div>

        {/* Contributors grid */}
        <div
          className="bg-[#fffef0] dark:bg-zinc-800 border-2 border-black p-8"
          style={{ boxShadow: "5px 5px 0px #000" }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {contributors.map((contributor, idx) => (
              <a
                key={contributor.id}
                href={contributor.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex flex-col items-center p-4 border-2 border-black dark:border-zinc-600 bg-white dark:bg-zinc-900 transition-all duration-100 hover:-translate-x-1 hover:-translate-y-1`}
                style={{ boxShadow: "3px 3px 0px #000" }}
              >
                <div className="relative mb-3">
                  <img
                    src={contributor.avatar_url}
                    alt={`${contributor.login}'s avatar`}
                    className={`w-16 h-16 border-2 border-black ${CARD_ACCENTS[idx % CARD_ACCENTS.length]} group-hover:border-yellow-300`}
                  />
                  {/* Contribution count badge */}
                  <div
                    className="absolute -top-2 -right-2 bg-yellow-300 border-2 border-black text-black text-xs font-black w-6 h-6 flex items-center justify-center"
                  >
                    {contributor.contributions > 99 ? "99+" : contributor.contributions}
                  </div>
                </div>
                <h3 className="font-black text-black dark:text-white text-center text-xs uppercase tracking-wide group-hover:text-yellow-500 dark:group-hover:text-yellow-300 transition-colors truncate w-full text-center">
                  @{contributor.login}
                </h3>
                <p className="text-xs font-medium text-zinc-500 dark:text-zinc-400 mt-1">
                  {contributor.contributions} commit{contributor.contributions !== 1 ? "s" : ""}
                </p>
                <ExternalLink className="w-3 h-3 text-zinc-400 mt-2 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-10 pt-8 border-t-2 border-black dark:border-zinc-700 text-center">
            <p className="text-sm font-medium text-zinc-600 dark:text-zinc-400 mb-4">
              Want to contribute? We welcome pull requests, bug reports, and feature suggestions!
            </p>
            <a
              href="https://github.com/VITAP-Student-Project/vitap-student-website"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center"
            >
              <Code className="w-4 h-4 mr-2" />
              Contribute on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export { ContributorsSection }
