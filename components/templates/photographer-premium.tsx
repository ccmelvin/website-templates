"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function PhotographerPremium() {
  const [activeCategory, setActiveCategory] = useState("wedding")
  const [lightboxImage, setLightboxImage] = useState(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const categories = {
    wedding: {
      name: "Wedding",
      count: 150,
      images: [
        { id: 1, title: "Golden Hour Ceremony", location: "Napa Valley", color: "from-rose-400 to-pink-600" },
        { id: 2, title: "First Dance Magic", location: "San Francisco", color: "from-purple-400 to-indigo-600" },
        { id: 3, title: "Intimate Vows", location: "Big Sur", color: "from-amber-400 to-orange-600" },
        { id: 4, title: "Reception Joy", location: "Sonoma", color: "from-emerald-400 to-teal-600" },
        { id: 5, title: "Bridal Portrait", location: "Carmel", color: "from-blue-400 to-cyan-600" },
        { id: 6, title: "Couple's Sunset", location: "Monterey", color: "from-red-400 to-rose-600" }
      ]
    },
    portrait: {
      name: "Portrait",
      count: 89,
      images: [
        { id: 7, title: "Executive Headshot", location: "Studio", color: "from-slate-400 to-gray-600" },
        { id: 8, title: "Family Moments", location: "Golden Gate Park", color: "from-green-400 to-emerald-600" },
        { id: 9, title: "Senior Portrait", location: "UC Berkeley", color: "from-violet-400 to-purple-600" },
        { id: 10, title: "Maternity Glow", location: "Crissy Field", color: "from-pink-400 to-rose-600" },
        { id: 11, title: "Artist Portrait", location: "Mission District", color: "from-orange-400 to-red-600" },
        { id: 12, title: "Lifestyle Session", location: "Sausalito", color: "from-cyan-400 to-blue-600" }
      ]
    },
    commercial: {
      name: "Commercial",
      count: 67,
      images: [
        { id: 13, title: "Product Launch", location: "Tech Company", color: "from-indigo-400 to-blue-600" },
        { id: 14, title: "Corporate Event", location: "Downtown SF", color: "from-gray-400 to-slate-600" },
        { id: 15, title: "Brand Campaign", location: "Studio", color: "from-teal-400 to-cyan-600" },
        { id: 16, title: "Architecture", location: "SOMA District", color: "from-stone-400 to-gray-600" },
        { id: 17, title: "Food Photography", location: "Restaurant", color: "from-yellow-400 to-orange-600" },
        { id: 18, title: "Fashion Shoot", location: "Union Square", color: "from-fuchsia-400 to-pink-600" }
      ]
    }
  }

  const testimonials = [
    {
      name: "Sarah & Michael",
      type: "Wedding Clients",
      rating: 5,
      text: "Alex captured our wedding day perfectly. Every emotion, every moment - it's all there in the most beautiful way.",
      image: "SM"
    },
    {
      name: "Jennifer Chen",
      type: "Corporate Client",
      rating: 5,
      text: "Professional, creative, and delivered beyond expectations. Our brand campaign photos were absolutely stunning.",
      image: "JC"
    },
    {
      name: "The Rodriguez Family",
      type: "Portrait Session",
      rating: 5,
      text: "Alex made our family session so fun and natural. The kids were comfortable and the photos are treasures.",
      image: "RF"
    }
  ]

  return (
    <div className="bg-gradient-to-br from-slate-900 via-gray-900 to-black min-h-full relative overflow-hidden">
      {/* Cinematic Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-slate-800/10 opacity-50"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-slate-800/20 via-transparent to-gray-900/20"></div>
      </div>

      {/* Sleek Header */}
      <header className="fixed top-0 w-full z-50 backdrop-blur-xl bg-black/30 border-b border-white/10">
        <div className="container mx-auto px-6 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-slate-400 to-gray-600 rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">📸</span>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">Alex Morgan</div>
                <div className="text-sm text-slate-300 font-medium">Visual Storyteller</div>
              </div>
            </div>
            
            <div className="hidden md:flex space-x-8">
              {["Portfolio", "About", "Services", "Contact"].map((item) => (
                <a 
                  key={item}
                  href="#" 
                  className="text-white/90 hover:text-white font-medium transition-all duration-300 relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-slate-400 to-gray-400 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>

            <Button className="bg-gradient-to-r from-slate-600 to-gray-600 hover:from-slate-700 hover:to-gray-700 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              Book Session
            </Button>
          </nav>
        </div>
      </header>

      {/* Cinematic Hero */}
      <section className="pt-32 pb-20 px-6 relative">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="text-white">
              <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-white/20">
                <div className="w-3 h-3 bg-green-400 rounded-full mr-3 animate-pulse"></div>
                <span className="text-sm font-semibold">Available for Bookings</span>
              </div>
              
              <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
                Capturing
                <span className="block bg-gradient-to-r from-slate-300 to-gray-300 bg-clip-text text-transparent">
                  Life's Poetry
                </span>
              </h1>
              
              <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-lg">
                Award-winning photographer specializing in weddings, portraits, and commercial work. Every frame tells a story, every moment becomes timeless.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100 px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                  View Portfolio
                  <span className="ml-2">📷</span>
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 text-lg font-semibold transition-all duration-300">
                  Book Consultation
                  <span className="ml-2">💬</span>
                </Button>
              </div>

              {/* Photography Stats */}
              <div className="grid grid-cols-3 gap-6 bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-1">500+</div>
                  <div className="text-white/70 text-sm font-medium">Weddings Shot</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-1">15</div>
                  <div className="text-white/70 text-sm font-medium">Awards Won</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-1">8</div>
                  <div className="text-white/70 text-sm font-medium">Years Experience</div>
                </div>
              </div>
            </div>

            {/* Interactive Camera Display */}
            <div className="relative">
              <div className="bg-black/60 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl">
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold text-white mb-2">Latest Work</h3>
                  <p className="text-white/80">Featured in Vogue & Harper's Bazaar</p>
                </div>
                
                <div className="relative mb-8 group">
                  <div className="w-full h-64 bg-gradient-to-br from-slate-600 to-gray-800 rounded-2xl overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-6xl text-white/30 group-hover:text-white/50 transition-colors duration-300">📸</div>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h4 className="text-white font-bold text-lg mb-1">Golden Hour Wedding</h4>
                      <p className="text-white/80 text-sm">Napa Valley • 2024</p>
                    </div>
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-white/20 text-white border-white/30">Featured</Badge>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-white/10 rounded-lg p-4 border border-white/20">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-white font-semibold">Camera Settings</span>
                      <span className="text-white/70 text-sm">Canon R5</span>
                    </div>
                    <div className="grid grid-cols-3 gap-4 text-sm">
                      <div className="text-center">
                        <div className="text-white font-bold">f/2.8</div>
                        <div className="text-white/60">Aperture</div>
                      </div>
                      <div className="text-center">
                        <div className="text-white font-bold">1/250s</div>
                        <div className="text-white/60">Shutter</div>
                      </div>
                      <div className="text-center">
                        <div className="text-white font-bold">ISO 400</div>
                        <div className="text-white/60">Sensitivity</div>
                      </div>
                    </div>
                  </div>
                  
                  <Button className="w-full bg-gradient-to-r from-slate-600 to-gray-600 hover:from-slate-700 hover:to-gray-700 text-white py-3 font-semibold">
                    View Full Gallery
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Portfolio Grid */}
      <section className="py-20 px-6 bg-black/50 backdrop-blur-sm">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-6">Portfolio</h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              A curated collection of moments transformed into timeless art
            </p>
          </div>
          
          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {Object.entries(categories).map(([key, category]) => (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeCategory === key
                    ? 'bg-gradient-to-r from-slate-500 to-gray-500 text-white shadow-lg'
                    : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white border border-white/20'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>

          {/* Portfolio Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {categories[activeCategory].images.map((image, index) => (
              <div
                key={image.id}
                className="group relative overflow-hidden rounded-2xl cursor-pointer transform hover:scale-105 transition-all duration-500"
                onClick={() => setLightboxImage(image)}
              >
                <div className={`aspect-square bg-gradient-to-br ${image.color} relative`}>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-6xl text-white/30 group-hover:text-white/60 transition-colors duration-300">📸</div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translateY-full group-hover:translateY-0 transition-transform duration-300">
                    <h3 className="text-white font-bold text-lg mb-1">{image.title}</h3>
                    <p className="text-white/80 text-sm">{image.location}</p>
                  </div>
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <span className="text-white text-lg">🔍</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Photography Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional photography services tailored to capture your most important moments
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                service: "Wedding Photography",
                price: "Starting at $3,500",
                duration: "Full Day Coverage",
                description: "Complete wedding day documentation with artistic storytelling and timeless elegance.",
                features: [
                  "8-10 hours coverage",
                  "500+ edited photos",
                  "Online gallery",
                  "Print release included",
                  "Engagement session",
                  "Second photographer"
                ],
                popular: true,
                icon: "💍",
                color: "from-rose-500 to-pink-500"
              },
              {
                service: "Portrait Sessions",
                price: "Starting at $450",
                duration: "2 Hour Session",
                description: "Professional portraits that capture personality and create lasting memories.",
                features: [
                  "2 hour session",
                  "50+ edited photos",
                  "Multiple outfit changes",
                  "Location scouting",
                  "Print consultation",
                  "Family group options"
                ],
                popular: false,
                icon: "👤",
                color: "from-blue-500 to-cyan-500"
              },
              {
                service: "Commercial Work",
                price: "Starting at $200/hr",
                duration: "Project Based",
                description: "Professional commercial photography for brands, products, and corporate needs.",
                features: [
                  "Flexible scheduling",
                  "High-res delivery",
                  "Usage rights included",
                  "Brand consultation",
                  "Quick turnaround",
                  "Retouching included"
                ],
                popular: false,
                icon: "🏢",
                color: "from-gray-500 to-slate-500"
              }
            ].map((service, index) => (
              <Card key={index} className={`relative overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 ${service.popular ? 'ring-4 ring-rose-500 scale-105' : ''}`}>
                {service.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-rose-500 to-pink-500 text-white px-6 py-2 text-sm font-bold">
                      MOST POPULAR
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center pb-4 bg-gradient-to-br from-gray-50 to-gray-100">
                  <div className="text-6xl mb-4">{service.icon}</div>
                  <CardTitle className="text-2xl font-bold mb-2">{service.service}</CardTitle>
                  <p className="text-gray-600 font-medium mb-4">{service.duration}</p>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-gray-900">{service.price}</span>
                  </div>
                  <p className="text-gray-700">{service.description}</p>
                </CardHeader>
                
                <CardContent className="space-y-6 p-8">
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
                          <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-gray-700 leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button className={`w-full py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                    service.popular 
                      ? `bg-gradient-to-r ${service.color} text-white shadow-lg hover:shadow-xl` 
                      : 'bg-gray-900 text-white hover:bg-gray-800'
                  }`}>
                    {service.popular ? 'Book Now' : 'Learn More'}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-20 px-6 bg-gradient-to-r from-slate-900 to-gray-900">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-6">Client Love</h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              What clients say about their photography experience
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-lg border border-white/20 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-slate-400 to-gray-400 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                      {testimonial.image}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white">{testimonial.name}</h4>
                      <p className="text-white/70 text-sm">{testimonial.type}</p>
                    </div>
                  </div>
                  
                  <div className="flex mb-4 text-yellow-400">
                    {"★".repeat(testimonial.rating)}
                  </div>
                  
                  <p className="text-white/90 leading-relaxed italic">"{testimonial.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full">
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 text-2xl"
            >
              ✕
            </button>
            <div className={`aspect-video bg-gradient-to-br ${lightboxImage.color} rounded-2xl relative overflow-hidden`}>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-8xl text-white/30">📸</div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
                <h3 className="text-white text-3xl font-bold mb-2">{lightboxImage.title}</h3>
                <p className="text-white/80 text-lg">{lightboxImage.location}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
