"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { MapPin, Building, Mail, GraduationCap, Award, FolderOpen, Github } from "lucide-react"

interface ProfileSidebarProps {
  language: "zh" | "en"
  activeSection: string
  setActiveSection: (section: string) => void
}

export function ProfileSidebar({ language, activeSection, setActiveSection }: ProfileSidebarProps) {
  const content = {
    zh: {
      name: "李天召",
      title: "设计（未来媒体与交互设计）专业硕士",
      location: "中国•北京市",
      university: "中国传媒大学",
      email: "CUCLelivre@gmail.com",
      introduction: "我是中国传媒大学设计（未来媒体与交互设计）专业的硕士研究生。",
      research: "我的研究专注于交互设计与交互功能的开发，我的研究领域涉及XR与虚拟数字人。",
      seeking: "我正在寻找与UX、XR、虚拟数字人有关的实践机会。",
      interests: "研究兴趣",
      interestsList: ["XR", "交互设计", "AI Agent"],
      sections: {
        education: "教育经历",
        achievements: "学术成果",
        projects: "项目成果",
      },
    },
    en: {
      name: "Tianzhao Li",
      title: "Master's Student in Design (Future Media and Interaction Design)",
      location: "Beijing, China",
      university: "Communication University of China",
      email: "CUCLelivre@gmail.com",
      introduction:
        "I am a master's student in Design (Future Media and Interaction Design) at Communication University of China.",
      research: "My research focuses on interaction design and interaction function development, involving XR and virtual digital humans.",
      seeking:
        "I am seeking practice opportunities related to UX, XR, and virtual digital humans.",
      interests: "Research Interests",
      interestsList: ["XR", "Interaction Design", "AI Agent"],
      sections: {
        education: "Education",
        achievements: "Achievements",
        projects: "Projects",
      },
    },
  }

  const sections = [
    { id: "education", label: content[language].sections.education, icon: GraduationCap },
    { id: "achievements", label: content[language].sections.achievements, icon: Award },
    { id: "projects", label: content[language].sections.projects, icon: FolderOpen },
  ]

  return (
    <aside className="fixed left-0 top-16 h-[calc(100vh-4rem)] w-80 bg-sidebar border-r border-sidebar-border overflow-y-auto">
      <div className="p-6 space-y-6">
        <div className="text-center space-y-4">
          <Avatar className="w-32 h-32 mx-auto ring-2 ring-border">
            <AvatarImage src="/assets/pictures/Tianzhao Li.jpg" alt={content[language].name} />
            <AvatarFallback className="text-2xl bg-muted">{content[language].name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-sidebar-foreground">{content[language].name}</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">{content[language].title}</p>
          </div>
        </div>

        <Separator />

        <div className="space-y-3">
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4 flex-shrink-0" />
            <span>{content[language].location}</span>
          </div>
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <Building className="h-4 w-4 flex-shrink-0" />
            <span>{content[language].university}</span>
          </div>
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <Mail className="h-4 w-4 flex-shrink-0" />
            <span>{content[language].email}</span>
          </div>
        </div>

        <Separator />

        <div className="space-y-4">
          <h3 className="text-sm font-medium text-sidebar-foreground">{language === "zh" ? "关于我" : "About Me"}</h3>
          <div className="space-y-3 text-xs text-muted-foreground leading-relaxed">
            <p>{content[language].introduction}</p>
            <p>{content[language].research}</p>
            <p className="text-accent font-medium">{content[language].seeking}</p>
          </div>
          <div className="space-y-2">
            <h4 className="text-xs font-medium text-sidebar-foreground">{content[language].interests}</h4>
            <div className="flex flex-wrap gap-1">
              {content[language].interestsList.map((interest, index) => (
                <Badge key={index} variant="secondary" className="px-2 py-0.5 text-xs bg-muted text-muted-foreground">
                  {interest}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        <Separator />

        <nav className="space-y-1">
          {sections.map((section) => {
            const IconComponent = section.icon
            return (
              <Button
                key={section.id}
                variant={activeSection === section.id ? "default" : "ghost"}
                className="w-full justify-center h-10"
                onClick={() => setActiveSection(section.id)}
                title={section.label}
              >
                <IconComponent className="h-4 w-4" />
              </Button>
            )
          })}

          <Separator className="my-3" />

          <Button
            variant="ghost"
            className="w-full justify-center h-10"
            asChild
            title={language === "zh" ? "访问我的GitHub" : "Visit my GitHub"}
          >
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4" />
            </a>
          </Button>
        </nav>
      </div>
    </aside>
  )
}
