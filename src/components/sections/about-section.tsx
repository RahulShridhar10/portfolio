import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer, scaleIn } from "@/lib/animations";

// Define skills
const frontendSkills = [
  "HTML", "CSS", "JavaScript", "TypeScript", "React",
  "Next.js", "Vue.js", "TailwindCSS", "Redux", "Styled Components"
];

const backendSkills = [
  "Node.js", "Express", "MongoDB", "PostgreSQL", "GraphQL",
  "REST API", "Firebase", "AWS", "Docker", "Microservices"
];

const otherSkills = [
  "Git", "GitHub", "CI/CD", "Jest", "Testing Library",
  "Figma", "Adobe XD", "UI/UX Design", "Agile", "Scrum"
];

// Define experience
const experienceItems = [
  {
    company: "Tech Company",
    position: "Senior Frontend Developer",
    period: "2021 - Present",
    description: "Led the development of responsive web applications using React and Next.js. Implemented state management with Redux and optimized performance."
  },
  {
    company: "Digital Agency",
    position: "Full Stack Developer",
    period: "2018 - 2021",
    description: "Developed and maintained client websites and applications. Worked with various technologies including React, Node.js, and MongoDB."
  },
  {
    company: "Startup",
    position: "Junior Web Developer",
    period: "2016 - 2018",
    description: "Assisted in building and maintaining web applications. Collaborated with designers to implement UI/UX designs."
  }
];

export function AboutSection() {
  return (
    <motion.section
      id="about"
      className="py-16 md:py-24 bg-muted/50"
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      <div className="container">
        <div className="flex flex-col md:flex-row gap-12">
          <motion.div
            className="flex-1"
            variants={fadeIn("right", 0.1)}
          >
            <h2 className="text-3xl font-bold tracking-tight mb-6">About Me</h2>
            <div className="space-y-4">
              <p>
                I'm a passionate Full Stack Developer with over 5 years of experience in building web applications.
                I specialize in creating responsive, user-friendly interfaces with modern JavaScript frameworks.
              </p>
              <p>
                My journey in web development started with a curiosity about how websites work, which led me to pursue
                a degree in Computer Science. Since then, I've been constantly learning and improving my skills.
              </p>
              <p>
                When I'm not coding, you can find me hiking, reading, or experimenting with new technologies.
                I believe in writing clean, maintainable code and delivering high-quality solutions.
              </p>
              <div className="flex mt-6">
                <Button asChild className="mr-4">
                  <a href="/resume.pdf" download>
                    Download CV
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="flex-1 flex justify-center md:justify-end"
            variants={scaleIn(0.3)}
          >
            <Avatar className="w-64 h-64 border-4 border-primary/20">
              <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Profile picture" />
              <AvatarFallback>YN</AvatarFallback>
            </Avatar>
          </motion.div>
        </div>

        <motion.div
          className="mt-16"
          variants={fadeIn("up", 0.5)}
        >
          <Tabs defaultValue="skills">
            <TabsList className="w-full md:w-auto grid grid-cols-2 md:flex md:gap-2">
              <TabsTrigger value="skills">Skills</TabsTrigger>
              <TabsTrigger value="experience">Experience</TabsTrigger>
            </TabsList>
            <TabsContent value="skills" className="mt-6">
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { title: "Frontend", skills: frontendSkills },
                  { title: "Backend", skills: backendSkills },
                  { title: "Other", skills: otherSkills }
                ].map((category, index) => (
                  <motion.div
                    key={category.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
                        <div className="flex flex-wrap gap-2">
                          {category.skills.map((skill) => (
                            <Badge key={skill} variant="secondary">{skill}</Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="experience" className="mt-6">
              <div className="grid gap-6">
                {experienceItems.map((item, index) => (
                  <motion.div
                    key={item.company}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card>
                      <CardContent className="pt-6">
                        <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                          <div>
                            <h3 className="text-xl font-semibold">{item.position}</h3>
                            <p className="text-muted-foreground">{item.company}</p>
                          </div>
                          <Badge className="md:ml-2 mt-1 md:mt-0">{item.period}</Badge>
                        </div>
                        <p className="mt-2">{item.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </motion.section>
  );
}
