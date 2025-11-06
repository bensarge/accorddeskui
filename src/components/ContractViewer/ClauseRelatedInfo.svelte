<script lang="ts">
  import type { ContractData } from '../../types';

  export let contractData: ContractData;

  interface CombinedItem {
    type: 'preamble' | 'definition' | 'clause';
    point: string;
    negotiable: boolean;
    accountable: string;
    approval: boolean;
    negotiation: string;
  }

  // Combine all items (preamble, definitions, clauses) into a single array
  // to align with the contract wording section
  let allItems: CombinedItem[] = [];

  $: {
    allItems = [
      ...contractData.preamble.map(item => ({
        type: 'preamble' as const,
        point: item.preamble_point,
        negotiable: item.preamble_negotiable,
        accountable: item.preamble_accountable,
        approval: item.preamble_approval,
        negotiation: item.preamble_status
      })),
      ...contractData.definitions.map(item => ({
        type: 'definition' as const,
        point: item.def_point,
        negotiable: item.def_negotiable,
        accountable: item.def_accountable,
        approval: item.def_approval,
        negotiation: item.def_status
      })),
      ...contractData.clauses.map(item => ({
        type: 'clause' as const,
        point: item.cla_point,
        negotiable: item.cla_negotiable,
        accountable: item.cla_accountable,
        approval: item.cla_approval,
        negotiation: item.cla_short
      }))
    ];
  }
</script>

<div class="clause-info-grid">
  <div class="grid-header">
    <div class="header-cell">Point</div>
    <div class="header-cell">Negotiation</div>
    <div class="header-cell">Accountable</div>
    <div class="header-cell">Approval</div>
    <div class="header-cell">Negotiable</div>
  </div>

  <div class="grid-body">
    {#each allItems as item, index (index)}
      <div class="grid-row">
        <div class="grid-cell point-cell">{item.point}</div>
        <div class="grid-cell">{item.negotiation || '—'}</div>
        <div class="grid-cell">{item.accountable || '—'}</div>
        <div class="grid-cell approval-cell">
          <span class="approval-badge" class:approved={item.approval}>
            {item.approval ? '✓' : '✗'}
          </span>
        </div>
        <div class="grid-cell negotiable-cell">
          <span class="negotiable-badge" class:negotiable={item.negotiable}>
            {item.negotiable ? 'Yes' : 'No'}
          </span>
        </div>
      </div>
    {/each}
  </div>
</div>

<style>
  .clause-info-grid {
    padding: 20px;
  }

  .grid-header {
    display: grid;
    grid-template-columns: 60px 1fr 1fr 80px 80px;
    gap: 10px;
    padding: 15px 10px;
    background-color: #385757;
    border-radius: 2px 2px 0 0;
    position: sticky;
    top: 0;
    z-index: 10;
  }

  .header-cell {
    font-size: 11px;
    font-weight: 400;
    color: white;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  .grid-body {
    background-color: white;
    border: 1px solid #e5e5e5;
    border-top: none;
    border-radius: 0 0 2px 2px;
  }

  .grid-row {
    display: grid;
    grid-template-columns: 60px 1fr 1fr 80px 80px;
    gap: 10px;
    padding: 15px 10px;
    border-bottom: 1px solid #e5e5e5;
    transition: background-color 0.25s ease;
  }

  .grid-row:last-child {
    border-bottom: none;
  }

  .grid-row:hover {
    background-color: #fafafa;
  }

  .grid-cell {
    font-size: 12px;
    font-weight: 300;
    color: #1a1a1a;
    display: flex;
    align-items: center;
    letter-spacing: 0.1px;
  }

  .point-cell {
    font-weight: 400;
    color: #666;
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
  }

  .negotiable-badge.negotiable {
    background-color: #fff3cd;
    color: #856404;
    border-color: #ffc107;
  }
</style>
