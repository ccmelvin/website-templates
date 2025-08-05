"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { LifeCoachPremiumTemplate } from "@/components/templates/life-coach-premium"
import { PersonalTrainerPremiumTemplate } from "@/components/templates/personal-trainer-premium"
import { AuthorPremiumTemplate } from "@/components/templates/author-premium"
import { PhotographerPremiumTemplate } from "@/components/templates/photographer-premium"

const premiumTemplates = [
  { 
    id: "life-coach", 
    name: "Life Coach", 
    description: "Transform lives with purpose-driven coaching",
    features: ["Interactive hero animations", "Client testimonials carousel", "Booking system", "Progress tracking"],
    color: "from-purple-600 to-pink-600",
    icon: "🚀",
    premium: true
  },
  { 
    id: "personal-trainer", 
    name: "Personal Trainer", 
    description: "High-energy fitness transformation platform",
    features: ["BMI calculator widget", "Workout previews", "Progress tracking", "Nutrition planning"],
    color: "from-orange-600 to-red-600",
    icon: "💪",
    premium: true
  },
  { 
    id: "author", 
    name: "Author", 
    description: "Literary showcase with interactive book displays",
    features: ["Interactive book gallery", "Reading progress", "Award showcases", "Literary timeline"],
    color: "from-amber-600 to-orange-600",
    icon: "📚",
    premium: true
  },
  { 
    id: "photographer", 
    name: "Photographer", 
    description: "Cinematic portfolio with lightbox galleries",
    features: ["Portfolio lightbox", "Category filtering", "Booking calendar", "Client galleries"],
    color: "from-slate-600 to-gray-600",
    icon: "📸",
    premium: true
  },
  { 
    id: "architect", 
    name: "Architect", 
    description: "Modern architectural showcase",
    features: ["3D project views", "Timeline displays", "Blueprint galleries", "Sustainability metrics"],
    color: "from-blue-600 to-cyan-600",
    icon: "🏗️",
    premium: false
  },
  { 
    id: "chef", 
    name: "Chef", 
    description: "Culinary excellence platform",
    features: ["Recipe galleries", "Menu builders", "Cooking videos", "Restaurant booking"],
    color: "from-green-600 to-emerald-600",
    icon: "👨‍🍳",
    premium: false
  },
  { 
    id: "therapist", 
    name: "Therapist", 
    description: "Compassionate mental health support",
    features: ["Appointment booking", "Resource library", "Progress tracking", "Secure messaging"],
    color: "from-teal-600 to-cyan-600",
    icon: "🧠",
    premium: false
  },
  { 
    id: "consultant", 
    name: "Business Consultant", 
    description: "Strategic business growth platform",
    features: ["ROI calculators", "Case studies", "Strategy tools", "Client portals"],
    color: "from-indigo-600 to-purple-600",
    icon: "📊",
    premium: false
  },
  { 
    id: "designer", 
    name: "Interior Designer", 
    description: "Beautiful space transformation showcase",
    features: ["Before/after galleries", "3D room views", "Style quizzes", "Project timelines"],
    color: "from-rose-600 to-pink-600",
    icon: "🏠",
    premium: false
  },
  { 
    id: "musician", 
    name: "Musician", 
    description: "Musical journey and performance platform",
    features: ["Music players", "Tour dates", "Fan engagement", "Merchandise store"],
    color: "from-violet-600 to-purple-600",
    icon: "🎵",
    premium: false
  },
]

export default function PremiumTemplateSelector() {
  const [selectedTemplate, setSelectedTemplate] = useState("life-coach")
  const [showPremiumOnly, setShowPremiumOnly] = useState(false)

  const filteredTemplates = showPremiumOnly 
    ? premiumTemplates.filter(t => t.premium)
    : premiumTemplates

  const renderTemplate = () => {
    switch (selectedTemplate) {
      case "life-coach":
        return <LifeCoachPremiumTemplate />
      case "personal-trainer":
        return <PersonalTrainerPremiumTemplate />
      case "author":
        return <AuthorPremiumTemplate />
      case "photographer":
        return <PhotographerPremiumTemplate />
      default:
        return (
          <div className="h-[600px] bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center rounded-lg">
            <div className="text-center">
              <div className="text-6xl mb-4">🚧</div>
              <h3 className="text-2xl font-bold text-gray-700 mb-2">Coming Soon</h3>
              <p className="text-gray-600">This premium template is under development</p>
            </div>
          </div>
        )
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-purple-500/10 rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-blue-500/10 rounded-full mix-blend-multiply filter blur-xl animate-float-delayed"></div>
        <div className="absolute bottom-20 left-1/2 w-96 h-96 bg-pink-500/10 rounded-full mix-blend-multiply filter blur-xl animate-float-slow"></div>
      </div>

      <div className="container mx-auto px-4 py-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-white/20">
            <div className="w-3 h-3 bg-green-400 rounded-full mr-3 animate-pulse"></div>
            <span className="text-white font-semibold text-sm">Premium Templates Available</span>
          </div>
          
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Professional
            <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
              Website Templates
            </span>
          </h1>
          
          <p className="text-xl text-white/80 max-w-4xl mx-auto mb-8 leading-relaxed">
            Choose from our collection of stunning, interactive templates designed for different professions. 
            Each template features modern UI/UX, animations, and unique functionality.
          </p>

          {/* Filter Toggle */}
          <div className="flex justify-center gap-4 mb-8">
            <Button
              onClick={() => setShowPremiumOnly(false)}
              variant={!showPremiumOnly ? "default" : "outline"}
              className={`px-6 py-3 font-semibold transition-all duration-300 ${
                !showPremiumOnly 
                  ? 'bg-white text-gray-900 hover:bg-gray-100' 
                  : 'border-white/30 text-white hover:bg-white/10'
              }`}
            >
              All Templates (10)
            </Button>
            <Button
              onClick={() => setShowPremiumOnly(true)}
              variant={showPremiumOnly ? "default" : "outline"}
              className={`px-6 py-3 font-semibold transition-all duration-300 ${
                showPremiumOnly 
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white' 
                  : 'border-white/30 text-white hover:bg-white/10'
              }`}
            >
              Premium Only (4) ✨
            </Button>
          </div>
        </div>

        {/* Template Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-12">
          {filteredTemplates.map((template) => (
            <Card
              key={template.id}
              className={`cursor-pointer transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-2 relative overflow-hidden ${
                selectedTemplate === template.id 
                  ? "ring-4 ring-white/50 shadow-2xl scale-105" 
                  : "hover:shadow-xl bg-white/10 backdrop-blur-sm border-white/20"
              }`}
              onClick={() => setSelectedTemplate(template.id)}
            >
              {template.premium && (
                <div className="absolute -top-2 -right-2 z-10">
                  <Badge className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black font-bold px-3 py-1 text-xs">
                    ✨ PREMIUM
                  </Badge>
                </div>
              )}
              
              <CardHeader className="pb-3">
                <div className={`w-16 h-16 bg-gradient-to-r ${template.color} rounded-2xl flex items-center justify-center text-3xl mb-4 mx-auto shadow-lg`}>
                  {template.icon}
                </div>
                <CardTitle className={`text-lg font-bold text-center ${template.premium ? 'text-white' : 'text-white/80'}`}>
                  {template.name}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="pt-0">
                <CardDescription className={`text-sm text-center mb-4 ${template.premium ? 'text-white/90' : 'text-white/70'}`}>
                  {template.description}
                </CardDescription>
                
                {template.premium && (
                  <div className="space-y-2">
                    <h4 className="text-white font-semibold text-xs mb-2">Premium Features:</h4>
                    <ul className="space-y-1">
                      {template.features.slice(0, 2).map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-xs text-white/80">
                          <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    {template.features.length > 2 && (
                      <p className="text-xs text-white/60">+{template.features.length - 2} more features</p>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Current Selection Badge */}
        <div className="text-center mb-8">
          <Badge variant="secondary" className="text-lg px-6 py-3 bg-white/20 backdrop-blur-sm text-white border-white/30">
            Currently Viewing: {premiumTemplates.find((t) => t.id === selectedTemplate)?.name}
            {premiumTemplates.find((t) => t.id === selectedTemplate)?.premium && (
              <span className="ml-2">✨</span>
            )}
          </Badge>
        </div>

        {/* Template Preview */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border-4 border-white/20">
          <div className="h-[700px] overflow-y-auto">
            {renderTemplate()}
          </div>
        </div>

        {/* Features Showcase */}
        <div className="mt-16 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Why Choose Premium Templates?</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: "⚡",
                title: "Interactive Elements",
                description: "Engaging animations, hover effects, and micro-interactions that captivate visitors"
              },
              {
                icon: "🎨",
                title: "Unique Designs",
                description: "Custom-crafted layouts that stand out from generic templates with personality"
              },
              {
                icon: "📱",
                title: "Mobile Optimized",
                description: "Responsive designs that look stunning on all devices with touch-friendly interfaces"
              },
              {
                icon: "🚀",
                title: "Performance Focused",
                description: "Optimized code and assets for lightning-fast loading and smooth user experience"
              },
              {
                icon: "🔧",
                title: "Advanced Features",
                description: "Built-in calculators, booking systems, galleries, and industry-specific tools"
              },
              {
                icon: "💎",
                title: "Premium Support",
                description: "Dedicated support, customization options, and regular updates included"
              }
            ].map((feature, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2">
                <CardContent className="p-8 text-center">
                  <div className="text-5xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-white/80 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-3xl p-12 border border-white/20">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Launch Your Professional Website?</h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Choose your template and start building your online presence with our premium designs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-4 text-lg font-bold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              Get Premium Access
              <span className="ml-2">✨</span>
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg font-bold transition-all duration-300">
              View All Features
              <span className="ml-2">📋</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
