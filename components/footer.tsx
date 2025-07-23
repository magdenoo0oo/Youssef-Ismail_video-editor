"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Youtube, Instagram, Twitter, Linkedin, Play, Mail, Phone, Heart, Coffee } from "lucide-react"

export function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="bg-gray-950 border-t border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="md:col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Play className="h-5 w-5 text-white" />
              </div>
              <span className="text-3xl font-black gradient-text"> Youssef Ismail</span>
            </div>
            <p className="text-gray-400 text-lg max-w-md leading-relaxed">
         Skilled in crafting seamless visual narratives that not only look stunning—but tell your story with power.
            </p>
            <div className="flex space-x-4">
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-red-600/20 text-red-500 hover:text-red-400 transition-all duration-300 hover:scale-110"
                onClick={() => window.open("https://youtube.com", "_blank")}
              >
                <Youtube className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-pink-600/20 text-pink-500 hover:text-pink-400 transition-all duration-300 hover:scale-110"
                onClick={() => window.open("https://instagram.com", "_blank")}
              >
                <Instagram className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-blue-500/20 text-blue-400 hover:text-blue-300 transition-all duration-300 hover:scale-110"
                onClick={() => window.open("https://twitter.com", "_blank")}
              >
                <Twitter className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-blue-700/20 text-blue-600 hover:text-blue-500 transition-all duration-300 hover:scale-110"
                onClick={() => window.open("https://linkedin.com", "_blank")}
              >
                <Linkedin className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <div>
            <h4 className="font-black text-white mb-6 uppercase tracking-wider">Services</h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="hover:text-orange-400 transition-colors text-left"
                >
                  Cinematic Editing
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="hover:text-orange-400 transition-colors text-left"
                >
                  Color Grading
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="hover:text-orange-400 transition-colors text-left"
                >
                  Audio Post-Production
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="hover:text-orange-400 transition-colors text-left"
                >
                  Motion Graphics
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="hover:text-orange-400 transition-colors text-left"
                >
                  Visual Effects
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-black text-white mb-6 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <button
                  onClick={() => scrollToSection("work")}
                  className="hover:text-orange-400 transition-colors text-left"
                >
                  Featured Work
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="hover:text-orange-400 transition-colors text-left"
                >
                  About Alex
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="hover:text-orange-400 transition-colors text-left"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="hover:text-orange-400 transition-colors text-left"
                >
                  Contact
                </button>
              </li>
              <li>
                <Link href="/projects" className="hover:text-orange-400 transition-colors">
                  All Projects
                </Link>
              </li>
            </ul>
          </div>
        </div>

 <div className="border-t border-gray-800 mt-12 pt-8">
  <div className="flex flex-col md:flex-row justify-between items-center gap-4">
    <div className="text-gray-400 text-sm flex items-center gap-2">
      <span>Crafted with</span>
      <Heart className="h-4 w-4 text-pink-500 animate-pulse" />
      <span>&</span>
      <Coffee className="h-4 w-4 text-amber-500" />
      <span>by</span>
      <span className="text-white font-semibold">Magdy Atef Zahran</span>
      <span>• 2024</span>
    </div>
    <div className="flex items-center gap-6 text-sm text-gray-400">
      <div className="flex items-center gap-2">
        <Mail className="h-4 w-4 text-orange-400" />
        <span>magdenoooo@gmail.com</span>
      </div>
      <div className="flex items-center gap-2">
        <Phone className="h-4 w-4 text-orange-400" />
        <span>+20 11 14602770</span>
      </div>
    </div>
  </div>
</div>


      </div>
    </footer>
  )
}
