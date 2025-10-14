export default function ProjectsPage() {
  const projects = [
    {
      title: "Luxury Villa Complex",
      location: "ECR, Chennai",
      type: "Residential",
      status: "Completed",
      description:
        "Premium gated community featuring 50 luxury villas with modern amenities, landscaped gardens, and beachfront access.",
      image: "/images/1.webp",
      features: ["50 Villas", "Beachfront", "Clubhouse", "Swimming Pool"],
    },
    {
      title: "Commercial Tower",
      location: "OMR, Chennai",
      type: "Commercial",
      status: "Completed",
      description:
        "State-of-the-art commercial office space spanning 10 floors with modern infrastructure and premium facilities.",
      image: "/images/7.webp",
      features: ["10 Floors", "IT Park", "Parking", "Food Court"],
    },
    {
      title: "Gated Community",
      location: "Tambaram, Chennai",
      type: "Residential",
      status: "Completed",
      description: "Family-friendly residential complex with 200 apartments, children's play area, and 24/7 security.",
      image: "/images/3.webp",
      features: ["200 Apartments", "24/7 Security", "Play Area", "Gym"],
    },
    {
      title: "Shopping Complex",
      location: "T Nagar, Chennai",
      type: "Commercial",
      status: "Completed",
      description: "Multi-level shopping destination with retail stores, entertainment zones, and dining options.",
      image: "/images/6.webp",
      features: ["100+ Stores", "Multiplex", "Food Court", "Parking"],
    },
    {
      title: "Premium Apartments",
      location: "Velachery, Chennai",
      type: "Residential",
      status: "Ongoing",
      description: "Luxury apartment complex with 3 towers offering 2, 3, and 4 BHK units with premium amenities.",
      image: "/images/5.webp",
      features: ["3 Towers", "Premium Amenities", "Rooftop Garden", "Clubhouse"],
    },
    {
      title: "Tech Park",
      location: "Sholinganallur, Chennai",
      type: "Commercial",
      status: "Ongoing",
      description: "Modern technology park designed for IT companies with world-class infrastructure and facilities.",
      image: "/images/8.webp",
      features: ["IT Infrastructure", "Cafeteria", "Parking", "Conference Halls"],
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">Our Projects</h1>
            <p className="text-xl text-[rgb(207,238,255)] leading-relaxed">
              Explore our portfolio of successful real estate developments across Chennai
            </p>
          </div>
        </div>

        <div
          className="absolute bottom-0 left-0 right-0 h-24 bg-white"
          style={{ clipPath: "polygon(0 100%, 100% 0, 100% 100%, 0 100%)" }}
        ></div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-bold text-[rgb(11,92,173)]">
                      {project.type}
                    </span>
                    <span
                      className={`px-3 py-1 backdrop-blur-sm rounded-full text-xs font-bold text-white ${
                        project.status === "Completed" ? "bg-green-500/90" : "bg-orange-500/90"
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>

                  {/* Location */}
                  <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                    </svg>
                    <span className="text-sm font-semibold">{project.location}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-[rgb(11,92,173)] mb-3">{project.title}</h3>
                  <p className="text-sm text-[rgb(85,85,85)] leading-relaxed mb-4">{project.description}</p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2">
                    {project.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-[rgb(234,247,255)] text-xs font-semibold text-[rgb(30,136,229)] rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-20 bg-[rgb(234,247,255)] overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: "60,000+", label: "Properties Sold" },
              { number: "60000+", label: "Happy Clients" },
              { number: "120+", label: "Projects Completed" },
              { number: "9", label: "Years Experience" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold text-[rgb(11,92,173)] mb-2">{stat.number}</div>
                <div className="text-sm text-[rgb(85,85,85)] font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
