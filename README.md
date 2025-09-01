# MANGO Hugo Theme

**MANGO** - *MANi's huGO theme*

A complete Hugo theme that replicates a fixed-layout personal blog design with custom scrolling, rotating quotes, and topic filtering functionality. All configuration is managed through the Hugo config file for easy customization.

## Features

### Layout Structure
- **Fixed Layout**: 100vh height with no body scroll
- **Header**: 4% height with blue gradient background
- **Content Area**: 92% height between header and footer
  - Left Sidebar: 15% width (social links + topic filters)
  - Main Content: 70% width (scrollable content area)
  - Right Sidebar: 15% width (rotating quotes)
- **Footer**: 4% height with dark blue gradient

### Visual Design
- **Pico CSS Framework**: Base styling with extensive custom overrides
- **Blue Color Scheme**: 
  - Primary: #0ea5e9
  - Secondary: #0284c7
  - Light: #e0f2fe
  - Dark: #0c4a6e
  - Accent: #38bdf8
- **Font**: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif

### Interactive Features
- **Custom Scrollbar**: 10px width with draggable thumb
- **Quote Rotation**: 8 inspirational quotes rotating every 5 minutes
- **Topic Filtering**: Filter blog posts by category
- **Smooth Animations**: Hover effects and transitions throughout

## Installation

1. Clone or download this theme to your Hugo site directory
2. Update your `hugo.yaml` configuration file
3. Add content to the `content/posts/` directory
4. Configure social links in `data/social.yaml`
5. Configure topics in `data/topics.yaml`

## Configuration

### Site Configuration (hugo.yaml)

```yaml
baseURL: 'https://your-domain.com'
languageCode: 'en-us'
title: 'Your Blog Title'

params:
  author: 'Your Name'
  description: 'Your blog description'
```

### Social Links & Topics (hugo.yaml)

```yaml
params:
  author: 'Your Name'
  description: 'Your blog description'
  
  # Social Links Configuration
  social:
    - name: "GitHub"
      url: "https://github.com/username"
      emoji: "🔗"
    - name: "LinkedIn" 
      url: "https://linkedin.com/in/username"
      emoji: "💼"
  
  # Topics Configuration  
  topics:
    - name: "CERTIFICATION PREP"
      slug: "certification-prep"
    - name: "AWS"
      slug: "aws"

# Menu Configuration
menu:
  main:
    - identifier: 'home'
      name: 'Home'
      url: '/'
      weight: 10
    - identifier: 'about'
      name: 'About'
      url: '/about/'
      weight: 20
```

## Content Structure

### Blog Posts

Create blog posts in `content/posts/` with proper frontmatter:

```yaml
---
title: "Your Post Title"
date: 2024-01-15T10:00:00Z
categories: ["aws", "certification-prep"]
summary: "Brief summary of your post content."
---
```

## File Structure

```
├── layouts/
│   ├── _default/
│   │   ├── baseof.html      # Main layout template
│   │   ├── list.html        # Blog listing template
│   │   └── single.html      # Individual post template
│   ├── partials/
│   │   ├── header.html      # Header component
│   │   ├── footer.html      # Footer component
│   │   ├── sidebar-left.html   # Left sidebar with social/topics
│   │   └── sidebar-right.html  # Right sidebar with quotes
│   └── index.html           # Home page template
├── static/
│   ├── css/
│   │   ├── pico.blue.min.css    # Pico CSS framework
│   │   └── custom.css           # Custom styling overrides
│   └── js/
│       └── main.js              # JavaScript functionality
├── data/                        # (No longer needed - config moved to hugo.yaml)
└── content/
    ├── posts/               # Blog posts directory
    └── _index.md           # Home page content
```

## Customization

### Colors
Edit the CSS variables in `static/css/custom.css`:

```css
:root {
    --primary-blue: #0ea5e9 !important;
    --secondary-blue: #0284c7 !important;
    --light-blue: #e0f2fe !important;
    --dark-blue: #0c4a6e !important;
    --accent-blue: #38bdf8 !important;
}
```

### Quotes
The rotating quotes are defined in `static/js/main.js`. Edit the `quotes` array to customize the inspirational messages.

### Layout Proportions
The layout uses viewport units (vh/vw) and percentages. Modify the CSS in `custom.css` to adjust:
- Sidebar widths (left-sidebar, right-sidebar)
- Header/footer heights
- Content area proportions

## Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## Performance

- Optimized CSS with critical path rendering
- Minimal JavaScript with throttled event handlers
- Responsive design maintaining layout integrity
- Custom scrollbar implementation for smooth performance

## Development

To develop locally:

1. Install Hugo (v0.100.0 or later)
2. Run `hugo server -D` in the theme directory
3. Visit `http://localhost:1313` to preview
4. Make changes and see live reloading

## Author

**Manikandaraj Srinivasan**  
Email: matrix@manikandaraj.com  
Website: [manikandaraj.com](https://manikandaraj.com)

## License

This theme is provided as-is for personal and educational use. Customize as needed for your specific requirements.