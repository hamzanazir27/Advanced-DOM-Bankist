# 🏦 Bankist Web App

An interactive, modern frontend banking web application built with JavaScript (ES6+). The Bankist app simulates features like modal interactions, smooth scrolling, sticky navigation, tabbed components, lazy image loading, reveal-on-scroll sections, and a complete slider (carousel) system — all implemented without any external libraries or frameworks.

---

## 🔗 Live Demo

👉 **[https://vercel.com/hamzanazir27s-projects/advanced-dom-bankist1]**

> Replace the link above with your actual deployed URL (e.g., GitHub Pages, Netlify, Vercel).

---

## 🚀 Features

### 🔒 Modal Window
- Triggered by buttons.
- Can be closed by clicking outside, pressing `Escape`, or clicking the close button.

### 📜 Smooth Scrolling
- Smooth scrolls to a section when buttons or navigation links are clicked.
- Implemented using `scrollIntoView()`.

### 📌 Sticky Navigation
- Navbar sticks to the top once the user scrolls past the header.
- Uses `IntersectionObserver`.

### 🔄 Reveal Sections on Scroll
- Sections remain hidden initially and appear smoothly when scrolled into view.
- Improves performance and UX.

### 🖼️ Lazy Loading Images
- Images are loaded only when about to enter the viewport.
- Optimized for performance with `data-src`.

### 📚 Tabbed Component
- Switch between tabs to view different operation content.
- Uses event delegation and `dataset` attributes.

### 🖱️ Navigation Fade Animation
- Smooth hover effects on navigation links and logo.
- Implemented using `mouseover` and `mouseout` events with `.bind()`.

### 🎢 Slider / Carousel
- Horizontal sliding of content cards.
- Supports left/right buttons and keyboard navigation.
- Includes dynamic dots for slide indicators.

---

## 🧠 Technologies Used

- HTML5
- CSS3
- Vanilla JavaScript (ES6+)
- DOM Manipulation
- Intersection Observer API

---

## 📂 Folder Structure

```bash
project-folder/
│
├── index.html
├── style.css
├── script.js    # <- This JavaScript file
├── img/         # Image assets
│   └── *.jpg / *.png
└── README.md
