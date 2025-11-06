<script lang="ts">
  // Showcase 4: Creative Effects & Styling
  // Demonstrates logo with various visual effects, filters, and creative presentations
</script>

<div class="showcase-container">
  <div class="showcase-header">
    <h1>Logo Showcase: Creative Effects & Styling</h1>
    <p>Visual effects, filters, and creative presentations for different moods and contexts</p>
  </div>

  <div class="variations-grid">
    <!-- Variation 1: Subtle Shadow & Elevation -->
    <div class="variation-demo">
      <div class="demo-label">Elevated with Shadow (100px height)</div>
      <div class="demo-frame light-bg">
        <img src="/accorddesk_logo_alpha.png" alt="AccordDesk Logo" class="logo-shadow" />
      </div>
      <div class="use-case">
        <strong>Use Case:</strong> Cards, modals, or floating elements where logo needs visual depth.
      </div>
    </div>

    <!-- Variation 2: Grayscale with Hover Color -->
    <div class="variation-demo">
      <div class="demo-label">Grayscale → Color on Hover (100px height)</div>
      <div class="demo-frame light-bg">
        <img src="/accorddesk_logo_alpha.png" alt="AccordDesk Logo" class="logo-grayscale" />
        <p class="hover-hint">Hover to reveal color</p>
      </div>
      <div class="use-case">
        <strong>Use Case:</strong> Interactive elements, clickable logos, or subtle brand presence.
      </div>
    </div>

    <!-- Variation 3: Opacity Fade -->
    <div class="variation-demo">
      <div class="demo-label">Subtle Opacity - 60% (100px height)</div>
      <div class="demo-frame light-bg">
        <img src="/accorddesk_logo_alpha.png" alt="AccordDesk Logo" class="logo-opacity" />
      </div>
      <div class="use-case">
        <strong>Use Case:</strong> Background watermarks, subtle branding, or secondary placements.
      </div>
    </div>

    <!-- Variation 4: Inverted on Dark Background -->
    <div class="variation-demo">
      <div class="demo-label">Inverted Colors on Dark (100px height)</div>
      <div class="demo-frame dark-bg">
        <img src="/accorddesk_logo_alpha.png" alt="AccordDesk Logo" class="logo-inverted" />
      </div>
      <div class="use-case">
        <strong>Use Case:</strong> Dark mode interfaces, dark hero sections, or high-contrast designs.
      </div>
    </div>

    <!-- Variation 5: Glow Effect -->
    <div class="variation-demo">
      <div class="demo-label">Soft Glow Effect (100px height)</div>
      <div class="demo-frame dark-bg">
        <img src="/accorddesk_logo_alpha.png" alt="AccordDesk Logo" class="logo-glow" />
      </div>
      <div class="use-case">
        <strong>Use Case:</strong> Premium feel, spotlight moments, or attention-grabbing placements.
      </div>
    </div>

    <!-- Variation 6: Sepia/Vintage -->
    <div class="variation-demo">
      <div class="demo-label">Sepia Vintage Tone (100px height)</div>
      <div class="demo-frame vintage-bg">
        <img src="/accorddesk_logo_alpha.png" alt="AccordDesk Logo" class="logo-sepia" />
      </div>
      <div class="use-case">
        <strong>Use Case:</strong> Heritage/legacy sections, historical context, or classic aesthetic.
      </div>
    </div>

    <!-- Variation 7: Blur to Focus on Hover -->
    <div class="variation-demo">
      <div class="demo-label">Blur → Focus on Hover (100px height)</div>
      <div class="demo-frame light-bg">
        <img src="/accorddesk_logo_alpha.png" alt="AccordDesk Logo" class="logo-blur" />
        <p class="hover-hint">Hover to focus</p>
      </div>
      <div class="use-case">
        <strong>Use Case:</strong> Interactive galleries, portfolio sections, or engagement-driven designs.
      </div>
    </div>

    <!-- Variation 8: Gradient Overlay -->
    <div class="variation-demo">
      <div class="demo-label">Gradient Overlay (100px height)</div>
      <div class="demo-frame gradient-bg">
        <img src="/accorddesk_logo_alpha.png" alt="AccordDesk Logo" class="logo-gradient" />
      </div>
      <div class="use-case">
        <strong>Use Case:</strong> Modern, vibrant sections or promotional materials.
      </div>
    </div>

    <!-- Variation 9: Outlined/Stroke Effect -->
    <div class="variation-demo">
      <div class="demo-label">Outlined with Border (100px height)</div>
      <div class="demo-frame light-bg">
        <img src="/accorddesk_logo_alpha.png" alt="AccordDesk Logo" class="logo-outlined" />
      </div>
      <div class="use-case">
        <strong>Use Case:</strong> Emphasis, framing, or when logo needs clear boundaries.
      </div>
    </div>

    <!-- Variation 10: Animated Pulse -->
    <div class="variation-demo">
      <div class="demo-label">Subtle Pulse Animation (100px height)</div>
      <div class="demo-frame light-bg">
        <img src="/accorddesk_logo_alpha.png" alt="AccordDesk Logo" class="logo-pulse" />
      </div>
      <div class="use-case">
        <strong>Use Case:</strong> Loading states, attention-grabbing, or "live" status indicators.
      </div>
    </div>

    <!-- Variation 11: Reflection Effect -->
    <div class="variation-demo">
      <div class="demo-label">Mirror Reflection (100px height)</div>
      <div class="demo-frame reflection-bg">
        <div class="logo-reflection-wrapper">
          <img src="/accorddesk_logo_alpha.png" alt="AccordDesk Logo" class="logo-reflection" />
        </div>
      </div>
      <div class="use-case">
        <strong>Use Case:</strong> Premium presentations, product showcases, or polished landing pages.
      </div>
    </div>

    <!-- Variation 12: Tilt on Hover -->
    <div class="variation-demo">
      <div class="demo-label">3D Tilt on Hover (100px height)</div>
      <div class="demo-frame light-bg">
        <img src="/accorddesk_logo_alpha.png" alt="AccordDesk Logo" class="logo-tilt" />
        <p class="hover-hint">Hover for 3D effect</p>
      </div>
      <div class="use-case">
        <strong>Use Case:</strong> Interactive elements, modern UI, or playful brand moments.
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
    grid-template-columns: repeat(3, 1fr);
    gap: 40px;
  }

  .variation-demo {
    background: #ffffff;
    border: 1px solid #e5e5e5;
    overflow: hidden;
  }

  .demo-label {
    padding: 20px 30px;
    background: #f5f5f5;
    font-size: 11px;
    font-weight: 400;
    color: #666;
    text-transform: uppercase;
    letter-spacing: 1px;
    border-bottom: 1px solid #e5e5e5;
  }

  .demo-frame {
    padding: 50px 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 220px;
    gap: 15px;
  }

  .light-bg {
    background: #ffffff;
  }

  .dark-bg {
    background: #1a1a1a;
  }

  .vintage-bg {
    background: #f5f0e8;
  }

  .gradient-bg {
    background: linear-gradient(135deg, #2d5016 0%, #5a8a2f 100%);
  }

  .reflection-bg {
    background: linear-gradient(to bottom, #ffffff 0%, #f5f5f5 100%);
  }

  .hover-hint {
    font-size: 11px;
    color: #999;
    font-style: italic;
  }

  .use-case {
    padding: 20px 30px;
    font-size: 12px;
    color: #666;
    line-height: 1.6;
    border-top: 1px solid #e5e5e5;
  }

  .use-case strong {
    color: #2d5016;
    font-weight: 500;
  }

  /* Base logo size for all variations */
  img {
    height: 100px;
    width: auto;
  }

  /* Variation 1: Shadow */
  .logo-shadow {
    filter: drop-shadow(0 8px 16px rgba(0, 0, 0, 0.12));
  }

  /* Variation 2: Grayscale to Color */
  .logo-grayscale {
    filter: grayscale(100%);
    transition: filter 0.4s ease;
  }

  .logo-grayscale:hover {
    filter: grayscale(0%);
  }

  /* Variation 3: Opacity */
  .logo-opacity {
    opacity: 0.6;
  }

  /* Variation 4: Inverted */
  .logo-inverted {
    filter: brightness(0) invert(1);
  }

  /* Variation 5: Glow */
  .logo-glow {
    filter: brightness(0) invert(1) drop-shadow(0 0 20px rgba(255, 255, 255, 0.6));
  }

  /* Variation 6: Sepia */
  .logo-sepia {
    filter: sepia(80%) contrast(0.9);
  }

  /* Variation 7: Blur to Focus */
  .logo-blur {
    filter: blur(3px);
    transition: filter 0.4s ease;
  }

  .logo-blur:hover {
    filter: blur(0px);
  }

  /* Variation 8: Gradient Overlay */
  .logo-gradient {
    filter: brightness(0) invert(1);
    opacity: 0.95;
  }

  /* Variation 9: Outlined */
  .logo-outlined {
    border: 3px solid #2d5016;
    padding: 15px;
    background: #ffffff;
  }

  /* Variation 10: Pulse Animation */
  .logo-pulse {
    animation: pulse 2s ease-in-out infinite;
  }

  @keyframes pulse {
    0%, 100% {
      opacity: 1;
      transform: scale(1);
    }
    50% {
      opacity: 0.8;
      transform: scale(1.05);
    }
  }

  /* Variation 11: Reflection */
  .logo-reflection-wrapper {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .logo-reflection {
    position: relative;
  }

  .logo-reflection-wrapper::after {
    content: '';
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    height: 100px;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.1) 0%,
      transparent 70%
    );
    transform: scaleY(-1);
    opacity: 0.3;
    pointer-events: none;
  }

  /* Variation 12: Tilt */
  .logo-tilt {
    transition: transform 0.4s ease;
  }

  .logo-tilt:hover {
    transform: perspective(600px) rotateY(15deg) rotateX(5deg);
  }

  /* Responsive */
  @media (max-width: 1200px) {
    .variations-grid {
      grid-template-columns: repeat(2, 1fr);
      gap: 35px;
    }
  }

  @media (max-width: 768px) {
    .variations-grid {
      grid-template-columns: 1fr;
      gap: 30px;
    }
  }

  @media (max-width: 640px) {
    .showcase-container {
      padding: 60px 30px;
    }

    .demo-frame {
      padding: 40px 20px;
      min-height: 200px;
    }
  }
</style>

