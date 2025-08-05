"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Award,
  Calendar,
  Clock,
  Star,
  Users,
  Heart,
  Stethoscope,
  Brain,
  Baby,
  Activity,
  Bone,
  GraduationCap,
  Languages,
} from "lucide-react"

interface DoctorsPageProps {
  setCurrentPage: (page: string) => void
}

export default function DoctorsPage({ setCurrentPage }: DoctorsPageProps) {
  const doctors = [
    {
      name: "Dr. Priya Sharma",
      specialty: "Family Medicine & Internal Medicine",
      experience: "15 years",
      education: "MBBS, MD - Internal Medicine, AIIMS New Delhi",
      languages: ["English", "Hindi", "Punjabi"],
     // image: "/placeholder.svg?height=400&width=400",
      image: "/Dr. Priya Sharma.jpg",

     
      philosophy:
        "Committed to providing comprehensive, compassionate care for the entire family with focus on preventive medicine and patient education.",
      specializations: ["Diabetes Management", "Hypertension Care", "Preventive Medicine", "Women's Health"],
      availability: "Mon-Fri: 9:00 AM - 5:00 PM, Sat: 9:00 AM - 1:00 PM",
      consultationFee: "₹800",
      rating: 4.9,
      patients: "5000+",
      achievements: ["Best Family Doctor Award 2023", "Excellence in Patient Care", "AIIMS Gold Medalist"],
    },
    {
      name: "Dr. Rajesh Kumar",
      specialty: "Cardiology & Interventional Cardiology",
      experience: "18 years",
      education: "MBBS, MD - Cardiology, DM - Interventional Cardiology, PGI Chandigarh",
      languages: ["English", "Hindi", "Bengali"],
      //image: "/placeholder.svg?height=400&width=400",
       image: "/Dr. Rajesh Kumar.jpg",


      philosophy:
        "Dedicated to providing advanced cardiac care with minimally invasive procedures and comprehensive heart disease prevention programs.",
      specializations: ["Angioplasty", "Heart Attack Treatment", "Cardiac Surgery", "Preventive Cardiology"],
      availability: "Mon-Sat: 10:00 AM - 6:00 PM, Emergency: 24/7",
      consultationFee: "₹1,500",
      rating: 4.8,
      patients: "3500+",
      achievements: [
        "Leading Interventional Cardiologist",
        "500+ Successful Angioplasties",
        "Cardiac Excellence Award",
      ],
    },
    {
      name: "Dr. Anjali Patel",
      specialty: "Pediatrics & Child Development",
      experience: "12 years",
      education: "MBBS, MD - Pediatrics, Fellowship in Neonatology, KEM Hospital Mumbai",
      languages: ["English", "Hindi", "Gujarati", "Marathi"],
     // image: "/placeholder.svg?height=400&width=400",
     image: "/Dr. Anjali Patel.jpg",
      philosophy:
        "Passionate about providing gentle, expert care for children and supporting families through every stage of child development.",
      specializations: ["Newborn Care", "Child Vaccination", "Growth Disorders", "Pediatric Nutrition"],
      availability: "Mon-Fri: 8:00 AM - 4:00 PM, Sat: 8:00 AM - 12:00 PM",
      consultationFee: "₹700",
      rating: 4.9,
      patients: "4200+",
      achievements: ["Best Pediatrician Award 2022", "Child Care Excellence", "Neonatal Care Specialist"],
    },
    {
      name: "Dr. Vikram Singh",
      specialty: "Orthopedics & Sports Medicine",
      experience: "14 years",
      education: "MBBS, MS - Orthopedics, Fellowship in Sports Medicine, AIIMS New Delhi",
      languages: ["English", "Hindi", "Punjabi"],
      //image: "/placeholder.svg?height=400&width=400",
      image: "/Dr. Vikram Singh.jpg",
      philosophy:
        "Focused on helping patients regain mobility and strength through advanced orthopedic treatments and rehabilitation programs.",
      specializations: ["Joint Replacement", "Sports Injuries", "Fracture Treatment", "Arthritis Care"],
      availability: "Mon-Fri: 11:00 AM - 7:00 PM, Sat: 9:00 AM - 2:00 PM",
      consultationFee: "₹1,200",
      rating: 4.7,
      patients: "2800+",
      achievements: ["Sports Medicine Expert", "Joint Replacement Specialist", "Orthopedic Excellence Award"],
    },
    {
      name: "Dr. Meera Reddy",
      specialty: "Gynecology & Obstetrics",
      experience: "16 years",
      education: "MBBS, MD - Gynecology & Obstetrics, Fellowship in Laparoscopy, JIPMER Puducherry",
      languages: ["English", "Hindi", "Telugu", "Tamil"],
      //image: "/placeholder.svg?height=400&width=400",
      image: "/Dr. Meera Reddy.jpg",
      philosophy:
        "Committed to providing comprehensive women's healthcare with emphasis on minimally invasive procedures and maternal care.",
      specializations: ["High-Risk Pregnancy", "Laparoscopic Surgery", "Infertility Treatment", "Women's Wellness"],
      availability: "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 9:00 AM - 1:00 PM",
      consultationFee: "₹1,000",
      rating: 4.8,
      patients: "3800+",
      achievements: ["Excellence in Maternal Care", "Laparoscopic Surgery Expert", "Women's Health Advocate"],
    },
    {
      name: "Dr. Arjun Gupta",
      specialty: "Neurology & Stroke Medicine",
      experience: "13 years",
      education: "MBBS, MD - Neurology, DM - Neurology, NIMHANS Bangalore",
      languages: ["English", "Hindi", "Marathi"],
     // image: "/placeholder.svg?height=400&width=400",
     image: "/Dr. Arjun Gupta.jpg",
      philosophy:
        "Dedicated to providing advanced neurological care with focus on stroke prevention, epilepsy management, and neurological rehabilitation.",
      specializations: ["Stroke Treatment", "Epilepsy Management", "Headache Disorders", "Memory Disorders"],
      availability: "Mon-Fri: 10:00 AM - 5:00 PM, Sat: 10:00 AM - 2:00 PM",
      consultationFee: "₹1,800",
      rating: 4.9,
      patients: "2200+",
      achievements: ["Stroke Care Excellence", "Epilepsy Management Expert", "Neurological Research Award"],
    },
  ]

  const specialties = [
    { name: "Family Medicine", count: "2 Doctors", icon: <Users className="w-6 h-6" /> },
    { name: "Cardiology", count: "1 Doctor", icon: <Heart className="w-6 h-6" /> },
    { name: "Pediatrics", count: "1 Doctor", icon: <Baby className="w-6 h-6" /> },
    { name: "Orthopedics", count: "1 Doctor", icon: <Bone className="w-6 h-6" /> },
    { name: "Gynecology", count: "1 Doctor", icon: <Activity className="w-6 h-6" /> },
    { name: "Neurology", count: "1 Doctor", icon: <Brain className="w-6 h-6" /> },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Header Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Meet Our Expert Doctors</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8 leading-relaxed">
            Our experienced medical team combines years of expertise with compassionate care to provide the best
            healthcare services for you and your family.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-3xl font-bold text-white">50+</div>
              <div className="text-blue-100">Medical Specialists</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-3xl font-bold text-white">25,000+</div>
              <div className="text-blue-100">Patients Treated</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-3xl font-bold text-white">4.9/5</div>
              <div className="text-blue-100">Average Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialties Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Medical Specialties</h2>
            <p className="text-lg text-gray-600">Our comprehensive range of medical specialties under one roof</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {specialties.map((specialty, index) => (
              <div
                key={index}
                className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                <div className="bg-blue-600 p-3 rounded-xl inline-block mb-4 text-white">{specialty.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-1">{specialty.name}</h3>
                <p className="text-sm text-gray-600">{specialty.count}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Doctors Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Medical Team</h2>
            <p className="text-lg text-gray-600">Get to know our experienced doctors and their specializations</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {doctors.map((doctor, index) => (
              <Card
                key={index}
                className="hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-0 shadow-lg overflow-hidden"
              >
                <div className="relative">
                  <img
                    src={doctor.image || "/placeholder.svg"}
                    alt={doctor.name}
                    className="w-full h-70 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white rounded-full px-3 py-1 flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 mr-1" />
                    <span className="text-sm font-semibold">{doctor.rating}</span>
                  </div>
                </div>

                <CardHeader className="pb-4">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <CardTitle className="text-xl font-bold text-gray-900">{doctor.name}</CardTitle>
                      <CardDescription className="text-blue-600 font-semibold text-base">
                        {doctor.specialty}
                      </CardDescription>
                    </div>
                    <Badge className="bg-green-100 text-green-800 hover:bg-green-100">{doctor.experience}</Badge>
                  </div>

                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      {doctor.patients}
                    </div>
                    <div className="flex items-center">
                      <Award className="w-4 h-4 mr-1" />
                      Expert
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div>
                    <div className="flex items-center text-sm text-gray-600 mb-2">
                      <GraduationCap className="w-4 h-4 mr-2" />
                      <span className="font-medium">Education:</span>
                    </div>
                    <p className="text-sm text-gray-700 leading-relaxed">{doctor.education}</p>
                  </div>

                  <div>
                    <div className="flex items-center text-sm text-gray-600 mb-2">
                      <Languages className="w-4 h-4 mr-2" />
                      <span className="font-medium">Languages:</span>
                    </div>
                    <p className="text-sm text-gray-700">{doctor.languages.join(", ")}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Specializations:</h4>
                    <div className="flex flex-wrap gap-2">
                      {doctor.specializations.map((spec, specIndex) => (
                        <Badge key={specIndex} variant="secondary" className="text-xs">
                          {spec}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center text-sm text-gray-600">
                        <Clock className="w-4 h-4 mr-1" />
                        <span>Consultation Fee:</span>
                      </div>
                      <span className="text-lg font-bold text-green-600">{doctor.consultationFee}</span>
                    </div>
                    <p className="text-xs text-gray-600">{doctor.availability}</p>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-700 italic leading-relaxed">"{doctor.philosophy}"</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Achievements:</h4>
                    <ul className="space-y-1">
                      {doctor.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="text-sm text-gray-600 flex items-center">
                          <Award className="w-3 h-3 text-yellow-500 mr-2 flex-shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-col gap-3 pt-4">
                    <Button
                      className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800"
                      onClick={() => setCurrentPage("contact")}
                    >
                      <Calendar className="w-4 h-4 mr-2" />
                      Book Appointment with {doctor.name.split(" ")[1]}
                    </Button>
                    <Button variant="outline" className="w-full bg-transparent">
                      View Full Profile
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Doctors */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Why Choose Our Doctors?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our medical team represents the finest in healthcare excellence, combining expertise with compassionate
              care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl">
              <div className="bg-blue-600 p-4 rounded-2xl inline-block mb-6">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Top Medical Education</h3>
              <p className="text-gray-600">Graduates from premier medical institutions like AIIMS, PGI, and JIPMER.</p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl">
              <div className="bg-green-600 p-4 rounded-2xl inline-block mb-6">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Proven Excellence</h3>
              <p className="text-gray-600">Award-winning doctors with recognition for outstanding patient care.</p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl">
              <div className="bg-purple-600 p-4 rounded-2xl inline-block mb-6">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Compassionate Care</h3>
              <p className="text-gray-600">
                Patient-first approach with empathy and understanding in every consultation.
              </p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl">
              <div className="bg-orange-600 p-4 rounded-2xl inline-block mb-6">
                <Stethoscope className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Latest Technology</h3>
              <p className="text-gray-600">
                Using cutting-edge medical technology for accurate diagnosis and treatment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Meet Our Doctors?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Schedule a consultation with our expert medical team and experience personalized healthcare at its finest.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              onClick={() => setCurrentPage("contact")}
            >
              <Calendar className="w-5 h-5 mr-2" />
              Book Consultation
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 bg-transparent"
              onClick={() => setCurrentPage("services")}
            >
              View Our Services
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}







