# accordDesk UI

A Svelte-based UI shell for drafting and contract negotiation.

## Project Structure

```
accordDeskUi/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── Sidebar.svelte
│   │   └── TemplateCard.svelte
│   ├── views/               # Page-level views
│   │   └── DraftingManagerView.svelte
│   ├── mockData/            # Mock data for development
│   │   └── templates.js
│   ├── App.svelte           # Main app component with routing
│   ├── main.js              # Application entry point
│   └── app.css              # Global styles
├── index.html
├── package.json
├── vite.config.js
└── svelte.config.js
```

## Getting Started

### Install Dependencies
```bash
npm install
```

### Run Development Server
```bash
npm run dev
```

The app will be available at `http://localhost:5173/`

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## Current Features

### Drafting Manager Selection View
- Template library display with grid layout
- Sidebar with "Empty Template" creation option
- Template cards showing:
  - Template title
  - Type (SALES/R&D, language, length)
  - Author information
  - Creation date
- Grouped templates by author
- Hover effects and interactions

## Mock Data Structure

Mock data is organized in `src/mockData/` and currently supports:
- Template metadata (title, type, author, date)

Future mock data will include:
- Contracts
- Sections
- Clauses
- Comments
- Playbook details
- Negotiability settings

## Styling

All styles from the original HTML design have been preserved and are scoped to their respective Svelte components. The design features:
- Minimalist aesthetic
- Clean typography
- Subtle hover effects
- Custom scrollbar styling
- Responsive grid layout

## Future Development

The routing structure is prepared for additional views:
- Contract view
- Negotiation view
- Clause editor
- Comment threads
- Playbook management

## Technology Stack

- **Framework**: Svelte 5
- **Build Tool**: Vite 5
- **Routing**: svelte-routing
- **Styling**: Component-scoped CSS

# accorddeskui
