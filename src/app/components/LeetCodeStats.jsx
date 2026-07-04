import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Progress } from "./ui/progress";
import { Button } from "./ui/button";
import {
  Trophy,
  Target,
  TrendingUp,
  Award,
  ExternalLink,
} from "lucide-react";
import { motion } from "motion/react";

export function LeetCodeStats() {
  const stats = [
    {
      icon: Trophy,
      label: "Total Solved",
      value: "562",
      color: "text-primary",
    },
    {
      icon: Target,
      label: "Easy",
      value: "260",
      total: 951,
      color: "text-green-500",
    },
    {
      icon: TrendingUp,
      label: "Medium",
      value: "270",
      total: 2077,
      color: "text-yellow-500",
    },
    {
      icon: Award,
      label: "Hard",
      value: "32",
      total: 949,
      color: "text-red-500",
    },
  ];

  const achievements = [
    {
      title: "Contest Rating",
      value: "1584",
      
    },
    {
      title: "Global Rank",
      value: "226,836",
      badge: "Top 26.29%",
    },
    {
      title: "Active Days",
      value: "226",
      badge: "Consistent",
    },
    {
      title: "Max Streak",
      value: "25 Days",
      badge: "Daily Coder",
    },
  ];

  return (
    <section
      id="leetcode"
      className="py-20 bg-background/80 backdrop-blur-sm"
    >
      <div className="container mx-auto px-4">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            LeetCode <span className="text-primary">Stats</span>
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto">
            Passionate about Data Structures & Algorithms with consistent
            problem-solving and competitive programming practice.
          </p>

          <Button
            className="mt-6"
            asChild
          >
            <a
              href="https://leetcode.com/u/KaushalLalwani/"
              target="_blank"
              rel="noopener noreferrer"
            >
              View LeetCode Profile
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Problem Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
              >
                <Card className="hover:border-primary transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <stat.icon className={`w-5 h-5 ${stat.color}`} />
                      </div>

                      <span className="text-sm text-muted-foreground">
                        {stat.label}
                      </span>
                    </div>

                    <h3 className="text-3xl font-bold mb-2">
                      {stat.value}
                    </h3>

                    {stat.total && (
                      <>
                        <Progress
                          value={
                            (parseInt(stat.value) / stat.total) *
                            100
                          }
                          className="h-2"
                        />

                        <p className="text-xs text-muted-foreground mt-2">
                          {stat.value} / {stat.total}
                        </p>
                      </>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          
          
        </div>
      </div>
    </section>
  );
}