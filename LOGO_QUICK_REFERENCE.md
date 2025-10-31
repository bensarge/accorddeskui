# AccordDesk Logo Showcase - Quick Reference Guide

## 🔗 Quick Links

| Showcase | Route | Variations | Best For |
|----------|-------|------------|----------|
| **Index** | `/showcase/logo` | Overview | Start here |
| **Navigation Headers** | `/showcase/logo/navigation-header` | 6 | App headers, navbars |
| **Hero & Landing** | `/showcase/logo/hero-landing` | 5 | Landing pages, heroes |
| **Responsive & Adaptive** | `/showcase/logo/responsive-adaptive` | 8 | Multi-device layouts |
| **Creative Effects** | `/showcase/logo/creative-effects` | 12 | Visual polish, interactions |
| **Contextual Placements** | `/showcase/logo/contextual-placements` | 8 | Real-world UI contexts |
| **Home Route Placements** ⭐ | `/showcase/logo/home-route-placements` | 8 | DraftingManagerView layout |

---

## 📏 Size Quick Reference

### By Height (Smallest to Largest)

| Size | Variation | Context |
|------|-----------|---------|
| 44px | Mobile App Header | iOS/Android apps |
| 48px | Compact Navigation | Minimal headers |
| 50px | Modal Dialog, Corner Logo (Home) | Popups, overlays, subtle sidebar |
| 56px | Responsive Mobile | Mobile web |
| 60px | Fixed Floating, Card Thumbnail, Dual Sidebar (Home) | Sticky nav, thumbnails |
| 70px | Footer Branding, Sidebar Bottom (Home) | Website footers, sidebar footer |
| 80px | Centered Header, Email Template, Main Header (Home) | Balanced layouts, content headers |
| 90px | Print Document, Centered Main (Home) | PDF exports, content top |
| 100px | Most Creative Effects, Above Sidebar (Home) | Standard effects, sidebar top |
| 120px | Large Prominent, Breakpoint Desktop, Replaces Title (Home) | Marketing, logo-first |
| 150px | Watermark | Background branding |
| 180px | Minimal Centered | Login pages |
| 200px | Loading Screen, Sidebar Width, Sidebar Watermark (Home) | Splash screens, subtle bg |
| 220px | Vertical Stack | Pricing sections |
| 250px | Split Layout | Feature pages |
| 300px | Hero Extra Large | Primary landing hero |

---

## 🎨 Effect Quick Reference

| Effect | CSS | Use Case |
|--------|-----|----------|
| **Shadow** | `filter: drop-shadow(0 8px 16px rgba(0,0,0,0.12))` | Depth, elevation |
| **Grayscale** | `filter: grayscale(100%)` | Subtle presence |
| **Opacity** | `opacity: 0.6` | Watermarks |
| **Invert** | `filter: brightness(0) invert(1)` | Dark backgrounds |
| **Glow** | `drop-shadow(0 0 20px rgba(255,255,255,0.6))` | Premium feel |
| **Sepia** | `filter: sepia(80%) contrast(0.9)` | Vintage look |
| **Blur** | `filter: blur(3px)` | Interactive reveal |
| **Pulse** | `animation: pulse 2s infinite` | Loading states |
| **Tilt** | `transform: perspective(600px) rotateY(15deg)` | 3D interaction |

---

## 📱 Responsive Patterns

### Pattern 1: Breakpoint-based
```css
.logo { height: 120px; }
@media (max-width: 1024px) { .logo { height: 90px; } }
@media (max-width: 640px) { .logo { height: 60px; } }
```

### Pattern 2: Fluid with Constraints
```css
.logo {
  width: 15%;
  min-width: 60px;
  max-width: 200px;
}
```

### Pattern 3: Modern Clamp
```css
.logo {
  width: clamp(60px, 8vw, 150px);
}
```

### Pattern 4: Viewport-based
```css
.logo {
  width: 10vw;
  min-width: 60px;
  max-width: 150px;
}
```

---

## 🎯 Use Case Selector

### "I need a logo for..."

**App Navigation Bar**
→ Compact Navigation (48px) or Fixed Floating (60px)

**Landing Page Hero**
→ Hero Extra Large (300px) or Split Layout (250px)

**Mobile App**
→ Mobile App Header (44px) or Responsive Mobile (56px)

**Login/Signup Page**
→ Minimal Centered (180px)

**Email Template**
→ Email Header (80px)

**Website Footer**
→ Footer Multi-Column (70px)

**Loading Screen**
→ Loading/Splash (200px with animation)

**Document/PDF**
→ Print Document (90px) or Watermark (150px, 20% opacity)

**Modal/Dialog**
→ Modal Dialog (50px)

**Sidebar Navigation**
→ Sidebar Vertical (200px width)

**Promotional Banner**
→ Full-Width Banner (100px, inverted)

**Template Cards**
→ Card Thumbnail (60px)

**DraftingManagerView (Home Route)** ⭐ NEW
→ See all 8 variations at `/showcase/logo/home-route-placements`
- Brand-focused: Above Sidebar Title (100px) or Replaces Title (120px)
- Subtle: Corner Logo (50px) or Sidebar Bottom (70px)
- Content-focused: Main Header (80px) or Centered Main (90px)
- Maximum visibility: Dual Placement (60px + 50px)
- Premium: Sidebar Watermark (200px @ 15%)

---

## 🎨 Color Palette

```css
/* Primary Brand */
--primary-green: #2d5016;
--light-green: #5a8a2f;

/* Neutrals */
--dark-text: #1a1a1a;
--medium-gray: #666;
--light-gray: #999;
--border-gray: #e5e5e5;
--background: #fafafa;
--white: #ffffff;
```

---

## 💡 Common Patterns

### Centered Logo
```css
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
```

### Logo with Navigation
```css
.nav {
  display: flex;
  align-items: center;
  gap: 40px;
}
```

### Responsive Logo
```css
.logo {
  height: 100px;
  width: auto;
}
@media (max-width: 768px) {
  .logo { height: 60px; }
}
```

### Dark Mode Logo
```css
.logo-dark {
  filter: brightness(0) invert(1);
}
```

### Interactive Logo
```css
.logo {
  transition: all 0.3s ease;
}
.logo:hover {
  transform: scale(1.05);
}
```

---

## 📋 Checklist for Implementation

- [ ] Choose appropriate size for context
- [ ] Consider responsive behavior
- [ ] Add appropriate hover states (if interactive)
- [ ] Test on dark backgrounds (use invert filter if needed)
- [ ] Ensure accessibility (alt text)
- [ ] Verify aspect ratio is maintained (width: auto)
- [ ] Test on mobile devices
- [ ] Check loading performance
- [ ] Validate print appearance (if applicable)
- [ ] Test with different screen sizes

---

## 🚀 Getting Started

1. **Browse the Index**
   ```
   http://localhost:5174/showcase/logo
   ```

2. **Pick a Category**
   - Navigation Headers → App headers
   - Hero & Landing → Marketing pages
   - Responsive & Adaptive → Multi-device
   - Creative Effects → Visual polish
   - Contextual Placements → Real-world examples

3. **Review Variations**
   - Check size and positioning
   - Read use case descriptions
   - View implementation code

4. **Implement**
   - Copy CSS patterns
   - Adjust sizes as needed
   - Test responsiveness

---

## 📁 File Locations

- **Logo File:** `/accorddesk_logo_alpha.png`
- **Showcase Components:** `src/components/LogoShowcase*.svelte`
- **Routes:** `src/App.svelte`
- **Documentation:** `LOGO_SHOWCASE_SUMMARY.md`

---

## 🔍 Search by Feature

**Need dark background support?**
→ Inverted on Dark, Glow Effect, Full-Width Banner

**Need animation?**
→ Pulse Animation, Blur to Focus, Grayscale to Color

**Need responsive?**
→ All variations in Responsive & Adaptive showcase

**Need interactive?**
→ Grayscale to Color, Blur to Focus, 3D Tilt

**Need subtle branding?**
→ Opacity, Watermark, Grayscale

**Need maximum impact?**
→ Hero Extra Large, Large Prominent, Glow Effect

---

## 💻 Development Server

```bash
npm run dev
```

Then navigate to:
- Main showcase: `http://localhost:5174/showcase/logo`
- Individual showcases: `http://localhost:5174/showcase/logo/[category]`

---

## 📞 Support

For questions or issues with the logo showcases, refer to:
- `LOGO_SHOWCASE_SUMMARY.md` - Detailed documentation
- Source code in `src/components/LogoShowcase*.svelte`
- Live examples at `/showcase/logo`

