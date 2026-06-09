# React Main Project by Cohort 2.0

A personal portfolio experience built with React and Vite. The interface is designed to feel like a macOS desktop, with a top navigation bar, a dock, and draggable windows for different sections such as GitHub projects, notes, resume, Spotify, and a CLI-style terminal.

## Overview

This project presents portfolio content in an interactive desktop layout rather than a traditional one-page website. Each feature opens in its own window and is controlled through shared app state in `App.jsx`.

The main experience includes:

- A desktop-style navigation bar with time and status icons
- A dock for launching portfolio windows and quick actions
- Draggable, resizable windows built with `react-rnd`
- A GitHub project gallery with cards and tags
- A note viewer that loads content from `public/note.txt`
- A resume window that embeds the PDF resume
- A Spotify window for music playback
# React Main Project by Cohort 2.0

A desktop-inspired portfolio website built with React and Vite. The interface is styled like a macOS workspace, where each portfolio section opens inside a draggable window from a dock, giving the site a polished interactive feel instead of a standard single-page layout.

## Project Summary

This project is a personal showcase application for Sunny Uchadiya. It presents portfolio content through an operating-system-style interface with a top navigation bar, a launcher dock, and modular app windows for projects, notes, resume viewing, music, and a terminal-style introduction.

The experience is organized around shared React state in `src/App.jsx`. When a dock icon is clicked, the related window opens in the desktop area and can be closed from the window controls.

## Key Features

- Desktop-style navigation bar with live date and time
- Dock-based launcher for opening portfolio apps
- Draggable window layout powered by `react-rnd`
- GitHub portfolio panel rendered from structured JSON data
- Notes window that loads content from `public/note.txt`
- Resume window that embeds `public/Sunny_Uchadiya_FullStack.pdf`
- Spotify window for embedded music playback
- CLI window for a terminal-style portfolio introduction
- Consistent macOS-inspired window chrome and styling

## Tech Stack

- React 19
- Vite
- Sass / SCSS
- `react-rnd` for draggable and resizable windows
- `react-markdown` for text rendering support
- `react-syntax-highlighter` for code-style note presentation
- `react-console-emulator` for the CLI experience

## App Sections

### Navigation Bar
The top bar is handled by `src/components/Nav.jsx` and includes the user label, menu items, Wi-Fi icon, and live clock display.

### Dock
`src/components/Dock.jsx` provides the launcher row at the bottom of the screen. It opens the main portfolio windows and also links to external actions such as calendar, email, and LinkedIn.

### Windows
All app windows use the shared wrapper in `src/components/windows/MacWindow.jsx`. This keeps the layout, close button behavior, and visual style consistent.

### Portfolio Content Windows
- `Github.jsx` renders a project gallery from `src/assets/github.json`.
- `Note.jsx` loads and displays the portfolio note from `public/note.txt`.
- `Resume.jsx` embeds the resume PDF stored in `public/Sunny_Uchadiya_FullStack.pdf`.
- `Spotify.jsx` embeds a Spotify playlist inside the portfolio desktop.
- `Cli.jsx` shows a terminal-style introduction and command-based content.

## Featured Projects

The GitHub window currently showcases five sample projects:

- `Scheds - A Course Schedule Generator`
- `FinTrack - Personal Finance Dashboard`
- `SecureAuth - Backend Identity Service`
- `ChatStream - Real-time Messaging App`
- `TerminalX - CLI Productivity Tool`

Each card includes a title, short description, tech tags, and links.

## Project Structure

```text
public/
	bg.jpg
	favicon.svg
	note.txt
	resume.pdf
	Sunny_Uchadiya_FullStack.pdf
	doc-icons/
	fonts/
	navbar-icons/

src/
	App.jsx
	App.scss
	main.jsx
	assets/
		github.json
	components/
		DateTime.jsx
		DateTime.scss
		Dock.jsx
		dock.scss
		Nav.jsx
		Nav.scss
		windows/
			Cli.jsx
			cli.scss
			Github.jsx
			Github.scss
			MacWindow.jsx
			MacWindow.scss
			Note.jsx
			note.scss
			Resume.jsx
			Resume.scss
			Spotify.jsx
			spotify.scss
```

## Setup

### Requirements

- Node.js 18 or newer
- npm

### Install Dependencies

```bash
npm install
```

### Run the Development Server

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```

### Preview the Production Build

```bash
npm run preview
```

## Scripts

| Script | Purpose |
| --- | --- |
| `npm run dev` | Starts the Vite development server |
| `npm run build` | Creates an optimized production build |
| `npm run preview` | Serves the production build locally |
| `npm run lint` | Runs ESLint across the codebase |

## Assets

- `public/doc-icons/` contains the dock app icons
- `public/navbar-icons/` contains navbar icons
- `public/fonts/` contains font assets used by the UI
- `public/bg.jpg` is the desktop background image
- `public/note.txt` is the content source for the note window
- `public/resume.pdf` is available as a secondary resume asset
- `public/Sunny_Uchadiya_FullStack.pdf` is the resume currently embedded in the app

## Implementation Notes

- Windows are opened and closed through shared state in `App.jsx`.
- The layout depends on assets inside `public/`, so those files should remain available in production.
- `react-rnd` is used so each window can be moved around the desktop like a real application window.

## Troubleshooting

- If a window does not open, confirm the related state key exists in `App.jsx`.
- If an asset is missing, check that the file exists inside `public/` with the exact name used in the component.
- If the CLI or Spotify window behaves unexpectedly after dependency changes, restart the Vite server and hard refresh the browser.

## License

No license has been specified for this project.


