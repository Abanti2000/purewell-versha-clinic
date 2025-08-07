// 'use client'

// import { Button } from '@/components/ui/button'
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
// import { useTheme } from '@/contexts/theme-context'
// import { Calendar, Clock, MapPin, Phone, Heart, Shield, Users, Award, Ambulance, Activity } from 'lucide-react'

// export function ClinicHero() {
//   const { theme } = useTheme()

//   const getThemeClasses = () => {
//     switch (theme) {
//       case 'blue':
//         return {
//           gradient: 'from-blue-600 to-blue-800',
//           button: 'bg-blue-600 hover:bg-blue-700',
//           accent: 'text-blue-600',
//           border: 'border-blue-200',
//           bg: 'bg-blue-50',
//         }
//       case 'red':
//         return {
//           gradient: 'from-red-600 to-red-800',
//           button: 'bg-red-600 hover:bg-red-700',
//           accent: 'text-red-600',
//           border: 'border-red-200',
//           bg: 'bg-red-50',
//         }
//       case 'green':
//         return {
//           gradient: 'from-green-600 to-green-800',
//           button: 'bg-green-600 hover:bg-green-700',
//           accent: 'text-green-600',
//           border: 'border-green-200',
//           bg: 'bg-green-50',
//         }
//       case 'purple':
//         return {
//           gradient: 'from-purple-600 to-purple-800',
//           button: 'bg-purple-600 hover:bg-purple-700',
//           accent: 'text-purple-600',
//           border: 'border-purple-200',
//           bg: 'bg-purple-50',
//         }
//       case 'orange':
//         return {
//           gradient: 'from-orange-600 to-orange-800',
//           button: 'bg-orange-600 hover:bg-orange-700',
//           accent: 'text-orange-600',
//           border: 'border-orange-200',
//           bg: 'bg-orange-50',
//         }
//       case 'pink':
//         return {
//           gradient: 'from-pink-600 to-pink-800',
//           button: 'bg-pink-600 hover:bg-pink-700',
//           accent: 'text-pink-600',
//           border: 'border-pink-200',
//           bg: 'bg-pink-50',
//         }
//       default:
//         return {
//           gradient: 'from-blue-600 to-blue-800',
//           button: 'bg-blue-600 hover:bg-blue-700',
//           accent: 'text-blue-600',
//           border: 'border-blue-200',
//           bg: 'bg-blue-50',
//         }
//     }
//   }

//   const themeClasses = getThemeClasses()

//   return (
//     <div className="min-h-screen">
//       {/* Hero Section */}
//       <section className={`relative py-20 bg-gradient-to-r ${themeClasses.gradient} text-white`}>
//         <div className="container mx-auto px-4">
//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             <div>
//               <h1 className="text-5xl font-bold mb-6">
//                 Welcome to Versha Clinic
//               </h1>
//               <p className="text-xl mb-8 leading-relaxed">
//                 Experience world-class healthcare with our dedicated team of medical professionals. 
//                 We provide personalized care using cutting-edge technology and compassionate service.
//               </p>
//               <div className="flex flex-col sm:flex-row gap-4">
//                 <Button 
//                   size="lg" 
//                   className="bg-white text-gray-900 hover:bg-gray-100 hover:scale-105 transition-all duration-200"
//                 >
//                   <Calendar className="mr-2 h-5 w-5" />
//                   Book Appointment
//                 </Button>
//                 <Button 
//                   size="lg" 
//                   variant="outline"
//                   className="border-white text-white hover:bg-white hover:text-gray-900"
//                 >
//                   <Phone className="mr-2 h-5 w-5" />
//                   Call Now: (555) 123-4567
//                 </Button>
//               </div>
//             </div>
//             <div className="relative">
//               <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
//                 <h3 className="text-2xl font-bold mb-4">Quick Stats</h3>
//                 <div className="grid grid-cols-2 gap-4">
//                   <div className="text-center">
//                     <div className="text-3xl font-bold">15+</div>
//                     <div className="text-sm opacity-90">Years Experience</div>
//                   </div>
//                   <div className="text-center">
//                     <div className="text-3xl font-bold">50K+</div>
//                     <div className="text-sm opacity-90">Patients Treated</div>
//                   </div>
//                   <div className="text-center">
//                     <div className="text-3xl font-bold">24/7</div>
//                     <div className="text-sm opacity-90">Emergency Care</div>
//                   </div>
//                   <div className="text-center">
//                     <div className="text-3xl font-bold">98%</div>
//                     <div className="text-sm opacity-90">Satisfaction Rate</div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Quick Info Bar */}
//       <section className={`py-6 ${themeClasses.bg} border-b`}>
//         <div className="container mx-auto px-4">
//           <div className="grid md:grid-cols-4 gap-6 text-center">
//             <div className="flex items-center justify-center gap-3">
//               <Clock className={`h-6 w-6 ${themeClasses.accent}`} />
//               <div>
//                 <p className="font-semibold">Open 24/7</p>
//                 <p className="text-sm text-gray-600">Emergency Services</p>
//               </div>
//             </div>
//             <div className="flex items-center justify-center gap-3">
//               <MapPin className={`h-6 w-6 ${themeClasses.accent}`} />
//               <div>
//                 <p className="font-semibold">Prime Location</p>
//                 <p className="text-sm text-gray-600">Easy Access</p>
//               </div>
//             </div>
//             <div className="flex items-center justify-center gap-3">
//               <Ambulance className={`h-6 w-6 ${themeClasses.accent}`} />
//               <div>
//                 <p className="font-semibold">Emergency</p>
//                 <p className="text-sm text-gray-600">911 Available</p>
//               </div>
//             </div>
//             <div className="flex items-center justify-center gap-3">
//               <Award className={`h-6 w-6 ${themeClasses.accent}`} />
//               <div>
//                 <p className="font-semibold">Certified</p>
//                 <p className="text-sm text-gray-600">Licensed Doctors</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Services Section */}
//       <section className="py-16 bg-background">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-12">
//             <h2 className={`text-4xl font-bold mb-4 ${themeClasses.accent}`}>
//               Our Medical Services
//             </h2>
//             <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//               Comprehensive healthcare services designed to meet all your medical needs 
//               with the highest standards of care and professionalism.
//             </p>
//           </div>
          
//           <div className="grid md:grid-cols-3 gap-8">
//             {[
//               {
//                 title: 'General Medicine',
//                 description: 'Comprehensive primary care for patients of all ages with experienced physicians and modern diagnostic tools.',
//                 icon: Heart,
//               },
//               {
//                 title: 'Preventive Care',
//                 description: 'Regular health screenings, vaccinations, and wellness programs to keep you healthy and prevent diseases.',
//                 icon: Shield,
//               },
//               {
//                 title: 'Emergency Care',
//                 description: '24/7 emergency medical services with rapid response team and advanced life support equipment.',
//                 icon: Activity,
//               },
//               {
//                 title: 'Specialist Consultations',
//                 description: 'Access to board-certified specialists across cardiology, neurology, orthopedics, and more.',
//                 icon: Users,
//               },
//               {
//                 title: 'Diagnostic Services',
//                 description: 'State-of-the-art imaging and laboratory services including X-ray, MRI, CT scan, and blood tests.',
//                 icon: Award,
//               },
//               {
//                 title: 'Surgical Procedures',
//                 description: 'Minor and major surgical procedures performed by skilled surgeons in modern operating theaters.',
//                 icon: Ambulance,
//               }
//             ].map((service, index) => {
//               const IconComponent = service.icon
//               return (
//                 <Card key={index} className={`border-2 ${themeClasses.border} hover:shadow-lg transition-all duration-300 hover:scale-105`}>
//                   <CardHeader>
//                     <IconComponent className={`h-12 w-12 mb-4 ${themeClasses.accent}`} />
//                     <CardTitle className={`${themeClasses.accent} text-xl`}>{service.title}</CardTitle>
//                   </CardHeader>
//                   <CardContent>
//                     <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
//                   </CardContent>
//                 </Card>
//               )
//             })}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className={`py-16 bg-gradient-to-r ${themeClasses.gradient} text-white`}>
//         <div className="container mx-auto px-4 text-center">
//           <h2 className="text-4xl font-bold mb-6">
//             Ready to Take Care of Your Health?
//           </h2>
//           <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
//             Don't wait for tomorrow. Book your appointment today and take the first step 
//             towards better health with our expert medical team. We're here to serve you 24/7.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <Button 
//               size="lg"
//               className="bg-white text-gray-900 hover:bg-gray-100 hover:scale-105 transition-all duration-200"
//             >
//               <Calendar className="mr-2 h-5 w-5" />
//               Schedule Your Visit
//             </Button>
//             <Button 
//               size="lg"
//               variant="outline"
//               className="border-white text-white hover:bg-white hover:text-gray-900"
//             >
//               <Phone className="mr-2 h-5 w-5" />
//               Emergency Contact
//             </Button>
//           </div>
//         </div>
//       </section>
//     </div>
//   )
// }
