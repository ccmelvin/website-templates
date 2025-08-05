# Template Development Guidelines

## Template Structure
- Each template should be self-contained and reusable
- Templates should be placed in `components/templates/`
- Include proper TypeScript interfaces for template data
- Provide default props and fallback content
- Ensure templates work with placeholder data

## Template Data Interface
```typescript
interface TemplateData {
  // Basic information
  title: string
  description: string
  category: string
  
  // Visual properties
  color: string
  features: string[]
  
  // Metadata
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced'
  rating: number
  downloads: number
  tags: string[]
  
  // Capabilities
  responsive: boolean
  darkMode: boolean
  animations: boolean
}

interface TemplateProps {
  data: TemplateData
  className?: string
  variant?: 'default' | 'compact' | 'detailed'
  onPreview?: () => void
  onDownload?: () => void
}
```

## Template Component Pattern
```typescript
"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export function TemplateCard({ data, className, variant = 'default', onPreview, onDownload }: TemplateProps) {
  return (
    <Card className={cn("group hover:shadow-lg transition-shadow", className)}>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">{data.title}</CardTitle>
          <Badge variant="secondary">{data.category}</Badge>
        </div>
        <CardDescription>{data.description}</CardDescription>
      </CardHeader>
      
      <CardContent>
        <div className="flex flex-wrap gap-2 mb-4">
          {data.features.map((feature) => (
            <Badge key={feature} variant="outline" className="text-xs">
              {feature}
            </Badge>
          ))}
        </div>
        
        <div className="flex gap-2">
          <Button onClick={onPreview} variant="outline" size="sm">
            Preview
          </Button>
          <Button onClick={onDownload} size="sm">
            Download
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
```

## Responsive Design Requirements
- All templates must be mobile-first responsive
- Test on multiple screen sizes (mobile, tablet, desktop)
- Use proper breakpoints for layout changes
- Ensure touch-friendly interactions on mobile devices

## Accessibility Standards
- Follow WCAG 2.1 AA guidelines
- Ensure keyboard navigation works properly
- Use proper semantic HTML elements
- Provide appropriate ARIA labels and roles
- Maintain proper color contrast ratios

## Dark Mode Support
- All templates must support both light and dark themes
- Use CSS variables for theme-aware colors
- Test both themes thoroughly
- Ensure proper contrast in both modes

## Animation Guidelines
- Use subtle, purposeful animations
- Respect user's motion preferences (`prefers-reduced-motion`)
- Keep animations performant (use CSS transforms)
- Provide loading states with appropriate animations

## Template Categories
- **Business & Corporate**: Professional websites for businesses
- **Health & Wellness**: Fitness, coaching, medical practices
- **Creative & Portfolio**: Artists, designers, photographers
- **E-commerce**: Online stores and product showcases
- **Education**: Schools, courses, training programs
- **Food & Restaurant**: Restaurants, cafes, food services
- **Technology**: Tech companies, SaaS products, startups

## Content Guidelines
- Use meaningful placeholder content
- Provide realistic example data
- Include proper image placeholders with appropriate alt text
- Use consistent naming conventions for template files

## Testing Requirements
- Test template rendering with different data sets
- Verify responsive behavior across devices
- Test accessibility features
- Ensure proper error handling for missing data
- Test performance with large datasets

## Documentation
- Include usage examples for each template
- Document required and optional props
- Provide customization guidelines
- Include screenshots or previews
- Document any special requirements or dependencies
