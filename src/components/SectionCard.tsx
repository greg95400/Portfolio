import type { SectionItem } from '../config/portfolio.config'
import DownloadButton from './DownloadButton'

interface Props {
  item: SectionItem
}

export default function SectionCard({ item }: Props) {
  return (
    <div className="rounded-xl border bg-white p-6 shadow-sm transition-shadow hover:shadow-md
      border-gray-200 dark:border-gray-700 dark:bg-gray-800">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
        {item.title}
      </h3>
      <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
        {item.description}
      </p>
      {item.files.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {item.files.map((file) => (
            <DownloadButton key={file.path} file={file} />
          ))}
        </div>
      )}
    </div>
  )
}
