import { SEO } from "@/components/SEO";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Search } from "lucide-react";
import { useState } from "react";
import { Input } from "@/components/ui/input";

export default function Portfolio() {
  const [filter, setFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = ["all", "E-Commerce", "SaaS", "Portfolio", "Corporate", "Mobile"];

  const projects = [
    {
      id: 1,
      title: "E-Commerce Reimagined",
      category: "E-Commerce",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      description: "Complete redesign of an online fashion retailer, resulting in 150% increase in conversions",
      tech: ["React", "Shopify", "Tailwind"],
      link: "#",
    },
    {
      id: 2,
      title: "FinTech Dashboard",
      category: "SaaS",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      description: "Intuitive analytics platform for modern financial advisors",
      tech: ["Vue.js", "D3.js", "Node.js"],
      link: "#",
    },
    {
      id: 3,
      title: "Creative Portfolio",
      category: "Portfolio",
      image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&h=600&fit=crop",
      description: "Minimalist portfolio showcasing photography and visual arts",
      tech: ["Next.js", "Framer Motion", "Sanity"],
      link: "#",
    },
    {
      id: 4,
      title: "Corporate Website",
      category: "Corporate",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop",
      description: "Professional website for a global consulting firm",
      tech: ["WordPress", "GSAP", "PHP"],
      link: "#",
    },
    {
      id: 5,
      title: "Fitness App",
      category: "Mobile",
      image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&h=600&fit=crop",
      description: "Mobile-first design for a workout tracking application",
      tech: ["React Native", "Firebase", "Redux"],
      link: "#",
    },
    {
      id: 6,
      title: "Restaurant Booking",
      category: "E-Commerce",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop",
      description: "Seamless reservation system for upscale dining establishments",
      tech: ["Angular", "Node.js", "MongoDB"],
      link: "#",
    },
    {
      id: 7,
      title: "Project Management Tool",
      category: "SaaS",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
      description: "Collaborative platform for remote teams",
      tech: ["React", "TypeScript", "PostgreSQL"],
      link: "#",
    },
    {
      id: 8,
      title: "Photography Showcase",
      category: "Portfolio",
      image: "https://images.unsplash.com/photo-1542744094-3a31f272c490?w=800&h=600&fit=crop",
      description: "Elegant gallery for a professional photographer",
      tech: ["Webflow", "JavaScript", "Lightbox"],
      link: "#",
    },
    {
      id: 9,
      title: "Healthcare Platform",
      category: "Corporate",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop",
      description: "Patient portal for a modern medical practice",
      tech: ["Vue.js", "Laravel", "MySQL"],
      link: "#",
    },
  ];

  const filteredProjects = projects.filter((project) => {
    const matchesCategory = filter === "all" || project.category === filter;
    const matchesSearch =
      searchQuery === "" ||
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <SEO
        title="Portfolio - Featured Web Design Projects by Chris"
        description="Explore Chris Design's portfolio of stunning websites and digital experiences. From e-commerce to SaaS platforms, corporate sites to mobile apps - see how award-winning design brings brands to life and drives results."
        keywords="chris design portfolio, web design projects, UI/UX case studies, website examples, design showcase, responsive websites"
      />
      <div className="min-h-screen pt-20 md:pt-24">
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <Badge variant="outline" className="mb-4" data-testid="badge-portfolio">
                Portfolio
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Featured <span className="text-primary">Projects</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                A curated selection of my best work, showcasing diverse solutions for various industries and challenges.
              </p>
            </div>

            <div className="mb-8 space-y-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search projects..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                  data-testid="input-search"
                />
              </div>

              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={filter === category ? "default" : "outline"}
                    onClick={() => setFilter(category)}
                    className="capitalize"
                    data-testid={`button-filter-${category}`}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.length > 0 ? (
                filteredProjects.map((project, index) => (
                  <Card
                    key={project.id}
                    className="group overflow-hidden hover-elevate transition-all duration-300"
                    style={{
                      animationDelay: `${index * 50}ms`,
                    }}
                    data-testid={`card-project-${project.id}`}
                  >
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                        <Button size="sm" variant="secondary" asChild data-testid={`button-view-${project.id}`}>
                          <a href={project.link} className="flex items-center gap-2 no-underline">
                            View Project
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        </Button>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <Badge variant="secondary" className="mb-3" data-testid={`badge-category-${project.id}`}>
                        {project.category}
                      </Badge>
                      <h3 className="text-xl font-bold mb-2" data-testid={`text-title-${project.id}`}>
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <Badge key={tech} variant="outline" className="text-xs" data-testid={`badge-tech-${tech}`}>
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))
              ) : (
                <div className="col-span-full text-center py-16">
                  <p className="text-muted-foreground text-lg">No projects found matching your criteria.</p>
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
