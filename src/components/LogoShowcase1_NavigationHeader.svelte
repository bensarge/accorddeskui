<script lang="ts">
  // Showcase 1: Navigation Header Variations
  // Demonstrates logo in different navigation bar contexts
</script>

<div class="showcase-container">
  <div class="showcase-header">
    <h1>Logo Showcase: Navigation Headers</h1>
    <p>Logo presentations in navigation bar contexts with different sizes and layouts</p>
  </div>

  <div class="variations-grid">
    <!-- Variation 1: Compact Top-Left Navigation -->
    <div class="variation-demo">
      <div class="demo-label">Compact Top-Left (48px height)</div>
      <div class="demo-frame">
        <nav class="nav-compact">
          <img src="/accorddesk_logo_alpha.png" alt="AccordDesk Logo" class="logo-compact" />
          <div class="nav-links">
            <a href="#templates">Templates</a>
            <a href="#contracts">Contracts</a>
            <a href="#settings">Settings</a>
          </div>
        </nav>
      </div>
      <div class="use-case">
        <strong>Use Case:</strong> Minimal header for maximum content space. Ideal for document editing views.
      </div>
    </div>

    <!-- Variation 2: Medium Centered Navigation -->
    <div class="variation-demo">
      <div class="demo-label">Centered Header (80px height)</div>
      <div class="demo-frame">
        <nav class="nav-centered">
          <div class="nav-left">
            <a href="#menu">Menu</a>
            <a href="#search">Search</a>
          </div>
          <img src="/accorddesk_logo_alpha.png" alt="AccordDesk Logo" class="logo-centered" />
          <div class="nav-right">
            <a href="#profile">Profile</a>
            <a href="#help">Help</a>
          </div>
        </nav>
      </div>
      <div class="use-case">
        <strong>Use Case:</strong> Balanced layout emphasizing brand. Good for landing pages and dashboards.
      </div>
    </div>

    <!-- Variation 3: Large Prominent Header -->
    <div class="variation-demo">
      <div class="demo-label">Large Prominent (120px height)</div>
      <div class="demo-frame">
        <nav class="nav-large">
          <img src="/accorddesk_logo_alpha.png" alt="AccordDesk Logo" class="logo-large" />
          <div class="nav-actions">
            <button class="nav-btn">Sign In</button>
            <button class="nav-btn-primary">Get Started</button>
          </div>
        </nav>
      </div>
      <div class="use-case">
        <strong>Use Case:</strong> Marketing/landing pages where brand presence is paramount.
      </div>
    </div>

    <!-- Variation 4: Sidebar Logo -->
    <div class="variation-demo">
      <div class="demo-label">Sidebar Vertical (200px width)</div>
      <div class="demo-frame sidebar-frame">
        <aside class="sidebar-nav">
          <div class="sidebar-logo-container">
            <img src="/accorddesk_logo_alpha.png" alt="AccordDesk Logo" class="logo-sidebar" />
          </div>
          <nav class="sidebar-links">
            <a href="#dashboard">Dashboard</a>
            <a href="#templates">Templates</a>
            <a href="#contracts">Contracts</a>
            <a href="#analytics">Analytics</a>
          </nav>
        </aside>
        <div class="sidebar-content">
          <p>Main content area</p>
        </div>
      </div>
      <div class="use-case">
        <strong>Use Case:</strong> Application layout with persistent sidebar navigation.
      </div>
    </div>

    <!-- Variation 5: Fixed Floating Header -->
    <div class="variation-demo">
      <div class="demo-label">Fixed Floating (60px height, sticky)</div>
      <div class="demo-frame scrollable">
        <nav class="nav-floating">
          <img src="/accorddesk_logo_alpha.png" alt="AccordDesk Logo" class="logo-floating" />
          <div class="nav-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>
        <div class="scroll-content">
          <p>Scroll to see sticky behavior...</p>
          <p>Content block 1</p>
          <p>Content block 2</p>
          <p>Content block 3</p>
          <p>Content block 4</p>
          <p>Content block 5</p>
        </div>
      </div>
      <div class="use-case">
        <strong>Use Case:</strong> Long-scroll pages where navigation needs to remain accessible.
      </div>
    </div>

    <!-- Variation 6: Responsive Collapsible -->
    <div class="variation-demo">
      <div class="demo-label">Responsive Mobile (56px height)</div>
      <div class="demo-frame mobile-frame">
        <nav class="nav-mobile">
          <img src="/accorddesk_logo_alpha.png" alt="AccordDesk Logo" class="logo-mobile" />
          <button class="hamburger">☰</button>
        </nav>
      </div>
      <div class="use-case">
        <strong>Use Case:</strong> Mobile-first design with hamburger menu. Logo scales appropriately.
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

  .variations-grid {
    max-width: 1400px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
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
    background: #ffffff;
  }

  .use-case {
    padding: 20px 30px;
    font-size: 13px;
    color: #666;
    line-height: 1.6;
    border-top: 1px solid #e5e5e5;
  }

  .use-case strong {
    color: #2d5016;
    font-weight: 500;
  }

  /* Variation 1: Compact Navigation */
  .nav-compact {
    display: flex;
    align-items: center;
    padding: 12px 30px;
    background: #ffffff;
    border-bottom: 1px solid #e5e5e5;
    gap: 40px;
  }

  .logo-compact {
    height: 48px;
    width: auto;
  }

  .nav-links {
    display: flex;
    gap: 30px;
  }

  .nav-links a {
    color: #666;
    text-decoration: none;
    font-size: 14px;
    font-weight: 400;
    transition: color 0.2s;
  }

  .nav-links a:hover {
    color: #2d5016;
  }

  /* Variation 2: Centered Navigation */
  .nav-centered {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 40px;
    background: #ffffff;
    border-bottom: 1px solid #e5e5e5;
  }

  .logo-centered {
    height: 80px;
    width: auto;
  }

  .nav-left, .nav-right {
    display: flex;
    gap: 25px;
  }

  .nav-left a, .nav-right a {
    color: #666;
    text-decoration: none;
    font-size: 14px;
    font-weight: 400;
    transition: color 0.2s;
  }

  .nav-left a:hover, .nav-right a:hover {
    color: #2d5016;
  }

  /* Variation 3: Large Prominent */
  .nav-large {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 30px 50px;
    background: linear-gradient(to bottom, #ffffff 0%, #fafafa 100%);
    border-bottom: 1px solid #e5e5e5;
  }

  .logo-large {
    height: 120px;
    width: auto;
  }

  .nav-actions {
    display: flex;
    gap: 15px;
  }

  .nav-btn, .nav-btn-primary {
    padding: 12px 24px;
    font-size: 14px;
    font-weight: 400;
    border: 1px solid #e5e5e5;
    background: #ffffff;
    color: #1a1a1a;
    cursor: pointer;
    transition: all 0.2s;
  }

  .nav-btn:hover {
    border-color: #2d5016;
    color: #2d5016;
  }

  .nav-btn-primary {
    background: #2d5016;
    border-color: #2d5016;
    color: #ffffff;
  }

  .nav-btn-primary:hover {
    background: #3d6020;
  }

  /* Variation 4: Sidebar */
  .sidebar-frame {
    display: flex;
    height: 400px;
  }

  .sidebar-nav {
    width: 200px;
    background: #1a1a1a;
    display: flex;
    flex-direction: column;
  }

  .sidebar-logo-container {
    padding: 30px 20px;
    border-bottom: 1px solid #333;
  }

  .logo-sidebar {
    width: 100%;
    height: auto;
  }

  .sidebar-links {
    display: flex;
    flex-direction: column;
    padding: 20px 0;
  }

  .sidebar-links a {
    padding: 15px 20px;
    color: #999;
    text-decoration: none;
    font-size: 14px;
    font-weight: 400;
    transition: all 0.2s;
  }

  .sidebar-links a:hover {
    background: #2d5016;
    color: #ffffff;
  }

  .sidebar-content {
    flex: 1;
    padding: 30px;
    background: #fafafa;
    color: #666;
  }

  /* Variation 5: Floating */
  .scrollable {
    height: 400px;
    overflow-y: auto;
    position: relative;
  }

  .nav-floating {
    position: sticky;
    top: 0;
    display: flex;
    align-items: center;
    padding: 15px 30px;
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    border-bottom: 1px solid #e5e5e5;
    gap: 40px;
    z-index: 100;
  }

  .logo-floating {
    height: 60px;
    width: auto;
  }

  .scroll-content {
    padding: 30px;
  }

  .scroll-content p {
    margin-bottom: 80px;
    color: #666;
    font-size: 14px;
  }

  /* Variation 6: Mobile */
  .mobile-frame {
    max-width: 375px;
    margin: 0 auto;
  }

  .nav-mobile {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 20px;
    background: #ffffff;
    border-bottom: 1px solid #e5e5e5;
  }

  .logo-mobile {
    height: 56px;
    width: auto;
  }

  .hamburger {
    font-size: 24px;
    background: none;
    border: none;
    color: #1a1a1a;
    cursor: pointer;
    padding: 8px;
  }

  /* Responsive */
  @media (max-width: 1024px) {
    .variations-grid {
      grid-template-columns: 1fr;
      gap: 40px;
    }
  }

  @media (max-width: 640px) {
    .showcase-container {
      padding: 60px 30px;
    }
  }
</style>

