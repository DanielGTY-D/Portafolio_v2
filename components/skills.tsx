"use client"

import { useEffect, useRef, useState } from "react"

const skillCategories = [
  {
    title: "Frontend",
    skills: ["HTML5", "CSS3", "Tailwind CSS", "JavaScript", "React", "TypeScript"],
    color: "from-blue-400 via-cyan-400 to-teal-400",
    bgColor: "bg-gradient-to-br from-blue-500/10 to-cyan-500/10",
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express", "C#", ".NET", "RESTful APIs", "SQL"],
    color: "from-purple-400 via-pink-400 to-red-400",
    bgColor: "bg-gradient-to-br from-purple-500/10 to-pink-500/10",
  },
  {
    title: "Tools & Más",
    skills: ["Git", "Docker", "Vercel", "AWS", "MongoDB", "PostgreSQL"],
    color: "from-amber-400 via-orange-400 to-red-400",
    bgColor: "bg-gradient-to-br from-amber-500/10 to-orange-500/10",
  },
]

export default function Skills() {
  const [visibleCards, setVisibleCards] = useState<boolean[]>([])
  const sectionRef = useRef<HTMLDivElement>(null)
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleCards(new Array(skillCategories.length).fill(true))
          }
        })
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" ref={sectionRef} className="py-20 px-4 bg-background relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Skills &{" "}
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-gradient-shift">
              Expertise
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Un conjunto integral de herramientas construido durante años de experiencia en desarrollo
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className={`group relative p-8 border-2 border-transparent rounded-xl transition-all duration-300 cursor-pointer overflow-hidden ${
                category.bgColor
              } ${
                hoveredCard === idx
                  ? "border-primary shadow-2xl shadow-primary/30 scale-105"
                  : "border-border hover:border-primary/50"
              } ${visibleCards[idx] ? "animate-fade-in-up" : ""}`}
              style={{ animationDelay: `${idx * 0.15}s` }}
              onMouseEnter={() => setHoveredCard(idx)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="absolute inset-0 -z-10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-primary via-secondary to-accent animate-gradient-shift" />

              <div
                className={`h-1 w-12 bg-gradient-to-r ${category.color} rounded-full mb-6 group-hover:w-full transition-all duration-300 shadow-lg`}
              />

              <h3 className="text-2xl font-bold mb-6 text-foreground group-hover:text-primary transition-colors">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 cursor-pointer ${
                      hoveredCard === idx
                        ? "bg-gradient-to-r from-primary/30 to-secondary/30 text-primary border border-primary/50"
                        : "bg-muted text-muted-foreground border border-transparent"
                    } hover:scale-110`}
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div className="mt-6 h-1 w-0 bg-gradient-to-r from-primary to-transparent group-hover:w-full transition-all duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
