# FundApp — Crowdfunding Platform

FundApp is a modern web app to create, browse, and contribute to fundraisers. Built with **React**, **Firebase**, and **Tailwind CSS**, it offers a clean UX, real‑time updates, and **zero platform fees**.

## ✨ Features

- **Create Fundraisers**: Title, description, goal, image.
- **Browse Fundraisers**: Grid/list of active fundraisers with goals & progress.
- **Donate**: Real‑time donor list and live total raised (via Firebase).
- **Comment**: Support threads on each fundraiser.
- **Zero Platform Fees**: 100% of donations go to the fundraiser (payment processor fees may still apply if used).

---

## 🧭 Demo Flow

1. Sign up or log in.
2. Click **Create Fundraiser** → fill form → submit.
3. Open any fundraiser → **Donate** and/or **Comment**.
4. Watch **amount raised** and **donor list** update in real time.

---

## 🛠 Tech Stack

**Frontend**

- React.js
- React Router
- Tailwind CSS
- Axios (optional for external HTTP calls)
- Lucide-react (icons)
- Vite (typical dev server; port `5173` by default)

**Backend**

- Firebase Authentication
- Firebase Realtime Database

---

## ✅ Prerequisites

- Node.js ≥ 18 and npm ≥ 9 (or Yarn/Pnpm)
- A Firebase project with:
  - **Authentication** enabled (Email/Password or social providers)
  - **Realtime Database** created (in your preferred region)

---

## ⚙️ Installation

```bash
git clone https://github.com/Altamash-0203/fund-app.git
cd fund-app
npm install
# or
yarn install


# Start dev server (Vite default: http://localhost:5173/)
npm run dev

# Type-check (if using TypeScript)
npm run typecheck

# Build for production
npm run build

# Preview production build locally
npm run preview

# Lint (if configured)
npm run lint


👥 Contributors

Altamash Shaikh
 – Creator & Maintainer
```
