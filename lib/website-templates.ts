// Website template data structure
export interface WebsiteTemplate {
  id: string
  name: string
  description: string
  category: WebsiteCategory
  style: WebsiteStyle
  color: string
  features: string[]
  pages: string[]
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced'
  rating: number
  downloads: number
  price: number
  tags: string[]
  responsive: boolean
  mobileOptimized: boolean
  animations: boolean
  seoOptimized: boolean
  customFonts: boolean
  socialMediaReady: boolean
  blogReady: boolean
  ecommerceReady: boolean
  designer: string
  previewImages: string[]
  demoUrl: string
  isNew: boolean
  isBestseller: boolean
  isPremium: boolean
}

export type WebsiteCategory = 
  | 'Wedding & Events'
  | 'Photography'
  | 'Creative & Design'
  | 'Beauty & Wellness'
  | 'Fashion & Lifestyle'
  | 'Business & Corporate'
  | 'Food & Restaurant'
  | 'Travel & Adventure'
  | 'Education & Coaching'
  | 'Real Estate'
  | 'Interior Design'

export type WebsiteStyle = 
  | 'Modern & Minimal'
  | 'Elegant & Luxurious'
  | 'Bold & Creative'
  | 'Warm & Organic'
  | 'Clean & Professional'
  | 'Artistic & Unique'
  | 'Vintage & Classic'
  | 'Playful & Fun'

export const websiteTemplates: WebsiteTemplate[] = [
  {
    id: "life-coach",
    name: "Life Coach Premium",
    description: "Professional life coaching template with elegant design and client-focused features",
    category: "Education & Coaching",
    style: "Elegant & Luxurious",
    color: "rose",
    features: ["Service Pages", "Client Testimonials", "Booking System", "About Section"],
    pages: ["Home", "About", "Services", "Testimonials", "Contact", "Blog"],
    difficulty: "Beginner",
    rating: 4.9,
    downloads: 2340,
    price: 149,
    tags: ["coaching", "life coach", "elegant", "professional"],
    responsive: true,
    mobileOptimized: true,
    animations: true,
    seoOptimized: true,
    customFonts: true,
    socialMediaReady: true,
    blogReady: true,
    ecommerceReady: false,
    designer: "Premium Design Co",
    previewImages: ["/previews/life-coach-1.jpg", "/previews/life-coach-2.jpg"],
    demoUrl: "/template/life-coach",
    isNew: false,
    isBestseller: true,
    isPremium: true
  },
  {
    id: "personal-trainer",
    name: "Personal Trainer Pro",
    description: "Dynamic fitness template with workout programs and client tracking features",
    category: "Beauty & Wellness",
    style: "Modern & Minimal",
    color: "green",
    features: ["Workout Programs", "Client Portal", "Booking System", "Progress Tracking"],
    pages: ["Home", "Programs", "About", "Services", "Contact", "Client Login"],
    difficulty: "Intermediate",
    rating: 4.8,
    downloads: 1890,
    price: 129,
    tags: ["fitness", "personal trainer", "modern", "health"],
    responsive: true,
    mobileOptimized: true,
    animations: false,
    seoOptimized: true,
    customFonts: true,
    socialMediaReady: true,
    blogReady: false,
    ecommerceReady: false,
    designer: "Fitness Design Studio",
    previewImages: ["/previews/personal-trainer-1.jpg", "/previews/personal-trainer-2.jpg"],
    demoUrl: "/template/personal-trainer",
    isNew: true,
    isBestseller: false,
    isPremium: true
  },
  {
    id: "author",
    name: "Author Portfolio",
    description: "Literary author template with book showcases and reading community features",
    category: "Creative & Design",
    style: "Warm & Organic",
    color: "pink",
    features: ["Book Showcase", "Reading Events", "Author Bio", "Newsletter Signup"],
    pages: ["Home", "Books", "About", "Events", "Blog", "Contact"],
    difficulty: "Beginner",
    rating: 4.7,
    downloads: 1560,
    price: 99,
    tags: ["author", "books", "literary", "creative"],
    responsive: true,
    mobileOptimized: true,
    animations: true,
    seoOptimized: true,
    customFonts: true,
    socialMediaReady: true,
    blogReady: true,
    ecommerceReady: true,
    designer: "Literary Design Co",
    previewImages: ["/previews/author-1.jpg", "/previews/author-2.jpg"],
    demoUrl: "/template/author",
    isNew: false,
    isBestseller: true,
    isPremium: false
  },
  {
    id: "photographer",
    name: "Photographer Studio",
    description: "Professional photography portfolio with stunning galleries and client features",
    category: "Photography",
    style: "Bold & Creative",
    color: "slate",
    features: ["Portfolio Gallery", "Client Galleries", "Booking System", "Pricing Pages"],
    pages: ["Home", "Portfolio", "About", "Services", "Pricing", "Contact"],
    difficulty: "Advanced",
    rating: 4.9,
    downloads: 980,
    price: 199,
    tags: ["photography", "portfolio", "professional", "gallery"],
    responsive: true,
    mobileOptimized: true,
    animations: true,
    seoOptimized: true,
    customFonts: true,
    socialMediaReady: true,
    blogReady: true,
    ecommerceReady: true,
    designer: "Photo Studio Design",
    previewImages: ["/previews/photographer-1.jpg", "/previews/photographer-2.jpg"],
    demoUrl: "/template/photographer",
    isNew: true,
    isBestseller: false,
    isPremium: true
  },
  {
    id: "architect",
    name: "Architect Portfolio",
    description: "Architectural portfolio template showcasing projects and design philosophy",
    category: "Creative & Design",
    style: "Artistic & Unique",
    color: "purple",
    features: ["Project Showcase", "Design Process", "Client Work", "Architecture Blog"],
    pages: ["Home", "Projects", "About", "Process", "Blog", "Contact"],
    difficulty: "Advanced",
    rating: 4.8,
    downloads: 1230,
    price: 179,
    tags: ["architecture", "design", "portfolio", "professional"],
    responsive: true,
    mobileOptimized: true,
    animations: true,
    seoOptimized: true,
    customFonts: true,
    socialMediaReady: true,
    blogReady: true,
    ecommerceReady: false,
    designer: "Architecture Studio",
    previewImages: ["/previews/architect-1.jpg", "/previews/architect-2.jpg"],
    demoUrl: "/template/architect",
    isNew: false,
    isBestseller: true,
    isPremium: true
  },
  {
    id: "chef",
    name: "Chef & Culinary",
    description: "Culinary professional template with recipe showcases and cooking classes",
    category: "Food & Restaurant",
    style: "Bold & Creative",
    color: "orange",
    features: ["Recipe Collection", "Cooking Classes", "Chef Story", "Booking System"],
    pages: ["Home", "Recipes", "Classes", "About", "Services", "Contact"],
    difficulty: "Intermediate",
    rating: 4.6,
    downloads: 890,
    price: 119,
    tags: ["chef", "culinary", "recipes", "cooking"],
    responsive: true,
    mobileOptimized: true,
    animations: true,
    seoOptimized: true,
    customFonts: true,
    socialMediaReady: true,
    blogReady: true,
    ecommerceReady: false,
    designer: "Culinary Design Co",
    previewImages: ["/previews/chef-1.jpg", "/previews/chef-2.jpg"],
    demoUrl: "/template/chef",
    isNew: true,
    isBestseller: false,
    isPremium: false
  },
  {
    id: "therapist",
    name: "Therapist Practice",
    description: "Professional therapy practice template with appointment booking and resources",
    category: "Beauty & Wellness",
    style: "Clean & Professional",
    color: "blue",
    features: ["Appointment Booking", "Service Pages", "Resources", "Contact Forms"],
    pages: ["Home", "Services", "About", "Resources", "Appointments", "Contact"],
    difficulty: "Intermediate",
    rating: 4.7,
    downloads: 1450,
    price: 139,
    tags: ["therapy", "mental health", "professional", "wellness"],
    responsive: true,
    mobileOptimized: true,
    animations: false,
    seoOptimized: true,
    customFonts: true,
    socialMediaReady: true,
    blogReady: true,
    ecommerceReady: false,
    designer: "Wellness Design Studio",
    previewImages: ["/previews/therapist-1.jpg", "/previews/therapist-2.jpg"],
    demoUrl: "/template/therapist",
    isNew: false,
    isBestseller: true,
    isPremium: true
  },
  {
    id: "consultant",
    name: "Business Consultant",
    description: "Professional consulting template with service packages and case studies",
    category: "Business & Corporate",
    style: "Warm & Organic",
    color: "amber",
    features: ["Service Packages", "Case Studies", "Client Portal", "Consultation Booking"],
    pages: ["Home", "Services", "Case Studies", "About", "Contact"],
    difficulty: "Beginner",
    rating: 4.5,
    downloads: 670,
    price: 89,
    tags: ["consulting", "business", "professional", "corporate"],
    responsive: true,
    mobileOptimized: true,
    animations: true,
    seoOptimized: true,
    customFonts: true,
    socialMediaReady: true,
    blogReady: true,
    ecommerceReady: true,
    designer: "Business Design Co",
    previewImages: ["/previews/consultant-1.jpg", "/previews/consultant-2.jpg"],
    demoUrl: "/template/consultant",
    isNew: false,
    isBestseller: false,
    isPremium: false
  },
  {
    id: "designer",
    name: "Interior Designer",
    description: "Interior design portfolio with project showcases and design services",
    category: "Interior Design",
    style: "Modern & Minimal",
    color: "teal",
    features: ["Project Portfolio", "Design Services", "Before/After Gallery", "Client Testimonials"],
    pages: ["Home", "Portfolio", "Services", "About", "Testimonials", "Contact"],
    difficulty: "Beginner",
    rating: 4.8,
    downloads: 1120,
    price: 109,
    tags: ["interior design", "portfolio", "modern", "professional"],
    responsive: true,
    mobileOptimized: true,
    animations: false,
    seoOptimized: true,
    customFonts: true,
    socialMediaReady: true,
    blogReady: true,
    ecommerceReady: false,
    designer: "Interior Design Studio",
    previewImages: ["/previews/designer-1.jpg", "/previews/designer-2.jpg"],
    demoUrl: "/template/designer",
    isNew: true,
    isBestseller: false,
    isPremium: false
  },
  {
    id: "musician",
    name: "Musician & Artist",
    description: "Music artist template with discography, tour dates, and fan engagement",
    category: "Creative & Design",
    style: "Vintage & Classic",
    color: "indigo",
    features: ["Music Player", "Tour Dates", "Merchandise Store", "Fan Community"],
    pages: ["Home", "Music", "Tours", "About", "Store", "Contact"],
    difficulty: "Intermediate",
    rating: 4.6,
    downloads: 780,
    price: 129,
    tags: ["music", "artist", "entertainment", "creative"],
    responsive: true,
    mobileOptimized: true,
    animations: true,
    seoOptimized: true,
    customFonts: true,
    socialMediaReady: true,
    blogReady: true,
    ecommerceReady: true,
    designer: "Music Design Studio",
    previewImages: ["/previews/musician-1.jpg", "/previews/musician-2.jpg"],
    demoUrl: "/template/musician",
    isNew: false,
    isBestseller: false,
    isPremium: false
  },
  {
    id: "luxe-interior-design",
    name: "Luxe Interiors",
    description: "Sophisticated interior design template showcasing luxury residential and commercial projects",
    category: "Interior Design",
    style: "Elegant & Luxurious",
    color: "amber",
    features: ["Project Portfolio", "Service Showcase", "Client Testimonials", "Contact Forms", "Before/After Gallery"],
    pages: ["Home", "Services", "Portfolio", "About", "Testimonials", "Contact"],
    difficulty: "Intermediate",
    rating: 4.9,
    downloads: 1250,
    price: 159,
    tags: ["interior design", "luxury", "portfolio", "residential", "commercial"],
    responsive: true,
    mobileOptimized: true,
    animations: true,
    seoOptimized: true,
    customFonts: true,
    socialMediaReady: true,
    blogReady: false,
    ecommerceReady: false,
    designer: "Luxe Design Studio",
    previewImages: ["/interior-design/interior-design-1.jpg", "/interior-design/interior-design-2.jpg", "/interior-design/interior-design-3.jpg"],
    demoUrl: "/template/luxe-interior-design",
    isNew: true,
    isBestseller: false,
    isPremium: true
  }
]

export const categories: WebsiteCategory[] = [
  'Wedding & Events',
  'Photography',
  'Creative & Design',
  'Beauty & Wellness',
  'Fashion & Lifestyle',
  'Business & Corporate',
  'Food & Restaurant',
  'Travel & Adventure',
  'Education & Coaching',
  'Real Estate',
  'Interior Design'
]

export const styles: WebsiteStyle[] = [
  'Modern & Minimal',
  'Elegant & Luxurious',
  'Bold & Creative',
  'Warm & Organic',
  'Clean & Professional',
  'Artistic & Unique',
  'Vintage & Classic',
  'Playful & Fun'
]
