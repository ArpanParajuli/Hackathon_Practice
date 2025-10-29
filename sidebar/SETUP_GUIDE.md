# Hackathon Sidebar Component 🚀

A simple, reusable sidebar navigation component built with React and Vite. Perfect for hackathon projects!

## Features ✨

- ✅ Simple and beginner-friendly code
- ✅ Glassmorphism design (modern look)
- ✅ Responsive (works on mobile & desktop)
- ✅ Easy to customize
- ✅ Mobile hamburger menu
- ✅ Active menu item highlighting
- ✅ Dark mode toggle button
- ✅ Logout functionality

## Project Structure 📁

```
sidebar/
├── src/
│   ├── App.jsx          (Main app component)
│   ├── App.css          (App styles)
│   ├── Sidebar.jsx      (Sidebar component)
│   ├── Sidebar.css      (Sidebar styles)
│   ├── main.jsx         (Entry point)
│   └── index.css        (Global styles)
├── index.html
├── package.json
└── vite.config.js
```

## How to Customize 🎨

### Change Brand Name and Icon

Open `Sidebar.jsx` and find this section:

```jsx
<div className="brand">
  <span className="brand-icon">🚀</span>
  <span className="brand-text">CodingHub</span>
</div>
```

Change the icon (emoji) and text to your project name.

### Add or Remove Menu Items

In `Sidebar.jsx`, find the `menuItems` array:

```jsx
const menuItems = [
  { id: 'dashboard', name: 'Dashboard', icon: '📊' },
  { id: 'revenue', name: 'Revenue', icon: 'ℹ️' },
  { id: 'notifications', name: 'Notifications', icon: '🔔' },
  // Add more items like this
];
```

### Change Colors

Open `Sidebar.css` and modify the `:root` variables:

```css
:root {
  --accent-green: #6ee7b7;    /* Change green accent */
  --accent-blue: #60a5fa;     /* Change blue accent */
  --bg-dark: #0f1724;         /* Change background */
  /* ... more variables */
}
```

### Add Your Own Functions

Update the button handlers in `Sidebar.jsx`:

```jsx
const handleLogout = () => {
  alert('You have been logged out!');
  // Replace with your logic
};

const handleDarkMode = () => {
  alert('Dark mode toggled!');
  // Replace with your logic
};
```

## How to Use 💻

### 1. Install Dependencies

```bash
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

### 3. Build for Production

```bash
npm run build
```

## How to Reuse in Other Projects 🔄

1. Copy `Sidebar.jsx` to your new project
2. Copy `Sidebar.css` to your new project
3. Import in your main component:

```jsx
import Sidebar from './Sidebar'

function App() {
  return (
    <div>
      <Sidebar />
      {/* Your content here */}
    </div>
  )
}
```

That's it! The component works everywhere! 🎉

## Browser Support 🌐

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## Tips 💡

- Use emojis for icons - simple and visual!
- Keep menu items under 8 for best UX
- Test on mobile using browser DevTools
- Customize colors to match your brand

## Need Help? 🤔

- Check the code comments in `Sidebar.jsx`
- Modify the CSS in `Sidebar.css`
- Test changes in real-time with `npm run dev`

Happy Coding! 🚀
