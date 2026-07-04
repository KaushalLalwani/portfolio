import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ExternalLink, Github } from "lucide-react";
import { motion } from "motion/react";
import { ImageWithFallback } from "./ImageWithFallback";

export function Projects() {
  const projects = [
    {
      title: "NutriSnap – AI-Powered Nutrition Analysis Platform",
      description:
        "An end-to-end AI-powered nutrition analysis platform that detects food items, estimates nutrition, and provides personalized dietary recommendations using Computer Vision and Generative AI.",
      image:
        "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=1200&q=80",
      tags: [
        "FastAPI",
        "Python",
        "YOLOv8",
        "React",
        "MongoDB",
        "Generative AI",
      ],
      github: "https://github.com/KaushalLalwani/Nutrisnapx",
      demo:
        "https://nutrisnapx-frpw37y9u-kaushals-projects-635e5fcf.vercel.app/",
    },
    {
      title: "Urban Mitra – Civic Issue Reporting Platform",
      description:
        "A full-stack civic issue reporting platform that enables citizens to report local issues, upload images, and track complaint status through role-based authentication and an admin dashboard.",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80",
      tags: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "Cloudinary",
      ],
      github: "https://github.com/KaushalLalwani/UrbanMitra_sih",
      demo: "#",
    },
    {
      title: "Internship Insights",
      description:
        "A web scraping and analytics platform that automatically collects internship listings, cleans the data, and presents hiring trends through an interactive Streamlit dashboard.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
      tags: ["Python", "Streamlit", "Web Scraping", "Pandas"],
      github: "https://github.com/KaushalLalwani/internship-insights",
      demo: "#",
    },
    {
      title: "OLA Data Analysis Dashboard",
      description:
        "A business intelligence dashboard built using SQL and Power BI to analyze ride bookings, revenue, customer behavior, and peak demand trends for actionable insights.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
      tags: ["SQL", "Power BI", "Data Analysis", "Business Intelligence"],
      github: "https://github.com/KaushalLalwani/ola-analysis",
      demo: "#",
    },
  ];

  // Rest of your component remains unchanged

  return (
    <section id="projects" className="py-20 bg-secondary/40 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A showcase of my best work in AI, data science, and full-stack development
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full bg-card border-border hover:border-primary transition-all duration-300 overflow-hidden group">
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60" />
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="bg-primary/10 text-primary"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    {/* GitHub Button */}
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="gap-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    >
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-4 h-4" />
                        Code
                      </a>
                    </Button>

                    {/* Live Demo Button */}
                    {project.demo !== "#" && (
                      <Button
                        asChild
                        size="sm"
                        className="gap-2"
                      >
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="w-4 h-4" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
