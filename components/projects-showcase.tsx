"use client"

import { useState } from "react"
import { ProjectCard } from "@/components/project-card"
import { Button } from "@/components/ui/button"

const categories = ["All", "Commercial", "Music Video", "Documentary", "Corporate", "Social Media"]

// Sample projects with YouTube URLs - replace with actual project data
const projects = [
  
  
  {
    id: 3,
    title: "OCEAN'S CALL",
    category: "Documentary",
    client: "Nature Films",
    year: "2023",
    duration: "52:00",
    views: "1.5M",
    awards: 5,
    likes: "89K",
    description: "Award-winning environmental documentary with stunning underwater cinematography",
    tags: ["Documentary", "Color Correction", "Audio Mix", "Environmental"],
    videoUrl: "https://youtu.be/Aqagk-i842M?si=ki8bu02fR5qZEeYL", // Replace with actual YouTube URLs
    featured: false,
  },
  {
    id: 4,
    title: "BRAND STORY",
    category: "Corporate",
    client: "Global Corp",
    year: "2024",
    duration: "8:20",
    views: "320K",
    awards: 1,
    likes: "8.5K",
    description: "Corporate brand story highlighting company values and mission",
    tags: ["Corporate", "Branding", "Interview"],
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", // Replace with actual YouTube URLs
    featured: false,
  },
  {
    id: 5,
    title: "VIRAL MOMENT",
    category: "Social Media",
    client: "Influencer Co",
    year: "2024",
    duration: "0:45",
    views: "5.2M",
    awards: 0,
    likes: "250K",
    description: "Viral social media content with trending effects and perfect timing",
    tags: ["Social Media", "Trending", "Quick Edit", "Viral"],
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", // Replace with actual YouTube URLs
    featured: false,
  },
  {
    id: 6,
    title: "LOVE ETERNAL",
    category: "Music Video",
    client: "Indie Artist",
    year: "2023",
    duration: "4:12",
    views: "680K",
    awards: 1,
    likes: "34K",
    description: "Emotional ballad with cinematic storytelling and beautiful color palette",
    tags: ["Emotional", "Cinematic", "Color Grade"],
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", // Replace with actual YouTube URLs
    featured: false,
  },
]

export function ProjectsShowcase() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredProjects = projects.filter(
    (project) => selectedCategory === "All" || project.category === selectedCategory,
  )

  const featuredProjects = filteredProjects.filter((project) => project.featured)
  const regularProjects = filteredProjects.filter((project) => !project.featured)

  return (
    <section id="work" className="py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gray-950">
      <div className="container mx-auto">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4 lg:mb-6">
            <span className="text-white">FEATURED</span> <span className="gradient-text">WORK</span>
          </h2>
          <p className="text-lg lg:text-xl text-gray-300 max-w-2xl mx-auto">
Explore my latest work—each project highlights a unique aspect of my video editing craft through cinematic storytelling and visual precision.


          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 lg:gap-4 mb-8 lg:mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              className={`${
                selectedCategory === category
                  ? "bg-orange-500 text-black hover:bg-orange-600"
                  : "border-gray-600 text-gray-300 hover:bg-gray-800"
              } font-bold uppercase tracking-wider text-xs lg:text-sm px-3 lg:px-4 py-2`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Featured Projects */}
        {featuredProjects.length > 0 && (
          <div className="mb-12 lg:mb-16">
            <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
              {featuredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} size="large" />
              ))}
            </div>
          </div>
        )}

        {/* Regular Projects Grid */}
        {regularProjects.length > 0 && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            {regularProjects.map((project) => (
              <ProjectCard key={project.id} project={project} size="medium" />
            ))}
          </div>
        )}

        {/* View All Projects Button */}
        <div className="text-center mt-8 lg:mt-12">
          <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-black font-bold px-6 lg:px-8">
            VIEW ALL PROJECTS
          </Button>
        </div>
      </div>
    </section>
  )
}
