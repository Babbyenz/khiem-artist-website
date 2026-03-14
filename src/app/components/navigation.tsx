import { Link } from "react-router";
import { Home } from "lucide-react";

export function Navigation() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-neutral-950/80 backdrop-blur-lg border-b border-neutral-800">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 text-white hover:text-orange-500 transition-colors"
        >
          <Home className="w-5 h-5" />
          <span className="font-semibold">KHIEM</span>
        </button>

        <div className="flex items-center gap-6">
          <a
            href="#information"
            className="text-neutral-400 hover:text-white transition-colors"
          >
            Information
          </a>
          <a
            href="#biography"
            className="text-neutral-400 hover:text-white transition-colors"
          >
            Biography
          </a>
          <a
            href="#music"
            className="text-neutral-400 hover:text-white transition-colors"
          >
            Music
          </a>
          <a
            href="#creative-inspiration"
            className="text-neutral-400 hover:text-white transition-colors"
          >
            Creative Inspiration
          </a>
          <a
            href="#press"
            className="text-neutral-400 hover:text-white transition-colors"
          >
            Photos
          </a>
          <a
            href="#contact"
            className="text-neutral-400 hover:text-white transition-colors"
          >
            Contact
          </a>
          <a
            href="#aiUsage"
            className="text-neutral-400 hover:text-white transition-colors"
          >
            AI usage
          </a>
        </div>
      </div>
    </nav>
  );
}
