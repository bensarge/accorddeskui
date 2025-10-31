<script>
  import { FileEdit, PenTool } from 'lucide-svelte';
    import RiFileEditLine from 'svelte-remixicon/RiFileEditLine.svelte';
    import { PencilSimple, FileText as PhosphorFileText, NotePencil, BookOpen as PhosphorBookOpen, Stack, Briefcase as PhosphorBriefcase } from 'phosphor-svelte';

  export let onCreateEmpty = () => {};
</script>

<div class="sidebar">
  <div class="sidebar-top">
    <div class="title-with-icon">
      <div class="icon-container">
        <Stack size={76} weight={'thin'} />
      </div>
      <h1>Drafting<br>Manager</h1>
    </div>

    <button class="add-template-button" on:click={onCreateEmpty}>
      <span class="plus-icon">+</span>
      <span class="button-text">Add Template</span>
    </button>
  </div>

  <img src="/accorddesk_logo_alpha.png" alt="AccordDesk Logo" class="logo-sidebar-bottom" />
</div>

<style>
  .sidebar {
    width: 300px;
    background-color: #385757 ;
    padding: 60px 40px;
    border-right: 1px solid #e5e5e5;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .sidebar-top {
    display: flex;
    flex-direction: column;
  }

  .title-with-icon {
    display: flex;
    align-items: center;
    gap: 16px;
    margin-bottom: 80px;
  }

  .icon-container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .icon-container :global(svg) {
    color: white;
  }

  .sidebar h1 {
    font-size: 28px;
    font-weight: 300;
    letter-spacing: -0.5px;
    line-height: 1.3;
    margin: 0;
    color: white;
  }

  .logo-sidebar-bottom {
    height: 70px;
    width: auto;
    display: block;
    margin: 0 auto;
    filter: brightness(0) invert(1);
    opacity: 0.8;

  }

  .add-template-button {
    width: 100%;
    border-radius: 2px;
    padding: 16px 24px;
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    font-size: 15px;
    font-weight: 300;
    cursor: pointer;
    transition: all 0.25s ease;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    background: #385757;
    color: white;
    border-color: white;
    border: 1px solid white;
  }

  .plus-icon {
    font-size: 20px;
    font-weight: 200;
    line-height: 1;
  }

  .button-text {
    letter-spacing: 0.3px;
  }

  .add-template-button:hover {
    background: #ffffff;
    border: 1px solid #385757;
    color: #2d5016;

    box-shadow: 0 2px 8px rgba(45, 80, 22, 0.15);
  }
  

  .add-template-button:active {
    transform: translateY(1px);
    box-shadow: 0 1px 4px rgba(45, 80, 22, 0.1);
    background-color: #588B8B; 
  }
</style>

