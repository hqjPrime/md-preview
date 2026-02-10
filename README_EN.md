# Markdown Previewer

A simple, lightweight browser-based Markdown preview tool that supports previewing Markdown documents and code highlighting through file import.

## Features

- ✅ Markdown file import and preview
- ✅ Drag and drop file support
- ✅ GitHub-style rendering
- ✅ Code syntax highlighting
- ✅ Safe HTML handling (using DOMPurify)
- ✅ Responsive design, adapting to different screen sizes
- ✅ Support for basic Markdown syntax:
  - Headings
  - Bold and italic text
  - Lists (ordered and unordered)
  - Code blocks
  - Links
  - Images
- ✅ Support for multiple file formats: .md, .markdown, .txt
- ✅ Multiple theme color schemes:
  - Light Theme
  - Dark Theme
  - GitHub Theme
  - Dracula Theme
  - Business Blue Theme
  - Nature Green Theme
  - Modern Gray+Orange Theme
  - Dark Pink Theme
- ✅ Theme auto-switching functionality
- ✅ File caching functionality (auto-save and load recent files)

## Technology Stack

- **Frontend**: Pure HTML5 + CSS3 + JavaScript
- **Markdown Parsing**: [markdown-it](https://github.com/markdown-it/markdown-it)
- **Code Highlighting**: [highlight.js](https://github.com/highlightjs/highlight.js)
- **Security Handling**: [DOMPurify](https://github.com/cure53/DOMPurify)
- **Styling**: [github-markdown-css](https://github.com/sindresorhus/github-markdown-css)

## Quick Start

### Method 1: Direct Opening

1. Download or clone this project
2. Open `index.html` directly in your browser
3. **Two ways to import files**:
   - Click the "Import File" button in the top right corner and select the Markdown file to preview
   - Drag and drop the Markdown file directly onto the webpage
4. The page will automatically display the rendered result

### Method 2: Local Server

If you need to run in a local server environment (recommended to avoid local file access restrictions in some browsers):

```bash
# Start local server with Python
python -m http.server 8000

# Or use Node.js (requires http-server installation)
npm install -g http-server
http-server -p 8000
```

Then access `http://localhost:8000` in your browser and follow the steps above to import Markdown files

## Building the Project

This project provides multiple build methods, you can choose the one that best suits you:

### Method 1: Using Build Script (Recommended)

The project root directory provides a `build.js` script that supports cross-platform building:

```bash
# Run build script with Node.js
node build.js
```

### Method 2: Using npm Commands (Recommended)

If you have Node.js installed, you can use npm commands:

```bash
# Install dependencies (if needed)
npm install

# Run build
npm run build
```

### Method 3: Manual Build

#### Windows System

1. Open PowerShell or Command Prompt
2. Navigate to the project root directory
3. Execute the following commands:

```powershell
# Create dist directory and lib subdirectory
mkdir dist
mkdir dist\lib

# Copy necessary files
Copy-Item index.html dist\index.html
Copy-Item style.css dist\style.css
Copy-Item script.js dist\script.js
Copy-Item config.json dist\config.json
Copy-Item lib\* dist\lib\
```

#### Linux/macOS System

1. Open Terminal
2. Navigate to the project root directory
3. Execute the following commands:

```bash
# Create dist directory and lib subdirectory
mkdir -p dist/lib

# Copy necessary files
cp index.html dist/
cp style.css dist/
cp script.js dist/
cp config.json dist/
cp -r lib/* dist/lib/
```

## Deployment and Running

### Deploying to a Server

1. Copy the entire generated `dist` directory to the web root directory of your server
2. Ensure the server is configured correctly to allow static file access

### Running the Deployed Application

1. Access the corresponding URL on the server through your browser
2. Example: `http://your-server.com/path/to/dist`
3. Click the "Import File" button or drag and drop a Markdown file to start previewing

### Local Testing of Deployed Version

You can also test the deployed version locally:

```bash
# Enter dist directory
cd dist

# Start local server
python -m http.server 8080
```

Then access `http://localhost:8080` in your browser

## Usage Examples

### Importing Files for Preview

1. **Import via Button**:

   - Click the "Import File" button in the top right corner
   - Select the Markdown file in the pop-up file selection dialog
   - The page will automatically render and display the preview result
2. **Import via Drag and Drop**:

   - Open File Explorer and locate the Markdown file to preview
   - Click and drag the file to the previewer page in your browser
   - When you see the "Please release the mouse to import file" prompt, release the mouse
   - The page will automatically render and display the preview result

### Example Markdown File Content

You can create a Markdown file with the following content and import it through this tool:

```markdown
# Heading 1
## Heading 2

This is **bold** text, this is *italic* text.

This is a [link](https://example.com).

### Code Highlighting

```js
console.log('Hello, world!');
```

```python
def hello():
    print('Hello, Python!')
```

### Lists

- Unordered list item 1
- Unordered list item 2
  - Nested list item

1. Ordered list item 1
2. Ordered list item 2

### Images

![Example Image](https://via.placeholder.com/400x200?text=Markdown+Image)

```

## Project Structure

```

md-preview/
├── index.html          # Main page
├── style.css           # Style file
├── script.js           # JavaScript file
├── config.json         # Style configuration file
├── test.md             # Test Markdown file
├── lib/                # Local dependency library directory
│   ├── github-markdown.min.css
│   ├── github.min.css
│   ├── highlight.min.js
│   ├── markdown-it.min.js
│   └── purify.min.js
├── themes/             # Color scheme directory
│   ├── light.json              # Light theme color scheme
│   ├── dark.json               # Dark theme color scheme
│   ├── github.json             # GitHub official theme color scheme
│   ├── dracula.json            # Dracula theme color scheme
│   ├── business-blue.json      # Business blue theme color scheme
│   ├── nature-green.json       # Nature green theme color scheme
│   ├── modern-gray-orange.json # Modern gray+orange theme color scheme
│   └── dark-pink.json          # Dark pink theme color scheme
├── dist/               # Build output directory (deployed version)
├── README.md           # Project documentation file (Chinese)
├── README_EN.md        # Project documentation file (English)
└── LICENSE             # License file

```

## Custom Configuration

### Changing Code Highlighting Theme

In the `index.html` file, modify the highlight.js style link:

```html
<!-- Default uses GitHub style -->
<link rel="stylesheet" href="lib/github.min.css">

<!-- Can be replaced with other themes, for example: -->
<!-- <link rel="stylesheet" href="lib/atom-one-dark.min.css"> -->
<!-- <link rel="stylesheet" href="lib/vs.min.css"> -->
```

### Configuring markdown-it Options

In the `script.js` file, modify the markdown-it configuration:

```javascript
const md = window.markdownit({
  html: false,        // Disable raw HTML (safer)
  linkify: true,      // Auto-link URLs
  typographer: true,  // Enable typography optimization
  highlight: function (str, lang) {
    // Code highlighting logic
  }
});
```

### Custom Style Color Scheme

This project supports custom style color schemes through two methods:

#### 1. Through config.json file (global default style)

Edit the `config.json` file to modify the global default style:

```json
{
  "styles": {
    "background": "#ffffff",      // Background color
    "text": "#24292e",           // Body text color
    "h1": "#1a1a1a",             // Level 1 heading color
    "h1Border": "2px solid #e1e4e8",  // Level 1 heading border
    "h2": "#2c3e50",             // Level 2 heading color
    "h2Border": "1px solid #e1e4e8",  // Level 2 heading border
    "h3": "#34495e",             // Level 3 heading color
    "link": "#0366d6",            // Link color
    "linkHover": "#0256c7",       // Link hover color
    "strong": "#d32f2f",          // Strong text color
    "blockquote": "#6a737d",      // Blockquote text color
    "blockquoteBorder": "4px solid #dfe2e5",  // Blockquote border
    "blockquoteBackground": "#f6f8fa",  // Blockquote background
    "code": "rgba(27, 31, 35, 0.05)",  // Inline code background
    "codeColor": "#24292e",       // Inline code text color
    "preBackground": "#f6f8fa",   // Code block background
    "preBorder": "1px solid #e1e4e8",  // Code block border
    "hr": "#e1e4e8",              // Horizontal rule color
    "tableBorder": "#e1e4e8",     // Table border color
    "tableHeaderBackground": "#f6f8fa"  // Table header background
  }
}
```

#### 2. By adding new color schemes through themes directory

Create a new JSON file in the `themes` directory to add custom color schemes, for example `custom-theme.json`:

```json
{
  "name": "Custom Theme",
  "description": "Custom color scheme",
  "isDark": false,
  "styles": {
    "background": "#ffffff",
    "text": "#333333",
    "h1": "#2c3e50",
    "h1Border": "2px solid #e1e4e8",
    "h2": "#34495e",
    "h2Border": "1px solid #e1e4e8",
    "h3": "#7f8c8d",
    "link": "#3498db",
    "linkHover": "#2980b9",
    "strong": "#e74c3c",
    "blockquote": "#95a5a6",
    "blockquoteBorder": "4px solid #dfe2e5",
    "blockquoteBackground": "#f8f9fa",
    "code": "rgba(27, 31, 35, 0.05)",
    "codeColor": "#24292e",
    "preBackground": "#f6f8fa",
    "preBorder": "1px solid #e1e4e8",
    "hr": "#e1e4e8",
    "tableBorder": "#e1e4e8",
    "tableHeaderBackground": "#f6f8fa"
  }
}
```

After creation, the new color scheme will automatically appear in the theme selection dropdown list.

After making changes, save the file and refresh the page to see the new style effects.

## Browser Compatibility

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## Contributing

Welcome to submit Issues and Pull Requests to improve this project!

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [markdown-it](https://github.com/markdown-it/markdown-it) - Powerful Markdown parsing library
- [highlight.js](https://github.com/highlightjs/highlight.js) - Excellent code highlighting library
- [DOMPurify](https://github.com/cure53/DOMPurify) - Safe HTML sanitization library
- [github-markdown-css](https://github.com/sindresorhus/github-markdown-css) - GitHub-style Markdown styling

---

**Enjoy Markdown writing!** 🎉
