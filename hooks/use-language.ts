"use client"

import { useState, useEffect } from "react"

export type Language = "zh" | "en"

export function useLanguage() {
  const [language, setLanguage] = useState<Language>("zh")

  // Load language preference from localStorage on mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem("portfolio-language") as Language
    if (savedLanguage && (savedLanguage === "zh" || savedLanguage === "en")) {
      setLanguage(savedLanguage)
    }
  }, [])

  // Save language preference to localStorage when changed
  const changeLanguage = (newLanguage: Language) => {
    setLanguage(newLanguage)
    localStorage.setItem("portfolio-language", newLanguage)
  }

  return {
    language,
    setLanguage: changeLanguage,
    toggleLanguage: () => changeLanguage(language === "zh" ? "en" : "zh"),
  }
}
