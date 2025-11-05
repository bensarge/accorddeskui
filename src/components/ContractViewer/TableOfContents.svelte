<script>
  import { FileText } from 'lucide-svelte';
  
  export let contractData;
  export let selectedClauseId = null;
  export let onSelect = () => {};

  let expandedSections = {
    preamble: true,
    definitions: true,
    main: true
  };

  function toggleSection(section) {
    expandedSections[section] = !expandedSections[section];
  }

  function selectItem(id, type) {
    onSelect(`${type}-${id}`);
  }

  export function updateSelection(clauseId) {
    selectedClauseId = clauseId;
    // Scroll to the selected item in TOC if needed
    const element = document.querySelector(`[data-toc-id="${clauseId}"]`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }

  function isSelected(id, type) {
    return selectedClauseId === `${type}-${id}`;
  }
</script>

<div class="toc-container">
  <div class="toc-header">
    <div class="icon-container">
      <FileText size={32} strokeWidth={1.5} />
    </div>
    <h2>Table of<br>Contents</h2>
  </div>

  <div class="toc-content">
    <!-- Preamble Section -->
    <div class="toc-section">
      <button 
        class="section-header" 
        on:click={() => toggleSection('preamble')}
      >
        <span class="section-title">A. Preamble</span>
        <span class="toggle-icon">{expandedSections.preamble ? '−' : '+'}</span>
      </button>
      {#if expandedSections.preamble}
        <div class="section-items">
          {#each contractData.preamble as item (item.preamble_index)}
            <button
              class="toc-item"
              class:selected={isSelected(item.preamble_index, 'preamble')}
              data-toc-id="preamble-{item.preamble_index}"
              on:click={() => selectItem(item.preamble_index, 'preamble')}
            >
              <span class="item-point">{item.preamble_point}</span>
              <span class="item-text">{item.preamble_short}</span>
            </button>
          {/each}
        </div>
      {/if}
    </div>

    <!-- Definitions Section -->
    <div class="toc-section">
      <button 
        class="section-header" 
        on:click={() => toggleSection('definitions')}
      >
        <span class="section-title">B. Definitions and Interpretations</span>
        <span class="toggle-icon">{expandedSections.definitions ? '−' : '+'}</span>
      </button>
      {#if expandedSections.definitions}
        <div class="section-items">
          {#each contractData.definitions as item (item.def_index)}
            <button
              class="toc-item"
              class:selected={isSelected(item.def_index, 'definition')}
              data-toc-id="definition-{item.def_index}"
              on:click={() => selectItem(item.def_index, 'definition')}
            >
              <span class="item-point">{item.def_point}</span>
              <span class="item-text">{item.def_key}</span>
            </button>
          {/each}
        </div>
      {/if}
    </div>

    <!-- Main Clauses Section -->
    <div class="toc-section">
      <button 
        class="section-header" 
        on:click={() => toggleSection('main')}
      >
        <span class="section-title">C. Main Clauses</span>
        <span class="toggle-icon">{expandedSections.main ? '−' : '+'}</span>
      </button>
      {#if expandedSections.main}
        <div class="section-items">
          {#each contractData.clauses as item (item.cla_index)}
            <button
              class="toc-item"
              class:selected={isSelected(item.cla_index, 'clause')}
              data-toc-id="clause-{item.cla_index}"
              on:click={() => selectItem(item.cla_index, 'clause')}
            >
              <span class="item-point">{item.cla_point}</span>
              <span class="item-text">{item.cla_header}</span>
            </button>
          {/each}
        </div>
      {/if}
    </div>
  </div>
</div>

<style>
  .toc-container {
    height: 100%;
    display: flex;
    flex-direction: column;
    color: white;
  }

  .toc-header {
    padding: 60px 30px 40px;
    display: flex;
    align-items: center;
    gap: 16px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
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

  .toc-content {
    flex: 1;
    overflow-y: auto;
    padding: 20px 0;
  }

  .toc-section {
    margin-bottom: 10px;
  }

  .section-header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 30px;
    background: transparent;
    border: none;
    color: white;
    cursor: pointer;
    transition: background-color 0.25s ease;
    font-family: inherit;
  }

  .section-header:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }

  .section-title {
    font-size: 13px;
    font-weight: 400;
    letter-spacing: 0.3px;
    text-align: left;
  }

  .toggle-icon {
    font-size: 18px;
    font-weight: 300;
    opacity: 0.7;
  }

  .section-items {
    padding: 5px 0;
  }

  .toc-item {
    width: 100%;
    display: flex;
    gap: 12px;
    padding: 10px 30px 10px 45px;
    background: transparent;
    border: none;
    border-left: 3px solid transparent;
    color: rgba(255, 255, 255, 0.8);
    cursor: pointer;
    transition: all 0.25s ease;
    font-family: inherit;
    text-align: left;
  }

  .toc-item:hover {
    background-color: rgba(255, 255, 255, 0.1);
    color: white;
    border-left-color: rgba(255, 255, 255, 0.5);
  }

  .toc-item.selected {
    background-color: rgba(255, 255, 255, 0.15);
    color: white;
    border-left-color: #C4EACC;
  }

  .item-point {
    font-size: 11px;
    font-weight: 400;
    opacity: 0.7;
    flex-shrink: 0;
    min-width: 35px;
  }

  .item-text {
    font-size: 12px;
    font-weight: 300;
    letter-spacing: 0.2px;
    line-height: 1.4;
  }

  /* Scrollbar styling */
  .toc-content::-webkit-scrollbar {
    width: 6px;
  }

  .toc-content::-webkit-scrollbar-track {
    background: transparent;
  }

  .toc-content::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.2);
    border-radius: 3px;
  }

  .toc-content::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 255, 255, 0.4);
  }
</style>

