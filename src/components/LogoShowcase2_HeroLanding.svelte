<script>
  // Showcase 2: Hero & Landing Page Variations
  // Demonstrates logo as hero element in different landing page contexts
</script>

<div class="showcase-container">
  <div class="showcase-header">
    <h1>Logo Showcase: Hero & Landing Pages</h1>
    <p>Large-scale logo presentations for landing pages and hero sections</p>
  </div>

  <div class="variations-stack">
    <!-- Variation 1: Centered Hero - Extra Large -->
    <div class="variation-demo">
      <div class="demo-label">Centered Hero - Extra Large (300px height)</div>
      <div class="demo-frame">
        <section class="hero-centered">
          <img src="/accorddesk_logo_alpha.png" alt="AccordDesk Logo" class="logo-hero-xl" />
          <h2 class="hero-title">Contract Management Simplified</h2>
          <p class="hero-subtitle">Professional drafting tools for modern legal teams</p>
          <button class="hero-cta">Start Free Trial</button>
        </section>
      </div>
      <div class="use-case">
        <strong>Use Case:</strong> Primary landing page hero. Maximum brand impact with clear call-to-action.
      </div>
    </div>

    <!-- Variation 2: Split Hero - Left Aligned -->
    <div class="variation-demo">
      <div class="demo-label">Split Layout - Left (250px height)</div>
      <div class="demo-frame">
        <section class="hero-split">
          <div class="hero-left">
            <img src="/accorddesk_logo_alpha.png" alt="AccordDesk Logo" class="logo-hero-large" />
            <h2 class="split-title">Transform Your Workflow</h2>
            <p class="split-text">Streamline contract creation with intelligent templates and automation.</p>
            <div class="split-actions">
              <button class="btn-primary">Get Started</button>
              <button class="btn-secondary">Learn More</button>
            </div>
          </div>
          <div class="hero-right">
            <div class="mockup-placeholder">Product Screenshot</div>
          </div>
        </section>
      </div>
      <div class="use-case">
        <strong>Use Case:</strong> Feature-focused landing page with product preview. Logo establishes brand before content.
      </div>
    </div>

    <!-- Variation 3: Minimal Centered - Medium -->
    <div class="variation-demo">
      <div class="demo-label">Minimal Centered - Medium (180px height)</div>
      <div class="demo-frame">
        <section class="hero-minimal">
          <img src="/accorddesk_logo_alpha.png" alt="AccordDesk Logo" class="logo-hero-medium" />
          <h2 class="minimal-title">Welcome Back</h2>
          <p class="minimal-subtitle">Sign in to continue to your workspace</p>
          <div class="minimal-form">
            <input type="email" placeholder="Email address" class="form-input" />
            <input type="password" placeholder="Password" class="form-input" />
            <button class="form-submit">Sign In</button>
          </div>
        </section>
      </div>
      <div class="use-case">
        <strong>Use Case:</strong> Login/authentication pages. Clean, professional, focused on task completion.
      </div>
    </div>

    <!-- Variation 4: Full-Width Banner -->
    <div class="variation-demo">
      <div class="demo-label">Full-Width Banner (100px height)</div>
      <div class="demo-frame">
        <section class="hero-banner">
          <div class="banner-content">
            <img src="/accorddesk_logo_alpha.png" alt="AccordDesk Logo" class="logo-banner" />
            <div class="banner-text">
              <h3>Trusted by 10,000+ Legal Professionals</h3>
              <p>Join the leading contract management platform</p>
            </div>
            <button class="banner-cta">View Plans</button>
          </div>
        </section>
      </div>
      <div class="use-case">
        <strong>Use Case:</strong> Promotional banner or announcement section. Logo adds credibility to messaging.
      </div>
    </div>

    <!-- Variation 5: Vertical Stack - Large -->
    <div class="variation-demo">
      <div class="demo-label">Vertical Stack - Large (220px height)</div>
      <div class="demo-frame">
        <section class="hero-vertical">
          <img src="/accorddesk_logo_alpha.png" alt="AccordDesk Logo" class="logo-vertical" />
          <div class="vertical-content">
            <h2 class="vertical-title">Enterprise Solutions</h2>
            <p class="vertical-text">Scalable contract management for organizations of any size</p>
            <ul class="vertical-features">
              <li>✓ Unlimited templates</li>
              <li>✓ Advanced analytics</li>
              <li>✓ Priority support</li>
            </ul>
            <button class="vertical-cta">Contact Sales</button>
          </div>
        </section>
      </div>
      <div class="use-case">
        <strong>Use Case:</strong> Product tier or pricing section. Logo reinforces brand throughout long-scroll pages.
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

  /* Variation 1: Centered Hero XL */
  .hero-centered {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 100px 60px;
    background: linear-gradient(to bottom, #ffffff 0%, #f5f5f5 100%);
    text-align: center;
  }

  .logo-hero-xl {
    height: 300px;
    width: auto;
    margin-bottom: 50px;
  }

  .hero-title {
    font-size: 48px;
    font-weight: 300;
    letter-spacing: -1px;
    color: #1a1a1a;
    margin-bottom: 20px;
  }

  .hero-subtitle {
    font-size: 20px;
    font-weight: 300;
    color: #666;
    margin-bottom: 40px;
    max-width: 600px;
  }

  .hero-cta {
    padding: 18px 48px;
    font-size: 16px;
    font-weight: 400;
    background: #2d5016;
    color: #ffffff;
    border: none;
    cursor: pointer;
    transition: all 0.3s;
  }

  .hero-cta:hover {
    background: #3d6020;
    box-shadow: 0 4px 12px rgba(45, 80, 22, 0.2);
  }

  /* Variation 2: Split Hero */
  .hero-split {
    display: grid;
    grid-template-columns: 1fr 1fr;
    min-height: 500px;
  }

  .hero-left {
    padding: 60px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .logo-hero-large {
    height: 250px;
    width: auto;
    margin-bottom: 40px;
  }

  .split-title {
    font-size: 36px;
    font-weight: 300;
    letter-spacing: -0.8px;
    color: #1a1a1a;
    margin-bottom: 20px;
  }

  .split-text {
    font-size: 16px;
    font-weight: 300;
    color: #666;
    line-height: 1.6;
    margin-bottom: 30px;
  }

  .split-actions {
    display: flex;
    gap: 15px;
  }

  .btn-primary, .btn-secondary {
    padding: 14px 32px;
    font-size: 14px;
    font-weight: 400;
    border: 1px solid #2d5016;
    cursor: pointer;
    transition: all 0.3s;
  }

  .btn-primary {
    background: #2d5016;
    color: #ffffff;
  }

  .btn-primary:hover {
    background: #3d6020;
  }

  .btn-secondary {
    background: #ffffff;
    color: #2d5016;
  }

  .btn-secondary:hover {
    background: #2d5016;
    color: #ffffff;
  }

  .hero-right {
    background: #f5f5f5;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .mockup-placeholder {
    padding: 60px;
    color: #999;
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  /* Variation 3: Minimal Centered */
  .hero-minimal {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 80px 60px;
    background: #fafafa;
  }

  .logo-hero-medium {
    height: 180px;
    width: auto;
    margin-bottom: 40px;
  }

  .minimal-title {
    font-size: 32px;
    font-weight: 300;
    letter-spacing: -0.6px;
    color: #1a1a1a;
    margin-bottom: 12px;
  }

  .minimal-subtitle {
    font-size: 14px;
    font-weight: 300;
    color: #666;
    margin-bottom: 40px;
  }

  .minimal-form {
    width: 100%;
    max-width: 400px;
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  .form-input {
    padding: 14px 18px;
    font-size: 14px;
    border: 1px solid #e5e5e5;
    background: #ffffff;
    color: #1a1a1a;
  }

  .form-input:focus {
    outline: none;
    border-color: #2d5016;
  }

  .form-submit {
    padding: 14px 18px;
    font-size: 14px;
    font-weight: 400;
    background: #2d5016;
    color: #ffffff;
    border: none;
    cursor: pointer;
    transition: all 0.3s;
  }

  .form-submit:hover {
    background: #3d6020;
  }

  /* Variation 4: Full-Width Banner */
  .hero-banner {
    background: linear-gradient(135deg, #2d5016 0%, #3d6020 100%);
    padding: 50px 60px;
  }

  .banner-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 40px;
  }

  .logo-banner {
    height: 100px;
    width: auto;
    filter: brightness(0) invert(1);
  }

  .banner-text {
    flex: 1;
    color: #ffffff;
  }

  .banner-text h3 {
    font-size: 28px;
    font-weight: 300;
    letter-spacing: -0.5px;
    margin-bottom: 8px;
  }

  .banner-text p {
    font-size: 14px;
    font-weight: 300;
    opacity: 0.9;
  }

  .banner-cta {
    padding: 14px 32px;
    font-size: 14px;
    font-weight: 400;
    background: #ffffff;
    color: #2d5016;
    border: none;
    cursor: pointer;
    transition: all 0.3s;
  }

  .banner-cta:hover {
    background: #f5f5f5;
  }

  /* Variation 5: Vertical Stack */
  .hero-vertical {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 80px 60px;
    background: #ffffff;
    text-align: center;
  }

  .logo-vertical {
    height: 220px;
    width: auto;
    margin-bottom: 50px;
  }

  .vertical-content {
    max-width: 600px;
  }

  .vertical-title {
    font-size: 36px;
    font-weight: 300;
    letter-spacing: -0.8px;
    color: #1a1a1a;
    margin-bottom: 20px;
  }

  .vertical-text {
    font-size: 16px;
    font-weight: 300;
    color: #666;
    line-height: 1.6;
    margin-bottom: 30px;
  }

  .vertical-features {
    list-style: none;
    padding: 0;
    margin: 0 0 40px 0;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .vertical-features li {
    font-size: 14px;
    color: #1a1a1a;
    font-weight: 400;
  }

  .vertical-cta {
    padding: 14px 40px;
    font-size: 14px;
    font-weight: 400;
    background: #2d5016;
    color: #ffffff;
    border: none;
    cursor: pointer;
    transition: all 0.3s;
  }

  .vertical-cta:hover {
    background: #3d6020;
  }

  /* Responsive */
  @media (max-width: 1024px) {
    .hero-split {
      grid-template-columns: 1fr;
    }

    .hero-right {
      min-height: 300px;
    }

    .banner-content {
      flex-direction: column;
      text-align: center;
    }
  }

  @media (max-width: 640px) {
    .showcase-container {
      padding: 60px 30px;
    }

    .logo-hero-xl {
      height: 200px;
    }

    .logo-hero-large {
      height: 150px;
    }

    .hero-title {
      font-size: 32px;
    }
  }
</style>

