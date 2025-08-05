"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  Monitor, 
  Tablet, 
  Smartphone, 
  Code, 
  Palette, 
  Settings,
  Download,
  ExternalLink,
  Star,
  Users,
  Clock,
  CheckCircle
} from "lucide-react"

// Import existing template components
import LifeCoachPremium from "@/components/templates/life-coach-premium"
import PersonalTrainerPremium from "@/components/templates/personal-trainer-premium"
import AuthorPremium from "@/components/templates/author-premium"
import PhotographerPremium from "@/components/templates/photographer-premium"

interface TemplatePreviewProps {
  templateId: string
  onClose?: () => void
}

const templateComponents: Record<string, React.ComponentType> = {
  "life-coach": LifeCoachPremium,
  "personal-trainer": PersonalTrainerPremium,
  "author": AuthorPremium,
  "photographer": PhotographerPremium,
}

const templateDetails = {
  "life-coach": {
    name: "Life Coach Premium",
    description: "A comprehensive life coaching website with booking system, testimonials, and blog functionality",
    features: [
      "Responsive Design",
      "Booking Calendar",
      "Client Testimonials",
      "Blog System",
      "Contact Forms",
      "Service Packages",
      "About Section",
      "Social Media Integration"
    ],
    technologies: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
    difficulty: "Beginner",
    rating: 4.8,
    downloads: 1250,
    lastUpdated: "2024-01-15"
  },
  "personal-trainer": {
    name: "Personal Trainer Premium",
    description: "Professional fitness coaching website with program showcase and client management",
    features: [
      "Program Showcase",
      "Progress Tracking",
      "Nutrition Guides",
      "Client Portal",
      "Workout Plans",
      "Before/After Gallery",
      "Pricing Tables",
      "Contact System"
    ],
    technologies: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
    difficulty: "Intermediate",
    rating: 4.9,
    downloads: 980,
    lastUpdated: "2024-01-12"
  },
  "author": {
    name: "Author Premium",
    description: "Elegant author website showcasing books, biography, and literary works",
    features: [
      "Book Gallery",
      "Author Biography",
      "Reading List",
      "Newsletter Signup",
      "Event Calendar",
      "Media Kit",
      "Reviews Section",
      "Blog Integration"
    ],
    technologies: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
    difficulty: "Beginner",
    rating: 4.7,
    downloads: 756,
    lastUpdated: "2024-01-10"
  },
  "photographer": {
    name: "Photographer Premium",
    description: "Stunning photography portfolio with gallery, booking, and client management",
    features: [
      "Portfolio Gallery",
      "Image Lightbox",
      "Booking Calendar",
      "Client Galleries",
      "Pricing Packages",
      "Contact Forms",
      "About Section",
      "Social Integration"
    ],
    technologies: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
    difficulty: "Advanced",
    rating: 4.9,
    downloads: 1420,
    lastUpdated: "2024-01-18"
  }
}

export default function TemplatePreview({ templateId, onClose }: TemplatePreviewProps) {
  const [viewMode, setViewMode] = useState<"desktop" | "tablet" | "mobile">("desktop")
  const [activeTab, setActiveTab] = useState("preview")
  
  const TemplateComponent = templateComponents[templateId]
  const details = templateDetails[templateId as keyof typeof templateDetails]
  
  if (!TemplateComponent || !details) {
    return (
      <div className="flex items-center justify-center h-64">
        <p className="text-slate-500">Template not found</p>
      </div>
    )
  }

  const getViewportClasses = () => {
    switch (viewMode) {
      case "mobile":
        return "max-w-sm mx-auto"
      case "tablet":
        return "max-w-2xl mx-auto"
      default:
        return "w-full"
    }
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

  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b bg-white">
        <div className="flex items-center gap-4">
          <div>
            <h2 className="text-xl font-semibold text-slate-900">{details.name}</h2>
            <p className="text-sm text-slate-600">{details.description}</p>
          </div>
          <div className="flex items-center gap-2">
            <Badge className={getDifficultyColor(details.difficulty)}>
              {details.difficulty}
            </Badge>
            <div className="flex items-center gap-1 text-sm text-slate-600">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span>{details.rating}</span>
            </div>
            <div className="flex items-center gap-1 text-sm text-slate-600">
              <Users className="h-4 w-4" />
              <span>{details.downloads.toLocaleString()}</span>
            </div>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <ExternalLink className="h-4 w-4 mr-1" />
            Open in New Tab
          </Button>
          <Button size="sm">
            <Download className="h-4 w-4 mr-1" />
            Use Template
          </Button>
        </div>
      </div>

      {/* Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="flex-1 flex flex-col">
        <div className="border-b bg-white px-4">
          <TabsList className="grid w-full max-w-md grid-cols-3">
            <TabsTrigger value="preview">Preview</TabsTrigger>
            <TabsTrigger value="features">Features</TabsTrigger>
            <TabsTrigger value="code">Code Info</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="preview" className="flex-1 flex flex-col mt-0">
          {/* Viewport Controls */}
          <div className="flex items-center justify-between p-4 bg-slate-50 border-b">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-slate-700">Viewport:</span>
              <div className="flex border rounded-md bg-white">
                <Button
                  variant={viewMode === "desktop" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("desktop")}
                  className="rounded-r-none"
                >
                  <Monitor className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === "tablet" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("tablet")}
                  className="rounded-none border-x"
                >
                  <Tablet className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === "mobile" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("mobile")}
                  className="rounded-l-none"
                >
                  <Smartphone className="h-4 w-4" />
                </Button>
              </div>
            </div>
            
            <div className="text-sm text-slate-600">
              Last updated: {new Date(details.lastUpdated).toLocaleDateString()}
            </div>
          </div>

          {/* Template Preview */}
          <div className="flex-1 bg-slate-100 p-4 overflow-auto">
            <div className={`bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 ${getViewportClasses()}`}>
              <div className="h-[600px] overflow-y-auto">
                <TemplateComponent />
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="features" className="flex-1 p-4 overflow-auto">
          <div className="max-w-4xl mx-auto space-y-6">
            {/* Features Grid */}
            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Template Features</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {details.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-white rounded-lg border">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-slate-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies */}
            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {details.technologies.map((tech, index) => (
                  <Badge key={index} variant="secondary" className="px-3 py-1">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Template Stats</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <Card>
                  <CardContent className="p-4 text-center">
                    <Star className="h-8 w-8 text-yellow-500 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-slate-900">{details.rating}</div>
                    <p className="text-sm text-slate-600">Average Rating</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 text-center">
                    <Users className="h-8 w-8 text-blue-500 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-slate-900">{details.downloads.toLocaleString()}</div>
                    <p className="text-sm text-slate-600">Downloads</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 text-center">
                    <Clock className="h-8 w-8 text-green-500 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-slate-900">{details.difficulty}</div>
                    <p className="text-sm text-slate-600">Difficulty Level</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="code" className="flex-1 p-4 overflow-auto">
          <div className="max-w-4xl mx-auto space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Code Structure</h3>
              <div className="bg-slate-900 text-slate-100 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                <pre>{`components/templates/${templateId}-premium.tsx
├── Header Component
├── Hero Section
├── Features/Services Section
├── Testimonials/Portfolio
├── Contact/Booking Section
└── Footer Component

Key Files:
- Main Template: ${templateId}-premium.tsx
- Styles: Tailwind CSS classes
- Components: Reusable UI components
- Types: TypeScript interfaces`}</pre>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Installation</h3>
              <div className="bg-slate-100 p-4 rounded-lg">
                <code className="text-sm">
                  {`# Clone the template
git clone [repository-url]

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build`}
                </code>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Customization Guide</h3>
              <div className="space-y-3">
                <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                  <h4 className="font-medium text-blue-900 mb-1">Colors & Branding</h4>
                  <p className="text-sm text-blue-700">
                    Modify the color scheme in the Tailwind config or component classes
                  </p>
                </div>
                <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                  <h4 className="font-medium text-green-900 mb-1">Content</h4>
                  <p className="text-sm text-green-700">
                    Replace placeholder text and images with your own content
                  </p>
                </div>
                <div className="p-3 bg-purple-50 border border-purple-200 rounded-lg">
                  <h4 className="font-medium text-purple-900 mb-1">Layout</h4>
                  <p className="text-sm text-purple-700">
                    Adjust section order and layout using the component structure
                  </p>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
