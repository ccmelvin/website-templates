# Accessibility Guidelines

## Core Principles
- Follow WCAG 2.1 AA standards
- Ensure all functionality is keyboard accessible
- Provide proper semantic markup
- Maintain sufficient color contrast ratios
- Support screen readers and assistive technologies

## Keyboard Navigation
- All interactive elements must be focusable with Tab key
- Implement proper focus management for modals and dialogs
- Use proper focus indicators (visible focus rings)
- Support arrow key navigation for complex components
- Provide keyboard shortcuts where appropriate

## ARIA Labels and Roles
```typescript
// Proper ARIA labeling
<button aria-label="Close dialog" onClick={onClose}>
  <X className="h-4 w-4" />
</button>

// Use proper roles for custom components
<div role="tablist" aria-orientation="horizontal">
  <button role="tab" aria-selected={isSelected} aria-controls="panel-1">
    Tab 1
  </button>
</div>

// Provide descriptions for complex interactions
<input
  type="password"
  aria-describedby="password-help"
  aria-invalid={hasError}
/>
<div id="password-help">
  Password must be at least 8 characters long
</div>
```

## Color and Contrast
- Maintain minimum contrast ratio of 4.5:1 for normal text
- Use 3:1 contrast ratio for large text (18pt+ or 14pt+ bold)
- Don't rely solely on color to convey information
- Test with color blindness simulators
- Provide alternative indicators (icons, patterns, text)

## Images and Media
- Provide meaningful alt text for all images
- Use empty alt="" for decorative images
- Provide captions and transcripts for videos
- Use proper figure and figcaption elements

```typescript
// Good alt text examples
<img src="chart.png" alt="Sales increased 25% from Q1 to Q2 2024" />
<img src="decorative-border.png" alt="" /> // Decorative image
```

## Form Accessibility
- Associate labels with form controls
- Provide clear error messages
- Use fieldsets and legends for grouped controls
- Implement proper validation feedback

```typescript
<div className="space-y-2">
  <label htmlFor="email" className="text-sm font-medium">
    Email Address
  </label>
  <input
    id="email"
    type="email"
    aria-describedby={error ? "email-error" : undefined}
    aria-invalid={!!error}
    className="w-full px-3 py-2 border rounded-md"
  />
  {error && (
    <p id="email-error" className="text-sm text-red-600" role="alert">
      {error}
    </p>
  )}
</div>
```

## Screen Reader Support
- Use proper heading hierarchy (h1, h2, h3, etc.)
- Provide skip links for main content
- Use landmark roles (main, nav, aside, etc.)
- Announce dynamic content changes with aria-live

## Testing Requirements
- Test with keyboard-only navigation
- Use screen reader testing (VoiceOver, NVDA, JAWS)
- Validate HTML for semantic correctness
- Use automated accessibility testing tools
- Test with users who have disabilities when possible

## Common Patterns
```typescript
// Modal accessibility
<Dialog>
  <DialogTrigger asChild>
    <Button>Open Dialog</Button>
  </DialogTrigger>
  <DialogContent aria-describedby="dialog-description">
    <DialogHeader>
      <DialogTitle>Confirm Action</DialogTitle>
      <DialogDescription id="dialog-description">
        This action cannot be undone.
      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>

// Loading states
<Button disabled={isLoading} aria-describedby="loading-status">
  {isLoading ? "Loading..." : "Submit"}
</Button>
{isLoading && (
  <div id="loading-status" aria-live="polite" className="sr-only">
    Processing your request, please wait.
  </div>
)}
```
