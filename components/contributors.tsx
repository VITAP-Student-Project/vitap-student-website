"use client"

import { Download, Code, Star, Heart, Users, ExternalLink } from "lucide-react"
import { useEffect, useState } from "react"

// Contributors component
function ContributorsSection() {
    const [contributors, setContributors] = useState<Contributor[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchContributors = async () => {
            try {
                const response = await fetch(
                    'https://api.github.com/repos/VITAP-Student-Project/vitap-student-website/contributors'
                )
                if (response.ok) {
                    const data = await response.json()
                    setContributors(data)
                }
            } catch (error) {
                console.error('Failed to fetch contributors:', error)
            } finally {
                setLoading(false)
            }
        }

        fetchContributors()
    }, [])

    if (loading) {
        return (
            <section className="py-20 bg-gray-50 dark:bg-gray-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <div className="animate-pulse">
                            <div className="h-8 bg-gray-300 dark:bg-gray-700 rounded w-64 mx-auto mb-4"></div>
                            <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-96 mx-auto mb-8"></div>
                            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                                {[...Array(6)].map((_, i) => (
                                    <div key={i} className="flex flex-col items-center">
                                        <div className="w-20 h-20 bg-gray-300 dark:bg-gray-700 rounded-full mb-3"></div>
                                        <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-16"></div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }

    if (contributors.length === 0) {
        return null
    }

    return (
        <section className="py-20 bg-gray-50 dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <div className="flex items-center justify-center mb-4">
                        <Users className="w-8 h-8 text-blue-600 dark:text-blue-400 mr-3" />
                        <h2 className="text-4xl font-bold text-gray-900 dark:text-white">Thank You Contributors!</h2>
                    </div>
                    <p className="text-base text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        This project is made possible by the amazing people who contribute their time and effort.
                        We're grateful for every contribution, big or small! 🙏
                    </p>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
                        {contributors.map((contributor) => (
                            <a
                                key={contributor.id}
                                href={contributor.html_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex flex-col items-center p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-105"
                            >
                                <div className="relative mb-4">
                                    <img
                                        src={contributor.avatar_url}
                                        alt={`${contributor.login}'s avatar`}
                                        className="w-20 h-20 rounded-full border-4 border-gray-200 dark:border-gray-600 group-hover:border-blue-400 transition-colors duration-300"
                                    />
                                    <div className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold">
                                        {contributor.contributions}
                                    </div>
                                    <div className="absolute inset-0 rounded-full bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 flex items-center justify-center">
                                        <ExternalLink className="w-5 h-5 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    </div>
                                </div>
                                <h3 className="font-semibold text-gray-900 dark:text-white text-center text-sm group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                                    @{contributor.login}
                                </h3>
                                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                                    {contributor.contributions} contribution{contributor.contributions !== 1 ? 's' : ''}
                                </p>
                            </a>
                        ))}
                    </div>

                    <div className="mt-8 text-center">
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                            Want to contribute? We welcome pull requests, bug reports, and feature suggestions!
                        </p>
                        <a
                            href="https://github.com/VITAP-Student-Project/vitap-student-website"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary inline-flex items-center"
                        >
                            <Code className="w-5 h-5 mr-2" />
                            Contribute on GitHub
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export { ContributorsSection }