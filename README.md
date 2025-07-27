# 🥭 MANGO Hugo Theme

**MANGO** is a clean, fast, and responsive Hugo theme perfect for blogging. **MANi's huGO** theme, designed with simplicity and performance in mind.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Hugo Version](https://img.shields.io/badge/hugo-0.112.0+-blue.svg)

## ✨ Features

- 🎨 **Clean & Minimal Design** - Focus on your content
- 🌓 **Dark/Light Mode** - Automatic theme switching
- 📱 **Mobile Responsive** - Looks great on all devices
- ⚡ **Fast Loading** - Optimized for performance
- 🔍 **SEO Optimized** - Built-in SEO best practices
- 💻 **Syntax Highlighting** - Beautiful code blocks
- 📝 **Blog-focused** - Perfect for personal blogs and portfolios
- 🔗 **Social Links** - Easy social media integration

## 🚀 Quick Start

### Prerequisites

- [Hugo](https://gohugo.io/getting-started/installing/) (version 0.112.0 or later)
- [Git](https://git-scm.com/)

### Installation

1. **Create a new Hugo site:**
   ```bash
   hugo new site my-blog
   cd my-blog
   ```

2. **Add MANGO as a submodule:**
   ```bash
   git submodule add https://github.com/manikandaraj/mango.git themes/mango
   ```

3. **Copy the example configuration:**
   ```bash
   cp themes/mango/exampleSite/config.toml .
   ```

4. **Customize your configuration:**
   Edit `config.toml` and update the following sections:
   ```toml
   baseURL = "https://yourdomain.com"
   title = "Your Site Title"
   
   [params.author]
     name = "Your Name"
     email = "your.email@example.com"
   
   # Update social links, quick links, and other settings
   ```

5. **Create your first post:**
   ```bash
   hugo new blog/my-first-post.md
   ```

6. **Start the development server:**
   ```bash
   hugo server -D
   ```

Visit `http://localhost:1313` to see your site!

## ⚙️ Configuration

The MANGO theme comes with a comprehensive configuration system. All theme features are configurable through `config.toml`. Check the `exampleSite/config.toml` for a complete configuration reference with detailed comments.

### Key Configuration Sections

#### Basic Site Information
```toml
baseURL = 'https://yourdomain.com'
title = 'Your Site Title'
theme = "mango"

[params.author]
  name = "Your Name"
  email = "your.email@example.com"
```

#### Social Media Links
```toml
[params.social]
  title = "Connect With Me"
  
  [[params.social.links]]
    name = "GitHub"
    url = "https://github.com/yourusername"
    
  [[params.social.links]]
    name = "LinkedIn"
    url = "https://linkedin.com/in/yourusername"
```

#### Quick Links Sidebar
```toml
[params.quicklinks]
  title = "Quick Links"
  
  [[params.quicklinks.links]]
    name = "My Projects"
    url = "/projects"
    
  [[params.quicklinks.links]]
    name = "Resume"
    url = "/resume"
```

#### Blog Configuration
```toml
[params.blog]
  auto_toc = true                    # Enable automatic Table of Contents
  hide_duplicate_title = true        # Hide duplicate H1 titles
  toc_title = "Table of Contents"    # TOC section title
```

#### Theme Colors
```toml
[params.colors]
  bg_primary = "#1a1a1a"
  bg_secondary = "#2d2d2d"
  text_primary = "#ffffff"
  accent_color = "#4285f4"           # Google Blue
```

### Navigation Menu
Uses Hugo's built-in menu system with enhanced features:

```toml
[[menu.main]]
  name = "Home"
  url = "/"
  weight = 1
  title = "Go to homepage"           # Tooltip text

[[menu.main]]
  name = "Blog"
  url = "/blog"
  weight = 2
  title = "Read my blog posts"
```

## 📝 Content Structure

### Creating Posts

```bash
hugo new blog/my-awesome-post.md
```

Example front matter:
```yaml
---
title: "My Awesome Post"
date: 2024-01-15T10:00:00Z
draft: false
tags: ["hugo", "blogging", "tech"]
description: "A brief description of your post"
toc: true                          # Enable/disable TOC for this post
---

Your content goes here...
```

### Page Types

- **Blog Posts**: Regular blog posts (`content/blog/`)
- **Static Pages**: About, Contact, etc. (`content/about.md`)
- **Homepage**: Displays profile intro and dynamic content from `content/_index.md`

### Auto-Generated Table of Contents

The theme automatically generates a table of contents for blog posts. You can:
- Enable/disable globally in `config.toml`
- Override per post with `toc: true/false` in front matter
- Customize TOC title and styling

## 🎨 Customization

### Theme Features

- **Responsive Design**: Mobile-first approach with desktop enhancements
- **Dark/Light Mode**: Automatic theme toggle with user preference persistence
- **Professional Typography**: Modern font hierarchy with optimal spacing
- **Dynamic Sidebars**: Social links and quick links populate automatically from config
- **Active Navigation**: Current page highlighting in menus
- **SEO Optimized**: Meta tags, structured data, and search engine friendly URLs

### Custom Styling

The theme uses CSS custom properties for easy customization. Create `assets/css/custom.css`:

```css
:root {
  --accent-color: #your-color;
  --bg-primary: #your-background;
  --text-primary: #your-text-color;
}
```

### Profile Image

Place your profile image at `static/images/profile.jpg` (recommended: 400x400px). Configure the alt text in `config.toml`:

```toml
profile_image = "/images/profile.jpg"
profile_alt_text = "Your Name's Profile Picture"
```

## 🏗️ Directory Structure

```
mango/
├── archetypes/
│   └── default.md
├── assets/
│   └── css/
│       └── wireframe.css
├── exampleSite/
│   └── config.toml              # Complete configuration example
├── layouts/
│   ├── _default/
│   │   ├── baseof.html         # Base template
│   │   ├── list.html           # List pages
│   │   └── single.html         # Single posts
│   ├── index.html              # Homepage
│   ├── partials/               # Reusable components
│   └── shortcodes/             # Custom shortcodes
├── static/
│   └── images/                 # Theme assets
├── LICENSE
├── README.md
└── theme.toml
```

## 🔧 Advanced Features

### Shortcodes

The theme includes custom shortcodes for enhanced content:

#### Image Shortcode
```markdown
{{< image src="/images/my-image.jpg" alt="Description" caption="Image caption" >}}
```

### Hugo Pipes Integration

The theme uses Hugo's asset pipeline for optimized CSS delivery and supports modern web standards.

### Advertisement Integration

Configure advertisement display in the right sidebar:

```toml
[params.ads]
  iframe_url = "https://your-ads-provider.com"
  banner_width = "300px"
  banner_height = "600px"
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

### Development Setup

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test with Hugo's development server
5. Submit a pull request

## 📄 License

This theme is free and open source software, distributed under the MIT License.

**Important**: If you use this theme, please:
1. Keep the original MIT license
2. Consider referencing [Manikandaraj's Blog](https://manikandaraj.com) in your site footer or credits
3. Star this repository if you find it useful ⭐

## 🏆 Credits

- Created by [Manikandaraj Srinivasan](https://manikandaraj.com)
- MANGO - **MA**ni's hu**GO** theme
- Built with ❤️ using [Hugo](https://gohugo.io/)

## 📞 Support

- 🐛 **Issues**: [GitHub Issues](https://github.com/manikandaraj/mango/issues)
- 💬 **Discussions**: [GitHub Discussions](https://github.com/manikandaraj/mango/discussions)
- 🌐 **Demo**: [manikandaraj.com](https://manikandaraj.com)
- 📧 **Contact**: Visit [manikandaraj.com](https://manikandaraj.com) for contact information

---

<p align="center">
  Made with 🥭 by <a href="https://manikandaraj.com">Manikandaraj</a>
</p>