"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Stethoscope,
  Heart,
  Shield,
  Activity,
  Eye,
  Baby,
  Bone,
  Brain,
  Microscope,
  Pill,
  Syringe,
  Calendar,
  Clock,
  Star,
  CheckCircle,
  Users,
  Award,
} from "lucide-react"

interface ServicesPageProps {
  setCurrentPage: (page: string) => void
}

export default function ServicesPage({ setCurrentPage }: ServicesPageProps) {
  const serviceCategories = [
    {
      title: "Primary Care Services",
      description: "Comprehensive healthcare for your everyday medical needs",
      color: "from-blue-500 to-blue-600",
      services: [
        {
          title: "General Consultations",
          description:
            "Comprehensive health assessments, routine check-ups, and medical consultations for all ages. Our experienced doctors provide thorough examinations and personalized treatment plans.",
          icon: <Stethoscope className="w-8 h-8" />,
          duration: "30-45 mins",
          price: "₹500-800",
          features: [
            "Complete Physical Examination",
            "Medical History Review",
            "Treatment Planning",
            "Health Counseling",
          ],
        },
        {
          title: "Preventive Care & Health Screenings",
          description:
            "Early detection and prevention programs including regular health check-ups, cancer screenings, and lifestyle counseling to maintain optimal health.",
          icon: <Shield className="w-8 h-8" />,
          duration: "60-90 mins",
          price: "₹1,200-2,000",
          features: ["Blood Pressure Monitoring", "Cholesterol Screening", "Diabetes Testing", "Cancer Screenings"],
        },
        {
          title: "Chronic Disease Management",
          description:
            "Specialized care for diabetes, hypertension, heart disease, and other chronic conditions with regular monitoring and medication management.",
          icon: <Heart className="w-8 h-8" />,
          duration: "45-60 mins",
          price: "₹800-1,200",
          features: ["Medication Management", "Regular Monitoring", "Lifestyle Counseling", "Complication Prevention"],
        },
        {
          title: "Family Medicine",
          description:
            "Comprehensive healthcare for the entire family, from newborns to elderly, providing continuity of care across all life stages.",
          icon: <Users className="w-8 h-8" />,
          duration: "30-60 mins",
          price: "₹600-1,000",
          features: ["All Age Groups", "Family Health Planning", "Immunizations", "Growth Monitoring"],
        },
      ],
    },
    {
      title: "Specialized Medical Services",
      description: "Advanced medical treatments by our specialist doctors",
      color: "from-green-500 to-green-600",
      services: [
        {
          title: "Cardiology Services",
          description:
            "Complete heart care including ECG, echocardiography, stress testing, and treatment of cardiovascular diseases by certified cardiologists.",
          icon: <Activity className="w-8 h-8" />,
          duration: "45-90 mins",
          price: "₹1,500-3,000",
          features: ["ECG & Echo", "Stress Testing", "Heart Disease Treatment", "Cardiac Rehabilitation"],
        },
        {
          title: "Orthopedic Care",
          description:
            "Treatment of bone, joint, and muscle disorders including fractures, arthritis, sports injuries, and joint replacement consultations.",
          icon: <Bone className="w-8 h-8" />,
          duration: "30-60 mins",
          price: "₹1,000-2,500",
          features: ["Fracture Treatment", "Joint Care", "Sports Medicine", "Physiotherapy"],
        },
        {
          title: "Neurology Services",
          description:
            "Diagnosis and treatment of neurological disorders including headaches, seizures, stroke, and memory disorders by qualified neurologists.",
          icon: <Brain className="w-8 h-8" />,
          duration: "60-90 mins",
          price: "₹2,000-4,000",
          features: ["Neurological Examination", "EEG Testing", "Stroke Care", "Memory Assessment"],
        },
        {
          title: "Eye Care & Ophthalmology",
          description:
            "Complete eye examinations, vision testing, treatment of eye diseases, and surgical consultations for cataracts and other conditions.",
          icon: <Eye className="w-8 h-8" />,
          duration: "45-75 mins",
          price: "₹800-2,000",
          features: ["Vision Testing", "Eye Disease Treatment", "Surgical Consultation", "Contact Lens Fitting"],
        },
      ],
    },
    {
      title: "Diagnostic & Laboratory Services",
      description: "State-of-the-art diagnostic facilities and laboratory testing",
      color: "from-purple-500 to-purple-600",
      services: [
        {
          title: "Laboratory Testing",
          description:
            "Comprehensive blood tests, urine analysis, hormone testing, and specialized diagnostic tests with quick and accurate results.",
          icon: <Microscope className="w-8 h-8" />,
          duration: "15-30 mins",
          price: "₹200-1,500",
          features: ["Blood Tests", "Urine Analysis", "Hormone Testing", "Infection Screening"],
        },
        {
          title: "Medical Imaging",
          description:
            "X-rays, ultrasound, CT scans, and MRI services with advanced imaging technology and expert radiologist interpretation.",
          icon: <Activity className="w-8 h-8" />,
          duration: "30-90 mins",
          price: "₹800-5,000",
          features: ["X-Ray", "Ultrasound", "CT Scan", "MRI Services"],
        },
        {
          title: "Health Check-up Packages",
          description:
            "Comprehensive health screening packages for different age groups and health concerns, including executive and senior citizen packages.",
          icon: <CheckCircle className="w-8 h-8" />,
          duration: "2-4 hours",
          price: "₹2,500-8,000",
          features: ["Complete Body Check-up", "Age-specific Packages", "Executive Health", "Senior Citizen Care"],
        },
      ],
    },
    {
      title: "Additional Healthcare Services",
      description: "Comprehensive support services for your complete healthcare needs",
      color: "from-orange-500 to-orange-600",
      services: [
        {
          title: "Vaccination & Immunization",
          description:
            "Complete vaccination programs for children and adults including travel vaccines, flu shots, and routine immunizations as per schedule.",
          icon: <Syringe className="w-8 h-8" />,
          duration: "15-30 mins",
          price: "₹300-2,000",
          features: ["Child Immunization", "Adult Vaccines", "Travel Vaccines", "Flu Shots"],
        },
        {
          title: "Women's Health Services",
          description:
            "Specialized healthcare for women including gynecological consultations, prenatal care, family planning, and women's wellness programs.",
          icon: <Heart className="w-8 h-8" />,
          duration: "45-60 mins",
          price: "₹800-2,500",
          features: ["Gynecological Care", "Prenatal Services", "Family Planning", "Women's Wellness"],
        },
        {
          title: "Pediatric Care",
          description:
            "Specialized medical care for infants, children, and adolescents including growth monitoring, developmental assessments, and pediatric treatments.",
          icon: <Baby className="w-8 h-8" />,
          duration: "30-45 mins",
          price: "₹600-1,500",
          features: ["Growth Monitoring", "Development Assessment", "Child Nutrition", "Pediatric Treatment"],
        },
        {
          title: "Pharmacy Services",
          description:
            "On-site pharmacy with prescription medications, over-the-counter drugs, medical supplies, and medication counseling services.",
          icon: <Pill className="w-8 h-8" />,
          duration: "10-20 mins",
          price: "As per medication",
          features: ["Prescription Filling", "OTC Medications", "Medical Supplies", "Medication Counseling"],
        },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Header Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Our Medical Services</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8 leading-relaxed">
            Comprehensive healthcare services delivered by experienced medical professionals using state-of-the-art
            technology and compassionate care.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              onClick={() => setCurrentPage("contact")}
            >
              <Calendar className="w-5 h-5 mr-2" />
              Book Appointment
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 bg-transparent"
              onClick={() => setCurrentPage("doctors")}
            >
              Meet Our Specialists
            </Button>
          </div>
        </div>
      </section>

      {/* Services Categories */}
      {serviceCategories.map((category, categoryIndex) => (
        <section key={categoryIndex} className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className={`inline-block bg-gradient-to-r ${category.color} text-white px-6 py-3 rounded-full mb-4`}>
                <h2 className="text-2xl md:text-3xl font-bold">{category.title}</h2>
              </div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">{category.description}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {category.services.map((service, serviceIndex) => (
                <Card
                  key={serviceIndex}
                  className="hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-0 shadow-lg"
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`bg-gradient-to-r ${category.color} p-3 rounded-xl text-white`}>
                        {service.icon}
                      </div>
                      <div className="text-right">
                        <Badge variant="secondary" className="mb-2">
                          <Clock className="w-3 h-3 mr-1" />
                          {service.duration}
                        </Badge>
                        <div className="text-lg font-bold text-green-600">{service.price}</div>
                      </div>
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-900">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </CardDescription>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Service Includes:</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button
                        className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800"
                        onClick={() => setCurrentPage("contact")}
                      >
                        <Calendar className="w-4 h-4 mr-2" />
                        Book Now
                      </Button>
                      <Button variant="outline" className="flex-1 bg-transparent">
                        Learn More
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Why Choose Our Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Why Choose Our Services?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are committed to providing the highest quality healthcare services with modern facilities and
              experienced medical professionals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl">
              <div className="bg-blue-600 p-4 rounded-2xl inline-block mb-6">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Certified Excellence</h3>
              <p className="text-gray-600">
                ISO certified facility with NABH accreditation ensuring highest quality standards.
              </p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl">
              <div className="bg-green-600 p-4 rounded-2xl inline-block mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Expert Medical Team</h3>
              <p className="text-gray-600">
                Highly qualified doctors and specialists with years of experience in their respective fields.
              </p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl">
              <div className="bg-purple-600 p-4 rounded-2xl inline-block mb-6">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Patient Satisfaction</h3>
              <p className="text-gray-600">4.9/5 patient rating with over 25,000 satisfied patients and families.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Experience Quality Healthcare?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Don't compromise on your health. Book an appointment today and experience the difference of quality
            healthcare.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              onClick={() => setCurrentPage("contact")}
            >
              <Calendar className="w-5 h-5 mr-2" />
              Book Your Appointment
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 bg-transparent"
              onClick={() => setCurrentPage("doctors")}
            >
              Consult Our Doctors
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
