export interface Testimonial {
  id: number
  name: string
  position: string
  content: string
  avatar: string
  email?: string
  company?: string
}

const FALLBACK_TESTIMONIALS = [
  {
    id: 1,
    name: "Albert Einstein",
    position: "Product Quality Engineer",
    content: "Imagination is more important than knowledge. This service exceeded my imagination!",
    avatar: "/images/avatar-01",
  },
  {
    id: 2,
    name: "Maya Angelou",
    position: "Marketing Director",
    content: "I've learned that people will forget what you said, but they'll never forget how you made them feel.",
    avatar: "/images/avatar-02",
  },
  {
    id: 3,
    name: "Steve Jobs",
    position: "UX Designer",
    content: "Innovation distinguishes between a leader and a follower. This company truly leads.",
    avatar: "/images/avatar-03",
  },
  {
    id: 4,
    name: "Oprah Winfrey",
    position: "Business Analyst",
    content: "The biggest adventure you can take is to live the life of your dreams.",
    avatar: "/images/avatar-04",
  },
]

const API_URL = "https://dummyjson.com/users"

export async function fetchTestimonials(): Promise<Testimonial[]> {
  try {
    console.log("🌐 Fetching users from DummyJSON API")

    const response = await fetch(API_URL, {
      next: { revalidate: 300 },
      headers: {
        Accept: "application/json",
        "User-Agent": "TestimonialApp/1.0",
      },
      cache: "force-cache",
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json()
    return transformUsersToTestimonials(data.users)
  } catch (error) {
    console.error("❌ Error fetching testimonials:", error)
    return FALLBACK_TESTIMONIALS
  }
}

function transformUsersToTestimonials(users: User[]): Testimonial[] {
  const testimonialMessages = [
    "Absolutely breathtaking! The craftsmanship of my diamond ring exceeded all expectations.",
    "From the moment I stepped into Jewelery, I felt like royalty. Outstanding service!",
    "Every detail, from the sparkle of the diamonds to the elegant packaging, was perfect.",
    "Exceptional quality and outstanding service. They don't just sell jewelry, they create memories.",
    "The attention to detail and customer service exceeded all my expectations completely.",
    "Perfect engagement ring that made the proposal absolutely magical and unforgettable.",
    "I've never experienced such personalized service. The team went above and beyond!",
    "The quality is unmatched. My necklace gets compliments everywhere I go.",
    "Professional, reliable, and absolutely stunning results. Highly recommend!",
    "They turned my vision into reality. The custom design process was seamless.",
    "Outstanding craftsmanship and attention to detail. Worth every penny!",
    "The customer service team was incredibly helpful throughout the entire process.",
    "Beautiful jewelry with exceptional quality. I'll definitely be back for more!",
    "They made my special day even more memorable with their exquisite designs.",
    "Professional service from start to finish. The final product was flawless.",
  ]

  const jobTitles = [
    "Product Quality Engineer",
    "Marketing Director",
    "Software Engineer",
    "UX Designer",
    "Project Manager",
    "Business Analyst",
    "Customer Success Manager",
    "Sales Director",
    "Operations Manager",
    "Creative Director",
    "Data Scientist",
    "HR Manager",
    "Financial Advisor",
    "Graphic Designer",
    "Content Strategist",
  ]

  return users.slice(0, 10).map((user: User, index: number) => {
    const fullName = `${user.firstName} ${user.lastName}`

    return {
      id: user.id,
      name: fullName,
      position: jobTitles[index] || "Valued Customer",
      content: testimonialMessages[index] || "Amazing experience with exceptional service!",
      avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${user.username}`,
      email: user.email,
      company: user.company?.name || "Customer Company",
    }
  })
}

/* -------------------------------------------------------------------------- */
/*                                    Utils                                   */
/* -------------------------------------------------------------------------- */

export async function getTestimonialById(id: number): Promise<Testimonial | null> {
  const testimonials = await fetchTestimonials()
  return testimonials.find((testimonial) => testimonial.id === id) || null
}

export async function getRandomTestimonials(count = 3): Promise<Testimonial[]> {
  const testimonials = await fetchTestimonials()
  const shuffled = testimonials.sort(() => 0.5 - Math.random())
  return shuffled.slice(0, count)
}

/* -------------------------------------------------------------------------- */
/*                                  API Types                                 */
/* -------------------------------------------------------------------------- */
export interface User {
  id: number
  firstName: string
  lastName: string
  maidenName: string
  age: number
  gender: string
  email: string
  phone: string
  username: string
  password: string
  birthDate: string
  image: string
  bloodGroup: string
  height: number
  weight: number
  eyeColor: string
  hair: Hair
  ip: string
  address: Address
  macAddress: string
  university: string
  bank: Bank
  company: Company
  ein: string
  ssn: string
  userAgent: string
  crypto: Crypto
  role: string
}

export interface Hair {
  color: string
  type: string
}

export interface Address {
  address: string
  city: string
  state: string
  stateCode: string
  postalCode: string
  coordinates: Coordinates
  country: string
}

export interface Coordinates {
  lat: number
  lng: number
}

export interface Bank {
  cardExpire: string
  cardNumber: string
  cardType: string
  currency: string
  iban: string
}

export interface Company {
  department: string
  name: string
  title: string
  address: Address2
}

export interface Address2 {
  address: string
  city: string
  state: string
  stateCode: string
  postalCode: string
  coordinates: Coordinates2
  country: string
}

export interface Coordinates2 {
  lat: number
  lng: number
}

export interface Crypto {
  coin: string
  wallet: string
  network: string
}
