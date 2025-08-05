"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function LifeCoachPremium() {
  const [scrollY, setScrollY] = useState(0)
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart",
      image: "SJ",
      quote: "Sarah transformed not just my career, but my entire approach to life. I went from feeling stuck to launching my dream company.",
      transformation: "From Corporate Burnout to CEO",
      results: ["Launched $2M startup", "Work-life balance", "Increased confidence"]
    },
    {
      name: "Michael Chen",
      role: "Creative Director",
      image: "MC",
      quote: "The breakthrough I experienced was incredible. I finally understood my purpose and aligned my career with my values.",
      transformation: "From Creative Block to Industry Leader",
      results: ["Won 3 design awards", "Doubled income", "Found creative flow"]
    },
    {
      name: "Emma Rodriguez",
      role: "Wellness Entrepreneur",
      image: "ER",
      quote: "Sarah's coaching gave me the courage to leave my 9-5 and build the wellness business I'd always dreamed of.",
      transformation: "From Employee to Entrepreneur",
      results: ["6-figure business", "Location freedom", "Helping others heal"]
    }
  ]

  return (
    <div className="bg-gradient-to-br from-purple-900 via-purple-800 to-pink-800 min-h-full relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-purple-400/20 rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-pink-400/20 rounded-full mix-blend-multiply filter blur-xl animate-float-delayed"></div>
        <div className="absolute bottom-20 left-1/2 w-96 h-96 bg-indigo-400/20 rounded-full mix-blend-multiply filter blur-xl animate-float-slow"></div>
      </div>

      {/* Glassmorphism Header */}
      <header className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/10 border-b border-white/20">
        <div className="container mx-auto px-6 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <div className="text-2xl font-bold text-white">Sarah Chen</div>
            </div>
            
            <div className="hidden md:flex space-x-8">
              {["About", "Programs", "Success Stories", "Contact"].map((item) => (
                <a 
                  key={item}
                  href="#" 
                  className="text-white/90 hover:text-white font-medium transition-all duration-300 relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>

            <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              Book Free Call
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section with Parallax */}
      <section className="pt-32 pb-20 px-6 relative">
        <div 
          className="absolute inset-0 bg-gradient-to-r from-purple-600/30 to-pink-600/30"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        ></div>
        
        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 mb-8">
                <div className="w-3 h-3 bg-green-400 rounded-full mr-3 animate-pulse"></div>
                <span className="text-sm font-semibold">Available for New Clients</span>
              </div>
              
              <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
                Transform Your
                <span className="block bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
                  Life Story
                </span>
              </h1>
              
              <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-lg">
                Break through limiting beliefs, discover your true purpose, and create the extraordinary life you deserve. Join 500+ successful transformations.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Button size="lg" className="bg-white text-purple-900 hover:bg-white/90 px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                  Start Your Journey
                  <span className="ml-2">→</span>
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-purple-900 px-8 py-4 text-lg font-semibold transition-all duration-300">
                  Watch Success Stories
                  <span className="ml-2">▶</span>
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8">
                {[
                  { number: "500+", label: "Lives Transformed" },
                  { number: "98%", label: "Success Rate" },
                  { number: "5★", label: "Average Rating" }
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
                    <div className="text-white/70 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Interactive 3D Card */}
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl transform hover:scale-105 transition-all duration-500">
                <div className="text-center mb-6">
                  <div className="w-24 h-24 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">SC</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Sarah Chen</h3>
                  <p className="text-white/80">Certified Life & Transformation Coach</p>
                </div>
                
                <div className="space-y-4 text-white/90">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span>ICF Certified Professional Coach</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span>10+ Years Transformation Experience</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span>Featured in Forbes & Entrepreneur</span>
                  </div>
                </div>
                
                <Button className="w-full mt-6 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0">
                  Book Free Discovery Call
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transformation Programs */}
      <section className="py-20 px-6 bg-white relative">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-purple-100 text-purple-800 px-6 py-2 text-lg font-semibold mb-6">
              Transformation Programs
            </Badge>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Choose Your Path to Success</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Personalized coaching programs designed to unlock your potential and create lasting transformation
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                title: "Breakthrough Intensive",
                subtitle: "1-on-1 Deep Transformation",
                price: "$2,997",
                duration: "3 months",
                description: "Intensive personal coaching for rapid breakthrough and lasting change",
                features: [
                  "12 weekly 90-minute sessions",
                  "24/7 WhatsApp support",
                  "Custom transformation roadmap",
                  "Breakthrough exercises & tools",
                  "Mindset reprogramming techniques",
                  "Goal achievement system"
                ],
                popular: true,
                color: "from-purple-500 to-pink-500",
                icon: "🚀"
              },
              {
                title: "Life Mastery Program",
                subtitle: "Complete Life Transformation",
                price: "$4,997",
                duration: "6 months",
                description: "Comprehensive program covering all life areas for complete transformation",
                features: [
                  "24 bi-weekly sessions",
                  "Group mastermind access",
                  "Life design workshop",
                  "Relationship & career coaching",
                  "Health & wellness planning",
                  "Legacy & purpose discovery"
                ],
                popular: false,
                color: "from-indigo-500 to-purple-500",
                icon: "👑"
              },
              {
                title: "Quick Start Coaching",
                subtitle: "Foundation Building",
                price: "$997",
                duration: "1 month",
                description: "Perfect introduction to coaching with immediate results and clarity",
                features: [
                  "4 weekly 60-minute sessions",
                  "Goal clarity workshop",
                  "Action plan creation",
                  "Obstacle identification",
                  "Success tracking system",
                  "Resource library access"
                ],
                popular: false,
                color: "from-teal-500 to-cyan-500",
                icon: "⚡"
              }
            ].map((program, index) => (
              <Card key={index} className={`relative overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 ${program.popular ? 'ring-4 ring-purple-500 scale-105' : ''}`}>
                {program.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 text-sm font-bold">
                      MOST POPULAR
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center pb-4">
                  <div className="text-6xl mb-4">{program.icon}</div>
                  <CardTitle className="text-2xl font-bold mb-2">{program.title}</CardTitle>
                  <CardDescription className="text-lg text-gray-600 mb-4">{program.subtitle}</CardDescription>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-gray-900">{program.price}</span>
                    <span className="text-gray-600 ml-2">/ {program.duration}</span>
                  </div>
                  <p className="text-gray-700">{program.description}</p>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {program.features.map((feature, idx) => (
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
                    program.popular 
                      ? `bg-gradient-to-r ${program.color} text-white shadow-lg hover:shadow-xl` 
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}>
                    {program.popular ? 'Start Transformation' : 'Learn More'}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Success Stories */}
      <section className="py-20 px-6 bg-gradient-to-r from-gray-900 to-purple-900 relative overflow-hidden">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-6">Real Transformations</h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              See how our clients transformed their lives and achieved extraordinary results
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Testimonial Content */}
              <div className="space-y-8">
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                      {testimonials[activeTestimonial].image}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white">{testimonials[activeTestimonial].name}</h4>
                      <p className="text-white/70">{testimonials[activeTestimonial].role}</p>
                    </div>
                  </div>
                  
                  <blockquote className="text-xl text-white/90 italic mb-6 leading-relaxed">
                    "{testimonials[activeTestimonial].quote}"
                  </blockquote>
                  
                  <div className="mb-6">
                    <h5 className="text-lg font-semibold text-white mb-3">{testimonials[activeTestimonial].transformation}</h5>
                    <div className="space-y-2">
                      {testimonials[activeTestimonial].results.map((result, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                          <span className="text-white/80">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Navigation */}
                <div className="flex justify-center space-x-4">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveTestimonial(index)}
                      className={`w-4 h-4 rounded-full transition-all duration-300 ${
                        index === activeTestimonial 
                          ? 'bg-white scale-125' 
                          : 'bg-white/40 hover:bg-white/60'
                      }`}
                    />
                  ))}
                </div>
              </div>
              
              {/* Visual Element */}
              <div className="relative">
                <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-3xl p-8 backdrop-blur-sm border border-white/20">
                  <div className="text-center">
                    <div className="text-6xl mb-6">🎯</div>
                    <h3 className="text-3xl font-bold text-white mb-4">Your Success Story Starts Here</h3>
                    <p className="text-white/80 mb-8">Join hundreds of successful clients who transformed their lives</p>
                    
                    <div className="grid grid-cols-2 gap-6 mb-8">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-white">500+</div>
                        <div className="text-white/70 text-sm">Success Stories</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-white">98%</div>
                        <div className="text-white/70 text-sm">Satisfaction Rate</div>
                      </div>
                    </div>
                    
                    <Button className="bg-white text-purple-900 hover:bg-white/90 px-8 py-3 font-semibold">
                      Book Your Free Call
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Ready to Transform Your Life?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Book your free discovery call and take the first step toward the life you've always wanted
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">What to Expect on Your Call</h3>
                <div className="space-y-4">
                  {[
                    { step: "1", title: "Clarity Session", desc: "Identify what's holding you back" },
                    { step: "2", title: "Vision Mapping", desc: "Define your ideal life and goals" },
                    { step: "3", title: "Strategy Planning", desc: "Create your transformation roadmap" },
                    { step: "4", title: "Next Steps", desc: "Determine if we're a perfect fit" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                        {item.step}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{item.title}</h4>
                        <p className="text-gray-600">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                      <span className="text-purple-600">📧</span>
                    </div>
                    <span className="text-gray-700">sarah@transformationcoach.com</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                      <span className="text-purple-600">📞</span>
                    </div>
                    <span className="text-gray-700">(555) 123-4567</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                      <span className="text-purple-600">🌍</span>
                    </div>
                    <span className="text-gray-700">Worldwide (Virtual Sessions)</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Book Your Free Discovery Call</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <Input 
                    placeholder="First Name" 
                    className="bg-white/20 border-white/30 text-white placeholder:text-white/70 focus:border-white"
                  />
                  <Input 
                    placeholder="Last Name" 
                    className="bg-white/20 border-white/30 text-white placeholder:text-white/70 focus:border-white"
                  />
                </div>
                <Input 
                  type="email" 
                  placeholder="Email Address" 
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/70 focus:border-white"
                />
                <Input 
                  type="tel" 
                  placeholder="Phone Number" 
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/70 focus:border-white"
                />
                <Textarea 
                  placeholder="What's your biggest challenge right now?" 
                  rows={4} 
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/70 focus:border-white resize-none"
                />
                <Button className="w-full bg-white text-purple-600 hover:bg-white/90 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                  Book My Free Call Now
                </Button>
              </form>
              
              <div className="mt-6 text-center text-white/80 text-sm">
                <p>🔒 Your information is 100% secure and confidential</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">S</span>
                </div>
                <div className="text-2xl font-bold">Sarah Chen</div>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Empowering individuals to break through limitations and create extraordinary lives through proven transformation strategies.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Programs</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Breakthrough Intensive</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Life Mastery Program</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Quick Start Coaching</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Group Mastermind</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Success Stories</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Free Resources</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Podcast</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Connect</h4>
              <div className="flex space-x-4 mb-4">
                {["LinkedIn", "Instagram", "Facebook", "YouTube"].map((social) => (
                  <a key={social} href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors">
                    <span className="text-sm">{social[0]}</span>
                  </a>
                ))}
              </div>
              <p className="text-gray-400 text-sm">Follow for daily inspiration and transformation tips</p>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Sarah Chen Coaching. All rights reserved. | Privacy Policy | Terms of Service</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
