"use client"

import type React from "react"

import { useState } from "react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: "", email: "", message: "" })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <section id="contact" className="py-20 px-4 bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-primary/30 to-transparent rounded-full blur-3xl animate-float" />
      <div
        className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-accent/30 to-transparent rounded-full blur-3xl animate-float"
        style={{ animationDelay: "2s" }}
      />

      <div className="max-w-2xl mx-auto relative z-10">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Contáctame{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Ahora</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            ¿Tienes un proyecto en mente? Colaboremos y creemos algo increíble juntos.
          </p>
        </div>

        {/* <form */}
        {/*   onSubmit={handleSubmit} */}
        {/*   className="space-y-6 bg-gradient-to-br from-card/50 to-background/50 border-2 border-primary/30 rounded-xl p-8 backdrop-blur-sm hover:border-primary/60 transition-all duration-300" */}
        {/* > */}
        {/*   <div> */}
        {/*     <label className="block text-foreground font-semibold mb-2">Nombre</label> */}
        {/*     <input */}
        {/*       type="text" */}
        {/*       required */}
        {/*       value={formData.name} */}
        {/*       onChange={(e) => setFormData({ ...formData, name: e.target.value })} */}
        {/*       className="w-full px-4 py-3 bg-input border-2 border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all" */}
        {/*       placeholder="Tu nombre" */}
        {/*     /> */}
        {/*   </div> */}
        {/**/}
        {/*   <div> */}
        {/*     <label className="block text-foreground font-semibold mb-2">Email</label> */}
        {/*     <input */}
        {/*       type="email" */}
        {/*       required */}
        {/*       value={formData.email} */}
        {/*       onChange={(e) => setFormData({ ...formData, email: e.target.value })} */}
        {/*       className="w-full px-4 py-3 bg-input border-2 border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all" */}
        {/*       placeholder="tu@email.com" */}
        {/*     /> */}
        {/*   </div> */}
        {/**/}
        {/*   <div> */}
        {/*     <label className="block text-foreground font-semibold mb-2">Mensaje</label> */}
        {/*     <textarea */}
        {/*       required */}
        {/*       rows={5} */}
        {/*       value={formData.message} */}
        {/*       onChange={(e) => setFormData({ ...formData, message: e.target.value })} */}
        {/*       className="w-full px-4 py-3 bg-input border-2 border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-none" */}
        {/*       placeholder="Cuéntame sobre tu proyecto..." */}
        {/*     /> */}
        {/*   </div> */}
        {/**/}
        {/*   <button */}
        {/*     type="submit" */}
        {/*     className="w-full px-6 py-3 bg-gradient-to-r from-primary via-secondary to-accent text-foreground rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 hover:scale-105" */}
        {/*   > */}
        {/*     {submitted ? "✓ Mensaje Enviado!" : "Enviar Mensaje"} */}
        {/*   </button> */}
        {/**/}
        {/*   {submitted && ( */}
        {/*     <p className="text-center text-accent text-sm animate-fade-in-up"> */}
        {/*       ¡Gracias por contactarme! Te responderé pronto. */}
        {/*     </p> */}
        {/*   )} */}
        {/* </form> */}

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-12 text-center">
          {[
            { label: "Email", value: "yaelgtorres25@gmail.com" },
            { label: "Teléfono", value: "5561711577" },
            { label: "Ubicación", value: "CDMX" },
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-4 rounded-lg bg-card/50 border border-border hover:border-primary/50 transition-all duration-300 hover:scale-105"
            >
              <p className="text-muted-foreground text-sm mb-1">{item.label}</p>
              <p className="text-foreground font-semibold text-wrap">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
