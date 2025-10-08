export interface Service {
  id: string
  title: string
  description: string
  icon: string
}

export interface Testimonial {
  id: string
  name: string
  location: string
  text: string
  rating: number
}

export interface Blog {
  id: string
  title: string
  excerpt: string
  image: string
  date: string
}

export interface ContactInfo {
  address: string
  phone: string
  email: string
}
