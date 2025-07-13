"use client"
import { Button } from "@/components/ui/button"
import { Sun, Moon } from "lucide-react"
import { useTheme } from "next-themes"
import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"

const GithubLogo = ({ className }: { className?: string }) => (
  <img src="/github-logo.svg" alt="GitHub" className={className} />
)

export default function Header() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [currentTextIndex, setCurrentTextIndex] = useState(0)

  const texts = [
    { word: "ねずみ", langCode: "ja-JP" },
    { word: "mouse", langCode: "en-US" },
    { word: "souris", langCode: "fr-FR" },
    { word: "Maus", langCode: "de-DE" },
    { word: "ratón", langCode: "es-ES" },
    { word: "老鼠", langCode: "zh-CN" },
    { word: "쥐", langCode: "ko-KR" },
    { word: "мышь", langCode: "ru-RU" },
    { word: "فأر", langCode: "ar-SA" },
    { word: "rato", langCode: "pt-BR" },
  ]

  useEffect(() => {
    setMounted(true)

    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length)
    }, 3000)

    return () => {
      clearInterval(interval)
    }
  }, [texts.length])

  if (!mounted) {
    return null
  }

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <header className="fixed top-4 left-0 right-0 z-50 px-4 md:px-8 lg:px-12">
      <div className="container mx-auto max-w-2xl flex items-center justify-between h-16 bg-white/2 backdrop-blur-xl border border-white/10 px-6 md:px-8 py-3 shadow-lg leading-7 rounded-full">
        {/* Left Section: Dark Mode Toggle */}
        <div className="flex items-center gap-4">
          <div
            className="relative w-16 h-8 rounded-full bg-white/5 flex items-center p-1 cursor-pointer"
            onClick={toggleTheme}
          >
            <div
              className={cn(
                "absolute w-6 h-6 rounded-full bg-white shadow-md transition-transform duration-300 flex items-center justify-center",
                theme === "dark" ? "translate-x-8" : "translate-x-0",
              )}
            >
              {theme === "dark" ? (
                <Moon className="w-4 h-4 text-gray-800" />
              ) : (
                <Sun className="w-4 h-4 text-yellow-500" />
              )}
            </div>
          </div>
        </div>

        {/* Dynamic Text Display with Animation */}
        <div className="flex-1 flex justify-center items-center h-full relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={texts[currentTextIndex].word}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.5 }}
              className="text-white text-xl md:text-2xl font-bold tracking-wider whitespace-nowrap"
            >
              {`${texts[currentTextIndex].word} (${texts[currentTextIndex].langCode})`}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Section: GitHub Button - サイズを大きくする */}
        <div className="flex items-center">
          <Button
            asChild
            variant="outline"
            className="w-12 h-12 p-0 rounded-full text-white border-white/10 bg-white/5 hover:bg-white/10 transition-colors duration-300 flex items-center justify-center md:px-6 md:py-2 md:w-auto md:h-auto"
          >
            <a href="https://github.com/nezumi0627" target="_blank" rel="noopener noreferrer">
              <GithubLogo className="h-8 w-8" /> {/* ロゴのサイズも大きくする */}
              <span className="hidden md:inline md:ml-2">GitHub</span>
            </a>
          </Button>
        </div>
      </div>
    </header>
  )
}
