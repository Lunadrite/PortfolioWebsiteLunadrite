# Luna Designs Portfolio

Personal portfolio website showcasing development on projects, Pictures i have taken in the past and Future projects i am going to work on!

<img width="300"   alt="Picture of Luna Designes on a desktop showing its scalability" src="https://github.com/user-attachments/assets/e24efb36-77db-4668-a7cd-cf5cfa8db712" />

<img width="300"  alt="Picture of Luna Designes on a phone showing its compatability" src="https://github.com/user-attachments/assets/d42dfec2-19ba-4186-afeb-2f54b8579356" />

## Features

- Custom lightweight page routing system
- Responsive layout
- Interactive UI elements
- Project showcase section
- Smooth animations and transitions
- Optimized asset loading

## Technical Notes

Instead of using a full routing library, I created a lightweight custom router specifically for the portfolio's small number of pages. This reduced unnecessary overhead and allowed for faster page transitions while keeping the project simple.
## Built With

- Vite
- JavaScript
- HTML/CSS
- Tailwind CSS
- Figma
- Bun

  ## What I Learned

- I improved on my design and working with tailwind
- Optimizing page structure was a big task for me but i understood it and im able to replicate it for other projects
- Structured frontend dev
- Improving UI consistency

  ## Future Improvements

- Add blog/articles section
- Add backend contact form
- Expand project filtering system
- Add more future projects
- Finish About me 

















# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
