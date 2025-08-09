"use client"

import { useState } from "react"
import HomePage from "./components/HomePage"
import ServicesPage from "./components/ServicesPage"
import DoctorsPage from "./components/DoctorsPage"
import ContactPage from "./components/ContactPage"
import BlogPage from "./components/BlogPage"
import Navigation from "./components/Navigation"
import { ThemeProvider } from "@/contexts/theme-context"

export default function PureWellClinic() {
  const [currentPage, setCurrentPage] = useState("home")

  const renderPage = () => {
    switch (currentPage) {
      case "home":
      case "":
        return <HomePage setCurrentPage={setCurrentPage} />
      case "services":
        return <ServicesPage setCurrentPage={setCurrentPage} />
      case "doctors":
        return <DoctorsPage setCurrentPage={setCurrentPage} />
      case "blog":
        return <BlogPage />
      case "contact":
        return <ContactPage setCurrentPage={setCurrentPage} />
      default:
        return <HomePage setCurrentPage={setCurrentPage} />
    }
  }

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white">
        <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
        {renderPage()}
      </div>
    </ThemeProvider>
  )
}
