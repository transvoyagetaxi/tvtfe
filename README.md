# Trans Voyage Taxi — Client

This is the client-side React app for the Trans Voyage Taxi website. It's a small, responsive single-page app built with Create React App and plain React.

The project includes a lightweight, mobile-first stylesheet at `src/styles.css` and several small components for the header, navigation, services listing, and a quick booking modal.

## Quick start

Prerequisites: Node.js (14+ recommended) and npm or yarn.

Install dependencies and start the development server:

```bash
cd client
npm install
npm start
```

Open http://localhost:3000 in your browser. The dev server supports hot reload.

Build for production:

```bash
npm run build
```

Run tests (if any):

```bash
npm test
```

## Project structure

Important folders and files inside `client/`:

- `public/` — static files and `index.html`.
- `src/` — application source code.
  - `assets/` — images and media.
  - `components/` — reusable UI components (Header, NavBar, QuickBookModal, Services, Footer).
  - `pages/` — route pages (Home, ServicesPage, About).
  - `styles.css` — global, mobile-first stylesheet (variables, layout helpers, components).
  - `App.js` — application routes and top-level state (booking modal open/close).

## Styling & theme

- The app uses `src/styles.css` — a custom, mobile-first stylesheet that uses CSS variables for quick theme adjustments.
- I added a compatibility layer to style existing class names (prefixed with `tv-` and `qb-`) used across components so the site receives a consistent look without editing all JSX.
- Accessibility: focus-visible outlines are present and `prefers-reduced-motion` is respected.

If you want to tweak colors or spacing, update the variables at the top of `src/styles.css` (for example `--accent`, `--bg`, `--text`, `--muted`, `--radius`).

## Main components

- `Header` / `NavBar` — site branding and navigation. Nav becomes a horizontal bar on larger screens and shows a toggle on small screens.
- `QuickBookModal` — opens a small dialog and builds a `mailto:` booking email from form data.
- `Services` — service cards (images + copy) and a rates table.
- `Footer` — contact and address information.

## Behavior notes

- Booking uses `mailto:` to open the user's email client with booking details; it does not submit to a server. This is by design for the current MVP.
- The modal uses `role="dialog"` and `aria-modal="true"` for accessibility.

## Next steps (suggestions)

- Move remaining inline styles into `src/styles.css` for consistency (I already moved a number of elements to classes).
- Replace the `mailto:` flow with a backend booking endpoint if you want server-side booking storage and confirmations.
- Add visual tests or Storybook stories for the UI components.
- Add a theme toggle (dark/light) using the CSS variables.

## Contributing

If you plan to contribute, please open issues or PRs and describe the change. Keep changes small and focused.

## License

No license file is included in this repository. Add a license (for example MIT) if you intend to open-source the project.
