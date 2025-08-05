

import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "PureWell Health Clinic - Your Health, Our Priority",
  description:
    "Comprehensive healthcare services with experienced doctors and modern facilities. Book your appointment today at PureWell Health Clinic.",
  keywords:
    "healthcare, medical clinic, doctors, appointments, health services, medical care, family medicine, specialists",
  authors: [{ name: "PureWell Health Clinic" }],
  creator: "PureWell Health Clinic",
  publisher: "PureWell Health Clinic",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://purewell-clinic.com",
    title: "PureWell Health Clinic - Your Health, Our Priority",
    description: "Comprehensive healthcare services with experienced doctors and modern facilities.",
    siteName: "PureWell Health Clinic",
  },
  twitter: {
    card: "summary_large_image",
    title: "PureWell Health Clinic - Your Health, Our Priority",
    description: "Comprehensive healthcare services with experienced doctors and modern facilities.",
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#3b82f6",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="msapplication-TileColor" content="#3b82f6" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <div className="min-h-screen bg-background text-foreground">{children}</div>
      </body>
    </html>
  )
}



