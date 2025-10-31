<script>
  // Drafting Manager Icon Showcase
  // Displays 15+ icon variations for the Drafting Manager sidebar entry
  // Icons from lucide-svelte, svelte-remixicon, and phosphor-svelte

  import { FileEdit, FileText, PenTool, Pencil, BookOpen, Layers, LayoutList, Zap, Briefcase, Archive, Clipboard, Edit3, FileCode, Lightbulb, Scroll } from 'lucide-svelte';
  import RiFileEditLine from 'svelte-remixicon/RiFileEditLine.svelte';
  import RiFileTextLine from 'svelte-remixicon/RiFileTextLine.svelte';
  import RiPencilLine from 'svelte-remixicon/RiPencilLine.svelte';
  import RiBookmarkLine from 'svelte-remixicon/RiBookmarkLine.svelte';
  import RiStackLine from 'svelte-remixicon/RiStackLine.svelte';
  import RiBriefcaseLine from 'svelte-remixicon/RiBriefcaseLine.svelte';
  import { PencilSimple, FileText as PhosphorFileText, NotePencil, BookOpen as PhosphorBookOpen, Stack, Briefcase as PhosphorBriefcase } from 'phosphor-svelte';
</script>

<div class="showcase-container">
  <div class="showcase-header">
    <h1>Drafting Manager Icon Options</h1>
    <p>Comprehensive icon variations for the Drafting Manager sidebar entry</p>
    <p class="subtitle">All icons displayed with consistent styling: 56px size, white color, 1.5px stroke width</p>
  </div>

  <div class="icons-grid">
    <!-- Lucide Icons -->
    <div class="icon-section">
      <h2 class="section-title">Lucide Icons</h2>

      <div class="icon-demo">
        <div class="title-with-icon">
          <div class="icon-container">
            <FileEdit size={56} strokeWidth={1.5} />
          </div>
          <h1>Drafting<br>Manager</h1>
        </div>
        <div class="icon-label">FileEdit (Current)</div>
        <div class="icon-code">lucide-svelte</div>
      </div>

      <div class="icon-demo">
        <div class="title-with-icon">
          <div class="icon-container">
            <FileText size={56} strokeWidth={1.5} />
          </div>
          <h1>Drafting<br>Manager</h1>
        </div>
        <div class="icon-label">FileText</div>
        <div class="icon-code">lucide-svelte</div>
      </div>

      <div class="icon-demo">
        <div class="title-with-icon">
          <div class="icon-container">
            <PenTool size={56} strokeWidth={1.5} />
          </div>
          <h1>Drafting<br>Manager</h1>
        </div>
        <div class="icon-label">PenTool</div>
        <div class="icon-code">lucide-svelte</div>
      </div>

      <div class="icon-demo">
        <div class="title-with-icon">
          <div class="icon-container">
            <Pencil size={56} strokeWidth={1.5} />
          </div>
          <h1>Drafting<br>Manager</h1>
        </div>
        <div class="icon-label">Pencil</div>
        <div class="icon-code">lucide-svelte</div>
      </div>

      <div class="icon-demo">
        <div class="title-with-icon">
          <div class="icon-container">
            <BookOpen size={56} strokeWidth={1.5} />
          </div>
          <h1>Drafting<br>Manager</h1>
        </div>
        <div class="icon-label">BookOpen</div>
        <div class="icon-code">lucide-svelte</div>
      </div>

      <div class="icon-demo">
        <div class="title-with-icon">
          <div class="icon-container">
            <Layers size={56} strokeWidth={1.5} />
          </div>
          <h1>Drafting<br>Manager</h1>
        </div>
        <div class="icon-label">Layers</div>
        <div class="icon-code">lucide-svelte</div>
      </div>
    </div>

    <!-- Remix Icons -->
    <div class="icon-section">
      <h2 class="section-title">Remix Icons</h2>

      <div class="icon-demo">
        <div class="title-with-icon">
          <div class="icon-container">
            <RiFileEditLine size="56" />
          </div>
          <h1>Drafting<br>Manager</h1>
        </div>
        <div class="icon-label">FileEditLine</div>
        <div class="icon-code">svelte-remixicon</div>
      </div>

      <div class="icon-demo">
        <div class="title-with-icon">
          <div class="icon-container">
            <RiFileTextLine size="56" />
          </div>
          <h1>Drafting<br>Manager</h1>
        </div>
        <div class="icon-label">FileTextLine</div>
        <div class="icon-code">svelte-remixicon</div>
      </div>

      <div class="icon-demo">
        <div class="title-with-icon">
          <div class="icon-container">
            <RiPencilLine size="56" />
          </div>
          <h1>Drafting<br>Manager</h1>
        </div>
        <div class="icon-label">PencilLine</div>
        <div class="icon-code">svelte-remixicon</div>
      </div>

      <div class="icon-demo">
        <div class="title-with-icon">
          <div class="icon-container">
            <RiBookmarkLine size="56" />
          </div>
          <h1>Drafting<br>Manager</h1>
        </div>
        <div class="icon-label">BookmarkLine</div>
        <div class="icon-code">svelte-remixicon</div>
      </div>

      <div class="icon-demo">
        <div class="title-with-icon">
          <div class="icon-container">
            <RiStackLine size="56" />
          </div>
          <h1>Drafting<br>Manager</h1>
        </div>
        <div class="icon-label">StackLine</div>
        <div class="icon-code">svelte-remixicon</div>
      </div>

      <div class="icon-demo">
        <div class="title-with-icon">
          <div class="icon-container">
            <RiBriefcaseLine size="56" />
          </div>
          <h1>Drafting<br>Manager</h1>
        </div>
        <div class="icon-label">BriefcaseLine</div>
        <div class="icon-code">svelte-remixicon</div>
      </div>
    </div>

    <!-- Phosphor Icons -->
    <div class="icon-section">
      <h2 class="section-title">Phosphor Icons</h2>

      <div class="icon-demo">
        <div class="title-with-icon">
          <div class="icon-container">
            <PencilSimple size={56} weight="thin" />
          </div>
          <h1>Drafting<br>Manager</h1>
        </div>
        <div class="icon-label">PencilSimple</div>
        <div class="icon-code">phosphor-svelte</div>
      </div>

      <div class="icon-demo">
        <div class="title-with-icon">
          <div class="icon-container">
            <PhosphorFileText size={56} weight="thin" />
          </div>
          <h1>Drafting<br>Manager</h1>
        </div>
        <div class="icon-label">FileText</div>
        <div class="icon-code">phosphor-svelte</div>
      </div>

      <div class="icon-demo">
        <div class="title-with-icon">
          <div class="icon-container">
            <NotePencil size={56} weight="thin" />
          </div>
          <h1>Drafting<br>Manager</h1>
        </div>
        <div class="icon-label">NotePencil</div>
        <div class="icon-code">phosphor-svelte</div>
      </div>

      <div class="icon-demo">
        <div class="title-with-icon">
          <div class="icon-container">
            <PhosphorBookOpen size={56} weight="thin" />
          </div>
          <h1>Drafting<br>Manager</h1>
        </div>
        <div class="icon-label">BookOpen</div>
        <div class="icon-code">phosphor-svelte</div>
      </div>

      <div class="icon-demo">
        <div class="title-with-icon">
          <div class="icon-container">
            <Stack size={56} weight="thin" />
          </div>
          <h1>Drafting<br>Manager</h1>
        </div>
        <div class="icon-label">Stack</div>
        <div class="icon-code">phosphor-svelte</div>
      </div>

      <div class="icon-demo">
        <div class="title-with-icon">
          <div class="icon-container">
            <PhosphorBriefcase size={56} weight="thin" />
          </div>
          <h1>Drafting<br>Manager</h1>
        </div>
        <div class="icon-label">Briefcase</div>
        <div class="icon-code">phosphor-svelte</div>
      </div>
    </div>
  </div>

  <div class="styling-info">
    <h3>Current Sidebar Styling Applied</h3>
    <div class="styling-details">
      <p><strong>Icon Size:</strong> 56px</p>
      <p><strong>Stroke Width:</strong> 1.5px (lucide)</p>
      <p><strong>Color:</strong> White (#ffffff)</p>
      <p><strong>Container:</strong> Flex centered, no background</p>
      <p><strong>Background:</strong> Sidebar color #385757</p>
    </div>
  </div>
</div>

<style>
  .showcase-container {
    min-height: 100vh;
    background-color: #fafafa;
    padding: 80px 60px;
  }

  .showcase-header {
    max-width: 1400px;
    margin: 0 auto 80px;
    text-align: center;
  }

  .showcase-header h1 {
    font-size: 42px;
    font-weight: 300;
    letter-spacing: -0.8px;
    margin-bottom: 16px;
    color: #1a1a1a;
  }

  .showcase-header p {
    font-size: 16px;
    font-weight: 300;
    color: #666;
    letter-spacing: 0.2px;
    margin: 8px 0;
  }

  .subtitle {
    font-size: 14px;
    color: #999;
    margin-top: 12px;
  }

  .icons-grid {
    max-width: 1400px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 60px;
    margin-bottom: 80px;
  }

  .icon-section {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }

  .section-title {
    font-size: 18px;
    font-weight: 500;
    color: #1a1a1a;
    margin-bottom: 10px;
    padding-bottom: 12px;
    border-bottom: 2px solid #e5e5e5;
  }

  .icon-demo {
    background: #ffffff;
    padding: 40px 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    border: 1px solid #e5e5e5;
    transition: all 0.3s ease;
    border-radius: 4px;
  }

  .icon-demo:hover {
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
    border-color: #d0d0d0;
  }

  .title-with-icon {
    display: flex;
    align-items: center;
    gap: 16px;
    width: 100%;
    background-color: #385757;
    padding: 20px;
    border-radius: 4px;
  }

  .title-with-icon h1 {
    font-size: 28px;
    font-weight: 300;
    letter-spacing: -0.5px;
    line-height: 1.3;
    margin: 0;
    color: white;
  }

  .icon-container {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 100px;
    background-color: #385757;
    border-radius: 4px;
    flex-shrink: 0;
  }

  .title-with-icon .icon-container {
    width: 56px;
    height: 56px;
    background-color: transparent;
  }

  .icon-container :global(svg) {
    color: white;
  }

  .icon-label {
    font-size: 14px;
    font-weight: 500;
    color: #1a1a1a;
    text-align: center;
  }

  .icon-code {
    font-size: 12px;
    font-weight: 400;
    color: #999;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  .styling-info {
    max-width: 1400px;
    margin: 0 auto;
    background: #ffffff;
    padding: 40px;
    border: 1px solid #e5e5e5;
    border-radius: 4px;
  }

  .styling-info h3 {
    font-size: 18px;
    font-weight: 500;
    color: #1a1a1a;
    margin-bottom: 20px;
  }

  .styling-details {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
  }

  .styling-details p {
    font-size: 14px;
    color: #666;
    margin: 0;
  }

  .styling-details strong {
    color: #1a1a1a;
  }

  @media (max-width: 1024px) {
    .icons-grid {
      grid-template-columns: repeat(2, 1fr);
      gap: 40px;
    }
  }

  @media (max-width: 640px) {
    .icons-grid {
      grid-template-columns: 1fr;
      gap: 30px;
    }

    .showcase-container {
      padding: 60px 30px;
    }

    .showcase-header h1 {
      font-size: 32px;
    }
  }
</style>

