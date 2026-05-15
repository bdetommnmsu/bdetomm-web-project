# Brad DeTommaso - ICT280 Web Development Portfolio
**New Mexico State University | Spring 2026**

A multi-project web development portfolio built across four assignments, resulting in a fully functional, responsive, and accessible 5-page website for a fictional client. Published via GitHub Pages.

🌐 **Live Site:** [https://bdetommnmsu.github.io/bdetomm-web-project/](https://bdetommnmsu.github.io/bdetomm-web-project/)

---

## Table of Contents
- [Project 2 - HTML Foundation Page](#project-2--html-foundation-page)
- [Project 3 - CSS Styling](#project-3--css-styling)
- [Project 4 - JavaScript Interactivity](#project-4--javascript-interactivity)
- [Final Project - GreenTech Solutions](#final-project--greentech-solutions)
- [Technologies Used](#technologies-used)
- [Setup & Running the Project](#setup--running-the-project)
- [AI Assistance](#ai-assistance)

---

## Project 2 - HTML Foundation Page

**Live URL:** [https://bdetommnmsu.github.io/bdetomm-web-project/html/project2.html](https://bdetommnmsu.github.io/bdetomm-web-project/html/project2.html)

### Theme
A personal travel page showcasing places I have visited and dream destinations I hope to explore.

### What I Built
- Semantic HTML structure with headings, paragraphs, lists, a table, images, and links
- Navigation bar linking between the homepage and the travel page
- A destination comparison table covering Alaska, Victoria, the Caribbean, Hong Kong, Italy, and Japan
- Inline HTML styling (no CSS) for fonts, colors, and layout - intentionally 1990s style per the assignment

### What I Learned
- How HTML documents are structured with `<!DOCTYPE>`, `<html>`, `<head>`, and `<body>`
- How to use semantic elements like headings, paragraphs, lists, and tables correctly
- How to create navigation using anchor tags and relative file paths
- How to publish a website using GitHub Pages

### Challenges
- Understanding relative file paths between files in different folders (`../` syntax)
- Getting GitHub Pages enabled and figuring out the difference between the GitHub code view URL and the live GitHub Pages URL

---

## Project 3 - CSS Styling

**Live URL:** [https://bdetommnmsu.github.io/bdetomm-web-project/html/project3.html](https://bdetommnmsu.github.io/bdetomm-web-project/html/project3.html)

### Theme
An upgraded version of the Project 2 travel page, styled with an external CSS stylesheet.

### What I Built
- External CSS stylesheet (`css/styles.css`) linked via `<link>` in the `<head>`
- Google Fonts integration (Playfair Display + Lato)
- CSS variables for consistent color theming
- Flexbox-based navigation bar
- Destination cards with hover effects
- Styled HTML table with alternating row colors
- Responsive layout with media queries for mobile screens

### What I Learned
- How to create and link an external CSS stylesheet
- How CSS variables (`:root`) make consistent theming easier
- How Flexbox works for navigation and card layouts
- How media queries adjust layouts for different screen sizes
- The difference between controlled and uncontrolled styling approaches

### Challenges
- Getting relative paths correct for the CSS file from inside the `html/` subfolder
- Understanding how `box-shadow` and `border-radius` work together for card styling
- Learning when to use Flexbox vs block layout

---

## Project 4 - JavaScript Interactivity

**Live URL:** [https://bdetommnmsu.github.io/bdetomm-web-project/html/project4.html](https://bdetommnmsu.github.io/bdetomm-web-project/html/project4.html)

### Theme
A travel destination quiz - the user answers four questions about their travel preferences and receives a personalized destination recommendation.

### What I Built
- A multi-question radio button quiz form
- JavaScript scoring logic that tallies answers and maps them to destinations (Alaska, Caribbean, Hong Kong, Italy, Japan)
- Personalized result display with destination description and travel tips
- Smooth scroll to result after submission
- Form validation that alerts users if questions are left unanswered
- Reset button to start the quiz over
- Responsive layout with mobile media queries
- Accessibility improvements including `aria-live` for the result section

### What I Learned
- How JavaScript event listeners work (`addEventListener`)
- How to read form input values with `querySelector`
- How to dynamically update page content using `innerHTML`
- How to use `scrollIntoView` for smooth scrolling
- How `aria-live` regions improve screen reader accessibility

### Challenges
- Fixing the W3C validation warning caused by the empty `<h2>` result heading (resolved with `&nbsp;`)
- Understanding why state variables need to be computed before calling `event.preventDefault()`
- Getting the scoring system to handle tie-breaker cases correctly

---

## Final Project - GreenTech Solutions

**Live URL:** [https://bdetommnmsu.github.io/bdetomm-web-project/final/](https://bdetommnmsu.github.io/bdetomm-web-project/final/)

### Client Overview
GreenTech Solutions is a fictional startup focused on eco-friendly technology for small and medium businesses. The website was designed to inform, engage, and convert visitors into customers through a clean, modern, and fully accessible interface.

### Pages
| Page | URL | Description |
|------|-----|-------------|
| Homepage | `/final/index.html` | Company intro, stats, featured products, comparison table, newsletter signup |
| About | `/final/about.html` | Company story, values, timeline, team, awards table |
| Products | `/final/products.html` | 10 products with live search and category filter |
| Blog | `/final/blog.html` | 9 articles with category filter, resources, external links table |
| Contact | `/final/contact.html` | Validated contact form, contact info, office locations, FAQ |

### File Structure
```
bdetomm-web-project/
├── index.html                  ← Course portfolio homepage
├── README.md
├── images/
│   └── alaska.jpg
├── css/
│   └── styles.css              ← Project 3 stylesheet
├── html/
│   ├── project2.html
│   ├── project3.html
│   └── project4.html
├── javascript/
│   └── script.js               ← Project 4 quiz JavaScript
└── final/
    ├── index.html              ← GreenTech homepage
    ├── about.html
    ├── products.html
    ├── blog.html
    ├── contact.html
    ├── styles.css              ← GreenTech stylesheet
    └── script.js               ← GreenTech JavaScript
```

### Technologies Used
- **HTML5** - Semantic elements (`<nav>`, `<main>`, `<section>`, `<article>`, `<header>`, `<footer>`)
- **CSS3** - External stylesheet, CSS variables, Flexbox, Grid, media queries, transitions
- **JavaScript** - DOM manipulation, event listeners, form validation, localStorage
- **Google Fonts** - Montserrat and Open Sans
- **GitHub Pages** - Static site hosting

### JavaScript Features
- **Mobile hamburger nav** - toggles on small screens, closes on outside click
- **Product & blog category filter** - pill buttons show/hide cards by `data-category`
- **Live product search** - filters cards as the user types
- **Contact form validation** - real-time blur validation + full submit validation with per-field error messages
- **Newsletter signup** - email format validation with inline feedback
- **High contrast toggle** - accessibility feature that overrides CSS color variables site-wide, persisted in `localStorage`

### Accessibility Features
- Skip-to-content link on every page
- `aria-label` on nav, forms, tables, and sections
- `aria-current="page"` on active nav links
- `aria-expanded` on hamburger button
- `aria-live` regions for dynamic content
- `aria-required` on required form fields
- `role="alert"` on form error messages
- Meaningful `alt` text on all images
- High contrast mode toggle
- Descriptive link text throughout

### Responsive Design
- Sticky navigation collapses to hamburger menu at 768px
- Multi-column Grid layouts collapse to single column at 768px
- Typography scales down at 480px
- Filter buttons and tables reflow on small screens
- Tested using Chrome DevTools device emulation

### What I Learned
- How to structure a multi-page website with consistent navigation and shared stylesheets
- How CSS Grid `auto-fit` and `minmax()` create naturally responsive card layouts
- How to write modular JavaScript using IIFEs to keep features isolated
- How to implement real-time form validation with per-field feedback
- How accessibility attributes like `aria-live`, `aria-expanded`, and `role="alert"` improve screen reader experience
- How `localStorage` can persist user preferences across page visits

### Challenges
- Managing relative file paths across multiple folder levels (`../javascript/`, `../images/`)
- Getting the high contrast CSS variable override to apply site-wide correctly
- Ensuring the product filter and blog filter both worked from a single shared JavaScript function
- Footer link color not inheriting correctly from `.footer-links` - fixed by explicitly setting `color` on `li` elements

---

## Technologies Used
| Technology | Purpose |
|------------|---------|
| HTML5 | Page structure and semantic markup |
| CSS3 | Styling, layout, and responsive design |
| JavaScript (ES5/6) | Interactivity, validation, and DOM manipulation |
| Google Fonts | Typography (Playfair Display, Lato, Montserrat, Open Sans) |
| GitHub | Version control and source code hosting |
| GitHub Pages | Free static site publishing |

---

## Setup & Running the Project

This is a static website with no build tools or dependencies required.

### View Live
Visit the live site at:
```
https://bdetommnmsu.github.io/bdetomm-web-project/
```

### Run Locally
1. Clone the repository:
```bash
git clone https://github.com/bdetommnmsu/bdetomm-web-project.git
```
2. Open any `.html` file directly in your browser - no server required.
3. To test all relative paths correctly, open from the root `index.html`.

---

## AI Assistance

Portions of this project were developed with assistance from **Claude** (Anthropic, 2026), an AI coding assistant. Claude was used to help generate and debug HTML structure, CSS styling, and JavaScript functionality across Projects 3, 4, and the Final Project.

All code was reviewed, tested, troubleshot, and deployed by the student. The student made design decisions, directed the development process, debugged issues (file paths, validation warnings, CSS inheritance), and maintained full understanding of the implemented code throughout the course.

**Citation (APA format):**
Anthropic. (2026). *Claude* (claude-sonnet-4-6) [Large language model]. https://claude.ai

---

*ICT280 Web Programming | New Mexico State University | Spring 2026*