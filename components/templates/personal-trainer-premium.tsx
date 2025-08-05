"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

export default function PersonalTrainerPremium() {
  const [activeWorkout, setActiveWorkout] = useState(0)
  const [bmi, setBmi] = useState({ weight: "", height: "", result: null })

  const workouts = [
    {
      name: "HIIT Cardio Blast",
      duration: "30 min",
      calories: "400-500",
      difficulty: "High",
      equipment: "Bodyweight",
      preview: "Explosive movements designed to torch calories and boost metabolism"
    },
    {
      name: "Strength Foundation",
      duration: "45 min", 
      calories: "300-400",
      difficulty: "Medium",
      equipment: "Dumbbells",
      preview: "Build lean muscle and increase functional strength"
    },
    {
      name: "Core Power",
      duration: "20 min",
      calories: "200-300", 
      difficulty: "Medium",
      equipment: "Mat",
      preview: "Sculpt your core and improve stability"
    }
  ]

  const calculateBMI = () => {
    if (bmi.weight && bmi.height) {
      const heightInM = parseFloat(bmi.height) / 100
      const result = (parseFloat(bmi.weight) / (heightInM * heightInM)).toFixed(1)
      setBmi(prev => ({ ...prev, result: parseFloat(result) }))
    }
  }

  return (
    <div className="bg-gradient-to-br from-orange-900 via-red-900 to-orange-800 min-h-full relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-orange-100/10 opacity-20"></div>
        <div className="absolute top-20 right-10 w-96 h-96 bg-orange-400/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-red-400/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
      </div>

      {/* Header */}
      <header className="fixed top-0 w-full z-50 backdrop-blur-md bg-black/20 border-b border-white/10">
        <div className="container mx-auto px-6 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center transform rotate-45">
                <div className="transform -rotate-45">
                  <span className="text-white font-bold text-xl">💪</span>
                </div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">FitMax Pro</div>
                <div className="text-xs text-orange-300">Elite Training Studio</div>
              </div>
            </div>
            
            <div className="hidden md:flex space-x-8">
              {["Programs", "Nutrition", "Results", "About"].map((item) => (
                <a 
                  key={item}
                  href="#" 
                  className="text-white/90 hover:text-orange-300 font-semibold transition-all duration-300 relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-red-400 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>

            <Button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 font-bold">
              FREE TRIAL
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="inline-flex items-center bg-gradient-to-r from-orange-500/20 to-red-500/20 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-orange-400/30">
                <div className="w-3 h-3 bg-green-400 rounded-full mr-3 animate-pulse"></div>
                <span className="text-sm font-bold">NOW ACCEPTING NEW MEMBERS</span>
              </div>
              
              <h1 className="text-6xl md:text-7xl font-black mb-6 leading-tight">
                TRANSFORM
                <span className="block bg-gradient-to-r from-orange-300 to-red-300 bg-clip-text text-transparent">
                  YOUR BODY
                </span>
              </h1>
              
              <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-lg font-medium">
                Unlock your genetic potential with science-based training, personalized nutrition, and unwavering support. Results guaranteed.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Button size="lg" className="bg-white text-orange-900 hover:bg-orange-50 px-8 py-4 text-lg font-bold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                  START FREE TRIAL
                  <span className="ml-2">🔥</span>
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-orange-900 px-8 py-4 text-lg font-bold transition-all duration-300">
                  VIEW TRANSFORMATIONS
                  <span className="ml-2">📈</span>
                </Button>
              </div>

              {/* Live Stats */}
              <div className="grid grid-cols-3 gap-6 bg-black/30 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <div className="text-center">
                  <div className="text-3xl font-black text-orange-300 mb-1">2,500+</div>
                  <div className="text-white/70 text-sm font-semibold">TRANSFORMATIONS</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-black text-red-300 mb-1">98%</div>
                  <div className="text-white/70 text-sm font-semibold">SUCCESS RATE</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-black text-orange-300 mb-1">24/7</div>
                  <div className="text-white/70 text-sm font-semibold">SUPPORT</div>
                </div>
              </div>
            </div>

            {/* Interactive Fitness Calculator */}
            <div className="relative">
              <div className="bg-black/40 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl">
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold text-white mb-2">BMI Calculator</h3>
                  <p className="text-white/80">Check your fitness starting point</p>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-white font-semibold mb-2">Weight (kg)</label>
                    <input
                      type="number"
                      value={bmi.weight}
                      onChange={(e) => setBmi(prev => ({ ...prev, weight: e.target.value }))}
                      className="w-full p-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-white/50 focus:border-orange-400 focus:outline-none"
                      placeholder="Enter your weight"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-white font-semibold mb-2">Height (cm)</label>
                    <input
                      type="number"
                      value={bmi.height}
                      onChange={(e) => setBmi(prev => ({ ...prev, height: e.target.value }))}
                      className="w-full p-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-white/50 focus:border-orange-400 focus:outline-none"
                      placeholder="Enter your height"
                    />
                  </div>
                  
                  <Button 
                    onClick={calculateBMI}
                    className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white py-4 text-lg font-bold"
                  >
                    Calculate BMI
                  </Button>
                  
                  {bmi.result && (
                    <div className="bg-white/10 rounded-lg p-6 text-center">
                      <div className="text-4xl font-black text-orange-300 mb-2">{bmi.result}</div>
                      <div className="text-white font-semibold">
                        {bmi.result < 18.5 ? 'Underweight' : 
                         bmi.result < 25 ? 'Normal' : 
                         bmi.result < 30 ? 'Overweight' : 'Obese'}
                      </div>
                      <Button className="mt-4 bg-white text-orange-900 hover:bg-orange-50 font-bold">
                        Get Personalized Plan
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Workout Previews */}
      <section className="py-20 px-6 bg-black/50 backdrop-blur-sm">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-orange-500/20 text-orange-300 px-6 py-2 text-lg font-bold mb-6 border border-orange-400/30">
              WORKOUT PROGRAMS
            </Badge>
            <h2 className="text-5xl font-black text-white mb-6">CHOOSE YOUR CHALLENGE</h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto font-medium">
              Science-backed workouts designed to maximize results in minimum time
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            {/* Workout Selector */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {workouts.map((workout, index) => (
                <button
                  key={index}
                  onClick={() => setActiveWorkout(index)}
                  className={`px-6 py-3 rounded-full font-bold transition-all duration-300 ${
                    activeWorkout === index
                      ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg'
                      : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white'
                  }`}
                >
                  {workout.name}
                </button>
              ))}
            </div>

            {/* Active Workout Display */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 backdrop-blur-sm rounded-3xl p-8 border border-orange-400/30">
                <div className="text-center mb-8">
                  <h3 className="text-4xl font-black text-white mb-4">{workouts[activeWorkout].name}</h3>
                  <p className="text-xl text-white/90 font-medium">{workouts[activeWorkout].preview}</p>
                </div>
                
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="text-center">
                    <div className="text-3xl font-black text-orange-300 mb-1">{workouts[activeWorkout].duration}</div>
                    <div className="text-white/70 font-semibold">DURATION</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-black text-red-300 mb-1">{workouts[activeWorkout].calories}</div>
                    <div className="text-white/70 font-semibold">CALORIES</div>
                  </div>
                </div>
                
                <div className="flex justify-between items-center mb-8">
                  <div>
                    <span className="text-white/70 font-semibold">Difficulty: </span>
                    <Badge className={`${
                      workouts[activeWorkout].difficulty === 'High' ? 'bg-red-500' :
                      workouts[activeWorkout].difficulty === 'Medium' ? 'bg-orange-500' : 'bg-green-500'
                    } text-white font-bold`}>
                      {workouts[activeWorkout].difficulty}
                    </Badge>
                  </div>
                  <div>
                    <span className="text-white/70 font-semibold">Equipment: </span>
                    <span className="text-white font-bold">{workouts[activeWorkout].equipment}</span>
                  </div>
                </div>
                
                <Button className="w-full bg-white text-orange-900 hover:bg-orange-50 py-4 text-lg font-black shadow-lg hover:shadow-xl transition-all duration-300">
                  START WORKOUT NOW
                </Button>
              </div>
              
              {/* Workout Visualization */}
              <div className="space-y-6">
                <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                  <h4 className="text-xl font-bold text-white mb-4">Today's Progress</h4>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-white/80 mb-2">
                        <span>Calories Burned</span>
                        <span>320/500</span>
                      </div>
                      <Progress value={64} className="h-3 bg-white/20" />
                    </div>
                    <div>
                      <div className="flex justify-between text-white/80 mb-2">
                        <span>Workout Time</span>
                        <span>25/45 min</span>
                      </div>
                      <Progress value={56} className="h-3 bg-white/20" />
                    </div>
                    <div>
                      <div className="flex justify-between text-white/80 mb-2">
                        <span>Weekly Goal</span>
                        <span>4/5 days</span>
                      </div>
                      <Progress value={80} className="h-3 bg-white/20" />
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 backdrop-blur-sm rounded-2xl p-6 border border-green-400/30">
                  <h4 className="text-xl font-bold text-white mb-4">This Week's Achievements</h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm">✓</span>
                      </div>
                      <span className="text-white font-medium">Completed 4 HIIT sessions</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm">✓</span>
                      </div>
                      <span className="text-white font-medium">Burned 2,100 calories</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm">✓</span>
                      </div>
                      <span className="text-white font-medium">New personal record!</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Training Programs */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-gray-900 mb-6">TRAINING PROGRAMS</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-medium">
              Choose the program that matches your goals and fitness level
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                name: "BEAST MODE",
                subtitle: "Advanced Strength & Power",
                price: "$197",
                duration: "12 weeks",
                description: "Elite program for serious athletes ready to push beyond limits",
                features: [
                  "6 days/week intensive training",
                  "Olympic lifting techniques", 
                  "Advanced periodization",
                  "Competition preparation",
                  "1-on-1 form analysis",
                  "Supplement protocol"
                ],
                popular: true,
                color: "from-red-600 to-orange-600",
                icon: "🔥"
              },
              {
                name: "TRANSFORMATION",
                subtitle: "Complete Body Recomposition", 
                price: "$147",
                duration: "16 weeks",
                description: "Perfect balance of muscle building and fat loss for total transformation",
                features: [
                  "4-5 days/week training",
                  "Metabolic conditioning",
                  "Body composition tracking",
                  "Nutrition coaching included",
                  "Progress photo analysis",
                  "Lifestyle optimization"
                ],
                popular: false,
                color: "from-orange-600 to-yellow-600",
                icon: "⚡"
              },
              {
                name: "FOUNDATION",
                subtitle: "Build Your Base",
                price: "$97", 
                duration: "8 weeks",
                description: "Perfect starting point for beginners or those returning to fitness",
                features: [
                  "3 days/week structured plan",
                  "Movement pattern mastery",
                  "Injury prevention focus",
                  "Basic nutrition guidance",
                  "Form video tutorials",
                  "Community support"
                ],
                popular: false,
                color: "from-blue-600 to-cyan-600",
                icon: "💪"
              }
            ].map((program, index) => (
              <Card key={index} className={`relative overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 ${program.popular ? 'ring-4 ring-red-500 scale-105' : ''}`}>
                {program.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-6 py-2 text-sm font-black animate-pulse">
                      MOST POPULAR
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center pb-4 bg-gradient-to-br from-gray-50 to-gray-100">
                  <div className="text-6xl mb-4">{program.icon}</div>
                  <CardTitle className="text-3xl font-black mb-2 text-gray-900">{program.name}</CardTitle>
                  <p className="text-lg text-gray-600 font-semibold mb-4">{program.subtitle}</p>
                  <div className="mb-4">
                    <span className="text-5xl font-black text-gray-900">{program.price}</span>
                    <span className="text-gray-600 ml-2 font-semibold">/ {program.duration}</span>
                  </div>
                  <p className="text-gray-700 font-medium">{program.description}</p>
                </CardHeader>
                
                <CardContent className="space-y-6 p-8">
                  <ul className="space-y-4">
                    {program.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
                          <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-gray-700 leading-relaxed font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button className={`w-full py-4 text-lg font-black transition-all duration-300 transform hover:scale-105 ${
                    program.popular 
                      ? `bg-gradient-to-r ${program.color} text-white shadow-lg hover:shadow-xl` 
                      : 'bg-gray-900 text-white hover:bg-gray-800'
                  }`}>
                    {program.popular ? 'START TRANSFORMATION' : 'GET STARTED'}
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
