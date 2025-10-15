import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import FloatingButtons from "@/components/common/FloatingButtons"
import PageLoader from "@/components/common/PageLoader"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "Selmer Enterprises Pvt Ltd - Your Trusted Partner in Real Estate Success",
  description:
    "Founded with a vision to provide comprehensive real estate solutions in Chennai. Property buying, selling, management, investment advisory, and more.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
       <head>
        {/* Favicon */}
        <link rel="icon" href="/logo.webp" />
        </head>
      <body className="font-sans antialiased">
        <PageLoader />
        <Suspense fallback={<div>Loading...</div>}>
          <Header />
          {children}
          <Footer />
          <FloatingButtons />
        </Suspense>
        <Analytics />
      </body>
    </html>
  )
}
