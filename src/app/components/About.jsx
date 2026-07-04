import { Card, CardContent } from "./ui/card";
import { Code2, Database, Brain, Zap } from "lucide-react";
import { motion } from "motion/react";

export function About() {
  const roles = [
    {
      icon: Code2,
      title: "Software Developer",
      description: "Building robust and scalable applications with modern tech stacks",
    },
    {
      icon: Brain,
      title: "AI Engineer",
      description: "Creating intelligent systems using machine learning and deep learning",
    },
    {
      icon: Database,
      title: "Data Scientist",
      description: "Extracting insights from data through advanced analytics",
    },
    {
      icon: Zap,
      title: "Data Analyst",
      description: "Transforming raw data into actionable business intelligence",
    },
  ];

  return (
    <section id="about" className="py-20 relative bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-primary">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A passionate Computer Science student with a strong foundation in software development,
            AI/ML, and data analytics. I thrive on solving complex problems and building innovative solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {roles.map((role, index) => (
            <motion.div
              key={role.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full bg-card border-border hover:border-primary transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 inline-block p-4 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <role.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-bold mb-2">{role.title}</h3>
                  <p className="text-sm text-muted-foreground">{role.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
