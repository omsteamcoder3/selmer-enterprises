"use client"

import { useState, useEffect } from "react"

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      name: "Murugan Kumar",
      role: "Property Buyer",
      content:
        "Selmer Enterprises helped me find my dream home in Adyar. Their professional approach and market knowledge made the entire process smooth and stress-free. Highly recommended!",
      rating: 5,
    },
    {
      name: "Priya Rajesh",
      role: "NRI Investor",
      content:
        "As an NRI, managing my property in Chennai was challenging. Selmer Enterprises provided excellent property management services. They handle everything professionally and keep me updated regularly.",
      rating: 5,
    },
    {
      name: "Karthick Sundar",
      role: "Commercial Property Owner",
      content:
        "I sold my commercial property through Selmer Enterprises. They got me the best price and handled all negotiations expertly. Their transparency and dedication are commendable.",
      rating: 5,
    },
    {
      name: "Lakshmi Venkatesh",
      role: "First-time Home Buyer",
      content:
        "Being a first-time buyer, I had many doubts. The team at Selmer Enterprises patiently guided me through every step, from property selection to home loan assistance. Excellent service!",
      rating: 5,
    },
    {
      name: "Rajesh Kumar",
      role: "Real Estate Investor",
      content:
        "Their investment advisory services are top-notch. They helped me identify profitable properties and maximize my returns. Very professional and knowledgeable team.",
      rating: 5,
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [testimonials.length])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  return (
        <section className=" relative h-[1100px] py-20 bg-gradient-to-b from-white to-[rgba(1,90,179,1)] overflow-hidden">
      {/* Skewed Background */}
      <div className="absolute inset-0 bg-[rgb(11,92,173)] origin-top -skew-y-4 "></div>
      <div className="absolute top-20 right-10 h-96 w-96 rounded-full bg-[rgb(66,194,255)] opacity-10 blur-3xl"></div>
      <div className="absolute bottom-20 left-10 h-96 w-96 rounded-full bg-[rgb(30,136,229)] opacity-10 blur-3xl"></div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-4">
            <p className="text-sm font-bold text-[rgb(66,194,255)]">TESTIMONIALS</p>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">What Our Clients Say</h2>
          <p className="text-lg text-[rgb(207,238,255)] leading-relaxed">
            Don't just take our word for it. Here's what our satisfied clients have to say about their experience with
            Selmer Enterprises.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20">
            {/* Quote Icon */}
            <div className="flex justify-center mb-6">
              <div className="h-16 w-16 rounded-full bg-gradient-to-br from-[rgb(66,194,255)] to-[rgb(30,136,229)] flex items-center justify-center">
                <svg className="h-8 w-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                </svg>
              </div>
            </div>

            {/* Testimonial Content */}
            <div className="text-center mb-8">
              <p className="text-lg md:text-xl text-white leading-relaxed mb-6 min-h-[120px] flex items-center justify-center">
                "{testimonials[currentIndex].content}"
              </p>

              {/* Rating */}
              <div className="flex justify-center gap-1 mb-4">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <svg key={i} className="h-6 w-6 text-[rgb(66,194,255)]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>

              {/* Author */}
              <div className="flex items-center justify-center gap-4">
                <div className="h-14 w-14 rounded-full bg-gradient-to-br from-[rgb(30,136,229)] to-[rgb(66,194,255)] flex items-center justify-center">
                  <svg className="h-8 w-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                </div>
                <div className="text-left">
                  <h4 className="text-lg font-bold text-white">{testimonials[currentIndex].name}</h4>
                  <p className="text-sm text-[rgb(207,238,255)]">{testimonials[currentIndex].role}</p>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <div className="flex items-center justify-center gap-4">
              <button
                onClick={goToPrevious}
                className="h-12 w-12 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Previous testimonial"
              >
                <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Dots */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`h-2 rounded-full transition-all cursor-pointer ${
                      index === currentIndex ? "w-8 bg-white" : "w-2 bg-white/40"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={goToNext}
                className="h-12 w-12 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Next testimonial"
              >
                <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
