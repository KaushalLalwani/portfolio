import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { motion } from "motion/react";

export function Skills() {
  const skillCategories = [
    {
      category: "Programming Languages",
      skills: ["Python", "JavaScript", "TypeScript", "Java", "C++", "SQL", "R"],
    },
    {
      category: "AI & Machine Learning",
      skills: ["TensorFlow", "PyTorch", "Scikit-learn", "Keras", "OpenCV", "NLP", "Computer Vision"],
    },
    {
      category: "Data Science & Analytics",
      skills: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Tableau", "Power BI", "Excel"],
    },
    {
      category: "Web Development",
      skills: ["React", "Node.js", "Express", "Next.js", "FastAPI", "Django", "MongoDB", "PostgreSQL"],
    },
    {
      category: "Tools & Technologies",
      skills: ["Git", "Docker", "AWS", "Linux", "Jupyter", "VS Code", "Postman"],
    },
    {
      category: "Soft Skills",
      skills: ["Problem Solving", "Team Collaboration", "Communication", "Agile", "Leadership"],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-secondary/40 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills & <span className="text-primary">Expertise</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit spanning software development, AI/ML, and data analytics
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full bg-card border-border hover:border-primary transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-lg">{category.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
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
