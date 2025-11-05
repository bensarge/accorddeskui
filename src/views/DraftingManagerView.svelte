<script>
  import { navigate } from 'svelte-routing';
  import Sidebar from '../components/Sidebar.svelte';
  import TemplateCard from '../components/TemplateCard.svelte';
  import { templates, authorTemplates } from '../mockData/templates.js';

  function handleCreateEmpty() {
    console.log('Create empty template clicked');
    // Future implementation
  }

  function handleTemplateClick(template) {
    console.log('Template clicked:', template);

    // Navigate to contract viewer for "sales english short" template
    if (template.id === 2) { // ID 2 is "SALES ENGLISH SHORT"
      navigate('/contract/sales_english_short');
    }
  }
</script>

<div class="container">
  <Sidebar onCreateEmpty={handleCreateEmpty} />

  <div class="main-content">
  <div class="header header-with-logo">
    <img src="/accorddesk_logo_alpha.png" alt="AccordDesk Logo" class="logo-main-header" />
    <div class="header-text">
      <h1>accordDesk Template Library</h1>
      <p><strong>Author:</strong> accordDesk GmbH</p>
    </div>
    <!-- <img src="/accorddesk_logo_alpha.png" alt="AccordDesk Logo" class="logo-header-right" /> -->
  </div>

  <div class="template-grid">
    {#each templates as template (template.id)}
      <TemplateCard {template} onClick={() => handleTemplateClick(template)} />
    {/each}
  </div>

  <div class="author-section">
    <div class="author-name">Author: {authorTemplates.authorName}</div>
    <div class="template-grid">
      {#each authorTemplates.templates as template (template.id)}
        <TemplateCard {template} onClick={() => handleTemplateClick(template)} />
      {/each}
    </div>
  </div>
  </div>
</div>

<style>
  .container {
    display: flex;
    width: 100%;
    height: 100%;
  }

  .main-content {
    flex: 1;
    background-color: #fafafa;
    padding: 50px 70px;
    overflow-y: auto;
  }

  .header {
    margin-bottom: 60px;
    padding-bottom: 30px;
    border-bottom: 1px solid #e5e5e5;
  }

  .header-with-logo {
    display: flex;
    align-items: center;
    /* justify-content: space-between; */
    gap: 0px;
  }

  .logo-main-header {
    height:106px;
    width: auto;
    flex-shrink: 0;
    transform: translateX(-20px);
  }

  /* .logo-header-right {
    height: 120px;
    width: auto;
    flex-shrink: 0;
  } */

  .header-text h1 {
    font-size: 36px;
    font-weight: 300;
    letter-spacing: -0.5px;
    margin-bottom: 12px;
    color: #1a1a1a;
  }

  .header h1 {
    font-size: 36px;
    font-weight: 300;
    letter-spacing: -0.5px;
    margin-bottom: 12px;
    color: #1a1a1a;
  }

  .header p {
    font-size: 14px;
    color: #666;
    font-weight: 300;
  }

  .header p :global(strong) {
    font-weight: 400;
    color: #1a1a1a;
  }

  .author-section {
    margin-bottom: 70px;
  }

  .author-name {
    font-size: 12px;
    font-weight: 400;
    margin-bottom: 30px;
    color: #999;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  .template-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 30px;
    margin-bottom: 50px;
  }

  /* Subtle scrollbar styling */
  .main-content::-webkit-scrollbar {
    width: 20px;
  }

  .main-content::-webkit-scrollbar-track {
    background: transparent;
  }

  .main-content::-webkit-scrollbar-thumb {
    background: #d0d0d0;
    border-radius: 3px;
  }

  .main-content::-webkit-scrollbar-thumb:hover {
    background: #2d5016;
  }
</style>

