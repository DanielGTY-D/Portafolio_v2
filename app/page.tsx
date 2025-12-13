"use client"

import { useEffect, useState } from "react"
import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden relative">
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-primary/30 via-secondary/20 to-transparent rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-1/3 right-0 w-96 h-96 bg-gradient-to-tl from-accent/30 via-primary/20 to-transparent rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-1/2 left-0 w-96 h-96 bg-gradient-to-r from-secondary/20 via-primary/10 to-transparent rounded-full blur-3xl animate-float"
          style={{ animationDelay: "4s" }}
        />
      </div>
      <Navbar scrollY={scrollY} />
      <Hero />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}
