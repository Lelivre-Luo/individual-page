"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { FileText, AwardIcon, ExternalLink, Calendar } from "lucide-react"

interface AchievementsSectionProps {
  language: "zh" | "en"
}

interface Publication {
  title: string
  authors: string
  venue: string
  year: string
  type: "journal" | "conference" | "workshop"
  status?: string
  link?: string
}

interface AchievementAward {
  title: string
  organization: string
  year: string
  description?: string
}

export function AchievementsSection({ language }: AchievementsSectionProps) {
  const content = {
    zh: {
      title: "学术成果",
      publications: {
        title: "发表论文",
        items: [
          {
            title: "基于深度学习的高效图像压缩框架研究",
            authors: "李天召, 齐茂, 李明",
            venue: "IEEE图像处理汇刊 (TIP)",
            year: "2024",
            type: "journal" as const,
            status: "已发表",
            link: "https://ieeexplore.ieee.org",
          },
          {
            title: "多模态AI在计算机视觉中的应用",
            authors: "李天召, 张伟, 齐茂",
            venue: "数据压缩会议 (DCC)",
            year: "2024",
            type: "conference" as const,
            status: "已发表",
            link: "https://dcc.org",
          },
          {
            title: "神经网络优化算法的改进研究",
            authors: "李天召, 王华, 齐茂",
            venue: "机器学习国际会议 (ICML)",
            year: "2024",
            type: "conference" as const,
            status: "审稿中",
          },
        ],
      },
      awards: {
        title: "获奖荣誉",
        items: [
          {
            title: "优秀毕业生",
            organization: "中国传媒大学",
            year: "2024",
            description: "因学术表现优异和研究贡献突出而获得",
          },
          {
            title: "国家奖学金",
            organization: "中华人民共和国教育部",
            year: "2023",
            description: "表彰学术成绩优异的本科生",
          },
          {
            title: "最佳论文奖",
            organization: "全国大学生创新创业大赛",
            year: "2023",
            description: "图像处理算法创新项目",
          },
        ],
      },
      labels: {
        published: "已发表",
        underReview: "审稿中",
        accepted: "已接收",
        journal: "期刊论文",
        conference: "会议论文",
        workshop: "研讨会论文",
        viewPaper: "查看论文",
      },
    },
    en: {
      title: "Academic Achievements",
      publications: {
        title: "Publications",
        items: [
          {
            title: "Efficient Image Compression Frameworks with Deep Learning",
            authors: "Tianzhao Li, Qi Mao, Ming Li",
            venue: "IEEE Transactions on Image Processing (TIP)",
            year: "2024",
            type: "journal" as const,
            status: "Published",
            link: "https://ieeexplore.ieee.org",
          },
          {
            title: "Multi-modal AI Applications in Computer Vision",
            authors: "Tianzhao Li, Wei Zhang, Qi Mao",
            venue: "Data Compression Conference (DCC)",
            year: "2024",
            type: "conference" as const,
            status: "Published",
            link: "https://dcc.org",
          },
          {
            title: "Improved Neural Network Optimization Algorithms",
            authors: "Tianzhao Li, Hua Wang, Qi Mao",
            venue: "International Conference on Machine Learning (ICML)",
            year: "2024",
            type: "conference" as const,
            status: "Under Review",
          },
        ],
      },
      awards: {
        title: "Awards & Honors",
        items: [
          {
            title: "Outstanding Graduate",
            organization: "Communication University of China",
            year: "2024",
            description: "Awarded for exceptional academic performance and research contributions",
          },
          {
            title: "National Scholarship",
            organization: "Ministry of Education, P.R. China",
            year: "2023",
            description: "Recognition for outstanding academic achievement among undergraduates",
          },
          {
            title: "Best Paper Award",
            organization: "National College Student Innovation Competition",
            year: "2023",
            description: "Image processing algorithm innovation project",
          },
        ],
      },
      labels: {
        published: "Published",
        underReview: "Under Review",
        accepted: "Accepted",
        journal: "Journal Paper",
        conference: "Conference Paper",
        workshop: "Workshop Paper",
        viewPaper: "View Paper",
      },
    },
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case "journal":
        return "bg-blue-100 text-blue-800 border-blue-200"
      case "conference":
        return "bg-green-100 text-green-800 border-green-200"
      case "workshop":
        return "bg-purple-100 text-purple-800 border-purple-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  const getStatusColor = (status: string) => {
    const isPublished = status === "Published" || status === "已发表"
    const isUnderReview = status === "Under Review" || status === "审稿中"

    if (isPublished) return "bg-green-100 text-green-800 border-green-200"
    if (isUnderReview) return "bg-yellow-100 text-yellow-800 border-yellow-200"
    return "bg-blue-100 text-blue-800 border-blue-200"
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2 text-balance">{content[language].title}</h1>
      </div>

      {/* Publications Section */}
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <FileText className="h-6 w-6 text-accent" />
          <h2 className="text-2xl font-semibold text-foreground">{content[language].publications.title}</h2>
        </div>

        <div className="space-y-4">
          {content[language].publications.items.map((pub, index) => (
            <Card key={index} className="border-border bg-card/50 shadow-sm">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 space-y-2">
                      <h3 className="text-lg font-medium text-foreground leading-tight">{pub.title}</h3>
                      <p className="text-sm text-muted-foreground">{pub.authors}</p>
                      <p className="text-sm font-medium text-accent">{pub.venue}</p>
                    </div>

                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{pub.year}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className={getTypeColor(pub.type)}>
                        {content[language].labels[pub.type]}
                      </Badge>
                      {pub.status && (
                        <Badge variant="outline" className={getStatusColor(pub.status)}>
                          {pub.status}
                        </Badge>
                      )}
                    </div>

                    {pub.link && (
                      <Button variant="outline" size="sm" asChild title={content[language].labels.viewPaper}>
                        <a href={pub.link} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Awards Section */}
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <AwardIcon className="h-6 w-6 text-accent" />
          <h2 className="text-2xl font-semibold text-foreground">{content[language].awards.title}</h2>
        </div>

        <div className="space-y-4">
          {content[language].awards.items.map((award, index) => (
            <Card key={index} className="border-border bg-card/50 shadow-sm">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                      <AwardIcon className="h-5 w-5 text-accent" />
                    </div>
                  </div>

                  <div className="flex-1 space-y-2">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-lg font-medium text-foreground">{award.title}</h3>
                      <span className="text-sm text-muted-foreground font-medium">{award.year}</span>
                    </div>

                    <p className="text-sm font-medium text-accent">{award.organization}</p>

                    {award.description && (
                      <p className="text-sm text-muted-foreground leading-relaxed">{award.description}</p>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
