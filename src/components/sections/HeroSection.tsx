import Link from "next/link"
import Image from "next/image"

export default function HeroSection() {
  return (
    <section className="relative min-h-[600px] md:h-[700px] lg:h-[1000px] bg-[rgba(19,42,87,1)] flex items-center justify-center overflow-hidden pt-16 md:pt-20">
      
      {/* Skewed Background */}
      <div className="absolute inset-0 bg-[rgba(41,79,150,1)] origin-top"></div>

      {/* Background Image - contained */}
      <div className="absolute inset-0 z-10 overflow-hidden">
     
      {/* Background Image - covers the whole section */}
      <Image
        src="/images/hero2.webp"
        alt="Frapuccino"
        fill
        className="absolute inset-0 z-10 object-cover "
        style={{ pointerEvents: "none" }}
      />
      </div>

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/20 z-15"></div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          
          {/* Left Content */}
          <div className="text-white space-y-4 md:space-y-6 text-center lg:text-left mb-20">
            <div className="inline-block px-3 py-1.5 md:px-4 md:py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <p className="text-xs md:text-sm font-semibold">Established 2016 • Partnership Firm 2024</p>
            </div>

            <h1 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-snug md:leading-tight text-balance">
              Your Trusted Partner in <span className="text-[rgb(66,194,255)]">Real Estate Success</span>
            </h1>
            
            <h2 className="w-full text-xl md:text-3xl lg:text-4xl font-extrabold text-white tracking-wide text-center lg:text-left">
              0% Brokerage* . 100% Delight
            </h2>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-2 md:pt-4 justify-center lg:justify-start">
              <Link
                href="/contact"
                className="px-6 py-3 md:px-8 md:py-4 bg-white text-[rgb(11,92,173)] rounded-full font-bold text-base md:text-lg hover:bg-[rgb(234,247,255)] hover:scale-105 transition-all duration-300 shadow-lg cursor-pointer text-center"
              >
                Get Started Today
              </Link>
            
<Link
  href="/services"
  className="block mx-auto w-50 sm:w-70 px-6 py-3 md:px-8 md:py-4 bg-transparent border-2 border-white text-white rounded-full font-bold text-base md:text-lg hover:bg-white hover:text-[rgb(11,92,173)] transition-all duration-300 cursor-pointer text-center"
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