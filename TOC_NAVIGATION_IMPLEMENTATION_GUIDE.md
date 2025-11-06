# Table of Contents Navigation Implementation Guide

This guide provides complete implementation code for adding navigation back to the Drafting Manager from the TableOfContents component.

## Viewing the Showcase

Visit: `http://localhost:5173/showcase/toc-navigation`

## Implementation Options

### Option 1: Back Button with Icon + Text

**Best for:** Clear, explicit navigation that's immediately recognizable

**Code Changes to `TableOfContents.svelte`:**

```svelte
<script>
  import { navigate } from 'svelte-routing';
  import { FileText, ArrowLeft } from 'lucide-svelte';
  
  export let contractData;
  export let selectedClauseId = null;
  export let onSelect = () => {};

  // ... existing code ...

  function handleNavigateToDrafting() {
    navigate('/');
  }
</script>

<div class="toc-container">
  <div class="toc-header">
    <button class="back-button" on:click={handleNavigateToDrafting}>
      <ArrowLeft size={16} strokeWidth={2} />
      <span>Back to Drafting Manager</span>
    </button>
    <div class="toc-title-row">
      <div class="icon-container">
        <FileText size={32} strokeWidth={1.5} />
      </div>
      <h2>Table of<br>Contents</h2>
    </div>
  </div>
  <!-- ... rest of TOC content ... -->
</div>

<style>
  /* ... existing styles ... */

  .toc-header {
    padding: 20px 30px 35px;  /* Adjusted padding */
    display: flex;
    flex-direction: column;  /* Changed to column */
    gap: 20px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  }

  .toc-title-row {
    display: flex;
    align-items: center;
    gap: 16px;
  }

  .back-button {
    display: flex;
    align-items: center;
    gap: 8px;
    background: transparent;
    border: none;
    color: rgba(255, 255, 255, 0.8);
    font-size: 13px;
    font-weight: 300;
    cursor: pointer;
    padding: 8px 0;
    transition: all 0.25s ease;
    font-family: inherit;
    align-self: flex-start;
  }

  .back-button:hover {
    color: white;
    transform: translateX(-2px);
  }
</style>
```

---

### Option 2: Compact Icon-Only Button (Top Right)

**Best for:** Minimal UI footprint, modern app-like experience

**Code Changes to `TableOfContents.svelte`:**

```svelte
<script>
  import { navigate } from 'svelte-routing';
  import { FileText, X } from 'lucide-svelte';
  
  export let contractData;
  export let selectedClauseId = null;
  export let onSelect = () => {};

  // ... existing code ...

  function handleNavigateToDrafting() {
    navigate('/');
  }
</script>

<div class="toc-container">
  <div class="toc-header">
    <div class="toc-title-row">
      <div class="icon-container">
        <FileText size={32} strokeWidth={1.5} />
      </div>
      <h2>Table of<br>Contents</h2>
    </div>
    <button class="close-button" on:click={handleNavigateToDrafting} title="Back to Drafting Manager">
      <X size={20} strokeWidth={2} />
    </button>
  </div>
  <!-- ... rest of TOC content ... -->
</div>

<style>
  /* ... existing styles ... */

  .toc-header {
    padding: 35px 30px 35px;
    display: flex;
    align-items: center;
    gap: 16px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    position: relative;  /* Added for absolute positioning */
  }

  .close-button {
    position: absolute;
    top: 20px;
    right: 20px;
    background: transparent;
    border: none;
    color: rgba(255, 255, 255, 0.7);
    cursor: pointer;
    padding: 6px;
    border-radius: 2px;
    transition: all 0.25s ease;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .close-button:hover {
    background: rgba(255, 255, 255, 0.1);
    color: white;
  }
</style>
```

---

### Option 3: Breadcrumb Navigation

**Best for:** Showing context and navigation path

**Code Changes to `TableOfContents.svelte`:**

```svelte
<script>
  import { navigate } from 'svelte-routing';
  import { FileText, Home } from 'lucide-svelte';
  
  export let contractData;
  export let selectedClauseId = null;
  export let onSelect = () => {};

  // ... existing code ...

  function handleNavigateToDrafting() {
    navigate('/');
  }
</script>

<div class="toc-container">
  <div class="toc-header">
    <nav class="breadcrumb">
      <button class="breadcrumb-link" on:click={handleNavigateToDrafting}>
        <Home size={14} strokeWidth={2} />
        <span>Drafting Manager</span>
      </button>
      <span class="breadcrumb-separator">/</span>
      <span class="breadcrumb-current">Contract View</span>
    </nav>
    <div class="toc-title-row">
      <div class="icon-container">
        <FileText size={32} strokeWidth={1.5} />
      </div>
      <h2>Table of<br>Contents</h2>
    </div>
  </div>
  <!-- ... rest of TOC content ... -->
</div>

<style>
  /* ... existing styles ... */

  .toc-header {
    padding: 20px 30px 35px;  /* Adjusted padding */
    display: flex;
    flex-direction: column;
    gap: 20px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  }

  .toc-title-row {
    display: flex;
    align-items: center;
    gap: 16px;
  }

  .breadcrumb {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 12px;
  }

  .breadcrumb-link {
    display: flex;
    align-items: center;
    gap: 6px;
    background: transparent;
    border: none;
    color: rgba(255, 255, 255, 0.8);
    cursor: pointer;
    padding: 4px 0;
    transition: all 0.25s ease;
    font-family: inherit;
    font-size: 12px;
  }

  .breadcrumb-link:hover {
    color: white;
  }

  .breadcrumb-separator {
    color: rgba(255, 255, 255, 0.4);
    font-weight: 300;
  }

  .breadcrumb-current {
    color: rgba(255, 255, 255, 0.6);
    font-weight: 300;
  }
</style>
```

---

### Option 4: Inline Chevron Back Button

**Best for:** Compact design that doesn't add vertical space

**Code Changes to `TableOfContents.svelte`:**

```svelte
<script>
  import { navigate } from 'svelte-routing';
  import { FileText, ChevronLeft } from 'lucide-svelte';
  
  export let contractData;
  export let selectedClauseId = null;
  export let onSelect = () => {};

  // ... existing code ...

  function handleNavigateToDrafting() {
    navigate('/');
  }
</script>

<div class="toc-container">
  <div class="toc-header">
    <button class="chevron-back" on:click={handleNavigateToDrafting} title="Back to Drafting Manager">
      <ChevronLeft size={24} strokeWidth={2} />
    </button>
    <div class="icon-container">
      <FileText size={32} strokeWidth={1.5} />
    </div>
    <h2>Table of<br>Contents</h2>
  </div>
  <!-- ... rest of TOC content ... -->
</div>

<style>
  /* ... existing styles ... */

  .toc-header {
    padding: 35px 30px 35px;
    display: flex;
    align-items: center;
    gap: 12px;  /* Adjusted gap */
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  }

  .chevron-back {
    background: transparent;
    border: none;
    color: rgba(255, 255, 255, 0.7);
    cursor: pointer;
    padding: 4px;
    border-radius: 2px;
    transition: all 0.25s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .chevron-back:hover {
    background: rgba(255, 255, 255, 0.1);
    color: white;
  }
</style>
```

---

### Option 5: Hover-Reveal Navigation

**Best for:** Clean default state with discoverable navigation

**Code Changes to `TableOfContents.svelte`:**

```svelte
<script>
  import { navigate } from 'svelte-routing';
  import { FileText, ArrowLeft } from 'lucide-svelte';
  
  export let contractData;
  export let selectedClauseId = null;
  export let onSelect = () => {};

  // ... existing code ...

  function handleNavigateToDrafting() {
    navigate('/');
  }
</script>

<div class="toc-container">
  <div class="toc-header">
    <div class="toc-title-row">
      <div class="icon-container">
        <FileText size={32} strokeWidth={1.5} />
      </div>
      <h2>Table of<br>Contents</h2>
    </div>
    <div class="hover-nav">
      <button class="hover-back-button" on:click={handleNavigateToDrafting}>
        <ArrowLeft size={16} strokeWidth={2} />
        <span>Drafting Manager</span>
      </button>
    </div>
  </div>
  <!-- ... rest of TOC content ... -->
</div>

<style>
  /* ... existing styles ... */

  .toc-header {
    padding: 35px 30px 35px;
    display: flex;
    align-items: center;
    gap: 16px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    position: relative;
  }

  .toc-title-row {
    display: flex;
    align-items: center;
    gap: 16px;
  }

  .hover-nav {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(56, 87, 87, 0.98);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.3s ease;
    pointer-events: none;
  }

  .toc-header:hover .hover-nav {
    opacity: 1;
    pointer-events: all;
  }

  .hover-back-button {
    display: flex;
    align-items: center;
    gap: 10px;
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.3);
    color: white;
    font-size: 14px;
    font-weight: 300;
    cursor: pointer;
    padding: 12px 24px;
    border-radius: 2px;
    transition: all 0.25s ease;
    font-family: inherit;
  }

  .hover-back-button:hover {
    background: rgba(255, 255, 255, 0.2);
    border-color: rgba(255, 255, 255, 0.5);
  }
</style>
```

---

## Recommendations

### Option 1 or 3 (Back Button or Breadcrumb)
- **Best for:** Users who need clear, explicit navigation
- **Pros:** Immediately visible, clear intent, familiar pattern
- **Cons:** Takes up more vertical space in the header

### Option 2 or 4 (Close Icon or Chevron)
- **Best for:** Minimal UI with maximum content space
- **Pros:** Compact, modern, doesn't add vertical space
- **Cons:** May be less discoverable for new users

### Option 5 (Hover-Reveal)
- **Best for:** Advanced users who want a clean interface
- **Pros:** Cleanest default state, maintains visual hierarchy
- **Cons:** Requires hover interaction, may not be obvious to all users

## Design Tokens Used

- **Primary Background:** `#385757`
- **Accent Color:** `#2d5016`
- **Text on Dark:** `white` / `rgba(255, 255, 255, 0.8)`
- **Hover Background:** `rgba(255, 255, 255, 0.1)`
- **Border Color:** `rgba(255, 255, 255, 0.2)`

## Testing the Implementation

1. Start the dev server: `npm run dev`
2. Navigate to: `http://localhost:5173/showcase/toc-navigation`
3. Review all 5 options side-by-side
4. Choose your preferred approach
5. Copy the implementation code to `src/components/ContractViewer/TableOfContents.svelte`

