"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function AuthorPremium() {
  const [activeBook, setActiveBook] = useState(0)
  const [readingProgress, setReadingProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setReadingProgress(prev => (prev + 1) % 101)
    }, 100)
    return () => clearInterval(interval)
  }, [])

  const books = [
    {
      title: "The Midnight Library",
      year: "2024",
      genre: "Literary Fiction",
      pages: 342,
      rating: 4.8,
      reviews: 12847,
      description: "A profound exploration of life's infinite possibilities, where every choice creates a new reality.",
      excerpt: "Between life and death there is a library, and within that library, the shelves go on forever. Every book provides a chance to try another life you could have lived...",
      awards: ["New York Times Bestseller", "Goodreads Choice Award", "Book of the Year"],
      cover: "bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900"
    },
    {
      title: "Echoes of Tomorrow",
      year: "2023", 
      genre: "Science Fiction",
      pages: 428,
      rating: 4.6,
      reviews: 8934,
      description: "A gripping tale of humanity's future where technology and consciousness merge in unexpected ways.",
      excerpt: "The future whispered to her through quantum frequencies, each echo carrying the weight of choices yet unmade...",
      awards: ["Hugo Award Nominee", "Nebula Award Winner", "Critics' Choice"],
      cover: "bg-gradient-to-br from-cyan-900 via-blue-900 to-indigo-900"
    },
    {
      title: "The Art of Letting Go",
      year: "2022",
      genre: "Contemporary Fiction", 
      pages: 298,
      rating: 4.9,
      reviews: 15632,
      description: "An intimate journey through loss, healing, and the courage to love again.",
      excerpt: "She learned that letting go wasn't about forgetting, but about making peace with the memories that shaped her...",
      awards: ["Pulitzer Prize Finalist", "National Book Award", "Oprah's Book Club"],
      cover: "bg-gradient-to-br from-rose-900 via-pink-900 to-orange-900"
    }
  ]

  return (
    <div className="bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 min-h-full relative">
      {/* Elegant Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-0 w-full h-full bg-amber-100/20"></div>
        </div>
        <div className="absolute top-20 right-20 w-96 h-96 bg-amber-200/30 rounded-full mix-blend-multiply filter blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-orange-200/30 rounded-full mix-blend-multiply filter blur-3xl animate-float-delayed"></div>
      </div>

        {/* Sophisticated Header */}
      <header className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/80 border-b border-amber-200/50 shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-600 to-orange-600 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white font-serif text-xl">E</span>
              </div>
              <div>
                <div className="text-2xl font-serif font-bold text-amber-900">Emma Rodriguez</div>
                <div className="text-sm text-amber-700 font-medium">Bestselling Author</div>
              </div>
            </div>
            
            <div className="hidden md:flex space-x-8">
              {["Books", "About", "Events", "Blog", "Contact"].map((item) => (
                <a 
                  key={item}
                  href="#" 
                  className="text-amber-800 hover:text-amber-600 font-medium transition-all duration-300 relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-600 to-orange-600 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>

            <Button className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 font-medium">
              Newsletter
            </Button>
          </nav>
        </div>
      </header>

      {/* Literary Hero Section */}
      <section className="pt-32 pb-20 px-6 relative">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center bg-amber-100 rounded-full px-6 py-3 mb-8 border border-amber-200">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-3 animate-pulse"></div>
                <span className="text-amber-800 font-semibold text-sm">New Book Available Now</span>
              </div>
              
              <h1 className="text-6xl md:text-7xl font-serif font-bold mb-6 leading-tight text-amber-900">
                Stories That
                <span className="block bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                  Touch Souls
                </span>
              </h1>
              
              <p className="text-xl text-amber-800 mb-8 leading-relaxed font-medium">
                Award-winning author crafting profound narratives that explore the depths of human experience, love, and resilience. Join millions of readers worldwide.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                {["New York Times Bestseller", "Pulitzer Finalist", "3M+ Books Sold"].map((achievement, index) => (
                  <Badge key={index} className="bg-amber-200 text-amber-800 px-4 py-2 font-semibold border border-amber-300">
                    {achievement}
                  </Badge>
                ))}
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                  Explore Books
                  <span className="ml-2">📚</span>
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-amber-600 text-amber-600 hover:bg-amber-50 px-8 py-4 text-lg font-semibold transition-all duration-300">
                  Read Sample
                  <span className="ml-2">👁️</span>
                </Button>
              </div>

              {/* Reading Stats */}
              <div className="grid grid-cols-3 gap-6 bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-amber-200/50 shadow-lg">
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-800 mb-1">3.2M+</div>
                  <div className="text-amber-700 text-sm font-medium">Readers Worldwide</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-800 mb-1">15</div>
                  <div className="text-amber-700 text-sm font-medium">Published Books</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-800 mb-1">4.8★</div>
                  <div className="text-amber-700 text-sm font-medium">Average Rating</div>
                </div>
              </div>
            </div>

            {/* Interactive Book Display */}
            <div className="relative">
              <div className="bg-white/70 backdrop-blur-lg rounded-3xl p-8 border border-amber-200/50 shadow-2xl">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-serif font-bold text-amber-900 mb-2">Currently Reading</h3>
                  <p className="text-amber-700">Join thousands of readers</p>
                </div>
                
                <div className="relative mb-8">
                  <div className="w-48 h-72 mx-auto bg-gradient-to-br from-amber-800 via-orange-800 to-red-800 rounded-lg shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                    <div className="absolute inset-4 bg-white/10 rounded border border-white/20 flex flex-col justify-between p-4">
                      <div>
                        <div className="text-white/90 font-serif text-lg font-bold mb-2">The Midnight Library</div>
                        <div className="text-white/70 text-sm">Emma Rodriguez</div>
                      </div>
                      <div className="text-white/60 text-xs">
                        "A masterpiece of imagination and heart"
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-amber-800 mb-2 font-medium">
                      <span>Reading Progress</span>
                      <span>{readingProgress}%</span>
                    </div>
                    <div className="w-full bg-amber-200 rounded-full h-3">
                      <div 
                        className="bg-gradient-to-r from-amber-600 to-orange-600 h-3 rounded-full transition-all duration-300"
                        style={{width: `${readingProgress}%`}}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="bg-amber-50 rounded-lg p-4 border border-amber-200">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-amber-800 font-semibold">Reader Reviews</span>
                      <div className="flex text-yellow-500">
                        {"★".repeat(5)}
                      </div>
                    </div>
                    <p className="text-amber-700 text-sm italic">
                      "This book changed my perspective on life. Emma's writing is pure magic."
                    </p>
                    <p className="text-amber-600 text-xs mt-2">- Sarah M., Verified Reader</p>
                  </div>
                  
                  <Button className="w-full bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white py-3 font-semibold">
                    Start Reading Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Book Showcase */}
      <section className="py-20 px-6 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-serif font-bold text-amber-900 mb-6">Literary Collection</h2>
            <p className="text-xl text-amber-800 max-w-3xl mx-auto font-medium">
              Explore award-winning novels that have touched millions of hearts worldwide
            </p>
          </div>
          
          <div className="max-w-7xl mx-auto">
            {/* Book Navigation */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {books.map((book, index) => (
                <button
                  key={index}
                  onClick={() => setActiveBook(index)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    activeBook === index
                      ? 'bg-gradient-to-r from-amber-600 to-orange-600 text-white shadow-lg'
                      : 'bg-white/70 text-amber-800 hover:bg-white hover:shadow-md border border-amber-200'
                  }`}
                >
                  {book.title}
                </button>
              ))}
            </div>

            {/* Active Book Display */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <div className={`w-80 h-96 mx-auto ${books[activeBook].cover} rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-500 relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute inset-6 border border-white/20 rounded-xl flex flex-col justify-between p-6">
                    <div>
                      <h3 className="text-white font-serif text-2xl font-bold mb-2">{books[activeBook].title}</h3>
                      <p className="text-white/90 font-medium">{books[activeBook].genre}</p>
                      <p className="text-white/70 text-sm">{books[activeBook].year}</p>
                    </div>
                    <div className="text-white/80 text-sm">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="flex text-yellow-400">
                          {"★".repeat(Math.floor(books[activeBook].rating))}
                        </div>
                        <span>{books[activeBook].rating}</span>
                      </div>
                      <p>{books[activeBook].reviews.toLocaleString()} reviews</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-4xl font-serif font-bold text-amber-900 mb-4">{books[activeBook].title}</h3>
                  <p className="text-xl text-amber-800 mb-6 leading-relaxed">{books[activeBook].description}</p>
                  
                  <div className="bg-amber-50 border-l-4 border-amber-600 p-6 rounded-r-lg mb-6">
                    <p className="text-amber-800 italic font-medium leading-relaxed">
                      "{books[activeBook].excerpt}"
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-6 mb-6">
                    <div className="text-center bg-white/70 rounded-lg p-4 border border-amber-200">
                      <div className="text-2xl font-bold text-amber-800 mb-1">{books[activeBook].pages}</div>
                      <div className="text-amber-700 text-sm font-medium">Pages</div>
                    </div>
                    <div className="text-center bg-white/70 rounded-lg p-4 border border-amber-200">
                      <div className="text-2xl font-bold text-amber-800 mb-1">{books[activeBook].rating}★</div>
                      <div className="text-amber-700 text-sm font-medium">Rating</div>
                    </div>
                  </div>
                  
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-amber-900 mb-4">Awards & Recognition</h4>
                    <div className="flex flex-wrap gap-2">
                      {books[activeBook].awards.map((award, index) => (
                        <Badge key={index} className="bg-gradient-to-r from-amber-100 to-orange-100 text-amber-800 border border-amber-300 font-medium">
                          🏆 {award}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white px-8 py-3 font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                      Buy Now - $24.99
                    </Button>
                    <Button variant="outline" className="border-2 border-amber-600 text-amber-600 hover:bg-amber-50 px-8 py-3 font-semibold transition-all duration-300">
                      Read Sample
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Author's Journey */}
      <section className="py-20 px-6 bg-gradient-to-r from-amber-100 to-orange-100">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-serif font-bold text-amber-900 mb-6">The Author's Journey</h2>
            <p className="text-xl text-amber-800 max-w-2xl mx-auto">
              From small-town dreamer to internationally acclaimed author
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-amber-200/50 shadow-lg">
                <h3 className="text-2xl font-serif font-bold text-amber-900 mb-4">About Emma</h3>
                <p className="text-amber-800 leading-relaxed mb-6 font-medium">
                  Emma Rodriguez began her writing journey in a small café in Barcelona, where she penned her first novel on napkins. Today, her works have been translated into 47 languages and have sold over 3 million copies worldwide.
                </p>
                <p className="text-amber-800 leading-relaxed font-medium">
                  Her unique ability to weave profound philosophical questions into compelling narratives has earned her critical acclaim and a devoted global readership.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white/70 rounded-lg p-6 text-center border border-amber-200">
                  <div className="text-3xl font-bold text-amber-800 mb-2">15</div>
                  <div className="text-amber-700 font-medium">Published Books</div>
                </div>
                <div className="bg-white/70 rounded-lg p-6 text-center border border-amber-200">
                  <div className="text-3xl font-bold text-amber-800 mb-2">47</div>
                  <div className="text-amber-700 font-medium">Languages</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-amber-200/50 shadow-lg">
              <h3 className="text-2xl font-serif font-bold text-amber-900 mb-6">Connect With Emma</h3>
              <form className="space-y-6">
                <div>
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full p-4 bg-white/70 border border-amber-300 rounded-lg text-amber-900 placeholder:text-amber-600 focus:border-amber-500 focus:outline-none font-medium"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Share your thoughts about Emma's books..."
                    rows={4}
                    className="w-full p-4 bg-white/70 border border-amber-300 rounded-lg text-amber-900 placeholder:text-amber-600 focus:border-amber-500 focus:outline-none resize-none font-medium"
                  />
                </div>
                <Button className="w-full bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                  Join the Literary Community
                </Button>
              </form>
              
              <div className="mt-8 text-center">
                <p className="text-amber-700 font-medium mb-4">Follow Emma's Literary Journey</p>
                <div className="flex justify-center space-x-4">
                  {["Instagram", "Twitter", "Goodreads", "Newsletter"].map((platform) => (
                    <a key={platform} href="#" className="w-12 h-12 bg-amber-200 hover:bg-amber-300 rounded-full flex items-center justify-center transition-colors duration-300">
                      <span className="text-amber-800 font-bold text-sm">{platform[0]}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
