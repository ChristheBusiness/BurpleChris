import { SEO } from "@/components/SEO";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import {
  Palette,
  Code,
  Rocket,
  Search,
  Smartphone,
  Zap,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Palette,
      title: "UI/UX Design",
      description:
        "Creating intuitive, beautiful interfaces that users love. From wireframes to high-fidelity prototypes.",
      features: [
        "User research & personas",
        "Wireframing & prototyping",
        "Visual design",
        "Usability testing",
        "Design systems",
      ],
      price: "Starting at $2,500",
    },
    {
      icon: Code,
      title: "Web Development",
      description:
        "Building fast, responsive, and scalable websites using modern technologies and best practices.",
      features: [
        "Custom website development",
        "E-commerce solutions",
        "CMS integration",
        "Performance optimization",
        "Ongoing maintenance",
      ],
      price: "Starting at $3,000",
    },
    {
      icon: Rocket,
      title: "Brand Identity",
      description:
        "Crafting cohesive visual systems that tell your story and resonate with your target audience.",
      features: [
        "Logo design",
        "Brand guidelines",
        "Color palette & typography",
        "Business card & collateral",
        "Social media assets",
      ],
      price: "Starting at $2,000",
    },
    {
      icon: Search,
      title: "SEO Optimization",
      description:
        "Improving your website's visibility and ranking on search engines to drive organic traffic.",
      features: [
        "Technical SEO audit",
        "On-page optimization",
        "Keyword research",
        "Content strategy",
        "Performance tracking",
      ],
      price: "Starting at $1,500",
    },
    {
      icon: Smartphone,
      title: "Mobile App Design",
      description:
        "Designing delightful mobile experiences that work seamlessly across iOS and Android platforms.",
      features: [
        "iOS & Android design",
        "App prototyping",
        "User flow mapping",
        "Icon & asset creation",
        "App store optimization",
      ],
      price: "Starting at $3,500",
    },
    {
      icon: Zap,
      title: "Conversion Optimization",
      description:
        "Data-driven approach to improving your website's conversion rate and user engagement.",
      features: [
        "Analytics setup",
        "A/B testing",
        "Heat mapping analysis",
        "Landing page optimization",
        "CRO strategy",
      ],
      price: "Starting at $2,000",
    },
  ];

  const process = [
    {
      number: "01",
      title: "Discovery Call",
      description:
        "We'll start with a conversation to understand your goals, challenges, and vision for the project.",
      duration: "1 hour",
    },
    {
      number: "02",
      title: "Proposal & Agreement",
      description:
        "Receive a detailed proposal outlining scope, timeline, and investment. Upon approval, we'll sign the agreement.",
      duration: "2-3 days",
    },
    {
      number: "03",
      title: "Research & Strategy",
      description:
        "Deep dive into your industry, competitors, and target audience to inform our design decisions.",
      duration: "1-2 weeks",
    },
    {
      number: "04",
      title: "Design & Development",
      description:
        "Bringing your vision to life with iterative design and development, with regular check-ins for feedback.",
      duration: "4-8 weeks",
    },
    {
      number: "05",
      title: "Testing & Refinement",
      description:
        "Thorough testing across devices and browsers, making refinements based on feedback and analytics.",
      duration: "1-2 weeks",
    },
    {
      number: "06",
      title: "Launch & Support",
      description:
        "Going live with your project and providing ongoing support to ensure everything runs smoothly.",
      duration: "Ongoing",
    },
  ];

  return (
    <>
      <SEO
        title="Web Design Services - Chris Design"
        description="Professional web design and development services by Chris. UI/UX design, custom development, branding, mobile apps, SEO optimization, and conversion rate optimization. Competitive pricing starting at $1,500."
        keywords="web design services, UI/UX design services, custom web development, branding services, SEO services, chris design pricing"
      />
      <div className="min-h-screen pt-20 md:pt-24">
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl mb-16">
              <Badge variant="outline" className="mb-4" data-testid="badge-services">
                Services
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Services That Drive <span className="text-primary">Success</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Comprehensive solutions tailored to your unique needs, from initial concept to final launch and beyond.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {services.map((service, index) => (
                <Card key={service.title} className="hover-elevate transition-all duration-300" data-testid={`card-service-${index}`}>
                  <CardContent className="p-8">
                    <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                      <service.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>

                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2 text-sm">
                          <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="pt-6 border-t border-border">
                      <p className="text-sm text-muted-foreground mb-1">Investment</p>
                      <p className="text-lg font-bold text-primary">{service.price}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-accent/30">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">How I Work</h2>
              <p className="text-muted-foreground text-lg">A transparent, collaborative process from start to finish</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {process.map((step, index) => (
                <Card key={step.number} className="hover-elevate" data-testid={`card-process-${index}`}>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="text-5xl font-bold text-primary/20">{step.number}</div>
                      <Badge variant="secondary" className="text-xs">
                        {step.duration}
                      </Badge>
                    </div>
                    <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Let's discuss your project and explore how I can help bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="text-base px-8" data-testid="button-contact">
                <Link href="/contact" className="flex items-center gap-2">
                  Start a Project
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-base px-8" data-testid="button-portfolio">
                <Link href="/portfolio">
                  View Portfolio
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
