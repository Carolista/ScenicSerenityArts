<div align="center">
  <h1>🎨 Scenic Serenity Arts</h1>
  <p><em>Where art illuminates the analytical, and geology intersects with geometry</em></p>
  <a href="http://www.codewithcarrie.com"><img src="https://img.shields.io/badge/by-CodeWithCarrie.com-437E1C?style=for-the-badge" alt="badge linking to CodeWithCarrie's website" /></a>
  <a href="https://scenicserenityarts.com"><img src="https://img.shields.io/badge/visit-ScenicSerenityArts.com-5C93CE?style=for-the-badge" alt="badge linking to Scenic Serenity Arts website" /></a>
</div>

<br />

<div align="center">
  <img src="https://img.shields.io/badge/JavaScript-F0DB4F?style=for-the-badge&logo=javascript&logoColor=333333" alt="JavaScript" />
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5" />
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3" />
  <img src="https://img.shields.io/badge/Google_Fonts-EA4335?style=for-the-badge&logo=googlefonts&logoColor=white" alt="Google Fonts" />
  <img src="https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white" alt="ESLint" />
  <img src="https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=333333" alt="Prettier" />
</div>

---

<div align="center">
    <a href="#about">About</a> •
    <a href="#features">Features</a> •
    <a href="#architecture">Architecture</a> •
    <a href="#tech">Tech Stack</a> •
    <a href="#performance">Performance</a> •
    <a href="#future">Future Enhancements</a>
</div>

---

<a name="about"></a>

## 💡 About the Project

**Scenic Serenity Arts** is a modern, performance-optimized e-commerce landing page showcasing original watercolor paintings, fiber arts, and functional decor inspired by the Great Smoky Mountains and Florida coast. This project highlights clean architecture, comprehensive SEO implementation, and exceptional Core Web Vitals scores.

The site serves as an elegant storefront directing visitors to category-specific product pages on Etsy, while demonstrating professional web development practices including:

- **Modular JavaScript Architecture**: Component-based design with centralized constants
- **SEO Excellence**: Complete Open Graph, structured data, and XML sitemap implementation
- **Performance Optimization**: Lighthouse scores of 100 (Desktop) and 95 (Mobile) with 2.9s LCP
- **Accessible Design**: Semantic HTML, ARIA attributes, and responsive mobile-first layout
- **Professional Polish**: Smooth video interactions, fade transitions, and thoughtful UX details

> [!NOTE]
> **Dual Purpose:** While this is a functioning business site for [Scenic Serenity Arts](https://scenicserenityarts.com) (a side creative venture), it's also crafted to demonstrate modern front-end development skills for portfolio evaluation.

---

<a name="features"></a>

## ✨ Features

### User Experience

- **Intuitive Navigation**: Clean header with mobile-responsive hamburger menu
- **Interactive Product Cards**: Video previews with hover/tap interactions and "Shop Now" CTAs
- **Smart Video Loading**: First video per page preloads fully (LCP optimization), remaining videos load metadata only
- **Smooth Interactions**: Touch-friendly mobile experience with long-press for full video playback
- **Direct Etsy Integration**: Category-specific product links route directly to relevant Etsy collections

### SEO & Discoverability

- **Meta Descriptions**: Optimized 160-character descriptions for all pages
- **Open Graph Tags**: Rich social media previews with custom images and descriptions
- **Structured Data**: JSON-LD Schema.org Artist markup with social profile links
- **XML Sitemap**: Complete sitemap with priority and change frequency for all pages
- **Canonical URLs**: Proper canonicalization to prevent duplicate content issues

### Performance & Optimization

- **Core Web Vitals**:
    - **LCP**: 2.9s (Mobile), 1.2s (Desktop)
    - **CLS**: 0.013 (Excellent stability)
    - **FCP**: Sub-second on both mobile and desktop
- **Strategic Resource Loading**: CSS preloading, selective video preloading
- **Optimized Assets**: Videos replaced images for smaller payload and better quality
- **Responsive Design**: CSS Grid and Flexbox layouts adapt seamlessly across devices

### Code Quality

- **Centralized Constants**: Single source of truth for all page metadata (titles, descriptions, navigation)
- **Modular Components**: Reusable card, section, header, and footer components
- **Validation Logic**: Automated SEO description length validation on module load
- **Clean Codebase**: ESLint + Prettier for consistent formatting, no console statements in production

---

<a name="architecture"></a>

## 🏗️ Architecture & Code Organization

The project follows a **component-based architecture** with clear separation of concerns:

```
ScenicSerenityArts/
├── index.html              # Home page
├── about.html              # About the artist
├── original-works.html     # Original watercolors, bookmarks, shadow boxes, fiber arts
├── art-prints.html         # Prints, posters, notecards, and postcards
├── lifestyle.html          # Home decor and tech accessories
│
├── css/
│   ├── variables.css       # CSS custom properties (colors, fonts, spacing)
│   └── global.css          # All component and layout styles
│
├── js/
│   ├── constants/
│   │   └── pages.js        # Page metadata (titles, descriptions, nav items)
│   │
│   ├── components/
│   │   ├── header.js       # Site header with responsive navigation
│   │   ├── footer.js       # Site footer with social links
│   │   ├── card.js         # Reusable product card with optional video/button
│   │   ├── card-grid.js    # Responsive card grid layout
│   │   ├── section.js      # Page section with heading and card grid
│   │   ├── media-element.js # Smart video/image handling with interactions
│   │   └── icon-link.js    # SVG icon links for social media
│   │
│   ├── utils/
│   │   └── head.js         # Dynamic head management (SEO tags, meta, preloading)
│   │
│   └── pages/
│       ├── index.js        # Home page initialization
│       ├── about.js        # About page initialization
│       ├── original-works.js  # Original works page initialization
│       ├── art-prints.js   # Art prints page initialization
│       └── lifestyle.js    # Lifestyle page initialization
│
├── assets/
│   ├── images/             # Logos, backgrounds, artist photo
│   └── videos/             # Product preview videos
│
├── sitemap.xml             # Search engine sitemap
└── robots.txt              # Crawler instructions

```

### Design Patterns

**Component Composition**:

- Pages compose sections, sections compose card grids, cards compose media elements
- Each component encapsulates its own logic and returns a DOM element
- Parent components pass configuration via object destructuring

**Centralized Configuration**:

- `PAGES` array in `pages.js` is single source of truth for all page metadata
- `NAV_ITEMS` derived automatically from `PAGES` with helper functions
- Validation runs on module load to catch SEO description length violations

**Smart Video Strategy**:

- First video per page: `preload="auto"` for immediate LCP
- Subsequent videos: `preload="metadata"` for reduced initial payload
- Balance between performance and user experience

---

<a name="tech"></a>

## 🛠️ Tech Stack

|                                                                                                             Technology | Description                                                             |
| ---------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------- |
|     ![JavaScript](https://img.shields.io/badge/JavaScript-F0DB4F?style=for-the-badge&logo=javascript&logoColor=333333) | ES6+ modules with clean component-based architecture                    |
|                     ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white) | Semantic markup with proper accessibility attributes                    |
|                        ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white) | Modern CSS with custom properties, Grid, Flexbox, and responsive design |
| ![Google Fonts](https://img.shields.io/badge/Google_Fonts-EA4335?style=for-the-badge&logo=googlefonts&logoColor=white) | High-quality web typography (Cookie, Tenor Sans, and Quicksand)         |
|                  ![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white) | Code quality enforcement with comprehensive ruleset                     |
|           ![Prettier](https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=333333) | Consistent code formatting across entire codebase                       |

### Key Technologies

- **Vanilla JavaScript**: No framework dependencies—lightweight, fast, and fully customizable
- **CSS Custom Properties**: Centralized theming with proper fallbacks
- **ES6 Modules**: Native browser module support for clean imports/exports
- **Schema.org Markup**: JSON-LD structured data for rich search results

---

<a name="performance"></a>

## ⚡ Performance & Optimization

### Lighthouse Scores

**Desktop Performance:**

- 🟢 Performance: **100**
- 🟢 Accessibility: **100**
- 🟢 Best Practices: **100**
- 🟢 SEO: **100**

**Mobile Performance:**

- 🟢 Performance: **95**
- 🟢 Accessibility: **100**
- 🟢 Best Practices: **100**
- 🟢 SEO: **100**

### Core Web Vitals

| Metric                             | Mobile | Desktop | Target |
| :--------------------------------- | -----: | ------: | -----: |
| **LCP** (Largest Contentful Paint) |   2.9s |    1.2s | < 2.5s |
| **CLS** (Cumulative Layout Shift)  |  0.013 |   0.013 |  < 0.1 |
| **FCP** (First Contentful Paint)   |   0.9s |    0.4s | < 1.8s |

### Optimization Strategies

**Resource Loading**:

- CSS files preloaded with `rel="preload"` for critical rendering path
- Selective video preloading: first video `auto`, others `metadata`
- Videos replace images for better quality-to-size ratio

**Layout Stability**:

- CSS `aspect-ratio: 1/1` on all card media (no dimension attributes needed)
- Explicit width/height on logo images
- No layout shifts during video load

**Code Efficiency**:

- Component reusability eliminates duplication
- WeakMap for event handler cleanup
- Minimal third-party dependencies

---

<a name="future"></a>

## 🔮 Future Enhancements

Several features have been identified for potential future development:
- **New Products**: Add cards for future product categories added to Etsy shop
- **Customer Reviews**: Featured testimonials on product pages
- **Social Proof**: Instagram feed integration showing recent artwork

---

## 👩‍💻 Designer & Developer

**Caroline Jones** - Full-stack developer, educator, and artist

- GitHub: [@Carolista](https://github.com/Carolista)
- Tech Portfolio Website: [CodeWithCarrie.com](http://codewithcarrie.com)
- LinkedIn: [carolinerjones](https://www.linkedin.com/in/carolinerjones)
- Art Storefront: [ScenicSerenityArts.com](https://scenicserenityarts.com)

---

## 📝 License

This project is a proprietary business website and portfolio piece. The code is available for viewing and learning purposes. Please contact the author for any usage beyond personal reference.

© 2026 [Scenic Serenity Arts](https://scenicserenityarts.com). All artwork and designs are original works by Caroline Jones.
