"use client"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Phone, Shield, Award, Users, Clock, Star, CheckCircle, Heart, Stethoscope, Activity } from 'lucide-react'
import { useTheme } from '@/contexts/theme-context'

interface HomePageProps {
  setCurrentPage: (page: string) => void
}

export default function HomePage({ setCurrentPage }: HomePageProps) {
  const { theme } = useTheme()

  const getThemeClasses = () => {
    switch (theme) {
      case 'blue':
        return {
          gradient: 'from-blue-600 to-blue-800',
          gradientBg: 'from-blue-50 via-white to-blue-50',
          button: 'from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800',
          accent: 'text-blue-600',
          bg: 'bg-blue-50',
          badgeBg: 'from-blue-100 to-blue-200',
          badgeText: 'text-blue-800',
          badgeHover: 'hover:from-blue-200 hover:to-blue-300',
          iconBg: 'from-blue-100 to-blue-200',
          borderColor: 'border-blue-600',
          hoverBg: 'hover:bg-blue-600',
        }
      case 'red':
        return {
          gradient: 'from-red-600 to-red-800',
          gradientBg: 'from-red-50 via-white to-red-50',
          button: 'from-red-600 to-red-700 hover:from-red-700 hover:to-red-800',
          accent: 'text-red-600',
          bg: 'bg-red-50',
          badgeBg: 'from-red-100 to-red-200',
          badgeText: 'text-red-800',
          badgeHover: 'hover:from-red-200 hover:to-red-300',
          iconBg: 'from-red-100 to-red-200',
          borderColor: 'border-red-600',
          hoverBg: 'hover:bg-red-600',
        }
      case 'green':
        return {
          gradient: 'from-green-600 to-green-800',
          gradientBg: 'from-green-50 via-white to-green-50',
          button: 'from-green-600 to-green-700 hover:from-green-700 hover:to-green-800',
          accent: 'text-green-600',
          bg: 'bg-green-50',
          badgeBg: 'from-green-100 to-green-200',
          badgeText: 'text-green-800',
          badgeHover: 'hover:from-green-200 hover:to-green-300',
          iconBg: 'from-green-100 to-green-200',
          borderColor: 'border-green-600',
          hoverBg: 'hover:bg-green-600',
        }
      case 'purple':
        return {
          gradient: 'from-purple-600 to-purple-800',
          gradientBg: 'from-purple-50 via-white to-purple-50',
          button: 'from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800',
          accent: 'text-purple-600',
          bg: 'bg-purple-50',
          badgeBg: 'from-purple-100 to-purple-200',
          badgeText: 'text-purple-800',
          badgeHover: 'hover:from-purple-200 hover:to-purple-300',
          iconBg: 'from-purple-100 to-purple-200',
          borderColor: 'border-purple-600',
          hoverBg: 'hover:bg-purple-600',
        }
      case 'orange':
        return {
          gradient: 'from-orange-600 to-orange-800',
          gradientBg: 'from-orange-50 via-white to-orange-50',
          button: 'from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800',
          accent: 'text-orange-600',
          bg: 'bg-orange-50',
          badgeBg: 'from-orange-100 to-orange-200',
          badgeText: 'text-orange-800',
          badgeHover: 'hover:from-orange-200 hover:to-orange-300',
          iconBg: 'from-orange-100 to-orange-200',
          borderColor: 'border-orange-600',
          hoverBg: 'hover:bg-orange-600',
        }
      case 'pink':
        return {
          gradient: 'from-pink-600 to-pink-800',
          gradientBg: 'from-pink-50 via-white to-pink-50',
          button: 'from-pink-600 to-pink-700 hover:from-pink-700 hover:to-pink-800',
          accent: 'text-pink-600',
          bg: 'bg-pink-50',
          badgeBg: 'from-pink-100 to-pink-200',
          badgeText: 'text-pink-800',
          badgeHover: 'hover:from-pink-200 hover:to-pink-300',
          iconBg: 'from-pink-100 to-pink-200',
          borderColor: 'border-pink-600',
          hoverBg: 'hover:bg-pink-600',
        }
      default:
        return {
          gradient: 'from-blue-600 to-blue-800',
          gradientBg: 'from-blue-50 via-white to-blue-50',
          button: 'from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800',
          accent: 'text-blue-600',
          bg: 'bg-blue-50',
          badgeBg: 'from-blue-100 to-blue-200',
          badgeText: 'text-blue-800',
          badgeHover: 'hover:from-blue-200 hover:to-blue-300',
          iconBg: 'from-blue-100 to-blue-200',
          borderColor: 'border-blue-600',
          hoverBg: 'hover:bg-blue-600',
        }
    }
  }

  const themeClasses = getThemeClasses()

  const features = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Advanced Medical Care",
      description: "State-of-the-art equipment and latest medical technologies",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Expert Medical Team",
      description: "Highly qualified doctors with years of experience",
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "24/7 Emergency Care",
      description: "Round-the-clock emergency medical services",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Compassionate Care",
      description: "Patient-centered approach with personalized treatment",
    },
  ]

  const stats = [
    { number: "15+", label: "Years of Excellence", icon: <Award className="w-6 h-6" /> },
    { number: "25,000+", label: "Happy Patients", icon: <Users className="w-6 h-6" /> },
    { number: "50+", label: "Medical Specialists", icon: <Stethoscope className="w-6 h-6" /> },
    { number: "99%", label: "Success Rate", icon: <Activity className="w-6 h-6" /> },
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className={`bg-gradient-to-br ${themeClasses.gradientBg} py-20 overflow-hidden`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <Badge className={`mb-6 bg-gradient-to-r ${themeClasses.badgeBg} ${themeClasses.badgeText} ${themeClasses.badgeHover} px-4 py-2 text-sm font-semibold`}>
                  ✨ Trusted Healthcare Since 2008
                </Badge>
                <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                  <span className={`bg-gradient-to-r ${themeClasses.gradient} bg-clip-text text-transparent`}>
                    PureWell Versha
                  </span>
                  <br />
                  Health Clinic
                </h1>
                <p className={`text-2xl ${themeClasses.accent} mb-6 font-semibold`}>Your health is our priority.</p>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Welcome to PureWell Health Clinic, where compassionate care meets medical excellence. Our experienced
                  team of healthcare professionals is dedicated to providing comprehensive, personalized healthcare
                  services for you and your family with the highest standards of medical care.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className={`bg-gradient-to-r ${themeClasses.button} text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300`}
                  onClick={() => setCurrentPage("contact")}
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Appointment Now
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className={`border-2 ${themeClasses.borderColor} ${themeClasses.accent} ${themeClasses.hoverBg} hover:text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 bg-transparent`}
                  onClick={() => setCurrentPage("services")}
                >
                  Explore Our Services
                </Button>
              </div>
              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="text-center p-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <div className={`flex justify-center mb-2 ${themeClasses.accent}`}>{stat.icon}</div>
                    <div className={`text-2xl font-bold ${themeClasses.accent}`}>{stat.number}</div>
                    <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10">
                <img
                  src="/group.jpg"
                  alt="PureWell Health Clinic"
                  className="rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
                />
              </div>
              {/* Floating Cards */}
              <div className="absolute -top-6 -left-6 bg-white p-4 rounded-xl shadow-xl z-20 animate-pulse">
                <div className="flex items-center">
                  <div className="bg-green-100 p-2 rounded-lg mr-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-900">24/7 Available</div>
                    <div className="text-xs text-gray-600">Emergency Care</div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-xl z-20">
                <div className="flex items-center">
                  <Phone className={`w-5 h-5 ${themeClasses.accent} mr-3`} />
                  <div>
                    <div className="text-sm font-semibold text-gray-900">Emergency Line</div>
                    <div className={`${themeClasses.accent} font-bold`}>(555) 911-HELP</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Why Choose PureWell?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We combine cutting-edge medical technology with compassionate care to provide the best healthcare
              experience for our patients.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-0 shadow-lg"
              >
                <CardContent className="p-8 text-center">
                  <div className={`bg-gradient-to-r ${themeClasses.iconBg} p-4 rounded-2xl inline-block mb-6 ${themeClasses.accent}`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-20 bg-gradient-to-r ${themeClasses.gradient}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Take Care of Your Health?</h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Don't wait for tomorrow. Book your appointment today and take the first step towards better health with
              our expert medical team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className={`bg-white ${themeClasses.accent} hover:bg-gray-100 px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300`}
                onClick={() => setCurrentPage("contact")}
              >
                <Calendar className="w-5 h-5 mr-2" />
                Book Your Appointment
              </Button>
              <Button
                variant="outline"
                size="lg"
                className={`border-2 border-white text-white hover:bg-white ${themeClasses.hoverBg.replace('hover:bg-', 'hover:text-')} px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 bg-transparent`}
                onClick={() => setCurrentPage("doctors")}
              >
                Meet Our Doctors
              </Button>
            </div>
          </div>
        </div>
      </section>

       {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center mb-4">
                <div className={`bg-gradient-to-r ${themeClasses.gradient} p-2 rounded-xl mr-3`}>
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <div>
                  <span className="text-xl font-bold">PureWell Health Clinic</span>
                  <div className="text-sm text-gray-400">Your Health, Our Priority</div>
                </div>
              </div>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Providing compassionate, comprehensive healthcare services for you and your family since 2008. Your
                trusted partner in health and wellness.
              </p>
              <div className="flex items-center space-x-4 mb-6">
                <div className="flex items-center text-sm">
                  <Star className="w-4 h-4 text-yellow-400 mr-1" />
                  <span>4.9/5 Patient Rating</span>
                </div>
                <div className="flex items-center text-sm">
                  <Award className="w-4 h-4 text-blue-400 mr-1" />
                  <span>ISO Certified</span>
                </div>
              </div>
              
              {/* Social Media Icons */}
              <div className="flex space-x-4">
                <a 
                  href="https://www.instagram.com/book.lynk/
" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gray-800 hover:bg-pink-600 p-3 rounded-lg transition-all duration-300 transform hover:scale-110"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                
                <a 
                  href="https://www.youtube.com/@BooklynkServices
" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gray-800 hover:bg-red-600 p-3 rounded-lg transition-all duration-300 transform hover:scale-110"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
                
                <a 
                  href="https://x.com/booklynkservice
" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gray-800 hover:bg-blue-500 p-3 rounded-lg transition-all duration-300 transform hover:scale-110"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                
                <a 
                  href="https://www.facebook.com/profile.php?id=61574782382680

" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gray-800 hover:bg-blue-600 p-3 rounded-lg transition-all duration-300 transform hover:scale-110"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-lg">Quick Links</h4>
              <div className="space-y-3 text-gray-300">
                <button
                  onClick={() => setCurrentPage("services")}
                  className={`block hover:${themeClasses.accent.replace('text-', 'text-').replace('-600', '-400')} transition-colors`}
                >
                  Our Services
                </button>
                <button
                  onClick={() => setCurrentPage("doctors")}
                  className={`block hover:${themeClasses.accent.replace('text-', 'text-').replace('-600', '-400')} transition-colors`}
                >
                  Our Doctors
                </button>
                <div className={`hover:${themeClasses.accent.replace('text-', 'text-').replace('-600', '-400')} transition-colors cursor-pointer`}>Patient Portal</div>
                <div className={`hover:${themeClasses.accent.replace('text-', 'text-').replace('-600', '-400')} transition-colors cursor-pointer`}>Insurance</div>
                <div className={`hover:${themeClasses.accent.replace('text-', 'text-').replace('-600', '-400')} transition-colors cursor-pointer`}>Health Tips</div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-lg">Emergency Contact</h4>
              <div className="space-y-3 text-gray-300">
                <div>24/7 Emergency Line</div>
                <div className="text-red-400 font-bold text-lg">(555) 911-HELP</div>
                <div className="text-sm text-gray-400">For life-threatening emergencies, call 911</div>
                <div className="mt-4">
                  <div className="text-sm">Main Office Number</div>
                  <div className={`${themeClasses.accent.replace('text-', 'text-').replace('-600', '-400')} font-semibold`}>+91 96503 16607</div>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy;  January 2024 | Book Lynk Services. All rights reserved. | 624, tower-1 Assotech business cresterra Sector 135, Noida 201301</p>
          </div>
        </div>
      </footer>
    </div>
  )
}