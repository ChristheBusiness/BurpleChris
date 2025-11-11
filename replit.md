# Website Designer Portfolio

## Overview

This is a premium website designer portfolio application built as a full-stack TypeScript project. The application showcases a designer's work, services, and professional experience through a modern, elegantly designed interface featuring a "burple" (blue-purple) accent color theme. The portfolio includes pages for Home, About, Portfolio, Services, and Contact, all designed to demonstrate design expertise through refined interactions and bold typography.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System**
- **React 18** with TypeScript for component-based UI development
- **Vite** as the build tool and development server, providing fast HMR and optimized production builds
- **Wouter** for client-side routing (lightweight alternative to React Router)
- Client code resides in `client/src/` with entry point at `client/src/main.tsx`

**UI Component System**
- **shadcn/ui** component library built on Radix UI primitives
- Components follow the "new-york" style variant
- All UI components are located in `client/src/components/ui/`
- Custom theme system with CSS variables for light/dark mode support
- Theme management through React Context (`ThemeProvider`)

**Styling Approach**
- **Tailwind CSS** for utility-first styling with custom configuration
- CSS variables for dynamic theming (defined in `client/src/index.css`)
- Custom color palette including "burple" accent colors
- Responsive design with mobile-first approach
- Design system following spacing units of 4, 6, 8, 12, 16, 20, 24, 32

**State Management**
- **TanStack Query (React Query)** for server state management and data fetching
- Local component state using React hooks
- Custom query client configuration with optimistic defaults

**Design Philosophy**
- Premium, award-winning aesthetic inspired by Awwwards and Codrops
- Bold typography using Inter font family (400-900 weights)
- Generous whitespace and elegant interactions
- "Burple" (purple-blue blend) as primary accent color
- Subtle animations that enhance rather than distract
- Professional confidence conveyed through design choices

### Backend Architecture

**Server Framework**
- **Express.js** server with TypeScript
- Server code in `server/` directory with entry at `server/index.ts`
- Middleware for JSON parsing and request logging
- Custom request/response logging with duration tracking

**Development Setup**
- **Vite middleware mode** for development with HMR
- SSR-ready architecture using Vite's template transformation
- Replit-specific plugins for development experience (runtime error overlay, cartographer, dev banner)

**Routing Strategy**
- API routes prefixed with `/api` (defined in `server/routes.ts`)
- Static file serving for production builds
- Client-side routing handled by Wouter for SPA experience

**Storage Interface**
- Abstracted storage interface (`IStorage`) for data persistence
- In-memory implementation (`MemStorage`) as default
- Designed to be replaced with database implementation
- Currently includes user CRUD operations as reference

### Data Storage Solutions

**Database Configuration**
- **Drizzle ORM** configured for PostgreSQL
- Schema defined in `shared/schema.ts`
- Database credentials via `DATABASE_URL` environment variable
- **Neon Database** serverless driver (`@neondatabase/serverless`)
- Migration files output to `./migrations`

**Current Schema**
- Users table with UUID primary keys, username, and password fields
- Zod validation schemas derived from Drizzle tables
- Shared types between frontend and backend via `shared/` directory

**Note**: The application is configured for PostgreSQL via Drizzle, but the actual database connection is not yet implemented in the storage layer. The `MemStorage` class serves as a temporary in-memory data store.

### Authentication & Authorization

**Current State**
- User schema exists with username/password fields
- No authentication middleware currently implemented
- No session management configured (though `connect-pg-simple` is available for PostgreSQL sessions)
- Authentication system needs to be built

**Planned Approach**
- Session-based authentication using Express sessions
- PostgreSQL session store via `connect-pg-simple`
- Password hashing (implementation pending)
- Protected routes for authenticated users

## External Dependencies

### UI & Component Libraries
- **Radix UI**: Comprehensive suite of accessible, unstyled UI primitives (@radix-ui/react-*)
- **shadcn/ui**: Pre-built components using Radix UI and Tailwind CSS
- **Lucide React**: Icon library for consistent iconography
- **class-variance-authority**: Type-safe variant management for components
- **cmdk**: Command palette component
- **embla-carousel-react**: Carousel/slider functionality
- **vaul**: Drawer component library

### State & Data Management
- **TanStack Query v5**: Server state management and caching
- **React Hook Form**: Form state management with validation
- **Zod**: Schema validation and type safety
- **@hookform/resolvers**: Zod resolver for React Hook Form integration

### Styling & Theming
- **Tailwind CSS**: Utility-first CSS framework
- **tailwindcss-animate**: Animation utilities for Tailwind
- **PostCSS**: CSS processing with Autoprefixer

### Development Tools
- **TypeScript**: Type safety across the stack
- **Vite**: Fast build tool and dev server
- **tsx**: TypeScript execution for Node.js
- **esbuild**: Fast bundler for server-side code
- **Replit plugins**: Development experience enhancements (@replit/vite-plugin-*)

### Database & ORM
- **Drizzle ORM**: Type-safe ORM for PostgreSQL
- **Drizzle Kit**: Migration and schema management tools
- **Drizzle Zod**: Automatic Zod schema generation from Drizzle tables
- **@neondatabase/serverless**: Neon's serverless PostgreSQL driver

### Utilities
- **date-fns**: Date manipulation and formatting
- **clsx & tailwind-merge**: Conditional class name utilities
- **react-helmet-async**: SEO and meta tag management
- **nanoid**: Unique ID generation

### HTTP & Routing
- **Express**: Web server framework
- **Wouter**: Lightweight client-side routing
- **connect-pg-simple**: PostgreSQL session store (available but not yet configured)