# ST-Order Admin Dashboard - Dev Guide

## Commands
- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Run production build locally
- `npm run lint` - Run ESLint

## Code Style

### Imports
- React imports first, then Next.js imports, then components, then utilities
- Absolute imports using `@/*` path alias

### Component Conventions
- Use TypeScript for all components
- Use "use client" directive for client components
- Components in PascalCase (e.g., `Header.tsx`)
- Page components defined in `page.tsx` files

### UI Standards
- Use Tailwind for styling 
- Use clsx for conditional class names
- Use color variables from `styles/color.ts` for consistency
- For images, use Next.js Image component with aria-hidden where appropriate

### Error Handling
- Provide user-friendly error messages
- Use appropriate status codes for API responses

### TypeScript
- Strict mode enabled
- Prefer explicit types over `any`
- Use interfaces for object types