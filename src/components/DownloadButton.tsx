import { Download, ExternalLink } from 'lucide-react'
import type { FileItem } from '../config/portfolio.config'

interface Props {
  file: FileItem
}

export default function DownloadButton({ file }: Props) {
  const basePath = import.meta.env.BASE_URL.replace(/\/$/, '')
  
  if (file.external) {
    return (
      <a
        href={file.path}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-lg border px-3 py-1.5 text-sm font-medium transition-colors
          border-primary-200 text-primary-700 hover:bg-primary-50
          dark:border-primary-800 dark:text-primary-300 dark:hover:bg-primary-950"
      >
        <ExternalLink size={14} />
        {file.label}
      </a>
    )
  }

  return (
    <a
      href={`${basePath}${file.path}`}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 rounded-lg border px-3 py-1.5 text-sm font-medium transition-colors
        border-primary-200 text-primary-700 hover:bg-primary-50
        dark:border-primary-800 dark:text-primary-300 dark:hover:bg-primary-950"
    >
      <Download size={14} />
      {file.label}
    </a>
  )
}
