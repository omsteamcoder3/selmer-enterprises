export default function AboutPage() {
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">About Selmer Enterprises Pvt Ltd</h1>
            <p className="text-xl text-[rgb(207,238,255)] leading-relaxed">
              Your Trusted Partner in Real Estate Success Since 2013
            </p>
          </div>
        </div>

        <div
          className="absolute bottom-0 left-0 right-0 h-24 bg-white"
          style={{ clipPath: "polygon(0 100%, 100% 0, 100% 100%, 0 100%)" }}
        ></div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-[rgb(11,92,173)] mb-6">Our Story</h2>
              <div className="space-y-4 text-[rgb(85,85,85)] leading-relaxed">
                <p>
                  Founded with a vision to provide comprehensive real estate solutions, Selmer Enterprises Pvt Ltd is a
                  trusted name in property services in Chennai. We specialize in property buying consultation, property
                  selling assistance, property management for NRIs and investors, investment advisory, commercial real
                  estate services, and home loan & finance assistance.
                </p>
                <p>
                  With a client-centric approach, our team of experienced professionals ensures seamless transactions,
                  transparent dealings, and personalized solutions for every client. Whether you're buying your dream
                  home, selling an investment property, or seeking expert advice for real estate investments, Selmer
                  Enterprises Pvt Ltd is committed to guiding you every step of the way.
                </p>
                <p>
                  Located in the heart of Adyar, Chennai, we combine local expertise with a deep understanding of market
                  trends to deliver exceptional real estate services. Our mission is to make property dealings simple,
                  efficient, and profitable for our clients.
                </p>
              </div>
            </div>
            <div className="relative">
              <img src="/images/cc6.webp" alt="Our Team" className="rounded-3xl shadow-2xl w-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="relative py-20 bg-[rgb(234,247,255)] overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <div className="h-16 w-16 rounded-full bg-gradient-to-br from-[rgb(30,136,229)] to-[rgb(66,194,255)] flex items-center justify-center mb-6">
                <svg className="h-8 w-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-[rgb(11,92,173)] mb-4">Our Mission</h3>
              <p className="text-[rgb(85,85,85)] leading-relaxed">
                At Selmer Enterprises, our mission is to simplify the real estate journey for our clients by providing
                transparent, reliable, and personalized property solutions. We aim to empower buyers, sellers, and
                investors with expert guidance, ensuring every decision is informed and profitable. Our focus is on
                building long-term relationships based on trust, integrity, and exceptional service. By leveraging local
                market insights and innovative strategies, we help clients achieve their property goals efficiently.
                Ultimately, we strive to make property ownership and investment a smooth, rewarding experience for
                everyone.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <div className="h-16 w-16 rounded-full bg-gradient-to-br from-[rgb(30,136,229)] to-[rgb(66,194,255)] flex items-center justify-center mb-6">
                <svg className="h-8 w-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-[rgb(11,92,173)] mb-4">Our Vision</h3>
              <p className="text-[rgb(85,85,85)] leading-relaxed">
                Our vision is to be recognized as a leading real estate company known for excellence, innovation, and
                client satisfaction. We aspire to create a benchmark in ethical real estate practices while delivering
                comprehensive solutions across buying, selling, management, and investment services. We envision a
                future where every client experiences seamless transactions and achieves their property aspirations with
                confidence. By continuously evolving and adopting the latest market trends, we aim to redefine standards
                in the real estate industry. Our goal is to transform the property landscape into one of transparency,
                growth, and lasting client relationships.
              </p>
            </div>
          </div>
        </div>

        <div
          className="absolute bottom-0 left-0 right-0 h-24 bg-white"
          style={{ clipPath: "polygon(0 0, 100% 100%, 100% 100%, 0 100%)" }}
        ></div>
      </section>

      {/* Key Focus Areas */}
      <section className="py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[rgb(11,92,173)] mb-4">Key Focus Areas</h2>
            <p className="text-lg text-[rgb(85,85,85)]">What sets us apart in the real estate industry</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Client-Centric Approach",
                description: "Personalized solutions to meet individual property needs.",
                icon: "👥",
              },
              {
                title: "Transparency & Trust",
                description: "Ethical dealings and clear communication throughout every transaction.",
                icon: "🤝",
              },
              {
                title: "Expert Advisory",
                description: "Professional guidance for property buying, selling, management, and investments.",
                icon: "💼",
              },
              {
                title: "NRI & Investor Services",
                description: "Specialized property management and advisory for NRIs and investors.",
                icon: "🌍",
              },
              {
                title: "Comprehensive Solutions",
                description: "From home loans to commercial real estate services, we cover it all.",
                icon: "🏢",
              },
              {
                title: "Market Insights",
                description: "Leveraging local knowledge and market trends to deliver profitable outcomes.",
                icon: "📊",
              },
            ].map((focus, index) => (
              <div key={index} className="bg-[rgb(234,247,255)] rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{focus.icon}</div>
                <h3 className="text-xl font-bold text-[rgb(11,92,173)] mb-2">{focus.title}</h3>
                <p className="text-sm text-[rgb(85,85,85)] leading-relaxed">{focus.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="relative py-20 bg-[rgb(234,247,255)] overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[rgb(11,92,173)] mb-4">Our Journey</h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="h-16 w-16 rounded-full bg-gradient-to-br from-[rgb(30,136,229)] to-[rgb(66,194,255)] flex items-center justify-center text-white font-bold text-lg">
                    2013
                  </div>
                </div>
                <div className="bg-white rounded-2xl p-6 flex-1 shadow-lg">
                  <h3 className="text-xl font-bold text-[rgb(11,92,173)] mb-2">Company Founded</h3>
                  <p className="text-[rgb(85,85,85)]">
                    Selmer Enterprises was established with a vision to provide comprehensive real estate solutions in
                    Chennai.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="h-16 w-16 rounded-full bg-gradient-to-br from-[rgb(30,136,229)] to-[rgb(66,194,255)] flex items-center justify-center text-white font-bold text-lg">
                    2024
                  </div>
                </div>
                <div className="bg-white rounded-2xl p-6 flex-1 shadow-lg">
                  <h3 className="text-xl font-bold text-[rgb(11,92,173)] mb-2">Partnership Firm</h3>
                  <p className="text-[rgb(85,85,85)]">
                    Evolved into a Partnership Firm, expanding our services and strengthening our commitment to clients.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
