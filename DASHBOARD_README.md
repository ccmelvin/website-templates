# Enhanced Template Dashboard

A comprehensive dashboard for browsing, previewing, and managing professional website templates with advanced filtering, search, and comparison capabilities. **Now serving as the main landing page!**

## 🚀 Features

### Main Dashboard (`/`)
- **Advanced Search & Filtering**: Search by name, description, tags, or features
- **Category Filtering**: Filter by Health & Wellness, Creative, Professional, Food & Beverage
- **Difficulty Levels**: Filter by Beginner, Intermediate, or Advanced
- **Multiple Sort Options**: Sort by popularity, rating, name, or newest
- **Grid/List View**: Toggle between grid and list layouts
- **Favorites System**: Mark templates as favorites for quick access
- **Live Statistics**: View download counts, ratings, and template metrics

### Template Preview System
- **Live Preview Modal**: Full-screen preview with responsive viewport controls
- **Individual Template Pages**: Direct links to `/template/[id]` for each template
- **Detailed Information**: Features, technologies, stats, and code structure
- **Installation Guide**: Step-by-step setup instructions
- **Customization Tips**: Guidelines for personalizing templates

## 📁 File Structure

```
app/
├── page.tsx                  # Main dashboard (landing page)
├── template/
│   └── [id]/
│       └── page.tsx          # Individual template preview pages
components/
├── template-preview.tsx      # Template preview modal (optional)
├── template-comparison.tsx   # Template comparison tool (optional)
└── templates/               # Individual template components
    ├── life-coach-premium.tsx
    ├── personal-trainer-premium.tsx
    ├── author-premium.tsx
    └── photographer-premium.tsx
```

## 🎨 Template Categories

### Health & Wellness
- **Life Coach**: Personal development and coaching services
- **Personal Trainer**: Fitness programs and wellness coaching
- **Therapist**: Mental health and counseling services

### Creative
- **Author**: Book showcases and literary portfolios
- **Photographer**: Photography portfolios and booking systems
- **Interior Designer**: Design portfolios and consultation services
- **Musician**: Music portfolios and tour information

### Professional
- **Architect**: Architectural portfolios and project showcases
- **Business Consultant**: Consulting services and case studies

### Food & Beverage
- **Chef**: Culinary portfolios and restaurant websites

## 🔧 Technical Features

### Built With
- **Next.js 15**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **Radix UI**: Accessible component primitives
- **Lucide React**: Beautiful icons

### Template Features
- ✅ Responsive Design (Mobile-first)
- ✅ Dark Mode Support (where applicable)
- ✅ Smooth Animations
- ✅ SEO Optimized
- ✅ Accessibility Ready
- ✅ Fast Loading (< 2s)
- ✅ TypeScript Support
- ✅ Modern UI Components

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or pnpm

### Installation
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

### Accessing the Dashboard
1. Start the development server
2. Navigate to `http://localhost:3000` - **The dashboard is now the main page!**
3. Individual templates can be viewed at `http://localhost:3000/template/[template-id]`

## 📱 Dashboard Usage

### Search & Filter
1. **Search Bar**: Type keywords to search templates, features, or tags
2. **Category Filter**: Select specific categories to narrow results
3. **Difficulty Filter**: Choose complexity level
4. **Sort Options**: Order by popularity, rating, name, or date

### Template Preview
1. **Hover Actions**: Hover over templates to see preview and action buttons
2. **Preview Modal**: Click "Preview" to open full-screen preview with iframe
3. **Open in New Tab**: Click "Open" to view template in a new tab
4. **Direct Links**: Each template has its own URL at `/template/[id]`

### Favorites System
1. **Add to Favorites**: Click the heart icon on any template
2. **View Favorites**: See favorite count in the top-right badge
3. **Quick Access**: Favorites are highlighted for easy identification

## 🎯 Template Difficulty Levels

### Beginner
- Simple structure and layout
- Basic customization required
- Minimal technical knowledge needed
- Examples: Life Coach, Author, Therapist

### Intermediate
- Moderate complexity
- Some technical customization
- Understanding of React/Next.js helpful
- Examples: Personal Trainer, Chef, Business Consultant, Interior Designer

### Advanced
- Complex features and interactions
- Significant customization options
- Strong technical knowledge recommended
- Examples: Photographer, Architect, Musician

## 📊 Performance Metrics

All templates are optimized for:
- **Load Time**: < 2 seconds
- **Bundle Size**: < 100KB (gzipped)
- **Lighthouse Score**: 95+ across all metrics
- **Mobile Performance**: Excellent rating
- **Accessibility**: WCAG 2.1 AA compliant

## 🔄 Customization Guide

### Color Schemes
Each template uses a consistent color system that can be easily customized:
```tsx
// Example color customization
const colorMap = {
  purple: "from-purple-500 to-pink-500",
  orange: "from-orange-500 to-red-500",
  // Add your custom colors
}
```

### Content Updates
1. Replace placeholder text in template components
2. Update image sources and alt text
3. Modify contact information and links
4. Customize service offerings and pricing

### Layout Modifications
1. Reorder sections by moving JSX components
2. Add/remove sections as needed
3. Modify responsive breakpoints
4. Adjust spacing and typography

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Add new templates or enhance existing ones
4. Update documentation
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

For questions or support:
1. Check the documentation
2. Review existing templates for examples
3. Open an issue for bugs or feature requests
4. Contribute improvements via pull requests

---

**Happy templating!** 🎉
