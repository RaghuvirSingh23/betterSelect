# betterSelect

betterSelect is a lightweight Chrome extension that lets you highlight all occurrences of selected text on any webpage with a single click.

## Features

- Select any text on a webpage and click the popup to highlight every matching occurrence.
- Clear highlights by selecting other text or reloading the page.
- Customize highlight and popup styles via CSS.

## Installation

1. Clone or download this repository:
   ```bash
   git clone https://github.com/your-username/betterSelect.git
   cd betterSelect
   ```
2. Open Google Chrome and navigate to `chrome://extensions`.
3. Enable **Developer mode** (toggle in the top-right corner).
4. Click **Load unpacked** and select the `betterSelect` directory.
5. The extension icon will appear in your toolbar.

## Usage

1. Go to any webpage.
2. Highlight the text you want to mark.
3. A small **H** popup appears near the text.
4. Click the popup to highlight all instances of the selected text.
5. Select new text or reload to clear highlights.

## Customization

- **Highlight Color:** Open `styles.css` and edit the `.highlighted-match` background-color.
- **Popup Appearance:** Modify the `.selectionPopup` styles in `styles.css` (padding, colors, font, etc.).
- **Popup Position:** Adjust the `showPopup` offsets in `contentScript.js` if you need different placement.

## Project Structure

```
betterSelect/              # Root directory
├── betterSelect.png       # Extension icon
├── contentScript.js       # Handles text selection and highlighting logic
├── mark.min.js            # Third-party mark.js library
├── styles.css             # Styles for highlights and popup
├── manifest.json          # Chrome extension manifest (v3)
├── README.md              # This file
└── LICENSE                # License information
```

## License

This project is licensed under the [MIT License](LICENSE).
