<script>
  import TableOfContents from '../components/ContractViewer/TableOfContents.svelte';
  import ContractWording from '../components/ContractViewer/ContractWording.svelte';
  import contractData from '../mockData/sales_english_short.js';
  import { Minimize2, Maximize2 } from 'lucide-svelte';

  let selectedClauseId = null;
  let contractWordingElement;
  let tocElement;
  let headerCollapsed = false;

  function handleTOCSelect(clauseId) {
    selectedClauseId = clauseId;
    // Scroll contract wording to the selected clause
    if (contractWordingElement) {
      const element = contractWordingElement.querySelector(`[data-clause-id="${clauseId}"]`);
      if (element) {
        // Use requestAnimationFrame to ensure DOM is fully rendered before scrolling
        requestAnimationFrame(() => {
          // Get the sticky header element and its height
          const stickyHeader = contractWordingElement.querySelector('.clause-headers');
          const headerHeight = stickyHeader ? stickyHeader.offsetHeight : 0;

          // Calculate the element's position relative to the scroll container
          const elementRect = element.getBoundingClientRect();
          const containerRect = contractWordingElement.getBoundingClientRect();

          // Calculate the target scroll position
          // We want the element to appear just below the sticky header
          const targetScrollTop = contractWordingElement.scrollTop +
                                  elementRect.top -
                                  containerRect.top -
                                  headerHeight -
                                  10; // 10px additional offset for visual spacing

          // Perform smooth scroll
          contractWordingElement.scrollTo({
            top: targetScrollTop,
            behavior: 'smooth'
          });
        });
      }
    }
  }

  function handleClauseSelect(clauseId) {
    selectedClauseId = clauseId;
    // Note: TOC selection is now only updated by direct user clicks on TOC items
    // Scrolling through clause rows no longer updates the TOC selection
  }
</script>

<div class="contract-viewer">
  <!-- Left Sidebar: Table of Contents -->
  <div class="toc-sidebar">
    <TableOfContents 
      bind:this={tocElement}
      {contractData} 
      {selectedClauseId}
      onSelect={handleTOCSelect}
    />
  </div>

  <!-- Main Content Area -->
  <div class="main-area">
    <!-- Contract Header: Collapsible with Condensed Summary Row -->
    <div class="contract-header" class:collapsed={headerCollapsed}>
      <div class="header-title-bar">
        <h3>{contractData.metadata.title}</h3>
        <div class="header-title-meta">
          <span class="status-badge {contractData.metadata.status.toLowerCase()}">{contractData.metadata.status}</span>
          <button class="header-toggle-btn" on:click={() => headerCollapsed = !headerCollapsed}>
            {#if headerCollapsed}
              <Maximize2 size={14} />
            {:else}
              <Minimize2 size={14} />
            {/if}
          </button>
        </div>
      </div>
      {#if headerCollapsed}
        <div class="header-summary">
          <span class="summary-item">{contractData.metadata.type} v{contractData.metadata.version}</span>
          <span class="summary-divider">•</span>
          <span class="summary-item">{contractData.parties[0].party_name} ⟷ {contractData.parties[1].party_name}</span>
          <span class="summary-divider">•</span>
          <span class="summary-item">{contractData.terms.effective_date} to {contractData.terms.expiration_date}</span>
        </div>
      {:else}
        <div class="header-cards">
        <!-- Card 1: Document (Minimal) -->
        <div class="header-card card-minimal">
          <div class="card-title">Document</div>
          <div class="card-content">
            <div class="card-item"><span class="label">Type:</span> {contractData.metadata.type}</div>
            <div class="card-item"><span class="label">Version:</span> {contractData.metadata.version}</div>
          </div>
        </div>

        <!-- Card 2: Parties (Detailed, 2x width) -->
        <div class="header-card card-detailed">
          <div class="card-title">Parties</div>
          <div class="card-content">
            <div class="party-block">
              <div class="party-name">{contractData.parties[0].party_name}</div>
              <div class="party-detail">{contractData.parties[0].party_registered_office}</div>
              <div class="party-rep">Rep: {contractData.parties[0].party_represented_by}</div>
            </div>
            <div class="party-divider"></div>
            <div class="party-block">
              <div class="party-name">{contractData.parties[1].party_name}</div>
              <div class="party-detail">{contractData.parties[1].party_registered_office}</div>
              <div class="party-rep">Rep: {contractData.parties[1].party_represented_by}</div>
            </div>
          </div>
        </div>

        <!-- Card 3: Terms (Standard) -->
        <div class="header-card card-standard">
          <div class="card-title">Terms</div>
          <div class="card-content">
            <div class="card-item"><span class="label">Period:</span> {contractData.terms.effective_date} to {contractData.terms.expiration_date}</div>
            <div class="card-item"><span class="label">Confidentiality:</span> {contractData.terms.confidentiality_period}</div>
            <div class="card-item"><span class="label">Disclosure:</span> {contractData.terms.disclosure_period}</div>
          </div>
        </div>

        <!-- Card 4: Legal (Minimal) -->
        <div class="header-card card-minimal">
          <div class="card-title">Legal</div>
          <div class="card-content">
            <div class="card-item"><span class="label">Law:</span> {contractData.metadata.applicable_law}</div>
            <div class="card-item"><span class="label">Venue:</span> {contractData.metadata.jurisdiction}</div>
          </div>
        </div>
      </div>
      {/if}
    </div>

    <!-- Contract Content Section -->
    <div
      class="wording-section"
      bind:this={contractWordingElement}
    >
      <ContractWording
        {contractData}
        {selectedClauseId}
        onSelect={handleClauseSelect}
      />
    </div>
  </div>
</div>

<style>
  .contract-viewer {
    display: flex;
    width: 100%;
    height: 100vh;
    background-color: #fafafa;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  }

  .toc-sidebar {
    width: 300px;
    background-color: #385757;
    border-right: 1px solid #e5e5e5;
    overflow-y: auto;
    flex-shrink: 0;
  }

  .main-area {
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }

  /* Contract Header: Collapsible with Condensed Summary Row */
  .contract-header {
    background-color: #ffffff;
    border: 1px solid #e5e5e5;
    border-bottom: 2px solid #e5e5e5;
    transition: all 0.3s ease;
    position: relative;
    z-index: 25;
  }

  .header-title-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 30px;
    border-bottom: 2px solid #385757;
  }

  .header-title-bar h3 {
    font-size: 20px;
    font-weight: 400;
    color: #385757;
    margin: 0;
  }

  .header-title-meta {
    display: flex;
    gap: 12px;
    align-items: center;
  }

  .header-toggle-btn {
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

  .header-toggle-btn:hover {
    background: #385757;
    color: white;
  }

  .header-summary {
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

  .summary-item {
    font-weight: 300;
    color: #1a1a1a;
  }

  .summary-divider {
    color: #ccc;
  }

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

  .status-badge.active {
    background-color: #d4edda;
    color: #155724;
    border-color: #28a745;
  }

  .status-badge.archived {
    background-color: #e2e3e5;
    color: #383d41;
    border-color: #6c757d;
  }

  .header-cards {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr 1fr;
    gap: 0;
    animation: slideDown 0.3s ease;
  }

  .header-card {
    padding: 20px;
    border-right: 1px solid #e5e5e5;
  }

  .header-card:last-child {
    border-right: none;
  }

  .card-minimal {
    background: #fafafa;
  }

  .card-detailed {
    background: #f5f9f9;
    border-left: 2px solid #385757;
    border-right: 2px solid #385757;
  }

  .card-standard {
    background: #ffffff;
  }

  .card-title {
    font-size: 11px;
    font-weight: 600;
    color: #385757;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    margin-bottom: 12px;
  }

  .card-detailed .card-title {
    font-size: 12px;
    margin-bottom: 16px;
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
    margin-bottom: 4px;
  }

  .party-rep {
    font-size: 11px;
    font-weight: 300;
    color: #999;
  }

  .wording-section {
    flex: 1;
    background-color: #ffffff;
    padding-left: 40px;
    padding-right: 40px;
    overflow-y: auto;
  }

  /* Scrollbar styling */
  .toc-sidebar::-webkit-scrollbar,
  .wording-section::-webkit-scrollbar {
    width: 8px;
  }

  .toc-sidebar::-webkit-scrollbar-track,
  .wording-section::-webkit-scrollbar-track {
    background: transparent;
  }

  .toc-sidebar::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.3);
    border-radius: 4px;
  }

  .wording-section::-webkit-scrollbar-thumb {
    background: #d0d0d0;
    border-radius: 4px;
  }

  .toc-sidebar::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 255, 255, 0.5);
  }

  .wording-section::-webkit-scrollbar-thumb:hover {
    background: #385757;
  }
</style>

