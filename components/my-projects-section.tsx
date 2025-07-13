import { FolderOpen } from "lucide-react"
import ProjectLinkItem from "./project-link-item"
import type { LucideIcon } from "lucide-react"

interface Project {
  name: string
  url: string
  description: string
  icon: LucideIcon
}

interface MyProjectsSectionProps {
  projects: Project[]
  itemStyle: string
}

export default function MyProjectsSection({ projects, itemStyle }: MyProjectsSectionProps) {
  return (
    <div className="space-y-8 flex flex-col justify-end">
      {/* プロフィールセクションと同じスタイルを適用し、mb-8を追加 */}
      <div
        id="projects"
        className="backdrop-blur-2xl bg-white/2 border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl mb-8 h-fit"
      >
        <h3 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">
          <FolderOpen className="w-6 h-6" />
          My Projects
        </h3>
        <div className="grid gap-4">
          {projects.map((project, index) => (
            <ProjectLinkItem key={index} {...project} itemStyle={itemStyle} />
          ))}
        </div>
      </div>
    </div>
  )
}
