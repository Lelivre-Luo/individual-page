"use client"

import { Button } from "@/components/ui/button"
import { Globe, Download } from "lucide-react"
import type { Language } from "@/hooks/use-language"

interface HeaderProps {
  language: Language
  setLanguage: (lang: Language) => void
}

export function Header({ language, setLanguage }: HeaderProps) {
  const content = {
    zh: {
      title: "李天召的学术作品集",
      cv: "下载简历",
      languageSwitch: "切换到英文",
    },
    en: {
      title: "Tianzhao Li's Academic Portfolio",
      cv: "Download CV",
      languageSwitch: "Switch to Chinese",
    },
  }

  const handleDownloadCV = () => {
    // In a real application, this would download the actual CV file
    const cvFileName = language === "zh" ? "李天召_简历.pdf" : "Tianzhao_Li_CV.pdf"
    console.log(`Downloading ${cvFileName}`)
    // You would implement actual file download logic here
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-8">
          <h1 className="text-xl font-semibold text-foreground">{content[language].title}</h1>
          <nav className="flex items-center gap-6">
            <Button variant="ghost" className="text-muted-foreground hover:text-foreground" onClick={handleDownloadCV}>
              <Download className="h-4 w-4 mr-2" />
              {content[language].cv}
            </Button>
          </nav>
        </div>

        <Button
          variant="outline"
          size="sm"
          onClick={() => setLanguage(language === "zh" ? "en" : "zh")}
          className="flex items-center gap-2"
          title={content[language].languageSwitch}
        >
          <Globe className="h-4 w-4" />
          {language === "zh" ? "EN" : "中文"}
        </Button>
      </div>
    </header>
  )
}
