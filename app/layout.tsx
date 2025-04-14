import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import StarryBackground from "@/components/starry-background"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "SuperTees - Superhero T-Shirts",
  description: "Shop the best superhero-themed t-shirts with cosmic designs",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <StarryBackground />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}


import './globals.css'