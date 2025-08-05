# Styling & Design Standards

## Tailwind CSS Guidelines
- Use Tailwind CSS for all styling
- Follow mobile-first responsive design approach
- Use utility classes over custom CSS when possible
- Leverage Tailwind's design tokens for consistency

## Design System
```typescript
// Use consistent spacing scale
const spacing = {
  xs: "0.5rem",    // 8px
  sm: "0.75rem",   // 12px
  md: "1rem",      // 16px
  lg: "1.5rem",    // 24px
  xl: "2rem",      // 32px
  "2xl": "3rem",   // 48px
}

// Color palette following shadcn/ui conventions
const colors = {
  background: "hsl(var(--background))",
  foreground: "hsl(var(--foreground))",
  primary: "hsl(var(--primary))",
  secondary: "hsl(var(--secondary))",
  muted: "hsl(var(--muted))",
  accent: "hsl(var(--accent))",
  destructive: "hsl(var(--destructive))",
}
```

## Component Styling Patterns
```typescript
// Use class-variance-authority for component variants
import { cva } from "class-variance-authority"

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input hover:bg-accent hover:text-accent-foreground",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)
```

## Responsive Design
- Use Tailwind's responsive prefixes: `sm:`, `md:`, `lg:`, `xl:`, `2xl:`
- Design mobile-first, then enhance for larger screens
- Test on multiple device sizes
- Use proper breakpoints for layout changes

## Dark Mode
- Use CSS variables for theme switching
- Implement proper dark mode variants
- Test both light and dark themes
- Use `next-themes` for theme management

## Accessibility
- Maintain proper color contrast ratios (WCAG AA)
- Use semantic HTML elements
- Implement proper focus states
- Ensure keyboard navigation works properly
- Use proper ARIA labels and roles

## Animation Guidelines
- Use Tailwind's animation utilities
- Keep animations subtle and purposeful
- Respect user's motion preferences
- Use CSS transitions for hover states
- Implement loading states with proper animations
