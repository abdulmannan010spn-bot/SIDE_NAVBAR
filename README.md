<div align="center">

# Skadoosh • Animated Glassmorphic Drawer

A sleek, responsive landing interaction built with vanilla web technologies and orchestrated using **GSAP 3**. Features dynamic staggered navigation reveals and real-time frosted glass effects.

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![GSAP](https://img.shields.io/badge/GSAP-88CE02?style=for-the-badge&logo=greensock&logoColor=white)](https://greensock.com/gsap/)

[Live Demo](#) • [Key Features](#key-features) • [Quick Start](#quick-start) • [Code Overview](#animation-pipeline)

</div>

---

## Key Features

* **Glassmorphic Sidebar:** Uses CSS `backdrop-filter: blur(10px)` combined with subtle translucent alpha values for a polished frosted-glass appearance[cite: 1].
* **GSAP Timeline Coordination:** Implements sequenced transitions with `gsap.timeline()`, decoupling logic from CSS transitions for total timing control.
* **Staggered Link Entrance:** Menu navigation anchors translate along the X-axis and fade in sequentially using `.stagger: 0.2`.
* **Bi-directional Playback:** A single paused timeline instance drives both open (`.play()`) and dismiss (`.reverse()`) states without conflicting transition states[cite: 3].
* **Lightweight Setup:** Completely dependency-free beyond CDN imports for GSAP and Remix Icon[cite: 2].

---

## Tech Stack

| Layer | Tooling | Usage |
| :--- | :--- | :--- |
| **Markup** | HTML5 | Semantic structure for header, backdrop canvas, and drawer container[cite: 2] |
| **Styles** | CSS3 | Viewport typography (`vh`), absolute positioning, backdrop filters[cite: 1] |
| **Logic** | ES6 JavaScript | Event dispatchers and DOM query targeting[cite: 3] |
| **Motion** | GSAP 3 | Linear slide-ins, translation offsets, and opacity tweens[cite: 2, 3] |
| **Icons** | Remix Icon CDN | Menu hamburger (`ri-menu-3-line`) and close toggle glyphs[cite: 2] |

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
