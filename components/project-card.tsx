"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { YouTubeVideoPlayer } from "@/components/youtube-video-player"
import { Award, Eye, Clock, Calendar, ExternalLink, Heart } from "lucide-react"

interface Project {
  id: number
  title: string
  category: string
  client: string
  year: string
  duration: string
  views: string
  awards: number
  likes?: string
  description: string
  tags: string[]
  videoUrl: string // YouTube URL
  featured?: boolean
}

interface ProjectCardProps {
  project: Project
  size?: "small" | "medium" | "large"
}

export function ProjectCard({ project, size = "medium" }: ProjectCardProps) {
  const cardSizes = {
    small: "w-full",
    medium: "w-full",
    large: "w-full",
  }

  const titleSizes = {
    small: "text-base lg:text-lg",
    medium: "text-lg lg:text-xl",
    large: "text-xl lg:text-2xl",
  }

  const paddingSizes = {
    small: "p-3 lg:p-4",
    medium: "p-4 lg:p-6",
    large: "p-6 lg:p-8",
  }

  return (
    <Card
      className={`group overflow-hidden bg-gray-900 border-gray-700 hover:border-orange-500/50 transition-all duration-500 ${cardSizes[size]} ${
        project.featured ? "ring-2 ring-orange-500/30" : ""
      }`}
    >
      {/* Video Player */}
      <div className="relative">
        <YouTubeVideoPlayer videoUrl={project.videoUrl} title={project.title} />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 flex gap-2 z-10">
          <Badge className="bg-orange-500 text-black font-bold text-xs">{project.category}</Badge>
          {project.awards > 0 && (
            <Badge variant="secondary" className="bg-yellow-600 text-black font-bold text-xs">
              <Award className="w-3 h-3 mr-1" />
              {project.awards}
            </Badge>
          )}
        </div>

        {/* Stats Overlay for Large Cards */}
        {size === "large" && (
          <div className="absolute bottom-3 left-3 right-3 z-10">
            <h3 className={`${titleSizes[size]} font-black text-white mb-2`}>{project.title}</h3>
            <div className="flex items-center gap-4 text-sm text-gray-200 flex-wrap">
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {project.duration}
              </span>
              <span className="flex items-center gap-1">
                <Eye className="w-4 h-4" />
                {project.views}
              </span>
              {project.likes && (
                <span className="flex items-center gap-1">
                  <Heart className="w-4 h-4" />
                  {project.likes}
                </span>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Card Content */}
      <CardContent className={paddingSizes[size]}>
        {/* Title for Small/Medium Cards */}
        {size !== "large" && (
          <h3 className={`${titleSizes[size]} font-bold text-white mb-2 line-clamp-1`}>{project.title}</h3>
        )}

        <div className="mb-4">
          <div className="flex items-center justify-between mb-2">
            <div className="text-sm text-orange-400 font-bold uppercase tracking-wider">{project.client}</div>
            <div className="flex items-center gap-1 text-sm text-gray-400">
              <Calendar className="w-4 h-4" />
              {project.year}
            </div>
          </div>
          {size !== "small" && <p className="text-gray-300 text-sm lg:text-base">{project.description}</p>}
        </div>

        {/* Stats for Small/Medium Cards */}
        {size !== "large" && (
          <div className="flex items-center gap-3 text-xs text-gray-300 mb-3 flex-wrap">
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {project.duration}
            </span>
            <span className="flex items-center gap-1">
              <Eye className="w-3 h-3" />
              {project.views}
            </span>
            {project.likes && (
              <span className="flex items-center gap-1">
                <Heart className="w-3 h-3" />
                {project.likes}
              </span>
            )}
          </div>
        )}

        {/* Tags */}
        <div className="flex flex-wrap gap-1 lg:gap-2 mb-4">
          {project.tags.slice(0, size === "small" ? 2 : size === "medium" ? 3 : 4).map((tag, tagIndex) => (
            <Badge key={tagIndex} variant="outline" className="border-gray-600 text-gray-300 text-xs">
              {tag}
            </Badge>
          ))}
          {project.tags.length > (size === "small" ? 2 : size === "medium" ? 3 : 4) && (
            <Badge variant="outline" className="border-gray-600 text-gray-300 text-xs">
              +{project.tags.length - (size === "small" ? 2 : size === "medium" ? 3 : 4)}
            </Badge>
          )}
        </div>

        {/* Actions */}
        <div className="flex gap-2">
          <Button
            variant="ghost"
            className="flex-1 group text-gray-200 hover:text-orange-400 text-sm"
            onClick={() => window.open(project.videoUrl, "_blank")}
          >
            View on YouTube
            <ExternalLink className="ml-2 h-3 w-3 lg:h-4 lg:w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
