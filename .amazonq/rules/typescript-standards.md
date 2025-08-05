# TypeScript Standards

## General Rules
- Always use TypeScript for all new files
- Use strict type checking as configured in `tsconfig.json`
- Prefer interfaces over types for object definitions
- Use proper type annotations for function parameters and return types
- Avoid using `any` type - use proper typing or `unknown` when necessary

## Interface Definitions
```typescript
// Preferred: Interface for object shapes
interface ComponentProps {
  className?: string
  children?: React.ReactNode
  title: string
  onAction?: () => void
}

// Use type for unions, primitives, or computed types
type Status = 'loading' | 'success' | 'error'
type ComponentVariant = 'default' | 'destructive' | 'outline'
```

## Function Typing
```typescript
// Always type function parameters and return types
function processTemplate(template: Template): ProcessedTemplate {
  // implementation
}

// Use proper async/await typing
async function fetchTemplates(): Promise<Template[]> {
  // implementation
}
```

## Component Props
```typescript
// Standard component props pattern
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link'
  size?: 'default' | 'sm' | 'lg' | 'icon'
  asChild?: boolean
}
```

## Generic Types
```typescript
// Use generics for reusable components
interface SelectProps<T> {
  options: T[]
  value?: T
  onChange: (value: T) => void
  getLabel: (option: T) => string
}
```

## Utility Types
- Use built-in utility types: `Partial<T>`, `Required<T>`, `Pick<T, K>`, `Omit<T, K>`
- Create custom utility types when needed for project-specific patterns
