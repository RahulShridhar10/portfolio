import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { Menu, X } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { motion } from "framer-motion";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

interface HeaderProps {
  activeSection?: string;
}

export function Header({ activeSection = "home" }: HeaderProps) {
  const handleNavClick = (sectionId: string) => {
    document.querySelector(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 20,
        delay: 0.1
      }}
    >
      <div className="container flex h-16 items-center justify-between">
        <motion.div
          className="flex items-center gap-2"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <a href="#home" className="text-xl font-bold">
            Portfolio
          </a>
        </motion.div>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <ul className="flex items-center gap-6">
            {navItems.map((item, index) => (
              <motion.li
                key={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
              >
                <Button
                  variant="ghost"
                  className={activeSection === item.href.replace("#", "") ? "font-medium" : "text-muted-foreground"}
                  onClick={() => handleNavClick(item.href)}
                >
                  {item.label}
                </Button>
              </motion.li>
            ))}
          </ul>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, type: "spring" }}
          >
            <ThemeToggle />
          </motion.div>
        </nav>

        {/* Mobile navigation */}
        <div className="flex items-center gap-2 md:hidden">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <ThemeToggle />
          </motion.div>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col gap-4 mt-8">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + index * 0.1 }}
                  >
                    <Button
                      variant="ghost"
                      className={`justify-start text-lg ${
                        activeSection === item.href.replace("#", "") ? "font-medium" : "text-muted-foreground"
                      }`}
                      onClick={() => {
                        handleNavClick(item.href);
                        document.querySelector(".close-sheet")?.click();
                      }}
                    >
                      {item.label}
                    </Button>
                  </motion.div>
                ))}
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 top-4 close-sheet"
              >
                <X className="h-5 w-5" />
                <span className="sr-only">Close menu</span>
              </Button>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
}
