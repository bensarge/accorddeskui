<script lang="ts">
  // Self-contained showcase component for Add Template button variations
</script>

<div class="showcase-container">
  <div class="showcase-header">
    <h1>Add Template Button Variations</h1>
    <p>Minimalist monochrome aesthetic with sage green accent</p>
  </div>

  <div class="button-grid">
    <!-- Variation 1: Outline style with accent color border -->
    <div class="button-demo">
      <button class="btn btn-outline">
        <span class="btn-icon">+</span>
        <span class="btn-text">Add Template</span>
      </button>
      <div class="button-label">Outline Style</div>
    </div>

    <!-- Variation 2: Filled with subtle background, dark text -->
    <div class="button-demo">
      <button class="btn btn-filled">
        <span class="btn-icon">+</span>
        <span class="btn-text">Add Template</span>
      </button>
      <div class="button-label">Filled Style</div>
    </div>

    <!-- Variation 3: Minimal text-only with icon -->
    <div class="button-demo">
      <button class="btn btn-minimal">
        <span class="btn-icon">+</span>
        <span class="btn-text">Add Template</span>
      </button>
      <div class="button-label">Minimal Style</div>
    </div>

    <!-- Variation 4: Ghost style with hover effect -->
    <div class="button-demo">
      <button class="btn btn-ghost">
        <span class="btn-icon">+</span>
        <span class="btn-text">Add Template</span>
      </button>
      <div class="button-label">Ghost Style</div>
    </div>

    <!-- Variation 5: Rounded corners variant -->
    <div class="button-demo">
      <button class="btn btn-rounded">
        <span class="btn-icon">+</span>
        <span class="btn-text">Add Template</span>
      </button>
      <div class="button-label">Rounded Corners</div>
    </div>

    <!-- Variation 6: Icon-prominent layout -->
    <div class="button-demo">
      <button class="btn btn-icon-prominent">
        <span class="btn-icon-large">+</span>
        <span class="btn-text-small">Add Template</span>
      </button>
      <div class="button-label">Icon Prominent</div>
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
    max-width: 1200px;
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

  .button-grid {
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 60px;
  }

  .button-demo {
    background: #ffffff;
    padding: 60px 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    border: 1px solid #e5e5e5;
    transition: all 0.3s ease;
  }

  .button-demo:hover {
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
  }

  .button-label {
    font-size: 12px;
    font-weight: 400;
    color: #999;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  /* Base button styles */
  .btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 14px 28px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Inter', Arial, sans-serif;
    font-size: 14px;
    font-weight: 400;
    letter-spacing: 0.2px;
    cursor: pointer;
    transition: all 0.3s ease;
    border: none;
    background: none;
  }

  .btn-icon {
    font-size: 20px;
    font-weight: 200;
    line-height: 1;
  }

  .btn-text {
    line-height: 1;
  }

  /* Variation 1: Outline style with accent color border */
  .btn-outline {
    border: 1px solid #2d5016;
    color: #2d5016;
    background: #ffffff;
  }

  .btn-outline:hover {
    background: #2d5016;
    color: #ffffff;
    box-shadow: 0 2px 8px rgba(45, 80, 22, 0.15);
  }

  .btn-outline:active {
    transform: translateY(1px);
    box-shadow: 0 1px 4px rgba(45, 80, 22, 0.2);
  }

  /* Variation 2: Filled with subtle background, dark text */
  .btn-filled {
    border: 1px solid #e5e5e5;
    background: #f5f5f5;
    color: #1a1a1a;
  }

  .btn-filled:hover {
    background: #2d5016;
    border-color: #2d5016;
    color: #ffffff;
    box-shadow: 0 2px 8px rgba(45, 80, 22, 0.15);
  }

  .btn-filled:active {
    transform: translateY(1px);
    box-shadow: 0 1px 4px rgba(45, 80, 22, 0.2);
  }

  /* Variation 3: Minimal text-only with icon */
  .btn-minimal {
    border: none;
    color: #1a1a1a;
    padding: 14px 20px;
  }

  .btn-minimal:hover {
    color: #2d5016;
    background: rgba(45, 80, 22, 0.05);
  }

  .btn-minimal:active {
    background: rgba(45, 80, 22, 0.1);
  }

  /* Variation 4: Ghost style with hover effect */
  .btn-ghost {
    border: 1px solid transparent;
    color: #666;
  }

  .btn-ghost:hover {
    border-color: #2d5016;
    color: #2d5016;
    background: rgba(45, 80, 22, 0.03);
  }

  .btn-ghost:active {
    background: rgba(45, 80, 22, 0.08);
  }

  /* Variation 5: Rounded corners variant */
  .btn-rounded {
    border: 1px solid #2d5016;
    border-radius: 24px;
    color: #2d5016;
    background: #ffffff;
    padding: 14px 32px;
  }

  .btn-rounded:hover {
    background: #2d5016;
    color: #ffffff;
    box-shadow: 0 2px 8px rgba(45, 80, 22, 0.15);
  }

  .btn-rounded:active {
    transform: translateY(1px);
    box-shadow: 0 1px 4px rgba(45, 80, 22, 0.2);
  }

  /* Variation 6: Icon-prominent layout */
  .btn-icon-prominent {
    flex-direction: column;
    gap: 12px;
    padding: 24px 32px;
    border: 1px solid #e5e5e5;
    color: #1a1a1a;
  }

  .btn-icon-large {
    font-size: 36px;
    font-weight: 200;
    line-height: 1;
  }

  .btn-text-small {
    font-size: 12px;
    font-weight: 400;
    letter-spacing: 0.5px;
  }

  .btn-icon-prominent:hover {
    border-color: #2d5016;
    color: #2d5016;
    box-shadow: 0 2px 8px rgba(45, 80, 22, 0.1);
  }

  .btn-icon-prominent:active {
    transform: translateY(1px);
    background: rgba(45, 80, 22, 0.03);
  }

  /* Responsive adjustments */
  @media (max-width: 1024px) {
    .button-grid {
      grid-template-columns: repeat(2, 1fr);
      gap: 40px;
    }
  }

  @media (max-width: 640px) {
    .button-grid {
      grid-template-columns: 1fr;
      gap: 30px;
    }

    .showcase-container {
      padding: 60px 30px;
    }
  }
</style>

