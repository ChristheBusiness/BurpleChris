import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { ArrowRight, Sparkles, Zap, Heart, Code, Palette, Rocket, ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { fadeUp, staggerContainer, staggerItem, useScrollAnimation } from "@/lib/motion";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const projects = [
    {
      id: 1,
      title: "E-Commerce Reimagined",
      category: "E-Commerce",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      description: "A bold new vision for online shopping",
    },
    {
      id: 2,
      title: "FinTech Dashboard",
      category: "SaaS",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      description: "Data visualization meets elegant design",
    },
    {
      id: 3,
      title: "Creative Portfolio",
      category: "Portfolio",
      image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&h=600&fit=crop",
      description: "Showcasing art with minimal distraction",
    },
  ];

  const services = [
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Beautiful interfaces that users love to interact with",
    },
    {
      icon: Code,
      title: "Web Development",
      description: "Fast, responsive websites built with modern technologies",
    },
    {
      icon: Rocket,
      title: "Brand Identity",
      description: "Cohesive visual systems that tell your story",
    },
  ];

  const testimonials = [
    {
      quote: "Transformed our digital presence completely. The attention to detail is unmatched.",
      author: "Sarah Chen",
      role: "CEO, TechVision",
    },
    {
      quote: "A true design partner who understands both aesthetics and business goals.",
      author: "Marcus Rodriguez",
      role: "Founder, GrowthLab",
    },
    {
      quote: "The best investment we made this year. Our conversion rate doubled.",
      author: "Emily Watson",
      role: "CMO, Innovate Co",
    },
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <>
      <SEO />
      <div className="min-h-screen">
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-primary/10"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 50%, hsla(245, 80%, 58%, 0.08) 0%, transparent 50%), radial-gradient(circle at 80% 80%, hsla(245, 80%, 58%, 0.06) 0%, transparent 50%)",
            }}
          />

          <div
            className={`max-w-7xl mx-auto px-6 lg:px-8 relative z-10 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="text-center space-y-8">
              {/*<Badge variant="outline" className="text-sm px-4 py-1.5 border-primary/30" data-testid="badge-hero">
                <Sparkles className="w-3 h-3 mr-1.5 inline" />
                Award-Winning Designer
              </Badge>*/}

              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-tight">
                Crafting Digital
                <br />
                <span className="text-primary">Experiences</span>
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Transforming ideas into stunning, user-centric websites that drive results and leave lasting impressions.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                <Button size="lg" asChild className="text-base px-8" data-testid="button-view-work">
                  <Link href="/portfolio" className="flex items-center gap-2">
                    View My Work
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="text-base px-8" data-testid="button-get-in-touch">
                  <Link href="/contact">
                    Get in Touch
                  </Link>
                </Button>
              </div>
            </div>

            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
              <ChevronDown className="w-6 h-6 text-muted-foreground" />
            </div>
          </div>
        </section>

        <section className="py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Featured Work</h2>
              <p className="text-muted-foreground text-lg">A selection of recent projects</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <Card
                  key={project.id}
                  className="group overflow-hidden hover-elevate transition-all duration-300"
                  style={{
                    animationDelay: `${index * 100}ms`,
                  }}
                  data-testid={`card-project-${project.id}`}
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <CardContent className="p-6">
                    <Badge variant="secondary" className="mb-3" data-testid={`badge-category-${project.id}`}>
                      {project.category}
                    </Badge>
                    <h3 className="text-xl font-bold mb-2" data-testid={`text-project-title-${project.id}`}>
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">{project.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button variant="outline" size="lg" asChild data-testid="button-view-all-projects">
                <Link href="/portfolio" className="flex items-center gap-2">
                  View All Projects
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-32 bg-accent/30">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">What I Do</h2>
              <p className="text-muted-foreground text-lg">Services that drive success</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card
                  key={service.title}
                  className="text-center p-8 hover-elevate transition-all duration-300"
                  style={{
                    animationDelay: `${index * 100}ms`,
                  }}
                  data-testid={`card-service-${index}`}
                >
                  <div className="w-16 h-16 mx-auto mb-6 rounded-lg bg-primary/10 flex items-center justify-center">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 md:py-32">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Client Love</h2>
              <p className="text-muted-foreground text-lg">What people are saying</p>
            </div>

            <Card className="p-8 md:p-12 text-center">
              <Heart className="w-12 h-12 text-primary mx-auto mb-6" />
              <blockquote className="text-xl md:text-2xl font-medium mb-8 leading-relaxed" data-testid="text-testimonial-quote">
                "{testimonials[currentTestimonial].quote}"
              </blockquote>
              <div>
                <p className="font-semibold text-lg" data-testid="text-testimonial-author">
                  {testimonials[currentTestimonial].author}
                </p>
                <p className="text-muted-foreground" data-testid="text-testimonial-role">
                  {testimonials[currentTestimonial].role}
                </p>
              </div>

              <div className="flex justify-center gap-2 mt-8">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentTestimonial ? "bg-primary w-8" : "bg-muted-foreground/30"
                    }`}
                    aria-label={`View testimonial ${index + 1}`}
                    data-testid={`button-testimonial-${index}`}
                  />
                ))}
              </div>
            </Card>
          </div>
        </section>

        <section className="py-20 md:py-32 bg-gradient-to-br from-primary/10 via-background to-primary/5">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <Zap className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Elevate Your Brand?</h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              Let's collaborate to create something extraordinary that resonates with your audience and drives real results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="text-base px-8" data-testid="button-cta-start">
                <Link href="/contact" className="flex items-center gap-2">
                  Start a Project
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-base px-8" data-testid="button-cta-services">
                <Link href="/services">
                  View Services
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
