# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Terminal-style portfolio website — a browser-based terminal simulator where visitors navigate the portfolio by typing commands. Pure vanilla JS/HTML/CSS, zero dependencies, no build step.

Live at: `https://hhassenmalek.github.io/`

## Development

No build tool. Open `index.html` directly in a browser, or use a local HTTP server:

```bash
python -m http.server 8000
# then open http://localhost:8000
```

## Architecture

Three script files loaded in order via `index.html`:

1. **`scripts/config.js`** — Global DOM references (`outputElement`, `inputElement`) and welcome text shown on load.
2. **`scripts/commands.js`** — The `commands` object: each property is a command name, each value is a function returning an HTML string.
3. **`scripts/main.js`** — Event loop: listens for Enter on `#input-field`, dispatches to `commands[input]()`, appends result to `#output`, auto-scrolls.

### Adding a new command

Add a property to the `commands` object in `scripts/commands.js`:

```js
commands.mycommand = function() {
    return `<p>HTML content here</p>`;
};
```

Then register it in the `help` command's table so users can discover it.

### Command dispatch pattern

```
User types → Enter key → main.js captures input → commands[input]() → HTML appended to #output
```

Unknown commands fall through to a `command not found` message. The `clear` command empties `#output`. The `init` command re-renders the welcome screen and is also called on page load.

## Key files

| File | Purpose |
|------|---------|
| `scripts/config.js` | DOM selectors, welcome text, global state |
| `scripts/commands.js` | All command implementations |
| `scripts/main.js` | Input handling, loading animation, app init |
| `style.css` | Terminal theme, 5 responsive breakpoints for ASCII art scaling |
| `src/monCv.pdf` | Resume file opened by the `cv` command |
