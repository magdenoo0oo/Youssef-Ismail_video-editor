import { Award, Eye, Clock, Users, Play, Film } from "lucide-react"

const stats = [
  { icon: Film, number: "300+", label: "Total Projects", color: "text-orange-500" },
  { icon: Eye, number: "50M+", label: "Total Views", color: "text-purple-500" },
  { icon: Award, number: "50+", label: "Awards Won", color: "text-yellow-500" },
  { icon: Users, number: "200+", label: "Happy Clients", color: "text-green-500" },
  { icon: Clock, number: "10K+", label: "Hours Edited", color: "text-blue-500" },
  { icon: Play, number: "95%", label: "Client Retention", color: "text-pink-500" },
]

export function ProjectsStats() {
  return (
    <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl sm:text-6xl font-black mb-6">
            ALL <span className="gradient-text">PROJECTS</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore my complete portfolio of video editing work across various industries, formats, and creative
            challenges.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-gray-900 rounded-xl border border-gray-700 group-hover:border-orange-500/50 transition-all duration-300">
                  <stat.icon className={`h-8 w-8 ${stat.color}`} />
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
