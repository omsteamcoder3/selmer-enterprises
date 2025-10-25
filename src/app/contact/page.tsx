"use client"

import type React from "react"

import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const whatsappMessage = `*New Inquiry from Website*%0A%0A*Name:* ${formData.name}%0A*Email:* ${formData.email}%0A*Phone:* ${formData.phone}%0A*Service:* ${formData.service}%0A*Message:* ${formData.message}`

    window.open(`https://wa.me/919500122321?text=${whatsappMessage}`, "_blank")
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 h-[300px] sm:h-[350px] bg-gradient-to-br from-[rgb(11,92,173)] via-[rgb(30,136,229)] to-[rgb(66,194,255)] text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-4 sm:left-10 h-40 w-40 sm:h-64 sm:w-64 rounded-full bg-white opacity-10 blur-3xl"></div>
          <div className="absolute bottom-20 right-4 sm:right-10 h-60 w-60 sm:h-96 sm:w-96 rounded-full bg-[rgb(66,194,255)] opacity-20 blur-3xl"></div>
        </div>

        <div className="max-w-[1400px] mx-auto px-3 sm:px-6 lg:px-8 relative z-10 h-full flex items-center">
          <div className="text-center max-w-4xl mx-auto w-full">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-balance">Contact Us</h1>
            <p className="text-base sm:text-lg md:text-xl text-[rgb(207,238,255)] leading-relaxed px-2">
              Get in touch with us for all your real estate needs
            </p>
          </div>
        </div>

        <div
          className="absolute bottom-0 left-0 right-0 h-16 sm:h-24 bg-white"
          style={{ clipPath: "polygon(0 100%, 100% 0, 100% 100%, 0 100%)" }}
        ></div>
      </section>

      {/* Contact Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-3 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[rgb(11,92,173)] mb-4 sm:mb-6">Get In Touch</h2>
              <p className="text-[rgb(85,85,85)] leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base">
                Have questions about our services? Want to schedule a consultation? We're here to help! Reach out to us
                through any of the following channels.
              </p>

              <div className="space-y-4 sm:space-y-6">
                {/* Phone */}
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 rounded-full bg-gradient-to-br from-[rgb(30,136,229)] to-[rgb(66,194,255)] flex items-center justify-center flex-shrink-0">
                    <svg className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-[rgb(11,92,173)] mb-1">Phone</h3>
                    <a
                      href="tel:+919500122321"
                      className="text-[rgb(85,85,85)] hover:text-[rgb(30,136,229)] transition-colors cursor-pointer text-sm sm:text-base"
                    >
                      +91 95001 22321
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 rounded-full bg-gradient-to-br from-[rgb(30,136,229)] to-[rgb(66,194,255)] flex items-center justify-center flex-shrink-0">
                    <svg className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 4H4C2.9 4 2 4.9 2 6v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-[rgb(11,92,173)] mb-1">Email</h3>
                    <a
                      href="mailto:selmerindia@gmail.com"
                      className="text-[rgb(85,85,85)] hover:text-[rgb(30,136,229)] transition-colors cursor-pointer text-sm sm:text-base"
                    >
                      selmerindia@gmail.com
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 rounded-full bg-gradient-to-br from-[rgb(30,136,229)] to-[rgb(66,194,255)] flex items-center justify-center flex-shrink-0">
                    <svg className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-[rgb(11,92,173)] mb-1">Address</h3>
                    <p className="text-[rgb(85,85,85)] leading-relaxed text-sm sm:text-base">
                      FLAT NO: F-3, Belief Appartment
                      <br />
                      36/24 Canal Bank Road
                      <br />
                      Kasthuribai Nagar, Adyar
                      <br />
                      Chennai - 600 020
                    </p>
                  </div>
                </div>

                {/* Social Media Section */}
                <div className="pt-4 sm:pt-6">
                  <h3 className="text-base sm:text-lg font-bold text-[rgb(11,92,173)] mb-4">Follow Us</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
                    {/* WhatsApp */}
                    <div className="flex flex-col items-center text-center">
                      <a
                        href="https://wa.me/919500122321"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center gap-2 group"
                      >
                        <div className="h-14 w-14 sm:h-16 sm:w-16 rounded-full bg-[#25D366] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                          <svg className="h-6 w-6 sm:h-7 sm:w-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                          </svg>
                        </div>
                        <span className="text-xs sm:text-sm text-[rgb(85,85,85)] group-hover:text-[#25D366] transition-colors font-medium">
                          WhatsApp
                        </span>
                      </a>
                    </div>

                    {/* Facebook */}
                    <div className="flex flex-col items-center text-center">
                      <a
                        href="https://www.facebook.com/share/1GnwWFs3Pi/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center gap-2 group"
                      >
                        <div className="h-14 w-14 sm:h-16 sm:w-16 rounded-full bg-gradient-to-br from-[#1877F2] to-[#0d5abf] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                          <svg className="h-6 w-6 sm:h-7 sm:w-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M22.675 0h-21.35C.6 0 0 .6 0 1.343v21.314C0 23.4.6 24 1.325 24h11.495v-9.294H9.691v-3.622h3.129V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.464.099 2.794.144v3.24l-1.918.001c-1.504 0-1.795.716-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.4 24 24 23.4 24 22.657V1.343C24 .6 23.4 0 22.675 0z"/>
                          </svg>
                        </div>
                        <span className="text-xs sm:text-sm text-[rgb(85,85,85)] group-hover:text-[#1877F2] transition-colors font-medium">
                          Facebook
                        </span>
                      </a>
                    </div>

                    {/* Instagram */}
               <div className="flex flex-col items-center text-center">
  <a
    href="https://www.instagram.com/selmerproperties?igsh=MWUwZmloMjdiMHRueA=="
    target="_blank"
    rel="noopener noreferrer"
    className="flex flex-col items-center gap-2 group"
  >
    <div className="relative h-14 w-14 sm:h-16 sm:w-16 rounded-full bg-gradient-to-br from-[#833AB4] via-[#C13584] to-[#E1306C] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl">
      {/* Outer glow effect */}
      
      {/* Main icon container */}
        <svg 
          className="h-6 w-6 sm:h-7 sm:w-7 text-white drop-shadow-sm" 
          fill="currentColor" 
          viewBox="0 0 24 24"
        >
          {/* Instagram camera body */}
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.07 1.645.07 4.849 0 3.205-.012 3.584-.07 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.07 4.849-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
  
      
      {/* Hover shine effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
    </div>
    
    <span className="text-xs sm:text-sm text-[rgb(85,85,85)] group-hover:text-[#E1306C] transition-all duration-300 font-semibold tracking-wide mt-1">
      Instagram
    </span>
  </a>
</div>

                    {/* Twitter */}
                    <div className="flex flex-col items-center text-center">
                      <a
                        href="https://x.com/selmer_media?t=UAlTtBVlfXG5iH_lKhimBA&s=09"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center gap-2 group"
                      >
                        <div className="h-14 w-14 sm:h-16 sm:w-16 rounded-full bg-gradient-to-br from-[#1DA1F2] to-[#0d8ddb] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                          <svg className="h-6 w-6 sm:h-7 sm:w-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-2.723 0-4.932 2.208-4.932 4.932 0 .39.045.765.127 1.124-4.094-.205-7.725-2.165-10.158-5.144-.424.728-.666 1.574-.666 2.475 0 1.708.869 3.215 2.188 4.099-.807-.026-1.566-.247-2.229-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.317 0-.626-.03-.927-.086.627 1.956 2.444 3.379 4.6 3.419-1.68 1.316-3.808 2.101-6.115 2.101-.398 0-.79-.023-1.175-.069 2.179 1.396 4.768 2.209 7.557 2.209 9.054 0 14.002-7.496 14.002-13.986 0-.21 0-.423-.015-.635.962-.695 1.8-1.562 2.46-2.549l-.047-.02z"/>
                          </svg>
                        </div>
                        <span className="text-xs sm:text-sm text-[rgb(85,85,85)] group-hover:text-[#1DA1F2] transition-colors font-medium">
                          Twitter
                        </span>
                      </a>
                    </div>
{/* YouTube */}
<div className="flex flex-col items-center text-center">
  <a
    href="https://youtube.com/@SelmerProperties"
    target="_blank"
    rel="noopener noreferrer"
    className="flex flex-col items-center gap-2 group"
  >
    <div className="h-14 w-14 sm:h-16 sm:w-16 rounded-full bg-gradient-to-br from-[#FF0000] to-[#FF4D4D] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
      <svg className="h-6 w-6 sm:h-7 sm:w-7 text-white" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a2.997 2.997 0 00-2.113-2.113C19.422 3.5 12 3.5 12 3.5s-7.422 0-9.385.573a2.997 2.997 0 00-2.113 2.113C0 8.149 0 12 0 12s0 3.851.502 5.814a2.997 2.997 0 002.113 2.113C4.578 20.5 12 20.5 12 20.5s7.422 0 9.385-.573a2.997 2.997 0 002.113-2.113C24 15.851 24 12 24 12s0-3.851-.502-5.814zM9.545 15.568V8.432l6.182 3.568-6.182 3.568z" />
      </svg>
    </div>
    <span className="text-xs sm:text-sm text-[rgb(85,85,85)] group-hover:text-[#FF0000] transition-colors font-medium">
      YouTube
    </span>
  </a>
</div>

                    {/* LinkedIn */}
                    <div className="flex flex-col items-center text-center">
                      <a
                        href="https://www.linkedin.com/in/d-a-s-selvan-a1b627263?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center gap-2 group"
                      >
                        <div className="h-14 w-14 sm:h-16 sm:w-16 rounded-full bg-gradient-to-br from-[#0A66C2] to-[#004182] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                          <svg className="h-6 w-6 sm:h-7 sm:w-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                          </svg>
                        </div>
                        <span className="text-xs sm:text-sm text-[rgb(85,85,85)] group-hover:text-[#0A66C2] transition-colors font-medium">
                          LinkedIn
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="mt-6 sm:mt-8 rounded-xl sm:rounded-2xl overflow-hidden shadow-lg h-48 sm:h-56 md:h-64">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.6891234567890!2d80.25!3d13.00!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDAwJzAwLjAiTiA4MMKwMTUnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-[rgb(234,247,255)] rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[rgb(11,92,173)] mb-4 sm:mb-6">Send Us a Message</h2>

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div>
                  <label htmlFor="name" className="block text-xs sm:text-sm font-bold text-[rgb(11,92,173)] mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg sm:rounded-xl border-2 border-transparent bg-white text-[rgb(85,85,85)] focus:border-[rgb(30,136,229)] focus:outline-none transition-colors text-sm sm:text-base"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs sm:text-sm font-bold text-[rgb(11,92,173)] mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg sm:rounded-xl border-2 border-transparent bg-white text-[rgb(85,85,85)] focus:border-[rgb(30,136,229)] focus:outline-none transition-colors text-sm sm:text-base"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-xs sm:text-sm font-bold text-[rgb(11,92,173)] mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg sm:rounded-xl border-2 border-transparent bg-white text-[rgb(85,85,85)] focus:border-[rgb(30,136,229)] focus:outline-none transition-colors text-sm sm:text-base"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-xs sm:text-sm font-bold text-[rgb(11,92,173)] mb-2">
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg sm:rounded-xl border-2 border-transparent bg-white text-[rgb(85,85,85)] focus:border-[rgb(30,136,229)] focus:outline-none transition-colors cursor-pointer text-sm sm:text-base"
                  >
                    <option value="">Select a service</option>
                    <option value="Property Buying">Property Buying</option>
                    <option value="Property Selling">Property Selling</option>
                    <option value="Property Management">Property Management</option>
                    <option value="Investment Advisory">Investment Advisory</option>
                    <option value="Commercial Services">Commercial Services</option>
                    <option value="Home Loan Assistance">Home Loan Assistance</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs sm:text-sm font-bold text-[rgb(11,92,173)] mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg sm:rounded-xl border-2 border-transparent bg-white text-[rgb(85,85,85)] focus:border-[rgb(30,136,229)] focus:outline-none transition-colors resize-none text-sm sm:text-base"
                    placeholder="Tell us about your requirements"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full px-6 sm:px-8 py-3 sm:py-4 bg-[rgb(30,136,229)] text-white rounded-full font-bold text-base sm:text-lg hover:bg-[rgb(11,92,173)] transition-all duration-300 shadow-lg hover:scale-105 cursor-pointer"
                >
                  Send Message via WhatsApp
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}