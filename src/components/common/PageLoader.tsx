"use client"

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import Image from "next/image"
export default function PageLoader() {
  const [loading, setLoading] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setLoading(true)
    const timer = setTimeout(() => {
      setLoading(false)
    }, 500)

    return () => clearTimeout(timer)
  }, [pathname])

  if (!loading) return null

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white">
     <div className="relative">
  {/* Spinning Border */}
  <div className="h-20 w-20 rounded-full border-4 border-[rgb(207,238,255)] border-t-[rgb(30,136,229)] animate-spin"></div>

  {/* Image in the center */}
  <div className="absolute inset-0 flex items-center justify-center">
    <div className="w-100 h-100 relative">
      <Image
        src="/logo.webp"       // replace with your image path
        alt="Logo"
        fill
        className="object-contain"
      />
    </div>
  </div>
</div>
    </div>
  )
}
