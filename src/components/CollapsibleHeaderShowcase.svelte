<script>
  import { Link } from 'svelte-routing';
  import { ChevronUp, ChevronDown, Minimize2, Maximize2, ChevronsUp, ChevronsDown } from 'lucide-svelte';

  // Mock data matching the contract structure
  const mockData = {
    metadata: {
      title: "Non-Disclosure Agreement",
      type: "NDA",
      version: "0.2",
      status: "Draft",
      document_code: "c-20-ad-1-nda-1",
      author: "Michael Zollner",
      applicable_law: "GER",
      jurisdiction: "Munich"
    },
    parties: [
      {
        party_name: "ndaDesk GmbH",
        party_registered_office: "Müller Street 32, 81234 Munich, Germany",
        party_represented_by: "Philipp Fontaine"
      },
      {
        party_name: "Dirk Hoffmann Consulting GbR",
        party_registered_office: "Beer Street 100, 89100 Munich, Germany",
        party_represented_by: "Dirk Hoffmann"
      }
    ],
    terms: {
      effective_date: "2022-01-01",
      expiration_date: "2022-12-31",
      confidentiality_period: "5 years",
      disclosure_period: "3 years"
    }
  };

  // State for each variation
  let collapsed1 = false;
  let collapsed2 = false;
  let collapsed3 = false;
  let collapsed4 = false;
  let collapsed5 = false;
</script>

<div class="showcase-container">
  <div class="showcase-header">
    <h1>Collapsible Header Showcase</h1>
    <p>Interactive variations demonstrating different approaches to collapsible contract headers</p>
    <div class="back-link">
      <Link to="/">← Back to Home</Link>
    </div>
  </div>

  <div class="variations-container">
    
    <!-- Variation 1: Top-Right Toggle with Smooth Height Transition -->
    <div class="variation-section">
      <div class="variation-header">
        <h2>Variation 1: Top-Right Toggle Button</h2>
        <p class="variation-description">Classic approach with toggle button in the title bar. Smooth height transition with fade effect.</p>
      </div>
      <div class="demo-frame">
        <div class="header-v1" class:collapsed={collapsed1}>
          <div class="v1-title-bar">
            <h3>{mockData.metadata.title}</h3>
            <div class="v1-title-right">
              <span class="status-badge draft">{mockData.metadata.status}</span>
              <span class="v1-code">{mockData.metadata.document_code}</span>
              <button class="v1-toggle-btn" on:click={() => collapsed1 = !collapsed1}>
                {#if collapsed1}
                  <ChevronDown size={16} />
                {:else}
                  <ChevronUp size={16} />
                {/if}
              </button>
            </div>
          </div>
          <div class="v1-content">
            <div class="v1-cards">
              <div class="v1-card">
                <div class="card-title">Document</div>
                <div class="card-content">
                  <div class="card-item"><span class="label">Type:</span> {mockData.metadata.type}</div>
                  <div class="card-item"><span class="label">Version:</span> {mockData.metadata.version}</div>
                </div>
              </div>
              <div class="v1-card v1-card-parties">
                <div class="card-title">Parties</div>
                <div class="card-content">
                  <div class="party-block">
                    <div class="party-name">{mockData.parties[0].party_name}</div>
                    <div class="party-detail">{mockData.parties[0].party_registered_office}</div>
                  </div>
                  <div class="party-divider"></div>
                  <div class="party-block">
                    <div class="party-name">{mockData.parties[1].party_name}</div>
                    <div class="party-detail">{mockData.parties[1].party_registered_office}</div>
                  </div>
                </div>
              </div>
              <div class="v1-card">
                <div class="card-title">Terms</div>
                <div class="card-content">
                  <div class="card-item"><span class="label">Period:</span> {mockData.terms.effective_date} to {mockData.terms.expiration_date}</div>
                  <div class="card-item"><span class="label">Confidentiality:</span> {mockData.terms.confidentiality_period}</div>
                </div>
              </div>
              <div class="v1-card">
                <div class="card-title">Legal</div>
                <div class="card-content">
                  <div class="card-item"><span class="label">Law:</span> {mockData.metadata.applicable_law}</div>
                  <div class="card-item"><span class="label">Venue:</span> {mockData.metadata.jurisdiction}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="use-case">
        <strong>Interaction:</strong> Click the chevron button in the top-right corner to toggle.
        <br><strong>Collapsed State:</strong> Shows only title bar (~35% height). Cards fade out smoothly.
        <br><strong>Best For:</strong> Users who want quick access to collapse without changing context.
      </div>
    </div>

    <!-- Variation 2: Icon-Based Toggle with Slide Animation -->
    <div class="variation-section">
      <div class="variation-header">
        <h2>Variation 2: Centered Icon Toggle with Slide</h2>
        <p class="variation-description">Prominent centered toggle button below title. Content slides up/down.</p>
      </div>
      <div class="demo-frame">
        <div class="header-v2" class:collapsed={collapsed2}>
          <div class="v2-title-bar">
            <h3>{mockData.metadata.title}</h3>
            <div class="v2-title-meta">
              <span class="status-badge draft">{mockData.metadata.status}</span>
              <span class="v2-code">{mockData.metadata.document_code}</span>
            </div>
          </div>
          <button class="v2-toggle-btn" on:click={() => collapsed2 = !collapsed2}>
            {#if collapsed2}
              <ChevronsDown size={18} />
              <span>Expand Details</span>
            {:else}
              <ChevronsUp size={18} />
              <span>Collapse</span>
            {/if}
          </button>
          <div class="v2-content">
            <div class="v2-cards">
              <div class="v2-card">
                <div class="card-title">Document</div>
                <div class="card-content">
                  <div class="card-item"><span class="label">Type:</span> {mockData.metadata.type}</div>
                  <div class="card-item"><span class="label">Version:</span> {mockData.metadata.version}</div>
                </div>
              </div>
              <div class="v2-card v2-card-parties">
                <div class="card-title">Parties</div>
                <div class="card-content">
                  <div class="party-block">
                    <div class="party-name">{mockData.parties[0].party_name}</div>
                    <div class="party-detail">{mockData.parties[0].party_registered_office}</div>
                  </div>
                  <div class="party-divider"></div>
                  <div class="party-block">
                    <div class="party-name">{mockData.parties[1].party_name}</div>
                    <div class="party-detail">{mockData.parties[1].party_registered_office}</div>
                  </div>
                </div>
              </div>
              <div class="v2-card">
                <div class="card-title">Terms</div>
                <div class="card-content">
                  <div class="card-item"><span class="label">Period:</span> {mockData.terms.effective_date} to {mockData.terms.expiration_date}</div>
                  <div class="card-item"><span class="label">Confidentiality:</span> {mockData.terms.confidentiality_period}</div>
                </div>
              </div>
              <div class="v2-card">
                <div class="card-title">Legal</div>
                <div class="card-content">
                  <div class="card-item"><span class="label">Law:</span> {mockData.metadata.applicable_law}</div>
                  <div class="card-item"><span class="label">Venue:</span> {mockData.metadata.jurisdiction}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="use-case">
        <strong>Interaction:</strong> Click the centered button with text label to toggle.
        <br><strong>Collapsed State:</strong> Title bar + toggle button visible (~35% height). Content slides up.
        <br><strong>Best For:</strong> Clear, discoverable interaction with explicit labeling.
      </div>
    </div>

    <!-- Variation 3: Condensed Summary Row When Collapsed -->
    <div class="variation-section">
      <div class="variation-header">
        <h2>Variation 3: Condensed Summary Row</h2>
        <p class="variation-description">When collapsed, shows a condensed single-row summary of key information.</p>
      </div>
      <div class="demo-frame">
        <div class="header-v3" class:collapsed={collapsed3}>
          <div class="v3-title-bar">
            <h3>{mockData.metadata.title}</h3>
            <div class="v3-title-right">
              <span class="status-badge draft">{mockData.metadata.status}</span>
              <button class="v3-toggle-btn" on:click={() => collapsed3 = !collapsed3}>
                {#if collapsed3}
                  <Maximize2 size={14} />
                {:else}
                  <Minimize2 size={14} />
                {/if}
              </button>
            </div>
          </div>
          {#if collapsed3}
            <div class="v3-summary">
              <span class="v3-summary-item">{mockData.metadata.type} v{mockData.metadata.version}</span>
              <span class="v3-summary-divider">•</span>
              <span class="v3-summary-item">{mockData.parties[0].party_name} ⟷ {mockData.parties[1].party_name}</span>
              <span class="v3-summary-divider">•</span>
              <span class="v3-summary-item">{mockData.terms.effective_date} to {mockData.terms.expiration_date}</span>
            </div>
          {:else}
            <div class="v3-content">
              <div class="v3-cards">
                <div class="v3-card">
                  <div class="card-title">Document</div>
                  <div class="card-content">
                    <div class="card-item"><span class="label">Type:</span> {mockData.metadata.type}</div>
                    <div class="card-item"><span class="label">Version:</span> {mockData.metadata.version}</div>
                  </div>
                </div>
                <div class="v3-card v3-card-parties">
                  <div class="card-title">Parties</div>
                  <div class="card-content">
                    <div class="party-block">
                      <div class="party-name">{mockData.parties[0].party_name}</div>
                      <div class="party-detail">{mockData.parties[0].party_registered_office}</div>
                    </div>
                    <div class="party-divider"></div>
                    <div class="party-block">
                      <div class="party-name">{mockData.parties[1].party_name}</div>
                      <div class="party-detail">{mockData.parties[1].party_registered_office}</div>
                    </div>
                  </div>
                </div>
                <div class="v3-card">
                  <div class="card-title">Terms</div>
                  <div class="card-content">
                    <div class="card-item"><span class="label">Period:</span> {mockData.terms.effective_date} to {mockData.terms.expiration_date}</div>
                    <div class="card-item"><span class="label">Confidentiality:</span> {mockData.terms.confidentiality_period}</div>
                  </div>
                </div>
                <div class="v3-card">
                  <div class="card-title">Legal</div>
                  <div class="card-content">
                    <div class="card-item"><span class="label">Law:</span> {mockData.metadata.applicable_law}</div>
                    <div class="card-item"><span class="label">Venue:</span> {mockData.metadata.jurisdiction}</div>
                  </div>
                </div>
              </div>
            </div>
          {/if}
        </div>
      </div>
      <div class="use-case">
        <strong>Interaction:</strong> Click the minimize/maximize icon in the title bar.
        <br><strong>Collapsed State:</strong> Shows condensed summary row with essential info (~35% height).
        <br><strong>Best For:</strong> Users who still need key information visible when collapsed.
      </div>
    </div>

    <!-- Variation 4: Double-Click Title Bar to Toggle -->
    <div class="variation-section">
      <div class="variation-header">
        <h2>Variation 4: Double-Click Title Bar</h2>
        <p class="variation-description">Double-click anywhere on the title bar to toggle. Subtle indicator shows it's interactive.</p>
      </div>
      <div class="demo-frame">
        <div class="header-v4" class:collapsed={collapsed4}>
          <div class="v4-title-bar" on:dblclick={() => collapsed4 = !collapsed4} role="button" tabindex="0" on:keydown={(e) => e.key === 'Enter' && (collapsed4 = !collapsed4)}>
            <h3>{mockData.metadata.title}</h3>
            <div class="v4-title-right">
              <span class="status-badge draft">{mockData.metadata.status}</span>
              <span class="v4-code">{mockData.metadata.document_code}</span>
              <span class="v4-hint">{collapsed4 ? '⬇' : '⬆'} double-click to {collapsed4 ? 'expand' : 'collapse'}</span>
            </div>
          </div>
          <div class="v4-content">
            <div class="v4-cards">
              <div class="v4-card">
                <div class="card-title">Document</div>
                <div class="card-content">
                  <div class="card-item"><span class="label">Type:</span> {mockData.metadata.type}</div>
                  <div class="card-item"><span class="label">Version:</span> {mockData.metadata.version}</div>
                </div>
              </div>
              <div class="v4-card v4-card-parties">
                <div class="card-title">Parties</div>
                <div class="card-content">
                  <div class="party-block">
                    <div class="party-name">{mockData.parties[0].party_name}</div>
                    <div class="party-detail">{mockData.parties[0].party_registered_office}</div>
                  </div>
                  <div class="party-divider"></div>
                  <div class="party-block">
                    <div class="party-name">{mockData.parties[1].party_name}</div>
                    <div class="party-detail">{mockData.parties[1].party_registered_office}</div>
                  </div>
                </div>
              </div>
              <div class="v4-card">
                <div class="card-title">Terms</div>
                <div class="card-content">
                  <div class="card-item"><span class="label">Period:</span> {mockData.terms.effective_date} to {mockData.terms.expiration_date}</div>
                  <div class="card-item"><span class="label">Confidentiality:</span> {mockData.terms.confidentiality_period}</div>
                </div>
              </div>
              <div class="v4-card">
                <div class="card-title">Legal</div>
                <div class="card-content">
                  <div class="card-item"><span class="label">Law:</span> {mockData.metadata.applicable_law}</div>
                  <div class="card-item"><span class="label">Venue:</span> {mockData.metadata.jurisdiction}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="use-case">
        <strong>Interaction:</strong> Double-click the title bar to toggle. Hint text shows current state.
        <br><strong>Collapsed State:</strong> Only title bar visible (~35% height). Clean, no extra buttons.
        <br><strong>Best For:</strong> Power users who prefer keyboard-free interaction.
      </div>
    </div>

    <!-- Variation 5: Hover-Reveal Toggle Button -->
    <div class="variation-section">
      <div class="variation-header">
        <h2>Variation 5: Hover-Reveal Toggle</h2>
        <p class="variation-description">Toggle button appears on hover over the header. Keeps UI clean when not needed.</p>
      </div>
      <div class="demo-frame">
        <div class="header-v5" class:collapsed={collapsed5}>
          <div class="v5-title-bar">
            <h3>{mockData.metadata.title}</h3>
            <div class="v5-title-right">
              <span class="status-badge draft">{mockData.metadata.status}</span>
              <span class="v5-code">{mockData.metadata.document_code}</span>
            </div>
            <button class="v5-toggle-btn" on:click={() => collapsed5 = !collapsed5}>
              {#if collapsed5}
                <ChevronDown size={16} />
              {:else}
                <ChevronUp size={16} />
              {/if}
            </button>
          </div>
          <div class="v5-content">
            <div class="v5-cards">
              <div class="v5-card">
                <div class="card-title">Document</div>
                <div class="card-content">
                  <div class="card-item"><span class="label">Type:</span> {mockData.metadata.type}</div>
                  <div class="card-item"><span class="label">Version:</span> {mockData.metadata.version}</div>
                </div>
              </div>
              <div class="v5-card v5-card-parties">
                <div class="card-title">Parties</div>
                <div class="card-content">
                  <div class="party-block">
                    <div class="party-name">{mockData.parties[0].party_name}</div>
                    <div class="party-detail">{mockData.parties[0].party_registered_office}</div>
                  </div>
                  <div class="party-divider"></div>
                  <div class="party-block">
                    <div class="party-name">{mockData.parties[1].party_name}</div>
                    <div class="party-detail">{mockData.parties[1].party_registered_office}</div>
                  </div>
                </div>
              </div>
              <div class="v5-card">
                <div class="card-title">Terms</div>
                <div class="card-content">
                  <div class="card-item"><span class="label">Period:</span> {mockData.terms.effective_date} to {mockData.terms.expiration_date}</div>
                  <div class="card-item"><span class="label">Confidentiality:</span> {mockData.terms.confidentiality_period}</div>
                </div>
              </div>
              <div class="v5-card">
                <div class="card-title">Legal</div>
                <div class="card-content">
                  <div class="card-item"><span class="label">Law:</span> {mockData.metadata.applicable_law}</div>
                  <div class="card-item"><span class="label">Venue:</span> {mockData.metadata.jurisdiction}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="use-case">
        <strong>Interaction:</strong> Hover over header to reveal toggle button, then click to toggle.
        <br><strong>Collapsed State:</strong> Only title bar visible (~35% height). Button hidden until hover.
        <br><strong>Best For:</strong> Minimalist UI that reveals controls only when needed.
      </div>
    </div>

  </div>
</div>

<style>
  /* Showcase Container */
  .showcase-container {
    min-height: 100vh;
    background-color: #fafafa;
    padding: 60px 40px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  }

  .showcase-header {
    max-width: 1400px;
    margin: 0 auto 60px;
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
    margin-bottom: 24px;
  }

  .back-link {
    margin-top: 20px;
  }

  .back-link :global(a) {
    color: #385757;
    text-decoration: none;
    font-size: 14px;
    font-weight: 300;
    transition: color 0.2s ease;
  }

  .back-link :global(a:hover) {
    color: #2d4545;
  }

  .variations-container {
    max-width: 1400px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 60px;
  }

  .variation-section {
    background: #ffffff;
    border: 1px solid #e5e5e5;
    overflow: hidden;
  }

  .variation-header {
    padding: 30px;
    border-bottom: 1px solid #e5e5e5;
    background: #fafafa;
  }

  .variation-header h2 {
    font-size: 24px;
    font-weight: 400;
    color: #385757;
    margin: 0 0 8px 0;
  }

  .variation-description {
    font-size: 14px;
    font-weight: 300;
    color: #666;
    margin: 0;
    line-height: 1.6;
  }

  .demo-frame {
    padding: 40px;
    background: #ffffff;
  }

  .use-case {
    padding: 20px 30px;
    background: #f5f9f9;
    border-top: 1px solid #e5e5e5;
    font-size: 13px;
    font-weight: 300;
    color: #666;
    line-height: 1.8;
  }

  /* Common Styles */
  .status-badge {
    padding: 4px 12px;
    border-radius: 2px;
    font-size: 11px;
    font-weight: 400;
    background-color: #f5f5f5;
    color: #666;
    border: 1px solid #e5e5e5;
  }

  .status-badge.draft {
    background-color: #fff3cd;
    color: #856404;
    border-color: #ffc107;
  }

  .card-title {
    font-size: 11px;
    font-weight: 600;
    color: #385757;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    margin-bottom: 12px;
  }

  .card-content {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .card-item {
    font-size: 12px;
    font-weight: 300;
    color: #1a1a1a;
  }

  .card-item .label {
    font-size: 11px;
    font-weight: 400;
    color: #666;
    letter-spacing: 0.3px;
  }

  .party-block {
    padding: 10px 0;
  }

  .party-divider {
    height: 1px;
    background: #e5e5e5;
    margin: 8px 0;
  }

  .party-name {
    font-size: 13px;
    font-weight: 500;
    color: #385757;
    margin-bottom: 6px;
  }

  .party-detail {
    font-size: 11px;
    font-weight: 300;
    color: #666;
    line-height: 1.5;
  }

  /* Variation 1: Top-Right Toggle */
  .header-v1 {
    background-color: #ffffff;
    border: 1px solid #e5e5e5;
    transition: all 0.3s ease;
    overflow: hidden;
  }

  .header-v1.collapsed {
    max-height: 70px;
  }

  .v1-title-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 30px;
    border-bottom: 2px solid #385757;
  }

  .v1-title-bar h3 {
    font-size: 20px;
    font-weight: 400;
    color: #385757;
    margin: 0;
  }

  .v1-title-right {
    display: flex;
    gap: 12px;
    align-items: center;
  }

  .v1-code {
    font-size: 11px;
    font-weight: 300;
    color: #666;
    font-family: 'Courier New', monospace;
  }

  .v1-toggle-btn {
    background: transparent;
    border: 1px solid #385757;
    border-radius: 2px;
    padding: 6px 8px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #385757;
    transition: all 0.2s ease;
  }

  .v1-toggle-btn:hover {
    background: #385757;
    color: white;
  }

  .v1-content {
    transition: opacity 0.3s ease, transform 0.3s ease;
    opacity: 1;
    transform: translateY(0);
  }

  .header-v1.collapsed .v1-content {
    opacity: 0;
    transform: translateY(-10px);
    pointer-events: none;
  }

  .v1-cards {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr 1fr;
    gap: 0;
  }

  .v1-card {
    padding: 20px;
    border-right: 1px solid #e5e5e5;
    background: #fafafa;
  }

  .v1-card:last-child {
    border-right: none;
  }

  .v1-card-parties {
    background: #f5f9f9;
    border-left: 2px solid #385757;
    border-right: 2px solid #385757;
  }

  /* Variation 2: Centered Icon Toggle */
  .header-v2 {
    background-color: #ffffff;
    border: 1px solid #e5e5e5;
    transition: all 0.3s ease;
    overflow: hidden;
  }

  .header-v2.collapsed {
    max-height: 110px;
  }

  .v2-title-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 30px;
    border-bottom: 2px solid #385757;
  }

  .v2-title-bar h3 {
    font-size: 20px;
    font-weight: 400;
    color: #385757;
    margin: 0;
  }

  .v2-title-meta {
    display: flex;
    gap: 12px;
    align-items: center;
  }

  .v2-code {
    font-size: 11px;
    font-weight: 300;
    color: #666;
    font-family: 'Courier New', monospace;
  }

  .v2-toggle-btn {
    width: 100%;
    background: #fafafa;
    border: none;
    border-bottom: 1px solid #e5e5e5;
    padding: 12px 20px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    color: #385757;
    font-size: 12px;
    font-weight: 400;
    transition: all 0.2s ease;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  }

  .v2-toggle-btn:hover {
    background: #f0f0f0;
  }

  .v2-content {
    transition: all 0.3s ease;
    max-height: 500px;
    opacity: 1;
  }

  .header-v2.collapsed .v2-content {
    max-height: 0;
    opacity: 0;
    overflow: hidden;
  }

  .v2-cards {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr 1fr;
    gap: 0;
  }

  .v2-card {
    padding: 20px;
    border-right: 1px solid #e5e5e5;
    background: #fafafa;
  }

  .v2-card:last-child {
    border-right: none;
  }

  .v2-card-parties {
    background: #f5f9f9;
    border-left: 2px solid #385757;
    border-right: 2px solid #385757;
  }

  /* Variation 3: Condensed Summary Row */
  .header-v3 {
    background-color: #ffffff;
    border: 1px solid #e5e5e5;
    transition: all 0.3s ease;
  }

  .v3-title-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 30px;
    border-bottom: 2px solid #385757;
  }

  .v3-title-bar h3 {
    font-size: 20px;
    font-weight: 400;
    color: #385757;
    margin: 0;
  }

  .v3-title-right {
    display: flex;
    gap: 12px;
    align-items: center;
  }

  .v3-toggle-btn {
    background: transparent;
    border: 1px solid #385757;
    border-radius: 2px;
    padding: 6px 8px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #385757;
    transition: all 0.2s ease;
  }

  .v3-toggle-btn:hover {
    background: #385757;
    color: white;
  }

  .v3-summary {
    padding: 16px 30px;
    background: #fafafa;
    border-bottom: 1px solid #e5e5e5;
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: 12px;
    color: #666;
    animation: slideDown 0.3s ease;
  }

  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .v3-summary-item {
    font-weight: 300;
    color: #1a1a1a;
  }

  .v3-summary-divider {
    color: #ccc;
  }

  .v3-content {
    animation: slideDown 0.3s ease;
  }

  .v3-cards {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr 1fr;
    gap: 0;
  }

  .v3-card {
    padding: 20px;
    border-right: 1px solid #e5e5e5;
    background: #fafafa;
  }

  .v3-card:last-child {
    border-right: none;
  }

  .v3-card-parties {
    background: #f5f9f9;
    border-left: 2px solid #385757;
    border-right: 2px solid #385757;
  }

  /* Variation 4: Double-Click Title Bar */
  .header-v4 {
    background-color: #ffffff;
    border: 1px solid #e5e5e5;
    transition: all 0.3s ease;
    overflow: hidden;
  }

  .header-v4.collapsed {
    max-height: 70px;
  }

  .v4-title-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 30px;
    border-bottom: 2px solid #385757;
    cursor: pointer;
    user-select: none;
    transition: background 0.2s ease;
  }

  .v4-title-bar:hover {
    background: #fafafa;
  }

  .v4-title-bar h3 {
    font-size: 20px;
    font-weight: 400;
    color: #385757;
    margin: 0;
  }

  .v4-title-right {
    display: flex;
    gap: 12px;
    align-items: center;
  }

  .v4-code {
    font-size: 11px;
    font-weight: 300;
    color: #666;
    font-family: 'Courier New', monospace;
  }

  .v4-hint {
    font-size: 10px;
    font-weight: 300;
    color: #999;
    font-style: italic;
  }

  .v4-content {
    transition: opacity 0.3s ease, max-height 0.3s ease;
    opacity: 1;
    max-height: 500px;
  }

  .header-v4.collapsed .v4-content {
    opacity: 0;
    max-height: 0;
    overflow: hidden;
  }

  .v4-cards {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr 1fr;
    gap: 0;
  }

  .v4-card {
    padding: 20px;
    border-right: 1px solid #e5e5e5;
    background: #fafafa;
  }

  .v4-card:last-child {
    border-right: none;
  }

  .v4-card-parties {
    background: #f5f9f9;
    border-left: 2px solid #385757;
    border-right: 2px solid #385757;
  }

  /* Variation 5: Hover-Reveal Toggle */
  .header-v5 {
    background-color: #ffffff;
    border: 1px solid #e5e5e5;
    transition: all 0.3s ease;
    overflow: hidden;
    position: relative;
  }

  .header-v5.collapsed {
    max-height: 70px;
  }

  .v5-title-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 30px;
    border-bottom: 2px solid #385757;
    position: relative;
  }

  .v5-title-bar h3 {
    font-size: 20px;
    font-weight: 400;
    color: #385757;
    margin: 0;
  }

  .v5-title-right {
    display: flex;
    gap: 12px;
    align-items: center;
  }

  .v5-code {
    font-size: 11px;
    font-weight: 300;
    color: #666;
    font-family: 'Courier New', monospace;
  }

  .v5-toggle-btn {
    position: absolute;
    right: 30px;
    top: 50%;
    transform: translateY(-50%);
    background: #385757;
    border: none;
    border-radius: 2px;
    padding: 6px 8px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    opacity: 0;
    transition: opacity 0.2s ease, background 0.2s ease;
    z-index: 10;
  }

  .header-v5:hover .v5-toggle-btn {
    opacity: 1;
  }

  .v5-toggle-btn:hover {
    background: #2d4545;
  }

  .v5-content {
    transition: opacity 0.3s ease, transform 0.3s ease;
    opacity: 1;
    transform: translateY(0);
  }

  .header-v5.collapsed .v5-content {
    opacity: 0;
    transform: translateY(-10px);
    pointer-events: none;
  }

  .v5-cards {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr 1fr;
    gap: 0;
  }

  .v5-card {
    padding: 20px;
    border-right: 1px solid #e5e5e5;
    background: #fafafa;
  }

  .v5-card:last-child {
    border-right: none;
  }

  .v5-card-parties {
    background: #f5f9f9;
    border-left: 2px solid #385757;
    border-right: 2px solid #385757;
  }
</style>

