import { Github, Linkedin, Mail, Download } from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "motion/react";

export function Hero() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-background/75" />

      {/* Glow Effect */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, #E3122115 0%, transparent 70%)",
        }}
      />

      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <motion.div
              className="inline-block text-xs font-semibold tracking-widest text-primary uppercase mb-5 border border-primary/30 px-4 py-1.5 rounded-full"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              With great code comes great responsibility
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Hi, I'm{" "}
              <span
                className="text-primary"
                style={{ textShadow: "0 0 40px #E3122150" }}
              >
                Kaushal
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground mb-4">
              Software Developer • AI Engineer • Data Scientist • Data Analyst
            </p>

            <p className="text-base text-muted-foreground mb-10 max-w-xl mx-auto">
              A tech enthusiast building innovative solutions—from intelligent
              AI systems to scalable web applications. Passionate about solving
              real-world problems through code, data, and innovation.
            </p>
          </motion.div>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="flex flex-wrap gap-4 justify-center mb-10"
          >
            <Button
              onClick={scrollToContact}
              className="gap-2 bg-primary hover:bg-primary/90"
            >
              <Mail className="w-4 h-4" />
              Get in Touch
            </Button>

            <Button
              asChild
              variant="outline"
              className="gap-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <a
                href="/src/imports/google_intern.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download className="w-4 h-4" />
                Download CV
              </a>
            </Button>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex gap-6 justify-center"
          >
            <a
              href="https://github.com/KaushalLalwani"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>

            <a
              href="https://linkedin.com/in/kaushal-lalwani-06348831b/  "
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>

            <a
              href="mailto:kaushallalwani007@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="w-6 h-6" />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
        }}
      >
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-primary rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}