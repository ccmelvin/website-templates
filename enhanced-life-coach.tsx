// Enhanced Life Coach Template with improved UI/UX
"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function EnhancedLifeCoachTemplate() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="bg-gradient-to-br from-purple-50 to-pink-50 min-h-full">
      {/* Enhanced Header with Mobile Menu */}
      <header className="bg-white/95 backdrop-blur-sm shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <nav className="flex items-center justify-between">
            <div className="text-2xl font-bold text-purple-600 tracking-tight">Sarah Chen</div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {["About", "Services", "Testimonials", "Contact"].map((item) => (
                <a 
                  key={item}
                  href="#" 
                  className="text-gray-700 hover:text-purple-600 font-medium transition-colors duration-200 relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-600 transition-all duration-200 group-hover:w-full"></span>
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                <span className={`block h-0.5 w-6 bg-gray-600 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                <span className={`block h-0.5 w-6 bg-gray-600 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block h-0.5 w-6 bg-gray-600 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
              </div>
            </button>

            <Button className="hidden md:block bg-purple-600 hover:bg-purple-700 shadow-lg hover:shadow-xl transition-all duration-300 px-6 py-2 font-semibold">
              Book Session
            </Button>
          </nav>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
              <div className="flex flex-col space-y-4 pt-4">
                {["About", "Services", "Testimonials", "Contact"].map((item) => (
                  <a key={item} href="#" className="text-gray-700 hover:text-purple-600 font-medium">
                    {item}
                  </a>
                ))}
                <Button className="bg-purple-600 hover:bg-purple-700 w-full">Book Session</Button>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Enhanced Hero Section */}
      <section className="py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        
        <div className="container mx-auto text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <Badge className="bg-purple-100 text-purple-800 px-4 py-2 mb-6 text-sm font-semibold">
              ✨ Certified Life Coach & Wellness Expert
            </Badge>
            
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Transform Your Life with <span className="text-purple-600 relative">
                Purpose
                <svg className="absolute -bottom-2 left-0 w-full h-3" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0,8 Q50,0 100,8" stroke="currentColor" strokeWidth="2" fill="none" className="text-purple-300"/>
                </svg>
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Unlock your potential and create the life you've always dreamed of. Together, we'll build a roadmap to your success and happiness.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700 px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                Start Your Journey
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-purple-600 text-purple-600 hover:bg-purple-50 px-8 py-4 text-lg font-semibold transition-all duration-300">
                Free Consultation
              </Button>
            </div>

            {/* Social Proof */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1,2,3,4,5].map((i) => (
                    <div key={i} className="w-8 h-8 bg-purple-200 rounded-full border-2 border-white"></div>
                  ))}
                </div>
                <span>500+ Lives Transformed</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex text-yellow-400">
                  {"★".repeat(5)}
                </div>
                <span>4.9/5 Client Rating</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Services Section */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Coaching Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Personalized coaching programs designed to help you achieve your goals and live your best life.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "1-on-1 Coaching",
                description: "Personalized sessions tailored to your unique goals and challenges with dedicated support.",
                price: "$150",
                duration: "60 min session",
                features: ["Personal action plan", "Weekly check-ins", "Email support", "Resource library access"],
                popular: false
              },
              {
                title: "Group Programs",
                description: "Join like-minded individuals on a transformative journey together in a supportive environment.",
                price: "$75",
                duration: "90 min session",
                features: ["Group dynamics", "Peer support", "Monthly workshops", "Community access"],
                popular: true
              },
              {
                title: "Online Courses",
                description: "Self-paced learning modules for continuous personal development at your own speed.",
                price: "$297",
                duration: "Lifetime access",
                features: ["12 video modules", "Workbooks & exercises", "Private community", "Certificate completion"],
                popular: false
              },
            ].map((service, index) => (
              <Card key={index} className={`relative text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${service.popular ? 'ring-2 ring-purple-500 scale-105' : ''}`}>
                {service.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-purple-600 text-white px-4 py-1">
                    Most Popular
                  </Badge>
                )}
                
                <CardHeader className="pb-4">
                  <CardTitle className="text-2xl text-purple-600 mb-2">{service.title}</CardTitle>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-gray-900">{service.price}</span>
                    <span className="text-gray-600">/{service.duration}</span>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                  
                  <ul className="space-y-3 text-left">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <div className="w-5 h-5 bg-purple-100 rounded-full flex items-center justify-center">
                          <svg className="w-3 h-3 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button className={`w-full py-3 font-semibold transition-all duration-300 ${
                    service.popular 
                      ? 'bg-purple-600 hover:bg-purple-700 text-white shadow-lg hover:shadow-xl' 
                      : 'bg-purple-50 text-purple-600 hover:bg-purple-100 border border-purple-200'
                  }`}>
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-purple-50 to-pink-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Client Success Stories</h2>
            <p className="text-xl text-gray-600">Real transformations from real people</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Maria Rodriguez",
                role: "Marketing Executive",
                image: "MR",
                testimonial: "Sarah helped me break through limiting beliefs and achieve the promotion I'd been working toward for years. Her guidance was transformational.",
                rating: 5
              },
              {
                name: "David Chen",
                role: "Entrepreneur",
                image: "DC",
                testimonial: "The clarity I gained from our sessions helped me launch my dream business. Sarah's coaching style is both challenging and supportive.",
                rating: 5
              },
              {
                name: "Jennifer Smith",
                role: "Teacher",
                image: "JS",
                testimonial: "I finally found work-life balance and rediscovered my passion for teaching. Sarah's approach is practical and deeply insightful.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <Card key={index} className="bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                      {testimonial.image}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                      <p className="text-gray-600 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                  
                  <div className="flex mb-4 text-yellow-400">
                    {"★".repeat(testimonial.rating)}
                  </div>
                  
                  <p className="text-gray-700 leading-relaxed italic">"{testimonial.testimonial}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Contact Section */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Ready to Start Your Transformation?</h2>
            <p className="text-xl text-gray-600">Book your free consultation today and take the first step toward your best life.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                    <span className="text-purple-600">📧</span>
                  </div>
                  <span className="text-gray-700">sarah@lifecoaching.com</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                    <span className="text-purple-600">📞</span>
                  </div>
                  <span className="text-gray-700">(555) 123-4567</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                    <span className="text-purple-600">📍</span>
                  </div>
                  <span className="text-gray-700">San Francisco, CA</span>
                </div>
              </div>
            </div>
            
            <div>
              <form className="space-y-6">
                <div>
                  <Input placeholder="Your Name" className="w-full p-4 border-2 border-gray-200 rounded-lg focus:border-purple-500 transition-colors" />
                </div>
                <div>
                  <Input type="email" placeholder="Your Email" className="w-full p-4 border-2 border-gray-200 rounded-lg focus:border-purple-500 transition-colors" />
                </div>
                <div>
                  <Textarea placeholder="Tell me about your goals..." rows={4} className="w-full p-4 border-2 border-gray-200 rounded-lg focus:border-purple-500 transition-colors resize-none" />
                </div>
                <Button className="w-full bg-purple-600 hover:bg-purple-700 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="container mx-auto text-center">
          <div className="text-2xl font-bold text-purple-400 mb-4">Sarah Chen</div>
          <p className="text-gray-400 mb-6">Empowering transformation and personal growth</p>
          <div className="flex justify-center space-x-6">
            {["LinkedIn", "Instagram", "Facebook"].map((social) => (
              <a key={social} href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                {social}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  )
}

// Add these CSS animations to your globals.css
/*
@keyframes blob {
  0% {
    transform: translate(0px, 0px) scale(1);
  }
  33% {
    transform: translate(30px, -50px) scale(1.1);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }
  100% {
    transform: translate(0px, 0px) scale(1);
  }
}

.animate-blob {
  animation: blob 7s infinite;
}

.animation-delay-2000 {
  animation-delay: 2s;
}
*/
