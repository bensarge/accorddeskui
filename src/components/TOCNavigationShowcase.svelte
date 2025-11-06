<script lang="ts">
  import { navigate } from 'svelte-routing';
  import { ArrowLeft, ChevronLeft, X, Home, FileText } from 'lucide-svelte';

  function handleNavigateToDrafting(): void {
    navigate('/');
  }
</script>

<div class="showcase-container">
  <div class="showcase-header">
    <h1>Table of Contents Navigation Options</h1>
    <p class="subtitle">Multiple implementation approaches for returning to Drafting Manager</p>
    <p class="description">
      Each option below demonstrates a different UI pattern for adding navigation functionality 
      to the TableOfContents header. Choose the approach that best fits the application's design 
      language and user experience goals.
    </p>
  </div>

  <div class="variations-grid">
    
    <!-- Option 1: Back Button with Icon + Text -->
    <div class="variation-demo">
      <div class="demo-label">Option 1: Back Button with Icon + Text</div>
      <div class="demo-description">
        <strong>Pattern:</strong> Traditional back button with left arrow icon and text label<br>
        <strong>Placement:</strong> Top of TOC header, above the title<br>
        <strong>Best for:</strong> Clear, explicit navigation that's immediately recognizable
      </div>
      <div class="demo-frame">
        <div class="toc-container">
          <div class="toc-header toc-header-option1">
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
          <div class="toc-preview">TOC content...</div>
        </div>
      </div>
      <div class="code-info">
        <strong>Implementation:</strong> Adds a back button above the existing header layout
      </div>
    </div>

    <!-- Option 2: Compact Icon-Only Button (Top Right) -->
    <div class="variation-demo">
      <div class="demo-label">Option 2: Compact Icon-Only Button (Top Right)</div>
      <div class="demo-description">
        <strong>Pattern:</strong> Minimal close/back icon button<br>
        <strong>Placement:</strong> Top-right corner of the header<br>
        <strong>Best for:</strong> Minimal UI footprint, modern app-like experience
      </div>
      <div class="demo-frame">
        <div class="toc-container">
          <div class="toc-header toc-header-option2">
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
          <div class="toc-preview">TOC content...</div>
        </div>
      </div>
      <div class="code-info">
        <strong>Implementation:</strong> Icon-only button positioned absolutely in top-right
      </div>
    </div>

    <!-- Option 3: Breadcrumb Style -->
    <div class="variation-demo">
      <div class="demo-label">Option 3: Breadcrumb Navigation</div>
      <div class="demo-description">
        <strong>Pattern:</strong> Breadcrumb trail showing navigation hierarchy<br>
        <strong>Placement:</strong> Above the TOC title<br>
        <strong>Best for:</strong> Showing context and navigation path
      </div>
      <div class="demo-frame">
        <div class="toc-container">
          <div class="toc-header toc-header-option3">
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
          <div class="toc-preview">TOC content...</div>
        </div>
      </div>
      <div class="code-info">
        <strong>Implementation:</strong> Breadcrumb navigation above title with home icon
      </div>
    </div>

    <!-- Option 4: Chevron Back (Inline with Title) -->
    <div class="variation-demo">
      <div class="demo-label">Option 4: Inline Chevron Back Button</div>
      <div class="demo-description">
        <strong>Pattern:</strong> Chevron icon integrated into the title row<br>
        <strong>Placement:</strong> Left side of the header, before the icon<br>
        <strong>Best for:</strong> Compact design that doesn't add vertical space
      </div>
      <div class="demo-frame">
        <div class="toc-container">
          <div class="toc-header toc-header-option4">
            <div class="toc-title-row-with-back">
              <button class="chevron-back" on:click={handleNavigateToDrafting} title="Back to Drafting Manager">
                <ChevronLeft size={24} strokeWidth={2} />
              </button>
              <div class="icon-container">
                <FileText size={32} strokeWidth={1.5} />
              </div>
              <h2>Table of<br>Contents</h2>
            </div>
          </div>
          <div class="toc-preview">TOC content...</div>
        </div>
      </div>
      <div class="code-info">
        <strong>Implementation:</strong> Chevron button inline with existing header elements
      </div>
    </div>

    <!-- Option 5: Hover-Reveal Back Button -->
    <div class="variation-demo">
      <div class="demo-label">Option 5: Hover-Reveal Navigation</div>
      <div class="demo-description">
        <strong>Pattern:</strong> Navigation appears on header hover<br>
        <strong>Placement:</strong> Overlays the header on hover<br>
        <strong>Best for:</strong> Clean default state with discoverable navigation
      </div>
      <div class="demo-frame">
        <div class="toc-container">
          <div class="toc-header toc-header-option5">
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
          <div class="toc-preview">TOC content...</div>
        </div>
      </div>
      <div class="code-info">
        <strong>Implementation:</strong> Hover state reveals navigation overlay
      </div>
    </div>

  </div>

  <div class="implementation-guide">
    <h3>Implementation Details</h3>
    <div class="guide-grid">
      <div class="guide-item">
        <h4>Navigation Function</h4>
        <pre><code>import &#123; navigate &#125; from 'svelte-routing';

function handleNavigateToDrafting() &#123;
  navigate('/');
&#125;</code></pre>
      </div>
      <div class="guide-item">
        <h4>Required Icons</h4>
        <pre><code>import &#123; 
  ArrowLeft, 
  ChevronLeft, 
  X, 
  Home 
&#125; from 'lucide-svelte';</code></pre>
      </div>
      <div class="guide-item">
        <h4>Route Information</h4>
        <p><strong>Drafting Manager:</strong> <code>/</code> (root path)</p>
        <p><strong>Contract Viewer:</strong> <code>/contract/:contractId</code></p>
      </div>
      <div class="guide-item">
        <h4>Design Tokens</h4>
        <p><strong>Primary Color:</strong> <code>#385757</code></p>
        <p><strong>Accent Color:</strong> <code>#2d5016</code></p>
        <p><strong>Text on Dark:</strong> <code>white</code></p>
        <p><strong>Hover Opacity:</strong> <code>rgba(255, 255, 255, 0.1)</code></p>
      </div>
    </div>
  </div>

  <div class="recommendation">
    <h3>Recommendations</h3>
    <div class="rec-grid">
      <div class="rec-item">
        <div class="rec-number">1</div>
        <div class="rec-content">
          <h4>Option 1 or 3</h4>
          <p>Best for users who need clear, explicit navigation. The breadcrumb (Option 3) provides additional context about location in the app hierarchy.</p>
        </div>
      </div>
      <div class="rec-item">
        <div class="rec-number">2</div>
        <div class="rec-content">
          <h4>Option 2 or 4</h4>
          <p>Best for minimal UI. Option 2 (close icon) is familiar from modal patterns, while Option 4 (chevron) is common in mobile navigation.</p>
        </div>
      </div>
      <div class="rec-item">
        <div class="rec-number">3</div>
        <div class="rec-content">
          <h4>Option 5</h4>
          <p>Best for advanced users who want a clean interface. The hover-reveal keeps the UI minimal while maintaining discoverability.</p>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  .showcase-container {
    min-height: 100vh;
    background: #fafafa;
    padding: 80px 60px;
  }

  .showcase-header {
    max-width: 1200px;
    margin: 0 auto 60px;
    text-align: center;
  }

  .showcase-header h1 {
    font-size: 42px;
    font-weight: 300;
    letter-spacing: -1px;
    color: #1a1a1a;
    margin-bottom: 16px;
  }

  .subtitle {
    font-size: 18px;
    color: #666;
    font-weight: 300;
    margin-bottom: 20px;
  }

  .description {
    font-size: 14px;
    color: #666;
    line-height: 1.8;
    max-width: 800px;
    margin: 0 auto;
  }

  .variations-grid {
    max-width: 1400px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr;
    gap: 50px;
  }

  .variation-demo {
    background: white;
    border-radius: 4px;
    overflow: hidden;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  }

  .demo-label {
    padding: 20px 30px;
    background: #385757;
    color: white;
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 0.3px;
  }

  .demo-description {
    padding: 20px 30px;
    background: #f5f5f5;
    font-size: 13px;
    line-height: 1.8;
    color: #666;
    border-bottom: 1px solid #e5e5e5;
  }

  .demo-description strong {
    color: #2d5016;
    font-weight: 500;
  }

  .demo-frame {
    padding: 40px;
    background: #ffffff;
    display: flex;
    justify-content: center;
  }

  .code-info {
    padding: 20px 30px;
    font-size: 13px;
    color: #666;
    background: #fafafa;
    border-top: 1px solid #e5e5e5;
  }

  .code-info strong {
    color: #2d5016;
    font-weight: 500;
  }

  /* TOC Container Styles (matching original) */
  .toc-container {
    width: 320px;
    background: #385757;
    border-radius: 4px;
    overflow: hidden;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }

  .toc-header {
    padding: 35px 30px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    color: white;
    position: relative;
  }

  .toc-title-row {
    display: flex;
    align-items: center;
    gap: 16px;
  }

  .icon-container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .toc-header h2 {
    font-size: 24px;
    font-weight: 300;
    letter-spacing: -0.5px;
    line-height: 1.3;
    margin: 0;
  }

  .toc-preview {
    padding: 30px;
    color: rgba(255, 255, 255, 0.6);
    font-size: 13px;
    text-align: center;
  }

  /* Option 1: Back Button with Icon + Text */
  .toc-header-option1 {
    padding: 20px 30px 35px;
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
    margin-bottom: 20px;
    transition: all 0.25s ease;
    font-family: inherit;
  }

  .back-button:hover {
    color: white;
    transform: translateX(-2px);
  }

  /* Option 2: Compact Icon-Only Button */
  .toc-header-option2 {
    position: relative;
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

  /* Option 3: Breadcrumb Style */
  .toc-header-option3 {
    padding: 20px 30px 35px;
  }

  .breadcrumb {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 20px;
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

  /* Option 4: Chevron Back (Inline with Title) */
  .toc-title-row-with-back {
    display: flex;
    align-items: center;
    gap: 12px;
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

  /* Option 5: Hover-Reveal Back Button */
  .toc-header-option5 {
    position: relative;
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

  .toc-header-option5:hover .hover-nav {
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

  /* Implementation Guide Section */
  .implementation-guide {
    max-width: 1400px;
    margin: 80px auto 60px;
    background: white;
    border-radius: 4px;
    padding: 50px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  }

  .implementation-guide h3 {
    font-size: 28px;
    font-weight: 300;
    color: #1a1a1a;
    margin-bottom: 40px;
    text-align: center;
  }

  .guide-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
  }

  .guide-item {
    background: #fafafa;
    padding: 25px;
    border-radius: 4px;
    border: 1px solid #e5e5e5;
  }

  .guide-item h4 {
    font-size: 16px;
    font-weight: 400;
    color: #2d5016;
    margin-bottom: 15px;
  }

  .guide-item pre {
    background: #1a1a1a;
    color: #C4EACC;
    padding: 15px;
    border-radius: 3px;
    overflow-x: auto;
    font-size: 12px;
    line-height: 1.6;
  }

  .guide-item code {
    font-family: 'Monaco', 'Menlo', 'Courier New', monospace;
  }

  .guide-item p {
    font-size: 13px;
    color: #666;
    line-height: 1.8;
    margin-bottom: 8px;
  }

  .guide-item p code {
    background: #e5e5e5;
    padding: 2px 6px;
    border-radius: 2px;
    font-size: 12px;
    color: #2d5016;
  }

  /* Recommendation Section */
  .recommendation {
    max-width: 1400px;
    margin: 0 auto 60px;
    background: linear-gradient(135deg, #2d5016 0%, #385757 100%);
    border-radius: 4px;
    padding: 50px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
    color: white;
  }

  .recommendation h3 {
    font-size: 28px;
    font-weight: 300;
    margin-bottom: 40px;
    text-align: center;
  }

  .rec-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
  }

  .rec-item {
    display: flex;
    gap: 20px;
  }

  .rec-number {
    width: 40px;
    height: 40px;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    font-weight: 400;
    flex-shrink: 0;
  }

  .rec-content h4 {
    font-size: 16px;
    font-weight: 400;
    margin-bottom: 10px;
  }

  .rec-content p {
    font-size: 13px;
    line-height: 1.8;
    opacity: 0.9;
    font-weight: 300;
  }

  /* Responsive */
  @media (max-width: 1200px) {
    .guide-grid {
      grid-template-columns: 1fr;
    }

    .rec-grid {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 768px) {
    .showcase-container {
      padding: 60px 30px;
    }

    .demo-frame {
      padding: 20px;
    }

    .implementation-guide,
    .recommendation {
      padding: 30px;
    }
  }
</style>
