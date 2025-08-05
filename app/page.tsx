"use client"

import { useState, useMemo, useEffect } from "react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { showitTemplates, categories, styles, type ShowitTemplate } from "@/lib/showit-templates"
import { 
  Search, 
  Eye, 
  Download, 
  Star, 
  Users, 
  Smartphone,
  Monitor,
  ExternalLink,
  Heart,
  Share2,
  Grid3X3,
  List,
  Moon,
  Sun,
  Menu,
  Palette,
  Zap,
  Crown,
  Sparkles,
  ShoppingCart
} from "lucide-react"

const difficulties = ["All", "Beginner", "Intermediate", "Advanced"]
const priceRanges = ["All", "Free", "$1-99", "$100-149", "$150+"]

export default function ShowitTemplateDashboard() {
  const { theme, setTheme } = useTheme()
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedStyle, setSelectedStyle] = useState("All")
  const [selectedDifficulty, setSelectedDifficulty] = useState("All")
  const [selectedPriceRange, setSelectedPriceRange] = useState("All")
  const [sortBy, setSortBy] = useState("popularity")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [favorites, setFavorites] = useState<string[]>([])
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const filteredTemplates = useMemo(() => {
    let filtered = showitTemplates.filter(template => {
      const matchesSearch = template.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          template.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          template.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())) ||
                          template.designer.toLowerCase().includes(searchTerm.toLowerCase())
      
      const matchesCategory = selectedCategory === "All" || template.category === selectedCategory
      const matchesStyle = selectedStyle === "All" || template.style === selectedStyle
      const matchesDifficulty = selectedDifficulty === "All" || template.difficulty === selectedDifficulty
      
      const matchesPriceRange = selectedPriceRange === "All" || 
        (selectedPriceRange === "Free" && template.price === 0) ||
        (selectedPriceRange === "$1-99" && template.price > 0 && template.price < 100) ||
        (selectedPriceRange === "$100-149" && template.price >= 100 && template.price < 150) ||
        (selectedPriceRange === "$150+" && template.price >= 150)
      
      return matchesSearch && matchesCategory && matchesStyle && matchesDifficulty && matchesPriceRange
    })

    switch (sortBy) {
      case "popularity":
        return filtered.sort((a, b) => b.downloads - a.downloads)
      case "rating":
        return filtered.sort((a, b) => b.rating - a.rating)
      case "price-low":
        return filtered.sort((a, b) => a.price - b.price)
      case "price-high":
        return filtered.sort((a, b) => b.price - a.price)
      case "name":
        return filtered.sort((a, b) => a.name.localeCompare(b.name))
      case "newest":
        return filtered.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0))
      default:
        return filtered
    }
  }, [searchTerm, selectedCategory, selectedStyle, selectedDifficulty, selectedPriceRange, sortBy])

  const toggleFavorite = (templateId: string) => {
    setFavorites(prev => 
      prev.includes(templateId) 
        ? prev.filter(id => id !== templateId)
        : [...prev, templateId]
    )
  }

  const getColorClasses = (color: string) => {
    const colorMap: Record<string, string> = {
      purple: "from-purple-500 to-pink-500",
      orange: "from-orange-500 to-red-500",
      amber: "from-amber-500 to-yellow-500",
      slate: "from-slate-500 to-gray-500",
      blue: "from-blue-500 to-cyan-500",
      green: "from-green-500 to-emerald-500",
      teal: "from-teal-500 to-cyan-500",
      indigo: "from-indigo-500 to-purple-500",
      rose: "from-rose-500 to-pink-500",
      pink: "from-pink-500 to-rose-500",
      violet: "from-violet-500 to-purple-500",
    }
    return colorMap[color] || "from-gray-500 to-slate-500"
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />
      
      <div className="container mx-auto px-4 py-8 relative">
        <nav className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-500 rounded-xl flex items-center justify-center shadow-lg">
              <Palette className="w-6 h-6 text-white" />
            </div>
            <div>
              <span className="text-2xl font-bold bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                ShowCraft
              </span>
              <p className="text-xs text-slate-500 dark:text-slate-400 -mt-1">Design Templates</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white">
              Browse All
            </Button>
            <Button variant="ghost" size="sm" className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white">
              Designers
            </Button>
            <Button variant="ghost" size="sm" className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white">
              Support
            </Button>
            {mounted && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="w-9 h-9 p-0"
              >
                {theme === "dark" ? (
                  <Sun className="h-4 w-4" />
                ) : (
                  <Moon className="h-4 w-4" />
                )}
              </Button>
            )}
            <Button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-medium">
              <ShoppingCart className="w-4 h-4 mr-2" />
              Cart (0)
            </Button>
          </div>
        </nav>

        <div className="relative overflow-hidden bg-gradient-to-r from-pink-900 via-purple-900 to-indigo-900 rounded-3xl mb-12">
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
          <div className="relative px-8 py-16 text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4 mr-2 text-pink-300" />
              {showitTemplates.length}+ Premium Design Templates
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              Beautiful Website
              <span className="block bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
                Templates
              </span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8 leading-relaxed">
              Discover stunning, professionally designed templates for creatives, photographers, 
              and businesses. Each template is crafted with attention to detail and modern design principles.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100 font-semibold px-8">
                <Eye className="w-5 h-5 mr-2" />
                Browse Templates
              </Button>
              <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 font-semibold px-8">
                <Palette className="w-5 h-5 mr-2" />
                View Styles
              </Button>
            </div>
          </div>
        </div>

        <Card className="mb-8 border-0 shadow-lg bg-white/80 backdrop-blur-sm">
          <CardContent className="p-6">
            <div className="flex flex-col space-y-4">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5" />
                <Input
                  placeholder="Search templates, designers, or styles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-12 h-12 text-base border-slate-200 focus:border-pink-500 focus:ring-pink-500/20"
                />
              </div>
              
              <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
                <div className="flex gap-3 flex-wrap">
                  <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                    <SelectTrigger className="w-[180px] h-10 border-slate-200">
                      <SelectValue placeholder="All Categories" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="All">All Categories</SelectItem>
                      {categories.map(category => (
                        <SelectItem key={category} value={category}>
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  <Select value={selectedStyle} onValueChange={setSelectedStyle}>
                    <SelectTrigger className="w-[160px] h-10 border-slate-200">
                      <SelectValue placeholder="All Styles" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="All">All Styles</SelectItem>
                      {styles.map(style => (
                        <SelectItem key={style} value={style}>
                          {style}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  <Select value={selectedPriceRange} onValueChange={setSelectedPriceRange}>
                    <SelectTrigger className="w-[140px] h-10 border-slate-200">
                      <SelectValue placeholder="All Prices" />
                    </SelectTrigger>
                    <SelectContent>
                      {priceRanges.map(range => (
                        <SelectItem key={range} value={range}>
                          {range}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  <Select value={selectedDifficulty} onValueChange={setSelectedDifficulty}>
                    <SelectTrigger className="w-[130px] h-10 border-slate-200">
                      <SelectValue placeholder="All Levels" />
                    </SelectTrigger>
                    <SelectContent>
                      {difficulties.map(difficulty => (
                        <SelectItem key={difficulty} value={difficulty}>
                          {difficulty}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger className="w-[140px] h-10 border-slate-200">
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="popularity">Most Popular</SelectItem>
                      <SelectItem value="rating">Highest Rated</SelectItem>
                      <SelectItem value="price-low">Price: Low to High</SelectItem>
                      <SelectItem value="price-high">Price: High to Low</SelectItem>
                      <SelectItem value="name">Alphabetical</SelectItem>
                      <SelectItem value="newest">Recently Added</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-slate-600">View:</span>
                  <div className="flex border border-slate-200 rounded-lg p-1 bg-slate-50">
                    <Button
                      variant={viewMode === "grid" ? "default" : "ghost"}
                      size="sm"
                      onClick={() => setViewMode("grid")}
                      className="h-8 px-3"
                    >
                      <Grid3X3 className="h-4 w-4" />
                    </Button>
                    <Button
                      variant={viewMode === "list" ? "default" : "ghost"}
                      size="sm"
                      onClick={() => setViewMode("list")}
                      className="h-8 px-3"
                    >
                      <List className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div className="flex items-center gap-4">
            <p className="text-slate-600 font-medium">
              Showing <span className="font-bold text-slate-900">{filteredTemplates.length}</span> of{' '}
              <span className="font-bold text-slate-900">{showitTemplates.length}</span> templates
            </p>
            {(searchTerm || selectedCategory !== "All" || selectedStyle !== "All" || selectedDifficulty !== "All" || selectedPriceRange !== "All") && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => {
                  setSearchTerm("")
                  setSelectedCategory("All")
                  setSelectedStyle("All")
                  setSelectedDifficulty("All")
                  setSelectedPriceRange("All")
                }}
                className="text-slate-500 hover:text-slate-700"
              >
                Clear filters
              </Button>
            )}
          </div>
          
          {favorites.length > 0 && (
            <Badge variant="secondary" className="flex items-center gap-2 px-3 py-1.5 bg-pink-50 text-pink-700 border-pink-200">
              <Heart className="h-4 w-4 fill-current" />
              {favorites.length} favorite{favorites.length !== 1 ? 's' : ''}
            </Badge>
          )}
        </div>

        <div className={viewMode === "grid" 
          ? "grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8" 
          : "space-y-6"
        }>
          {filteredTemplates.map((template) => (
            <Card 
              key={template.id} 
              className={`group hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500 cursor-pointer border-0 bg-white/80 backdrop-blur-sm hover:-translate-y-1 ${
                viewMode === "list" ? "flex overflow-hidden" : "overflow-hidden"
              }`}
            >
              <div className={`relative overflow-hidden ${
                viewMode === "list" ? "w-64 flex-shrink-0" : "aspect-[4/3]"
              }`}>
                <div className={`absolute inset-0 bg-gradient-to-br ${getColorClasses(template.color)} opacity-10`} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-slate-700">
                    <div className="w-16 h-16 mx-auto mb-3 bg-white/90 rounded-2xl flex items-center justify-center shadow-lg">
                      <Monitor className="h-8 w-8 text-slate-600" />
                    </div>
                    <p className="text-sm font-semibold text-slate-800">{template.name}</p>
                    <p className="text-xs text-slate-600 mt-1">{template.category}</p>
                  </div>
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-3">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button size="sm" className="bg-white/90 text-slate-900 hover:bg-white shadow-lg backdrop-blur-sm">
                        <Eye className="h-4 w-4 mr-2" />
                        Preview
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-6xl h-[80vh]">
                      <DialogHeader>
                        <DialogTitle className="text-xl font-semibold">{template.name} - Live Preview</DialogTitle>
                        <DialogDescription className="text-slate-600">
                          {template.description}
                        </DialogDescription>
                      </DialogHeader>
                      <div className="flex-1 bg-white rounded-lg overflow-hidden border">
                        <iframe 
                          src={template.demoUrl}
                          className="w-full h-full border-0"
                          title={`${template.name} Preview`}
                        />
                      </div>
                    </DialogContent>
                  </Dialog>
                  
                  <Button size="sm" className="bg-white/90 text-slate-900 hover:bg-white shadow-lg backdrop-blur-sm" asChild>
                    <a href={template.demoUrl} target="_blank">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Open
                    </a>
                  </Button>
                </div>

                <Button
                  size="sm"
                  variant="ghost"
                  className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-white/90 hover:bg-white shadow-lg backdrop-blur-sm w-10 h-10 p-0"
                  onClick={(e) => {
                    e.stopPropagation()
                    toggleFavorite(template.id)
                  }}
                >
                  <Heart 
                    className={`h-4 w-4 transition-colors ${
                      favorites.includes(template.id) 
                        ? "fill-red-500 text-red-500" 
                        : "text-slate-600 hover:text-red-500"
                    }`} 
                  />
                </Button>

                <div className="absolute top-3 left-3 flex flex-col gap-2">
                  <Badge className="bg-white/90 text-slate-700 border-0 shadow-sm backdrop-blur-sm font-medium">
                    {template.category}
                  </Badge>
                  {template.mobileOptimized && (
                    <Badge variant="outline" className="bg-white/90 border-0 text-slate-600 shadow-sm backdrop-blur-sm">
                      <Smartphone className="h-3 w-3 mr-1" />
                      Mobile Ready
                    </Badge>
                  )}
                  {template.isPremium && (
                    <Badge variant="outline" className="bg-gradient-to-r from-pink-500 to-purple-600 text-white border-0 shadow-sm backdrop-blur-sm">
                      <Crown className="h-3 w-3 mr-1" />
                      Premium
                    </Badge>
                  )}
                </div>
              </div>

              <div className={`p-6 ${viewMode === "list" ? "flex-1" : ""}`}>
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-bold text-lg text-slate-900 group-hover:text-pink-600 transition-colors">
                        {template.name}
                      </h3>
                      {template.isNew && (
                        <Badge className="bg-green-100 text-green-700 text-xs">
                          <Sparkles className="w-3 h-3 mr-1" />
                          New
                        </Badge>
                      )}
                      {template.isBestseller && (
                        <Badge className="bg-amber-100 text-amber-700 text-xs">
                          <Crown className="w-3 h-3 mr-1" />
                          Bestseller
                        </Badge>
                      )}
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed mb-2">{template.description}</p>
                    <p className="text-xs text-slate-500">by {template.designer}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-slate-900">
                      ${template.price}
                    </div>
                    <p className="text-xs text-slate-500">{template.style}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {template.features.slice(0, 3).map((feature, index) => (
                    <Badge key={index} variant="outline" className="text-xs bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100 transition-colors">
                      {feature}
                    </Badge>
                  ))}
                  {template.features.length > 3 && (
                    <Badge variant="outline" className="text-xs bg-pink-50 text-pink-700 border-pink-200">
                      +{template.features.length - 3} more
                    </Badge>
                  )}
                </div>

                <div className="flex items-center justify-between text-sm mb-4">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1.5">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`h-3.5 w-3.5 ${
                              i < Math.floor(template.rating) 
                                ? "fill-yellow-400 text-yellow-400" 
                                : "text-slate-300"
                            }`} 
                          />
                        ))}
                      </div>
                      <span className="font-medium text-slate-700">{template.rating}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-slate-600">
                      <Users className="h-3.5 w-3.5" />
                      <span className="font-medium">{template.downloads.toLocaleString()}</span>
                    </div>
                  </div>
                  <Badge 
                    variant={template.difficulty === "Beginner" ? "default" : 
                            template.difficulty === "Intermediate" ? "secondary" : "destructive"}
                    className="text-xs font-medium"
                  >
                    {template.difficulty}
                  </Badge>
                </div>

                <div className="flex gap-3">
                  <Button className="flex-1 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-medium shadow-lg">
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Add to Cart
                  </Button>
                  <Button variant="outline" className="border-slate-200 hover:bg-slate-50">
                    <Share2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {filteredTemplates.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 mx-auto mb-6 bg-slate-100 rounded-full flex items-center justify-center">
              <Search className="h-10 w-10 text-slate-400" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3">No templates found</h3>
            <p className="text-slate-600 mb-6 max-w-md mx-auto">
              We couldn't find any templates matching your search criteria. 
              Try adjusting your filters or search terms.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button 
                variant="outline" 
                onClick={() => {
                  setSearchTerm("")
                  setSelectedCategory("All")
                  setSelectedStyle("All")
                  setSelectedDifficulty("All")
                  setSelectedPriceRange("All")
                }}
                className="font-medium"
              >
                Clear All Filters
              </Button>
              <Button className="font-medium">
                Browse All Templates
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}