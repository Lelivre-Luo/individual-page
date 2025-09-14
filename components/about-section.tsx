"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface AboutSectionProps {
  language: "zh" | "en"
}

export function AboutSection({ language }: AboutSectionProps) {
  const content = {
    zh: {
      title: "关于我",
      introduction:
        "我是中国传媒大学设计（未来媒体与交互设计）专业的硕士研究生。",
      research:
        "我的研究专注于交互设计与交互功能的开发，我的研究领域涉及XR与虚拟数字人。",
      seeking: "我正在寻找与UX、XR、虚拟数字人有关的实践机会。",
      interests: "研究兴趣",
      interestsList: ["XR", "交互设计", "AI Agent"],
    },
    en: {
      title: "About Me",
      introduction:
        "I am a master's student in Design (Future Media and Interaction Design) at Communication University of China.",
      research:
        "My research focuses on interaction design and interaction function development, involving XR and virtual digital humans.",
      seeking:
        "I am seeking practice opportunities related to UX, XR, and virtual digital humans.",
      interests: "Research Interests",
      interestsList: [
        "XR",
        "Interaction Design",
        "AI Agent",
      ],
    },
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2 text-balance">{content[language].title}</h1>
      </div>

      <Card className="border-border">
        <CardContent className="p-8">
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-foreground">{content[language].introduction}</p>

            <p className="text-base leading-relaxed text-foreground">{content[language].research}</p>

            <p className="text-base leading-relaxed text-accent font-medium">{content[language].seeking}</p>
          </div>
        </CardContent>
      </Card>

      <Card className="border-border">
        <CardContent className="p-8">
          <h2 className="text-xl font-semibold text-foreground mb-4">{content[language].interests}</h2>
          <div className="flex flex-wrap gap-2">
            {content[language].interestsList.map((interest, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="px-3 py-1 text-sm bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                {interest}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
