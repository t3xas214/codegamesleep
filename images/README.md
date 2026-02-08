# 🎨 Project Image Guide

This guide details the recommended file formats, dimensions, and naming conventions for your Dragon Storm website.

## 📂 Folder Location
Place all your images in: `C:\Dev\codegamesleep\images\`

## 📏 Recommended Specs

### 1. Main Backgrounds
For the large hero section or body background.
- **Dimensions**: `1920x1080` pixels (Full HD)
- **Format**: `.jpg` (High quality, smaller file size) or `.webp` (Best performance)
- **File Size Goal**: < 300KB
- **Name Example**: `hero-bg.jpg`, `matrix-bg.webp`

### 2. Leadership Avatars
For the Command Staff cards.
- **Dimensions**: `500x500` pixels (Square aspect ratio is crucial)
- **Format**: `.jpg` or `.png`
- **Style**: Using a transparent `.png` with a "cutout" of the person/character looks best with the 3D tilt effect!
- **Name Example**: `commander-alpha.png`, `warlord.jpg`

### 3. Icons & Badges
For role icons (crown, sword, mask) or rank tags.
- **Dimensions**: `256x256` or `512x512` pixels
- **Format**: `.png` (Must have transparent background)
- **Name Example**: `rank-r5.png`, `icon-radar.png`

## 🛠️ How to Add Them to Code

Once you drop a file into the folder, update your HTML like this:

**Before (Emoji):**
```html
<div class="avatar">👑</div>
```

**After (Image):**
```html
<div class="avatar">
    <img src="images/commander-alpha.png" alt="Commander Alpha" style="width:100%; height:100%; object-fit:cover; border-radius:50%;">
</div>
```

## 🤖 AI Generators (Midjourney/DALL-E)
If generating images, use these aspect ratios:
- **Backgrounds**: `--ar 16:9`
- **Avatars**: `--ar 1:1`
