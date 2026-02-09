import { useParams, Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { portfolioConfig } from '../config/portfolio.config'
import SectionCard from '../components/SectionCard'

export default function SectionPage() {
  const { sectionId } = useParams<{ sectionId: string }>()
  const section = portfolioConfig.sections.find((s) => s.id === sectionId)

  if (!section) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-16 text-center">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Section introuvable</h1>
        <Link to="/" className="mt-4 inline-flex items-center gap-2 text-primary-600 hover:underline dark:text-primary-400">
          <ArrowLeft size={16} />
          Retour à l'accueil
        </Link>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-16">
      <Link to="/" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
        <ArrowLeft size={16} />
        Retour à l'accueil
      </Link>

      <h1 className="mt-6 text-3xl font-bold text-gray-900 dark:text-white">{section.title}</h1>
      <p className="mt-2 text-gray-500 dark:text-gray-400">{section.description}</p>

      {section.items.length === 0 ? (
        <div className="mt-12 rounded-xl border-2 border-dashed border-gray-300 p-12 text-center dark:border-gray-700">
          <p className="text-gray-400 dark:text-gray-500">Aucun élément pour le moment.</p>
        </div>
      ) : (
        <div className="mt-8 grid gap-4">
          {section.items.map((item, i) => (
            <SectionCard key={i} item={item} />
          ))}
        </div>
      )}
    </div>
  )
}
