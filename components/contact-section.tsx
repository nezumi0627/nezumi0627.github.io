import type React from "react"
import { Mail, Heart, ExternalLink } from "lucide-react" // ExternalLinkをインポート
import SocialLinkItem from "./social-link-item"

interface SocialLink {
  icon: React.ComponentType<{ className?: string }>
  href: string
  label: string
}

interface ContactSectionProps {
  socialLinks: SocialLink[]
  wishlistUrl: string
  itemStyle: string
}

export default function ContactSection({ socialLinks, wishlistUrl, itemStyle }: ContactSectionProps) {
  return (
    <div className="space-y-8 flex flex-col justify-end">
      {/* プロフィールセクションと同じスタイルを適用し、mb-8を追加 */}
      <div
        id="contact"
        className="backdrop-blur-2xl bg-white/2 border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl mb-8 h-fit"
      >
        <h3 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">
          <Mail className="w-6 h-6" />
          Contact
        </h3>
        <div className="space-y-3">
          {socialLinks.map((social, index) => (
            <SocialLinkItem key={index} {...social} itemStyle={itemStyle} />
          ))}
          <a href={wishlistUrl} target="_blank" rel="noopener noreferrer" className={itemStyle}>
            <Heart className="w-6 h-6 text-white/80" />
            <span className="text-white">ほしいものリスト</span>
            <ExternalLink className="w-5 h-5 text-white/50 group-hover:text-white transition-colors duration-300 ml-auto" />{" "}
            {/* 右側にアイコンを追加 */}
          </a>
        </div>
      </div>
    </div>
  )
}
