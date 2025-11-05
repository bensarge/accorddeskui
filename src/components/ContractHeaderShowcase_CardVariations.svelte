<script>
  import { Link } from 'svelte-routing';
  
  // Mock contract data for showcase (same as condensed showcase)
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
</script>

<div class="showcase-container">
  <div class="showcase-header">
    <h1>Card Layout Variations</h1>
    <p>Exploring different information density levels in card-based layouts</p>
    <div class="back-link">
      <Link to="/showcase/contract-header">← Back to Showcase Index</Link>
    </div>
  </div>

  <div class="variations-container">
    
    <!-- Variation 1: Minimal Cards (3 cards) -->
    <div class="variation-section">
      <div class="variation-header">
        <h2>Variation 1: Minimal Cards (3 Cards)</h2>
        <p class="variation-description">Ultra-minimal approach with only the most essential fields. Maximum space efficiency.</p>
      </div>
      <div class="demo-frame">
        <div class="card-header-v1">
          <div class="v1-title-bar">
            <h3>{mockData.metadata.title}</h3>
            <div class="v1-title-meta">
              <span class="status-badge draft">{mockData.metadata.status}</span>
              <span class="v1-code">{mockData.metadata.document_code}</span>
            </div>
          </div>
          <div class="v1-cards">
            <div class="v1-card">
              <div class="v1-card-title">Document</div>
              <div class="v1-card-content">
                <div class="v1-item"><span class="label">Type:</span> {mockData.metadata.type}</div>
                <div class="v1-item"><span class="label">Version:</span> {mockData.metadata.version}</div>
              </div>
            </div>
            <div class="v1-card">
              <div class="v1-card-title">Parties</div>
              <div class="v1-card-content">
                <div class="v1-item"><span class="label">Party 1:</span> {mockData.parties[0].party_name}</div>
                <div class="v1-item"><span class="label">Party 2:</span> {mockData.parties[1].party_name}</div>
              </div>
            </div>
            <div class="v1-card">
              <div class="v1-card-title">Term</div>
              <div class="v1-card-content">
                <div class="v1-item"><span class="label">Period:</span> {mockData.terms.effective_date} to {mockData.terms.expiration_date}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="use-case">
        <strong>Use Case:</strong> Best for experienced users who need quick overview. Minimal vertical space usage.
        <br><strong>Fields Shown:</strong> 5 total fields (Type, Version, 2 Party Names, Term Period)
        <br><strong>Height:</strong> ~120px total
      </div>
    </div>

    <!-- Variation 2: Standard Cards (4 cards) -->
    <div class="variation-section">
      <div class="variation-header">
        <h2>Variation 2: Standard Cards (4 Cards)</h2>
        <p class="variation-description">Balanced information density with key fields organized into logical groups.</p>
      </div>
      <div class="demo-frame">
        <div class="card-header-v2">
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
        <strong>Use Case:</strong> Ideal balance for most users. Good scanability with adequate detail.
        <br><strong>Fields Shown:</strong> 9 total fields across 4 logical categories
        <br><strong>Height:</strong> ~140px total
      </div>
    </div>

    <!-- Variation 3: Detailed Cards (4 cards with more info) -->
    <div class="variation-section">
      <div class="variation-header">
        <h2>Variation 3: Detailed Cards (4 Cards, Enhanced)</h2>
        <p class="variation-description">More comprehensive information with additional fields and party details.</p>
      </div>
      <div class="demo-frame">
        <div class="card-header-v3">
          <div class="v3-title-bar">
            <h3>{mockData.metadata.title}</h3>
            <div class="v3-title-meta">
              <span class="status-badge draft">{mockData.metadata.status}</span>
              <span class="v3-code">{mockData.metadata.document_code}</span>
            </div>
          </div>
          <div class="v3-cards">
            <div class="v3-card">
              <div class="v3-card-title">Document Info</div>
              <div class="v3-card-content">
                <div class="v3-item"><span class="label">Type:</span> {mockData.metadata.type}</div>
                <div class="v3-item"><span class="label">Version:</span> {mockData.metadata.version}</div>
                <div class="v3-item"><span class="label">Author:</span> {mockData.metadata.author}</div>
                <div class="v3-item"><span class="label">Created:</span> {mockData.metadata.created_date}</div>
                <div class="v3-item"><span class="label">Modified:</span> {mockData.metadata.last_modified}</div>
              </div>
            </div>
            <div class="v3-card">
              <div class="v3-card-title">Parties</div>
              <div class="v3-card-content">
                <div class="v3-party-block">
                  <div class="v3-party-name">{mockData.parties[0].party_name}</div>
                  <div class="v3-party-rep">Rep: {mockData.parties[0].party_represented_by}</div>
                </div>
                <div class="v3-party-block">
                  <div class="v3-party-name">{mockData.parties[1].party_name}</div>
                  <div class="v3-party-rep">Rep: {mockData.parties[1].party_represented_by}</div>
                </div>
              </div>
            </div>
            <div class="v3-card">
              <div class="v3-card-title">Terms</div>
              <div class="v3-card-content">
                <div class="v3-item"><span class="label">Effective:</span> {mockData.terms.effective_date}</div>
                <div class="v3-item"><span class="label">Expiration:</span> {mockData.terms.expiration_date}</div>
                <div class="v3-item"><span class="label">Confidentiality:</span> {mockData.terms.confidentiality_period}</div>
                <div class="v3-item"><span class="label">Disclosure:</span> {mockData.terms.disclosure_period}</div>
              </div>
            </div>
            <div class="v3-card">
              <div class="v3-card-title">Legal</div>
              <div class="v3-card-content">
                <div class="v3-item"><span class="label">Language:</span> {mockData.metadata.language}</div>
                <div class="v3-item"><span class="label">Law:</span> {mockData.metadata.applicable_law}</div>
                <div class="v3-item"><span class="label">Jurisdiction:</span> {mockData.metadata.jurisdiction}</div>
                <div class="v3-item"><span class="label">Scope:</span> {mockData.terms.confidential_information_scope}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="use-case">
        <strong>Use Case:</strong> For users who need more context without opening additional views. Includes party representatives.
        <br><strong>Fields Shown:</strong> 15 total fields with enhanced party information
        <br><strong>Height:</strong> ~180px total
      </div>
    </div>

    <!-- Variation 4: Expanded Cards (6 cards, maximum info) -->
    <div class="variation-section">
      <div class="variation-header">
        <h2>Variation 4: Expanded Cards (6 Cards, Maximum Detail)</h2>
        <p class="variation-description">Maximum information density with all available fields distributed across 6 specialized cards.</p>
      </div>
      <div class="demo-frame">
        <div class="card-header-v4">
          <div class="v4-title-bar">
            <h3>{mockData.metadata.title}</h3>
            <div class="v4-title-meta">
              <span class="status-badge draft">{mockData.metadata.status}</span>
              <span class="v4-code">{mockData.metadata.document_code}</span>
            </div>
          </div>
          <div class="v4-cards-row1">
            <div class="v4-card">
              <div class="v4-card-title">Document</div>
              <div class="v4-card-content">
                <div class="v4-item"><span class="label">Type:</span> {mockData.metadata.type}</div>
                <div class="v4-item"><span class="label">Version:</span> {mockData.metadata.version}</div>
                <div class="v4-item"><span class="label">Identifier:</span> {mockData.metadata.identifier}</div>
              </div>
            </div>
            <div class="v4-card">
              <div class="v4-card-title">Authorship</div>
              <div class="v4-card-content">
                <div class="v4-item"><span class="label">Author:</span> {mockData.metadata.author}</div>
                <div class="v4-item"><span class="label">Created:</span> {mockData.metadata.created_date}</div>
                <div class="v4-item"><span class="label">Modified:</span> {mockData.metadata.last_modified}</div>
              </div>
            </div>
            <div class="v4-card">
              <div class="v4-card-title">Party 1</div>
              <div class="v4-card-content">
                <div class="v4-item"><span class="label">Name:</span> {mockData.parties[0].party_name}</div>
                <div class="v4-item"><span class="label">Office:</span> {mockData.parties[0].party_registered_office}</div>
                <div class="v4-item"><span class="label">Rep. by:</span> {mockData.parties[0].party_represented_by}</div>
              </div>
            </div>
          </div>
          <div class="v4-cards-row2">
            <div class="v4-card">
              <div class="v4-card-title">Party 2</div>
              <div class="v4-card-content">
                <div class="v4-item"><span class="label">Name:</span> {mockData.parties[1].party_name}</div>
                <div class="v4-item"><span class="label">Office:</span> {mockData.parties[1].party_registered_office}</div>
                <div class="v4-item"><span class="label">Rep. by:</span> {mockData.parties[1].party_represented_by}</div>
              </div>
            </div>
            <div class="v4-card">
              <div class="v4-card-title">Terms</div>
              <div class="v4-card-content">
                <div class="v4-item"><span class="label">Effective:</span> {mockData.terms.effective_date}</div>
                <div class="v4-item"><span class="label">Expiration:</span> {mockData.terms.expiration_date}</div>
                <div class="v4-item"><span class="label">Confidentiality:</span> {mockData.terms.confidentiality_period}</div>
              </div>
            </div>
            <div class="v4-card">
              <div class="v4-card-title">Legal Framework</div>
              <div class="v4-card-content">
                <div class="v4-item"><span class="label">Language:</span> {mockData.metadata.language}</div>
                <div class="v4-item"><span class="label">Law:</span> {mockData.metadata.applicable_law}</div>
                <div class="v4-item"><span class="label">Jurisdiction:</span> {mockData.metadata.jurisdiction}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="use-case">
        <strong>Use Case:</strong> Comprehensive view for detailed review. All information visible at once. Best for contract review workflows.
        <br><strong>Fields Shown:</strong> 18 total fields with complete party addresses
        <br><strong>Height:</strong> ~240px total (2 rows of 3 cards)
      </div>
    </div>

    <!-- Variation 5: Mixed Density (4 cards with varying detail) -->
    <div class="variation-section">
      <div class="variation-header">
        <h2>Variation 5: Mixed Density (Prioritized Information)</h2>
        <p class="variation-description">Strategic information hierarchy - critical cards get more detail, supporting cards stay minimal.</p>
      </div>
      <div class="demo-frame">
        <div class="card-header-v5">
          <div class="v5-title-bar">
            <h3>{mockData.metadata.title}</h3>
            <div class="v5-title-meta">
              <span class="status-badge draft">{mockData.metadata.status}</span>
              <span class="v5-code">{mockData.metadata.document_code}</span>
            </div>
          </div>
          <div class="v5-cards">
            <!-- Minimal card -->
            <div class="v5-card v5-card-minimal">
              <div class="v5-card-title">Document</div>
              <div class="v5-card-content">
                <div class="v5-item"><span class="label">Type:</span> {mockData.metadata.type}</div>
                <div class="v5-item"><span class="label">Version:</span> {mockData.metadata.version}</div>
              </div>
            </div>
            <!-- Detailed card (emphasized) -->
            <div class="v5-card v5-card-detailed">
              <div class="v5-card-title">Parties</div>
              <div class="v5-card-content">
                <div class="v5-party-block">
                  <div class="v5-party-name">{mockData.parties[0].party_name}</div>
                  <div class="v5-party-detail">{mockData.parties[0].party_registered_office}</div>
                  <div class="v5-party-rep">Rep: {mockData.parties[0].party_represented_by}</div>
                </div>
                <div class="v5-party-divider"></div>
                <div class="v5-party-block">
                  <div class="v5-party-name">{mockData.parties[1].party_name}</div>
                  <div class="v5-party-detail">{mockData.parties[1].party_registered_office}</div>
                  <div class="v5-party-rep">Rep: {mockData.parties[1].party_represented_by}</div>
                </div>
              </div>
            </div>
            <!-- Standard card -->
            <div class="v5-card v5-card-standard">
              <div class="v5-card-title">Terms</div>
              <div class="v5-card-content">
                <div class="v5-item"><span class="label">Period:</span> {mockData.terms.effective_date} to {mockData.terms.expiration_date}</div>
                <div class="v5-item"><span class="label">Confidentiality:</span> {mockData.terms.confidentiality_period}</div>
                <div class="v5-item"><span class="label">Disclosure:</span> {mockData.terms.disclosure_period}</div>
              </div>
            </div>
            <!-- Minimal card -->
            <div class="v5-card v5-card-minimal">
              <div class="v5-card-title">Legal</div>
              <div class="v5-card-content">
                <div class="v5-item"><span class="label">Law:</span> {mockData.metadata.applicable_law}</div>
                <div class="v5-item"><span class="label">Venue:</span> {mockData.metadata.jurisdiction}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="use-case">
        <strong>Use Case:</strong> Emphasizes party information (most important for NDAs) while keeping other info accessible but compact.
        <br><strong>Fields Shown:</strong> 13 total fields with strategic emphasis on parties
        <br><strong>Height:</strong> ~200px total (parties card is taller)
        <br><strong>Strategy:</strong> Parties card gets 2x width and full details; Document/Legal cards stay minimal
      </div>
    </div>

    <!-- Variation 6: Condensed Grid (5 cards, compact) -->
    <div class="variation-section">
      <div class="variation-header">
        <h2>Variation 6: Condensed Grid (5 Cards, Compact)</h2>
        <p class="variation-description">More cards with less information per card. Optimized for quick scanning of specific categories.</p>
      </div>
      <div class="demo-frame">
        <div class="card-header-v6">
          <div class="v6-title-bar">
            <h3>{mockData.metadata.title}</h3>
            <div class="v6-title-meta">
              <span class="status-badge draft">{mockData.metadata.status}</span>
              <span class="v6-code">{mockData.metadata.document_code}</span>
            </div>
          </div>
          <div class="v6-cards">
            <div class="v6-card">
              <div class="v6-card-title">Type</div>
              <div class="v6-card-content">
                <div class="v6-value">{mockData.metadata.type}</div>
                <div class="v6-subvalue">v{mockData.metadata.version}</div>
              </div>
            </div>
            <div class="v6-card">
              <div class="v6-card-title">Party 1</div>
              <div class="v6-card-content">
                <div class="v6-value">{mockData.parties[0].party_name}</div>
                <div class="v6-subvalue">{mockData.parties[0].party_represented_by}</div>
              </div>
            </div>
            <div class="v6-card">
              <div class="v6-card-title">Party 2</div>
              <div class="v6-card-content">
                <div class="v6-value">{mockData.parties[1].party_name}</div>
                <div class="v6-subvalue">{mockData.parties[1].party_represented_by}</div>
              </div>
            </div>
            <div class="v6-card">
              <div class="v6-card-title">Term</div>
              <div class="v6-card-content">
                <div class="v6-value">{mockData.terms.effective_date}</div>
                <div class="v6-subvalue">to {mockData.terms.expiration_date}</div>
              </div>
            </div>
            <div class="v6-card">
              <div class="v6-card-title">Jurisdiction</div>
              <div class="v6-card-content">
                <div class="v6-value">{mockData.metadata.jurisdiction}</div>
                <div class="v6-subvalue">{mockData.metadata.applicable_law} Law</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="use-case">
        <strong>Use Case:</strong> Ultra-scannable layout. Each card focuses on one key concept. Great for quick status checks.
        <br><strong>Fields Shown:</strong> 10 total fields (2 per card: primary value + supporting detail)
        <br><strong>Height:</strong> ~130px total
        <br><strong>Strategy:</strong> Each card shows one primary value with one supporting detail
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

  /* Variation 1: Minimal Cards (3 cards) */
  .card-header-v1 {
    background: #ffffff;
    border: 1px solid #e5e5e5;
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

  .v1-title-meta {
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

  .v1-cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0;
  }

  .v1-card {
    padding: 18px 24px;
    border-right: 1px solid #e5e5e5;
  }

  .v1-card:last-child {
    border-right: none;
  }

  .v1-card-title {
    font-size: 11px;
    font-weight: 600;
    color: #385757;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    margin-bottom: 10px;
  }

  .v1-card-content {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  .v1-item {
    font-size: 12px;
    font-weight: 300;
    color: #1a1a1a;
  }

  .v1-item .label {
    color: #999;
  }

  /* Variation 2: Standard Cards (4 cards) */
  .card-header-v2 {
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

  /* Variation 3: Detailed Cards */
  .card-header-v3 {
    background: #ffffff;
    border: 1px solid #e5e5e5;
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

  .v3-title-meta {
    display: flex;
    gap: 12px;
    align-items: center;
  }

  .v3-code {
    font-size: 11px;
    font-weight: 300;
    color: #666;
    font-family: 'Courier New', monospace;
  }

  .v3-cards {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 0;
  }

  .v3-card {
    padding: 20px;
    border-right: 1px solid #e5e5e5;
  }

  .v3-card:last-child {
    border-right: none;
  }

  .v3-card-title {
    font-size: 11px;
    font-weight: 600;
    color: #385757;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    margin-bottom: 12px;
  }

  .v3-card-content {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .v3-item {
    font-size: 12px;
    font-weight: 300;
    color: #1a1a1a;
  }

  .v3-item .label {
    color: #999;
  }

  .v3-party-block {
    padding: 8px 0;
    border-bottom: 1px solid #f0f0f0;
  }

  .v3-party-block:last-child {
    border-bottom: none;
  }

  .v3-party-name {
    font-size: 12px;
    font-weight: 400;
    color: #1a1a1a;
    margin-bottom: 4px;
  }

  .v3-party-rep {
    font-size: 11px;
    font-weight: 300;
    color: #999;
  }

  /* Variation 4: Expanded Cards (6 cards, 2 rows) */
  .card-header-v4 {
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

  .v4-title-meta {
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

  .v4-cards-row1,
  .v4-cards-row2 {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0;
  }

  .v4-cards-row1 {
    border-bottom: 1px solid #e5e5e5;
  }

  .v4-card {
    padding: 20px;
    border-right: 1px solid #e5e5e5;
  }

  .v4-card:last-child {
    border-right: none;
  }

  .v4-card-title {
    font-size: 11px;
    font-weight: 600;
    color: #385757;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    margin-bottom: 12px;
  }

  .v4-card-content {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .v4-item {
    font-size: 12px;
    font-weight: 300;
    color: #1a1a1a;
    line-height: 1.5;
  }

  .v4-item .label {
    color: #999;
  }

  /* Variation 5: Mixed Density */
  .card-header-v5 {
    background: #ffffff;
    border: 1px solid #e5e5e5;
  }

  .v5-title-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 30px;
    border-bottom: 2px solid #385757;
  }

  .v5-title-bar h3 {
    font-size: 20px;
    font-weight: 400;
    color: #385757;
    margin: 0;
  }

  .v5-title-meta {
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

  .v5-cards {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr 1fr;
    gap: 0;
  }

  .v5-card {
    padding: 20px;
    border-right: 1px solid #e5e5e5;
  }

  .v5-card:last-child {
    border-right: none;
  }

  .v5-card-minimal {
    background: #fafafa;
  }

  .v5-card-detailed {
    background: #f5f9f9;
    border-left: 2px solid #385757;
    border-right: 2px solid #385757;
  }

  .v5-card-standard {
    background: #ffffff;
  }

  .v5-card-title {
    font-size: 11px;
    font-weight: 600;
    color: #385757;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    margin-bottom: 12px;
  }

  .v5-card-detailed .v5-card-title {
    font-size: 12px;
    margin-bottom: 16px;
  }

  .v5-card-content {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .v5-item {
    font-size: 12px;
    font-weight: 300;
    color: #1a1a1a;
  }

  .v5-item .label {
    color: #999;
  }

  .v5-party-block {
    padding: 10px 0;
  }

  .v5-party-divider {
    height: 1px;
    background: #e5e5e5;
    margin: 8px 0;
  }

  .v5-party-name {
    font-size: 13px;
    font-weight: 500;
    color: #385757;
    margin-bottom: 6px;
  }

  .v5-party-detail {
    font-size: 11px;
    font-weight: 300;
    color: #666;
    line-height: 1.5;
    margin-bottom: 4px;
  }

  .v5-party-rep {
    font-size: 11px;
    font-weight: 300;
    color: #999;
  }

  /* Variation 6: Condensed Grid (5 cards) */
  .card-header-v6 {
    background: #ffffff;
    border: 1px solid #e5e5e5;
  }

  .v6-title-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 30px;
    border-bottom: 2px solid #385757;
  }

  .v6-title-bar h3 {
    font-size: 20px;
    font-weight: 400;
    color: #385757;
    margin: 0;
  }

  .v6-title-meta {
    display: flex;
    gap: 12px;
    align-items: center;
  }

  .v6-code {
    font-size: 11px;
    font-weight: 300;
    color: #666;
    font-family: 'Courier New', monospace;
  }

  .v6-cards {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 0;
  }

  .v6-card {
    padding: 18px 16px;
    border-right: 1px solid #e5e5e5;
    text-align: center;
  }

  .v6-card:last-child {
    border-right: none;
  }

  .v6-card-title {
    font-size: 10px;
    font-weight: 600;
    color: #385757;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    margin-bottom: 10px;
  }

  .v6-card-content {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .v6-value {
    font-size: 13px;
    font-weight: 400;
    color: #1a1a1a;
    line-height: 1.3;
  }

  .v6-subvalue {
    font-size: 11px;
    font-weight: 300;
    color: #999;
    line-height: 1.3;
  }
</style>

