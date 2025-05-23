import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github as GitHub, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/animations";
import { useForm, ValidationError } from "@formspree/react";

export function ContactSection() {
  const [state, handleSubmit] = useForm("xzblvgbo"); // Replace with your Formspree form ID

  // Show success toast when form is submitted successfully
  if (state.succeeded) {
    toast.success("Message sent successfully! I'll get back to you soon.");
  }

  return (
    <motion.section
      id="contact"
      className="py-16 md:py-24"
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
          <h2 className="text-3xl font-bold tracking-tight mb-4">Get In Touch</h2>
          <p className="text-muted-foreground">
            Have a project in mind or want to discuss opportunities? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div variants={fadeIn("right", 0.2)}>
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>
                  Here are the ways you can reach me directly.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <a href="mailto:your.email@example.com" className="hover:text-primary transition-colors">
                    your.email@example.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <a href="tel:+1234567890" className="hover:text-primary transition-colors">
                    +1 (234) 567-890
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>San Francisco, CA</span>
                </div>

                <div className="pt-4 border-t mt-4">
                  <p className="mb-3">Connect with me on social media:</p>
                  <div className="flex gap-4">
                    <motion.a
                      href="https://github.com/yourusername"
                      target="_blank"
                      rel="noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                      whileHover={{ y: -5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <GitHub className="h-6 w-6" />
                      <span className="sr-only">GitHub</span>
                    </motion.a>
                    <motion.a
                      href="https://linkedin.com/in/yourusername"
                      target="_blank"
                      rel="noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                      whileHover={{ y: -5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Linkedin className="h-6 w-6" />
                      <span className="sr-only">LinkedIn</span>
                    </motion.a>
                    <motion.a
                      href="https://twitter.com/yourusername"
                      target="_blank"
                      rel="noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                      whileHover={{ y: -5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Twitter className="h-6 w-6" />
                      <span className="sr-only">Twitter</span>
                    </motion.a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={fadeIn("left", 0.2)}>
            <Card>
              <CardHeader>
                <CardTitle>Send Me a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and I'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      required
                    />
                    <ValidationError prefix="Name" field="name" errors={state.errors} />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your.email@example.com"
                      required
                    />
                    <ValidationError prefix="Email" field="email" errors={state.errors} />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Your message"
                      rows={5}
                      required
                    />
                    <ValidationError prefix="Message" field="message" errors={state.errors} />
                  </div>
                  <Button
                    type="submit"
                    className="w-full"
                    disabled={state.submitting}
                  >
                    {state.submitting ? "Sending..." : "Send Message"}
                  </Button>
                  <ValidationError errors={state.errors} />
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
