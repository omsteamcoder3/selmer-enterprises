"use client"

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"

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
        <div className="h-20 w-20 rounded-full border-4 border-[rgb(207,238,255)] border-t-[rgb(30,136,229)] animate-spin"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <svg className="h-10 w-10 text-[rgb(30,136,229)]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
          </svg>
        </div>
      </div>
    </div>
  )
}
