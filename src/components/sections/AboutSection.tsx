import Link from "next/link"

export default function AboutSection() {
  return (
    <section className="-mt-15 relative sm:h-[900px] h-full  py-20 bg-gradient-to-b from-transparent to-[rgba(200,234,255,1)] overflow-hidden z-20">
      {/* Skewed Background */}
      <div className="absolute inset-0 bg-[rgba(19,42,87,1)] origin-top skew-y-4 "></div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <div className="relative order-2 lg:order-1">
 <div className="relative w-64 h-64">
  {/* Skewed border/frame */}


  {/* Image inside skewed frame but stays upright */}
  <div className="relative sm:w-130 sm:h-120 w-72 h-60 skew-y-5 border-4 border-[rgb(66,194,255)] overflow-hidden sm:-mt-80">
    <img
      src="/images/d1.webp"
      alt="About Selmer Enterprises"
      className="w-140 h-190 sm:-mt-35 -mt-65 object-contain -skew-y-5 overflow-hidden transform scale-105 shadow-2xl "
    />
  </div>
</div>

            {/* Decorative Elements */}
            <div className="absolute -bottom-8 -right-8 h-32 w-32 bg-gradient-to-br from-[rgb(30,136,229)] to-[rgb(66,194,255)] rounded-full opacity-20 blur-2xl"></div>
          </div>

          {/* Right Content */}
          <div className="space-y-6 order-1 lg:order-2">
            <div className="inline-block px-4 py-2 bg-[rgb(234,247,255)] rounded-full">
              <p className="text-sm font-bold text-[rgb(30,136,229)]">ABOUT US</p>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-[rgb(30,136,229)] leading-tight text-balance">
              Comprehensive Real Estate Solutions Since 2016
            </h2>

            <p className="text-base text-[rgba(235,235,235,1)] leading-relaxed">
              Founded with a vision to provide comprehensive real estate solutions, Selmer Enterprises Pvt Ltd is a
              trusted name in property services in Chennai. We specialize in property buying consultation, property
              selling assistance, property management for NRIs and investors, investment advisory, commercial real
              estate services, and home loan & finance assistance.
            </p>

            <p className="text-base text-[rgba(235,235,235,1)] leading-relaxed">
              With a client-centric approach, our team of experienced professionals ensures seamless transactions,
              transparent dealings, and personalized solutions for every client. Whether you're buying your dream home,
              selling an investment property, or seeking expert advice for real estate investments, Selmer Enterprises
              Pvt Ltd is committed to guiding you every step of the way.
            </p>

            <p className="text-base text-[rgba(235,235,235,1)] leading-relaxed">
              Located in the heart of Adyar, Chennai, we combine local expertise with a deep understanding of market
              trends to deliver exceptional real estate services. Our mission is to make property dealings simple,
              efficient, and profitable for our clients.
            </p>

            {/* Key Features */}
            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              {[
                { icon: "✓", text: "Client-Centric Approach" },
                { icon: "✓", text: "Transparency & Trust" },
                { icon: "✓", text: "Expert Advisory" },
                { icon: "✓", text: "NRI & Investor Services" },
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-full bg-[rgb(30,136,229)] flex items-center justify-center text-white font-bold flex-shrink-0">
                    {item.icon}
                  </div>
                  <span className="text-sm font-semibold text-[rgba(255,255,255,1)]">{item.text}</span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>

    </section>
  )
}
