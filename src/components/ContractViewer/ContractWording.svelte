<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="">
  <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600;700&display=swap" rel="stylesheet">
</svelte:head>

<script lang="ts">
  import { onMount } from 'svelte';
  import type { ContractData } from '../../types';

  export let contractData: ContractData;
  export let selectedClauseId: string | null = null;
  export let onSelect: (clauseId: string) => void = () => {};

  let textMode: 'wrapped' | 'truncated' = 'wrapped';

  // Variables to track resizing
  let resizing: string | null = null;
  let startX: number = 0;

  onMount(() => {
    const root = document.documentElement;

    // Calculate initial responsive column widths
    const headerSection = document.querySelector('.clause-headers');
    if (headerSection) {
      const containerWidth = headerSection.getBoundingClientRect().width;
      const initialClauseWidth = 500;
      const remainingSpace = Math.max(0, containerWidth - initialClauseWidth);
      const infoColumnWidth = remainingSpace / 4;

      // Set initial column widths with responsive distribution
      root.style.setProperty('--clause-width', initialClauseWidth + 'px');
      root.style.setProperty('--neg-width', infoColumnWidth + 'px');
      root.style.setProperty('--acc-width', infoColumnWidth + 'px');
      root.style.setProperty('--app-width', infoColumnWidth + 'px');
      root.style.setProperty('--negotiable-width', infoColumnWidth + 'px');
    } else {
      // Fallback to fixed widths if header not found
      root.style.setProperty('--clause-width', '500px');
      root.style.setProperty('--neg-width', '120px');
      root.style.setProperty('--acc-width', '120px');
      root.style.setProperty('--app-width', '120px');
      root.style.setProperty('--negotiable-width', '120px');
    }

    updateSeparatorPositions();
    renderSeparators();
    setupResizing();

    // Update on window resize and scroll
    const handleResize = () => {
      // Recalculate column widths on window resize to maintain responsive distribution
      const headerSection = document.querySelector('.clause-headers');
      if (headerSection) {
        const containerWidth = headerSection.getBoundingClientRect().width;
        const styles = getComputedStyle(root);
        const clauseWidth = parseFloat(styles.getPropertyValue('--clause-width').trim());
        const remainingSpace = Math.max(0, containerWidth - clauseWidth);
        const infoColumnWidth = remainingSpace / 4;

        root.style.setProperty('--neg-width', infoColumnWidth + 'px');
        root.style.setProperty('--acc-width', infoColumnWidth + 'px');
        root.style.setProperty('--app-width', infoColumnWidth + 'px');
        root.style.setProperty('--negotiable-width', infoColumnWidth + 'px');
      }
      updateSeparatorPositions();
    };

    window.addEventListener('resize', handleResize);

    // Find the scrollable parent (.wording-section)
    const scrollContainer = document.querySelector('.wording-section');
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', updateSeparatorPositions);
    }

    return () => {
      window.removeEventListener('resize', handleResize);
      if (scrollContainer) {
        scrollContainer.removeEventListener('scroll', updateSeparatorPositions);
      }
    };
  });

  function updateSeparatorPositions(): void {
    const root = document.documentElement;
    const headerSection = document.querySelector('.clause-headers');

    if (!headerSection) return;

    // Get the container's left offset and top position
    const containerRect = headerSection.getBoundingClientRect();
    const containerLeft = containerRect.left;
    const containerTop = containerRect.top;

    // Parse current clause width
    const styles = getComputedStyle(root);
    const clauseWidthStr = styles.getPropertyValue('--clause-width').trim();
    const clauseWidth = parseFloat(clauseWidthStr);

    // Calculate separator 1 position (between clause text and info columns)
    const sep1Pos = containerLeft + clauseWidth;

    root.style.setProperty('--sep-1-pos', sep1Pos + 'px');
    root.style.setProperty('--sep-top', containerTop + 'px');
  }

  function renderSeparators(): void {
    const container = document.getElementById('separatorsContainer');
    if (!container) return;

    container.innerHTML = `
      <div class="separator separator-1" data-separator="1"></div>
    `;
  }

  function setupResizing(): void {
    const separators = document.querySelectorAll('.separator');
    const root = document.documentElement;

    separators.forEach(sep => {
      sep.addEventListener('mousedown', (e: Event) => {
        const mouseEvent = e as MouseEvent;
        if (mouseEvent.button !== 0) return;
        mouseEvent.preventDefault();

        const htmlElement = sep as HTMLElement;
        resizing = htmlElement.dataset['separator'] || null;
        startX = mouseEvent.clientX;

        const styles = getComputedStyle(root);
        const clauseWidth = parseFloat(styles.getPropertyValue('--clause-width').trim());

        // Get header section position and width once at start
        const headerSection = document.querySelector('.clause-headers');
        if (!headerSection) return;
        const containerRect = headerSection.getBoundingClientRect();
        const containerLeft = containerRect.left;
        const containerTop = containerRect.top;
        const containerWidth = containerRect.width;

        // Set the top position for separators
        root.style.setProperty('--sep-top', containerTop + 'px');

        const onMouseMove = (moveEvent: MouseEvent): void => {
          const delta = moveEvent.clientX - startX;

          if (resizing === '1') {
            // Minimum width constraints
            const MIN_CLAUSE_WIDTH = 400;
            const MIN_INFO_COLUMN_WIDTH = 95;
            const INFO_COLUMNS_COUNT = 4;

            // Calculate maximum clause width (ensure info columns have at least 90px each)
            const maxClauseWidth = containerWidth - (MIN_INFO_COLUMN_WIDTH * INFO_COLUMNS_COUNT);

            // Calculate new clause width with minimum and maximum constraints
            const newClauseWidth = Math.max(MIN_CLAUSE_WIDTH, Math.min(maxClauseWidth, clauseWidth + delta));

            // Calculate remaining space for info columns (fill entire width)
            const remainingSpace = Math.max(0, containerWidth - newClauseWidth);

            // Each info column gets equal share of remaining space
            // This will be at least 90px due to the maxClauseWidth constraint
            const infoColumnWidth = remainingSpace / INFO_COLUMNS_COUNT;

            // Update all column widths
            root.style.setProperty('--clause-width', newClauseWidth + 'px');
            root.style.setProperty('--neg-width', infoColumnWidth + 'px');
            root.style.setProperty('--acc-width', infoColumnWidth + 'px');
            root.style.setProperty('--app-width', infoColumnWidth + 'px');
            root.style.setProperty('--negotiable-width', infoColumnWidth + 'px');

            // Update separator position
            const sep1Pos = containerLeft + newClauseWidth;
            root.style.setProperty('--sep-1-pos', sep1Pos + 'px');
          }
        };

        const onMouseUp = (): void => {
          resizing = null;
          document.removeEventListener('mousemove', onMouseMove);
          document.removeEventListener('mouseup', onMouseUp);
        };

        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
      });
    });
  }

  function handleClauseClick(id: number, type: string): void {
    const clauseId = `${type}-${id}`;
    onSelect(clauseId);
  }

  function isSelected(id: number, type: string): boolean {
    return selectedClauseId === `${type}-${id}`;
  }

  interface ClauseInfo {
    negotiation: string;
    accountable: string;
    approval: boolean;
    negotiable: boolean;
  }

  function getClauseInfo(item: any, type: string): ClauseInfo {
    if (type === 'preamble') {
      return {
        negotiation: item.preamble_status || '—',
        accountable: item.preamble_accountable || '—',
        approval: item.preamble_approval || false,
        negotiable: item.preamble_negotiable || false
      };
    } else if (type === 'definition') {
      return {
        negotiation: item.def_status || '—',
        accountable: item.def_accountable || '—',
        approval: item.def_approval || false,
        negotiable: item.def_negotiable || false
      };
    } else if (type === 'clause') {
      return {
        negotiation: item.cla_short || '—',
        accountable: item.cla_accountable || '—',
        approval: item.cla_approval || false,
        negotiable: item.cla_negotiable || false
      };
    }
    return { negotiation: '—', accountable: '—', approval: false, negotiable: false };
  }
</script>

<div class="contract-wording">
  <!-- Column Headers -->
  <div class="clause-headers">
    <div class="header-wording-container">
      <div class="header-wording">Contract Wording</div>
      <div class="text-mode-toggle">
        <button
          class="toggle-btn"
          class:active={textMode === 'wrapped'}
          on:click={() => (textMode = 'wrapped')}
          title="Wrapped text mode"
        >
          Wrapped
        </button>
        <button
          class="toggle-btn"
          class:active={textMode === 'truncated'}
          on:click={() => (textMode = 'truncated')}
          title="Truncated text mode"
        >
          Truncated
        </button>
      </div>
    </div>
    <div class="info-column">Negotiation</div>
    <div class="info-column">Accountable</div>
    <div class="info-column">Approval</div>
    <div class="info-column">Negotiable</div>
  </div>

  <!-- Preamble Section -->
  <div class="section-container">
    <h2 class="section-header">A. Preamble</h2>
    {#each contractData.preamble as item (item.preamble_index)}
      {@const info = getClauseInfo(item, 'preamble')}
      <div
        class="clause-row"
        class:selected={isSelected(item.preamble_index, 'preamble')}
        class:truncated-mode={textMode === 'truncated'}
        data-clause-id="preamble-{item.preamble_index}"
        on:click={() => handleClauseClick(item.preamble_index, 'preamble')}
        role="button"
        tabindex="0"
        on:keydown={(e) => e.key === 'Enter' && handleClauseClick(item.preamble_index, 'preamble')}
      >
        <div class="clause-text-item">
          <div class="clause preamble-clause">
            <div class="clause-header">
              <div class="clause-number">{item.preamble_point}</div>
            </div>
            <div class="clause-content-text" class:truncated={textMode === 'truncated'} contenteditable="true">
              {@html item.preamble_text}
            </div>
          </div>
        </div>
        <div class="info-cell">{info.negotiation}</div>
        <div class="info-cell">{info.accountable}</div>
        <div class="info-cell approval-cell">
          <span class="approval-badge" class:approved={info.approval}>
            {info.approval ? '✓' : '✗'}
          </span>
        </div>
        <div class="info-cell negotiable-cell">
          <span class="negotiable-badge" class:negotiable={info.negotiable}>
            {info.negotiable ? 'Yes' : 'No'}
          </span>
        </div>
      </div>
    {/each}
  </div>

  <!-- Definitions Section -->
  <div class="section-container">
    <h2 class="section-header">B. Definitions and Interpretations</h2>
    {#each contractData.definitions as item (item.def_index)}
      {@const info = getClauseInfo(item, 'definition')}
      <div
        class="clause-row"
        class:selected={isSelected(item.def_index, 'definition')}
        class:truncated-mode={textMode === 'truncated'}
        data-clause-id="definition-{item.def_index}"
        on:click={() => handleClauseClick(item.def_index, 'definition')}
        role="button"
        tabindex="0"
        on:keydown={(e) => e.key === 'Enter' && handleClauseClick(item.def_index, 'definition')}
      >
        <div class="clause-text-item">
          <div class="clause definition-clause">
            <div class="clause-header">
              <div class="clause-number">{item.def_point}</div>
              <div class="clause-title">{item.def_key}</div>
            </div>
            <div class="clause-content-text" class:truncated={textMode === 'truncated'} contenteditable="true">
              {@html item.def_value}
            </div>
          </div>
        </div>
        <div class="info-cell">{info.negotiation}</div>
        <div class="info-cell">{info.accountable}</div>
        <div class="info-cell approval-cell">
          <span class="approval-badge" class:approved={info.approval}>
            {info.approval ? '✓' : '✗'}
          </span>
        </div>
        <div class="info-cell negotiable-cell">
          <span class="negotiable-badge" class:negotiable={info.negotiable}>
            {info.negotiable ? 'Yes' : 'No'}
          </span>
        </div>
      </div>
    {/each}
  </div>

  <!-- Main Clauses Section -->
  <div class="section-container">
    <h2 class="section-header">C. Main Clauses</h2>
    {#each contractData.clauses as item (item.cla_index)}
      {@const info = getClauseInfo(item, 'clause')}
      <div
        class="clause-row"
        class:selected={isSelected(item.cla_index, 'clause')}
        class:truncated-mode={textMode === 'truncated'}
        data-clause-id="clause-{item.cla_index}"
        on:click={() => handleClauseClick(item.cla_index, 'clause')}
        role="button"
        tabindex="0"
        on:keydown={(e) => e.key === 'Enter' && handleClauseClick(item.cla_index, 'clause')}
      >
        <div class="clause-text-item">
          <div class="clause main-clause">
            <div class="clause-header">
              <div class="clause-number">{item.cla_point}</div>
              <div class="clause-title">{item.cla_header}</div>
            </div>
            <div class="clause-content-text" class:truncated={textMode === 'truncated'} contenteditable="true">
              {@html item.cla_text}
            </div>
          </div>
        </div>
        <div class="info-cell">{info.negotiation}</div>
        <div class="info-cell">{info.accountable}</div>
        <div class="info-cell approval-cell">
          <span class="approval-badge" class:approved={info.approval}>
            {info.approval ? '✓' : '✗'}
          </span>
        </div>
        <div class="info-cell negotiable-cell">
          <span class="negotiable-badge" class:negotiable={info.negotiable}>
            {info.negotiable ? 'Yes' : 'No'}
          </span>
        </div>
      </div>
    {/each}
  </div>
</div>

<!-- Resizable Separators Container -->
<div class="separators-container" id="separatorsContainer"></div>

<style>
  /* Apply Source Sans Pro font family globally */
  :global(body) {
    font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  }

  .contract-wording {
    width: 100%;
    font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  }

  .clause-headers {
    display: grid;
    grid-template-columns: var(--clause-width, 600px) var(--neg-width, 120px) var(--acc-width, 120px) var(--app-width, 80px) var(--negotiable-width, 80px);
    gap: 0;
    padding: 0;
    margin-bottom: 30px;
    position: sticky;
    top: 0;
    background-color: #ffffff;
    z-index: 5;
    border-bottom: 2px solid #385757;
    border-top: 1px solid #e5e5e5;
    align-items: center;
    transform: translateX(3px);
  }

  .header-wording-container {
    display: flex;
    align-items: center;
    gap: 20px;
    grid-column: 1;
    padding: 12px 0px 16px 10px;
  }

  .header-wording {
    font-size: 11px;
    font-weight: 400;
    color: #385757;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  .text-mode-toggle {
    display: flex;
    gap: 8px;
    align-items: center;
  }

  .toggle-btn {
    padding: 6px 12px;
    font-size: 11px;
    font-weight: 400;
    color: #999;
    background-color: #f5f5f5;
    border: 1px solid #e5e5e5;
    border-radius: 2px;
    cursor: pointer;
    transition: all 0.25s ease;
    text-transform: uppercase;
    letter-spacing: 0.3px;
  }

  .toggle-btn:hover {
    background-color: #efefef;
    border-color: #d5d5d5;
  }

  .toggle-btn.active {
    background-color: #385757;
    color: #ffffff;
    border-color: #385757;
  }

  .info-column {
    font-size: 11px;
    font-weight: 400;
    color: #385757;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    padding: 19px 10px;
    text-align: center;
    box-sizing: border-box;
    border-right: 1px solid #e5e5e5;
    transform:translateX(1px);
  }

  .info-column:first-of-type {
    border-left: 1px solid #e5e5e5;
  }

  .info-column:last-child {
    border-right: 1px solid #e5e5e5;
    transform: translateX(0px);
  }

  .section-container {
    margin-bottom: 50px;
    padding: 0;
transform: translateX(3px);
  }

  .section-header {
    font-size: 20px;
    font-weight: 400;
    letter-spacing: -0.3px;
    margin-bottom: 30px;
    color: #385757;
    padding: 0px 0px 15px 0px;
    border-bottom: 2px solid #385757;
  }

  .clause-row {
    display: grid;
    grid-template-columns: var(--clause-width, 600px) var(--neg-width, 120px) var(--acc-width, 120px) var(--app-width, 80px) var(--negotiable-width, 80px);
    gap: 0;
    border-radius: 2px;
    border: 1px solid #e5e5e5;
    transition: background-color 0.25s ease, border-color 0.25s ease;
    cursor: pointer;
    position: relative;
    background-color: #fafafa;
    overflow: hidden;
  }

  .clause-row:hover {
    background-color: #fafafa;
    border-color: #e5e5e5;
  }

  .clause-text-item {
    display: flex;
    flex-direction: column;
    padding: 0;
    position: relative;
    min-width: 0;
    background-color: #fafafa;
    border-right: 1px solid #e5e5e5;
    overflow: hidden;
  }

  /* Card-based clause styling */
  .clause {
    background-color: #f9f9f9;
    padding: 20px;
    font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    overflow: hidden;
  }

  .clause:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  }


  .clause-header {
    display: flex;
    align-items: baseline;
    gap: 12px;
    margin-bottom: 10px;
  }

  .clause-number {
    min-width: 40px;
    font-size: 16px;
    font-weight: 700;
    color: #2c3e50;
    flex-shrink: 0;
  }

  .clause-title {
    flex: 1;
    font-size: 15px;
    font-weight: 600;
    color: #2c3e50;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  .clause-content-text {
    margin-left: 52px;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.65;
    color: #555;
  }

  /* Preamble-specific layout: first line inline with clause point, wrapped lines indented */
  .preamble-clause .clause-header {
    display: block;
    float: left;
    width: 52px;
    margin-bottom: 0;
    padding-top: 3px;
  }

  .preamble-clause .clause-number {
    display: block;
  }

  .preamble-clause .clause-content-text {
    display: block;
    margin-left: 52px;
    overflow: hidden;
  }

  /* Truncated mode: everything on one line for all clause types */
  .truncated-mode .clause {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .truncated-mode .clause-header {
    display: inline;
    margin-bottom: 0;
  }

  .truncated-mode .clause-number {
    display: inline;
    min-width: auto;
    margin-right: 8px;
  }

  .truncated-mode .clause-title {
    display: inline;
    margin-right: 8px;
  }

  .truncated-mode .clause-content-text {
    display: inline;
    margin-left: 0;
  }

  /* Override preamble layout in truncated mode */
  .truncated-mode .preamble-clause .clause-header {
    display: inline;
    float: none;
    width: auto;
  }

  .truncated-mode .preamble-clause .clause-number {
    display: inline;
    margin-right: 8px;
  }

  .truncated-mode .preamble-clause .clause-content-text {
    display: inline;
    margin-left: 0;
  }

  .clause-content-text :global(p) {
    margin: 0 0 12px 0;
  }

  .clause-content-text :global(p:last-child) {
    margin-bottom: 0;
  }

  .clause-content-text.truncated :global(p) {
    display: inline;
    margin: 0;
  }

  .clause-content-text:focus {
    outline: 2px solid #2c3e50;
    outline-offset: 2px;
    border-radius: 2px;
  }

  /* WHEREAS prefix styling for preamble clauses */
  .clause-content-text :global(strong:first-child),
  .clause-content-text :global(b:first-child) {
    font-weight: 600;
    color: #2c3e50;
  }

  .info-cell {
    font-size: 14px;
    font-weight: 300;
    color: #1a1a1a;
    display: flex;
    align-items: center;
    justify-content: center;
    letter-spacing: 0.1px;
    padding: 10px;
    text-align: center;
    word-break: break-word;
    box-sizing: border-box;
    border-right: 1px solid #e5e5e5;
    background-color: #fafafa;
  }

  .info-cell:last-child {
    border-right: 1px solid #e5e5e5;
  }

  .info-cell:hover {
    background-color: #fafafa;
  }

  .clause-row:hover .info-cell {
    background-color: #fafafa;
  }

  .approval-cell,
  .negotiable-cell {
    justify-content: center;
  }

  .approval-badge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    font-size: 14px;
    font-weight: 400;
    background-color: #f5f5f5;
    color: #999;
    border: 1px solid #e5e5e5;
    flex-shrink: 0;
  }

  .approval-badge.approved {
    background-color: #C4EACC;
    color: #2d5016;
    border-color: #385757;
  }

  .negotiable-badge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 4px 10px;
    border-radius: 2px;
    font-size: 11px;
    font-weight: 400;
    background-color: #f5f5f5;
    color: #999;
    border: 1px solid #e5e5e5;
    flex-shrink: 0;
  }

  .negotiable-badge.negotiable {
    background-color: #fff3cd;
    color: #856404;
    border-color: #ffc107;
  }

  /* Resizable Separators */
  :global(.separators-container) {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    pointer-events: none;
    z-index: 20;
  }

  :global(.separator) {
    position: fixed;
    top: var(--sep-top, 0);
    width: 8px;
    height: calc(100vh - var(--sep-top, 0));
    cursor: col-resize;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 20;
    pointer-events: auto;
    margin-left: -4px;
    transition: background 0.2s;
  }

  :global(.separator::before) {
    content: '';
    position: absolute;
    width: 1px;
    height: 100%;
    background: #d1d5db;
    left: 50%;
    transform: translateX(-50%);
    transition: background 0.2s;
  }

  :global(.separator:hover::before) {
    background: #385757;
    width: 2px;
  }

  :global(.separator-1) {
    left: var(--sep-1-pos, 50%);
  }

  :global(.separator-2) {
    left: var(--sep-2-pos, 60%);
  }

  :global(.separator-3) {
    left: var(--sep-3-pos, 70%);
  }

  :global(.separator-4) {
    left: var(--sep-4-pos, 80%);
  }

  /* Print media query - remove shadows for print output */
  @media print {
    .clause:hover {
      box-shadow: none;
    }
  }
</style>

