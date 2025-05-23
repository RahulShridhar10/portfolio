import { Layout } from "@/components/layout/layout";
import { HeroSection } from "@/components/sections/hero-section";
import { AboutSection } from "@/components/sections/about-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { ContactSection } from "@/components/sections/contact-section";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

// Define page transition variants
const pageVariants = {
  initial: {
    opacity: 0,
  },
  in: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
  out: {
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

function App() {
  const [currentSection, setCurrentSection] = useState("home");
  const [isChangingSection, setIsChangingSection] = useState(false);

  // Update current section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "projects", "contact"];
      const scrollPosition = window.scrollY;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (!element) continue;

        const rect = element.getBoundingClientRect();
        const offset = scrollPosition + rect.top;

        // If section is in viewport and close to the top
        if (scrollPosition >= offset - 200) {
          if (currentSection !== section) {
            setIsChangingSection(true);
            setTimeout(() => {
              setCurrentSection(section);
              setIsChangingSection(false);
            }, 300); // Small delay for transition effect
          }
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [currentSection]);

  // Implement smooth scrolling for all anchor links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');

      if (anchor?.hash?.startsWith('#')) {
        e.preventDefault();
        const targetElement = document.querySelector(anchor.hash);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });

          // Update current section when clicking navigation
          const sectionId = anchor.hash.substring(1);
          setIsChangingSection(true);
          setTimeout(() => {
            setCurrentSection(sectionId);
            setIsChangingSection(false);
          }, 300);
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <Layout currentSection={currentSection}>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSection}
          initial={isChangingSection ? "initial" : false}
          animate="in"
          exit="out"
          variants={pageVariants}
          className="w-full"
        >
          <HeroSection />
          <AboutSection />
          <ProjectsSection />
          <ContactSection />
        </motion.div>
      </AnimatePresence>
    </Layout>
  );
}

export default App;
