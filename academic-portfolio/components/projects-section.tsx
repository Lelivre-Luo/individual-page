"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Gamepad2, ExternalLink, Github, Calendar, Users, Play, ImageIcon } from "lucide-react"

interface ProjectsSectionProps {
  language: "zh" | "en"
}

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

export function ProjectsSection({ language }: ProjectsSectionProps) {
  const content = {
    zh: {
      title: "项目成果",
      projects: [
        {
          title: "VSPO-电竞赛事直转播系统",
          description:
            "合作Apple Vision Pro电竞赛事直转播系统的交互系统设计，负责设计观赛界面的布局与交互、三维地图的交互、沉浸式赛场场景、赛事数据的数据存储结构。使用AVPlayer框架和Windows框架开发了观赛界面及其配套交互逻辑，使用RealityKit框架和Space框架开发了三维地图的交互逻辑、沉浸式赛场场景，使用Insta 360和HLS协议实现了赛事直播流的接入、实时沉浸式赛场场景。",
          period: "2024年5月 - 2025年9月",
          role: "交互设计/开发",
          technologies: ["Swift", "AVPlayer", "RealityKit", "Material"],
          achievements: [
            "项目设计：合作Apple Vision Pro电竞赛事直转播系统的交互系统设计",
            "技术评估：负责项目开发技术评估，包括观赛界面构建、三维地图模型交互等技术栈路径评估",
            "项目开发：使用AVPlayer框架和Windows框架开发观赛界面及其配套交互逻辑",
            "技术交流：负责项目开发的技术分享与交流，与Apple公司Vision Pro设计师进行技术交流",
          ],
          collaborators: "与Apple公司合作",
          status: "ongoing" as const,
        },
        {
          title: "多模态智能交互虚拟数字人",
          description:
            "合作开发多模态智能交互数字人。借鉴Bert-VITS2项目，使用ONNX框架、数据分块思维，开发了兼顾发音准确性、发音连贯性、语调的语音生成系统。使用数据分块思维开发流式语音生成系统，攻克了语音生成模型在加载和推理时产生的高延迟问题，将虚拟数字人的回应延迟由3s缩短至1s。",
          period: "2023年10月 - 至今",
          role: "交互设计/开发/运营",
          technologies: ["Python", "GME", "ChatGPT API", "Bert-VITS2", "Omniverse Audio2Face", "multiprocess"],
          achievements: [
            "项目开发：合作开发多模态智能交互数字人，使用ONNX框架、数据分块思维开发语音生成系统",
            "项目运营：负责2024 BIRTV中国传媒大学数字人研究院《少年李白》项目运营",
            "学术成果孵化：提供技术支持与技术文档，辅助实验室成员完成学术成果孵化",
            "技术优化：使用数据分块思维开发流式语音生成系统，攻克高延迟问题",
          ],
          collaborators: "与中国传媒大学实验室团队、百度合作",
          status: "ongoing" as const,
          video: "/assets/videos/LibaiTheYouth.mp4",
        },
        {
          title: "TRiMM",
          description:
            "合作开发基于Transformer框架的虚拟数字人动作匹配和生成系统，动作生成的延迟控制在0.2s之内。使用Bert和Wav2Vec2模型开发语义提取模块、使用动作图模型开发动作图与动作搜索逻辑模块。负责项目整体的测试与优化，负责用户调研实验的制定与数据整理、分析。",
          period: "2024年10月 - 至今",
          role: "研发",
          technologies: ["Transformer", "Temporal-Space attention", "Bert", "WAV2VEC2", "websocket"],
          achievements: [
            "项目开发：合作开发基于Transformer框架的虚拟数字人动作匹配和生成系统",
            "技术实现：使用Bert和Wav2Vec2模型开发语义提取模块、动作图模型开发动作图与动作搜索逻辑模块",
            "项目测试：负责项目整体的测试与优化",
            "学术成果孵化：负责用户调研实验的制定与数据整理、分析",
          ],
          collaborators: "与实验室团队合作",
          status: "ongoing" as const,
        },
        {
          title: "Jump Jump @ Kinect",
          description:
            "合作开发Kinect体感交互的\"跳一跳\"运动小游戏程序。使用Kinect传感器和Kinect for Windows SDK v2开发了特定动作状态识别系统、多阶段的姿态检测算法并驱动\"跳一跳\"小游戏系统。",
          period: "2023年5月 - 2023年6月",
          role: "交互设计/开发",
          technologies: ["Kinect SDK"],
          achievements: [
            "项目开发：合作开发Kinect体感交互的\"跳一跳\"运动小游戏程序",
            "技术实现：使用Kinect传感器和Kinect for Windows SDK v2开发特定动作状态识别系统",
            "算法开发：开发多阶段的姿态检测算法并驱动\"跳一跳\"小游戏系统",
          ],
          collaborators: "与团队合作开发",
          status: "completed" as const,
          video: "/assets/videos/JumpJumpofKinect.mp4",
        },
        {
          title: "《数字之心》",
          description:
            "负责《数字之心》沉浸式虚拟数字人交互项目从概念阶段到技术落地的全流程策划。负责核心概念和剧情的编写，负责制定虚拟数字人的技术路线，负责沉浸式体验场景的开发平台、开发框架选择，制定沉浸式体验场景的交互形式、开发路线。使用LLM、LangChain、Embedding模型等开发了可以进行多层次思考、具备长期记忆能力和记忆总结能力、可以自主执行动作指令的AI-Agent。",
          period: "2025年6月 - 至今",
          role: "项目策划/交互设计/项目开发",
          technologies: ["OpenXR", "LangChain", "LLM", "Embedding", "Websocket"],
          achievements: [
            "项目策划：负责《数字之心》沉浸式虚拟数字人交互项目从概念阶段到技术落地的全流程策划",
            "交互设计：负责AI Agent虚拟数字人、VR沉浸空间的交互设计",
            "项目开发：使用LLM、LangChain、Embedding模型等开发AI-Agent",
            "技术集成：使用OpenXR架构、Websocket框架和Unreal Engine平台开发VR沉浸式体验交互",
          ],
          collaborators: "独立项目",
          status: "ongoing" as const,
        },
      ],
      labels: {
        role: "角色",
        period: "项目周期",
        technologies: "使用技术",
        achievements: "项目职责",
        collaborators: "合作伙伴",
        status: {
          completed: "已完成",
          ongoing: "进行中",
          published: "已发表",
        },
        links: {
          github: "查看代码",
          demo: "在线演示",
          paper: "查看论文",
        },
      },
    },
    en: {
      title: "Project Portfolio",
      projects: [
        {
          title: "VSPO-Esports Live Broadcasting System",
          description:
            "Collaborated on Apple Vision Pro esports live broadcasting system interaction design, responsible for designing spectator interface layout and interaction, 3D map interaction, immersive arena scenes, and event data storage structure. Developed spectator interface and supporting interaction logic using AVPlayer framework and Windows framework, developed 3D map interaction logic and immersive arena scenes using RealityKit framework and Space framework, implemented event live stream integration and real-time immersive arena scenes using Insta 360 and HLS protocol.",
          period: "May 2024 - Sept 2025",
          role: "Interaction Design/Development",
          technologies: ["Swift", "AVPlayer", "RealityKit", "Material"],
          achievements: [
            "Project Design: Collaborated on Apple Vision Pro esports live broadcasting system interaction design",
            "Technical Assessment: Responsible for project development technical assessment including spectator interface construction and 3D map model interaction",
            "Project Development: Developed spectator interface and supporting interaction logic using AVPlayer framework and Windows framework",
            "Technical Exchange: Responsible for technical sharing and exchange, conducted technical exchanges with Apple Vision Pro designers",
          ],
          collaborators: "Collaborated with Apple Inc.",
          status: "ongoing" as const,
        },
        {
          title: "Multimodal Intelligent Interactive Virtual Digital Human",
          description:
            "Collaborated on developing multimodal intelligent interactive digital human. Drawing from Bert-VITS2 project, used ONNX framework and data chunking approach to develop speech generation system that balances pronunciation accuracy, pronunciation coherence, and intonation. Developed streaming speech generation system using data chunking approach, solved high latency issues during model loading and inference, reduced virtual digital human response delay from 3s to 1s.",
          period: "Oct 2023 - Present",
          role: "Interaction Design/Development/Operations",
          technologies: ["Python", "GME", "ChatGPT API", "Bert-VITS2", "Omniverse Audio2Face", "multiprocess"],
          achievements: [
            "Project Development: Collaborated on developing multimodal intelligent interactive digital human using ONNX framework and data chunking approach",
            "Project Operations: Led 2024 BIRTV Communication University of China Digital Human Research Institute 'Li Bai the Youth' project operations",
            "Academic Incubation: Provided technical support and documentation to assist lab members in academic achievement incubation",
            "Technical Optimization: Developed streaming speech generation system using data chunking approach to solve high latency issues",
          ],
          collaborators: "Collaborated with CUC Lab team and Baidu",
          status: "ongoing" as const,
          video: "/assets/videos/LibaiTheYouth.mp4",
        },
        {
          title: "TRiMM",
          description:
            "Collaborated on developing Transformer-based virtual digital human motion matching and generation system, controlling motion generation latency within 0.2s. Developed semantic extraction module using Bert and Wav2Vec2 models, developed motion graph and motion search logic module using motion graph models. Responsible for overall project testing and optimization, user research experiment design and data collection and analysis.",
          period: "Oct 2024 - Present",
          role: "Research & Development",
          technologies: ["Transformer", "Temporal-Space attention", "Bert", "WAV2VEC2", "websocket"],
          achievements: [
            "Project Development: Collaborated on developing Transformer-based virtual digital human motion matching and generation system",
            "Technical Implementation: Developed semantic extraction module using Bert and Wav2Vec2 models, motion graph and motion search logic module",
            "Project Testing: Responsible for overall project testing and optimization",
            "Academic Incubation: Responsible for user research experiment design and data collection and analysis",
          ],
          collaborators: "Collaborated with lab team",
          status: "ongoing" as const,
        },
        {
          title: "Jump Jump @ Kinect",
          description:
            "Collaborated on developing Kinect motion-sensing 'Jump Jump' sports mini-game program. Used Kinect sensor and Kinect for Windows SDK v2 to develop specific action state recognition system, multi-stage pose detection algorithm and drive 'Jump Jump' mini-game system.",
          period: "May 2023 - June 2023",
          role: "Interaction Design/Development",
          technologies: ["Kinect SDK"],
          achievements: [
            "Project Development: Collaborated on developing Kinect motion-sensing 'Jump Jump' sports mini-game program",
            "Technical Implementation: Developed specific action state recognition system using Kinect sensor and Kinect for Windows SDK v2",
            "Algorithm Development: Developed multi-stage pose detection algorithm and drove 'Jump Jump' mini-game system",
          ],
          collaborators: "Collaborated with team",
          status: "completed" as const,
          video: "/assets/videos/JumpJumpofKinect.mp4",
        },
        {
          title: "Digital Heart",
          description:
            "Responsible for full-process planning of 'Digital Heart' immersive virtual digital human interaction project from concept stage to technical implementation. Responsible for core concept and storyline writing, virtual digital human technical roadmap planning, immersive experience scene development platform and framework selection, immersive experience scene interaction form and development roadmap planning. Used LLM, LangChain, Embedding models to develop AI-Agent capable of multi-level thinking, long-term memory and memory summarization, and autonomous action execution.",
          period: "June 2025 - Present",
          role: "Project Planning/Interaction Design/Development",
          technologies: ["OpenXR", "LangChain", "LLM", "Embedding", "Websocket"],
          achievements: [
            "Project Planning: Responsible for full-process planning of 'Digital Heart' immersive virtual digital human interaction project from concept to technical implementation",
            "Interaction Design: Responsible for AI Agent virtual digital human and VR immersive space interaction design",
            "Project Development: Developed AI-Agent using LLM, LangChain, Embedding models",
            "Technical Integration: Developed VR immersive experience interaction using OpenXR architecture, Websocket framework and Unreal Engine platform",
          ],
          collaborators: "Independent project",
          status: "ongoing" as const,
        },
      ],
      labels: {
        role: "Role",
        period: "Project Period",
        technologies: "Technologies Used",
        achievements: "Project Responsibilities",
        collaborators: "Collaborators",
        status: {
          completed: "Completed",
          ongoing: "Ongoing",
          published: "Published",
        },
        links: {
          github: "View Code",
          demo: "Live Demo",
          paper: "View Paper",
        },
      },
    },
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800 border-green-200"
      case "ongoing":
        return "bg-blue-100 text-blue-800 border-blue-200"
      case "published":
        return "bg-purple-100 text-purple-800 border-purple-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2 text-balance">{content[language].title}</h1>
      </div>

      <div className="space-y-8">
        {content[language].projects.map((project, index) => (
          <div key={index} className="relative">
            {project.video ? (
              <div className="absolute -bottom-4 -right-4 z-10 w-96 h-64 bg-card border border-border rounded-lg shadow-lg overflow-hidden">
                <video 
                  className="w-full h-full object-cover" 
                  controls 
                  poster="/assets/pictures/video-poster.jpg"
                >
                  <source src={project.video} type="video/mp4" />
                  {language === "zh" ? "您的浏览器不支持视频播放" : "Your browser does not support video playback"}
                </video>
              </div>
            ) : (
              <div className="absolute -bottom-4 -right-4 z-10 w-96 h-64 bg-card border border-border rounded-lg shadow-lg overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-accent/10 to-accent/5 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="flex justify-center gap-4">
                      <ImageIcon className="h-8 w-8 text-accent" />
                      <Play className="h-8 w-8 text-accent" />
                    </div>
                    <p className="text-sm text-muted-foreground">{language === "zh" ? "演示内容" : "Demo Content"}</p>
                  </div>
                </div>
              </div>
            )}

            <Card className="border-border bg-card/50 shadow-sm">
              <CardContent className="p-8">
                <div className="space-y-6">
                  {/* Header */}
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
                          {content[language].labels.status[project.status]}
                        </Badge>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-accent" />
                          <span className="font-medium">{content[language].labels.period}:</span>
                          <span className="text-muted-foreground">{project.period}</span>
                        </div>

                        <div className="flex items-center gap-2">
                          <Users className="h-4 w-4 text-accent" />
                          <span className="font-medium">{content[language].labels.role}:</span>
                          <span className="text-muted-foreground">{project.role}</span>
                        </div>
                      </div>

                      {project.collaborators && (
                        <p className="text-sm text-muted-foreground">
                          <span className="font-medium">{content[language].labels.collaborators}:</span>{" "}
                          {project.collaborators}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="space-y-3">
                    <h3 className="text-sm font-medium text-foreground">{content[language].labels.technologies}:</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="secondary"
                          className="px-3 py-1 text-xs bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Achievements */}
                  <div className="space-y-3">
                    <h3 className="text-sm font-medium text-foreground">{content[language].labels.achievements}:</h3>
                    <ul className="space-y-2">
                      {project.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Links */}
                  {project.links && (
                    <div className="flex flex-wrap gap-3 pt-2">
                      {project.links.github && (
                        <Button variant="outline" size="sm" asChild title={content[language].labels.links.github}>
                          <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                            <Github className="h-4 w-4" />
                          </a>
                        </Button>
                      )}

                      {project.links.demo && (
                        <Button variant="outline" size="sm" asChild title={content[language].labels.links.demo}>
                          <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        </Button>
                      )}

                      {project.links.paper && (
                        <Button variant="outline" size="sm" asChild title={content[language].labels.links.paper}>
                          <a href={project.links.paper} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        </Button>
                      )}
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  )
}
