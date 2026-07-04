import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { TechBanner } from "./components/TechBanner";
import { LeetCodeStats } from "./components/LeetCodeStats";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import webBg from "@/imports/360_F_702054969_ngAeHdYO1EzYQQnHW6BbpM3hNp6eIKXK.jpg";

export default function App() {
  return (
    <div className="min-h-screen text-foreground relative">
      <div
        className="fixed inset-0 -z-10 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${webBg})`, opacity: 0.07 }}
      />
      <div className="fixed inset-0 -z-20 bg-background" />

      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <TechBanner />
        <LeetCodeStats />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
