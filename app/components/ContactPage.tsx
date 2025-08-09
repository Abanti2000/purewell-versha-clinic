"use client"
import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Clock, Calendar, User, Stethoscope, CreditCard, Shield, CheckCircle, AlertCircle, Heart, Star, Navigation, Award } from 'lucide-react'
import { useTheme } from '@/contexts/theme-context'

interface ContactPageProps {
  setCurrentPage: (page: string) => void
}

export default function ContactPage({ setCurrentPage }: ContactPageProps) {
  const { theme } = useTheme()

  const getThemeClasses = () => {
    switch (theme) {
      case 'blue':
        return {
          gradient: 'from-blue-600 to-blue-800',
          gradientBg: 'from-blue-50 to-white',
          button: 'from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800',
          accent: 'text-blue-600',
          bg: 'bg-blue-50',
          cardHeaderBg: 'from-blue-600 to-blue-700',
          contactIconBg: 'bg-blue-100',
          contactIconText: 'text-blue-600',
          focusRing: 'focus:ring-blue-500 focus:border-blue-500',
          statsColors: {
            first: 'from-green-50 to-green-100',
            firstText: 'text-green-600',
            second: 'from-blue-50 to-blue-100',
            secondText: 'text-blue-600',
          }
        }
      case 'red':
        return {
          gradient: 'from-red-600 to-red-800',
          gradientBg: 'from-red-50 to-white',
          button: 'from-red-600 to-red-700 hover:from-red-700 hover:to-red-800',
          accent: 'text-red-600',
          bg: 'bg-red-50',
          cardHeaderBg: 'from-red-600 to-red-700',
          contactIconBg: 'bg-red-100',
          contactIconText: 'text-red-600',
          focusRing: 'focus:ring-red-500 focus:border-red-500',
          statsColors: {
            first: 'from-green-50 to-green-100',
            firstText: 'text-green-600',
            second: 'from-red-50 to-red-100',
            secondText: 'text-red-600',
          }
        }
      case 'green':
        return {
          gradient: 'from-green-600 to-green-800',
          gradientBg: 'from-green-50 to-white',
          button: 'from-green-600 to-green-700 hover:from-green-700 hover:to-green-800',
          accent: 'text-green-600',
          bg: 'bg-green-50',
          cardHeaderBg: 'from-green-600 to-green-700',
          contactIconBg: 'bg-green-100',
          contactIconText: 'text-green-600',
          focusRing: 'focus:ring-green-500 focus:border-green-500',
          statsColors: {
            first: 'from-emerald-50 to-emerald-100',
            firstText: 'text-emerald-600',
            second: 'from-green-50 to-green-100',
            secondText: 'text-green-600',
          }
        }
      case 'purple':
        return {
          gradient: 'from-purple-600 to-purple-800',
          gradientBg: 'from-purple-50 to-white',
          button: 'from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800',
          accent: 'text-purple-600',
          bg: 'bg-purple-50',
          cardHeaderBg: 'from-purple-600 to-purple-700',
          contactIconBg: 'bg-purple-100',
          contactIconText: 'text-purple-600',
          focusRing: 'focus:ring-purple-500 focus:border-purple-500',
          statsColors: {
            first: 'from-green-50 to-green-100',
            firstText: 'text-green-600',
            second: 'from-purple-50 to-purple-100',
            secondText: 'text-purple-600',
          }
        }
      case 'orange':
        return {
          gradient: 'from-orange-600 to-orange-800',
          gradientBg: 'from-orange-50 to-white',
          button: 'from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800',
          accent: 'text-orange-600',
          bg: 'bg-orange-50',
          cardHeaderBg: 'from-orange-600 to-orange-700',
          contactIconBg: 'bg-orange-100',
          contactIconText: 'text-orange-600',
          focusRing: 'focus:ring-orange-500 focus:border-orange-500',
          statsColors: {
            first: 'from-green-50 to-green-100',
            firstText: 'text-green-600',
            second: 'from-orange-50 to-orange-100',
            secondText: 'text-orange-600',
          }
        }
      case 'pink':
        return {
          gradient: 'from-pink-600 to-pink-800',
          gradientBg: 'from-pink-50 to-white',
          button: 'from-pink-600 to-pink-700 hover:from-pink-700 hover:to-pink-800',
          accent: 'text-pink-600',
          bg: 'bg-pink-50',
          cardHeaderBg: 'from-pink-600 to-pink-700',
          contactIconBg: 'bg-pink-100',
          contactIconText: 'text-pink-600',
          focusRing: 'focus:ring-pink-500 focus:border-pink-500',
          statsColors: {
            first: 'from-green-50 to-green-100',
            firstText: 'text-green-600',
            second: 'from-pink-50 to-pink-100',
            secondText: 'text-pink-600',
          }
        }
      default:
        return {
          gradient: 'from-blue-600 to-blue-800',
          gradientBg: 'from-blue-50 to-white',
          button: 'from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800',
          accent: 'text-blue-600',
          bg: 'bg-blue-50',
          cardHeaderBg: 'from-blue-600 to-blue-700',
          contactIconBg: 'bg-blue-100',
          contactIconText: 'text-blue-600',
          focusRing: 'focus:ring-blue-500 focus:border-blue-500',
          statsColors: {
            first: 'from-green-50 to-green-100',
            firstText: 'text-green-600',
            second: 'from-blue-50 to-blue-100',
            secondText: 'text-blue-600',
          }
        }
    }
  }

  const themeClasses = getThemeClasses()

  const [bookingForm, setBookingForm] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    gender: "",
    doctor: "",
    service: "",
    date: "",
    time: "",
    insurance: "",
    message: "",
    emergencyContact: "",
    medicalHistory: "",
  })

  const [formSubmitted, setFormSubmitted] = useState(false)

  const doctors = [
    "Dr. Priya Sharma - Family Medicine",
    "Dr. Rajesh Kumar - Cardiology",
    "Dr. Anjali Patel - Pediatrics",
    "Dr. Vikram Singh - Orthopedics",
    "Dr. Meera Reddy - Gynecology",
    "Dr. Arjun Gupta - Neurology",
  ]

  const services = [
    "General Consultation",
    "Routine Check-up",
    "Preventive Care",
    "Chronic Disease Management",
    "Cardiology Consultation",
    "Pediatric Care",
    "Orthopedic Consultation",
    "Gynecological Consultation",
    "Neurological Consultation",
    "Laboratory Tests",
    "Medical Imaging",
    "Health Check-up Package",
    "Vaccination",
    "Minor Procedures",
    "Emergency Care",
  ]

  const timeSlots = [
    "9:00 AM",
    "9:30 AM",
    "10:00 AM",
    "10:30 AM",
    "11:00 AM",
    "11:30 AM",
    "12:00 PM",
    "12:30 PM",
    "2:00 PM",
    "2:30 PM",
    "3:00 PM",
    "3:30 PM",
    "4:00 PM",
    "4:30 PM",
    "5:00 PM",
    "5:30 PM",
    "6:00 PM",
  ]

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormSubmitted(true)
    // Handle booking submission logic here
    setTimeout(() => {
      alert(
        "Appointment request submitted successfully! We will contact you within 2 hours to confirm your appointment.",
      )
      setBookingForm({
        name: "",
        email: "",
        phone: "",
        age: "",
        gender: "",
        doctor: "",
        service: "",
        date: "",
        time: "",
        insurance: "",
        message: "",
        emergencyContact: "",
        medicalHistory: "",
      })
      setFormSubmitted(false)
    }, 2000)
  }

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone Numbers",
      details: [
        { label: "Main Office Number", value: "+91 96503 16607", primary: true },
        { label: "Emergency Line", value: "(555) 911-HELP", emergency: true },
        { label: "Appointments", value: "(555) 123-BOOK", primary: false },
        { label: "Billing & Insurance", value: "(555) 123-BILL", primary: false },
      ],
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Addresses",
      details: [
        { label: "General Inquiries", value: "booklynkservices@gmail.com", primary: true },
        { label: "Appointments", value: "appointments@purewell.com", primary: false },
        { label: "Billing", value: "billing@purewell.com", primary: false },
        { label: "Medical Records", value: "records@purewell.com", primary: false },
      ],
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Clinic Address",
      details: [
        { label: "Main Clinic", value: "123 Health Street, Medical District", primary: true },
        { label: "City", value: "Mumbai, Maharashtra 400001", primary: false },
        { label: "Landmark", value: "Near City Hospital Metro Station", primary: false },
        { label: "Parking", value: "Free parking available", primary: false },
      ],
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Operating Hours",
      details: [
        { label: "Monday - Friday", value: "8:00 AM - 8:00 PM", primary: true },
        { label: "Saturday", value: "9:00 AM - 6:00 PM", primary: false },
        { label: "Sunday", value: "10:00 AM - 4:00 PM", primary: false },
        { label: "Emergency", value: "24/7 Available", emergency: true },
      ],
    },
  ]

  return (
    <div className={`min-h-screen bg-gradient-to-br ${themeClasses.gradientBg}`}>
      {/* Header Section */}
      <section className={`py-20 bg-gradient-to-r ${themeClasses.gradient}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Contact Us & Book Appointment</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8 leading-relaxed">
            Ready to take the next step in your healthcare journey? Contact us today or book an appointment online with
            our expert medical team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className={`bg-white ${themeClasses.accent} hover:bg-gray-100 px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300`}
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now: +91 96503 16607
            </Button>
            <Button
              variant="outline"
              size="lg"
              className={`border-2 border-white text-white hover:bg-white hover:${themeClasses.accent} px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 bg-transparent`}
            >
              <Navigation className="w-5 h-5 mr-2" />
              Get Directions
            </Button>
          </div>
        </div>
      </section>

      {/* Emergency Alert */}
      <section className="py-4 bg-red-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center text-white">
            <AlertCircle className="w-5 h-5 mr-2" />
            <span className="font-semibold">For Medical Emergencies: Call (555) 911-HELP or Dial 108</span>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Get in Touch</h2>
              <p className="text-lg text-gray-600 mb-8">
                We're here to help you with all your healthcare needs. Contact us through any of the following methods
                or visit our clinic directly.
              </p>
            </div>
            {/* Contact Cards */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-4">
                    <CardTitle className="flex items-center text-xl">
                      <div className={`${themeClasses.contactIconBg} p-3 rounded-lg mr-4 ${themeClasses.contactIconText}`}>{info.icon}</div>
                      {info.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {info.details.map((detail, detailIndex) => (
                        <div key={detailIndex} className="flex justify-between items-center">
                          <span className="text-gray-600">{detail.label}:</span>
                          <span
                            className={`font-semibold ${
                              detail.emergency ? "text-red-600" : detail.primary ? themeClasses.accent : "text-gray-900"
                            }`}
                          >
                            {detail.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            {/* Map Placeholder */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MapPin className={`w-5 h-5 mr-2 ${themeClasses.contactIconText}`} />
                  Find Our Location
                </CardTitle>
              </CardHeader>
              <CardContent>
                <img
                  src="/google-map.jpg"
                  alt="Google Map location"
                  className="w-full h-full object-cover rounded-lg mb-4"
                />
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button className="flex-1 bg-transparent" variant="outline">
                    <Navigation className="w-4 h-4 mr-2" />
                    Get Directions
                  </Button>
                  <Button className="flex-1 bg-transparent" variant="outline">
                    <Phone className="w-4 h-4 mr-2" />
                    Call for Directions
                  </Button>
                </div>
              </CardContent>
            </Card>
            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className={`bg-gradient-to-br ${themeClasses.statsColors.first} p-6 rounded-xl text-center`}>
                <div className={`text-2xl font-bold ${themeClasses.statsColors.firstText}`}>&lt; 2 hrs</div>
                <div className="text-sm text-gray-600">Response Time</div>
              </div>
              <div className={`bg-gradient-to-br ${themeClasses.statsColors.second} p-6 rounded-xl text-center`}>
                <div className={`text-2xl font-bold ${themeClasses.statsColors.secondText}`}>4.9/5</div>
                <div className="text-sm text-gray-600">Patient Rating</div>
              </div>
            </div>
          </div>

          {/* Booking Form */}
          <div>
            <Card className="shadow-2xl">
              <CardHeader className={`bg-gradient-to-r ${themeClasses.cardHeaderBg} text-white rounded-t-lg`}>
                <CardTitle className="flex items-center text-2xl">
                  <Calendar className="w-6 h-6 mr-3" />
                  Book Your Appointment
                </CardTitle>
                <CardDescription className="text-blue-100">
                  Fill out the form below and we'll contact you within 2 hours to confirm your appointment.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8">
                {!formSubmitted ? (
                  <form onSubmit={handleBookingSubmit} className="space-y-6">
                    {/* Personal Information */}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                        <User className="w-5 h-5 mr-2" />
                        Personal Information
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">Full Name *</label>
                          <Input
                            required
                            value={bookingForm.name}
                            onChange={(e) => setBookingForm({ ...bookingForm, name: e.target.value })}
                            placeholder="Enter your full name"
                            className="h-12"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">Email Address *</label>
                          <Input
                            type="email"
                            required
                            value={bookingForm.email}
                            onChange={(e) => setBookingForm({ ...bookingForm, email: e.target.value })}
                            placeholder="Enter your email"
                            className="h-12"
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">Phone Number *</label>
                          <Input
                            type="tel"
                            required
                            value={bookingForm.phone}
                            onChange={(e) => setBookingForm({ ...bookingForm, phone: e.target.value })}
                            placeholder="Enter phone number"
                            className="h-12"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">Age</label>
                          <Input
                            type="number"
                            value={bookingForm.age}
                            onChange={(e) => setBookingForm({ ...bookingForm, age: e.target.value })}
                            placeholder="Age"
                            className="h-12"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">Gender</label>
                          <select
                            className={`w-full h-12 p-3 border border-gray-300 rounded-md focus:ring-2 ${themeClasses.focusRing}`}
                            value={bookingForm.gender}
                            onChange={(e) => setBookingForm({ ...bookingForm, gender: e.target.value })}
                          >
                            <option value="">Select Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    {/* Appointment Details */}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                        <Stethoscope className="w-5 h-5 mr-2" />
                        Appointment Details
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">Preferred Doctor</label>
                          <select
                            className={`w-full h-12 p-3 border border-gray-300 rounded-md focus:ring-2 ${themeClasses.focusRing}`}
                            value={bookingForm.doctor}
                            onChange={(e) => setBookingForm({ ...bookingForm, doctor: e.target.value })}
                          >
                            <option value="">Select a doctor</option>
                            {doctors.map((doctor, index) => (
                              <option key={index} value={doctor}>
                                {doctor}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">Service Needed</label>
                          <select
                            className={`w-full h-12 p-3 border border-gray-300 rounded-md focus:ring-2 ${themeClasses.focusRing}`}
                            value={bookingForm.service}
                            onChange={(e) => setBookingForm({ ...bookingForm, service: e.target.value })}
                          >
                            <option value="">Select a service</option>
                            {services.map((service, index) => (
                              <option key={index} value={service}>
                                {service}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">Preferred Date *</label>
                          <Input
                            type="date"
                            required
                            value={bookingForm.date}
                            onChange={(e) => setBookingForm({ ...bookingForm, date: e.target.value })}
                            className="h-12"
                            min={new Date().toISOString().split("T")[0]}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">Preferred Time</label>
                          <select
                            className={`w-full h-12 p-3 border border-gray-300 rounded-md focus:ring-2 ${themeClasses.focusRing}`}
                            value={bookingForm.time}
                            onChange={(e) => setBookingForm({ ...bookingForm, time: e.target.value })}
                          >
                            <option value="">Select time</option>
                            {timeSlots.map((time, index) => (
                              <option key={index} value={time}>
                                {time}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>
                    {/* Additional Information */}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                        <CreditCard className="w-5 h-5 mr-2" />
                        Additional Information
                      </h3>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">Insurance Provider</label>
                          <Input
                            value={bookingForm.insurance}
                            onChange={(e) => setBookingForm({ ...bookingForm, insurance: e.target.value })}
                            placeholder="Enter your insurance provider (optional)"
                            className="h-12"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">Emergency Contact</label>
                          <Input
                            value={bookingForm.emergencyContact}
                            onChange={(e) => setBookingForm({ ...bookingForm, emergencyContact: e.target.value })}
                            placeholder="Emergency contact name and phone"
                            className="h-12"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">Brief Medical History</label>
                          <Textarea
                            value={bookingForm.medicalHistory}
                            onChange={(e) => setBookingForm({ ...bookingForm, medicalHistory: e.target.value })}
                            placeholder="Any current medications, allergies, or medical conditions we should know about"
                            rows={3}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">Additional Notes</label>
                          <Textarea
                            value={bookingForm.message}
                            onChange={(e) => setBookingForm({ ...bookingForm, message: e.target.value })}
                            placeholder="Any special requests or additional information"
                            rows={3}
                          />
                        </div>
                      </div>
                    </div>
                    <div className={`${themeClasses.bg} p-4 rounded-lg`}>
                      <div className="flex items-start">
                        <Shield className={`w-5 h-5 ${themeClasses.contactIconText} mr-3 mt-0.5`} />
                        <div className={`text-sm ${themeClasses.accent.replace('text-', 'text-').replace('-600', '-800')}`}>
                          <p className="font-semibold mb-1">Privacy & Security</p>
                          <p>
                            Your personal and medical information is protected with bank-level security and HIPAA
                            compliance.
                          </p>
                        </div>
                      </div>
                    </div>
                    <Button
                      type="submit"
                      className={`w-full h-14 bg-gradient-to-r ${themeClasses.button} text-lg font-semibold`}
                    >
                      <Calendar className="w-5 h-5 mr-2" />
                      Submit Appointment Request
                    </Button>
                    <div className="text-center text-sm text-gray-600 space-y-2">
                      <p>We'll contact you within 2 hours to confirm your appointment.</p>
                      <p>
                        For urgent matters, please call:{" "}
                        <span className="font-semibold text-red-600">(555) 911-HELP</span>
                      </p>
                    </div>
                  </form>
                ) : (
                  <div className="text-center py-12">
                    <div className="bg-green-100 p-4 rounded-full inline-block mb-6">
                      <CheckCircle className="w-12 h-12 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Appointment Request Submitted!</h3>
                    <p className="text-gray-600 mb-6">
                      Thank you for choosing PureWell Health Clinic. We have received your appointment request and will
                      contact you within 2 hours to confirm the details.
                    </p>
                    <div className={`${themeClasses.bg} p-4 rounded-lg`}>
                      <p className={`text-sm ${themeClasses.accent.replace('text-', 'text-').replace('-600', '-800')}`}>
                        <strong>What's Next?</strong>
                        <br />
                        Our appointment coordinator will call you to confirm your preferred date and time, and answer
                        any questions you may have.
                      </p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">Common questions about appointments and our services</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">How do I book an appointment?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  You can book an appointment online through our form above, call us at (555) 123-BOOK, or visit our
                  clinic directly. Online bookings are confirmed within 2 hours.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">What should I bring to my appointment?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Please bring a valid ID, insurance card, list of current medications, and any relevant medical records
                  or test results from previous visits.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Do you accept insurance?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Yes, we accept most major insurance plans. Please contact our billing department at (555) 123-BILL to
                  verify your coverage before your appointment.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">What if I need to cancel or reschedule?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Please call us at least 24 hours in advance to cancel or reschedule your appointment. This helps us
                  accommodate other patients who may need urgent care.
                </p>
              </CardContent>
            </Card>
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
            <p>&copy; January 2024 | Book Lynk Services. All rights reserved. | 624, tower-1 Assotech business cresterra Sector 135, Noida 201301</p>
          </div>
        </div>
      </footer>
    </div>
  )
}