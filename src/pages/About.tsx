import { Linkedin, Mail, Download } from 'lucide-react'
import { portfolioConfig } from '../config/portfolio.config'

export default function About() {
  const { personal } = portfolioConfig
  const basePath = import.meta.env.BASE_URL.replace(/\/$/, '')

  return (
    <div className="mx-auto max-w-4xl px-4 py-16">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white">A propos de moi</h1>

      <div className="mt-8 rounded-xl border border-gray-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
        <div className="flex flex-col items-start gap-8 sm:flex-row">
          {/* Avatar placeholder */}
          <div className="flex size-32 shrink-0 items-center justify-center rounded-full bg-primary-100 text-4xl font-bold text-primary-600 dark:bg-primary-900 dark:text-primary-400">
            {personal.name.split(' ').map((n) => n[0]).join('')}
          </div>

          <div className="flex-1">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{personal.name}</h2>
            <p className="mt-1 text-lg text-primary-600 dark:text-primary-400">{personal.title}</p>
            <p className="mt-4 text-gray-600 dark:text-gray-300">{personal.bio}</p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-[#0a66c2] px-4 py-2 text-sm font-medium text-white transition hover:bg-[#004182]"
              >
                <Linkedin size={16} />
                LinkedIn
              </a>
              <a
                href={`mailto:${personal.email}`}
                className="inline-flex items-center gap-2 rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-50
                  dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700"
              >
                <Mail size={16} />
                {personal.email}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* CV */}
      <div className="mt-8 rounded-xl border border-gray-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white">CV (format ATS)</h2>
        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
          Mon CV optimisé pour les systèmes de suivi des candidatures.
        </p>
        <a
          href={`${basePath}${personal.cvPath}`}
          download
          className="mt-4 inline-flex items-center gap-2 rounded-lg bg-primary-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-primary-700"
        >
          <Download size={16} />
          Télécharger mon CV
        </a>
      </div>
    </div>
  )
}
