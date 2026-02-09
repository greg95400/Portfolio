import { Link } from 'react-router-dom'
import {
  FileText, BookOpen, Database, Award, Rocket, Presentation, Library, ArrowRight, User
} from 'lucide-react'
import { portfolioConfig } from '../config/portfolio.config'

const iconMap: Record<string, React.ReactNode> = {
  FileText: <FileText size={24} />,
  BookOpen: <BookOpen size={24} />,
  Database: <Database size={24} />,
  Award: <Award size={24} />,
  Rocket: <Rocket size={24} />,
  Presentation: <Presentation size={24} />,
  Library: <Library size={24} />,
}

export default function Home() {
  const { personal, sections } = portfolioConfig

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-600 to-primary-800 dark:from-primary-900 dark:to-gray-950">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMwLTkuOTQtOC4wNi0xOC0xOC0xOHY2YzYuNjMgMCAxMiA1LjM3IDEyIDEycy01LjM3IDEyLTEyIDEydjZjOS45NCAwIDE4LTguMDYgMTgtMTh6IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9Ii4wNSIvPjwvZz48L3N2Zz4=')] opacity-30" />
        <div className="relative mx-auto max-w-6xl px-4 py-24 text-center text-white">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            {personal.name}
          </h1>
          <p className="mt-4 text-xl text-primary-100 sm:text-2xl">
            {personal.title}
          </p>
          <p className="mx-auto mt-6 max-w-2xl text-primary-200">
            {personal.bio}
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link
              to="/about"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-primary-700 shadow-lg transition hover:bg-primary-50"
            >
              <User size={18} />
              A propos de moi
            </Link>
          </div>
        </div>
      </section>

      {/* Sections grid */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-center text-3xl font-bold text-gray-900 dark:text-white">
          Rubriques du portfolio
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-gray-500 dark:text-gray-400">
          Explorez les différentes sections de mon portfolio MIAGE.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {sections.map((section) => (
            <Link
              key={section.id}
              to={section.path}
              className="group flex flex-col rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-lg hover:-translate-y-1
                dark:border-gray-700 dark:bg-gray-800"
            >
              <div className="flex size-12 items-center justify-center rounded-lg bg-primary-100 text-primary-600 dark:bg-primary-900 dark:text-primary-400">
                {iconMap[section.icon] ?? <FileText size={24} />}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">
                {section.title}
              </h3>
              <p className="mt-2 flex-1 text-sm text-gray-500 dark:text-gray-400">
                {section.description}
              </p>
              <div className="mt-4 flex items-center gap-1 text-sm font-medium text-primary-600 dark:text-primary-400">
                Voir la rubrique
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
