import { Heart } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-8 bg-background/85 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-muted-foreground">
            © {currentYear} Kaushal. All rights reserved.
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            KL
          </div>
          <div className="text-sm text-muted-foreground">
            <span className="text-primary">"With great code comes great responsibility"</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
