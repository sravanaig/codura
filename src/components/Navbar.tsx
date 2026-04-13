import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Zap, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { 
      name: "About", 
      href: "#about",
      subLinks: [
        { name: "Our Story", href: "#about" },
        { name: "Founder", href: "#founder" },
      ]
    },
    { name: "Services", href: "#services" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
        isScrolled ? "glass py-3" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3"
        >
          <div className="w-10 h-10 rounded-xl overflow-hidden glass">
            <img 
              src="https://i.postimg.cc/G2hdN4S2/codura-logo.png" 
              alt="Codura Logo" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <span className="text-xl font-display font-bold tracking-tighter uppercase">CODURA</span>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <div 
              key={link.name} 
              className="relative group"
              onMouseEnter={() => link.subLinks && setIsAboutOpen(true)}
              onMouseLeave={() => link.subLinks && setIsAboutOpen(false)}
            >
              <motion.a
                href={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
              >
                {link.name}
                {link.subLinks && <ChevronDown className="w-4 h-4" />}
              </motion.a>

              {link.subLinks && (
                <AnimatePresence>
                  {isAboutOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 mt-2 w-48 glass rounded-2xl p-2 border border-white/10"
                    >
                      {link.subLinks.map((sub) => (
                        <a
                          key={sub.name}
                          href={sub.href}
                          className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-white/5 rounded-xl transition-all"
                        >
                          {sub.name}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          ))}
          <Button variant="outline" className="rounded-full px-6">
            Book Now
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 glass border-t-0 p-6 flex flex-col gap-4 md:hidden"
        >
          {navLinks.map((link) => (
            <div key={link.name} className="flex flex-col gap-2">
              <a
                href={link.href}
                className="text-lg font-medium"
                onClick={() => !link.subLinks && setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
              {link.subLinks && (
                <div className="flex flex-col gap-2 pl-4 border-l border-white/10">
                  {link.subLinks.map((sub) => (
                    <a
                      key={sub.name}
                      href={sub.href}
                      className="text-sm text-muted-foreground"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {sub.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Button className="w-full rounded-full">Book Now</Button>
        </motion.div>
      )}
    </nav>
  );
}
