# Style Guide for Docusaurus UI/UX Upgrade

## Overview
This style guide documents the design system and implementation patterns used in the Docusaurus UI/UX upgrade for maintainability and consistency.

## Color System

### Primary Colors
- `--ifm-color-primary`: #2c66c4 (Modern blue with good contrast)
- `--ifm-color-primary-dark`: #2558aa
- `--ifm-color-primary-darker`: #22529e
- `--ifm-color-primary-darkest`: #1c4380
- `--ifm-color-primary-light`: #4d7bd6
- `--ifm-color-primary-lighter`: #6b90e0
- `--ifm-color-primary-lightest`: #a4c0e8

### Secondary Colors
- `--ifm-color-secondary`: #6c757d
- Variants follow the same pattern with -dark, -darker, -darkest, -light, -lighter, -lightest suffixes

### Semantic Colors
- `--ifm-color-success`: #28a745 (Passes WCAG AA)
- `--ifm-color-warning`: #ffc107 (Passes WCAG with dark text)
- `--ifm-color-danger`: #dc3545 (Passes WCAG AA)

### Background and Text Colors
- `--ifm-color-background`: #ffffff
- `--ifm-color-content`: #242526
- `--ifm-color-content-secondary`: #525354
- Emphasis levels from 0 to 1000 for different contrast needs

### Accessibility Compliance
All colors meet WCAG 2.1 AA standards with minimum 4.5:1 contrast ratio for normal text.

## Typography System

### Font Families
- Base: `system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif`
- Monospace: `SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace`

### Font Sizes
- Base: 16px
- Line height: 1.6 (for readability)

### Heading Hierarchy
- h1: 2.5rem (with border-bottom)
- h2: 2rem (with border-bottom)
- h3: 1.5rem
- h4: 1.25rem
- h5: 1.1rem
- h6: 1rem (with secondary color)

## Spacing System

### Spacing Scale
- `--ifm-spacing-xs`: 0.5rem
- `--ifm-spacing-sm`: 0.75rem
- `--ifm-spacing-md`: 1rem
- `--ifm-spacing-lg`: 1.5rem
- `--ifm-spacing-xl`: 2rem
- `--ifm-spacing-2xl`: 3rem
- `--ifm-spacing-3xl`: 4rem

## Breakpoint System

### Responsive Breakpoints
- `--ifm-breakpoint-xs`: 0
- `--ifm-breakpoint-sm`: 576px
- `--ifm-breakpoint-md`: 768px
- `--ifm-breakpoint-lg`: 992px
- `--ifm-breakpoint-xl`: 1200px
- `--ifm-breakpoint-2xl`: 1400px

### Responsive Behavior
- Mobile-first approach
- Typography scales appropriately across breakpoints
- Touch targets maintain minimum 44px on mobile
- Layouts adapt to different screen sizes

## Component Design Patterns

### Custom Components
All custom components follow the pattern:
- Located in `frontend/book_frontend/src/theme/[ComponentName]`
- Include both JSX and CSS module files
- Use Docusaurus theme hooks appropriately
- Implement accessibility features (ARIA, keyboard navigation, focus indicators)

### Search Component
- Modal design with proper accessibility
- Keyboard navigation support
- Visual feedback for results
- Responsive behavior for mobile

### Navigation Components
- Breadcrumb: Clear hierarchy with ARIA labels
- Sidebar: Expand/collapse with smooth animations
- Navbar: Responsive with mobile menu
- Links: Clear visual identification with focus states

### Content Components
- Proper heading hierarchy
- Semantic HTML structure
- Responsive typography
- Accessible color contrast

## CSS Utility Classes

### Spacing Utilities
- `.margin-*` and `.padding-*` classes with size variants
- Direction-specific variants (top, bottom, etc.)

### Layout Utilities
- `.d-flex`, `.d-inline-flex` for flexbox
- `.justify-content-*` and `.align-items-*` for alignment
- `.text-center`, `.text-left`, `.text-right` for text alignment

### Visual Utilities
- `.bg-*` for background colors
- `.text-*` for text colors
- `.border-*` for border styles
- `.shadow-*` for box shadows

## Accessibility Implementation

### ARIA Attributes
- `role="navigation"` for navigation elements
- `aria-label` and `aria-labelledby` for unlabeled elements
- `aria-current` for current page indicators
- `aria-hidden="true"` for decorative elements

### Focus Management
- Visible focus indicators for all interactive elements
- Proper focus order
- Skip links for screen readers
- Focus restoration after interactions

### Keyboard Navigation
- All functionality accessible via keyboard
- Proper key event handling
- Logical tab order
- Keyboard shortcuts where appropriate

## Responsive Design Patterns

### Mobile-First Approach
- Base styles for mobile
- Progressive enhancement for larger screens
- Touch target optimization (minimum 44px)

### Tablet Optimization
- Appropriate sidebar width (280px)
- Touch-friendly navigation
- Readable typography sizes

### Desktop Optimization
- Optimal content width (800px max)
- Efficient use of screen real estate
- Advanced navigation features

## Dark Theme Implementation

### Dark Theme Variables
- All color variables have dark theme overrides
- Maintains accessibility standards in dark mode
- Smooth transitions between themes

## Performance Considerations

### CSS Optimization
- Use of CSS custom properties for consistency
- Minimal JavaScript for interactions
- Efficient component rendering
- Proper bundling and minification

### Component Optimization
- Memoization where appropriate
- Efficient state management
- Lazy loading for non-critical components

## Maintenance Guidelines

### Adding New Styles
- Use existing CSS custom properties when possible
- Follow the established spacing scale
- Maintain accessibility standards
- Test across all breakpoints

### Component Updates
- Preserve existing functionality
- Maintain accessibility features
- Follow Docusaurus theming best practices
- Update documentation if needed

### Color Changes
- Ensure WCAG 2.1 AA compliance
- Update both light and dark theme variables
- Test color combinations thoroughly
- Update contrast ratios as needed

## Testing Requirements

### Visual Testing
- Cross-browser compatibility
- Responsive behavior across all breakpoints
- Dark/light theme functionality

### Accessibility Testing
- Keyboard navigation
- Screen reader compatibility
- Color contrast verification
- Focus indicator visibility

### Performance Testing
- Page load times
- Component rendering performance
- Bundle size optimization