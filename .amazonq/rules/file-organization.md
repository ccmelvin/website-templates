# File Organization Guidelines

## Directory Structure
Follow the established Next.js App Router structure with clear separation of concerns:

```
├── app/                    # Next.js App Router pages
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout component
│   ├── page.tsx           # Home page
│   └── template/          # Template-specific pages
├── components/
│   ├── ui/                # Reusable shadcn/ui components
│   ├── templates/         # Template-specific components
│   └── theme-provider.tsx # Theme configuration
├── lib/                   # Utility functions and configurations
│   └── utils.ts           # Common utility functions
├── hooks/                 # Custom React hooks
│   ├── use-mobile.ts      # Mobile detection hook
│   └── use-toast.ts       # Toast notification hook
├── styles/               # Additional CSS files
│   └── globals.css       # Global styles and Tailwind imports
├── public/               # Static assets
│   ├── placeholder.jpg   # Placeholder images
│   └── icons/            # Icon files
└── .amazonq/             # Amazon Q configuration
    └── rules/            # Rule definitions
```

## Naming Conventions
- **Files**: Use kebab-case for file names (`template-card.tsx`, `use-mobile.ts`)
- **Components**: Use PascalCase for component names (`TemplateCard`, `UserProfile`)
- **Variables**: Use camelCase for variables and functions (`isLoading`, `handleClick`)
- **Constants**: Use UPPER_SNAKE_CASE for constants (`API_BASE_URL`, `MAX_ITEMS`)
- **Types/Interfaces**: Use PascalCase (`TemplateData`, `UserProps`)

## Import/Export Patterns
```typescript
// Prefer named exports for components
export function TemplateCard({ data }: TemplateProps) {
  // component implementation
}

// Use default exports sparingly, mainly for pages
export default function HomePage() {
  // page implementation
}

// Group imports logically
import React from "react"
import { useState, useEffect } from "react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

import { cn } from "@/lib/utils"
import { useToast } from "@/hooks/use-toast"

import type { TemplateData } from "@/types"
```

## Component File Structure
```typescript
// Component file template
"use client" // If client-side functionality is needed

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

// Types and interfaces
interface ComponentProps {
  // prop definitions
}

// Component variants (if using cva)
const componentVariants = cva(
  // base classes and variants
)

// Main component
const Component = React.forwardRef<HTMLElement, ComponentProps>(
  ({ className, ...props }, ref) => {
    // component implementation
  }
)
Component.displayName = "Component"

// Exports
export { Component, componentVariants }
export type { ComponentProps }
```

## Asset Organization
- **Images**: Store in `public/` with descriptive names
- **Icons**: Use Lucide React icons when possible, store custom icons in `public/icons/`
- **Fonts**: Use Next.js font optimization with Geist font family
- **Placeholder Content**: Store placeholder images and data in organized subdirectories

## Type Definitions
- Create shared types in `lib/types.ts` or individual component files
- Use proper TypeScript module declarations
- Export types alongside components when they're reusable

## Configuration Files
- Keep configuration files in the root directory
- Use proper TypeScript configuration in `tsconfig.json`
- Maintain consistent formatting with Prettier and ESLint configs

## Documentation
- Include README files for complex components or features
- Use JSDoc comments for public APIs
- Maintain changelog for significant updates
- Document any special setup or configuration requirements
