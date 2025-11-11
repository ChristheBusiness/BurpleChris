# Design Guidelines: Website Designer Portfolio

## Design Approach
**Reference-Based Approach** drawing inspiration from premium portfolio platforms like Awwwards winners, Codrops showcases, and designer portfolios (Bruno Simon, Brittany Chiang). The design should feel contemporary, confident, and showcase technical + creative prowess.

## Core Design Principles
1. **Elegant Boldness**: Large typography contrasted with generous whitespace
2. **Burple Identity**: Purple-blue blend as the hero accent, used strategically for emphasis
3. **Refined Interactions**: Subtle, purposeful animations that enhance rather than distract
4. **Professional Confidence**: Premium feel that demonstrates design expertise

## Typography Hierarchy
- **Display Font**: Inter or Satoshi (700-900 weight) for headlines - bold, modern
- **Body Font**: Inter (400-600 weight) for content
- **Sizes**: h1 (4xl-6xl), h2 (3xl-4xl), h3 (2xl-3xl), body (base-lg), small (sm)
- **Letter spacing**: Tighter for headlines (-0.02em), normal for body

## Layout System
**Spacing Units**: Use Tailwind units of 4, 6, 8, 12, 16, 20, 24, 32 for consistent rhythm
- Section padding: py-20 to py-32 (desktop), py-12 to py-16 (mobile)
- Component spacing: gap-8 to gap-12 for grids
- Container: max-w-7xl with px-6 to px-8

## Color Strategy (Burple Theme)
**Burple Accent Shades** (to be defined in Tailwind config):
- Primary burple: Base accent (purple-blue blend around #6366F1 shifted toward blue)
- Light burple: Hover/interactive states
- Dark burple: Dark mode accent
- Muted burple: Subtle backgrounds

**Usage**:
- Primary CTAs and interactive elements
- Accent borders and underlines
- Gradient overlays (burple to transparent)
- Icon highlights and active states

## Page-Specific Layouts

### Home Page
**Hero Section** (80vh):
- Large, bold headline introducing the designer (5xl-6xl)
- Subheadline with specialty/location
- Subtle animated gradient background (burple tint)
- Primary CTA button (burple accent)
- Scroll indicator with smooth animation

**Featured Work Grid** (3 columns desktop, 1 mobile):
- Large project cards with hover lift effect
- Project thumbnail images (16:10 aspect ratio)
- Project title, category tag
- Smooth scale on hover (1.02x)

**Services Overview** (2 columns):
- Icon + title + brief description
- Minimal, clean cards with subtle borders

**Testimonials Carousel**:
- Single testimonial displayed with rotation
- Client photo (circular), quote, name, company
- Navigation dots (burple when active)

**CTA Section**:
- Bold headline "Ready to elevate your brand?"
- Primary + secondary buttons
- Subtle gradient background

### About Page
**Intro Section**:
- Designer photo (large, rounded corners)
- Bio text (2-column on desktop)
- Skills/technologies grid

**Experience Timeline**:
- Vertical timeline with burple accent line
- Company logos, roles, dates

**Approach/Process Section**:
- Numbered steps (1-4)
- Icons, titles, descriptions
- Staggered card layout

### Portfolio Page
**Project Gallery**:
- Masonry-style grid (Pinterest-inspired)
- Varied card heights based on content
- Filter buttons by category (burple when active)
- Lazy-loaded images

**Project Detail View** (individual project pages):
- Full-width hero image
- Project overview (challenge, solution, results)
- Multiple screenshots in grid layout
- Technologies used (pill badges)
- Next project navigation

### Services Page
**Service Cards** (2-3 columns):
- Icon, title, detailed description
- Pricing starting point
- "Learn More" link with arrow

**Process Section**:
- Horizontal stepper (desktop) / vertical (mobile)
- Phase numbers, descriptions, deliverables

### Contact Page
**Two-Column Layout**:
- Left: Netlify form (name, email, project type dropdown, message)
- Right: Contact information, availability, social links

**Form Design**:
- Floating labels
- Burple focus rings
- Clear validation states
- Burple submit button with loading state

## Component Library

### Navigation
- Horizontal nav (desktop) with burple underline on active
- Hamburger menu (mobile) with slide-in drawer
- Light/dark mode toggle (sun/moon icon)
- Smooth transitions between states

### Buttons
- Primary: Burple background, white text, subtle shadow
- Secondary: Burple border, burple text, transparent background
- Hover: Slight lift (translateY(-2px)), increased shadow
- Padding: px-6 py-3 (standard), px-8 py-4 (large)

### Cards
- Subtle border (light mode), elevated appearance (dark mode)
- Rounded corners (rounded-lg to rounded-xl)
- Hover: Shadow increase, subtle lift
- Internal padding: p-6 to p-8

### Footer
- Three-column layout (About, Quick Links, Contact)
- Social media icons (burple on hover)
- Newsletter signup form
- Copyright and credits

## Animations
**Minimal, Purposeful Only**:
- Page transitions: Fade in content (0.3s)
- Scroll reveals: Elements fade up on viewport entry (intersection observer)
- Hover effects: Scale (1.02-1.05x), lift, color shifts
- Loading states: Skeleton screens with shimmer

**Avoid**: Excessive parallax, auto-playing carousels, distracting motion

## Light/Dark Mode
**Toggle Behavior**:
- Persistent preference (localStorage)
- Smooth transition between modes (transition-colors duration-200)
- Icon morphs (sun ↔ moon)

**Mode Adjustments**:
- Light: White backgrounds, dark text, subtle shadows
- Dark: Dark backgrounds (#0f172a range), light text, elevated cards
- Burple adapts: Brighter in dark mode for contrast

## Images
**Hero Sections**: No large background images - use gradient/solid backgrounds
**Portfolio Cards**: Project thumbnails (use placeholder services initially)
**About Page**: Professional designer headshot
**Testimonials**: Client photos (circular, small)
**Logo Placements**: Client/technology logos where applicable

## Accessibility
- ARIA labels on interactive elements
- Focus visible states (burple ring)
- Semantic HTML (nav, main, section, article)
- Alt text for all images
- Keyboard navigable

## SEO Elements
- Dynamic page titles via React Helmet
- Meta descriptions per page
- Open Graph tags for social sharing
- Structured data for portfolio items
- Semantic heading hierarchy

**Character**: Confident, sophisticated, modern - a designer who knows their craft and isn't afraid to show it through bold choices balanced with refined execution.