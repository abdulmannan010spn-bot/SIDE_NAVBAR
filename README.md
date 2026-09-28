<div align="center">

# 🥋 Skadoosh • Animated Glassmorphic Drawer

A sleek, responsive landing interaction built with vanilla web technologies and orchestrated using **GSAP 3**. Features dynamic staggered navigation reveals and real-time frosted glass effects.

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![GSAP](https://img.shields.io/badge/GSAP-88CE02?style=for-the-badge&logo=greensock&logoColor=white)](https://gsap.com/)

[Live Demo](#) • [Key Features](#-key-features) • [Getting Started](#-getting-started) • [How It Works](#-how-it-works)

</div>

---

## 🎮 Overview

Skadoosh is a single-page landing interaction centered on an animated sidebar drawer. Clicking the menu icon slides in a frosted-glass panel, then reveals each navigation link one after another. Clicking close plays the exact same animation in reverse.

## ✨ Key Features

- 🪟 **Glassmorphic Sidebar** — uses CSS `backdrop-filter: blur(10px)` combined with subtle translucent alpha values for a polished frosted-glass appearance
- 🎬 **GSAP Timeline Coordination** — sequenced transitions with `gsap.timeline()`, decoupling logic from CSS transitions for total timing control
- 🌊 **Staggered Link Entrance** — menu links translate along the X-axis and fade in sequentially using `stagger: 0.2`
- 🔁 **Bi-directional Playback** — a single paused timeline drives both open (`.play()`) and dismiss (`.reverse()`) states without conflicting transitions
- ⚡ **Lightweight Setup** — no build step; only CDN imports for GSAP and Remix Icon

## 🚀 Getting Started

### Prerequisites

Just a web browser and an internet connection (GSAP and Remix Icon load from a CDN).

### Run Locally

```bash
# Clone the repository
git clone https://github.com/your-username/skadoosh-drawer.git

# Navigate into the project directory
cd skadoosh-drawer

# Open the page directly
open index.html        # macOS
start index.html         # Windows
xdg-open index.html       # Linux
```

Or serve it with any static file server:

```bash
npx serve .
```

## 📁 Project Structure

```
├── index.html    # Header, backdrop canvas, drawer container, CDN links
├── style.css     # Viewport typography, positioning, backdrop filter
└── script.js     # GSAP timeline, open/close event handlers
```

> Rename the files above to match your actual filenames.

## 🧠 How It Works

1. **Setup:** JavaScript targets the menu icon, the close icon, and the drawer's links.
2. **Timeline:** A single `gsap.timeline({ paused: true })` slides the drawer in, then staggers each link in (X-axis offset plus opacity) at `0.2s` intervals.
3. **Open:** Clicking the hamburger (`ri-menu-3-line`) calls `.play()`.
4. **Close:** Clicking the close icon calls `.reverse()`, so links and drawer animate out in the opposite order using the same timeline.
5. **Glass effect:** The drawer's `backdrop-filter: blur(10px)` blurs whatever sits behind it in real time.

## 🛠️ Tech Stack

| Layer | Tooling | Usage |
| :--- | :--- | :--- |
| **Markup** | HTML5 | Semantic structure for header, backdrop canvas, and drawer container |
| **Styles** | CSS3 | Viewport typography (`vh`), absolute positioning, backdrop filters |
| **Logic** | ES6 JavaScript | Event listeners and DOM query targeting |
| **Motion** | GSAP 3 | Slide-ins, translation offsets, and opacity tweens |
| **Icons** | Remix Icon CDN | Menu hamburger (`ri-menu-3-line`) and close toggle glyphs |

## 🗺️ Possible Improvements

- [ ] Close the drawer on `Escape` or when clicking outside it
- [ ] Add `prefers-reduced-motion` support
- [ ] Add ARIA attributes and focus trapping for accessibility
- [ ] Add a fallback for browsers without `backdrop-filter` support
- [ ] Add a hover animation on the navigation links

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to open an issue or pull request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">
Made with 🥋 and GSAP
</div>
