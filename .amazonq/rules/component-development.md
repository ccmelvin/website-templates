# Component Development Guidelines

## Component Structure
- Follow the established shadcn/ui component pattern
- Place reusable UI components in `components/ui/`
- Place template-specific components in `components/templates/`
- Use proper component composition and avoid prop drilling

## shadcn/ui Component Pattern
```typescript
import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const componentVariants = cva(
  "base-classes",
  {
    variants: {
      variant: {
        default: "default-classes",
        secondary: "secondary-classes",
      },
      size: {
        default: "default-size-classes",
        sm: "small-size-classes",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ComponentProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof componentVariants> {
  asChild?: boolean
}

const Component = React.forwardRef<HTMLDivElement, ComponentProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "div"
    return (
      <Comp
        className={cn(componentVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Component.displayName = "Component"

export { Component, componentVariants }
```

## Template Components
- Each template should be self-contained and reusable
- Include proper TypeScript interfaces for template data
- Provide default props and fallback content
- Ensure templates work with placeholder data

```typescript
interface TemplateData {
  title: string
  description: string
  features: string[]
  // ... other template-specific data
}

interface TemplateProps {
  data: TemplateData
  className?: string
  variant?: 'default' | 'compact'
}

export function Template({ data, className, variant = 'default' }: TemplateProps) {
  // Template implementation
}
```

## Accessibility Requirements
- All interactive elements must be keyboard accessible
- Use proper ARIA labels and roles
- Implement focus management for complex components
- Ensure proper color contrast ratios
- Use semantic HTML elements

## Component Testing
- Test component rendering with different props
- Test user interactions (clicks, keyboard navigation)
- Test accessibility features
- Ensure responsive behavior works correctly

## Performance Considerations
- Use React.memo() for components that receive stable props
- Implement proper key props for list items
- Avoid creating objects/functions in render
- Use useCallback and useMemo appropriately

## Component Documentation
- Include JSDoc comments for complex components
- Document prop interfaces thoroughly
- Provide usage examples in comments
- Document any special behavior or requirements
