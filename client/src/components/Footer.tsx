import { Link } from "wouter";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    pages: [
      { href: "/", label: "Home" },
      { href: "/about", label: "About" },
      { href: "/portfolio", label: "Portfolio" },
      { href: "/services", label: "Services" },
      { href: "/blog", label: "Blog" },
      { href: "/contact", label: "Contact" },
    ],
    social: [
      { icon: Github, href: "https://github.com", label: "GitHub" },
      { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
      { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
      { icon: Mail, href: "mailto:hello@chrisdesign.com", label: "Email" },
    ],
  };

  return (
    <footer className="bg-card border-t border-card-border mt-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Chris<span className="text-primary">Design</span>
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Crafting exceptional digital experiences through thoughtful design and innovative solutions by Chris, an award-winning web designer.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.pages.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    data-testid={`link-footer-${link.label.toLowerCase()}`}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex gap-2">
              {footerLinks.social.map((social) => (
                <Button
                  key={social.label}
                  variant="ghost"
                  size="icon"
                  asChild
                  className="rounded-full"
                  data-testid={`button-social-${social.label.toLowerCase()}`}
                >
                  <a href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}>
                    <social.icon className="h-5 w-5" />
                  </a>
                </Button>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© {currentYear} Chris Design. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
