# Last War: Survival Alliance Website

A modern, responsive website for gaming alliances in Last War: Survival. Built with **vanilla HTML, CSS, and JavaScript** for easy GitHub Pages deployment.

## 🎮 Features

- **Hero Section**: Large alliance name and server display with gradient background
- **Server Clock**: Real-time UTC clock (Game Time) - updates every second
- **Leadership Board**: Display cards for alliance leadership (R5, R4 roles)
- **VS Duel Schedule**: Interactive tabbed interface for daily events (Mon-Sat)
  - Auto-highlights current day based on UTC time
  - Expandable tips for F2P and Spender strategies
- **Arms Race Timer**: 4-hour countdown timer for Arms Race events
- **Mobile-First Design**: Fully responsive with large, tappable buttons
- **Dark Military Theme**: Tactical aesthetic with neon blue accents

## 🚀 Quick Start

### GitHub Pages (Current Setup)

Your site is already set up for GitHub Pages! Just:

1. Edit the files to customize your alliance
2. Commit and push to GitHub
3. Your site updates automatically

**No build process needed!** ✅

### Local Testing

Simply open `index.html` in your browser:
- Double-click the file, or
- Right-click → Open with → Your browser

## 🎨 Customization

### Change Alliance Name and Server

Edit `index.html` lines 20-21:
```html
<h1 class="alliance-name">YOUR ALLIANCE NAME</h1>
<div class="server-number">Server #YOUR_SERVER</div>
```

### Update Leadership Roster

Edit `index.html` lines 40-79 to update:
- Avatar emojis
- Role names
- Leader names
- About descriptions

### Modify VS Duel Tips

Edit `app.js` lines 10-120 to customize the daily tips for F2P and Spender guides.

### Change Colors

Edit `style.css` lines 7-14 to modify the color palette:
```css
:root {
    --bg-dark: #1a1a1a;        /* Background */
    --neon-blue: #00f0ff;      /* Primary accent */
    --danger-red: #ff0000;     /* Alerts/timers */
    --gold: #ffd700;           /* VIP/server */
}
```

## 📁 Project Structure

```
c:\Dev\codegamesleep/
├── index.html          # Main HTML structure
├── style.css           # All styling and animations
├── app.js              # Interactive features (clock, timer, schedule)
├── react-backup/       # React version for future rebuild
│   ├── src/           # React components
│   ├── package.json   # Dependencies
│   └── ...config files
└── README.md          # This file
```

## 🎯 Tech Stack

- **HTML5** - Semantic structure
- **CSS3** - Custom animations, flexbox, grid
- **Vanilla JavaScript** - No frameworks or dependencies
- **Google Fonts** - Inter and Roboto

## 📱 Mobile Support

The site is fully responsive and optimized for mobile devices with:
- Large, tappable buttons (min 44px touch target)
- Readable fonts at all screen sizes
- Smooth CSS animations
- Touch-friendly interactive elements

## 🕐 Time Features

- **Server Clock**: Updates every second with current UTC time
- **Auto Day Highlighting**: Automatically detects and highlights current day in VS Duel Schedule
- **Arms Race Timer**: Counts down to next 4-hour block (00:00, 04:00, 08:00, 12:00, 16:00, 20:00 UTC)

## 🔄 Future: React Version

The `react-backup/` folder contains a complete React + Vite version of this site with:
- React 18 components
- Tailwind CSS
- Framer Motion animations
- Modern build tools

To use the React version later:
1. Install Node.js from https://nodejs.org/
2. Navigate to `react-backup/`
3. Run `npm install`
4. Run `npm run dev`

## 📄 Files

- **index.html** - Complete page structure
- **style.css** - Military theme, responsive design, animations
- **app.js** - UTC clock, Arms Race timer, VS Duel schedule logic

## 🤝 Contributing

Feel free to customize this website for your alliance needs!

## 📝 License

This project is open source and available for alliance use.
