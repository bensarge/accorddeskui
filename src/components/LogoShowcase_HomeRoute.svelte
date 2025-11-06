<script lang="ts">
  // Showcase: Home Route Logo Placements
  // Demonstrates different logo placement options for the DraftingManagerView layout
  
  // Mock template data for display
  const mockTemplates = [
    { id: 1, title: 'NDA Template', type: ['Legal', 'Confidentiality'], author: 'accordDesk GmbH', date: '2024-10-15' },
    { id: 2, title: 'Service Agreement', type: ['Contract', 'Services'], author: 'accordDesk GmbH', date: '2024-10-20' },
    { id: 3, title: 'Employment Contract', type: ['HR', 'Legal'], author: 'accordDesk GmbH', date: '2024-10-18' },
    { id: 4, title: 'Consulting Agreement', type: ['Professional Services'], author: 'accordDesk GmbH', date: '2024-10-22' }
  ];
</script>

<div class="showcase-container">
  <div class="showcase-header">
    <h1>Logo Showcase: Home Route Placements</h1>
    <p>Different logo placement options for the DraftingManagerView (Sidebar + Template Library)</p>
  </div>

  <div class="variations-stack">
    
    <!-- Variation 1: Logo Above Sidebar Title -->
    <div class="variation-demo">
      <div class="demo-label">Variation 1: Logo Above Sidebar Title (100px height)</div>
      <div class="demo-frame">
        <div class="home-layout">
          <div class="sidebar">
            <img src="/accorddesk_logo_alpha.png" alt="AccordDesk Logo" class="logo-sidebar-top" />
            <h1>Drafting<br>Manager</h1>
            <button class="add-template-button">
              <span class="plus-icon">+</span>
              <span class="button-text">Add Template</span>
            </button>
          </div>
          <div class="main-content">
            <div class="header">
              <h2>accordDesk Template Library</h2>
              <p><strong>Author:</strong> accordDesk GmbH</p>
            </div>
            <div class="template-grid">
              {#each mockTemplates.slice(0, 4) as template}
                <div class="template-card">
                  <div class="card-title">{template.title}</div>
                  <div class="card-type">{template.type[0]}</div>
                </div>
              {/each}
            </div>
          </div>
        </div>
      </div>
      <div class="use-case">
        <strong>Position:</strong> Top of sidebar, above "Drafting Manager" title<br>
        <strong>Size:</strong> 100px height, centered in sidebar<br>
        <strong>Use Case:</strong> Strong brand presence on every page. Logo is first thing users see. Works well for brand-focused applications.<br>
        <strong>Benefits:</strong> Prominent branding, clear visual hierarchy, logo always visible in sidebar
      </div>
    </div>

    <!-- Variation 2: Logo Replacing Sidebar Title -->
    <div class="variation-demo">
      <div class="demo-label">Variation 2: Logo Replaces Sidebar Title (120px height)</div>
      <div class="demo-frame">
        <div class="home-layout">
          <div class="sidebar">
            <img src="/accorddesk_logo_alpha.png" alt="AccordDesk Logo" class="logo-sidebar-replace" />
            <button class="add-template-button" style="margin-top: 60px;">
              <span class="plus-icon">+</span>
              <span class="button-text">Add Template</span>
            </button>
          </div>
          <div class="main-content">
            <div class="header">
              <h2>accordDesk Template Library</h2>
              <p><strong>Author:</strong> accordDesk GmbH</p>
            </div>
            <div class="template-grid">
              {#each mockTemplates.slice(0, 4) as template}
                <div class="template-card">
                  <div class="card-title">{template.title}</div>
                  <div class="card-type">{template.type[0]}</div>
                </div>
              {/each}
            </div>
          </div>
        </div>
      </div>
      <div class="use-case">
        <strong>Position:</strong> Replaces "Drafting Manager" text entirely<br>
        <strong>Size:</strong> 120px height, centered in sidebar<br>
        <strong>Use Case:</strong> Logo-first approach. Removes text redundancy if logo already contains brand name.<br>
        <strong>Benefits:</strong> Clean, minimal sidebar, logo is the primary identifier, more space for navigation
      </div>
    </div>

    <!-- Variation 3: Small Logo in Sidebar Top-Left Corner -->
    <div class="variation-demo">
      <div class="demo-label">Variation 3: Compact Corner Logo (50px height)</div>
      <div class="demo-frame">
        <div class="home-layout">
          <div class="sidebar">
            <div class="sidebar-header-with-logo">
              <img src="/accorddesk_logo_alpha.png" alt="AccordDesk Logo" class="logo-sidebar-corner" />
              <h1 class="title-with-logo">Drafting<br>Manager</h1>
            </div>
            <button class="add-template-button">
              <span class="plus-icon">+</span>
              <span class="button-text">Add Template</span>
            </button>
          </div>
          <div class="main-content">
            <div class="header">
              <h2>accordDesk Template Library</h2>
              <p><strong>Author:</strong> accordDesk GmbH</p>
            </div>
            <div class="template-grid">
              {#each mockTemplates.slice(0, 4) as template}
                <div class="template-card">
                  <div class="card-title">{template.title}</div>
                  <div class="card-type">{template.type[0]}</div>
                </div>
              {/each}
            </div>
          </div>
        </div>
      </div>
      <div class="use-case">
        <strong>Position:</strong> Small logo in top-left corner of sidebar, next to title<br>
        <strong>Size:</strong> 50px height, left-aligned<br>
        <strong>Use Case:</strong> Subtle branding that doesn't dominate. Keeps "Drafting Manager" text prominent.<br>
        <strong>Benefits:</strong> Space-efficient, maintains text hierarchy, logo as supporting element
      </div>
    </div>

    <!-- Variation 4: Logo in Main Content Header -->
    <div class="variation-demo">
      <div class="demo-label">Variation 4: Logo in Main Content Header (80px height)</div>
      <div class="demo-frame">
        <div class="home-layout">
          <div class="sidebar">
            <h1>Drafting<br>Manager</h1>
            <button class="add-template-button">
              <span class="plus-icon">+</span>
              <span class="button-text">Add Template</span>
            </button>
          </div>
          <div class="main-content">
            <div class="header header-with-logo">
              <img src="/accorddesk_logo_alpha.png" alt="AccordDesk Logo" class="logo-main-header" />
              <div class="header-text">
                <h2>accordDesk Template Library</h2>
                <p><strong>Author:</strong> accordDesk GmbH</p>
              </div>
            </div>
            <div class="template-grid">
              {#each mockTemplates.slice(0, 4) as template}
                <div class="template-card">
                  <div class="card-title">{template.title}</div>
                  <div class="card-type">{template.type[0]}</div>
                </div>
              {/each}
            </div>
          </div>
        </div>
      </div>
      <div class="use-case">
        <strong>Position:</strong> Left side of main content header, before "Template Library" title<br>
        <strong>Size:</strong> 80px height<br>
        <strong>Use Case:</strong> Logo associated with content area rather than navigation. Good for multi-section apps.<br>
        <strong>Benefits:</strong> Logo reinforces brand in content area, sidebar stays clean and functional
      </div>
    </div>

    <!-- Variation 5: Logo Centered Above Main Content -->
    <div class="variation-demo">
      <div class="demo-label">Variation 5: Centered Above Template Library (90px height)</div>
      <div class="demo-frame">
        <div class="home-layout">
          <div class="sidebar">
            <h1>Drafting<br>Manager</h1>
            <button class="add-template-button">
              <span class="plus-icon">+</span>
              <span class="button-text">Add Template</span>
            </button>
          </div>
          <div class="main-content">
            <div class="logo-centered-container">
              <img src="/accorddesk_logo_alpha.png" alt="AccordDesk Logo" class="logo-centered-main" />
            </div>
            <div class="header">
              <h2>accordDesk Template Library</h2>
              <p><strong>Author:</strong> accordDesk GmbH</p>
            </div>
            <div class="template-grid">
              {#each mockTemplates.slice(0, 4) as template}
                <div class="template-card">
                  <div class="card-title">{template.title}</div>
                  <div class="card-type">{template.type[0]}</div>
                </div>
              {/each}
            </div>
          </div>
        </div>
      </div>
      <div class="use-case">
        <strong>Position:</strong> Centered at top of main content area, above header<br>
        <strong>Size:</strong> 90px height<br>
        <strong>Use Case:</strong> Prominent brand presence in content area. Good for landing/welcome screens.<br>
        <strong>Benefits:</strong> Eye-catching, centered focus, separates branding from navigation
      </div>
    </div>

    <!-- Variation 6: Logo in Sidebar Bottom -->
    <div class="variation-demo">
      <div class="demo-label">Variation 6: Logo at Sidebar Bottom (70px height)</div>
      <div class="demo-frame">
        <div class="home-layout">
          <div class="sidebar sidebar-with-bottom-logo">
            <div class="sidebar-top">
              <h1>Drafting<br>Manager</h1>
              <button class="add-template-button">
                <span class="plus-icon">+</span>
                <span class="button-text">Add Template</span>
              </button>
            </div>
            <img src="/accorddesk_logo_alpha.png" alt="AccordDesk Logo" class="logo-sidebar-bottom" />
          </div>
          <div class="main-content">
            <div class="header">
              <h2>accordDesk Template Library</h2>
              <p><strong>Author:</strong> accordDesk GmbH</p>
            </div>
            <div class="template-grid">
              {#each mockTemplates.slice(0, 4) as template}
                <div class="template-card">
                  <div class="card-title">{template.title}</div>
                  <div class="card-type">{template.type[0]}</div>
                </div>
              {/each}
            </div>
          </div>
        </div>
      </div>
      <div class="use-case">
        <strong>Position:</strong> Bottom of sidebar, below all navigation elements<br>
        <strong>Size:</strong> 70px height, centered<br>
        <strong>Use Case:</strong> Subtle branding that doesn't interfere with primary navigation. Common in app sidebars.<br>
        <strong>Benefits:</strong> Non-intrusive, maintains focus on navigation, professional footer-like placement
      </div>
    </div>

    <!-- Variation 7: Dual Placement (Sidebar + Main) -->
    <div class="variation-demo">
      <div class="demo-label">Variation 7: Dual Placement - Sidebar & Main Header (60px + 50px)</div>
      <div class="demo-frame">
        <div class="home-layout">
          <div class="sidebar">
            <img src="/accorddesk_logo_alpha.png" alt="AccordDesk Logo" class="logo-sidebar-small" />
            <h1 style="margin-top: 30px;">Drafting<br>Manager</h1>
            <button class="add-template-button">
              <span class="plus-icon">+</span>
              <span class="button-text">Add Template</span>
            </button>
          </div>
          <div class="main-content">
            <div class="header header-with-logo">
              <img src="/accorddesk_logo_alpha.png" alt="AccordDesk Logo" class="logo-main-small" />
              <div class="header-text">
                <h2>accordDesk Template Library</h2>
                <p><strong>Author:</strong> accordDesk GmbH</p>
              </div>
            </div>
            <div class="template-grid">
              {#each mockTemplates.slice(0, 4) as template}
                <div class="template-card">
                  <div class="card-title">{template.title}</div>
                  <div class="card-type">{template.type[0]}</div>
                </div>
              {/each}
            </div>
          </div>
        </div>
      </div>
      <div class="use-case">
        <strong>Position:</strong> Small logo in both sidebar (60px) and main content header (50px)<br>
        <strong>Size:</strong> 60px in sidebar, 50px in main header<br>
        <strong>Use Case:</strong> Maximum brand visibility. Logo present in both navigation and content areas.<br>
        <strong>Benefits:</strong> Reinforced branding, consistent presence, good for brand-heavy applications
      </div>
    </div>

    <!-- Variation 8: Logo as Sidebar Background Watermark -->
    <div class="variation-demo">
      <div class="demo-label">Variation 8: Sidebar Background Watermark (200px, 15% opacity)</div>
      <div class="demo-frame">
        <div class="home-layout">
          <div class="sidebar sidebar-with-watermark">
            <img src="/accorddesk_logo_alpha.png" alt="AccordDesk Logo" class="logo-sidebar-watermark" />
            <h1 style="position: relative; z-index: 1;">Drafting<br>Manager</h1>
            <button class="add-template-button" style="position: relative; z-index: 1;">
              <span class="plus-icon">+</span>
              <span class="button-text">Add Template</span>
            </button>
          </div>
          <div class="main-content">
            <div class="header">
              <h2>accordDesk Template Library</h2>
              <p><strong>Author:</strong> accordDesk GmbH</p>
            </div>
            <div class="template-grid">
              {#each mockTemplates.slice(0, 4) as template}
                <div class="template-card">
                  <div class="card-title">{template.title}</div>
                  <div class="card-type">{template.type[0]}</div>
                </div>
              {/each}
            </div>
          </div>
        </div>
      </div>
      <div class="use-case">
        <strong>Position:</strong> Centered background watermark in sidebar<br>
        <strong>Size:</strong> 200px height, 15% opacity, inverted for dark background<br>
        <strong>Use Case:</strong> Subtle brand presence without taking up functional space. Premium aesthetic.<br>
        <strong>Benefits:</strong> Non-intrusive, elegant, maintains full sidebar functionality, modern design
      </div>
    </div>

  </div>
</div>

<style>
  .showcase-container {
    min-height: 100vh;
    background-color: #fafafa;
    padding: 80px 60px;
  }

  .showcase-header {
    max-width: 1400px;
    margin: 0 auto 80px;
    text-align: center;
  }

  .showcase-header h1 {
    font-size: 42px;
    font-weight: 300;
    letter-spacing: -0.8px;
    margin-bottom: 16px;
    color: #1a1a1a;
  }

  .showcase-header p {
    font-size: 16px;
    font-weight: 300;
    color: #666;
    letter-spacing: 0.2px;
  }

  .variations-stack {
    max-width: 1400px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 50px;
  }

  .variation-demo {
    background: #ffffff;
    border: 1px solid #e5e5e5;
    overflow: hidden;
  }

  .demo-label {
    padding: 20px 30px;
    background: #f5f5f5;
    font-size: 12px;
    font-weight: 400;
    color: #666;
    text-transform: uppercase;
    letter-spacing: 1px;
    border-bottom: 1px solid #e5e5e5;
  }

  .demo-frame {
    padding: 0;
    background: #fafafa;
    overflow: visible;
  }

  .use-case {
    padding: 25px 30px;
    font-size: 13px;
    color: #666;
    line-height: 1.8;
    border-top: 1px solid #e5e5e5;
    background: #f9f9f9;
  }

  .use-case strong {
    color: #2d5016;
    font-weight: 500;
  }

  /* Home Layout Structure */
  .home-layout {
    display: flex;
    min-height: 600px;
    background: #fafafa;
  }

  .sidebar {
    width: 300px;
    background-color: #385757;
    padding: 60px 40px;
    border-right: 1px solid #e5e5e5;
    display: flex;
    flex-direction: column;
    position: relative;
  }

  .sidebar h1 {
    font-size: 28px;
    font-weight: 300;
    letter-spacing: -0.5px;
    line-height: 1.3;
    margin-bottom: 80px;
    color: white;
  }

  .main-content {
    flex: 1;
    background-color: #fafafa;
    padding: 50px 60px;
    overflow-y: auto;
  }

  .header {
    margin-bottom: 40px;
    padding-bottom: 20px;
    border-bottom: 1px solid #e5e5e5;
  }

  .header h2 {
    font-size: 28px;
    font-weight: 300;
    letter-spacing: -0.5px;
    margin-bottom: 8px;
    color: #1a1a1a;
  }

  .header p {
    font-size: 13px;
    color: #666;
    font-weight: 300;
  }

  .header p strong {
    font-weight: 400;
    color: #1a1a1a;
  }

  .template-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
  }

  .template-card {
    background: #ffffff;
    border: 1px solid #e5e5e5;
    padding: 20px;
    min-height: 120px;
  }

  .card-title {
    font-size: 14px;
    font-weight: 400;
    margin-bottom: 10px;
    color: #1a1a1a;
  }

  .card-type {
    font-size: 11px;
    color: #666;
  }

  .add-template-button {
    width: 100%;
    border-radius: 2px;
    padding: 16px 24px;
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    font-size: 15px;
    font-weight: 300;
    cursor: pointer;
    transition: all 0.25s ease;
    background: #385757;
    color: white;
    border: 1px solid white;
  }

  .plus-icon {
    font-size: 20px;
    font-weight: 200;
  }

  .add-template-button:hover {
    background: #ffffff;
    color: #2d5016;
  }

  /* Logo Variations */
  
  /* Variation 1: Logo above sidebar title */
  .logo-sidebar-top {
    height: 100px;
    width: auto;
    margin-bottom: 40px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    filter: brightness(0) invert(1);
  }

  /* Variation 2: Logo replaces sidebar title */
  .logo-sidebar-replace {
    height: 120px;
    width: auto;
    margin-bottom: 40px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    filter: brightness(0) invert(1);
  }

  /* Variation 3: Small corner logo */
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

  .title-with-logo {
    margin-bottom: 0 !important;
  }

  /* Variation 4: Logo in main header */
  .header-with-logo {
    display: flex;
    align-items: center;
    gap: 25px;
  }

  .logo-main-header {
    height: 80px;
    width: auto;
  }

  .header-text h2 {
    margin-bottom: 8px;
  }

  /* Variation 5: Centered logo above main */
  .logo-centered-container {
    text-align: center;
    margin-bottom: 40px;
  }

  .logo-centered-main {
    height: 90px;
    width: auto;
  }

  /* Variation 6: Logo at sidebar bottom */
  .sidebar-with-bottom-logo {
    justify-content: space-between;
  }

  .sidebar-top {
    display: flex;
    flex-direction: column;
  }

  .logo-sidebar-bottom {
    height: 70px;
    width: auto;
    display: block;
    margin: 0 auto;
    filter: brightness(0) invert(1);
    opacity: 0.8;
  }

  /* Variation 7: Dual placement */
  .logo-sidebar-small {
    height: 60px;
    width: auto;
    display: block;
    margin-left: auto;
    margin-right: auto;
    filter: brightness(0) invert(1);
  }

  .logo-main-small {
    height: 50px;
    width: auto;
  }

  /* Variation 8: Watermark */
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

  /* Responsive */
  @media (max-width: 1200px) {
    .home-layout {
      min-height: 500px;
    }

    .template-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 640px) {
    .showcase-container {
      padding: 60px 30px;
    }

    .home-layout {
      flex-direction: column;
      min-height: auto;
    }

    .sidebar {
      width: 100%;
      padding: 40px 30px;
    }

    .template-grid {
      grid-template-columns: 1fr;
    }
  }
</style>

