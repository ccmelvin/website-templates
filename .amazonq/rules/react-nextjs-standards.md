# React & Next.js Standards

## Component Structure
- Use functional components with hooks
- Prefer `"use client"` directive for client-side components
- Use Next.js App Router structure (app directory)
- Follow React best practices for state management

## Component Patterns
```typescript
"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

interface ComponentProps {
  title: string
  onAction?: () => void
}

export function Component({ title, onAction }: ComponentProps) {
  const [isLoading, setIsLoading] = useState(false)
  
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">{title}</h2>
      <Button onClick={onAction} disabled={isLoading}>
        {isLoading ? "Loading..." : "Action"}
      </Button>
    </div>
  )
}
```

## State Management
- Use React hooks for local state
- Consider context for shared state across components
- Implement proper loading and error states
- Use custom hooks for complex logic

## Error Handling
```typescript
// Use proper error boundaries
import { ErrorBoundary } from "react-error-boundary"

function ErrorFallback({ error }: { error: Error }) {
  return (
    <div className="text-center p-4">
      <h2>Something went wrong:</h2>
      <pre className="text-red-500">{error.message}</pre>
    </div>
  )
}

// Wrap components that might error
<ErrorBoundary FallbackComponent={ErrorFallback}>
  <Component />
</ErrorBoundary>
```

## Next.js Specific
- Use proper metadata API for SEO
- Implement proper loading.tsx and error.tsx files
- Use Next.js Image component for optimized images
- Leverage server components when possible
- Use proper dynamic imports for code splitting

## Performance
- Use React.memo() for expensive components
- Implement proper code splitting and lazy loading
- Minimize re-renders with proper dependency arrays
- Use useMemo and useCallback appropriately
