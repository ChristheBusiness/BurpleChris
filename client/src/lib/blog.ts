import matter from 'gray-matter';

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  category: string;
  featured: boolean;
  image: string;
  author: string;
  readTime: string;
  content: string;
}

const blogPosts: Record<string, string> = {
  'web-design-trends-2024': `---
title: "Top Web Design Trends Shaping 2024"
slug: "web-design-trends-2024"
date: "2024-01-15"
excerpt: "Discover the cutting-edge design trends that are transforming the digital landscape in 2024, from AI-powered interfaces to immersive 3D experiences."
category: "Design Trends"
featured: true
image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&auto=format&fit=crop"
author: "Chris"
readTime: "8 min read"
---

# Top Web Design Trends Shaping 2024

The web design landscape is evolving faster than ever. As we navigate through 2024, several exciting trends are emerging that promise to reshape how we think about digital experiences.

## 1. AI-Powered Personalization

Artificial intelligence is no longer just a buzzword—it's actively transforming how users interact with websites. From personalized content recommendations to adaptive interfaces that learn from user behavior, AI is making websites smarter and more intuitive.

### Key Implementations:
- Dynamic content that adapts to user preferences
- Predictive search and navigation
- Automated accessibility improvements

## 2. Immersive 3D Experiences

WebGL and Three.js have matured significantly, enabling designers to create stunning 3D experiences directly in the browser without requiring plugins or heavy downloads.

**Benefits include:**
- Enhanced product visualization for e-commerce
- Interactive storytelling
- Memorable brand experiences

## 3. Minimalist Maximalism

This might sound contradictory, but it's about creating bold, eye-catching designs while maintaining clean, uncluttered interfaces. Think vibrant gradients, large typography, and generous white space.

## 4. Dark Mode by Default

With major platforms adopting dark mode, users increasingly expect it as a standard feature. But in 2024, we're seeing designers think "dark mode first" rather than as an afterthought.

## 5. Micro-Interactions and Animations

Subtle animations and micro-interactions continue to be crucial for creating delightful user experiences. These small details can:
- Provide visual feedback
- Guide user attention
- Make interfaces feel more alive

## Conclusion

The future of web design is exciting and full of possibilities. By embracing these trends thoughtfully and prioritizing user experience, we can create digital products that are not only beautiful but also functional and accessible.

What trends are you most excited about? Let's discuss in the comments below!`,

  'responsive-design-best-practices': `---
title: "Responsive Design Best Practices for Modern Websites"
slug: "responsive-design-best-practices"
date: "2024-02-20"
excerpt: "Learn the essential strategies for creating truly responsive websites that deliver exceptional experiences across all devices and screen sizes."
category: "Development"
featured: true
image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&auto=format&fit=crop"
author: "Chris"
readTime: "10 min read"
---

# Responsive Design Best Practices for Modern Websites

In today's multi-device world, responsive design isn't optional—it's essential. Here's your comprehensive guide to building websites that look and work beautifully everywhere.

## The Mobile-First Approach

Starting with mobile design and progressively enhancing for larger screens ensures your core experience is solid on all devices.

\`\`\`css
.container {
  padding: 1rem;
  width: 100%;
}

@media (min-width: 768px) {
  .container {
    padding: 2rem;
    max-width: 720px;
    margin: 0 auto;
  }
}
\`\`\`

## Fluid Typography

Use responsive font sizing to ensure readability across all devices.

## Flexible Grids and Layouts

CSS Grid and Flexbox are your best friends for creating adaptable layouts.

## Touch-Friendly Interactions

Remember that mobile users interact with their fingers, not mice:
- Minimum touch target size: 44x44px
- Adequate spacing between interactive elements
- Avoid hover-only interactions

## Conclusion

Responsive design is an ongoing journey, not a destination. Keep testing, iterating, and improving to ensure your users have the best possible experience.`,

  'ux-psychology-principles': `---
title: "Psychology Principles Every UX Designer Should Know"
slug: "ux-psychology-principles"
date: "2024-03-10"
excerpt: "Understanding human psychology is key to creating intuitive, user-friendly designs. Explore the essential principles that guide user behavior and decision-making."
category: "UX Design"
featured: false
image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&auto=format&fit=crop"
author: "Chris"
readTime: "12 min read"
---

# Psychology Principles Every UX Designer Should Know

Great UX design isn't just about aesthetics—it's about understanding how people think, behave, and make decisions.

## 1. Hick's Law

The more choices you give, the longer it takes to decide.

## 2. Fitts's Law

The time to acquire a target is a function of distance and size.

## 3. Miller's Law

People can hold about 7 (±2) items in working memory.

## Conclusion

By understanding the psychology behind user behavior, you can create designs that feel intuitive, reduce friction, and ultimately serve users better.`,

  'case-study-ecommerce-redesign': `---
title: "Case Study: How We Increased Conversions by 45% Through Strategic Redesign"
slug: "case-study-ecommerce-redesign"
date: "2024-03-25"
excerpt: "A deep dive into our e-commerce redesign project that dramatically improved user experience and drove significant business results."
category: "Case Studies"
featured: true
image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop"
author: "Chris"
readTime: "15 min read"
---

# Case Study: E-Commerce Redesign Success Story

## The Challenge

Our client, a mid-sized fashion retailer, was struggling with high cart abandonment rates and low mobile conversion.

## The Results

After 3 months:
- 45% increase in overall conversion rate
- 62% reduction in cart abandonment
- Mobile conversions improved from 2.3% to 8.7%

## Conclusion

This project demonstrates that thoughtful, user-centered design combined with strategic business thinking can deliver measurable results.`
};

export async function getAllBlogPosts(): Promise<BlogPost[]> {
  const posts: BlogPost[] = [];
  
  for (const [slug, content] of Object.entries(blogPosts)) {
    const { data, content: markdown } = matter(content);
    posts.push({
      slug,
      title: data.title,
      date: data.date,
      excerpt: data.excerpt,
      category: data.category,
      featured: data.featured,
      image: data.image,
      author: data.author,
      readTime: data.readTime,
      content: markdown,
    });
  }
  
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  const content = blogPosts[slug];
  if (!content) return null;
  
  const { data, content: markdown } = matter(content);
  return {
    slug,
    title: data.title,
    date: data.date,
    excerpt: data.excerpt,
    category: data.category,
    featured: data.featured,
    image: data.image,
    author: data.author,
    readTime: data.readTime,
    content: markdown,
  };
}

export async function getFeaturedPosts(limit = 3): Promise<BlogPost[]> {
  const allPosts = await getAllBlogPosts();
  return allPosts.filter(post => post.featured).slice(0, limit);
}
