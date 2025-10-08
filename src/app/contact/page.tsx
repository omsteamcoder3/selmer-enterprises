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
      <section className="relative py-20 h-[350px] bg-gradient-to-br from-[rgb(11,92,173)] via-[rgb(30,136,229)] to-[rgb(66,194,255)] text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 h-64 w-64 rounded-full bg-white opacity-10 blur-3xl"></div>
          <div className="absolute bottom-20 right-10 h-96 w-96 rounded-full bg-[rgb(66,194,255)] opacity-20 blur-3xl"></div>
        </div>

        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">Contact Us</h1>
            <p className="text-xl text-[rgb(207,238,255)] leading-relaxed">
              Get in touch with us for all your real estate needs
            </p>
          </div>
        </div>

        <div
          className="absolute bottom-0 left-0 right-0 h-24 bg-white"
          style={{ clipPath: "polygon(0 100%, 100% 0, 100% 100%, 0 100%)" }}
        ></div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-4xl font-bold text-[rgb(11,92,173)] mb-6">Get In Touch</h2>
              <p className="text-[rgb(85,85,85)] leading-relaxed mb-8">
                Have questions about our services? Want to schedule a consultation? We're here to help! Reach out to us
                through any of the following channels.
              </p>

              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="h-14 w-14 rounded-full bg-gradient-to-br from-[rgb(30,136,229)] to-[rgb(66,194,255)] flex items-center justify-center flex-shrink-0">
                    <svg className="h-7 w-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[rgb(11,92,173)] mb-1">Phone</h3>
                    <a
                      href="tel:+919500122321"
                      className="text-[rgb(85,85,85)] hover:text-[rgb(30,136,229)] transition-colors cursor-pointer"
                    >
                      +91 95001 22321
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="h-14 w-14 rounded-full bg-gradient-to-br from-[rgb(30,136,229)] to-[rgb(66,194,255)] flex items-center justify-center flex-shrink-0">
                    <svg className="h-7 w-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[rgb(11,92,173)] mb-1">Address</h3>
                    <p className="text-[rgb(85,85,85)] leading-relaxed">
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

                {/* WhatsApp */}
                <div className="flex items-start gap-4">
                  <div className="h-14 w-14 rounded-full bg-[#25D366] flex items-center justify-center flex-shrink-0">
                    <svg className="h-7 w-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[rgb(11,92,173)] mb-1">WhatsApp</h3>
                    <a
                      href="https://wa.me/919500122321"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[rgb(85,85,85)] hover:text-[#25D366] transition-colors cursor-pointer"
                    >
                      Chat with us on WhatsApp
                    </a>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="mt-8 rounded-2xl overflow-hidden shadow-lg h-64">
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
            <div className="bg-[rgb(234,247,255)] rounded-3xl p-8 lg:p-12">
              <h2 className="text-3xl font-bold text-[rgb(11,92,173)] mb-6">Send Us a Message</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-[rgb(11,92,173)] mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 border-transparent bg-white text-[rgb(85,85,85)] focus:border-[rgb(30,136,229)] focus:outline-none transition-colors"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-[rgb(11,92,173)] mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 border-transparent bg-white text-[rgb(85,85,85)] focus:border-[rgb(30,136,229)] focus:outline-none transition-colors"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-bold text-[rgb(11,92,173)] mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 border-transparent bg-white text-[rgb(85,85,85)] focus:border-[rgb(30,136,229)] focus:outline-none transition-colors"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-bold text-[rgb(11,92,173)] mb-2">
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 border-transparent bg-white text-[rgb(85,85,85)] focus:border-[rgb(30,136,229)] focus:outline-none transition-colors cursor-pointer"
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
                  <label htmlFor="message" className="block text-sm font-bold text-[rgb(11,92,173)] mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border-2 border-transparent bg-white text-[rgb(85,85,85)] focus:border-[rgb(30,136,229)] focus:outline-none transition-colors resize-none"
                    placeholder="Tell us about your requirements"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-[rgb(30,136,229)] text-white rounded-full font-bold text-lg hover:bg-[rgb(11,92,173)] transition-all duration-300 shadow-lg hover:scale-105 cursor-pointer"
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
