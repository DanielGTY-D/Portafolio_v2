"use client"

import { useState } from "react"
import Image from "next/image"

const projects = [
  {
    title: "AnimeVerse",
    description:
      "Plataforma para poder buscar animes ya con tiempo, recien salidos o los estrenos que se vienen en proximas temporadas",
    tags: ["React", "React-router", "tanstack-query", "Zustand", "Zod"],
    image: "/01.png",
    link: "https://animeversee.netlify.app/",
  },
  {
    title: "Task Management App (En proceso)",
    description:
      "Aplicación de gestión de tareas en tiempo real construida con React y Firebase. Incluye funcionalidad drag-and-drop y colaboración.",
    tags: ["React", "Firebase", "Tailwind CSS", "TypeScript"],
    image: "/task-management-app.jpg",
    link: "#",
  },
  {
    title: "API Analytics Dashboard (En proceso)",
    description:
      "Dashboard de analítica para monitorear rendimiento de API. Construido con C#, .NET y React con visualización de datos en tiempo real.",
    tags: ["C#", ".NET", "React", "WebSockets"],
    image: "/api-analytics-dashboard.jpg",
    link: "#",
  },
  {
    title: "Social Media Feed (En proceso)",
    description:
      "Feed de redes sociales dinámico con scroll infinito, notificaciones en tiempo real e interacciones de usuarios.",
    tags: ["React", "Node.js", "PostgreSQL", "Socket.io"],
    image: "/social-media-feed.jpg",
    link: "#",
  },
  {
    title: "Weather App (En proceso)",
    description:
      "Aplicación de clima hermosa con geolocalización, datos de pronóstico y mapas interactivos. Diseño responsivo.",
    tags: ["React", "Tailwind CSS", "API Integration", "Responsive"],
    image: "/weather-app-interface.png",
    link: "#",
  },
]

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  return (
    <section id="projects" className="py-20 px-4 bg-background relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Proyectos{" "}
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-gradient-shift">
              Destacados
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Una selección de proyectos que demuestran mis habilidades y creatividad
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <a
              key={idx}
              href={project.link}
              className="group relative overflow-hidden rounded-xl border-2 border-border hover:border-primary transition-all duration-300 bg-gradient-to-br from-card to-background/50 cursor-pointer"
              onMouseEnter={() => setHoveredProject(idx)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/20 to-accent/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative overflow-hidden h-48 bg-muted">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={500}
                  height={300}
                  className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="relative p-6 z-10">
                <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2 group-hover:text-foreground transition-colors duration-300">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gradient-to-r from-primary/20 to-secondary/20 text-primary rounded-full text-xs font-medium border border-primary/30 group-hover:border-primary/60 transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-4 flex items-center text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-[-10px] group-hover:translate-x-0">
                  <span className="text-sm font-semibold">Ver Proyecto</span>
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-gradient-to-r from-primary via-secondary to-accent text-foreground rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 hover:scale-105">
            Ver Todos los Proyectos →
          </button>
        </div>
      </div>
    </section>
  )
}
