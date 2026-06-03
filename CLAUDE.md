

# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start dev server (auto-opens browser)
npm run build      # Production build
npm run lint       # Run ESLint (zero warnings allowed)
npm run preview    # Preview production build locally
```

There are no tests in this project.

## Architecture

Personal portfolio site built with React 18 + Vite. Single-page app with two main content areas surfaced via slide-in modals.

**Routing** (`src/App.jsx`): React Router v6 with two routes — `/` renders `<Home>`, everything else renders `<NotFoundPage>`. `<Footer>` renders outside the router so it's always visible.

**Modal pattern** (`src/components/Modal/Modal.jsx`): Reusable `<Modal>` component driven by Framer Motion. Accepts a `direction` prop (`"left"` or `"right"`) that controls which side the panel slides in from and which CSS class (`modal-content-left` / `modal-content-right`) is applied. Escape key and backdrop click both close the modal.

**Home page** (`src/components/Home/Home.jsx`): Manages two boolean state flags (`isExperienceModalOpen`, `isProjectsModalOpen`). "About Me" button opens the left-sliding `<Experience>` modal; "Projects" button opens the right-sliding `<Projects>` modal. Social icons reference SVG files served from `public/` (not imported assets).

**Content components** — all static, no props:
- `Experience` — About Me bio, work history timeline, education
- `Projects` (`Projects.jsx`) — Three SWE projects with screenshots from `src/assets/images/`, then renders `<OtherProjects>`
- `OtherProjects` (`Projects2.jsx`) — Data analytics / quant modelling projects (no screenshots)

**Styling**: Each component has a co-located `.css` file. `src/index.css` holds global styles. No CSS framework or preprocessor — plain CSS.

**ESLint**: `vite-plugin-eslint` runs lint on every HMR reload in dev, and fails the build on errors in production. `react/prop-types` rule is disabled.
