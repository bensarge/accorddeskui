<script>
  export let parties;
  export let terms;
  export let metadata;
</script>

<div class="party-info-container">
  <div class="party-info-grid">
    <!-- Party 1 -->
    <div class="info-item">
      <span class="info-label">Party 1:</span>
      <span class="info-value">{parties[0]?.party_name || '—'}</span>
    </div>

    <!-- Party 2 -->
    <div class="info-item">
      <span class="info-label">Party 2:</span>
      <span class="info-value">{parties[1]?.party_name || '—'}</span>
    </div>

    <!-- Term -->
    <div class="info-item">
      <span class="info-label">Term:</span>
      <span class="info-value">
        {#if terms.effective_date && terms.expiration_date}
          {terms.effective_date} to {terms.expiration_date}
        {:else}
          —
        {/if}
      </span>
    </div>

    <!-- Confidentiality Period -->
    <div class="info-item">
      <span class="info-label">Confidentiality Period:</span>
      <span class="info-value">{terms.confidentiality_period || '—'}</span>
    </div>

    <!-- Disclosure Period -->
    <div class="info-item">
      <span class="info-label">Disclosure Period:</span>
      <span class="info-value">{terms.disclosure_period || '—'}</span>
    </div>

    <!-- Penalty -->
    <div class="info-item">
      <span class="info-label">Penalty:</span>
      <span class="info-value">{terms.penalty || 'None specified'}</span>
    </div>

    <!-- Language -->
    <div class="info-item">
      <span class="info-label">Language:</span>
      <span class="info-value">{metadata?.language || '—'}</span>
    </div>

    <!-- Applicable Law -->
    <div class="info-item">
      <span class="info-label">Applicable Law:</span>
      <span class="info-value">{metadata?.applicable_law || '—'}</span>
    </div>

    <!-- Venue -->
    <div class="info-item">
      <span class="info-label">Venue:</span>
      <span class="info-value">{metadata?.jurisdiction || '—'}</span>
    </div>

    <!-- Confidential Information Scope -->
    <div class="info-item">
      <span class="info-label">Confidential Information Scope:</span>
      <span class="info-value">{terms.confidential_information_scope || '—'}</span>
    </div>
  </div>
</div>

<style>
  .party-info-container {
    max-width: 1200px;
  }

  .party-info-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 15px 30px;
  }

  .info-item {
    display: flex;
    gap: 10px;
    align-items: baseline;
  }

  .info-label {
    font-size: 11px;
    font-weight: 400;
    color: #666;
    letter-spacing: 0.3px;
    min-width: 180px;
    flex-shrink: 0;
  }

  .info-value {
    font-size: 12px;
    font-weight: 300;
    color: #1a1a1a;
    letter-spacing: 0.1px;
  }
</style>

