import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer, textVariant } from "@/lib/animations";

export function HeroSection() {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.section
      id="home"
      className="relative min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center text-center px-4 py-16"
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      <div className="container max-w-4xl space-y-6">
        <div className="space-y-2">
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter"
            variants={textVariant(0.1)}
          >
            <span className="bg-gradient-to-r from-primary to-blue-600 dark:to-blue-400 text-transparent bg-clip-text">
              Hello, I'm Your Name
            </span>
          </motion.h1>
          <motion.p
            className="text-2xl md:text-3xl text-muted-foreground"
            variants={textVariant(0.2)}
          >
            Full Stack Developer
          </motion.p>
        </div>
        <motion.p
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
          variants={fadeIn("up", 0.3)}
        >
          I craft beautiful, functional websites and applications that deliver exceptional user experiences.
          Passionate about clean code and innovative solutions.
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
          variants={fadeIn("up", 0.4)}
        >
          <Button size="lg" onClick={scrollToContact}>
            Contact Me
          </Button>
          <Button
            size="lg"
            variant="outline"
            asChild
          >
            <a href="#projects">
              View My Work
            </a>
          </Button>
        </motion.div>
      </div>
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, repeatType: 'loop' }}
        >
          <Button
            variant="ghost"
            size="icon"
            onClick={() => {
              document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <ArrowDown className="h-6 w-6" />
            <span className="sr-only">Scroll down</span>
          </Button>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
