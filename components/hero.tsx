"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Play, Pause, Volume2, Maximize } from "lucide-react"
import Image from "next/image"

export function Hero() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const totalTime = 180 // 3 minutes demo reel

  useEffect(() => {
    let interval: NodeJS.Timeout
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentTime((prev) => (prev < totalTime ? prev + 1 : 0))
      }, 1000)
    }
    return () => clearInterval(interval)
  }, [isPlaying, totalTime])

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, "0")}`
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background Video Effect */}
      <div className="absolute inset-0 film-grain">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 via-transparent to-purple-600/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_100%)]" />
      </div>

      {/* Floating Elements - Responsive */}
      <div className="absolute top-16 sm:top-20 left-2 sm:left-4 lg:left-10 w-1 sm:w-2 h-8 sm:h-12 lg:h-20 bg-gradient-to-b from-orange-500 to-transparent opacity-60" />
      <div className="absolute bottom-24 sm:bottom-32 right-4 sm:right-8 lg:right-16 w-4 sm:w-8 lg:w-16 h-1 sm:h-2 bg-gradient-to-r from-purple-500 to-transparent opacity-40" />
      <div className="absolute top-1/4 sm:top-1/3 right-4 sm:right-8 lg:right-20 w-0.5 sm:w-1 h-8 sm:h-16 lg:h-32 bg-gradient-to-b from-yellow-400 to-transparent opacity-30" />

      <div className="container mx-auto px-3 sm:px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16 items-center min-h-screen lg:min-h-0 py-20 lg:py-0">
          {/* Text Content */}
          <div className="space-y-4 sm:space-y-6 lg:space-y-8 text-center lg:text-left order-2 lg:order-1">
            <div className="space-y-3 sm:space-y-4 lg:space-y-6">
              <div className="flex items-center gap-2 sm:gap-3 text-orange-400 font-mono text-xs sm:text-sm justify-center lg:justify-start">
                <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-red-500 rounded-full animate-pulse" />
                <span className="tracking-wider">REC • LIVE</span>
              </div>

              <h1 className="font-black leading-tight">
                <div className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
                  <span className="text-white block">EDITING </span>
                  <span className="gradient-text block">VISUALS INTO </span>
                  <span className="text-gray-100 block">EMOTION</span>
                </div>
              </h1>

              <p className="text-sm sm:text-base lg:text-xl text-gray-300 max-w-lg leading-relaxed mx-auto lg:mx-0 px-4 lg:px-0">
Skilled in crafting seamless visual narratives that not only look stunning—but tell your story with power.

              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start px-4 lg:px-0">
              <Button
                size="lg"
                className="bg-orange-500 hover:bg-orange-600 text-black font-bold px-6 sm:px-8 py-3 sm:py-4 neon-glow text-sm sm:text-base w-full sm:w-auto"
                onClick={() => scrollToSection("work")}
              >
                VIEW SHOWREEL
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-gray-600 text-white hover:bg-gray-800 px-6 sm:px-8 py-3 sm:py-4 bg-transparent text-sm sm:text-base w-full sm:w-auto"
                onClick={() => scrollToSection("work")}
              >
                EXPLORE WORK
              </Button>
            </div>

            {/* Stats - Mobile Optimized */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4 lg:gap-8 pt-4 sm:pt-6 lg:pt-8 border-t border-gray-800 mx-4 lg:mx-0">
              <div className="text-center">
                <div className="text-lg sm:text-2xl lg:text-3xl font-bold gradient-text">2+</div>
                <div className="text-xs sm:text-sm text-gray-400 uppercase tracking-wider leading-tight">
                  Years
                  <br className="sm:hidden" />
                  <span className="hidden sm:inline"> </span>Experience
                </div>
              </div>
              <div className="text-center">
                <div className="text-lg sm:text-2xl lg:text-3xl font-bold gradient-text">300+</div>
                <div className="text-xs sm:text-sm text-gray-400 uppercase tracking-wider leading-tight">
                  Projects
                  <br className="sm:hidden" />
                  <span className="hidden sm:inline"> </span>Completed
                </div>
              </div>
              <div className="text-center">
                <div className="text-lg sm:text-2xl lg:text-3xl font-bold gradient-text">5+</div>
                <div className="text-xs sm:text-sm text-gray-400 uppercase tracking-wider leading-tight">
                  Awards
                  <br className="sm:hidden" />
                  <span className="hidden sm:inline"> </span>Won
                </div>
              </div>
            </div>
          </div>

          {/* Video Player Mockup - Mobile Optimized */}
          <div className="relative order-1 lg:order-2 w-full max-w-lg mx-auto lg:max-w-none">
            <div className="bg-gray-900 rounded-lg sm:rounded-xl lg:rounded-2xl p-2 sm:p-3 lg:p-4 shadow-2xl border border-gray-700">
              {/* Video Player Header */}
              <div className="flex items-center justify-between mb-2 sm:mb-3 lg:mb-4 text-xs text-gray-400">
                <div className="flex items-center gap-1 sm:gap-2">
                  <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 lg:w-3 lg:h-3 bg-red-500 rounded-full" />
                  <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 lg:w-3 lg:h-3 bg-yellow-500 rounded-full" />
                  <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 lg:w-3 lg:h-3 bg-green-500 rounded-full" />
                </div>
                <span className="font-mono hidden sm:inline text-xs lg:text-sm">SHOWREEL_2024.mp4</span>
                <Maximize className="w-3 h-3 sm:w-4 sm:h-4" />
              </div>

              {/* Video Display */}
              <div className="aspect-video bg-black rounded-md sm:rounded-lg relative overflow-hidden mb-2 sm:mb-3 lg:mb-4">
                {/* Owner Image */}
                <div className="relative w-full h-full">
                  <Image
                    src="/owner-showreel.jpg"
                    alt="Alex Chen Video Editor Showreel"
                    fill
                    className="object-cover"
                    priority
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.src = "/placeholder.svg?height=400&width=600&text=Alex+Chen+Showreel"
                    }}
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

             

                {/* Overlay Info */}
                <div className="absolute bottom-2 sm:bottom-3 lg:bottom-4 left-2 sm:left-3 lg:left-4 text-white">
                  <div className="text-xs sm:text-sm font-semibold">Youssef Ismail</div>
                  <div className="text-xs text-gray-300 hidden sm:block">Creative Video Editor</div>
                </div>
              </div>

              {/* Video Controls */}
              <div className="space-y-1.5 sm:space-y-2 lg:space-y-3">
                <div className="flex items-center gap-2 sm:gap-3">
                  <Button
                    size="icon"
                    variant="ghost"
                    className="h-6 w-6 sm:h-8 sm:w-8 text-gray-400 hover:text-white"
                    onClick={() => setIsPlaying(!isPlaying)}
                  >
                    {isPlaying ? (
                      <Pause className="h-3 w-3 sm:h-4 sm:w-4" />
                    ) : (
                      <Play className="h-3 w-3 sm:h-4 sm:w-4" />
                    )}
                  </Button>

                  <div className="flex-1 bg-gray-800 rounded-full h-1.5 sm:h-2 relative">
                    <div
                      className="bg-orange-500 h-1.5 sm:h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${(currentTime / totalTime) * 100}%` }}
                    />
                  </div>

                  <Volume2 className="h-3 w-3 sm:h-4 sm:w-4 text-gray-400" />
                  <span className="text-xs text-gray-400 font-mono hidden sm:inline">
                    {formatTime(currentTime)} / {formatTime(totalTime)}
                  </span>
                </div>

                {/* Timeline Markers */}
                <div className="flex justify-between text-xs text-gray-500 font-mono">
                  <span>00:00</span>
                  <span className="hidden sm:inline">01:30</span>
                  <span>03:00</span>
                </div>
              </div>
            </div>

            {/* Floating UI Elements - Mobile Responsive */}
            <div className="absolute -top-1 sm:-top-2 lg:-top-4 -right-1 sm:-right-2 lg:-right-4 bg-orange-500 text-black px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs sm:text-sm font-bold">
              4K HDR
            </div>
            <div className="absolute -bottom-1 sm:-bottom-2 lg:-bottom-4 -left-1 sm:-left-2 lg:-left-4 bg-purple-600 text-white px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs sm:text-sm font-bold">
              CINEMA GRADE
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 animate-bounce">
        <div className="w-5 sm:w-6 h-8 sm:h-10 border-2 border-gray-600 rounded-full flex justify-center">
          <div className="w-1 h-2 sm:h-3 bg-orange-500 rounded-full mt-1.5 sm:mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  )
}
