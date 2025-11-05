<script>
  export let metadata;
</script>

<div class="metadata-container">
  <div class="metadata-grid">
    <div class="metadata-item">
      <span class="metadata-label">Title:</span>
      <span class="metadata-value">{metadata.title}</span>
    </div>
    <div class="metadata-item">
      <span class="metadata-label">Type:</span>
      <span class="metadata-value">{metadata.type}</span>
    </div>
    <div class="metadata-item">
      <span class="metadata-label">Identifier:</span>
      <span class="metadata-value">{metadata.identifier}</span>
    </div>
    <div class="metadata-item">
      <span class="metadata-label">Version:</span>
      <span class="metadata-value">{metadata.version}</span>
    </div>
    <div class="metadata-item">
      <span class="metadata-label">Status:</span>
      <span class="metadata-value status-badge" class:draft={metadata.status === 'Draft'}>
        {metadata.status}
      </span>
    </div>
    <div class="metadata-item">
      <span class="metadata-label">Document Code:</span>
      <span class="metadata-value">{metadata.document_code}</span>
    </div>
    <div class="metadata-item">
      <span class="metadata-label">Author:</span>
      <span class="metadata-value">{metadata.author}</span>
    </div>
    <div class="metadata-item">
      <span class="metadata-label">Created:</span>
      <span class="metadata-value">{metadata.created_date}</span>
    </div>
    <div class="metadata-item">
      <span class="metadata-label">Last Modified:</span>
      <span class="metadata-value">{metadata.last_modified}</span>
    </div>
  </div>
  
  {#if metadata.note}
    <div class="metadata-note">
      <span class="note-label">Note:</span>
      <span class="note-text">{metadata.note}</span>
    </div>
  {/if}
</div>

<style>
  .metadata-container {
    max-width: 1200px;
  }

  .metadata-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px 30px;
    margin-bottom: 20px;
  }

  .metadata-item {
    display: flex;
    gap: 10px;
    align-items: baseline;
  }

  .metadata-label {
    font-size: 12px;
    font-weight: 400;
    color: #666;
    letter-spacing: 0.3px;
    min-width: 100px;
  }

  .metadata-value {
    font-size: 13px;
    font-weight: 300;
    color: #1a1a1a;
    letter-spacing: 0.1px;
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

  .metadata-note {
    padding: 15px 20px;
    background-color: #fafafa;
    border-left: 3px solid #385757;
    border-radius: 2px;
    display: flex;
    gap: 10px;
  }

  .note-label {
    font-size: 12px;
    font-weight: 400;
    color: #385757;
    letter-spacing: 0.3px;
    flex-shrink: 0;
  }

  .note-text {
    font-size: 12px;
    font-weight: 300;
    color: #666;
    line-height: 1.6;
    letter-spacing: 0.1px;
  }
</style>

