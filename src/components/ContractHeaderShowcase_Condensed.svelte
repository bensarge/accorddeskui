<script>
  import { Link } from 'svelte-routing';
  
  // Mock contract data for showcase
  const mockData = {
    metadata: {
      title: "Non-Disclosure Agreement",
      type: "NDA",
      identifier: "English, bilateral",
      version: "0.2",
      status: "Draft",
      created_date: "2020-11-23",
      last_modified: "2020-12-02",
      document_code: "c-20-ad-1-nda-1",
      author: "Michael Zollner",
      language: "EN",
      applicable_law: "GER",
      jurisdiction: "Munich",
      note: "Michael Zollner, 02.12.20: This NDA draft is based on a template"
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
      disclosure_period: "3 years",
      penalty: null,
      confidential_information_scope: "comprehensive"
    }
  };

  // State for interactive variations
  let activeTab = 'metadata';
  let metadataExpanded = true;
  let partiesExpanded = true;
  let termsExpanded = false;
</script>

<div class="showcase-container">
  <div class="showcase-header">
    <h1>Condensed Header Layouts</h1>
    <p>Space-efficient single-section layouts combining metadata and party information</p>
    <div class="back-link">
      <Link to="/showcase/contract-header">← Back to Showcase Index</Link>
    </div>
  </div>

  <div class="variations-container">
    
    <!-- Variation 1: Horizontal Split Layout -->
    <div class="variation-section">
      <div class="variation-header">
        <h2>Variation 1: Horizontal Split Layout</h2>
        <p class="variation-description">Metadata on the left, parties and terms on the right. Clean two-column approach.</p>
      </div>
      <div class="demo-frame">
        <div class="header-v1">
          <div class="v1-left">
            <div class="v1-title-row">
              <h3>{mockData.metadata.title}</h3>
              <span class="status-badge draft">{mockData.metadata.status}</span>
            </div>
            <div class="v1-meta-grid">
              <div class="v1-meta-item">
                <span class="label">Type:</span>
                <span class="value">{mockData.metadata.type}</span>
              </div>
              <div class="v1-meta-item">
                <span class="label">Version:</span>
                <span class="value">{mockData.metadata.version}</span>
              </div>
              <div class="v1-meta-item">
                <span class="label">Code:</span>
                <span class="value">{mockData.metadata.document_code}</span>
              </div>
              <div class="v1-meta-item">
                <span class="label">Author:</span>
                <span class="value">{mockData.metadata.author}</span>
              </div>
              <div class="v1-meta-item">
                <span class="label">Created:</span>
                <span class="value">{mockData.metadata.created_date}</span>
              </div>
              <div class="v1-meta-item">
                <span class="label">Modified:</span>
                <span class="value">{mockData.metadata.last_modified}</span>
              </div>
            </div>
          </div>
          <div class="v1-divider"></div>
          <div class="v1-right">
            <div class="v1-parties">
              <div class="v1-party">
                <span class="party-label">Party 1:</span>
                <span class="party-name">{mockData.parties[0].party_name}</span>
              </div>
              <div class="v1-party">
                <span class="party-label">Party 2:</span>
                <span class="party-name">{mockData.parties[1].party_name}</span>
              </div>
            </div>
            <div class="v1-terms">
              <div class="v1-term-item">
                <span class="label">Term:</span>
                <span class="value">{mockData.terms.effective_date} to {mockData.terms.expiration_date}</span>
              </div>
              <div class="v1-term-item">
                <span class="label">Confidentiality:</span>
                <span class="value">{mockData.terms.confidentiality_period}</span>
              </div>
              <div class="v1-term-item">
                <span class="label">Jurisdiction:</span>
                <span class="value">{mockData.metadata.jurisdiction}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="use-case">
        <strong>Use Case:</strong> Best for wide screens where horizontal space is abundant. 
        Provides clear visual separation between contract metadata and party/term information.
        <br><strong>Height Savings:</strong> ~40% reduction from original two-section layout.
      </div>
    </div>

    <!-- Variation 2: Compact Card Grid -->
    <div class="variation-section">
      <div class="variation-header">
        <h2>Variation 2: Compact Card Grid</h2>
        <p class="variation-description">Information organized in compact cards with visual grouping.</p>
      </div>
      <div class="demo-frame">
        <div class="header-v2">
          <div class="v2-title-bar">
            <h3>{mockData.metadata.title}</h3>
            <div class="v2-title-meta">
              <span class="status-badge draft">{mockData.metadata.status}</span>
              <span class="v2-code">{mockData.metadata.document_code}</span>
            </div>
          </div>
          <div class="v2-cards">
            <div class="v2-card">
              <div class="v2-card-title">Document Info</div>
              <div class="v2-card-content">
                <div class="v2-item"><span class="label">Type:</span> {mockData.metadata.type}</div>
                <div class="v2-item"><span class="label">Version:</span> {mockData.metadata.version}</div>
                <div class="v2-item"><span class="label">Author:</span> {mockData.metadata.author}</div>
              </div>
            </div>
            <div class="v2-card">
              <div class="v2-card-title">Parties</div>
              <div class="v2-card-content">
                <div class="v2-item"><span class="label">Party 1:</span> {mockData.parties[0].party_name}</div>
                <div class="v2-item"><span class="label">Party 2:</span> {mockData.parties[1].party_name}</div>
              </div>
            </div>
            <div class="v2-card">
              <div class="v2-card-title">Terms</div>
              <div class="v2-card-content">
                <div class="v2-item"><span class="label">Period:</span> {mockData.terms.effective_date} to {mockData.terms.expiration_date}</div>
                <div class="v2-item"><span class="label">Confidentiality:</span> {mockData.terms.confidentiality_period}</div>
              </div>
            </div>
            <div class="v2-card">
              <div class="v2-card-title">Legal</div>
              <div class="v2-card-content">
                <div class="v2-item"><span class="label">Law:</span> {mockData.metadata.applicable_law}</div>
                <div class="v2-item"><span class="label">Venue:</span> {mockData.metadata.jurisdiction}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="use-case">
        <strong>Use Case:</strong> Excellent for scanability. Cards provide visual grouping and make it easy to locate specific information categories.
        <br><strong>Height Savings:</strong> ~35% reduction with improved information hierarchy.
      </div>
    </div>

    <!-- Variation 3: Tabbed Interface -->
    <div class="variation-section">
      <div class="variation-header">
        <h2>Variation 3: Tabbed Interface</h2>
        <p class="variation-description">Interactive tabs to switch between metadata, parties, and terms.</p>
      </div>
      <div class="demo-frame">
        <div class="header-v3">
          <div class="v3-title-bar">
            <h3>{mockData.metadata.title}</h3>
            <span class="status-badge draft">{mockData.metadata.status}</span>
          </div>
          <div class="v3-tabs">
            <button
              class="v3-tab"
              class:active={activeTab === 'metadata'}
              on:click={() => activeTab = 'metadata'}
            >
              Metadata
            </button>
            <button
              class="v3-tab"
              class:active={activeTab === 'parties'}
              on:click={() => activeTab = 'parties'}
            >
              Parties
            </button>
            <button
              class="v3-tab"
              class:active={activeTab === 'terms'}
              on:click={() => activeTab = 'terms'}
            >
              Terms & Legal
            </button>
          </div>
          <div class="v3-content">
            {#if activeTab === 'metadata'}
              <div class="v3-grid">
                <div class="v3-item"><span class="label">Type:</span> {mockData.metadata.type}</div>
                <div class="v3-item"><span class="label">Version:</span> {mockData.metadata.version}</div>
                <div class="v3-item"><span class="label">Code:</span> {mockData.metadata.document_code}</div>
                <div class="v3-item"><span class="label">Author:</span> {mockData.metadata.author}</div>
                <div class="v3-item"><span class="label">Created:</span> {mockData.metadata.created_date}</div>
                <div class="v3-item"><span class="label">Modified:</span> {mockData.metadata.last_modified}</div>
              </div>
            {:else if activeTab === 'parties'}
              <div class="v3-grid">
                <div class="v3-party-block">
                  <div class="v3-party-title">Party 1</div>
                  <div class="v3-item"><span class="label">Name:</span> {mockData.parties[0].party_name}</div>
                  <div class="v3-item"><span class="label">Office:</span> {mockData.parties[0].party_registered_office}</div>
                  <div class="v3-item"><span class="label">Rep. by:</span> {mockData.parties[0].party_represented_by}</div>
                </div>
                <div class="v3-party-block">
                  <div class="v3-party-title">Party 2</div>
                  <div class="v3-item"><span class="label">Name:</span> {mockData.parties[1].party_name}</div>
                  <div class="v3-item"><span class="label">Office:</span> {mockData.parties[1].party_registered_office}</div>
                  <div class="v3-item"><span class="label">Rep. by:</span> {mockData.parties[1].party_represented_by}</div>
                </div>
              </div>
            {:else}
              <div class="v3-grid">
                <div class="v3-item"><span class="label">Effective:</span> {mockData.terms.effective_date}</div>
                <div class="v3-item"><span class="label">Expiration:</span> {mockData.terms.expiration_date}</div>
                <div class="v3-item"><span class="label">Confidentiality:</span> {mockData.terms.confidentiality_period}</div>
                <div class="v3-item"><span class="label">Disclosure:</span> {mockData.terms.disclosure_period}</div>
                <div class="v3-item"><span class="label">Law:</span> {mockData.metadata.applicable_law}</div>
                <div class="v3-item"><span class="label">Jurisdiction:</span> {mockData.metadata.jurisdiction}</div>
              </div>
            {/if}
          </div>
        </div>
      </div>
      <div class="use-case">
        <strong>Use Case:</strong> Maximum vertical space savings. Users can switch between information categories as needed.
        Best when users typically focus on one category at a time.
        <br><strong>Height Savings:</strong> ~60% reduction - most space-efficient option.
      </div>
    </div>

    <!-- Variation 4: Collapsible Accordion -->
    <div class="variation-section">
      <div class="variation-header">
        <h2>Variation 4: Collapsible Accordion</h2>
        <p class="variation-description">Expandable sections allow users to show/hide information as needed.</p>
      </div>
      <div class="demo-frame">
        <div class="header-v4">
          <div class="v4-title-bar">
            <h3>{mockData.metadata.title}</h3>
            <span class="status-badge draft">{mockData.metadata.status}</span>
          </div>

          <div class="v4-accordion">
            <button
              class="v4-accordion-header"
              class:expanded={metadataExpanded}
              on:click={() => metadataExpanded = !metadataExpanded}
            >
              <span class="v4-accordion-title">Document Metadata</span>
              <span class="v4-accordion-icon">{metadataExpanded ? '−' : '+'}</span>
            </button>
            {#if metadataExpanded}
              <div class="v4-accordion-content">
                <div class="v4-grid">
                  <div class="v4-item"><span class="label">Type:</span> {mockData.metadata.type}</div>
                  <div class="v4-item"><span class="label">Version:</span> {mockData.metadata.version}</div>
                  <div class="v4-item"><span class="label">Code:</span> {mockData.metadata.document_code}</div>
                  <div class="v4-item"><span class="label">Author:</span> {mockData.metadata.author}</div>
                  <div class="v4-item"><span class="label">Created:</span> {mockData.metadata.created_date}</div>
                  <div class="v4-item"><span class="label">Modified:</span> {mockData.metadata.last_modified}</div>
                </div>
              </div>
            {/if}
          </div>

          <div class="v4-accordion">
            <button
              class="v4-accordion-header"
              class:expanded={partiesExpanded}
              on:click={() => partiesExpanded = !partiesExpanded}
            >
              <span class="v4-accordion-title">Parties</span>
              <span class="v4-accordion-icon">{partiesExpanded ? '−' : '+'}</span>
            </button>
            {#if partiesExpanded}
              <div class="v4-accordion-content">
                <div class="v4-parties-grid">
                  <div class="v4-party-block">
                    <div class="v4-party-label">Party 1</div>
                    <div class="v4-party-name">{mockData.parties[0].party_name}</div>
                    <div class="v4-party-detail">{mockData.parties[0].party_registered_office}</div>
                  </div>
                  <div class="v4-party-block">
                    <div class="v4-party-label">Party 2</div>
                    <div class="v4-party-name">{mockData.parties[1].party_name}</div>
                    <div class="v4-party-detail">{mockData.parties[1].party_registered_office}</div>
                  </div>
                </div>
              </div>
            {/if}
          </div>

          <div class="v4-accordion">
            <button
              class="v4-accordion-header"
              class:expanded={termsExpanded}
              on:click={() => termsExpanded = !termsExpanded}
            >
              <span class="v4-accordion-title">Terms & Legal</span>
              <span class="v4-accordion-icon">{termsExpanded ? '−' : '+'}</span>
            </button>
            {#if termsExpanded}
              <div class="v4-accordion-content">
                <div class="v4-grid">
                  <div class="v4-item"><span class="label">Effective:</span> {mockData.terms.effective_date}</div>
                  <div class="v4-item"><span class="label">Expiration:</span> {mockData.terms.expiration_date}</div>
                  <div class="v4-item"><span class="label">Confidentiality:</span> {mockData.terms.confidentiality_period}</div>
                  <div class="v4-item"><span class="label">Disclosure:</span> {mockData.terms.disclosure_period}</div>
                  <div class="v4-item"><span class="label">Law:</span> {mockData.metadata.applicable_law}</div>
                  <div class="v4-item"><span class="label">Jurisdiction:</span> {mockData.metadata.jurisdiction}</div>
                </div>
              </div>
            {/if}
          </div>
        </div>
      </div>
      <div class="use-case">
        <strong>Use Case:</strong> Flexible space management. Users can expand only the sections they need.
        Great for power users who want control over information visibility.
        <br><strong>Height Savings:</strong> ~50% reduction when sections are collapsed, customizable by user.
      </div>
    </div>

    <!-- Variation 5: Inline Horizontal Flow -->
    <div class="variation-section">
      <div class="variation-header">
        <h2>Variation 5: Inline Horizontal Flow</h2>
        <p class="variation-description">Ultra-compact single-row layout with key information flowing horizontally.</p>
      </div>
      <div class="demo-frame">
        <div class="header-v5">
          <div class="v5-main-row">
            <h3>{mockData.metadata.title}</h3>
            <span class="v5-separator">|</span>
            <span class="status-badge draft">{mockData.metadata.status}</span>
            <span class="v5-separator">|</span>
            <span class="v5-info"><span class="label">Type:</span> {mockData.metadata.type}</span>
            <span class="v5-separator">|</span>
            <span class="v5-info"><span class="label">Version:</span> {mockData.metadata.version}</span>
            <span class="v5-separator">|</span>
            <span class="v5-info"><span class="label">Code:</span> {mockData.metadata.document_code}</span>
          </div>
          <div class="v5-secondary-row">
            <span class="v5-info"><span class="label">Party 1:</span> {mockData.parties[0].party_name}</span>
            <span class="v5-separator">•</span>
            <span class="v5-info"><span class="label">Party 2:</span> {mockData.parties[1].party_name}</span>
            <span class="v5-separator">•</span>
            <span class="v5-info"><span class="label">Term:</span> {mockData.terms.effective_date} to {mockData.terms.expiration_date}</span>
            <span class="v5-separator">•</span>
            <span class="v5-info"><span class="label">Jurisdiction:</span> {mockData.metadata.jurisdiction}</span>
          </div>
        </div>
      </div>
      <div class="use-case">
        <strong>Use Case:</strong> Extreme space efficiency for wide screens. Best when vertical space is at absolute premium.
        May require horizontal scrolling on smaller screens.
        <br><strong>Height Savings:</strong> ~70% reduction - ultra-compact option.
      </div>
    </div>

    <!-- Variation 6: Minimal Single-Row Header -->
    <div class="variation-section">
      <div class="variation-header">
        <h2>Variation 6: Minimal Single-Row Header</h2>
        <p class="variation-description">Absolute minimum - title, status, and essential info only.</p>
      </div>
      <div class="demo-frame">
        <div class="header-v6">
          <div class="v6-left">
            <h3>{mockData.metadata.title}</h3>
            <span class="v6-meta">{mockData.metadata.type} • v{mockData.metadata.version} • {mockData.metadata.document_code}</span>
          </div>
          <div class="v6-center">
            <div class="v6-parties">
              <span class="v6-party">{mockData.parties[0].party_name}</span>
              <span class="v6-arrow">⟷</span>
              <span class="v6-party">{mockData.parties[1].party_name}</span>
            </div>
          </div>
          <div class="v6-right">
            <span class="status-badge draft">{mockData.metadata.status}</span>
            <span class="v6-date">{mockData.metadata.last_modified}</span>
          </div>
        </div>
      </div>
      <div class="use-case">
        <strong>Use Case:</strong> Minimalist approach showing only critical information.
        Best for experienced users who don't need detailed metadata visible at all times.
        Could be paired with a "Show Details" button.
        <br><strong>Height Savings:</strong> ~75% reduction - most minimal option.
      </div>
    </div>

  </div>
</div>

<style>
  .showcase-container {
    min-height: 100vh;
    background-color: #fafafa;
    padding: 60px 40px;
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
    color: #385757;
  }

  .showcase-header p {
    font-size: 16px;
    font-weight: 300;
    color: #666;
    margin-bottom: 24px;
  }

  .back-link :global(a) {
    font-size: 14px;
    font-weight: 300;
    color: #666;
    text-decoration: none;
    transition: color 0.2s ease;
  }

  .back-link :global(a:hover) {
    color: #385757;
  }

  .variations-container {
    max-width: 1400px;
    margin: 0 auto;
  }

  .variation-section {
    margin-bottom: 80px;
    background: #ffffff;
    border: 1px solid #e5e5e5;
    padding: 40px;
  }

  .variation-header {
    margin-bottom: 30px;
  }

  .variation-header h2 {
    font-size: 24px;
    font-weight: 400;
    color: #385757;
    margin-bottom: 8px;
  }

  .variation-description {
    font-size: 14px;
    font-weight: 300;
    color: #666;
    line-height: 1.6;
  }

  .demo-frame {
    background: #fafafa;
    border: 1px solid #e5e5e5;
    padding: 30px;
    margin-bottom: 20px;
  }

  .use-case {
    font-size: 13px;
    font-weight: 300;
    color: #666;
    line-height: 1.7;
    padding: 20px;
    background: #f9f9f9;
    border-left: 3px solid #385757;
  }

  .use-case strong {
    color: #385757;
    font-weight: 400;
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

  .label {
    font-size: 11px;
    font-weight: 400;
    color: #666;
    letter-spacing: 0.3px;
  }

  .value {
    font-size: 12px;
    font-weight: 300;
    color: #1a1a1a;
  }

  /* Variation 1: Horizontal Split */
  .header-v1 {
    display: grid;
    grid-template-columns: 1fr 1px 1fr;
    gap: 40px;
    background: #ffffff;
    padding: 30px;
    border: 1px solid #e5e5e5;
  }

  .v1-title-row {
    display: flex;
    align-items: center;
    gap: 16px;
    margin-bottom: 20px;
  }

  .v1-title-row h3 {
    font-size: 20px;
    font-weight: 400;
    color: #385757;
    margin: 0;
  }

  .v1-meta-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 12px 20px;
  }

  .v1-meta-item {
    display: flex;
    gap: 8px;
    align-items: baseline;
  }

  .v1-divider {
    background: #e5e5e5;
    width: 1px;
  }

  .v1-parties {
    margin-bottom: 20px;
  }

  .v1-party {
    padding: 12px 0;
    border-bottom: 1px solid #f0f0f0;
  }

  .v1-party:last-child {
    border-bottom: none;
  }

  .party-label {
    font-size: 11px;
    font-weight: 600;
    color: #385757;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    display: block;
    margin-bottom: 4px;
  }

  .party-name {
    font-size: 14px;
    font-weight: 300;
    color: #1a1a1a;
  }

  .v1-terms {
    display: grid;
    grid-template-columns: 1fr;
    gap: 10px;
  }

  .v1-term-item {
    display: flex;
    gap: 8px;
    align-items: baseline;
  }

  /* Variation 2: Compact Card Grid */
  .header-v2 {
    background: #ffffff;
    border: 1px solid #e5e5e5;
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

  .v2-cards {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 0;
  }

  .v2-card {
    padding: 20px;
    border-right: 1px solid #e5e5e5;
  }

  .v2-card:last-child {
    border-right: none;
  }

  .v2-card-title {
    font-size: 11px;
    font-weight: 600;
    color: #385757;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    margin-bottom: 12px;
  }

  .v2-card-content {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .v2-item {
    font-size: 12px;
    font-weight: 300;
    color: #1a1a1a;
  }

  .v2-item .label {
    color: #999;
  }

  /* Variation 3: Tabbed Interface */
  .header-v3 {
    background: #ffffff;
    border: 1px solid #e5e5e5;
  }

  .v3-title-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 30px;
    border-bottom: 1px solid #e5e5e5;
  }

  .v3-title-bar h3 {
    font-size: 20px;
    font-weight: 400;
    color: #385757;
    margin: 0;
  }

  .v3-tabs {
    display: flex;
    border-bottom: 2px solid #e5e5e5;
  }

  .v3-tab {
    flex: 1;
    padding: 12px 20px;
    background: #fafafa;
    border: none;
    border-right: 1px solid #e5e5e5;
    font-size: 12px;
    font-weight: 400;
    color: #666;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .v3-tab:last-child {
    border-right: none;
  }

  .v3-tab:hover {
    background: #f0f0f0;
  }

  .v3-tab.active {
    background: #ffffff;
    color: #385757;
    border-bottom: 2px solid #385757;
    margin-bottom: -2px;
  }

  .v3-content {
    padding: 25px 30px;
  }

  .v3-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 15px 30px;
  }

  .v3-item {
    display: flex;
    gap: 8px;
    align-items: baseline;
  }

  .v3-party-block {
    grid-column: span 1;
  }

  .v3-party-title {
    font-size: 12px;
    font-weight: 600;
    color: #385757;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    margin-bottom: 12px;
  }

  /* Variation 4: Collapsible Accordion */
  .header-v4 {
    background: #ffffff;
    border: 1px solid #e5e5e5;
  }

  .v4-title-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 30px;
    border-bottom: 2px solid #385757;
  }

  .v4-title-bar h3 {
    font-size: 20px;
    font-weight: 400;
    color: #385757;
    margin: 0;
  }

  .v4-accordion {
    border-bottom: 1px solid #e5e5e5;
  }

  .v4-accordion:last-child {
    border-bottom: none;
  }

  .v4-accordion-header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 30px;
    background: #fafafa;
    border: none;
    cursor: pointer;
    transition: background 0.2s ease;
  }

  .v4-accordion-header:hover {
    background: #f0f0f0;
  }

  .v4-accordion-header.expanded {
    background: #f5f5f5;
  }

  .v4-accordion-title {
    font-size: 12px;
    font-weight: 600;
    color: #385757;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  .v4-accordion-icon {
    font-size: 18px;
    color: #385757;
    font-weight: 300;
  }

  .v4-accordion-content {
    padding: 20px 30px;
    background: #ffffff;
  }

  .v4-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 12px 30px;
  }

  .v4-item {
    display: flex;
    gap: 8px;
    align-items: baseline;
  }

  .v4-parties-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
  }

  .v4-party-block {
    padding: 15px;
    background: #fafafa;
    border-left: 3px solid #385757;
  }

  .v4-party-label {
    font-size: 11px;
    font-weight: 600;
    color: #385757;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    margin-bottom: 8px;
  }

  .v4-party-name {
    font-size: 14px;
    font-weight: 400;
    color: #1a1a1a;
    margin-bottom: 6px;
  }

  .v4-party-detail {
    font-size: 11px;
    font-weight: 300;
    color: #666;
    line-height: 1.5;
  }

  /* Variation 5: Inline Horizontal Flow */
  .header-v5 {
    background: #ffffff;
    border: 1px solid #e5e5e5;
    padding: 20px 30px;
  }

  .v5-main-row {
    display: flex;
    align-items: center;
    gap: 16px;
    margin-bottom: 12px;
    flex-wrap: wrap;
  }

  .v5-main-row h3 {
    font-size: 18px;
    font-weight: 400;
    color: #385757;
    margin: 0;
  }

  .v5-secondary-row {
    display: flex;
    align-items: center;
    gap: 16px;
    flex-wrap: wrap;
  }

  .v5-separator {
    color: #d0d0d0;
    font-size: 12px;
  }

  .v5-info {
    font-size: 12px;
    font-weight: 300;
    color: #1a1a1a;
    white-space: nowrap;
  }

  .v5-info .label {
    color: #999;
  }

  /* Variation 6: Minimal Single-Row */
  .header-v6 {
    background: #ffffff;
    border: 1px solid #e5e5e5;
    padding: 20px 30px;
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    gap: 30px;
    align-items: center;
  }

  .v6-left h3 {
    font-size: 18px;
    font-weight: 400;
    color: #385757;
    margin: 0 0 6px 0;
  }

  .v6-meta {
    font-size: 11px;
    font-weight: 300;
    color: #999;
  }

  .v6-center {
    display: flex;
    justify-content: center;
  }

  .v6-parties {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .v6-party {
    font-size: 12px;
    font-weight: 400;
    color: #1a1a1a;
  }

  .v6-arrow {
    color: #385757;
    font-size: 14px;
  }

  .v6-right {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 16px;
  }

  .v6-date {
    font-size: 11px;
    font-weight: 300;
    color: #999;
  }
</style>

