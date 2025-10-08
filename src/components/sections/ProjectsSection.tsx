export default function ProjectsSection() {
  const projects = [
    {
      title: "Luxury Villa Complex",
      location: "ECR, Chennai",
      type: "Residential",
      image: "/images/1.webp",
    },
    {
      title: "Commercial Tower",
      location: "OMR, Chennai",
      type: "Commercial",
      image: "/images/7.webp",
    },
    {
      title: "Gated Community",
      location: "Tambaram, Chennai",
      type: "Residential",
      image: "/images/3.webp",
    },
    {
      title: "Shopping Complex",
      location: "T Nagar, Chennai",
      type: "Commercial",
      image: "/images/6.webp",
    },
    {
      title: "Premium Apartments",
      location: "Velachery, Chennai",
      type: "Residential",
      image: "/images/5.webp",
    },
    {
      title: "Tech Park",
      location: "Sholinganallur, Chennai",
      type: "Commercial",
      image: "/images/8.webp",
    },
  ]

  return (
    <section className=" relative h-[1100px] py-20 bg-gradient-to-b from-white to-[rgb(11,92,173)] overflow-hidden">
      {/* Skewed Background */}
      <div className="absolute inset-0 bg-white origin-top -skew-y-4 "></div>
      <div className="absolute top-20 left-10 h-96 w-96 rounded-full bg-[rgb(234,247,255)] opacity-50 blur-3xl"></div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 bg-[rgb(234,247,255)] rounded-full mb-4">
            <p className="text-sm font-bold text-[rgb(30,136,229)]">OUR PROJECTS</p>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[rgb(11,92,173)] mb-6 text-balance">
            Featured Real Estate Projects
          </h2>
          <p className="text-lg text-[rgb(85,85,85)] leading-relaxed">
            Explore our portfolio of successful real estate projects across Chennai, from luxury residences to
            commercial developments.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgb(11,92,173)] via-[rgb(11,92,173)]/50 to-transparent opacity-60"></div>

                {/* Type Badge */}
                <div className="absolute top-4 right-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full">
                  <span className="text-xs font-bold text-[rgb(11,92,173)]">{project.type}</span>
                </div>
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <div className="flex items-center gap-2 text-sm text-[rgb(207,238,255)]">
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                  <span>{project.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="/projects"
            className="inline-block px-8 py-4 bg-[rgb(30,136,229)] text-white rounded-full font-bold hover:bg-[rgb(11,92,173)] transition-all duration-300 shadow-lg hover:scale-105 cursor-pointer"
          >
            View All Projects
          </a>
        </div>
      </div>


    </section>
  )
}
