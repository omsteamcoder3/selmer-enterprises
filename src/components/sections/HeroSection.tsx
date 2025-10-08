import Link from "next/link"
import Image from "next/image"

export default function HeroSection() {
  return (
    <section className="relative h-[1000px] bg-[rgba(19,42,87,1)] flex items-center justify-center overflow-hidden pt-20 -z-999">
      
      {/* Skewed Background */}
      <div className="absolute inset-0 bg-[rgba(41,79,150,1)] skew-y-4 origin-top "></div>

      {/* Background Image - covers the whole section */}
      <Image
        src="/images/hero2.webp"
        alt="Frapuccino"
        fill
        className="absolute inset-0 z-10 object-cover skew-y-4"
        style={{ pointerEvents: "none" }}
      />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="text-white space-y-6">
            <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <p className="text-sm font-semibold">Established 2013 • Partnership Firm 2024</p>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-balance">
              Your Trusted Partner in <span className="text-[rgb(66,194,255)]">Real Estate Success</span>
            </h1>

            <p className="text-lg md:text-xl text-[rgb(207,238,255)] leading-relaxed max-w-2xl">
              Founded with a vision to provide comprehensive <br />
              real estate solutions in Chennai. We specialize <br />
              in property buying, selling, management, <br />
              investment advisory, and more.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                href="/contact"
                className="px-8 py-4 bg-white text-[rgb(11,92,173)] rounded-full font-bold text-lg hover:bg-[rgb(234,247,255)] hover:scale-105 transition-all duration-300 shadow-lg cursor-pointer"
              >
                Get Started Today
              </Link>
              <Link
                href="/services"
                className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white hover:text-[rgb(11,92,173)] transition-all duration-300 cursor-pointer"
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}