export function Header() {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/70 backdrop-blur-md border-b border-border/40">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <span className="text-2xl font-bold text-primary">KL</span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="public/google_intern.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 rounded-full border border-foreground/30 text-sm font-semibold tracking-wider text-foreground hover:bg-foreground hover:text-background transition-all duration-200 uppercase"
            >
              Resume
            </a>
            <button
              onClick={scrollToContact}
              className="px-5 py-2 rounded-full border border-foreground/30 text-sm font-semibold tracking-wider text-foreground hover:bg-primary hover:border-primary hover:text-white transition-all duration-200 uppercase"
            >
              Contact Now
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
