# 🎮 Last War Alliance Website - Project Overview

## 🚀 Quick Start

**⚠️ Node.js Required** - Install from https://nodejs.org/

```powershell
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

---

## 📁 Project Structure

```
c:\Dev\codegamesleep/
│
├── 📄 Configuration Files
│   ├── package.json          # Dependencies & scripts
│   ├── vite.config.js         # Vite build configuration
│   ├── tailwind.config.js     # Custom theme (colors, fonts)
│   ├── postcss.config.js      # PostCSS for Tailwind
│   └── .gitignore             # Git ignore rules
│
├── 📄 Documentation
│   ├── README.md              # Full documentation
│   ├── SETUP.md               # Quick setup guide
│   └── PROJECT_OVERVIEW.md    # This file
│
├── 🌐 Entry Points
│   └── index.html             # HTML entry point
│
└── 📂 src/
    ├── main.jsx               # React entry point
    ├── App.jsx                # Main app component
    ├── index.css              # Global styles + Tailwind
    │
    ├── 📂 components/
    │   ├── Layout.jsx         # Responsive wrapper
    │   ├── Hero.jsx           # Alliance name & server
    │   ├── ServerClock.jsx    # Real-time UTC clock
    │   ├── LeadershipBoard.jsx # Leadership roster
    │   ├── VSDuelSchedule.jsx # Daily event schedule
    │   └── ArmsRaceTimer.jsx  # 4-hour countdown
    │
    └── 📂 utils/
        └── timeUtils.js       # Time calculations
```

---

## 🎨 Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| 🖤 Dark Grey | `#1a1a1a` | Background |
| ⚫ Gunmetal | `#1a1e24` | Cards |
| 🔘 Steel Edge | `#2c333a` | Borders |
| 💙 Neon Blue | `#00f0ff` | Accents |
| ❤️ Danger Red | `#ff0000` | Alerts |
| 💛 Gold | `#ffd700` | VIP/Server |

---

## ✨ Features

### 🏆 Hero Section
- Alliance name with neon glow
- Server number display
- Animated entrance
- Gradient background

### ⏰ Server Clock
- Real-time UTC display
- Updates every second
- Large, readable format

### 👥 Leadership Board
- 4 leadership cards
- Responsive grid layout
- Hover animations
- Custom avatars

### 📅 VS Duel Schedule
- Monday-Saturday tabs
- Auto-highlights current day
- Expandable tips (F2P/Spender)
- Smooth transitions

### ⚔️ Arms Race Timer
- 4-hour countdown
- Pulsing animation
- Auto-resets
- Visual urgency indicator

---

## 🛠️ Tech Stack

- **React 18** - UI framework
- **Vite 5** - Build tool
- **Tailwind CSS 3** - Styling
- **Framer Motion 10** - Animations

---

## 📱 Responsive Design

- ✅ Mobile-first approach
- ✅ Large touch targets
- ✅ Flexible layouts
- ✅ Readable at all sizes

---

## 🎯 Customization Points

1. **Alliance Name** → `src/App.jsx` line 12
2. **Leadership** → `src/components/LeadershipBoard.jsx`
3. **Background** → `src/components/Hero.jsx` line 12
4. **Colors** → `tailwind.config.js`

---

## 📚 Documentation

- **README.md** - Full documentation
- **SETUP.md** - Installation guide
- **walkthrough.md** - Implementation details (in artifacts folder)

---

## ✅ Status

**All features implemented and ready to run!**

Next step: Install Node.js and run `npm install`
