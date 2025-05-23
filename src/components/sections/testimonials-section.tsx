import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Quote } from "lucide-react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/animations";

const testimonials = [
  {
    id: 1,
    name: "John Smith",
    position: "CEO at TechCorp",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    text: "Working with this developer was a pleasure. They delivered our e-commerce platform ahead of schedule and the quality of work exceeded our expectations. Their attention to detail and problem-solving skills are exceptional.",
    initials: "JS"
  },
  {
    id: 2,
    name: "Sarah Johnson",
    position: "Product Manager at DesignHub",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    text: "I've worked with many developers over the years, but few have the combination of technical skill and creative thinking that this developer possesses. They transformed our product with intuitive UI and robust functionality.",
    initials: "SJ"
  },
  {
    id: 3,
    name: "Michael Chen",
    position: "CTO at StartupX",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    text: "Exceptional problem-solver who consistently delivered high-quality code. Their technical expertise significantly improved our application's performance and user experience. Looking forward to working together on future projects.",
    initials: "MC"
  },
  {
    id: 4,
    name: "Emily Rodriguez",
    position: "Marketing Director at CreativeAgency",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    text: "Our website redesign project was complicated, with tight deadlines and changing requirements. This developer handled everything professionally and delivered a beautiful, functional site that has significantly increased our conversions.",
    initials: "ER"
  },
  {
    id: 5,
    name: "David Wilson",
    position: "Founder at InnovateTech",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    text: "A true professional who understands both the technical and business aspects of web development. They asked insightful questions and provided solutions that we hadn't considered. The end result exceeded our expectations in every way.",
    initials: "DW"
  },
  {
    id: 6,
    name: "Lisa Kim",
    position: "UI/UX Designer at DesignStudio",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    text: "As a designer, I appreciate working with developers who can bring my designs to life exactly as envisioned. This developer did that and more, suggesting improvements that enhanced the user experience while maintaining design integrity.",
    initials: "LK"
  }
];

export function TestimonialsSection() {
  return (
    <motion.section
      id="testimonials"
      className="py-16 md:py-24 bg-muted/50"
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      <div className="container">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12"
          variants={fadeIn("up", 0.1)}
        >
          <h2 className="text-3xl font-bold tracking-tight mb-4">What People Say</h2>
          <p className="text-muted-foreground">
            Here are some testimonials from clients and colleagues I've had the pleasure of working with.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              variants={fadeIn("up", 0.1 + index * 0.1)}
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <Card className="relative h-full">
                <CardContent className="pt-6">
                  <Quote className="h-8 w-8 text-primary/20 absolute top-4 right-4" />
                  <div className="flex items-center gap-4 mb-4">
                    <Avatar>
                      <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.initials}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground italic">{testimonial.text}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
