import Link from "next/link"

export default function ServicesSection() {
  const services = [
    {
      title: "Property Buying Consultation",
      description:
        "Expert guidance for purchasing residential, commercial, and investment properties with market insights and legal support.",
      icon: (
        <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
        </svg>
      ),
      link: "/services/property-buying",
    },
    {
      title: "Property Selling Assistance",
      description: "Smooth and profitable selling process with pricing strategies, marketing, and buyer negotiations.",
      icon: (
        <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M21 18v1c0 1.1-.9 2-2 2H5c-1.11 0-2-.9-2-2V5c0-1.1.89-2 2-2h14c1.1 0 2 .9 2 2v1h-9c-1.11 0-2 .9-2 2v8c0 1.1.89 2 2 2h9zm-9-2h10V8H12v8zm4-2.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
        </svg>
      ),
      link: "/services/property-selling",
    },
    {
      title: "Property Management",
      description:
        "Comprehensive property management services including tenant sourcing, maintenance, and rental collection for NRIs and investors.",
      icon: (
        <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l-5.5 9h11z M17.5 11L12 2 6.5 11H1l5 7.5L12 22l6-3.5 5-7.5z" />
          <path d="M12 7.5c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 9c-2.7 0-5.8 1.29-6 2h12c-.22-.72-3.31-2-6-2z" />
        </svg>
      ),
      link: "/services/property-management",
    },
    {
      title: "Investment Advisory",
      description: "Tailored real estate investment strategies to maximize returns and build long-term wealth.",
      icon: (
        <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z" />
        </svg>
      ),
      link: "/services/investment-advisory",
    },
    {
      title: "Commercial Real Estate",
      description:
        "Assistance in buying, selling, leasing, and managing commercial properties with professional support.",
      icon: (
        <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z" />
        </svg>
      ),
      link: "/services/commercial-services",
    },
    {
      title: "Home Loan & Finance",
      description:
        "Guidance and facilitation for home loans, mortgages, and financial planning to ease property transactions.",
      icon: (
        <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z" />
        </svg>
      ),
      link: "/services/home-loan-finance",
    },
  ]

  return (
      <section className=" relative sm:h-[1100px] h-full  py-20 bg-gradient-to-b from-[rgba(19,42,87,1)] to-[rgba(210,238,255,1)] overflow-hidden">
      {/* Skewed Background */}
      <div className="absolute inset-0 bg-[rgba(200,234,255,1)] origin-top skew-y-4 "></div>
      {/* Background Decorations */}
      <div className="absolute top-20 right-10 h-64 w-64 rounded-full bg-[rgb(66,194,255)] opacity-10 blur-3xl"></div>
      <div className="absolute bottom-20 left-10 h-64 w-64 rounded-full bg-[rgb(30,136,229)] opacity-10 blur-3xl"></div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 bg-white rounded-full mb-4">
            <p className="text-sm font-bold text-[rgb(30,136,229)]">OUR SERVICES</p>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[rgb(11,92,173)] mb-6 text-balance">
            Comprehensive Real Estate Solutions
          </h2>
          <p className="text-lg text-[rgb(85,85,85)] leading-relaxed">
            From property buying to investment advisory, we offer end-to-end real estate services tailored to your
            needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Icon */}
              <div className="h-16 w-16 rounded-full bg-gradient-to-br from-[rgb(30,136,229)] to-[rgb(66,194,255)] flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-[rgb(11,92,173)] mb-3">{service.title}</h3>
              <p className="text-sm text-[rgb(85,85,85)] leading-relaxed mb-6">{service.description}</p>

              {/* Link */}
              <Link
                href={service.link}
                className="inline-flex items-center gap-2 text-sm font-bold text-[rgb(30,136,229)] hover:text-[rgb(11,92,173)] transition-colors cursor-pointer"
              >
                Learn More
                <svg
                  className="h-4 w-4 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            href="/services"
            className="inline-block px-8 py-4 bg-[rgb(30,136,229)] text-white rounded-full font-bold hover:bg-[rgb(11,92,173)] transition-all duration-300 shadow-lg hover:scale-105 cursor-pointer"
          >
            View All Services
          </Link>
        </div>
      </div>

      {/* Skewed Bottom Border */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 bg-white"
        style={{ clipPath: "polygon(0 100%, 100% 0, 100% 100%, 0 100%)" }}
      ></div>
    </section>
  )
}
