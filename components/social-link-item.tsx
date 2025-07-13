import type React from "react"
import { ExternalLink } from "lucide-react" // ExternalLinkをインポート

interface SocialLinkItemProps {
  icon: React.ComponentType<{ className?: string }>
  href: string
  label: string
  itemStyle: string
}

export default function SocialLinkItem({ icon: Icon, href, label, itemStyle }: SocialLinkItemProps) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={itemStyle}>
      <Icon className="w-6 h-6 text-white/80" />
      <span className="text-white">{label}</span>
      <ExternalLink className="w-5 h-5 text-white/50 group-hover:text-white transition-colors duration-300 ml-auto" />{" "}
      {/* 右側にアイコンを追加 */}
    </a>
  )
}
