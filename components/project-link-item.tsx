import { ExternalLink } from "lucide-react"
import type { LucideIcon } from "lucide-react"

interface ProjectLinkItemProps {
  name: string
  url: string
  description: string
  icon: LucideIcon
  itemStyle: string
}

export default function ProjectLinkItem({ name, url, description, icon: Icon, itemStyle }: ProjectLinkItemProps) {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className={itemStyle}>
      {Icon && <Icon className="w-6 h-6 text-white/80" />}
      <div className="flex-1">
        <div className="text-white font-medium">{name}</div>
        <div className="text-white/70 text-sm md:text-base">{description}</div>
      </div>
      <ExternalLink className="w-5 h-5 text-white/50 group-hover:text-white transition-colors duration-300" />
    </a>
  )
}
