<script>
  // Showcase 3: Responsive & Adaptive Variations
  // Demonstrates logo scaling and adaptation across different screen sizes and contexts
</script>

<div class="showcase-container">
  <div class="showcase-header">
    <h1>Logo Showcase: Responsive & Adaptive</h1>
    <p>Logo presentations that adapt to different screen sizes and device contexts</p>
  </div>

  <div class="variations-grid">
    <!-- Variation 1: Fluid Scaling (Percentage-based) -->
    <div class="variation-demo">
      <div class="demo-label">Fluid Scaling - 15% of Container Width</div>
      <div class="demo-frame">
        <div class="fluid-container">
          <img src="/accorddesk_logo_alpha.png" alt="AccordDesk Logo" class="logo-fluid" />
          <p class="fluid-text">Logo scales proportionally with container width</p>
        </div>
      </div>
      <div class="use-case">
        <strong>Use Case:</strong> Flexible layouts where logo should maintain proportion to content area.
      </div>
    </div>

    <!-- Variation 2: Breakpoint-based Sizing -->
    <div class="variation-demo">
      <div class="demo-label">Breakpoint Adaptive - Desktop/Tablet/Mobile</div>
      <div class="demo-frame">
        <div class="breakpoint-container">
          <img src="/accorddesk_logo_alpha.png" alt="AccordDesk Logo" class="logo-breakpoint" />
          <div class="breakpoint-info">
            <p><strong>Desktop:</strong> 120px height</p>
            <p><strong>Tablet:</strong> 90px height</p>
            <p><strong>Mobile:</strong> 60px height</p>
          </div>
        </div>
      </div>
      <div class="use-case">
        <strong>Use Case:</strong> Responsive headers that adjust to device size. Resize browser to see changes.
      </div>
    </div>

    <!-- Variation 3: Max-Width Constrained -->
    <div class="variation-demo">
      <div class="demo-label">Max-Width Constrained - 200px max, 80% width</div>
      <div class="demo-frame">
        <div class="constrained-container">
          <img src="/accorddesk_logo_alpha.png" alt="AccordDesk Logo" class="logo-constrained" />
          <p class="constrained-text">Scales down but never exceeds 200px width</p>
        </div>
      </div>
      <div class="use-case">
        <strong>Use Case:</strong> Prevents logo from becoming too large on wide screens while remaining responsive.
      </div>
    </div>

    <!-- Variation 4: Aspect Ratio Preserved -->
    <div class="variation-demo">
      <div class="demo-label">Aspect Ratio Box - 16:9 Container</div>
      <div class="demo-frame">
        <div class="aspect-container">
          <img src="/accorddesk_logo_alpha.png" alt="AccordDesk Logo" class="logo-aspect" />
        </div>
      </div>
      <div class="use-case">
        <strong>Use Case:</strong> Logo centered in fixed aspect ratio container, useful for cards and tiles.
      </div>
    </div>

    <!-- Variation 5: Viewport-based Sizing -->
    <div class="variation-demo">
      <div class="demo-label">Viewport Units - 10vw width</div>
      <div class="demo-frame">
        <div class="viewport-container">
          <img src="/accorddesk_logo_alpha.png" alt="AccordDesk Logo" class="logo-viewport" />
          <p class="viewport-text">Scales with viewport width (10% of screen width)</p>
        </div>
      </div>
      <div class="use-case">
        <strong>Use Case:</strong> Full-screen experiences where logo should scale with viewport.
      </div>
    </div>

    <!-- Variation 6: Container Query Responsive -->
    <div class="variation-demo">
      <div class="demo-label">Container-Relative - Adapts to Parent</div>
      <div class="demo-frame">
        <div class="container-query-wrapper">
          <div class="container-small">
            <img src="/accorddesk_logo_alpha.png" alt="AccordDesk Logo" class="logo-container" />
            <span>Small</span>
          </div>
          <div class="container-medium">
            <img src="/accorddesk_logo_alpha.png" alt="AccordDesk Logo" class="logo-container" />
            <span>Medium</span>
          </div>
          <div class="container-large">
            <img src="/accorddesk_logo_alpha.png" alt="AccordDesk Logo" class="logo-container" />
            <span>Large</span>
          </div>
        </div>
      </div>
      <div class="use-case">
        <strong>Use Case:</strong> Component-based layouts where logo adapts to parent container size.
      </div>
    </div>

    <!-- Variation 7: Clamp-based Sizing -->
    <div class="variation-demo">
      <div class="demo-label">CSS Clamp - Min 60px, Preferred 8vw, Max 150px</div>
      <div class="demo-frame">
        <div class="clamp-container">
          <img src="/accorddesk_logo_alpha.png" alt="AccordDesk Logo" class="logo-clamp" />
          <p class="clamp-text">Fluid sizing with minimum and maximum bounds</p>
        </div>
      </div>
      <div class="use-case">
        <strong>Use Case:</strong> Modern responsive design with controlled scaling range across all devices.
      </div>
    </div>

    <!-- Variation 8: Grid-based Sizing -->
    <div class="variation-demo">
      <div class="demo-label">CSS Grid - Spans 2 of 12 Columns</div>
      <div class="demo-frame">
        <div class="grid-container">
          <div class="grid-logo-cell">
            <img src="/accorddesk_logo_alpha.png" alt="AccordDesk Logo" class="logo-grid" />
          </div>
          <div class="grid-content-cell">
            <p>Content area (10 columns)</p>
          </div>
        </div>
      </div>
      <div class="use-case">
        <strong>Use Case:</strong> Grid-based layouts where logo occupies specific column span.
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
    padding: 40px;
    background: #ffffff;
    min-height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
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

  /* Variation 1: Fluid Scaling */
  .fluid-container {
    width: 100%;
    text-align: center;
  }

  .logo-fluid {
    width: 15%;
    height: auto;
    min-width: 60px;
    margin-bottom: 20px;
  }

  .fluid-text {
    font-size: 12px;
    color: #999;
  }

  /* Variation 2: Breakpoint-based */
  .breakpoint-container {
    text-align: center;
    width: 100%;
  }

  .logo-breakpoint {
    height: 120px;
    width: auto;
    margin-bottom: 20px;
  }

  .breakpoint-info {
    font-size: 11px;
    color: #999;
  }

  .breakpoint-info p {
    margin: 4px 0;
  }

  @media (max-width: 1024px) {
    .logo-breakpoint {
      height: 90px;
    }
  }

  @media (max-width: 640px) {
    .logo-breakpoint {
      height: 60px;
    }
  }

  /* Variation 3: Max-Width Constrained */
  .constrained-container {
    width: 100%;
    text-align: center;
  }

  .logo-constrained {
    width: 80%;
    max-width: 200px;
    height: auto;
    margin-bottom: 20px;
  }

  .constrained-text {
    font-size: 12px;
    color: #999;
  }

  /* Variation 4: Aspect Ratio */
  .aspect-container {
    width: 100%;
    aspect-ratio: 16 / 9;
    background: #f5f5f5;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #e5e5e5;
  }

  .logo-aspect {
    max-width: 60%;
    max-height: 60%;
    width: auto;
    height: auto;
  }

  /* Variation 5: Viewport-based */
  .viewport-container {
    text-align: center;
    width: 100%;
  }

  .logo-viewport {
    width: 10vw;
    min-width: 60px;
    max-width: 150px;
    height: auto;
    margin-bottom: 20px;
  }

  .viewport-text {
    font-size: 12px;
    color: #999;
  }

  /* Variation 6: Container Query */
  .container-query-wrapper {
    display: flex;
    gap: 20px;
    width: 100%;
    justify-content: space-between;
  }

  .container-small,
  .container-medium,
  .container-large {
    background: #f5f5f5;
    border: 1px solid #e5e5e5;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    gap: 10px;
  }

  .container-small {
    width: 25%;
  }

  .container-medium {
    width: 35%;
  }

  .container-large {
    width: 40%;
  }

  .logo-container {
    width: 80%;
    height: auto;
  }

  .container-small span,
  .container-medium span,
  .container-large span {
    font-size: 10px;
    color: #999;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  /* Variation 7: Clamp-based */
  .clamp-container {
    text-align: center;
    width: 100%;
  }

  .logo-clamp {
    width: clamp(60px, 8vw, 150px);
    height: auto;
    margin-bottom: 20px;
  }

  .clamp-text {
    font-size: 12px;
    color: #999;
  }

  /* Variation 8: Grid-based */
  .grid-container {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    gap: 15px;
  }

  .grid-logo-cell {
    grid-column: span 2;
    background: #f5f5f5;
    border: 1px solid #e5e5e5;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
  }

  .logo-grid {
    width: 100%;
    height: auto;
  }

  .grid-content-cell {
    grid-column: span 10;
    background: #fafafa;
    border: 1px solid #e5e5e5;
    display: flex;
    align-items: center;
    padding: 20px;
    font-size: 12px;
    color: #999;
  }

  /* Responsive */
  @media (max-width: 1024px) {
    .variations-grid {
      grid-template-columns: 1fr;
      gap: 40px;
    }

    .container-query-wrapper {
      flex-direction: column;
    }

    .container-small,
    .container-medium,
    .container-large {
      width: 100%;
    }

    .grid-logo-cell {
      grid-column: span 3;
    }

    .grid-content-cell {
      grid-column: span 9;
    }
  }

  @media (max-width: 640px) {
    .showcase-container {
      padding: 60px 30px;
    }

    .demo-frame {
      padding: 30px 20px;
    }

    .grid-logo-cell {
      grid-column: span 4;
    }

    .grid-content-cell {
      grid-column: span 8;
    }
  }
</style>

