# Vite + React + Tailwind CSS Starter Template

A modern, pre-configured starter template that combines Vite, React, and Tailwind CSS with a well-organized project structure. This template includes routing setup, layout components, and essential directory organization to help you start building React applications faster.

## Features

- ⚡️ [Vite](https://vitejs.dev/) - Lightning fast build tool
- ⚛️ [React](https://reactjs.org/) - JavaScript library for building user interfaces
- 🎨 [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- 🚦 [React Router](https://reactrouter.com/) - Declarative routing for React
- 📦 [Hero Icons](https://heroicons.com/) - Beautiful hand-crafted SVG icons
- 🛠️ Pre-configured with best practices
- 📁 Organized directory structure
- 🎯 Basic routing setup with layouts

## Project Structure

```
src/
├── assets/        # Static assets like images, fonts, etc.
├── components/    # Reusable UI components
│   └── ui/       # Basic UI components
├── constants/     # Application constants
├── contexts/      # React context providers
├── hooks/         # Custom React hooks
├── layouts/       # Layout components
├── pages/         # Page components
├── services/      # API services and external integrations
└── utils/         # Utility functions and helpers
```

## Getting Started

### Using the Setup Script

1. Run the setup script with your project name:
```bash
./setup.sh my-project-name
```

### Manual Installation

1. Clone or download this template
2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## Customization

### Tailwind Configuration

The template includes a basic Tailwind CSS configuration with a primary color palette. You can modify the `tailwind.config.js` file to customize:

- Colors
- Typography
- Spacing
- Breakpoints
- And more...

### Adding New Routes

1. Create a new page component in `src/pages/`
2. Add the route in `src/App.jsx`:

```jsx
<Routes>
  <Route path="/" element={<MainLayout />}>
    <Route index element={<Home />} />
    <Route path="/new-page" element={<NewPage />} />
  </Route>
</Routes>
```

## Dependencies

- [react](https://reactjs.org/)
- [react-router-dom](https://reactrouter.com/)
- [tailwindcss](https://tailwindcss.com/)
- [@heroicons/react](https://heroicons.com/)
- [clsx](https://github.com/lukeed/clsx)

## Development Dependencies

- [vite](https://vitejs.dev/)
- [postcss](https://postcss.org/)
- [autoprefixer](https://github.com/postcss/autoprefixer)

## Contributing

Feel free to submit issues and enhancement requests!

## License

This project is licensed under the MIT License.