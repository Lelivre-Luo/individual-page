"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, Trophy, Medal, Star, Calendar, MapPin } from "lucide-react"

interface AchievementsPageProps {
  language: "zh" | "en"
}

interface Achievement {
  title: string
  organization: string
  date: string
  location?: string
  description: string
  type: "award" | "honor" | "scholarship" | "publication" | "under_review"
  level: "international" | "national" | "regional" | "institutional"
  authors?: string
  venue?: string
  paperurl?: string
  excerpt?: string
}

export function AchievementsPage({ language }: AchievementsPageProps) {
  const content = {
    zh: {
      title: "学术成果",
      achievements: [
        {
          title: "Li Bai the Youth: An LLM-Powered Virtual Agent for Children's Chinese Poetry Education",
          organization: "SIGGRAPH Asia 2024",
          date: "2024年12月",
          location: "SIGGRAPH Asia 2024",
          description:
            "Large language models (LLMs) are increasingly recognized for their potential, but their application in fostering children's poetry learning remains underexplored. This paper introduces Li Bai the Youth, an interactive installation that leverages a virtual agent powered by an LLM. We present a technical pipeline incorporating text-to-speech, lip synchronization, and other functionalities to enable real-time conversation between users and the virtual agent, Li Bai. Additionally, we implemented strategies to enhance the user experience during interaction. Li Bai the Youth offers a novel approach to poetry learning, promoting cultural heritage engagement.",
          type: "publication" as const,
          level: "international" as const,
          authors: "Yurun Chen, Xin Lyu, Tianzhao Li, Zihan Gao",
          venue: "SIGGRAPH Asia 2024",
          paperurl: "https://dl.acm.org/doi/10.1145/3681756.3697967",
          excerpt: "This poster presents 'Li Bai the Youth,' an LLM-powered virtual agent designed to make learning classical Chinese poetry engaging and interactive for children.",
        },
        {
          title: "TRiMM: Transformer-Based Rich Motion Matching for Real-Time multi-modal Interaction in Digital Humans",
          organization: "拟发CCF B类国际会议",
          date: "2025年（未发表）",
          location: "拟投国际会议",
          description:
            "Large Language Model (LLM)-driven digital humans have sparked a series of recent studies on co-speech gesture generation systems. However, existing approaches struggle with real-time synthesis and long-text comprehension. This paper introduces Transformer-Based Rich Motion Matching (TRiMM), a novel multi-modal framework for real-time 3D gesture generation. Our method incorporates three modules: 1) a cross-modal attention mechanism to achieve precise temporal alignment between speech and gestures; 2) a long-context autoregressive model with a sliding window mechanism for effective sequence modeling; 3) a large-scale gesture matching system that constructs an atomic action library and enables real-time retrieval. Additionally, we develop a lightweight pipeline implemented in the Unreal Engine for experimentation. Our approach achieves real-time inference at 120 fps and maintains a per-sentence latency of 0.15 seconds on consumer-grade GPUs (Geforce RTX3060). Extensive subjective and objective evaluations on the ZEGGS, and BEAT datasets demonstrate that our model outperforms current state-of-the-art methods. TRiMM enhances the speed of co-speech gesture generation while ensuring gesture quality, enabling LLM-driven digital humans to respond to speech in real time and synthesize corresponding gestures.",
          type: "under_review" as const,
          level: "international" as const,
          authors: "Yueqian Guo, Tianzhao Li, Xin Lyu, Jiehaolin Chen, Zhaohan Wang, Sirui Xiao, Yurun Chen, Yezi He, Helin Li, Fan Zhang",
          venue: "拟发CCF B类国际会议",
          paperurl: "https://arxiv.org/abs/2506.01077",
          excerpt: "A Transformer-based Motion Matching that realize real-time synthesis and long-text comprehension of Virtual Digital Humans.",
        },
      ],
      labels: {
        type: {
          award: "奖项",
          honor: "荣誉",
          scholarship: "奖学金",
          publication: "发表",
          under_review: "未发表",
        },
        level: {
          international: "国际级",
          national: "国家级",
          regional: "区域级",
          institutional: "校级",
        },
        date: "发表时间",
        location: "会议地点",
        organization: "发表机构",
        authors: "作者",
        venue: "会议/期刊",
      },
    },
    en: {
      title: "Academic Publications",
      achievements: [
        {
          title: "Li Bai the Youth: An LLM-Powered Virtual Agent for Children's Chinese Poetry Education",
          organization: "SIGGRAPH Asia 2024",
          date: "December 2024",
          location: "SIGGRAPH Asia 2024",
          description:
            "Large language models (LLMs) are increasingly recognized for their potential, but their application in fostering children's poetry learning remains underexplored. This paper introduces Li Bai the Youth, an interactive installation that leverages a virtual agent powered by an LLM. We present a technical pipeline incorporating text-to-speech, lip synchronization, and other functionalities to enable real-time conversation between users and the virtual agent, Li Bai. Additionally, we implemented strategies to enhance the user experience during interaction. Li Bai the Youth offers a novel approach to poetry learning, promoting cultural heritage engagement.",
          type: "publication" as const,
          level: "international" as const,
          authors: "Yurun Chen, Xin Lyu, Tianzhao Li, Zihan Gao",
          venue: "SIGGRAPH Asia 2024",
          paperurl: "https://dl.acm.org/doi/10.1145/3681756.3697967",
          excerpt: "This poster presents 'Li Bai the Youth,' an LLM-powered virtual agent designed to make learning classical Chinese poetry engaging and interactive for children.",
        },
        {
          title: "TRiMM: Transformer-Based Rich Motion Matching for Real-Time multi-modal Interaction in Digital Humans",
          organization: "Under Review (CCF B Conference)",
          date: "2025 (Under Review)",
          location: "International Conference",
          description:
            "Large Language Model (LLM)-driven digital humans have sparked a series of recent studies on co-speech gesture generation systems. However, existing approaches struggle with real-time synthesis and long-text comprehension. This paper introduces Transformer-Based Rich Motion Matching (TRiMM), a novel multi-modal framework for real-time 3D gesture generation. Our method incorporates three modules: 1) a cross-modal attention mechanism to achieve precise temporal alignment between speech and gestures; 2) a long-context autoregressive model with a sliding window mechanism for effective sequence modeling; 3) a large-scale gesture matching system that constructs an atomic action library and enables real-time retrieval. Additionally, we develop a lightweight pipeline implemented in the Unreal Engine for experimentation. Our approach achieves real-time inference at 120 fps and maintains a per-sentence latency of 0.15 seconds on consumer-grade GPUs (Geforce RTX3060). Extensive subjective and objective evaluations on the ZEGGS, and BEAT datasets demonstrate that our model outperforms current state-of-the-art methods. TRiMM enhances the speed of co-speech gesture generation while ensuring gesture quality, enabling LLM-driven digital humans to respond to speech in real time and synthesize corresponding gestures.",
          type: "under_review" as const,
          level: "international" as const,
          authors: "Yueqian Guo, Tianzhao Li, Xin Lyu, Jiehaolin Chen, Zhaohan Wang, Sirui Xiao, Yurun Chen, Yezi He, Helin Li, Fan Zhang",
          venue: "Under Review (CCF B Conference)",
          paperurl: "https://arxiv.org/abs/2506.01077",
          excerpt: "A Transformer-based Motion Matching that realize real-time synthesis and long-text comprehension of Virtual Digital Humans.",
        },
      ],
      labels: {
        type: {
          award: "Award",
          honor: "Honor",
          scholarship: "Scholarship",
          publication: "Publication",
          under_review: "Under Review",
        },
        level: {
          international: "International",
          national: "National",
          regional: "Regional",
          institutional: "Institutional",
        },
        date: "Date",
        location: "Location",
        organization: "Organization",
        authors: "Authors",
        venue: "Venue",
      },
    },
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "award":
        return Trophy
      case "honor":
        return Medal
      case "scholarship":
        return Star
      case "publication":
        return Award
      case "under_review":
        return Award
      default:
        return Award
    }
  }

  const getLevelColor = (level: string) => {
    switch (level) {
      case "international":
        return "bg-purple-100 text-purple-800 border-purple-200"
      case "national":
        return "bg-blue-100 text-blue-800 border-blue-200"
      case "regional":
        return "bg-green-100 text-green-800 border-green-200"
      case "institutional":
        return "bg-orange-100 text-orange-800 border-orange-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2 text-balance">{content[language].title}</h1>
      </div>

      <div className="grid gap-6">
        {content[language].achievements.map((achievement, index) => {
          const IconComponent = getTypeIcon(achievement.type)
          return (
            <Card key={index} className="border-border bg-card/50 shadow-sm">
              <CardContent className="p-6">
                <div className="space-y-4">
                  {/* Header with icon and title */}
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                        <IconComponent className="h-6 w-6 text-accent" />
                      </div>
                    </div>

                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-4">
                        <h2 className="text-xl font-semibold text-foreground leading-tight">{achievement.title}</h2>
                        <div className="flex gap-2">
                          <Badge variant="outline" className={getLevelColor(achievement.level)}>
                            {content[language].labels.level[achievement.level]}
                          </Badge>
                          <Badge variant="secondary">{content[language].labels.type[achievement.type]}</Badge>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Description - full width */}
                  <div className="text-base text-muted-foreground leading-relaxed">
                    <p className="indent-8 text-justify">{achievement.description}</p>
                  </div>

                  {/* Details - full width */}
                  <div className="space-y-2 text-sm">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-accent" />
                          <span className="font-medium">{content[language].labels.date}:</span>
                          <span className="text-muted-foreground">{achievement.date}</span>
                        </div>

                        <div className="flex items-center gap-2">
                          <Award className="h-4 w-4 text-accent" />
                          <span className="font-medium">{content[language].labels.organization}:</span>
                          <span className="text-muted-foreground">{achievement.organization}</span>
                        </div>

                        {achievement.authors && (
                          <div className="flex items-start gap-2">
                            <Award className="h-4 w-4 text-accent mt-0.5" />
                            <div>
                              <span className="font-medium">{content[language].labels.authors}:</span>
                              <span className="text-muted-foreground ml-1" dangerouslySetInnerHTML={{
                                __html: achievement.authors.replace(/Tianzhao Li/g, '<strong>Tianzhao Li</strong>')
                              }} />
                            </div>
                          </div>
                        )}

                        {achievement.venue && (
                          <div className="flex items-center gap-2">
                            <Award className="h-4 w-4 text-accent" />
                            <span className="font-medium">{content[language].labels.venue}:</span>
                            <span className="text-muted-foreground">{achievement.venue}</span>
                          </div>
                        )}

                        {achievement.location && (
                          <div className="flex items-center gap-2">
                            <MapPin className="h-4 w-4 text-accent" />
                            <span className="font-medium">{content[language].labels.location}:</span>
                            <span className="text-muted-foreground">{achievement.location}</span>
                          </div>
                        )}

                        {achievement.paperurl && (
                          <div className="flex items-center gap-2">
                            <Award className="h-4 w-4 text-accent" />
                            <span className="font-medium">{language === "zh" ? "论文链接:" : "Paper Link:"}</span>
                            <a 
                              href={achievement.paperurl} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-accent hover:underline"
                            >
                              {language === "zh" ? "查看论文" : "View Paper"}
                            </a>
                          </div>
                        )}
                  </div>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
