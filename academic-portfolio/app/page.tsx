"use client"

import { ProfileSidebar } from "@/components/profile-sidebar"
import { Header } from "@/components/header"
import { EducationSection } from "@/components/education-section"
import { AchievementsPage } from "@/components/achievements-page"
import { ProjectsSection } from "@/components/projects-section"
import { useLanguage } from "@/hooks/use-language"
import { useState } from "react"

export default function HomePage() {
  const { language, setLanguage } = useLanguage()
  const [activeSection, setActiveSection] = useState("education")

  return (
    <div className="min-h-screen bg-background">
      <Header language={language} setLanguage={setLanguage} />
      <div className="flex">
        <ProfileSidebar language={language} activeSection={activeSection} setActiveSection={setActiveSection} />
        <main className="flex-1 ml-80 p-8">
          <div className="max-w-4xl mx-auto">
            {activeSection === "education" && <EducationSection language={language} />}
            {activeSection === "achievements" && <AchievementsPage language={language} />}
            {activeSection === "projects" && <ProjectsSection language={language} />}
          </div>
        </main>
      </div>
    </div>
  )
}
