import { SEO } from "@/components/SEO";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useEffect } from "react";
import { useLocation } from "wouter";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Mail, MapPin, Clock, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you within 24 hours.",
    });

    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "businessmihaicristian@gmail.com",
      link: "mailto:hello@chrisdesign.com",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Bucharest, RO",
      link: null,
    },
    {
      icon: Clock,
      title: "Availability",
      value: "Mon - Fri, 2pm - 9pm EET",
      link: null,
    },
  ];

  return (
    <>
      <SEO
        title="Contact Chris - Let's Work Together"
        description="Get in touch with Chris Design to discuss your next web design project. Available for freelance work and collaborations. Based in San Francisco, serving clients worldwide. Fast response within 24 hours."
        keywords="contact chris design, hire web designer, web design consultation, freelance designer, chris design contact"
      />
      <div className="min-h-screen pt-20 md:pt-24">
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl mb-16">
              <Badge variant="outline" className="mb-4" data-testid="badge-contact">
                Contact
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Let's Create Something <span className="text-primary">Amazing</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Have a project in mind? I'd love to hear about it. Fill out the form below or reach out directly.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <Card className="p-8 md:p-10">
                  <form
                    onSubmit={handleSubmit}
                    name="contact"
                    method="POST"
                    data-netlify="true"
                    data-netlify-honeypot="bot-field"
                  >
                    <input type="hidden" name="form-name" value="contact" />
                    <input type="hidden" name="bot-field" />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          placeholder="John Doe"
                          required
                          data-testid="input-name"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="john@example.com"
                          required
                          data-testid="input-email"
                        />
                      </div>
                    </div>

                    <div className="space-y-2 mb-6">
                      <Label htmlFor="project-type">Project Type *</Label>
                      <Select name="project-type" required>
                        <SelectTrigger data-testid="select-project-type">
                          <SelectValue placeholder="Select a project type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="web-design">Web Design</SelectItem>
                          <SelectItem value="web-development">Web Development</SelectItem>
                          <SelectItem value="branding">Branding</SelectItem>
                          {/*<SelectItem value="mobile-app">Mobile App</SelectItem>*/}
                          <SelectItem value="seo">SEO</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2 mb-6">
                      <Label htmlFor="budget">Budget Range</Label>
                      <Select name="budget">
                        <SelectTrigger data-testid="select-budget">
                          <SelectValue placeholder="Select your budget range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="under-100">Under €100</SelectItem>
                          <SelectItem value="100-300">€100 - €300</SelectItem>
                          <SelectItem value="not-sure">Not Sure</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2 mb-6">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell me about your project..."
                        rows={6}
                        required
                        data-testid="textarea-message"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full md:w-auto px-8"
                      disabled={isSubmitting}
                      data-testid="button-submit"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="animate-pulse">Sending...</span>
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="w-4 h-4 ml-2" />
                        </>
                      )}
                    </Button>
                  </form>
                </Card>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info) => (
                  <Card key={info.title} className="p-6 hover-elevate" data-testid={`card-${info.title.toLowerCase()}`}>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">{info.title}</h3>
                        {info.link ? (
                          <a
                            href={info.link}
                            className="text-muted-foreground hover:text-primary transition-colors"
                            data-testid={`link-${info.title.toLowerCase()}`}
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-muted-foreground">{info.value}</p>
                        )}
                      </div>
                    </div>
                  </Card>
                ))}

                <Card className="p-6 bg-gradient-to-br from-primary/10 to-primary/5">
                  <h3 className="font-semibold mb-2">Response Time</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    I typically respond to all inquiries within 24 hours during business days.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    For urgent matters, please mention it in your message and I'll prioritize accordingly.
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
