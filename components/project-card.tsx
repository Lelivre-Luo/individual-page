"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Gamepad2, ExternalLink, Github, Calendar, Users, Play, ImageIcon, ChevronDown, ChevronUp } from "lucide-react"

// 定义传递给这个组件的 props 类型
// 注意：这里我们明确 Project 类型，避免 TS 报错
interface Project {
  title: string
  description: string
  period: string
  role: string
  technologies: string[]
  achievements: string[]
  links?: {
    github?: string
    demo?: string
    paper?: string
  }
  collaborators?: string
  status: "completed" | "ongoing" | "published"
  video?: string
}

interface ProjectCardProps {
  project: Project
  language: "zh" | "en"
  labels: any // 您可以根据需要定义更精确的 labels 类型
  getStatusColor: (status: string) => string
}

export function ProjectCard({ project, language, labels, getStatusColor }: ProjectCardProps) {
  // 使用 useState 来独立控制每个卡片演示区的展开/收起状态
  const [isDemoVisible, setIsDemoVisible] = useState(false)

  // 判断是否存在可演示的内容（视频或在线链接），以便决定是否显示“展开”按钮
  const hasDemoContent = project.video || project.links?.demo

  return (
    // 卡片本身作为根元素，应用我们之前设计好的悬浮、过渡和玻璃效果
    // overflow-hidden 对于子元素的动画效果很重要
    <Card className="border-border bg-card/50 shadow-sm transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1 overflow-hidden">
      <CardContent className="p-8">
        <div className="space-y-6">
          {/* --- 这部分是卡片的主要内容，基本保持不变 --- */}
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 mt-1">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                <Gamepad2 className="h-6 w-6 text-accent" />
              </div>
            </div>
            <div className="flex-1 space-y-3">
              <div className="flex items-start justify-between gap-4">
                <h2 className="text-xl font-semibold text-foreground leading-tight">{project.title}</h2>
                <Badge variant="outline" className={getStatusColor(project.status)}>
                  {labels.status[project.status]}
                </Badge>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div className="flex items-center gap-2"><Calendar className="h-4 w-4 text-accent" /><span className="font-medium">{labels.period}:</span><span className="text-muted-foreground">{project.period}</span></div>
                <div className="flex items-center gap-2"><Users className="h-4 w-4 text-accent" /><span className="font-medium">{labels.role}:</span><span className="text-muted-foreground">{project.role}</span></div>
              </div>
              {project.collaborators && <p className="text-sm text-muted-foreground"><span className="font-medium">{labels.collaborators}:</span> {project.collaborators}</p>}
            </div>
          </div>
          <div className="space-y-3"><h3 className="text-sm font-medium text-foreground">{labels.technologies}:</h3><div className="flex flex-wrap gap-2">{project.technologies.map((tech, techIndex) => (<Badge key={techIndex} variant="secondary" className="px-3 py-1 text-xs bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors">{tech}</Badge>))}</div></div>
          <div className="space-y-3"><h3 className="text-sm font-medium text-foreground">{labels.achievements}:</h3><ul className="space-y-2">{project.achievements.map((achievement, achIndex) => (<li key={achIndex} className="flex items-start gap-2 text-sm text-muted-foreground"><span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" /><span>{achievement}</span></li>))}</ul></div>
          
          {/* --- 链接区域 & 新的折叠按钮 --- */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            {project.links?.github && <Button variant="outline" size="sm" asChild title={labels.links.github}><a href={project.links.github} target="_blank" rel="noopener noreferrer"><Github className="h-4 w-4" /></a></Button>}
            {project.links?.demo && <Button variant="outline" size="sm" asChild title={labels.links.demo}><a href={project.links.demo} target="_blank" rel="noopener noreferrer"><ExternalLink className="h-4 w-4" /></a></Button>}
            {project.links?.paper && <Button variant="outline" size="sm" asChild title={labels.links.paper}><a href={project.links.paper} target="_blank" rel="noopener noreferrer"><ExternalLink className="h-4 w-4" /></a></Button>}
            
            {/* 新增的折叠按钮 */}
            {hasDemoContent && (
              <Button variant="outline" size="sm" onClick={() => setIsDemoVisible(!isDemoVisible)} className="gap-2">
                {isDemoVisible ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                <span>{isDemoVisible ? (language === "zh" ? "收起演示" : "Hide Demo") : (language === "zh" ? "展开演示" : "Show Demo")}</span>
              </Button>
            )}
          </div>
        </div>
      </CardContent>

      {/* --- 可折叠的演示区域 --- */}
      <AnimatePresence>
        {isDemoVisible && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="overflow-hidden" // 确保子元素在动画过程中不溢出
          >
            {/* 演示区的背景，采用与卡片协调的玻璃质感 */}
            <div className="p-4 border-t border-white/10" style={{ background: "rgba(0,0,0,0.1)", backdropFilter: "blur(4px)" }}>
              {project.video ? (
                <video className="w-full rounded-md object-cover" controls poster="/assets/pictures/video-poster.jpg">
                  <source src={project.video} type="video/mp4" />
                  {language === "zh" ? "您的浏览器不支持视频播放" : "Your browser does not support video playback"}
                </video>
              ) : (
                <div className="w-full aspect-video bg-gradient-to-br from-accent/10 to-accent/5 flex items-center justify-center rounded-md">
                  <div className="text-center space-y-2">
                    <ImageIcon className="h-8 w-8 text-accent mx-auto" />
                    <p className="text-sm text-muted-foreground">{language === "zh" ? "暂无视频演示" : "No Video Demo"}</p>
                    {project.links?.demo && (
                       <Button variant="default" size="sm" asChild>
                         <a href={project.links.demo} target="_blank" rel="noopener noreferrer">{language === "zh" ? "访问在线链接" : "Visit Live Demo"}</a>
                       </Button>
                    )}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Card>
  )
}