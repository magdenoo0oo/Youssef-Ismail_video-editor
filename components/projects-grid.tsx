"use client"

import { useState } from "react"
import { ProjectCard } from "@/components/project-card"
import { Button } from "@/components/ui/button"

const categories = [
  "All",
  "Commercial",
  "Music Video",
  "Documentary",
  "Corporate",
  "Social Media",
  "Wedding",
  "Short Film",
]

// Extended project list for the projects page
const allProjects = [
  {
    id: 1,
    title: "NEON DREAMS",
    category: "Music Video",
    client: "Rising Star Records",
    year: "2024",
    duration: "3:45",
    views: "2.1M",
    awards: 3,
    likes: "45K",
    description: "Cyberpunk-inspired music video with dynamic color grading and seamless VFX integration",
    tags: ["Color Grading", "VFX", "Motion Graphics", "Cyberpunk"],
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", // Replace with actual YouTube URLs
    featured: true,
  },
  {
    id: 2,
    title: "TECH REVOLUTION",
    category: "Commercial",
    client: "InnovateTech",
    year: "2024",
    duration: "1:30",
    views: "850K",
    awards: 2,
    likes: "12K",
    description: "High-energy commercial showcasing cutting-edge technology",
    tags: ["Commercial", "Product Demo", "Sound Design"],
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", // Replace with actual YouTube URLs
    featured: true,
  },
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
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", // Replace with actual YouTube URLs
    featured: false,
  },
  {
    id: 4,
    title: "ETERNAL VOWS",
    category: "Wedding",
    client: "Private Client",
    year: "2024",
    duration: "8:30",
    views: "125K",
    awards: 1,
    likes: "3.2K",
    description: "Cinematic wedding film capturing the magic of a perfect day",
    tags: ["Wedding", "Cinematic", "Emotional", "Color Grading"],
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", // Replace with actual YouTube URLs
    featured: false,
  },
  {
    id: 5,
    title: "STARTUP STORY",
    category: "Corporate",
    client: "TechStart Inc",
    year: "2024",
    duration: "5:20",
    views: "320K",
    awards: 0,
    likes: "8.5K",
    description: "Corporate brand story highlighting innovation and growth",
    tags: ["Corporate", "Branding", "Interview", "Motion Graphics"],
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", // Replace with actual YouTube URLs
    featured: false,
  },
  {
    id: 6,
    title: "VIRAL MOMENT",
    category: "Social Media",
    client: "Influencer Co",
    year: "2024",
    duration: "0:45",
    views: "5.2M",
    awards: 0,
    likes: "250K",
    description: "Viral social media content with trending effects",
    tags: ["Social Media", "Trending", "Quick Edit", "Viral"],
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", // Replace with actual YouTube URLs
    featured: false,
  },
  {
    id: 7,
    title: "MIDNIGHT RUNNER",
    category: "Short Film",
    client: "Independent",
    year: "2023",
    duration: "12:45",
    views: "680K",
    awards: 3,
    likes: "34K",
    description: "Neo-noir short film with atmospheric lighting and sound design",
    tags: ["Short Film", "Neo-noir", "Atmospheric", "Sound Design"],
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", // Replace with actual YouTube URLs
    featured: false,
  },
  {
    id: 8,
    title: "FASHION FORWARD",
    category: "Commercial",
    client: "Luxury Brand",
    year: "2024",
    duration: "2:15",
    views: "1.2M",
    awards: 1,
    likes: "28K",
    description: "High-fashion commercial with elegant transitions and color palette",
    tags: ["Fashion", "Luxury", "Elegant", "Color Grading"],
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", // Replace with actual YouTube URLs
    featured: false,
  },
  {
    id: 9,
    title: "BEATS & RHYMES",
    category: "Music Video",
    client: "Hip Hop Artist",
    year: "2023",
    duration: "4:12",
    views: "3.8M",
    awards: 2,
    likes: "156K",
    description: "Dynamic hip-hop music video with creative transitions and effects",
    tags: ["Hip Hop", "Dynamic", "Creative Effects", "Urban"],
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", // Replace with actual YouTube URLs
    featured: false,
  },
  {
    id: 10,
    title: "FUTURE VISION",
    category: "Documentary",
    client: "Tech Documentary",
    year: "2024",
    duration: "28:30",
    views: "890K",
    awards: 2,
    likes: "45K",
    description: "Documentary exploring the future of artificial intelligence",
    tags: ["Documentary", "AI", "Future Tech", "Educational"],
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", // Replace with actual YouTube URLs
    featured: false,
  },
  {
    id: 11,
    title: "LOVE STORY",
    category: "Wedding",
    client: "Private Client",
    year: "2023",
    duration: "6:45",
    views: "95K",
    awards: 0,
    likes: "2.8K",
    description: "Romantic wedding highlight reel with emotional storytelling",
    tags: ["Wedding", "Romance", "Emotional", "Storytelling"],
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", // Replace with actual YouTube URLs
    featured: false,
  },
  {
    id: 12,
    title: "BRAND EVOLUTION",
    category: "Corporate",
    client: "Fortune 500",
    year: "2024",
    duration: "7:20",
    views: "450K",
    awards: 1,
    likes: "15K",
    description: "Corporate transformation story with professional presentation",
    tags: ["Corporate", "Transformation", "Professional", "Brand"],
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", // Replace with actual YouTube URLs
    featured: false,
  },
]

export function ProjectsGrid() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredProjects = allProjects.filter(
    (project) => selectedCategory === "All" || project.category === selectedCategory,
  )

  const featuredProjects = filteredProjects.filter((project) => project.featured)
  const regularProjects = filteredProjects.filter((project) => !project.featured)

  return (
    <section className="py-12 lg:py-16 px-4 sm:px-6 lg:px-8 bg-gray-950">
      <div className="container mx-auto">
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 lg:gap-3 mb-8 lg:mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              className={`${
                selectedCategory === category
                  ? "bg-orange-500 text-black hover:bg-orange-600"
                  : "border-gray-600 text-gray-200 hover:bg-gray-800"
              } font-bold uppercase tracking-wider text-xs lg:text-sm px-3 lg:px-4 py-2`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Count */}
        <div className="text-center mb-6 lg:mb-8">
          <p className="text-gray-400 text-sm lg:text-base">
            Showing <span className="text-orange-400 font-bold">{filteredProjects.length}</span> projects
            {selectedCategory !== "All" && (
              <span>
                {" "}
                in <span className="text-orange-400 font-bold">{selectedCategory}</span>
              </span>
            )}
          </p>
        </div>

        {/* Featured Projects */}
        {selectedCategory === "All" && featuredProjects.length > 0 && (
          <div className="mb-12 lg:mb-16">
            <h2 className="text-2xl lg:text-3xl font-black text-white mb-6 lg:mb-8 text-center">
              FEATURED <span className="gradient-text">PROJECTS</span>
            </h2>
            <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
              {featuredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} size="large" />
              ))}
            </div>
          </div>
        )}

        {/* All Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6">
          {(selectedCategory === "All" ? regularProjects : filteredProjects).map((project) => (
            <ProjectCard key={project.id} project={project} size="medium" />
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-8 lg:mt-12">
          <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-black font-bold px-6 lg:px-8">
            LOAD MORE PROJECTS
          </Button>
        </div>
      </div>
    </section>
  )
}
