"use client"

import { useState } from "react"
import { Heart, Menu, X, Phone } from "lucide-react"

interface NavigationProps {
  currentPage: string
  setCurrentPage: (page: string) => void
}

export default function Navigation({ currentPage, setCurrentPage }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navigation = [
    { id: "home", label: "HOME" },
    { id: "services", label: "SERVICES & TREATMENTS" },
    { id: "doctors", label: "OUR DOCTORS" },
    { id: "contact", label: "CONTACT & BOOK" },
  ]

  const handleNavigation = (pageId: string) => {
    setCurrentPage(pageId)
    setMobileMenuOpen(false)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <nav className="bg-white shadow-xl sticky top-0 z-50 border-b-4 border-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center cursor-pointer" onClick={() => handleNavigation("home")}>
            <div className="flex-shrink-0 flex items-center">
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-2 rounded-xl mr-3">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <div>
                <span className="text-2xl font-bold text-gray-900">PureWell Health Clinic</span>
                <div className="text-sm text-blue-600 font-medium">Your Health, Our Priority</div>
              </div>
            </div>
          </div>

          {/* Emergency Contact */}
          <div className="hidden lg:flex items-center bg-red-50 px-4 py-2 rounded-lg border border-red-200">
            <Phone className="w-4 h-4 text-red-600 mr-2" />
            <div className="text-sm">
              <div className="text-red-600 font-semibold">Emergency: (555) 911-HELP</div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-2">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavigation(item.id)}
                  className={`px-4 py-3 rounded-lg text-sm font-semibold transition-all duration-300 transform hover:scale-105 ${
                    currentPage === item.id
                      ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg"
                      : "text-gray-700 hover:bg-blue-50 hover:text-blue-600 hover:shadow-md"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 hover:text-blue-600 p-2 rounded-lg hover:bg-blue-50 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t shadow-lg">
          <div className="px-4 pt-4 pb-6 space-y-2">
            {navigation.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigation(item.id)}
                className={`block px-4 py-3 rounded-lg text-base font-semibold w-full text-left transition-all duration-300 ${
                  currentPage === item.id
                    ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg"
                    : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="mt-4 p-3 bg-red-50 rounded-lg border border-red-200">
              <div className="flex items-center">
                <Phone className="w-4 h-4 text-red-600 mr-2" />
                <div className="text-sm">
                  <div className="text-red-600 font-semibold">Emergency: (555) 911-HELP</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
