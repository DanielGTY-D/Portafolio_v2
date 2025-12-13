"use client"

import { useEffect, useState } from "react"
import Link from "next/link"

export default function Navbar({ scrollY }: { scrollY: number }) {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    setIsScrolled(scrollY > 50)
  }, [scrollY])

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/40 backdrop-blur-lg border-b border-primary/20 shadow-lg shadow-primary/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <Link
          href="#"
          className="text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent hover:opacity-80 transition-opacity animate-gradient-shift"
        >
          Dev
        </Link>

        <div className="hidden md:flex gap-8">
          {["About", "Skills", "Projects", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-muted-foreground hover:text-primary transition-all duration-300 relative group font-medium"
            >
              {item}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary via-secondary to-accent group-hover:w-full transition-all duration-300 rounded-full" />
            </a>
          ))}
        </div>

        <button className="hidden md:block px-6 py-2 bg-gradient-to-r from-primary via-secondary to-accent text-foreground rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 font-semibold hover:scale-105">
          Get in Touch
        </button>
      </div>
    </nav>
  )
}
