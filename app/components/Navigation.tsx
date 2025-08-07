"use client"
import { useState } from "react"
import { Heart, Menu, X, Phone, ChevronDown, Palette } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { useTheme } from '@/contexts/theme-context'

const themes = [
  { name: 'Medical Blue', value: 'blue' as const, color: 'bg-blue-500' },
  { name: 'Emergency Red', value: 'red' as const, color: 'bg-red-500' },
  { name: 'Health Green', value: 'green' as const, color: 'bg-green-500' },
  { name: 'Care Purple', value: 'purple' as const, color: 'bg-purple-500' },
  { name: 'Wellness Orange', value: 'orange' as const, color: 'bg-orange-500' },
  { name: 'Comfort Pink', value: 'pink' as const, color: 'bg-pink-500' },
]

interface NavigationProps {
  currentPage: string
  setCurrentPage: (page: string) => void
}

export default function Navigation({ currentPage, setCurrentPage }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const currentTheme = themes.find(t => t.value === theme)

  const getThemeClasses = () => {
    switch (theme) {
      case 'blue':
        return {
          gradient: 'from-blue-600 to-blue-700',
          border: 'border-blue-600',
          accent: 'text-blue-600',
          hoverBg: 'hover:bg-blue-50',
          hoverText: 'hover:text-blue-600',
          activeBg: 'bg-gradient-to-r from-blue-600 to-blue-700',
        }
      case 'red':
        return {
          gradient: 'from-red-600 to-red-700',
          border: 'border-red-600',
          accent: 'text-red-600',
          hoverBg: 'hover:bg-red-50',
          hoverText: 'hover:text-red-600',
          activeBg: 'bg-gradient-to-r from-red-600 to-red-700',
        }
      case 'green':
        return {
          gradient: 'from-green-600 to-green-700',
          border: 'border-green-600',
          accent: 'text-green-600',
          hoverBg: 'hover:bg-green-50',
          hoverText: 'hover:text-green-600',
          activeBg: 'bg-gradient-to-r from-green-600 to-green-700',
        }
      case 'purple':
        return {
          gradient: 'from-purple-600 to-purple-700',
          border: 'border-purple-600',
          accent: 'text-purple-600',
          hoverBg: 'hover:bg-purple-50',
          hoverText: 'hover:text-purple-600',
          activeBg: 'bg-gradient-to-r from-purple-600 to-purple-700',
        }
      case 'orange':
        return {
          gradient: 'from-orange-600 to-orange-700',
          border: 'border-orange-600',
          accent: 'text-orange-600',
          hoverBg: 'hover:bg-orange-50',
          hoverText: 'hover:text-orange-600',
          activeBg: 'bg-gradient-to-r from-orange-600 to-orange-700',
        }
      case 'pink':
        return {
          gradient: 'from-pink-600 to-pink-700',
          border: 'border-pink-600',
          accent: 'text-pink-600',
          hoverBg: 'hover:bg-pink-50',
          hoverText: 'hover:text-pink-600',
          activeBg: 'bg-gradient-to-r from-pink-600 to-pink-700',
        }
      default:
        return {
          gradient: 'from-blue-600 to-blue-700',
          border: 'border-blue-600',
          accent: 'text-blue-600',
          hoverBg: 'hover:bg-blue-50',
          hoverText: 'hover:text-blue-600',
          activeBg: 'bg-gradient-to-r from-blue-600 to-blue-700',
        }
    }
  }

  const themeClasses = getThemeClasses()

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
    <nav className={`bg-white shadow-xl sticky top-0 z-50 border-b-4 ${themeClasses.border}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center cursor-pointer" onClick={() => handleNavigation("home")}>
            <div className="flex-shrink-0 flex items-center">
              <div className={`bg-gradient-to-r ${themeClasses.gradient} p-2 rounded-xl mr-3`}>
                <Heart className="w-8 h-8 text-white" />
              </div>
              <div>
                <span className="text-2xl font-bold text-gray-900">Versha Health Clinic</span>
                <div className={`text-sm ${themeClasses.accent} font-medium`}>Your Health, Our Priority</div>
              </div>
            </div>
          </div>

          {/* Desktop Navigation & Theme Switcher */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Navigation Links */}
            <div className="flex items-baseline space-x-2">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavigation(item.id)}
                  className={`px-4 py-3 rounded-lg text-sm font-semibold transition-all duration-300 transform hover:scale-105 ${
                    currentPage === item.id
                      ? `${themeClasses.activeBg} text-white shadow-lg`
                      : `text-gray-700 ${themeClasses.hoverBg} ${themeClasses.hoverText} hover:shadow-md`
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Theme Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="gap-2 ml-4">
                  <Palette className="h-4 w-4" />
                  <div className={`w-3 h-3 rounded-full ${currentTheme?.color}`} />
                  <span className="hidden lg:inline">{currentTheme?.name}</span>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                {themes.map((themeOption) => (
                  <DropdownMenuItem
                    key={themeOption.value}
                    onClick={() => setTheme(themeOption.value)}
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <div className={`w-4 h-4 rounded-full ${themeOption.color}`} />
                    {themeOption.name}
                    {theme === themeOption.value && (
                      <span className="ml-auto text-xs">✓</span>
                    )}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            {/* Mobile Theme Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="gap-1">
                  <div className={`w-3 h-3 rounded-full ${currentTheme?.color}`} />
                  <ChevronDown className="h-3 w-3" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                {themes.map((themeOption) => (
                  <DropdownMenuItem
                    key={themeOption.value}
                    onClick={() => setTheme(themeOption.value)}
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <div className={`w-4 h-4 rounded-full ${themeOption.color}`} />
                    {themeOption.name}
                    {theme === themeOption.value && (
                      <span className="ml-auto text-xs">✓</span>
                    )}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`text-gray-700 ${themeClasses.hoverText} p-2 rounded-lg ${themeClasses.hoverBg} transition-colors`}
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
                    ? `${themeClasses.activeBg} text-white shadow-lg`
                    : `text-gray-700 ${themeClasses.hoverBg} ${themeClasses.hoverText}`
                }`}
              >
                {item.label}
              </button>
            ))}
            
            {/* Mobile Emergency Contact */}
            <div className="mt-4 p-3 bg-red-50 rounded-lg border border-red-200">
              <div className="flex items-center">
                <Phone className="w-4 h-4 text-red-600 mr-2" />
                <div className="text-sm">
                  <div className="text-red-600 font-semibold">Emergency: (555) 911-HELP</div>
                </div>
              </div>
            </div>

            {/* Mobile Theme Info */}
            <div className={`mt-2 p-3 ${themeClasses.hoverBg} rounded-lg border ${themeClasses.border}`}>
              <div className="flex items-center">
                <Palette className={`w-4 h-4 ${themeClasses.accent} mr-2`} />
                <div className="text-sm">
                  <div className={`${themeClasses.accent} font-semibold`}>Current Theme: {currentTheme?.name}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
