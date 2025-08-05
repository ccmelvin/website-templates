"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const templates = [
  { id: "life-coach", name: "Life Coach", description: "Empowering transformation and personal growth" },
  { id: "personal-trainer", name: "Personal Trainer", description: "Fitness coaching and wellness programs" },
  { id: "author", name: "Author", description: "Bestselling books and literary works" },
  { id: "photographer", name: "Photographer", description: "Capturing moments and visual storytelling" },
  { id: "architect", name: "Architect", description: "Innovative design and sustainable architecture" },
  { id: "chef", name: "Chef", description: "Culinary excellence and gastronomic experiences" },
  { id: "therapist", name: "Therapist", description: "Mental health and wellness support" },
  { id: "consultant", name: "Business Consultant", description: "Strategic guidance and business growth" },
  { id: "designer", name: "Interior Designer", description: "Beautiful spaces and home transformation" },
  { id: "musician", name: "Musician", description: "Original compositions and live performances" },
]

export default function TemplateSelector() {
  const [selectedTemplate, setSelectedTemplate] = useState("life-coach")

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Professional Website Templates</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Choose from 10 beautifully designed templates for different professions. Each template features modern UI/UX
            with responsive design.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mb-8">
          {templates.map((template) => (
            <Card
              key={template.id}
              className={`cursor-pointer transition-all duration-200 hover:shadow-lg ${
                selectedTemplate === template.id ? "ring-2 ring-blue-500 shadow-lg" : "hover:shadow-md"
              }`}
              onClick={() => setSelectedTemplate(template.id)}
            >
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">{template.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm">{template.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mb-8">
          <Badge variant="secondary" className="text-lg px-4 py-2">
            Currently Viewing: {templates.find((t) => t.id === selectedTemplate)?.name}
          </Badge>
        </div>

        <div className="bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="h-[600px] overflow-y-auto">
            {selectedTemplate === "life-coach" && <LifeCoachTemplate />}
            {selectedTemplate === "personal-trainer" && <PersonalTrainerTemplate />}
            {selectedTemplate === "author" && <AuthorTemplate />}
            {selectedTemplate === "photographer" && <PhotographerTemplate />}
            {selectedTemplate === "architect" && <ArchitectTemplate />}
            {selectedTemplate === "chef" && <ChefTemplate />}
            {selectedTemplate === "therapist" && <TherapistTemplate />}
            {selectedTemplate === "consultant" && <ConsultantTemplate />}
            {selectedTemplate === "designer" && <DesignerTemplate />}
            {selectedTemplate === "musician" && <MusicianTemplate />}
          </div>
        </div>
      </div>
    </div>
  )
}

// Life Coach Template
function LifeCoachTemplate() {
  return (
    <div className="bg-gradient-to-br from-purple-50 to-pink-50 min-h-full">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <nav className="flex items-center justify-between">
            <div className="text-2xl font-bold text-purple-600">Sarah Chen</div>
            <div className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-700 hover:text-purple-600">
                About
              </a>
              <a href="#" className="text-gray-700 hover:text-purple-600">
                Services
              </a>
              <a href="#" className="text-gray-700 hover:text-purple-600">
                Testimonials
              </a>
              <a href="#" className="text-gray-700 hover:text-purple-600">
                Contact
              </a>
            </div>
            <Button className="bg-purple-600 hover:bg-purple-700">Book Session</Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Transform Your Life with Purpose</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Unlock your potential and create the life you've always dreamed of. Together, we'll build a roadmap to your
            success and happiness.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
              Start Your Journey
            </Button>
            <Button size="lg" variant="outline">
              Free Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Coaching Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "1-on-1 Coaching",
                description: "Personalized sessions tailored to your unique goals and challenges.",
                price: "$150/session",
              },
              {
                title: "Group Programs",
                description: "Join like-minded individuals on a transformative journey together.",
                price: "$75/session",
              },
              {
                title: "Online Courses",
                description: "Self-paced learning modules for continuous personal development.",
                price: "$297/course",
              },
            ].map((service, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-purple-600">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <p className="text-2xl font-bold text-purple-600">{service.price}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

// Personal Trainer Template
function PersonalTrainerTemplate() {
  return (
    <div className="bg-gradient-to-br from-orange-50 to-red-50 min-h-full">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <nav className="flex items-center justify-between">
            <div className="text-2xl font-bold text-orange-600">FitMax Training</div>
            <div className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-700 hover:text-orange-600">
                Programs
              </a>
              <a href="#" className="text-gray-700 hover:text-orange-600">
                Nutrition
              </a>
              <a href="#" className="text-gray-700 hover:text-orange-600">
                Success Stories
              </a>
              <a href="#" className="text-gray-700 hover:text-orange-600">
                Contact
              </a>
            </div>
            <Button className="bg-orange-600 hover:bg-orange-700">Free Trial</Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">Achieve Your Fitness Goals</h1>
              <p className="text-xl text-gray-600 mb-8">
                Transform your body and mind with personalized training programs designed to fit your lifestyle and
                exceed your expectations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-orange-600 hover:bg-orange-700">
                  Start Training
                </Button>
                <Button size="lg" variant="outline">
                  View Programs
                </Button>
              </div>
            </div>
            <div className="bg-orange-200 rounded-lg h-96 flex items-center justify-center">
              <span className="text-orange-600 text-lg">Fitness Hero Image</span>
            </div>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Training Programs</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Strength Training", duration: "12 weeks", sessions: "3x/week" },
              { name: "Weight Loss", duration: "16 weeks", sessions: "4x/week" },
              { name: "Athletic Performance", duration: "8 weeks", sessions: "5x/week" },
              { name: "Functional Fitness", duration: "10 weeks", sessions: "3x/week" },
            ].map((program, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-orange-600">{program.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Duration: {program.duration}</p>
                  <p className="text-gray-600">Sessions: {program.sessions}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

// Author Template
function AuthorTemplate() {
  return (
    <div className="bg-gradient-to-br from-amber-50 to-yellow-50 min-h-full">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <nav className="flex items-center justify-between">
            <div className="text-2xl font-bold text-amber-700">Emma Rodriguez</div>
            <div className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-700 hover:text-amber-700">
                Books
              </a>
              <a href="#" className="text-gray-700 hover:text-amber-700">
                About
              </a>
              <a href="#" className="text-gray-700 hover:text-amber-700">
                Blog
              </a>
              <a href="#" className="text-gray-700 hover:text-amber-700">
                Events
              </a>
            </div>
            <Button className="bg-amber-700 hover:bg-amber-800">Newsletter</Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Stories That Touch Hearts</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Bestselling author of contemporary fiction that explores the depths of human emotion and the power of
            resilience.
          </p>
          <Badge className="bg-amber-100 text-amber-800 text-lg px-4 py-2 mb-8">New York Times Bestseller</Badge>
        </div>
      </section>

      {/* Latest Books */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Latest Books</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "The Light Between Us",
                year: "2024",
                description: "A powerful story of love, loss, and finding hope in unexpected places.",
              },
              {
                title: "Whispers in the Wind",
                year: "2023",
                description: "An emotional journey through family secrets and redemption.",
              },
              {
                title: "Dancing with Shadows",
                year: "2022",
                description: "A tale of courage and self-discovery in the face of adversity.",
              },
            ].map((book, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="bg-amber-200 h-48 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-amber-700">Book Cover</span>
                  </div>
                  <CardTitle className="text-amber-700">{book.title}</CardTitle>
                  <CardDescription>{book.year}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{book.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

// Photographer Template
function PhotographerTemplate() {
  return (
    <div className="bg-gradient-to-br from-slate-50 to-gray-100 min-h-full">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <nav className="flex items-center justify-between">
            <div className="text-2xl font-bold text-slate-800">Alex Morgan</div>
            <div className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-700 hover:text-slate-800">
                Portfolio
              </a>
              <a href="#" className="text-gray-700 hover:text-slate-800">
                Services
              </a>
              <a href="#" className="text-gray-700 hover:text-slate-800">
                About
              </a>
              <a href="#" className="text-gray-700 hover:text-slate-800">
                Contact
              </a>
            </div>
            <Button className="bg-slate-800 hover:bg-slate-900">Book Session</Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Capturing Life's Beautiful Moments</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Professional photographer specializing in weddings, portraits, and lifestyle photography with a focus on
            authentic storytelling.
          </p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Recent Work</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }, (_, index) => (
              <div
                key={index}
                className="bg-slate-200 aspect-square rounded-lg hover:shadow-lg transition-shadow flex items-center justify-center"
              >
                <span className="text-slate-600">Photo {index + 1}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 px-6 bg-slate-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Photography Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                service: "Wedding Photography",
                price: "Starting at $2,500",
                description: "Complete wedding day coverage with edited gallery",
              },
              {
                service: "Portrait Sessions",
                price: "Starting at $350",
                description: "Individual, couple, and family portrait sessions",
              },
              {
                service: "Event Photography",
                price: "Starting at $150/hr",
                description: "Corporate events, parties, and special occasions",
              },
            ].map((item, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-slate-800">{item.service}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-slate-800 mb-2">{item.price}</p>
                  <p className="text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

// Architect Template
function ArchitectTemplate() {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-cyan-50 min-h-full">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <nav className="flex items-center justify-between">
            <div className="text-2xl font-bold text-blue-700">Studio Arch</div>
            <div className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-700 hover:text-blue-700">
                Projects
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-700">
                Services
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-700">
                About
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-700">
                Contact
              </a>
            </div>
            <Button className="bg-blue-700 hover:bg-blue-800">Consultation</Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">Designing Tomorrow's Spaces</h1>
              <p className="text-xl text-gray-600 mb-8">
                Award-winning architectural firm creating sustainable, innovative designs that harmonize with their
                environment and enhance human experience.
              </p>
              <Button size="lg" className="bg-blue-700 hover:bg-blue-800">
                View Projects
              </Button>
            </div>
            <div className="bg-blue-200 rounded-lg h-96 flex items-center justify-center">
              <span className="text-blue-700 text-lg">Architecture Showcase</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { name: "Eco-Residential Complex", type: "Residential", year: "2024" },
              { name: "Modern Office Tower", type: "Commercial", year: "2023" },
              { name: "Cultural Arts Center", type: "Public", year: "2023" },
              { name: "Sustainable Housing", type: "Residential", year: "2022" },
            ].map((project, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="bg-blue-200 h-48 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-blue-700">Project Image</span>
                  </div>
                  <CardTitle className="text-blue-700">{project.name}</CardTitle>
                  <CardDescription>
                    {project.type} • {project.year}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

// Chef Template
function ChefTemplate() {
  return (
    <div className="bg-gradient-to-br from-green-50 to-emerald-50 min-h-full">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <nav className="flex items-center justify-between">
            <div className="text-2xl font-bold text-green-700">Chef Marco</div>
            <div className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-700 hover:text-green-700">
                Menu
              </a>
              <a href="#" className="text-gray-700 hover:text-green-700">
                Catering
              </a>
              <a href="#" className="text-gray-700 hover:text-green-700">
                Classes
              </a>
              <a href="#" className="text-gray-700 hover:text-green-700">
                About
              </a>
            </div>
            <Button className="bg-green-700 hover:bg-green-800">Book Table</Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Culinary Excellence Redefined</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Experience the art of fine dining with locally sourced ingredients and innovative techniques that celebrate
            the essence of flavor.
          </p>
          <Badge className="bg-green-100 text-green-800 text-lg px-4 py-2 mb-8">Michelin Star Chef</Badge>
        </div>
      </section>

      {/* Signature Dishes */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Signature Dishes</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                dish: "Truffle Risotto",
                description: "Creamy arborio rice with black truffle and parmesan",
                price: "$45",
              },
              {
                dish: "Seared Duck Breast",
                description: "Pan-seared duck with cherry gastrique and roasted vegetables",
                price: "$52",
              },
              {
                dish: "Chocolate Soufflé",
                description: "Warm chocolate soufflé with vanilla bean ice cream",
                price: "$18",
              },
            ].map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="bg-green-200 h-48 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-green-700">Dish Photo</span>
                  </div>
                  <CardTitle className="text-green-700">{item.dish}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-2">{item.description}</p>
                  <p className="text-2xl font-bold text-green-700">{item.price}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

// Therapist Template
function TherapistTemplate() {
  return (
    <div className="bg-gradient-to-br from-teal-50 to-cyan-50 min-h-full">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <nav className="flex items-center justify-between">
            <div className="text-2xl font-bold text-teal-700">Dr. Lisa Park</div>
            <div className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-700 hover:text-teal-700">
                Services
              </a>
              <a href="#" className="text-gray-700 hover:text-teal-700">
                About
              </a>
              <a href="#" className="text-gray-700 hover:text-teal-700">
                Resources
              </a>
              <a href="#" className="text-gray-700 hover:text-teal-700">
                Contact
              </a>
            </div>
            <Button className="bg-teal-700 hover:bg-teal-800">Schedule</Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Your Mental Health Matters</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Compassionate therapy services to help you navigate life's challenges and build resilience for a healthier,
            happier future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-teal-700 hover:bg-teal-800">
              Book Consultation
            </Button>
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Therapy Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { service: "Individual Therapy", description: "One-on-one sessions for personal growth and healing" },
              {
                service: "Couples Therapy",
                description: "Relationship counseling to strengthen bonds and communication",
              },
              { service: "Family Therapy", description: "Family dynamics and conflict resolution support" },
              { service: "Group Therapy", description: "Supportive group sessions for shared experiences" },
              { service: "Anxiety Treatment", description: "Specialized approaches for anxiety and panic disorders" },
              {
                service: "Depression Support",
                description: "Evidence-based treatment for depression and mood disorders",
              },
            ].map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-teal-700">{item.service}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

// Business Consultant Template
function ConsultantTemplate() {
  return (
    <div className="bg-gradient-to-br from-indigo-50 to-purple-50 min-h-full">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <nav className="flex items-center justify-between">
            <div className="text-2xl font-bold text-indigo-700">Strategic Solutions</div>
            <div className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-700 hover:text-indigo-700">
                Services
              </a>
              <a href="#" className="text-gray-700 hover:text-indigo-700">
                Case Studies
              </a>
              <a href="#" className="text-gray-700 hover:text-indigo-700">
                About
              </a>
              <a href="#" className="text-gray-700 hover:text-indigo-700">
                Contact
              </a>
            </div>
            <Button className="bg-indigo-700 hover:bg-indigo-800">Free Audit</Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Accelerate Your Business Growth</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Strategic consulting services that transform challenges into opportunities and drive sustainable business
            success.
          </p>
          <Badge className="bg-indigo-100 text-indigo-800 text-lg px-4 py-2 mb-8">20+ Years Experience</Badge>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Consulting Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { service: "Strategy Development", icon: "📊" },
              { service: "Operations Optimization", icon: "⚙️" },
              { service: "Digital Transformation", icon: "💻" },
              { service: "Change Management", icon: "🔄" },
            ].map((item, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <CardTitle className="text-indigo-700">{item.service}</CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-16 px-6 bg-indigo-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Proven Results</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-indigo-700 mb-2">150+</div>
              <p className="text-gray-600">Companies Transformed</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-indigo-700 mb-2">$50M+</div>
              <p className="text-gray-600">Revenue Generated</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-indigo-700 mb-2">95%</div>
              <p className="text-gray-600">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

// Interior Designer Template
function DesignerTemplate() {
  return (
    <div className="bg-gradient-to-br from-rose-50 to-pink-50 min-h-full">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <nav className="flex items-center justify-between">
            <div className="text-2xl font-bold text-rose-700">Bella Interiors</div>
            <div className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-700 hover:text-rose-700">
                Portfolio
              </a>
              <a href="#" className="text-gray-700 hover:text-rose-700">
                Services
              </a>
              <a href="#" className="text-gray-700 hover:text-rose-700">
                Process
              </a>
              <a href="#" className="text-gray-700 hover:text-rose-700">
                Contact
              </a>
            </div>
            <Button className="bg-rose-700 hover:bg-rose-800">Consultation</Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Transform Your Space</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Creating beautiful, functional interiors that reflect your personality and enhance your daily living
            experience.
          </p>
        </div>
      </section>

      {/* Portfolio */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Recent Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { project: "Modern Living Room", style: "Contemporary" },
              { project: "Luxury Bedroom", style: "Minimalist" },
              { project: "Kitchen Renovation", style: "Scandinavian" },
              { project: "Home Office", style: "Industrial" },
              { project: "Dining Room", style: "Traditional" },
              { project: "Bathroom Design", style: "Spa-like" },
            ].map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="bg-rose-200 h-48 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-rose-700">Interior Photo</span>
                  </div>
                  <CardTitle className="text-rose-700">{item.project}</CardTitle>
                  <CardDescription>{item.style}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

// Musician Template
function MusicianTemplate() {
  return (
    <div className="bg-gradient-to-br from-violet-50 to-purple-50 min-h-full">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <nav className="flex items-center justify-between">
            <div className="text-2xl font-bold text-violet-700">Jordan Rivers</div>
            <div className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-700 hover:text-violet-700">
                Music
              </a>
              <a href="#" className="text-gray-700 hover:text-violet-700">
                Tours
              </a>
              <a href="#" className="text-gray-700 hover:text-violet-700">
                About
              </a>
              <a href="#" className="text-gray-700 hover:text-violet-700">
                Contact
              </a>
            </div>
            <Button className="bg-violet-700 hover:bg-violet-800">Listen Now</Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Music That Moves Souls</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Original compositions blending classical training with contemporary sounds, creating emotional journeys
            through melody and rhythm.
          </p>
          <Badge className="bg-violet-100 text-violet-800 text-lg px-4 py-2 mb-8">Grammy Nominated Artist</Badge>
        </div>
      </section>

      {/* Latest Releases */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Latest Releases</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { album: "Midnight Reflections", year: "2024", genre: "Alternative Rock" },
              { album: "Urban Symphony", year: "2023", genre: "Electronic Pop" },
              { album: "Acoustic Sessions", year: "2023", genre: "Folk" },
            ].map((release, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="bg-violet-200 h-48 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-violet-700">Album Cover</span>
                  </div>
                  <CardTitle className="text-violet-700">{release.album}</CardTitle>
                  <CardDescription>
                    {release.year} • {release.genre}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Shows */}
      <section className="py-16 px-6 bg-violet-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Upcoming Shows</h2>
          <div className="space-y-4 max-w-2xl mx-auto">
            {[
              { date: "Mar 15", venue: "Blue Note Jazz Club", city: "New York, NY" },
              { date: "Mar 22", venue: "The Fillmore", city: "San Francisco, CA" },
              { date: "Apr 5", venue: "House of Blues", city: "Chicago, IL" },
            ].map((show, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="flex items-center justify-between p-6">
                  <div>
                    <div className="font-bold text-violet-700">{show.date}</div>
                    <div className="text-gray-900">{show.venue}</div>
                    <div className="text-gray-600">{show.city}</div>
                  </div>
                  <Button variant="outline" className="border-violet-700 text-violet-700 bg-transparent">
                    Tickets
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
