import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "李天召 - 学术作品集 | Tianzhao Li - Academic Portfolio",
  description:
    "李天召的个人学术作品集，展示教育经历、研究成果和项目经验 | Tianzhao Li's academic portfolio showcasing education, research achievements, and project experience",
  generator: "v0.app",
  keywords: [
    "学术作品集",
    "Academic Portfolio",
    "李天召",
    "Tianzhao Li",
    "计算机视觉",
    "Computer Vision",
    "机器学习",
    "Machine Learning",
  ],
  authors: [{ name: "李天召" }, { name: "Tianzhao Li" }],
  openGraph: {
    title: "李天召 - 学术作品集 | Tianzhao Li - Academic Portfolio",
    description: "展示教育经历、研究成果和项目经验的个人学术作品集",
    type: "website",
    locale: "zh_CN",
    alternateLocale: "en_US",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh-CN">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
