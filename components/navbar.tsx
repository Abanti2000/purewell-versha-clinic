// 'use client'

// import { ChevronDown, Palette, Stethoscope, Menu } from 'lucide-react'
// import { Button } from '@/components/ui/button'
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from '@/components/ui/dropdown-menu'
// import { useTheme } from '@/contexts/theme-context'

// const themes = [
//   { name: 'Medical Blue', value: 'blue' as const, color: 'bg-blue-500' },
//   { name: 'Emergency Red', value: 'red' as const, color: 'bg-red-500' },
//   { name: 'Health Green', value: 'green' as const, color: 'bg-green-500' },
//   { name: 'Care Purple', value: 'purple' as const, color: 'bg-purple-500' },
//   { name: 'Wellness Orange', value: 'orange' as const, color: 'bg-orange-500' },
//   { name: 'Comfort Pink', value: 'pink' as const, color: 'bg-pink-500' },
// ]

// export function Navbar() {
//   const { theme, setTheme } = useTheme()

//   const currentTheme = themes.find(t => t.value === theme)

//   return (
//     <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
//       <div className="container flex h-16 items-center justify-between px-4">
//         {/* Logo and Brand */}
//         <div className="flex items-center space-x-4">
//           <Stethoscope className="h-8 w-8 text-primary" />
//           <div>
//             <h1 className="text-xl font-bold">Versha Clinic</h1>
//             <p className="text-xs text-muted-foreground hidden sm:block">Your Health, Our Priority</p>
//           </div>
//         </div>

//         {/* Navigation Links */}
//         <div className="flex items-center space-x-4">
//           <nav className="hidden md:flex items-center space-x-6">
//             <a href="#home" className="text-sm font-medium hover:text-primary transition-colors">
//               Home
//             </a>
//             <a href="#services" className="text-sm font-medium hover:text-primary transition-colors">
//               Services
//             </a>
//             <a href="#doctors" className="text-sm font-medium hover:text-primary transition-colors">
//               Doctors
//             </a>
//             <a href="#appointments" className="text-sm font-medium hover:text-primary transition-colors">
//               Appointments
//             </a>
//             <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
//               Contact
//             </a>
//           </nav>

//           {/* Theme Dropdown */}
//           <DropdownMenu>
//             <DropdownMenuTrigger asChild>
//               <Button variant="outline" size="sm" className="gap-2">
//                 <Palette className="h-4 w-4" />
//                 <div className={`w-3 h-3 rounded-full ${currentTheme?.color}`} />
//                 <span className="hidden sm:inline">{currentTheme?.name}</span>
//                 <ChevronDown className="h-4 w-4" />
//               </Button>
//             </DropdownMenuTrigger>
//             <DropdownMenuContent align="end" className="w-48">
//               {themes.map((themeOption) => (
//                 <DropdownMenuItem
//                   key={themeOption.value}
//                   onClick={() => setTheme(themeOption.value)}
//                   className="flex items-center gap-2 cursor-pointer"
//                 >
//                   <div className={`w-4 h-4 rounded-full ${themeOption.color}`} />
//                   {themeOption.name}
//                   {theme === themeOption.value && (
//                     <span className="ml-auto text-xs">✓</span>
//                   )}
//                 </DropdownMenuItem>
//               ))}
//             </DropdownMenuContent>
//           </DropdownMenu>

//           {/* Mobile Menu Button */}
//           <Button variant="outline" size="sm" className="md:hidden">
//             <Menu className="h-4 w-4" />
//           </Button>
//         </div>
//       </div>
//     </nav>
//   )
// }
