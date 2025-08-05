"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { 
  Check, 
  X, 
  Star, 
  Users, 
  Download,
  Monitor,
  Smartphone,
  Palette,
  Code,
  Clock
} from "lucide-react"

interface Template {
  id: string
  name: string
  description: string
  category: string
  color: string
  features: string[]
  difficulty: string
  rating: number
  downloads: number
  tags: string[]
  responsive: boolean
  darkMode: boolean
  animations: boolean
  price?: string
}

interface TemplateComparisonProps {
  templates: Template[]
  onRemoveTemplate?: (templateId: string) => void
}

const allFeatures = [
  "Responsive Design",
  "Dark Mode Support",
  "Animations",
  "Booking System",
  "Contact Forms",
  "Portfolio Gallery",
  "Blog Integration",
  "Newsletter Signup",
  "Social Media Integration",
  "SEO Optimized",
  "Fast Loading",
  "Mobile First",
  "Accessibility Ready",
  "Custom Components",
  "TypeScript Support"
]

export default function TemplateComparison({ templates, onRemoveTemplate }: TemplateComparisonProps) {
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([])

  if (templates.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-slate-400 mb-4">
          <Monitor className="h-12 w-12 mx-auto" />
        </div>
        <h3 className="text-lg font-semibold text-slate-900 mb-2">No templates to compare</h3>
        <p className="text-slate-600">Select templates from the dashboard to compare their features</p>
      </div>
    )
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner":
        return "bg-green-100 text-green-800"
      case "Intermediate":
        return "bg-yellow-100 text-yellow-800"
      case "Advanced":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const hasFeature = (template: Template, feature: string) => {
    const featureMap: Record<string, boolean> = {
      "Responsive Design": template.responsive,
      "Dark Mode Support": template.darkMode,
      "Animations": template.animations,
      "Booking System": template.features.some(f => f.toLowerCase().includes("booking")),
      "Contact Forms": template.features.some(f => f.toLowerCase().includes("contact")),
      "Portfolio Gallery": template.features.some(f => f.toLowerCase().includes("portfolio") || f.toLowerCase().includes("gallery")),
      "Blog Integration": template.features.some(f => f.toLowerCase().includes("blog")),
      "Newsletter Signup": template.features.some(f => f.toLowerCase().includes("newsletter")),
      "Social Media Integration": template.features.some(f => f.toLowerCase().includes("social")),
      "SEO Optimized": true, // Assume all templates are SEO optimized
      "Fast Loading": true, // Assume all templates are optimized for speed
      "Mobile First": template.responsive,
      "Accessibility Ready": true, // Assume all templates follow accessibility guidelines
      "Custom Components": true, // All templates have custom components
      "TypeScript Support": true, // All templates use TypeScript
    }
    
    return featureMap[feature] || template.features.includes(feature)
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-2xl font-bold text-slate-900 mb-2">Template Comparison</h2>
        <p className="text-slate-600">Compare features, ratings, and specifications side by side</p>
      </div>

      {/* Comparison Table */}
      <div className="overflow-x-auto">
        <div className="min-w-full">
          {/* Template Headers */}
          <div className="grid gap-4 mb-6" style={{ gridTemplateColumns: `300px repeat(${templates.length}, 1fr)` }}>
            <div></div>
            {templates.map((template) => (
              <Card key={template.id} className="relative">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-lg mb-1">{template.name}</CardTitle>
                      <p className="text-sm text-slate-600 mb-3">{template.description}</p>
                      <Badge variant="secondary" className="mb-2">
                        {template.category}
                      </Badge>
                    </div>
                    {onRemoveTemplate && (
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => onRemoveTemplate(template.id)}
                        className="text-slate-400 hover:text-slate-600"
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                  
                  {/* Stats */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-1">
                        <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                        <span>{template.rating}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="h-3 w-3" />
                        <span>{template.downloads.toLocaleString()}</span>
                      </div>
                    </div>
                    <Badge className={getDifficultyColor(template.difficulty)} variant="secondary">
                      {template.difficulty}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <Button className="w-full" size="sm">
                    <Download className="h-4 w-4 mr-1" />
                    Use Template
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Feature Comparison */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Code className="h-5 w-5" />
                Feature Comparison
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-1">
                {allFeatures.map((feature, index) => (
                  <div key={feature}>
                    <div 
                      className="grid gap-4 py-3 hover:bg-slate-50 rounded-lg px-2 transition-colors"
                      style={{ gridTemplateColumns: `300px repeat(${templates.length}, 1fr)` }}
                    >
                      <div className="font-medium text-slate-700 flex items-center">
                        {feature}
                      </div>
                      {templates.map((template) => (
                        <div key={template.id} className="flex justify-center">
                          {hasFeature(template, feature) ? (
                            <Check className="h-5 w-5 text-green-500" />
                          ) : (
                            <X className="h-5 w-5 text-slate-300" />
                          )}
                        </div>
                      ))}
                    </div>
                    {index < allFeatures.length - 1 && <Separator />}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Technical Specifications */}
          <Card className="mt-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Monitor className="h-5 w-5" />
                Technical Specifications
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {/* Framework */}
                <div 
                  className="grid gap-4 py-3"
                  style={{ gridTemplateColumns: `300px repeat(${templates.length}, 1fr)` }}
                >
                  <div className="font-medium text-slate-700">Framework</div>
                  {templates.map((template) => (
                    <div key={template.id} className="text-center">
                      <Badge variant="outline">Next.js 15</Badge>
                    </div>
                  ))}
                </div>
                <Separator />

                {/* Styling */}
                <div 
                  className="grid gap-4 py-3"
                  style={{ gridTemplateColumns: `300px repeat(${templates.length}, 1fr)` }}
                >
                  <div className="font-medium text-slate-700">Styling</div>
                  {templates.map((template) => (
                    <div key={template.id} className="text-center">
                      <Badge variant="outline">Tailwind CSS</Badge>
                    </div>
                  ))}
                </div>
                <Separator />

                {/* Language */}
                <div 
                  className="grid gap-4 py-3"
                  style={{ gridTemplateColumns: `300px repeat(${templates.length}, 1fr)` }}
                >
                  <div className="font-medium text-slate-700">Language</div>
                  {templates.map((template) => (
                    <div key={template.id} className="text-center">
                      <Badge variant="outline">TypeScript</Badge>
                    </div>
                  ))}
                </div>
                <Separator />

                {/* UI Components */}
                <div 
                  className="grid gap-4 py-3"
                  style={{ gridTemplateColumns: `300px repeat(${templates.length}, 1fr)` }}
                >
                  <div className="font-medium text-slate-700">UI Components</div>
                  {templates.map((template) => (
                    <div key={template.id} className="text-center">
                      <Badge variant="outline">Radix UI</Badge>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Performance Metrics */}
          <Card className="mt-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                Performance Metrics
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {["Load Time", "Bundle Size", "Lighthouse Score", "Mobile Performance"].map((metric, index) => (
                  <div key={metric}>
                    <div 
                      className="grid gap-4 py-3"
                      style={{ gridTemplateColumns: `300px repeat(${templates.length}, 1fr)` }}
                    >
                      <div className="font-medium text-slate-700">{metric}</div>
                      {templates.map((template) => (
                        <div key={template.id} className="text-center">
                          <Badge variant="outline" className="bg-green-50 text-green-700">
                            {metric === "Load Time" && "< 2s"}
                            {metric === "Bundle Size" && "< 100KB"}
                            {metric === "Lighthouse Score" && "95+"}
                            {metric === "Mobile Performance" && "Excellent"}
                          </Badge>
                        </div>
                      ))}
                    </div>
                    {index < 3 && <Separator />}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
