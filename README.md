# Food Delivery & Healthy Nutrition

A web application for food delivery and healthy meal planning.  
The project combines interactive UI components with dynamic content rendering and a user-friendly nutrition calculator.

[![JavaScript](https://img.shields.io/badge/JavaScript-ES6%2B-f7df1e?logo=javascript&logoColor=000)](#tech-stack)
[![HTML5](https://img.shields.io/badge/HTML5-Markup-e34f26?logo=html5&logoColor=fff)](#tech-stack)
[![SCSS](https://img.shields.io/badge/SCSS-Styling-cc6699?logo=sass&logoColor=fff)](#tech-stack)
[![Gulp](https://img.shields.io/badge/Gulp-Task%20Runner-cf4647?logo=gulp&logoColor=fff)](#tech-stack)
[![Webpack](https://img.shields.io/badge/Webpack-Bundler-8dd6f9?logo=webpack&logoColor=000)](#tech-stack)
[![GitHub Pages](https://img.shields.io/badge/Deploy-GitHub%20Pages-181717?logo=github&logoColor=fff)](#deployment)

---

## Live Demo

[Live Demo](https://nazarSynchyna.github.io/food/)

---

## Features

- Dynamic menu rendering from `db.json` using **Axios**
- Calories / BJU (proteins, fats, carbs) calculator
- Interactive modal windows (open/close, overlay click, ESC key, scroll trigger)
- Countdown timer for promotional offers
- Form submission flow with API integration capability
- Slider component for featured offers
- Tab-based content switching

---

## Tech Stack

| Category | Technologies |
|---|---|
| Markup | HTML5 |
| Styling | CSS3, SCSS (Sass) |
| Programming | JavaScript (ES6+) |
| Data/HTTP | Axios, local `db.json` |
| Build Tools | Gulp, Webpack, Babel |
| Production CSS pipeline (`gulp prod`) | PostCSS, Autoprefixer, CleanCSS |
| Deployment | GitHub Pages (`gh-pages`) |

---

## Project Structure

```text
food/
├── dist/                      # Compiled output (generated)
├── src/
│   ├── index.html             # Main page
│   ├── server.php             # Optional backend endpoint stub
│   ├── icons/                 # Icon assets
│   ├── img/                   # Image assets
│   ├── js/
│   │   ├── main.js            # Application entry point
│   │   ├── modules/
│   │   │   ├── calc.js
│   │   │   ├── cards.js
│   │   │   ├── forms.js
│   │   │   ├── modal.js
│   │   │   ├── slider.js
│   │   │   ├── tabs.js
│   │   │   └── timer.js
│   │   └── services/
│   │       └── services.js    # GET/POST helper functions
│   └── scss/
│       ├── style.scss         # Root SCSS entry
│       ├── base.scss
│       ├── variables/
│       └── blocks/            # Component SCSS partials
├── db.json                    # Local menu data source
├── gulpfile.js                # Build & dev tasks
├── package.json
└── package-lock.json
```

---

## Prerequisites

- Node.js (recommended LTS, e.g. >= 18)
- npm (or yarn)

Note: The project uses modern build tools (Webpack, Babel, Gulp). Specifying the Node version in `package.json` helps reproduce the environment (see `engines` there).

---

## Local Setup & Installation

### 1. Clone repository

```bash
git clone https://github.com/nazarSynchyna/food.git
cd food
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run development build/watch

```bash
npm start
```

This runs Gulp default tasks (`watch` + `build`) in development mode and outputs files to `dist/`.

### 4. (Optional) Start local JSON server for API-like data

```bash
npx json-server db.json
```

Note: The repository currently lists a beta version of `json-server` in devDependencies. If you encounter issues, update or install a stable `json-server` version globally or locally.

### 5. Open project

Open/serve the compiled app from the `dist/` folder.

> Note: BrowserSync is configured with a MAMP proxy (`http://localhost:8888/Food/dist/`) in `gulpfile.js`.  
> If you do not use MAMP, adjust the proxy in BrowserSync config for your local environment.

---

## Build / Production

To build production assets and optimize CSS/JS, run:

```bash
gulp prod
```

This writes optimized files to `dist/` (CSS minified, JS built for production).

---

## Deployment

The project is configured for deployment to **GitHub Pages** via:

```bash
npm run deploy
```

This command publishes the `dist/` directory using `gh-pages`.

Note: Ensure you have run a build (`gulp prod` or equivalent) before deploying so `dist/` contains the latest compiled assets.

---

## Scripts

```bash
npm start      # Run gulp default task (watch + build, development)
npm run deploy # Deploy dist/ to GitHub Pages
npm test       # Placeholder test script (no tests currently)
```

---

## Troubleshooting

- If BrowserSync proxy is not applicable, update the `proxy` value in `gulpfile.js` or run without proxy.
- If `npm start` fails due to Node version, install an LTS Node (>= 18) or use `nvm` to switch versions.
- If json-server behavior differs, install a specific stable version: `npm i --save-dev json-server@0.17.0` (or similar).

---

## Author

**Nazar Synchyna**  
GitHub: [@nazarSynchyna](https://github.com/nazarSynchyna)
