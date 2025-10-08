"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const navLinks = [
    { name: "HOME", href: "/" },
    { name: "ABOUT", href: "/about" },
    { name: "SERVICES", href: "/services" },
    { name: "PROJECTS", href: "/projects" },
    { name: "CONTACT", href: "/contact" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-[rgba(23,42,77,1)] shadow-lg" : "bg-[rgba(23,42,77,1)]"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" onClick={scrollToTop} className="flex items-center gap-3 cursor-pointer group">
            <div className="relative h-12 w-12 rounded-full bg-gradient-to-br from-[rgb(30,136,229)] to-[rgb(66,194,255)] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
              <svg className="h-7 w-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-[rgba(255,255,255,1)] leading-tight">Selmer Enterprises</span>
              <span className="text-xs text-[rgb(30,136,229)] font-semibold">Pvt Ltd</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`px-5 py-2 text-sm font-bold tracking-wide transition-all duration-300 rounded-full cursor-pointer ${
                  pathname === link.href
                    ? "bg-[rgb(30,136,229)] text-white"
                    : "text-[rgba(255,255,255,1)] hover:bg-[rgb(234,247,255)] hover:text-[rgb(30,136,229)]"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-[rgb(234,247,255)] transition-colors cursor-pointer"
            aria-label="Toggle menu"
          >
            <svg className="h-6 w-6 text-[rgb(11,92,173)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-[rgb(207,238,255)]">
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`px-4 py-3 text-sm font-bold tracking-wide transition-all duration-300 rounded-lg cursor-pointer ${
                    pathname === link.href
                      ? "bg-[rgb(30,136,229)] text-white"
                      : "text-[rgb(11,92,173)] hover:bg-[rgb(234,247,255)]"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
