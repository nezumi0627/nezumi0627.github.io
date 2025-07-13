import { Calendar, MapPin, Languages, User, Zap, Code } from "lucide-react"
import Image from "next/image" // Imageをインポート
import { Badge } from "@/components/ui/badge"

interface ProfileSectionProps {
  avatarUrl: string
  name: string
  handle: string
  birthDate: string
  location: string
  languages: string
}

export default function ProfileSection({
  avatarUrl,
  name,
  handle,
  birthDate,
  location,
  languages,
}: ProfileSectionProps) {
  return (
    <section id="profile" className="max-w-6xl mx-auto">
      {/* 透明度を調整 */}
      <div className="backdrop-blur-2xl bg-white/2 border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl mb-8">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="flex-shrink-0 flex justify-center items-center">
            {/* 透明度を調整 */}
            <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-white/10 shadow-2xl">
              <img
                src={avatarUrl || "/placeholder.svg"}
                alt={`${name} avatar`}
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>

          <div className="flex-1 text-center lg:text-left">
            <div className="mb-4">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-2 drop-shadow-2xl text-center font-sans">
                {name}
              </h1>
              {/* 透明度を調整 */}
              <p className="text-xl md:text-2xl text-white/60 mb-4 text-center font-sans">{handle}</p>
            </div>
          </div>

          <div className="flex-shrink-0 w-full lg:w-auto lg:text-left">
            <div className="space-y-4">
              <div className="flex flex-wrap justify-center lg:justify-start gap-2">
                {/* 透明度を調整 */}
                <Badge
                  variant="secondary"
                  className="bg-purple-500/10 text-purple-200 border-purple-400/15 text-base md:text-lg px-3 py-1 hover:bg-purple-500/10 hover:text-purple-200 hover:border-purple-400/15"
                >
                  <User className="w-4 h-4 mr-1" />
                  Developer
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-blue-500/10 text-blue-200 border-blue-400/15 text-base md:text-lg px-3 py-1 hover:bg-blue-500/10 hover:text-blue-200 hover:border-blue-400/15"
                >
                  <Zap className="w-4 h-4 mr-1" />
                  Web Analyst
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-green-500/10 text-green-200 border-green-400/15 text-base md:text-lg px-3 py-1 hover:bg-green-500/10 hover:text-green-200 hover:border-green-400/15"
                >
                  <Code className="w-4 h-4 mr-1" />
                  Python Enthusiast
                </Badge>
              </div>
              {/* 透明度を調整 */}
              <div className="space-y-2 text-white/50 text-base md:text-xl opacity-100 tracking-normal leading-7">
                <div className="flex items-center gap-2 justify-center lg:justify-start">
                  <Calendar className="w-5 h-5" />
                  <span>{birthDate}</span>
                </div>
                <div className="flex items-center gap-2 justify-center lg:justify-start">
                  <MapPin className="w-5 h-5" />
                  <span>{location}</span>
                </div>
                <div className="flex items-center gap-2 justify-center lg:justify-start text-white/60">
                  <Languages className="w-5 h-5" />
                  <span>{languages}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
