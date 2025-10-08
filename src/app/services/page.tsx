import Link from "next/link"

export default function ServicesPage() {
  const services = [
    {
      title: "Property Buying Consultation",
      description:
        "Expert guidance for purchasing residential, commercial, and investment properties with comprehensive market insights and legal support.",
      features: [
        "Property search and selection",
        "Market analysis and pricing",
        "Legal documentation support",
        "Negotiation assistance",
        "Site visits and inspections",
      ],
      icon: (
        <svg className="h-12 w-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
        </svg>
      ),
      image: "/images/cc.webp",
    },
    {
      title: "Property Selling Assistance",
      description:
        "Smooth and profitable selling process with strategic pricing, effective marketing, and expert buyer negotiations.",
      features: [
        "Property valuation",
        "Marketing and advertising",
        "Buyer screening",
        "Negotiation support",
        "Documentation assistance",
      ],
      icon: (
        <svg className="h-12 w-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M21 18v1c0 1.1-.9 2-2 2H5c-1.11 0-2-.9-2-2V5c0-1.1.89-2 2-2h14c1.1 0 2 .9 2 2v1h-9c-1.11 0-2 .9-2 2v8c0 1.1.89 2 2 2h9zm-9-2h10V8H12v8zm4-2.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
        </svg>
      ),
      image: "/images/cc1.webp",
    },
    {
      title: "Property Management (NRIs & Investors)",
      description:
        "Comprehensive property management services including tenant sourcing, maintenance, and rental collection for hassle-free ownership.",
      features: [
        "Tenant sourcing and screening",
        "Rent collection",
        "Property maintenance",
        "Regular inspections",
        "Financial reporting",
      ],
      icon: (
        <svg className="h-12 w-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 7.5c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 9c-2.7 0-5.8 1.29-6 2h12c-.22-.72-3.31-2-6-2z" />
        </svg>
      ),
      image: "/images/cc2.webp",
    },
    {
      title: "Investment Advisory",
      description:
        "Tailored real estate investment strategies to maximize returns and build long-term wealth through smart property investments.",
      features: [
        "Investment opportunity analysis",
        "ROI calculations",
        "Market trend insights",
        "Portfolio diversification",
        "Risk assessment",
      ],
      icon: (
        <svg className="h-12 w-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z" />
        </svg>
      ),
      image: "/images/cc3.webp",
    },
    {
      title: "Commercial Real Estate Services",
      description:
        "Assistance in buying, selling, leasing, and managing commercial properties with professional support and market expertise.",
      features: [
        "Commercial property search",
        "Lease negotiations",
        "Tenant representation",
        "Property valuation",
        "Investment analysis",
      ],
      icon: (
        <svg className="h-12 w-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z" />
        </svg>
      ),
      image: "/images/cc4.webp",
    },
    {
      title: "Home Loan & Finance Assistance",
      description:
        "Guidance and facilitation for home loans, mortgages, and financial planning to ease property transactions and ownership.",
      features: [
        "Loan eligibility assessment",
        "Bank liaison",
        "Documentation support",
        "Best rate negotiations",
        "EMI planning",
      ],
      icon: (
        <svg className="h-12 w-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z" />
        </svg>
      ),
      image: "/images/cc5.webp",
    },
  ]

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 h-[350px] bg-gradient-to-br from-[rgb(11,92,173)] via-[rgb(30,136,229)] to-[rgb(66,194,255)] text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 h-64 w-64 rounded-full bg-white opacity-10 blur-3xl"></div>
          <div className="absolute bottom-20 right-10 h-96 w-96 rounded-full bg-[rgb(66,194,255)] opacity-20 blur-3xl"></div>
        </div>

        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">Our Services</h1>
            <p className="text-xl text-[rgb(207,238,255)] leading-relaxed">
              Comprehensive real estate solutions tailored to your needs
            </p>
          </div>
        </div>

        <div
          className="absolute bottom-0 left-0 right-0 h-24 bg-white"
          style={{ clipPath: "polygon(0 100%, 100% 0, 100% 100%, 0 100%)" }}
        ></div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {services.map((service, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
              >
                <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className="bg-[rgb(234,247,255)] rounded-3xl p-8 lg:p-12">
                    <div className="h-20 w-20 rounded-full bg-gradient-to-br from-[rgb(30,136,229)] to-[rgb(66,194,255)] flex items-center justify-center text-white mb-6">
                      {service.icon}
                    </div>
                    <h2 className="text-3xl font-bold text-[rgb(11,92,173)] mb-4">{service.title}</h2>
                    <p className="text-[rgb(85,85,85)] leading-relaxed mb-6">{service.description}</p>

                    <ul className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-3">
                          <div className="h-6 w-6 rounded-full bg-[rgb(30,136,229)] flex items-center justify-center flex-shrink-0">
                            <svg className="h-4 w-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-sm text-[rgb(85,85,85)]">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="rounded-3xl shadow-2xl w-full h-[400px] object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 bg-[rgb(11,92,173)] text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-10 h-96 w-96 rounded-full bg-[rgb(66,194,255)] opacity-20 blur-3xl"></div>
        </div>

        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-[rgb(207,238,255)] mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your real estate needs and discover how we can help you achieve your property
            goals.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-white text-[rgb(11,92,173)] rounded-full font-bold text-lg hover:bg-[rgb(234,247,255)] transition-all duration-300 shadow-lg hover:scale-105 cursor-pointer"
          >
            Contact Us Now
          </Link>
        </div>
      </section>
    </main>
  )
}