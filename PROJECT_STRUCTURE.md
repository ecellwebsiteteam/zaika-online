# Project Structure

```
ecell/
├── public/   
|   |---events/all the images                   # Static public assets
│   ├── fonts/                  # Font files
│   │   ├── Autobahn.ttf
│   │   ├── cherif.otf
│   │   ├── EvilVampire-Regular.ttf
│   │   ├── Gildeon.otf
│   │   └── 
│   ├── ecell-logo.png         # Logo image
│   └── vite.svg               # Vite logo
│
├── src/                        # Source code
│   ├── assets/                # Project assets
│   │   ├── events/           # Event images
│   │   ├── react.svg
│   │   └── scene.spline      # 3D scene file
│   │
│   ├── components/            # React components
│   │   ├── about/            # About page components
│   │   ├── events/           # Events page components
│   │   ├── home/            # Home page components
│   │   │   └── HomeAbout.jsx
│   │   ├── nav/             # Navigation components
│   │   │   └── NavBar.jsx
│   │   ├── teams/           # Team page components
│   │   ├── ui/              # UI components
│   │   │   └── shadcn-io/   # Shadcn UI components
│   │   ├── CountdownTimer.jsx
│   │   ├── RotatingText.jsx
│   │   ├── SplineScene.jsx
│   │   └── TextRoll.jsx
│   │
│   ├── lib/                  # Utility functions
│   │   └── utils.js
│   │
│   ├── pages/                # Page components
│   │   ├── About.jsx
│   │   ├── Events.jsx
│   │   ├── Home.jsx
│   │   ├── Newsletters.jsx
│   │   └── Team.jsx
│   │
│   ├── App.jsx              # Root App component
│   ├── index.css           # Global styles
│   ├── main.jsx           # Entry point
│   └── theme.css          # Theme styles
│
├── .gitignore              # Git ignore file
├── components.json         # UI components config
├── eslint.config.js       # ESLint configuration
├── index.html             # HTML entry point
├── jsconfig.json          # JavaScript configuration
├── package.json           # Project dependencies
├── README.md             # Project documentation
├── tailwind.config.js    # Tailwind CSS configuration
└── vite.config.js        # Vite configuration
```

## Directory Structure Explanation

### Root Directory

- Configuration files for various tools (Vite, ESLint, Tailwind)
- Project documentation and dependencies

### `/public`

- Static assets that are served directly
- Font files and images that don't need processing

### `/src`

Main source code directory with:

#### `/assets`

- Project-specific images and resources
- 3D scenes and visual assets

#### `/components`

- Reusable React components organized by feature
- Shared UI components and utilities
- Page-specific component folders

#### `/lib`

- Utility functions and shared logic

#### `/pages`

- Main page components
- Each file represents a route in the application

## Key Configuration Files

- `vite.config.js` - Vite bundler configuration with path aliases
- `tailwind.config.js` - Tailwind CSS customization
- `components.json` - UI component library configuration
- `jsconfig.json` - JavaScript/TypeScript configuration
