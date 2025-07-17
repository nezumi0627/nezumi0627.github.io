"use client"

import { useState, useEffect } from "react"
import dynamic from "next/dynamic"
import { Link, Package } from "lucide-react"
import Header from "@/components/header"
import ProfileSection from "@/components/profile-section"
import MyProjectsSection from "@/components/my-projects-section"
import ContactSection from "@/components/contact-section"
import { ensureInit, loginIfNeeded, extractTextFromUrl, sendMessage } from "@/lib/liff"
import liff from "@line/liff"

const FloatingDuck = dynamic(() => import("@/components/floating-duck"), { ssr: false })

const DiscordLogo = ({ className }: { className?: string }) => (
  <img src="/discord-logo.svg" alt="Discord icon" className={className} />
)

const TwitterLogo = ({ className }: { className?: string }) => (
  <img src="/twitter-logo.svg" alt="Twitter icon" className={className} />
)

const GithubLogo = ({ className }: { className?: string }) => (
  <img src="/github-logo.svg" alt="GitHub icon" className={className} />
)

const V0_INSPIRED_ITEM_STYLE =
  "flex items-center gap-4 px-4 py-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors duration-300 group border border-white/10 shadow-sm w-full justify-start text-base"

export default function Portfolio() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll)
      setScrolled(window.scrollY > 20)
      return () => {
        window.removeEventListener("scroll", handleScroll)
      }
    }
  }, [])

  // LIFF メッセージ送信用エフェクト
  useEffect(() => {
    (async () => {
      try {
        await ensureInit();
        const loggedIn = await loginIfNeeded();
        if (!loggedIn) return;

        const text = extractTextFromUrl(new URL(window.location.href));
        if (text) {
          await sendMessage({
            type: "text",
            text,
            sentBy: {
              label: "Nezumi-Project@2025",
              iconUrl: "https://raw.githubusercontent.com/nezumi0627/nezuminium.github.io/main/icon.gif",
              linkUrl: "https://nezumi0627.github.io/",
            },
          });
          liff.closeWindow();
        }
      } catch (err) {
        /* eslint-disable no-console */
        console.error(err);
      }
    })();
  }, [])

  const socialLinks = [
    { icon: GithubLogo, href: "https://github.com/nezumi0627", label: "GitHub" },
    { icon: TwitterLogo, href: "https://x.com/nezum1n1um", label: "X (Twitter)" },
    { icon: DiscordLogo, href: "http://discordapp.com/users/879525928261255199", label: "Discord" },
  ]

  const projects = [
    { name: "URL Shortener", url: "https://s.moyashi.xyz", description: "短縮URLサービス", icon: Link },
    {
      name: "LINE Works SDK",
      url: "https://github.com/nanato12/line-works-sdk",
      description: "非公式 LINE Works SDK",
      icon: Package,
    },
  ]

  return (
    <div className="min-h-screen relative overflow-hidden">
      <FloatingDuck />
      <Header />

      {/* グラデーション背景 */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/40 via-purple-900/20 to-slate-900/40 pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-black/10 pointer-events-none"></div>

      <main className="w-full px-4 sm:px-6 md:px-8 lg:px-12 relative z-10 leading-8 pb-0 my-auto pt-28 md:pt-32 lg:pt-40">
        {/* PCで max-w 制限（スマホはw-full） */}
        <div className="max-w-6xl mx-auto">
          <ProfileSection
            avatarUrl="/images/nezumi-logo.jpeg"
            name="nezumi"
            handle="@nezumi0627"
            birthDate="2008年6月27日"
            location="福岡県北九州市"
            languages="日本語と英語"
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 mt-12">
            <MyProjectsSection projects={projects} itemStyle={V0_INSPIRED_ITEM_STYLE} />
            <ContactSection
              socialLinks={socialLinks}
              wishlistUrl="https://www.amazon.jp/hz/wishlist/ls/11OOP56XMJPUA?ref_=wl_share"
              itemStyle={V0_INSPIRED_ITEM_STYLE}
            />
          </div>
        </div>
      </main>
    </div>
  )
}
