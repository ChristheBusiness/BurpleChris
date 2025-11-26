import { SEO } from "@/components/SEO";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Award, Users, Briefcase } from "lucide-react";

export default function About() {
  const skills = [
    /*"Figma",
    "Adobe XD",
    "Sketch",*/
    "React",
    "TypeScript",
    "Tailwind CSS",
    /*"Framer Motion",
    "Webflow",
    "WordPress",*/
    "UI/UX Design",
    "Brand Strategy",
    "Design Systems",
  ];

  /*const experience = [
    {
      year: "2020 - Present",
      company: "Chris Design (Freelance)",
      role: "Lead Designer & Developer",
      description: "Building exceptional digital experiences for startups and established brands worldwide.",
    },
    {
      year: "2018 - 2020",
      company: "Digital Agency Co",
      role: "Senior Web Designer",
      description: "Led design initiatives for Fortune 500 clients, focusing on conversion optimization.",
    },
    {
      year: "2016 - 2018",
      company: "Creative Studio",
      role: "Web Designer",
      description: "Crafted responsive websites and brand identities for diverse client portfolio.",
    },
  ];*/

  const stats = [
    { icon: Briefcase, value: "1", label: "Projects Completed" },
    { icon: Users, value: "1", label: "Happy Client" },
    /*{ icon: Award, value: "25+", label: "Awards Won" },*/
  ];

  const approach = [
    {
      number: "01",
      title: "Discovery",
      description: "Deep dive into your brand, goals, and target audience to understand the full picture.",
    },
    {
      number: "02",
      title: "Strategy",
      description: "Develop a comprehensive plan that aligns design decisions with business objectives.",
    },
    {
      number: "03",
      title: "Design",
      description: "Create stunning visuals and intuitive interfaces that engage and convert.",
    },
    {
      number: "04",
      title: "Develop",
      description: "Build responsive, performant websites using cutting-edge technologies.",
    },
    {
      number: "05",
      title: "Launch",
      description: "Deploy with confidence and provide ongoing support to ensure continued success.",
    },
  ];

  return (
    <>
      <SEO
        title="About Chris - Web Designer & Developer"
        description="Meet Chris, a web designer and developer with over 5 years of experience creating exceptional digital experiences. Learn about my journey, design approach, and commitment to crafting beautiful, user-centric websites."
        keywords="about chris design, web designer bio, design experience, UI/UX portfolio, chris web developer"
      />
      <div className="min-h-screen pt-20 md:pt-24">
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <Badge variant="outline" className="mb-4" data-testid="badge-about">
                  About Me
                </Badge>
                <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                  Designing the Future,
                  <br />
                  <span className="text-primary">One Pixel at a Time</span>
                </h1>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Hi, I'm a passionate website designer and developer. I believe great design is invisible—it just works.
                  </p>
                  <p>
                    My journey began with a simple curiosity about how things work on the web. That curiosity evolved into a
                    deep passion for crafting beautiful, functional websites that help businesses thrive in the digital age.
                  </p>
                  {/*<p>
                    When I'm not designing, you'll find me exploring the latest design trends, contributing to open-source
                    projects, or sharing knowledge with the design community.
                  </p>*/}
                </div>
              </div>

              <div className="relative">
                <div className="aspect-square rounded-xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=800&fit=crop"
                    alt="Designer workspace"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-xl shadow-lg">
                  <p className="text-4xl font-bold">12+</p>
                  <p className="text-sm">Months Of Experience</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-accent/30">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <Card key={stat.label} className="p-8 text-center hover-elevate" data-testid={`card-stat-${index}`}>
                  <stat.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <p className="text-4xl font-bold mb-2" data-testid={`text-stat-value-${index}`}>
                    {stat.value}
                  </p>
                  <p className="text-muted-foreground">{stat.label}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/*<section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Experience</h2>
              <p className="text-muted-foreground text-lg">A timeline of my professional journey</p>
            </div>

            <div className="space-y-8">
              {experience.map((item, index) => (
                <div
                  key={item.company}
                  className="relative pl-8 md:pl-12 border-l-2 border-primary/30"
                  data-testid={`item-experience-${index}`}
                >
                  <div className="absolute left-0 top-0 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background" />
                  <div className="pb-8">
                    <p className="text-sm text-primary font-semibold mb-2">{item.year}</p>
                    <h3 className="text-2xl font-bold mb-1">{item.role}</h3>
                    <p className="text-lg text-muted-foreground mb-3">{item.company}</p>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>*/}

        <section className="py-16 md:py-24 bg-accent/30">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Skills & Expertise</h2>
              <p className="text-muted-foreground text-lg">Tools and technologies I work with</p>
            </div>

            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <Badge
                  key={skill}
                  variant="secondary"
                  className="px-4 py-2 text-sm hover-elevate"
                  data-testid={`badge-skill-${index}`}
                >
                  <CheckCircle2 className="w-4 h-4 mr-2" />
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">My Approach</h2>
              <p className="text-muted-foreground text-lg">How I bring your vision to life</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {approach.map((step, index) => (
                <Card key={step.number} className="p-6 hover-elevate duration-300 hover:scale-105" data-testid={`card-approach-${index}`}>
                  <div className="text-6xl font-bold text-primary/20 mb-4">{step.number}</div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
