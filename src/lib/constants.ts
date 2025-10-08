import type { Service, Testimonial, Blog, ContactInfo } from "@/types/site"

export const SITE_NAME = "Healthy You"
export const SITE_TAGLINE = "Transform your body, transform your life"

export const CONTACT_INFO: ContactInfo = {
  address: "232, Annai Sathya Nagar Main Road, Arumbakkam, Chennai – 600106, Tamil Nadu, India",
  phone: "+91 XXXXX XXXXX",
  email: "healthyyou2012@gmail.com",
}

export const SERVICES: Service[] = [
  {
    id: "1",
    title: "Medical Weight Loss Programs",
    description:
      "Personalized, doctor-led programs that target your unique metabolism, hormonal balance, and health conditions to ensure effective and safe weight loss.",
    icon: "🏥",
  },
  {
    id: "2",
    title: "Nutrition & Diet Planning",
    description:
      "Customized meal plans and dietary guidance based on your body type, lifestyle, and goals. Our nutrition experts ensure you get the right balance of nutrients.",
    icon: "🥗",
  },
  {
    id: "3",
    title: "Fitness & Activity Coaching",
    description:
      "Tailored exercise plans designed to complement your weight loss program. Our fitness coaches help you improve strength, endurance, and overall wellbeing.",
    icon: "💪",
  },
  {
    id: "4",
    title: "Metabolic & Hormonal Assessment",
    description:
      "Comprehensive assessments to identify underlying metabolic or hormonal factors that may affect your weight, ensuring we address the root cause.",
    icon: "🔬",
  },
  {
    id: "5",
    title: "New-Age Weight Loss Medications",
    description:
      "Clinically approved, science-backed medications to support your weight loss journey safely under medical supervision.",
    icon: "💊",
  },
  {
    id: "6",
    title: "Advanced Medical Devices & Therapy",
    description:
      "Use of state-of-the-art medical devices and non-invasive therapies to enhance fat reduction, boost metabolism, and support overall wellness.",
    icon: "⚡",
  },
  {
    id: "7",
    title: "Holistic Lifestyle Support",
    description:
      "Guidance on sleep, stress management, and daily routines to maintain long-term weight loss and achieve a healthier, happier lifestyle.",
    icon: "🧘",
  },
  {
    id: "8",
    title: "Ongoing Monitoring & Follow-Up",
    description:
      "Continuous tracking, personalized adjustments, and regular follow-ups to ensure you stay on track and achieve sustainable results.",
    icon: "📊",
  },
]

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Lakshmi Priya",
    location: "Chennai",
    text: "Healthy You transformed my life! I lost 15kg in 4 months with their personalized program. The doctor-led approach made me feel safe and supported throughout.",
    rating: 5,
  },
  {
    id: "2",
    name: "Rajesh Kumar",
    location: "Coimbatore",
    text: "The metabolic assessment revealed issues I never knew I had. With proper medication and diet planning, I finally achieved sustainable weight loss after years of trying.",
    rating: 5,
  },
  {
    id: "3",
    name: "Priya Selvam",
    location: "Madurai",
    text: "Amazing support from the health coaches! They motivated me every step of the way. Lost 20kg and gained confidence I never thought possible.",
    rating: 5,
  },
  {
    id: "4",
    name: "Karthik Venkat",
    location: "Trichy",
    text: "The holistic approach is what sets Healthy You apart. Not just weight loss, but complete lifestyle transformation. Highly recommend!",
    rating: 5,
  },
  {
    id: "5",
    name: "Divya Ramesh",
    location: "Salem",
    text: "Science-backed methods that actually work! The nutrition planning was perfect for my lifestyle. Lost 12kg and kept it off for over a year now.",
    rating: 5,
  },
  {
    id: "6",
    name: "Arun Prakash",
    location: "Vellore",
    text: "Professional, caring, and results-driven. The advanced medical devices accelerated my progress. Best decision I made for my health!",
    rating: 5,
  },
]

export const BLOGS: Blog[] = [
  {
    id: "1",
    title: "Understanding Metabolic Health",
    excerpt: "Learn how your metabolism affects weight loss and what you can do to optimize it for better results.",
    image: "/images/bb.webp",
    date: "2025-01-15",
  },
  {
    id: "2",
    title: "5 Science-Backed Weight Loss Tips",
    excerpt: "Discover evidence-based strategies that actually work for sustainable weight management.",
    image: "/images/bb1.webp",
    date: "2025-01-10",
  },
  {
    id: "3",
    title: "The Role of Sleep in Weight Loss",
    excerpt: "Why quality sleep is crucial for your weight loss journey and how to improve your sleep habits.",
    image: "/images/bb2.webp",
    date: "2025-01-05",
  },
  {
    id: "4",
    title: "Nutrition Myths Debunked",
    excerpt: "Separating fact from fiction in the world of diet and nutrition for effective weight management.",
    image: "/images/bb3.webp",
    date: "2024-12-28",
  },
]

export const WHY_CHOOSE_US = [
  {
    title: "Doctor-Led Programs",
    description:
      "Every weight loss plan is supervised by experienced medical professionals to ensure safety and effectiveness.",
    icon: "👨‍⚕️",
  },
  {
    title: "Personalized Approach",
    description:
      "We tailor programs based on your metabolism, lifestyle, and health conditions—no one-size-fits-all solutions.",
    icon: "🎯",
  },
  {
    title: "Science-Backed Methods",
    description:
      "Our protocols combine research-backed strategies, new-age medications, and advanced medical devices for maximum results.",
    icon: "🔬",
  },
  {
    title: "Holistic Wellness",
    description:
      "We focus not just on weight loss but also on overall health, including nutrition, fitness, and mental well-being.",
    icon: "🌟",
  },
  {
    title: "Sustainable Results",
    description: "Our goal is lasting transformation. You don't just lose weight—you keep it off for life.",
    icon: "📈",
  },
  {
    title: "Support Every Step",
    description: "Dedicated health coaches guide, motivate, and monitor your progress to ensure you stay on track.",
    icon: "🤝",
  },
]
