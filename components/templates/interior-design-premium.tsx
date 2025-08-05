"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Image from "next/image"
import { 
  Home, 
  Palette, 
  Lightbulb, 
  Ruler, 
  Star, 
  ArrowRight, 
  Phone, 
  Mail, 
  MapPin,
  Instagram,
  Facebook,
  Linkedin,
  CheckCircle,
  Quote,
  Calendar,
  Award,
  Users,
  TrendingUp
} from "lucide-react"

export default function InteriorDesignPremium() {
  const [scrollY, setScrollY] = useState(0)
  const [activeProject, setActiveProject] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const projects = [
    {
      title: "Modern Living Room",
      category: "Residential",
      image: "/interior-design/interior-design-1.jpg",
      description: "A contemporary living space that balances comfort with sophisticated design elements.",
      features: ["Open concept", "Natural lighting", "Custom furniture", "Neutral palette"]
    },
    {
      title: "Luxury Bedroom Suite",
      category: "Residential",
      image: "/interior-design/interior-design-2.jpg",
      description: "An elegant bedroom design featuring premium materials and thoughtful space planning.",
      features: ["Walk-in closet", "Ensuite bathroom", "Custom lighting", "Premium textiles"]
    },
    {
      title: "Contemporary Kitchen",
      category: "Residential",
      image: "/interior-design/interior-design-3.jpg",
      description: "A functional yet beautiful kitchen space designed for modern living and entertaining.",
      features: ["Island design", "Smart storage", "Premium appliances", "Task lighting"]
    },
    {
      title: "Executive Office",
      category: "Commercial",
      image: "/interior-design/interior-design-4.jpg",
      description: "A professional workspace that inspires productivity and reflects corporate values.",
      features: ["Ergonomic design", "Technology integration", "Brand alignment", "Flexible spaces"]
    },
    {
      title: "Boutique Hotel Lobby",
      category: "Hospitality",
      image: "/interior-design/interior-design-5.jpg",
      description: "A welcoming lobby space that creates memorable first impressions for guests.",
      features: ["Statement lighting", "Comfortable seating", "Local materials", "Brand storytelling"]
    }
  ]

  const services = [
    {
      icon: Home,
      title: "Residential Design",
      description: "Complete home transformations from concept to completion",
      features: ["Space planning", "Furniture selection", "Color consultation", "Project management"]
    },
    {
      icon: Palette,
      title: "Commercial Spaces",
      description: "Professional environments that enhance productivity and brand image",
      features: ["Office design", "Retail spaces", "Restaurant interiors", "Healthcare facilities"]
    },
    {
      icon: Lightbulb,
      title: "Design Consultation",
      description: "Expert guidance for your design decisions and space optimization",
      features: ["Design strategy", "Material selection", "Lighting design", "Budget planning"]
    },
    {
      icon: Ruler,
      title: "Space Planning",
      description: "Maximize functionality and flow in any space",
      features: ["Layout optimization", "Traffic flow", "Storage solutions", "Accessibility compliance"]
    }
  ]

  const testimonials = [
    {
      name: "Jennifer Martinez",
      role: "Homeowner",
      image: "JM",
      quote: "The transformation of our home exceeded all expectations. Every detail was thoughtfully considered and beautifully executed.",
      project: "Whole Home Renovation",
      rating: 5
    },
    {
      name: "David Thompson",
      role: "Business Owner",
      image: "DT",
      quote: "Our new office space has completely changed how our team works. The design is both functional and inspiring.",
      project: "Corporate Office Design",
      rating: 5
    },
    {
      name: "Sarah Wilson",
      role: "Restaurant Owner",
      image: "SW",
      quote: "The restaurant design created the perfect atmosphere for our brand. Customer feedback has been overwhelmingly positive.",
      project: "Restaurant Interior",
      rating: 5
    }
  ]

  return (
    <div className="bg-gradient-to-br from-stone-50 via-white to-stone-100 min-h-full relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div 
          className="absolute top-20 left-10 w-32 h-32 bg-amber-200/20 rounded-full blur-xl"
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        />
        <div 
          className="absolute top-40 right-20 w-24 h-24 bg-stone-300/30 rounded-full blur-lg"
          style={{ transform: `translateY(${scrollY * 0.15}px)` }}
        />
        <div 
          className="absolute bottom-40 left-1/4 w-40 h-40 bg-amber-100/25 rounded-full blur-2xl"
          style={{ transform: `translateY(${scrollY * 0.08}px)` }}
        />
      </div>

      {/* Navigation */}
      <nav className="relative z-50 bg-white/80 backdrop-blur-md border-b border-stone-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-amber-500 to-stone-600 rounded-lg flex items-center justify-center">
                <Home className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold text-stone-800">Luxe Interiors</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#services" className="text-stone-600 hover:text-amber-600 transition-colors">Services</a>
              <a href="#portfolio" className="text-stone-600 hover:text-amber-600 transition-colors">Portfolio</a>
              <a href="#about" className="text-stone-600 hover:text-amber-600 transition-colors">About</a>
              <a href="#testimonials" className="text-stone-600 hover:text-amber-600 transition-colors">Reviews</a>
              <a href="#contact" className="text-stone-600 hover:text-amber-600 transition-colors">Contact</a>
            </div>
            <Button className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white">
              Free Consultation
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 pt-20 pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-amber-100 text-amber-800 border-amber-200">
                  Award-Winning Design Studio
                </Badge>
                <h1 className="text-5xl lg:text-6xl font-bold text-stone-800 leading-tight">
                  Transform Your
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-stone-600">
                    Living Space
                  </span>
                </h1>
                <p className="text-xl text-stone-600 leading-relaxed">
                  We create stunning, functional interiors that reflect your personality and enhance your lifestyle. 
                  From concept to completion, we bring your vision to life with exceptional attention to detail.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-8 py-4 text-lg"
                >
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-stone-300 text-stone-700 hover:bg-stone-50 px-8 py-4 text-lg"
                >
                  View Portfolio
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-stone-200">
                <div className="text-center">
                  <div className="text-3xl font-bold text-stone-800">150+</div>
                  <div className="text-stone-600">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-stone-800">12</div>
                  <div className="text-stone-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-stone-800">98%</div>
                  <div className="text-stone-600">Client Satisfaction</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <Image
                  src="/interior-design/interior-design-1.jpg"
                  alt="Modern luxury living room interior design"
                  width={600}
                  height={700}
                  className="rounded-2xl shadow-2xl object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-full h-full bg-gradient-to-br from-amber-200 to-stone-300 rounded-2xl -z-10" />
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-white rounded-2xl shadow-lg flex items-center justify-center">
                <div className="text-center">
                  <Award className="h-8 w-8 text-amber-500 mx-auto mb-2" />
                  <div className="text-sm font-semibold text-stone-800">Award Winner</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative z-10 py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-amber-100 text-amber-800 border-amber-200 mb-4">
              Our Services
            </Badge>
            <h2 className="text-4xl font-bold text-stone-800 mb-6">
              Comprehensive Design Solutions
            </h2>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto">
              From initial concept to final installation, we provide end-to-end interior design services 
              tailored to your unique needs and lifestyle.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-stone-200 hover:border-amber-200">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-100 to-stone-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:from-amber-200 group-hover:to-stone-200 transition-all duration-300">
                    <service.icon className="h-8 w-8 text-amber-600" />
                  </div>
                  <CardTitle className="text-xl text-stone-800">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-stone-600 mb-4">
                    {service.description}
                  </CardDescription>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-stone-600">
                        <CheckCircle className="h-4 w-4 text-amber-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="relative z-10 py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-amber-100 text-amber-800 border-amber-200 mb-4">
              Our Work
            </Badge>
            <h2 className="text-4xl font-bold text-stone-800 mb-6">
              Featured Projects
            </h2>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto">
              Explore our portfolio of stunning interior transformations across residential, 
              commercial, and hospitality spaces.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {projects.slice(0, 2).map((project, index) => (
              <Card key={index} className="group overflow-hidden hover:shadow-2xl transition-all duration-500 border-stone-200">
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-white/90 text-stone-800 border-stone-200">
                      {project.category}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-stone-800 mb-3">{project.title}</h3>
                  <p className="text-stone-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.features.map((feature, featureIndex) => (
                      <Badge key={featureIndex} variant="outline" className="text-xs border-amber-200 text-amber-700">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {projects.slice(2).map((project, index) => (
              <Card key={index + 2} className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-stone-200">
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3">
                    <Badge className="bg-white/90 text-stone-800 border-stone-200 text-xs">
                      {project.category}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="text-lg font-bold text-stone-800 mb-2">{project.title}</h3>
                  <p className="text-stone-600 text-sm mb-3">{project.description}</p>
                  <div className="flex flex-wrap gap-1">
                    {project.features.slice(0, 2).map((feature, featureIndex) => (
                      <Badge key={featureIndex} variant="outline" className="text-xs border-amber-200 text-amber-700">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-8"
            >
              View Full Portfolio
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
      {/* Testimonials Section */}
      <section id="testimonials" className="relative z-10 py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-amber-100 text-amber-800 border-amber-200 mb-4">
              Client Reviews
            </Badge>
            <h2 className="text-4xl font-bold text-stone-800 mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our satisfied clients have to say about 
              their interior design experience with us.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="relative overflow-hidden hover:shadow-xl transition-all duration-300 border-stone-200">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-stone-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                      {testimonial.image}
                    </div>
                    <div>
                      <h4 className="font-semibold text-stone-800">{testimonial.name}</h4>
                      <p className="text-sm text-stone-600">{testimonial.role}</p>
                    </div>
                  </div>
                  
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-amber-400 fill-current" />
                    ))}
                  </div>

                  <Quote className="h-8 w-8 text-amber-200 mb-4" />
                  <p className="text-stone-600 mb-4 italic">"{testimonial.quote}"</p>
                  
                  <div className="pt-4 border-t border-stone-100">
                    <p className="text-sm font-medium text-stone-800">Project: {testimonial.project}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="inline-flex items-center space-x-4 bg-stone-50 rounded-full px-6 py-3">
              <div className="flex items-center space-x-2">
                <TrendingUp className="h-5 w-5 text-amber-600" />
                <span className="text-stone-800 font-semibold">98% Client Satisfaction</span>
              </div>
              <div className="w-px h-6 bg-stone-300" />
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-amber-600" />
                <span className="text-stone-800 font-semibold">150+ Happy Clients</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Section */}
      <section id="contact" className="relative z-10 py-24 bg-gradient-to-br from-stone-800 to-stone-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <Badge className="bg-amber-100 text-amber-800 border-amber-200 mb-4">
                  Get Started
                </Badge>
                <h2 className="text-4xl font-bold text-white mb-6">
                  Ready to Transform Your Space?
                </h2>
                <p className="text-xl text-stone-300 leading-relaxed">
                  Let's discuss your vision and create a space that truly reflects your style and needs. 
                  Schedule a free consultation today.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-amber-500 rounded-lg flex items-center justify-center">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Call Us</p>
                    <p className="text-stone-300">(555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-amber-500 rounded-lg flex items-center justify-center">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Email Us</p>
                    <p className="text-stone-300">hello@luxeinteriors.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-amber-500 rounded-lg flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Visit Our Studio</p>
                    <p className="text-stone-300">123 Design Street, Creative District</p>
                  </div>
                </div>
              </div>

              <div className="flex space-x-4">
                <Button variant="outline" size="icon" className="border-stone-600 text-stone-300 hover:bg-stone-700">
                  <Instagram className="h-5 w-5" />
                </Button>
                <Button variant="outline" size="icon" className="border-stone-600 text-stone-300 hover:bg-stone-700">
                  <Facebook className="h-5 w-5" />
                </Button>
                <Button variant="outline" size="icon" className="border-stone-600 text-stone-300 hover:bg-stone-700">
                  <Linkedin className="h-5 w-5" />
                </Button>
              </div>
            </div>

            <Card className="bg-white/95 backdrop-blur-sm border-stone-200">
              <CardHeader>
                <CardTitle className="text-2xl text-stone-800">Free Consultation</CardTitle>
                <CardDescription className="text-stone-600">
                  Tell us about your project and we'll get back to you within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-stone-700 mb-2 block">First Name</label>
                    <Input placeholder="John" className="border-stone-300" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-stone-700 mb-2 block">Last Name</label>
                    <Input placeholder="Doe" className="border-stone-300" />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-stone-700 mb-2 block">Email</label>
                  <Input type="email" placeholder="john@example.com" className="border-stone-300" />
                </div>
                <div>
                  <label className="text-sm font-medium text-stone-700 mb-2 block">Phone</label>
                  <Input type="tel" placeholder="(555) 123-4567" className="border-stone-300" />
                </div>
                <div>
                  <label className="text-sm font-medium text-stone-700 mb-2 block">Project Type</label>
                  <select className="w-full px-3 py-2 border border-stone-300 rounded-md bg-white">
                    <option>Residential Design</option>
                    <option>Commercial Space</option>
                    <option>Consultation Only</option>
                    <option>Full Renovation</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium text-stone-700 mb-2 block">Tell us about your project</label>
                  <Textarea 
                    placeholder="Describe your vision, space, timeline, and budget..." 
                    className="border-stone-300 min-h-[100px]"
                  />
                </div>
                <Button className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white">
                  Schedule Free Consultation
                  <Calendar className="ml-2 h-5 w-5" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-900 text-stone-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-amber-500 to-stone-600 rounded-lg flex items-center justify-center">
                <Home className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Luxe Interiors</span>
            </div>
            <p className="text-stone-400 mb-6">
              Creating beautiful, functional spaces that inspire and delight.
            </p>
            <div className="flex justify-center space-x-6 mb-8">
              <a href="#services" className="hover:text-amber-400 transition-colors">Services</a>
              <a href="#portfolio" className="hover:text-amber-400 transition-colors">Portfolio</a>
              <a href="#about" className="hover:text-amber-400 transition-colors">About</a>
              <a href="#contact" className="hover:text-amber-400 transition-colors">Contact</a>
            </div>
            <div className="border-t border-stone-800 pt-8">
              <p className="text-stone-500">
                © 2024 Luxe Interiors. All rights reserved. | Privacy Policy | Terms of Service
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
