import { portfolioConfig } from '../config/portfolio.config'

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800">
      <div className="mx-auto max-w-6xl px-4 py-8 text-center text-sm text-gray-500 dark:text-gray-400">
        <p>&copy; {new Date().getFullYear()} {portfolioConfig.personal.name} &mdash; Portfolio MIAGE</p>
      </div>
    </footer>
  )
}
