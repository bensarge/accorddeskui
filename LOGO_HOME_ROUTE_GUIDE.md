# AccordDesk Logo - Home Route Placement Guide

## Overview

This guide provides detailed information about different logo placement options specifically for the **DraftingManagerView** - the main home route of the AccordDesk application featuring a sidebar and template library layout.

**Route:** `/showcase/logo/home-route-placements`

---

## Layout Context

The DraftingManagerView consists of two main areas:

1. **Sidebar (Left)** - 300px wide
   - Dark teal background (#385757)
   - Contains "Drafting Manager" title
   - Contains "Add Template" button
   - Primary navigation area

2. **Main Content (Right)** - Flexible width
   - Light gray background (#fafafa)
   - Contains "accordDesk Template Library" header
   - Contains template card grid (4 columns)
   - Primary content area

---

## 8 Logo Placement Variations

### Variation 1: Logo Above Sidebar Title

**Position:** Top of sidebar, above "Drafting Manager" title  
**Size:** 100px height, centered  
**Background:** Dark teal sidebar (#385757)  
**Effect:** Inverted (white) for dark background

**CSS Implementation:**
```css
.logo-sidebar-top {
  height: 100px;
  width: auto;
  margin-bottom: 40px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  filter: brightness(0) invert(1);
}
```

**Use Case:**
- Strong brand presence on every page
- Logo is the first thing users see when entering the app
- Works well for brand-focused applications
- Establishes clear visual hierarchy

**Benefits:**
- ✅ Prominent branding
- ✅ Clear visual hierarchy (logo → title → action)
- ✅ Logo always visible in sidebar
- ✅ Professional, polished appearance

**Considerations:**
- Takes up vertical space in sidebar
- May push navigation elements down
- Best for applications where branding is priority

---

### Variation 2: Logo Replaces Sidebar Title

**Position:** Replaces "Drafting Manager" text entirely  
**Size:** 120px height, centered  
**Background:** Dark teal sidebar (#385757)  
**Effect:** Inverted (white) for dark background

**CSS Implementation:**
```css
.logo-sidebar-replace {
  height: 120px;
  width: auto;
  margin-bottom: 40px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  filter: brightness(0) invert(1);
}
```

**Use Case:**
- Logo-first approach
- Removes text redundancy if logo already contains brand name
- Minimalist sidebar design
- When logo is self-explanatory

**Benefits:**
- ✅ Clean, minimal sidebar
- ✅ Logo is the primary identifier
- ✅ More space for navigation elements
- ✅ Reduces visual clutter

**Considerations:**
- Assumes logo is recognizable without text
- May need larger logo size for clarity
- Best when logo includes brand name

---

### Variation 3: Compact Corner Logo

**Position:** Small logo in top-left corner, next to title  
**Size:** 50px height, left-aligned  
**Background:** Dark teal sidebar (#385757)  
**Effect:** Inverted (white) for dark background

**CSS Implementation:**
```css
.sidebar-header-with-logo {
  display: flex;
  align-items: flex-start;
  gap: 15px;
  margin-bottom: 80px;
}

.logo-sidebar-corner {
  height: 50px;
  width: auto;
  filter: brightness(0) invert(1);
  flex-shrink: 0;
}
```

**Use Case:**
- Subtle branding that doesn't dominate
- Keeps "Drafting Manager" text prominent
- Space-efficient design
- When navigation is the priority

**Benefits:**
- ✅ Space-efficient
- ✅ Maintains text hierarchy
- ✅ Logo as supporting element
- ✅ Doesn't interfere with navigation

**Considerations:**
- Smaller logo may be less visible
- Requires horizontal space
- Best for subtle brand presence

---

### Variation 4: Logo in Main Content Header

**Position:** Left side of main content header, before "Template Library" title  
**Size:** 80px height  
**Background:** Light gray (#fafafa)  
**Effect:** None (natural logo colors)

**CSS Implementation:**
```css
.header-with-logo {
  display: flex;
  align-items: center;
  gap: 25px;
}

.logo-main-header {
  height: 80px;
  width: auto;
}
```

**Use Case:**
- Logo associated with content area rather than navigation
- Good for multi-section apps where content changes
- Separates navigation branding from content branding
- When sidebar should remain purely functional

**Benefits:**
- ✅ Logo reinforces brand in content area
- ✅ Sidebar stays clean and functional
- ✅ Logo visible with content
- ✅ Natural logo colors (not inverted)

**Considerations:**
- Logo not visible when scrolling content
- Sidebar has no branding
- Best for content-focused applications

---

### Variation 5: Centered Above Template Library

**Position:** Centered at top of main content area, above header  
**Size:** 90px height  
**Background:** Light gray (#fafafa)  
**Effect:** None (natural logo colors)

**CSS Implementation:**
```css
.logo-centered-container {
  text-align: center;
  margin-bottom: 40px;
}

.logo-centered-main {
  height: 90px;
  width: auto;
}
```

**Use Case:**
- Prominent brand presence in content area
- Good for landing/welcome screens
- When content area is the primary focus
- Creates a "welcome" feeling

**Benefits:**
- ✅ Eye-catching, centered focus
- ✅ Separates branding from navigation
- ✅ Creates visual anchor for content
- ✅ Professional presentation

**Considerations:**
- Takes up vertical space in content area
- Logo scrolls away with content
- Best for landing/dashboard views

---

### Variation 6: Logo at Sidebar Bottom

**Position:** Bottom of sidebar, below all navigation elements  
**Size:** 70px height, centered  
**Background:** Dark teal sidebar (#385757)  
**Effect:** Inverted (white) with 80% opacity

**CSS Implementation:**
```css
.sidebar-with-bottom-logo {
  justify-content: space-between;
}

.logo-sidebar-bottom {
  height: 70px;
  width: auto;
  display: block;
  margin: 0 auto;
  filter: brightness(0) invert(1);
  opacity: 0.8;
}
```

**Use Case:**
- Subtle branding that doesn't interfere with primary navigation
- Common pattern in application sidebars
- Footer-like placement
- When navigation should be the focus

**Benefits:**
- ✅ Non-intrusive
- ✅ Maintains focus on navigation
- ✅ Professional footer-like placement
- ✅ Always visible (doesn't scroll)

**Considerations:**
- Less prominent than top placement
- May be overlooked by users
- Best for subtle brand reinforcement

---

### Variation 7: Dual Placement (Sidebar + Main)

**Position:** Small logo in both sidebar (60px) and main content header (50px)  
**Size:** 60px in sidebar, 50px in main header  
**Background:** Both dark sidebar and light content area  
**Effect:** Inverted in sidebar, natural in main

**CSS Implementation:**
```css
/* Sidebar logo */
.logo-sidebar-small {
  height: 60px;
  width: auto;
  display: block;
  margin-left: auto;
  margin-right: auto;
  filter: brightness(0) invert(1);
}

/* Main header logo */
.logo-main-small {
  height: 50px;
  width: auto;
}
```

**Use Case:**
- Maximum brand visibility
- Logo present in both navigation and content areas
- Reinforced branding throughout application
- Good for brand-heavy applications

**Benefits:**
- ✅ Reinforced branding
- ✅ Consistent presence across all areas
- ✅ Good for brand-heavy applications
- ✅ Logo always visible regardless of scroll

**Considerations:**
- May feel repetitive
- Uses more visual space
- Best when brand presence is critical

---

### Variation 8: Sidebar Background Watermark

**Position:** Centered background watermark in sidebar  
**Size:** 200px height, 15% opacity  
**Background:** Dark teal sidebar (#385757)  
**Effect:** Inverted (white) with very low opacity

**CSS Implementation:**
```css
.sidebar-with-watermark {
  position: relative;
}

.logo-sidebar-watermark {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 200px;
  width: auto;
  opacity: 0.15;
  filter: brightness(0) invert(1);
  pointer-events: none;
}
```

**Use Case:**
- Subtle brand presence without taking up functional space
- Premium, elegant aesthetic
- When sidebar functionality is priority
- Modern, sophisticated design

**Benefits:**
- ✅ Non-intrusive
- ✅ Elegant, premium feel
- ✅ Maintains full sidebar functionality
- ✅ Modern design aesthetic
- ✅ No space taken from navigation

**Considerations:**
- Very subtle - may not be noticed
- Requires careful opacity tuning
- Best for premium/sophisticated applications

---

## Comparison Matrix

| Variation | Size | Prominence | Space Used | Best For |
|-----------|------|------------|------------|----------|
| 1. Above Title | 100px | High | Medium | Brand-focused apps |
| 2. Replaces Title | 120px | Very High | Medium | Logo-first design |
| 3. Corner Logo | 50px | Low | Low | Subtle branding |
| 4. Main Header | 80px | Medium | Medium | Content-focused apps |
| 5. Centered Main | 90px | High | Medium | Landing/welcome screens |
| 6. Sidebar Bottom | 70px | Low | Low | Subtle reinforcement |
| 7. Dual Placement | 60px + 50px | Very High | High | Brand-heavy apps |
| 8. Watermark | 200px @ 15% | Very Low | None | Premium aesthetic |

---

## Decision Guide

### Choose **Variation 1 (Above Title)** if:
- Brand presence is a top priority
- You want clear visual hierarchy
- Logo should be immediately visible
- Professional, polished appearance is important

### Choose **Variation 2 (Replaces Title)** if:
- Logo is self-explanatory
- You want a minimalist sidebar
- Logo contains the brand name
- You need more space for navigation

### Choose **Variation 3 (Corner Logo)** if:
- You want subtle branding
- Navigation is the priority
- Space is limited
- Text title should remain prominent

### Choose **Variation 4 (Main Header)** if:
- Content area is the primary focus
- Sidebar should be purely functional
- Logo should be associated with content
- You prefer natural logo colors

### Choose **Variation 5 (Centered Main)** if:
- Creating a landing/welcome screen
- You want eye-catching presentation
- Content area is the main focus
- Professional presentation is important

### Choose **Variation 6 (Sidebar Bottom)** if:
- You want non-intrusive branding
- Navigation should be the focus
- You prefer footer-like placement
- Subtle brand reinforcement is sufficient

### Choose **Variation 7 (Dual Placement)** if:
- Maximum brand visibility is required
- Brand presence is critical
- You want consistent branding across areas
- Repetition is acceptable

### Choose **Variation 8 (Watermark)** if:
- You want premium, elegant aesthetic
- Sidebar functionality is priority
- Subtle branding is preferred
- Modern, sophisticated design is desired

---

## Recommended Combinations

### For Brand-Heavy Applications:
- Primary: Variation 1 (Above Title) or Variation 2 (Replaces Title)
- Alternative: Variation 7 (Dual Placement)

### For Functional Applications:
- Primary: Variation 3 (Corner Logo) or Variation 6 (Sidebar Bottom)
- Alternative: Variation 8 (Watermark)

### For Content-Focused Applications:
- Primary: Variation 4 (Main Header) or Variation 5 (Centered Main)
- Alternative: Variation 6 (Sidebar Bottom) for subtle sidebar branding

### For Premium/Sophisticated Applications:
- Primary: Variation 8 (Watermark)
- Alternative: Variation 1 (Above Title) with refined styling

---

## Implementation Notes

### Dark Background Considerations
Variations 1, 2, 3, 6, 7 (sidebar), and 8 use inverted logo colors for the dark teal sidebar:
```css
filter: brightness(0) invert(1);
```

### Responsive Behavior
All variations should adapt for mobile:
- Sidebar becomes full-width on mobile
- Logo sizes may need to scale down
- Consider switching to horizontal layout for mobile

### Accessibility
- Always include `alt="AccordDesk Logo"` attribute
- Ensure sufficient contrast with background
- Logo should not interfere with keyboard navigation
- Consider screen reader announcements

### Performance
- Use optimized PNG with alpha channel
- Consider lazy loading for below-fold placements
- Watermark variation has minimal performance impact

---

## Testing Checklist

For each variation, verify:
- [ ] Logo displays correctly on dark sidebar background
- [ ] Logo displays correctly on light content background
- [ ] Logo doesn't interfere with navigation
- [ ] Logo is visible at different screen sizes
- [ ] Logo maintains aspect ratio
- [ ] Hover states work (if applicable)
- [ ] Logo is accessible to screen readers
- [ ] Layout remains functional with logo present

---

## Live Preview

View all variations live at:
**http://localhost:5174/showcase/logo/home-route-placements**

Navigate through each variation to see:
- Complete layout context
- Logo positioning
- Size relationships
- Use case descriptions
- Implementation details

---

## Files

- **Showcase Component:** `src/components/LogoShowcase_HomeRoute.svelte`
- **Route:** `/showcase/logo/home-route-placements`
- **Logo File:** `/accorddesk_logo_alpha.png`

