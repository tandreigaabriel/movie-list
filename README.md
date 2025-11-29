# 🎬 Movie List App — React + Vite (2025 Upgrade)

A modern and fast movie search & watchlist application built with **React**, **Vite**, and **Ant Design**, powered by **The Movie Database (TMDB)** API.

This project is an upgraded version of an older CRA (Create React App) project, now rebuilt for 2025 with:

✔ Faster dev environment  
✔ Better UI using Ant Design  
✔ Trending movies  
✔ Movie modal with details  
✔ Watchlist with ratings  
✔ Clean, modern structure  
✔ Vite HMR + optimized build

---

## 🚀 Demo (Coming Soon)

Add your hosted link here after deploying to **Vercel**, **Netlify**, or **GitHub Pages**.

---

## 📸 Screenshots

> Replace these when you upload images.

### 🔎 Search Movies

![Search Screenshot](./screenshots/search.png)

### ⭐ Saved Watchlist

![Watchlist Screenshot](./screenshots/watchlist.png)

### 🔥 Trending Movies

![Trending Screenshot](./screenshots/trending.png)

---

## ✨ Features

### 🔍 Movie Search

Search for any movie using real-time TMDB API results.

### ⭐ Save Movies to Watchlist

Your saved movies are stored in **localStorage** — no backend required.

### 🔥 Trending Movies

See daily trending movies from TMDB.

### 📝 Movie Details Modal

Modern popup with:

- Full movie overview
- Poster
- Release year
- Score
- Add to watchlist

### ⭐ Custom 1–10 Rating System

Click stars to rate movies in your list.

### 🎨 Modern UI with Ant Design

Responsive grid system, buttons, modal, and icons.

### ⚡ Ultra-Fast Vite Build

Instant HMR, zero-config dev setup.

---

## 🛠️ Tech Stack

| Tech             | Description           |
| ---------------- | --------------------- |
| **React 18**     | UI library            |
| **Vite**         | Fast build tool       |
| **Ant Design**   | UI components         |
| **Axios**        | HTTP requests         |
| **TMDB API**     | Movie data            |
| **LocalStorage** | Watchlist persistence |

---

## 📦 Installation

Clone the repository:

git clone https://github.com/tandreigaabriel/movie-list.git
cd movie-list
npm install
npm run dev
npm run build
npm run preview
You need an API key from:
👉 https://www.themoviedb.org/settings/api
Then create a file:
src/config.js
export const API_KEY = "YOUR_API_KEY_HERE";
Project Structure
src/
components/
Header.jsx
ResultList.jsx
MovieList.jsx
TrendingList.jsx
MovieModal.jsx
pages/
Home.jsx
App.jsx
main.jsx
🔐 Security & Updates
.github/dependabot.yml

👤 Author

Toma Andrei Gabriel
💼 Web Developer – Laravel, WordPress, React
📍 Crawley, UK
🔗 https://tandreig.com

📧 andrei@tandreig.com
