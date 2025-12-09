# 🚀 Outcom.ai - Marketing Website Frontend

A modern, responsive marketing website frontend for Outcom.ai featuring advanced animations, 3D graphics, and a component-based React architecture.

**Status**: ✅ Frontend implementation complete. 🔄 Backend development in progress.

## 🛠️ Tech Stack

**Frontend Framework**: React 18+ with React Router v6  
**Build Tool**: Vite ⚡  
**Animations**: Three.js 🎨, GSAP, Anime.js  
**Styling**: CSS3 with Flexbox/Grid

## 📁 Project Structure

```
src/
├── Components/
│   ├── Navbar/         # 🧭 Navigation component
│   ├── Footer/         # 📄 Footer component
│   ├── Home/           # 🏠 Home page with 6 sections
│   │   ├── Hero/       # ⭐ Hero section
│   │   ├── Features/   # ✨ Features showcase
│   │   ├── Solutions/  # 💡 AI solutions
│   │   ├── Outcomes/   # 📊 Results & metrics
│   │   ├── Proof/      # 🏆 Social proof
│   │   └── Call/       # 📞 CTA section
│   ├── Career/         # 💼 Career page
│   └── Blog/           # 📝 Blog page
├── App.jsx             # 🔗 Main routing component
└── main.jsx            # 🚪 Entry point
```

## ✨ Key Features

- 🔀 Client-side routing with React Router
- 🧩 Modular component architecture with reusable components
- 🎭 3D graphics and animations using Three.js, GSAP, and Anime.js
- 📱 Responsive design optimized for all devices
- ⚡ Performance optimized with code splitting and lazy loading

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

Development server runs on `http://localhost:5173`

## 🏗️ Component Architecture

**App Component** handles routing with persistent Navbar and Footer across all pages.

**Home Page** consists of 6 modular sections rendered sequentially with section-based navigation support.

**Career & Blog Pages** ready for dynamic content integration when backend is deployed.

## ⚡ Performance

- ⏱️ First Contentful Paint: <1.5s
- 📦 Optimized bundle size with Vite
- 🎬 Smooth 60fps animations

## 🔮 Future Development

Backend integration underway using Flask/FastAPI with REST APIs for dynamic content management and user interactions.

## 👨‍💻 Author

**Aghar Usman Kannanthodi**  
🔗 GitHub: [github.com/aghar-usman](https://github.com/aghar-usman)  
💼 LinkedIn: [linkedin.com/in/aghar-usmankt](https://linkedin.com/in/aghar-usmankt)  
🌐 Portfolio: [aghar-usman.github.io/my-portfolio](https://aghar-usman.github.io/my-portfolio)

---

⭐ **If you find this project interesting, feel free to star the repository!**
