# CLAUDE.md — IGO Agritech Farms Website

## Project Overview

This is the official website for **IGO Agritech Farms**, India's leading Agri Engineering & Agri Consulting brand. The site is a multi-page React application showcasing services, projects, products, blog, careers, and an agri-startup platform.

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 18 + TypeScript |
| Build Tool | Vite 5 |
| Routing | React Router DOM v6 |
| Styling | Tailwind CSS v3 + shadcn/ui |
| Animations | Framer Motion |
| 3D Graphics | Three.js + @react-three/fiber + @react-three/drei |
| Forms | React Hook Form + Zod |
| Data Fetching | TanStack React Query v5 |
| Backend | Supabase (auth + database) |
| Testing | Vitest + Testing Library |

## Project Structure

```
src/
├── App.tsx                  # Root app with all routes
├── main.tsx                 # Entry point
├── components/
│   ├── ui/                  # shadcn/ui primitive components
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── Chatbot.tsx
│   ├── Hero3D.tsx           # Three.js 3D hero scene
│   ├── AnimatedCounter.tsx
│   ├── AnimatedSection.tsx
│   ├── FloatingBackground.tsx
│   ├── PageTransition.tsx
│   └── SectionHeading.tsx
├── pages/
│   ├── Index.tsx            # Homepage
│   ├── About.tsx
│   ├── Services.tsx
│   ├── ServiceRouter.tsx    # Dynamic 4-layer service routing
│   ├── Projects.tsx
│   ├── ProjectRouter.tsx    # Dynamic 4-layer project routing
│   ├── Products.tsx
│   ├── ProductRouter.tsx    # Dynamic product routing
│   ├── Blog.tsx / BlogPost.tsx
│   ├── Courses.tsx
│   ├── Careers.tsx
│   ├── Contact.tsx
│   ├── FAQ.tsx
│   ├── StartupPlatform.tsx
│   ├── AgriStartupPlatform.tsx
│   ├── AgriStartupEnquiry.tsx
│   ├── AdminLogin.tsx
│   ├── AdminDashboard.tsx
│   └── NotFound.tsx
├── data/
│   ├── siteData.ts          # All company info, stats, projects, services, products
│   └── productDetailData.ts # Detailed product data
├── hooks/
│   ├── useAuth.tsx          # Supabase authentication
│   └── use-mobile.tsx
├── integrations/
│   └── supabase/            # Supabase client and types
└── lib/
    └── utils.ts             # cn() utility (clsx + tailwind-merge)
```

## Routing Architecture

The app uses a **4-layer dynamic routing** pattern:

- `/projects/:category` → `ProjectRouter`
- `/projects/:category/:subcategory` → `ProjectRouter`
- `/projects/:category/:subcategory/:feature` → `ProjectRouter`
- Same pattern for `/services/` and `/products/`

## Key Data File

All site content lives in `src/data/siteData.ts`:
- `companyInfo` — company details, contacts, social links, awards
- `stats` — key statistics (10+ years, 1000+ projects, etc.)
- `projects` — project listings with IDs, categories, images
- Services, products, and subcategory data

## Company Details

- **Name:** IGO Agritech Farms
- **Phone:** +91 73977 89803
- **Email:** bankingbackend.indiagreen@gmail.com
- **Address:** No 17, Kovalan street, 2nd main road, Uthandi kanathur, Chennai 600119
- **Website:** https://www.igoagritechfarms.com

## Dev Commands

```bash
npm run dev        # Start dev server (Vite)
npm run build      # Production build
npm run preview    # Preview production build
npm run lint       # ESLint
npm run test       # Vitest (single run)
npm run test:watch # Vitest (watch mode)
```

## Code Conventions

- **Path alias:** `@/` maps to `src/`
- **Component style:** Functional components with TypeScript, no class components
- **Styling:** Tailwind utility classes; use `cn()` from `@/lib/utils` for conditional classes
- **Icons:** Lucide React (`lucide-react`)
- **UI primitives:** Always use existing shadcn/ui components from `src/components/ui/` before building custom ones
- **Animations:** Use `AnimatedSection` wrapper or Framer Motion directly
- **Images:** Stored under `public/assets/` with subdirectories per section (projects, service, product, header, etc.)

## Assets Structure

```
public/assets/
├── header/                  # Navbar/header images
├── home page image .png     # Homepage hero image
├── product/main page image/ # Product section images
├── projects/
│   ├── main page/           # Projects listing images
│   └── project subcategories/ # Subcategory images
└── service/                 # Service section images
```

## Authentication

- Supabase-based auth via `src/hooks/useAuth.tsx`
- Admin routes: `/admin/login` and `/admin/dashboard`
- `AuthProvider` wraps the entire app in `App.tsx`

## Important Notes

- Do not commit `.env` files or Supabase keys
- The `public/assets/` image paths must match exactly what is referenced in `siteData.ts` and page components
- The site uses `AnimatePresence` from Framer Motion at the router level for page transitions — new pages should use `PageTransition` wrapper or `AnimatedSection`
- Three.js is used only in `Hero3D.tsx`; avoid adding more 3D dependencies unless necessary
