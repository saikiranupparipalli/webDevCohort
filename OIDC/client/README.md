# Aura — Minimalist Quotes Web Application

A sleek, modern, and minimalist quotes displaying webpage designed to run on **PORT 5173**.

## ✨ Features
- **Minimalist, Modern UI**: Refined typography, glassmorphism card, ambient backdrop glows, responsive design.
- **Dark / Light Mode**: Seamless theme switcher with persistent local storage.
- **Category Filter**: Filter quotes by Philosophy, Technology, Wisdom, Design, Inspiration, Creativity, or browse All.
- **Copy & Share**: Copy quote with toast feedback, or share directly to X (Twitter).
- **Text-to-Speech**: Listen to the quote read aloud.
- **Favorites & Bookmarks**: Save quotes locally and view them in a saved modal list.
- **Keyboard Shortcuts**:
  - `Space`: Next quote
  - `C`: Copy current quote
  - `Esc`: Close favorites modal

## 🚀 Running the Project on Port 5173

### Method 1: Zero-Dependency Instant Run (Recommended)
No installation required! Just run with Node.js:
```bash
# From within the client folder:
node server.js

# Or using npm:
npm start
```
Open your browser at **http://localhost:5173**.

### Method 2: With Vite (Dev Server)
```bash
npm install
npm run dev
```
Vite is pre-configured with `vite.config.js` to run strictly on **PORT 5173**.

