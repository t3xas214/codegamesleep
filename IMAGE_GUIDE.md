# Image Generation Guide for Dragon Storm Website

Since the built-in image generator is temporarily unavailable, you can use these prompts with other AI image generators like:
- **DALL-E** (ChatGPT Plus)
- **Midjourney** (Discord)
- **Stable Diffusion** (free)
- **Leonardo.ai** (free)

## 📸 Images to Generate

### 1. Hero Background Image
**File to save as**: `images/hero-dragon-storm.jpg`

**Prompt**:
```
Epic dragon storm battle scene, massive fierce dragon silhouette emerging from dark stormy clouds with intense lightning bolts, military tactical command base in foreground, cinematic ultra-wide angle view, dramatic dark blue and purple storm clouds, electric blue lightning strikes, high contrast moody lighting, Last War Survival mobile game aesthetic, post-apocalyptic warfare environment, 16:9 aspect ratio, photorealistic
```

**Specifications**:
- Aspect Ratio: 16:9 (landscape)
- Resolution: 1920x1080 or higher
- Style: Cinematic, dramatic, dark

---

### 2. Alliance Logo/Emblem
**File to save as**: `images/dstm-logo.png`

**Prompt**:
```
Alliance emblem logo design for 'DSTM Dragon Storm', circular military badge, fierce dragon head silhouette in center with glowing electric blue eyes, storm clouds and lightning bolts around border, metallic silver and electric blue color scheme, sharp tactical military style, clean professional design, dark background, game clan logo aesthetic, high detail
```

**Specifications**:
- Aspect Ratio: 1:1 (square)
- Resolution: 512x512 or 1024x1024
- Format: PNG with transparent background if possible
- Style: Logo, emblem, badge

---

### 3. Leadership Avatars (Optional)
**Files to save as**: `images/leader-r5.jpg`, `images/warlord-r4.jpg`, etc.

**Prompts**:

**Leader (R5)**:
```
Military commander portrait, tactical combat gear, determined confident expression, dark atmospheric background, Last War Survival game style, dramatic lighting, professional headshot
```

**Warlord (R4)**:
```
Battle-hardened warlord portrait, heavy combat armor, fierce warrior expression, tactical lighting, Last War Survival game style, dark background, professional headshot
```

**Muse (R4)**:
```
Strategic diplomat portrait, professional tactical attire, confident intelligent expression, command center background, Last War Survival game style, professional headshot
```

**Recruiter (R4)**:
```
Scout specialist portrait, reconnaissance tactical gear, alert focused expression, tactical environment background, Last War Survival game style, professional headshot
```

**Specifications**:
- Aspect Ratio: 1:1 (square)
- Resolution: 512x512
- Style: Portrait, character art

---

### 4. Tactical Pattern Overlay (Optional)
**File to save as**: `images/tactical-pattern.png`

**Prompt**:
```
Subtle tactical grid pattern overlay, dark military HUD interface texture, hexagonal tech pattern, semi-transparent, dark blue and black, futuristic warfare aesthetic, tileable pattern, minimal design
```

**Specifications**:
- Aspect Ratio: 1:1 (square)
- Resolution: 512x512
- Format: PNG with transparency
- Style: Pattern, texture

---

## 📁 How to Add Images to Your Website

### Step 1: Create Images Folder
The `images/` folder already exists in your project.

### Step 2: Save Generated Images
Save your generated images with these exact names:
- `hero-dragon-storm.jpg` (main background)
- `dstm-logo.png` (alliance logo)
- `leader-r5.jpg`, `warlord-r4.jpg`, etc. (optional avatars)

### Step 3: Images Are Already Linked!
The CSS is already set up to use these images. Once you save them to the `images/` folder, they'll automatically appear on your website.

---

## 🎨 Current Visual Enhancements Applied

Even without custom images, your website now has:

✅ **Gradient Backgrounds** - Beautiful color transitions
✅ **Animated Grid Pattern** - Moving tactical grid overlay
✅ **Glow Effects** - Neon blue and gold glowing text
✅ **Smooth Animations** - Floating, pulsing, rotating effects
✅ **Enhanced Shadows** - Depth and dimension on all cards
✅ **Gradient Text** - Alliance name with multi-color gradient
✅ **Hover Effects** - Interactive cards that lift and glow
✅ **Pulsing Timer** - Animated Arms Race countdown
✅ **Lightning Effect** - Animated lightning sweep on hero
✅ **Professional Polish** - Premium game-style aesthetic

---

## 🚀 Quick Start (Without Images)

Your website looks great even without custom images! The CSS enhancements provide:
- Professional gradients
- Animated effects
- Glowing elements
- Depth and shadows

**To see it now**: Open `index.html` in your browser!

---

## 🎯 Priority Order

1. **Hero Background** (biggest visual impact)
2. **Alliance Logo** (branding)
3. **Leadership Avatars** (nice to have)
4. **Tactical Pattern** (subtle enhancement)

---

## 💡 Tips for Best Results

### For DALL-E (ChatGPT):
- Use the exact prompts above
- Request "high quality" and "detailed"
- Download in highest resolution available

### For Midjourney:
- Add `--ar 16:9` for hero background
- Add `--ar 1:1` for logo and avatars
- Add `--v 6` for latest version
- Add `--style raw` for more realistic results

### For Stable Diffusion:
- Use "photorealistic" in prompt for hero
- Use "vector art" for logo
- Increase steps to 50+ for quality

---

## 📝 Notes

- The website will work perfectly without images (CSS gradients as fallback)
- Images are optional enhancements
- You can add images later without changing any code
- All image paths are already configured in `style.css`

**Your website already looks amazing with the new CSS!** 🎮⚡
