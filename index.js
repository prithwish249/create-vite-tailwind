#!/usr/bin/env node

const { execSync } = require("child_process");
const path = require("path");
const fs = require("fs");

// Get the project name from command line arguments
const projectName = process.argv[2] || "my-vite-tailwind-app";

// Create a new Vite project
console.log(
  `Creating a new Vite + Tailwind CSS React project in ${projectName}...`
);
execSync(`npm create vite@latest ${projectName} --template react`, {
  stdio: "inherit",
});

// Change directory to the newly created project
process.chdir(projectName);

// Install dependencies
console.log("Installing dependencies...");
execSync(
  "npm install -D tailwindcss postcss autoprefixer @heroicons/react clsx",
  { stdio: "inherit" }
);

// Initialize Tailwind CSS
execSync("npx tailwindcss init -p", { stdio: "inherit" });

// Configure Tailwind
const tailwindConfig = `/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
          950: '#082f49',
        },
      },
    },
  },
  plugins: [],
}`;

fs.writeFileSync("tailwind.config.js", tailwindConfig);

// Create directory structure
const directories = [
  "src/components",
  "src/components/ui",
  "src/layouts",
  "src/pages",
  "src/hooks",
  "src/utils",
  "src/assets",
  "src/constants",
  "src/services",
  "src/contexts",
];

directories.forEach((dir) => {
  fs.mkdirSync(dir, { recursive: true });
});

// Create base CSS file
const cssContent = `@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html {
    @apply antialiased;
  }
  
  body {
    @apply bg-gray-50 text-gray-900;
  }
}

@layer components {
  .container {
    @apply mx-auto px-4 max-w-7xl;
  }
}`;

fs.writeFileSync("src/index.css", cssContent);

// Create MainLayout component
const mainLayoutContent = `import { Outlet } from 'react-router-dom';

export default function MainLayout() {
  return (
    <div className="min-h-screen">
      <main className="container py-8">
        <Outlet />
      </main>
    </div>
  );
}`;

fs.writeFileSync("src/layouts/MainLayout.jsx", mainLayoutContent);

// Create Home page component
const homePageContent = `export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
      <h1 className="text-4xl text-blue-600 font-bold mb-4">
        Welcome to Your  App
      </h1>
      <p className="text-lg text-gray-600 max-w-2xl">
        This is a clean starter template with Vite, and Tailwind CSS.
        Start building your awesome project!
      </p>
    </div>
  );
}`;

fs.writeFileSync("src/pages/Home.jsx", homePageContent);

// Create main App component
const appContent = `import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;`;

fs.writeFileSync("src/App.jsx", appContent);

// Create main entry point
const mainContent = `import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);`;

fs.writeFileSync("src/main.jsx", mainContent);

// Update package.json to add react-router-dom
const packageJson = JSON.parse(fs.readFileSync("package.json", "utf8"));
packageJson.dependencies = {
  ...packageJson.dependencies,
  "react-router-dom": "^6.21.1",
};
fs.writeFileSync("package.json", JSON.stringify(packageJson, null, 2));

// Clean up unnecessary files
const filesToRemove = [
  "src/assets/react.svg",
  "public/vite.svg",
  "src/App.css",
];

filesToRemove.forEach((file) => {
  try {
    fs.unlinkSync(file);
  } catch (err) {
    // Ignore errors if file doesn't exist
  }
});

// Install dependencies
console.log("Installing project dependencies...");
execSync("npm install", { stdio: "inherit" });

console.log("\nProject setup complete! Your project structure is ready.");
console.log("\nCreated directories:");
directories.forEach((dir) => console.log(`- ${dir}`));
console.log("\nTo start development:");
console.log(`cd ${projectName} && npm run dev`);
