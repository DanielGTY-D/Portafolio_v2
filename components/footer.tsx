export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-t from-card/50 to-background border-t border-primary/20 py-12 px-4 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-gradient-to-b from-primary/20 to-transparent rounded-full blur-3xl -z-10" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Dev
            </h3>
            <p className="text-muted-foreground text-sm">
              Construyendo experiencias digitales excepcionales con tecnologías modernas.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-foreground">Links Rápidos</h4>
            <ul className="space-y-2 text-muted-foreground text-sm">
              {["About", "Projects", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="hover:text-primary transition-colors duration-300 hover:translate-x-1 inline-block"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-foreground">Sígueme</h4>
            <div className="flex gap-4">
              {["GitHub", "LinkedIn", "Twitter"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-all duration-300 text-sm font-medium hover:scale-125"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center text-muted-foreground text-sm">
          <p>© {currentYear} Todos los derechos reservados.</p>
          <p>
            Diseñado y construido con <span className="text-accent animate-pulse">♥</span> por mí
          </p>
        </div>
      </div>
    </footer>
  )
}
