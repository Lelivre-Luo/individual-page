"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Calendar, Award } from "lucide-react"

interface EducationSectionProps {
  language: "zh" | "en"
}

interface EducationItem {
  degree: string
  university: string
  location: string
  period: string
  gpa: string
  coursework?: string[]
  advisor?: string
  thesis?: string
  thesisDescription?: string
}

export function EducationSection({ language }: EducationSectionProps) {
  const content = {
    zh: {
      title: "教育经历",
      education: [
        {
          degree: "设计（未来媒体与交互设计）专业硕士",
          university: "中国传媒大学",
          location: "中国 北京",
          period: "2024. 9 - 2026. 8",
          gpa: "GPA：前5%",
          advisor: "吕欣 教授",
          thesis: "毕业设计：沉浸式交互作品《数字之心》",
          thesisDescription: "由人工智能管理的人类社会“摇篮”，人类脱离了动物、植物等其他生物独自生存，物质性的缺失导致人类丢失了对动物、植物等其他生物的感性体验……在人工智能创造的“摇篮 ”中，一个人类产生了对“真实的花”的追求…… 一场在虚拟现实的沉浸场域下的科幻叙事，一场与智能交互数字人的交互实验，一场人类和人工智能的思考……",
          coursework: ["未来媒体与智能设计实践", "数字设计与智能生成技术", "项目实训", "开放性实训", "Unreal Engine工作坊", "AIGC工作坊"],
        },
        {
          degree: "数字媒体技术学士",
          university: "中国传媒大学",
          location: "中国 北京",
          period: "2020. 9 - 2024. 8",
          gpa: "GPA：前5%",
          thesis: "毕业设计：计算驱动型虚拟数字人的研究与实现",
          thesisDescription: "ChatGPT的问世，让我们看到与人工智能进行互动的可能──完全由计算驱动的虚拟数字人已然不是幻想，而是现实，真正的“虚拟主播”、“虚拟伴侣”正在向我们走来。",
          coursework: ["C++语言程序设计", "数据结构与算法", "虚拟现实技术", "计算机图形学", "人机交互技术", "线性代数", "高等数学"],
        },
      ],
      labels: {
        gpa: "学分绩点",
        coursework: "主要课程",
        advisor: "指导教师",
        thesis: "毕业设计",
      },
    },
    en: {
      title: "Education",
      education: [
        {
          degree: "Master in Design (Future Media and Interaction Design)",
          university: "Communication University of China",
          location: "Beijing, China",
          period: "Sept 2024 - Aug 2026",
          gpa: "GPA: Top 5%",
          advisor: "Advisor: Prof. Lv Xin",
          thesis: "Graduation Project: Interactive Work 'Digital Heart'",
          thesisDescription: "In the 'Cradle,' a human society managed by AI, humanity lives isolated from other life forms like animals and plants. This material void leads to a loss of sensory experience with the natural world. Within this AI-created 'Cradle,' a human develops a longing for a 'real flower.' This project is a sci-fi narrative within an immersive virtual reality field, an interactive experiment with an intelligent digital human, and a contemplation on humanity and artificial intelligence..", 
          coursework: [
            "Future Media and Intelligent Design Practice",
            "Digital Design and Intelligent Generation Technology",
            "Project Training",
            "Open Training",
            "Unreal Engine Workshop",
            "AIGC Workshop",
          ],
        },
        {
          degree: "B.E. in Digital Media Technology",
          university: "Communication University of China",
          location: "Beijing, China",
          period: "Sept 2020 - Aug 2024",
          gpa: "GPA: Top 5%",
          thesis: "Graduation Project: Research and Implementation of Computation-Driven Virtual Digital Human",
          thesisDescription: "The advent of ChatGPT has shown us the potential for interaction with artificial intelligence. Fully computation-driven virtual digital humans are no longer a fantasy, but a reality. True 'virtual streamers' and 'virtual companions' are now approaching.", 
          coursework: [
            "C++ Programming Language",
            "Data Structures & Algorithms",
            "Virtual Reality Technology",
            "Computer Graphics",
            "Human-Computer Interaction Technology",
            "Linear Algebra",
            "Advanced Mathematics",
          ],
        },
      ],
      labels: {
        gpa: "Grade Point Average",
        coursework: "Selected Coursework",
        advisor: "Academic Advisor",
        thesis: "Graduation Project",
      },
    },
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2 text-balance">{content[language].title}</h1>
      </div>

      <div className="space-y-6">
        {content[language].education.map((edu, index) => (
          <Card key={index} className="border-border bg-card/50 shadow-sm">
            <CardContent className="p-8">
              <div className="space-y-4">
                {/* Header */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                      <GraduationCap className="h-5 w-5 text-accent" />
                    </div>
                  </div>

                  <div className="flex-1 space-y-2">
                    <div className="flex flex-col xl:flex-row xl:items-center xl:gap-3">
                      <h2 className="text-base xl:text-lg font-semibold text-foreground leading-tight">{edu.degree}</h2>
                      <span className="hidden xl:inline text-muted-foreground">•</span>
                      <p className="text-sm xl:text-base text-muted-foreground font-medium">{edu.university}</p>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{edu.period}</span>
                      </div>
                      <span>•</span>
                      <span>{edu.location}</span>
                    </div>
                  </div>
                </div>

                {/* GPA */}
                <div className="flex items-center gap-2">
                  <Award className="h-4 w-4 text-accent" />
                  <span className="text-sm font-medium text-accent">{edu.gpa}</span>
                </div>

                {/* Advisor */}
                {edu.advisor && (
                  <div className="text-sm text-muted-foreground">
                    <span className="font-medium">{content[language].labels.advisor}:</span> {edu.advisor}
                  </div>
                )}

                {/* Thesis */}
                {edu.thesis && (
                  <div className="text-sm text-muted-foreground">
                    <span className="font-medium">{content[language].labels.thesis}:</span> {edu.thesis}
                  </div>
                )}

                {/* Thesis Description */}
                {edu.thesisDescription && (
                  <div className="pl-4 text-xs text-muted-foreground/80 border-l-2 border-border ml-1 mt-1">
                    <p className="leading-relaxed">{edu.thesisDescription}</p>
                  </div>
                )}

                {/* Coursework */}
                {edu.coursework && (
                  <div className="space-y-3">
                    <h3 className="text-sm font-medium text-foreground">{content[language].labels.coursework}:</h3>
                    <div className="flex flex-wrap gap-2">
                      {edu.coursework.map((course, courseIndex) => (
                        <Badge
                          key={courseIndex}
                          variant="outline"
                          className="px-3 py-1 text-xs border-border text-muted-foreground hover:bg-muted transition-colors"
                        >
                          {course}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
