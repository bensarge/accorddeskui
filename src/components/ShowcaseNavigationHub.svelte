<script lang="ts">
  import { Link } from 'svelte-routing';

  interface ShowcaseItem {
    title: string;
    path: string;
    description: string;
  }

  interface ShowcaseCategory {
    id: number;
    title: string;
    path: string | null;
    description: string;
    totalVariations: number | null;
    subcategories: number;
    icon: string;
    color: string;
    highlights: string[];
    items?: ShowcaseItem[];
  }

  const showcaseCategories: ShowcaseCategory[] = [
    {
      id: 1,
      title: 'Logo Presentations',
      path: '/showcase/logo',
      description: 'Comprehensive exploration of AccordDesk logo presentations across different contexts, sizes, and styling approaches',
      totalVariations: 47,
      subcategories: 6,
      icon: '🎨',
      color: '#2d5016',
      highlights: [
        'Navigation headers & hero sections',
        'Responsive & adaptive sizing',
        'Creative effects & filters',
        'Contextual UI placements',
        'Home route specific layouts'
      ]
    },
    {
      id: 2,
      title: 'Contract Headers',
      path: '/showcase/contract-header',
      description: 'Space-efficient header layouts for contract metadata, party information, and terms with various information density levels',
      totalVariations: 12,
      subcategories: 2,
      icon: '📋',
      color: '#385757',
      highlights: [
        'Condensed single-section layouts',
        'Card-based grid variations',
        'Tabbed & accordion interfaces',
        'Mixed information density',
        'Professional aesthetics'
      ]
    },
    {
      id: 3,
      title: 'UI Components',
      path: null,
      description: 'Individual UI component variations and design explorations',
      totalVariations: null,
      subcategories: 3,
      icon: '🧩',
      color: '#666',
      highlights: [
        'Add Template buttons',
        'Drafting Manager icons',
        'Collapsible headers',
        'Interactive elements',
        'Minimalist aesthetics'
      ],
      items: [
        {
          title: 'Add Template Buttons',
          path: '/showcase/add-template-buttons',
          description: 'Button variations with sage green accent'
        },
        {
          title: 'Drafting Manager Icons',
          path: '/showcase/drafting-manager-icons',
          description: 'Icon options for sidebar navigation'
        },
        {
          title: 'Collapsible Headers',
          path: '/showcase/collapsible-header',
          description: 'Interactive header collapse patterns'
        }
      ]
    }
  ];

  const totalShowcases = showcaseCategories.reduce((sum, cat) => {
    if (cat.totalVariations) return sum + cat.totalVariations;
    return sum + (cat.items?.length || 0);
  }, 0);
</script>

<div class="hub-container">
  <div class="hub-header">
    <img src="/accorddesk_logo_alpha.png" alt="AccordDesk Logo" class="header-logo" />
    <h1>AccordDesk Design Showcase</h1>
    <p class="subtitle">A comprehensive design system exploration and component library</p>
    <p class="description">
      Welcome to the AccordDesk Design Showcase - your central hub for exploring design variations, 
      UI components, and visual presentations. This collection demonstrates different approaches to 
      presenting the AccordDesk brand and interface elements across various contexts and use cases.
    </p>
    <div class="stats-bar">
      <div class="stat-item">
        <div class="stat-number">{showcaseCategories.length}</div>
        <div class="stat-label">Categories</div>
      </div>
      <div class="stat-item">
        <div class="stat-number">{totalShowcases}+</div>
        <div class="stat-label">Variations</div>
      </div>
      <div class="stat-item">
        <div class="stat-number">∞</div>
        <div class="stat-label">Possibilities</div>
      </div>
    </div>
  </div>

  <div class="categories-grid">
    {#each showcaseCategories as category}
      <div class="category-section">
        {#if category.path}
          <Link to={category.path} class="category-card" style="--category-color: {category.color}">
            <div class="card-icon">{category.icon}</div>
            <div class="card-content">
              <div class="card-header">
                <h2>{category.title}</h2>
                {#if category.totalVariations}
                  <div class="card-badge">{category.totalVariations} variations</div>
                {/if}
              </div>
              <p class="card-description">{category.description}</p>
              <div class="card-meta">
                <span class="meta-item">{category.subcategories} subcategories</span>
              </div>
              <div class="card-highlights">
                <ul>
                  {#each category.highlights.slice(0, 3) as highlight}
                    <li>{highlight}</li>
                  {/each}
                </ul>
              </div>
              <div class="card-footer">
                <span class="explore-link">Explore Category →</span>
              </div>
            </div>
          </Link>
        {:else}
          <div class="category-card multi-item" style="--category-color: {category.color}">
            <div class="card-icon">{category.icon}</div>
            <div class="card-content">
              <div class="card-header">
                <h2>{category.title}</h2>
                <div class="card-badge">{category.items?.length || 0} showcases</div>
              </div>
              <p class="card-description">{category.description}</p>
              <div class="items-list">
                {#each category.items || [] as item}
                  <Link to={item.path} class="item-link">
                    <div class="item-title">{item.title}</div>
                    <div class="item-description">{item.description}</div>
                    <span class="item-arrow">→</span>
                  </Link>
                {/each}
              </div>
            </div>
          </div>
        {/if}
      </div>
    {/each}
  </div>

  <div class="quick-navigation">
    <h3>Quick Navigation</h3>
    <div class="nav-grid">
      <Link to="/" class="nav-link">
        <span class="nav-icon">🏠</span>
        <span class="nav-text">Main Application</span>
      </Link>
      <Link to="/contract/sales_english_short" class="nav-link">
        <span class="nav-icon">📄</span>
        <span class="nav-text">Contract Viewer</span>
      </Link>
    </div>
  </div>

  <div class="usage-guide">
    <h3>How to Use This Showcase</h3>
    <div class="guide-grid">
      <div class="guide-item">
        <div class="guide-number">1</div>
        <h4>Browse Categories</h4>
        <p>Explore different design categories to find the variations you need</p>
      </div>
      <div class="guide-item">
        <div class="guide-number">2</div>
        <h4>Review Variations</h4>
        <p>Each showcase contains multiple design variations with detailed examples</p>
      </div>
      <div class="guide-item">
        <div class="guide-number">3</div>
        <h4>Inspect Code</h4>
        <p>View source code to understand implementation details and CSS</p>
      </div>
      <div class="guide-item">
        <div class="guide-number">4</div>
        <h4>Implement</h4>
        <p>Apply the designs to your own components and pages</p>
      </div>
    </div>
  </div>
</div>

<style>
  .hub-container {
    min-height: 100vh;
    background: linear-gradient(to bottom, #fafafa 0%, #f5f5f5 100%);
    padding: 80px 60px;
  }

  .hub-header {
    max-width: 1000px;
    margin: 0 auto 80px;
    text-align: center;
  }

  .header-logo {
    height: 180px;
    width: auto;
    margin-bottom: 40px;
    filter: drop-shadow(0 4px 12px rgba(0, 0, 0, 0.08));
  }

  .hub-header h1 {
    font-size: 56px;
    font-weight: 300;
    letter-spacing: -1.5px;
    margin-bottom: 20px;
    color: #1a1a1a;
  }

  .subtitle {
    font-size: 22px;
    font-weight: 300;
    color: #2d5016;
    margin-bottom: 24px;
    letter-spacing: 0.3px;
  }

  .description {
    font-size: 16px;
    font-weight: 300;
    color: #666;
    line-height: 1.8;
    max-width: 800px;
    margin: 0 auto 40px;
  }

  .stats-bar {
    display: flex;
    justify-content: center;
    gap: 60px;
    margin-top: 50px;
    padding: 40px;
    background: #ffffff;
    border: 1px solid #e5e5e5;
    border-radius: 4px;
  }

  .stat-item {
    text-align: center;
  }

  .stat-number {
    font-size: 48px;
    font-weight: 300;
    color: #2d5016;
    margin-bottom: 8px;
  }

  .stat-label {
    font-size: 12px;
    font-weight: 400;
    color: #999;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  .categories-grid {
    max-width: 1400px;
    margin: 0 auto 80px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
    gap: 40px;
  }

  .category-card {
    background: #ffffff;
    border: 2px solid #e5e5e5;
    padding: 50px;
    text-decoration: none;
    color: inherit;
    transition: all 0.4s ease;
    display: flex;
    flex-direction: column;
    position: relative;
    overflow: hidden;
  }

  .category-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: var(--category-color);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.4s ease;
  }

  .category-card:hover::before {
    transform: scaleX(1);
  }

  .category-card:hover {
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.1);
    transform: translateY(-6px);
    border-color: var(--category-color);
  }

  .card-icon {
    font-size: 64px;
    margin-bottom: 24px;
  }

  .card-content {
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  .card-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    margin-bottom: 16px;
    flex-wrap: wrap;
  }

  .card-header h2 {
    font-size: 28px;
    font-weight: 400;
    color: #1a1a1a;
    margin: 0;
  }

  .card-badge {
    font-size: 11px;
    font-weight: 400;
    color: var(--category-color);
    background: color-mix(in srgb, var(--category-color) 10%, transparent);
    padding: 6px 14px;
    border-radius: 12px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    white-space: nowrap;
  }

  .card-description {
    font-size: 15px;
    color: #666;
    line-height: 1.7;
    margin-bottom: 20px;
  }

  .card-meta {
    display: flex;
    gap: 20px;
    margin-bottom: 20px;
  }

  .meta-item {
    font-size: 13px;
    color: #999;
    font-weight: 300;
  }

  .card-highlights ul {
    list-style: none;
    padding: 0;
    margin: 0 0 24px 0;
  }

  .card-highlights li {
    font-size: 14px;
    color: #666;
    margin-bottom: 10px;
    padding-left: 24px;
    position: relative;
  }

  .card-highlights li::before {
    content: '✓';
    position: absolute;
    left: 0;
    color: var(--category-color);
    font-weight: bold;
  }

  .card-footer {
    margin-top: auto;
    padding-top: 24px;
    border-top: 1px solid #e5e5e5;
  }

  .explore-link {
    font-size: 15px;
    font-weight: 400;
    color: var(--category-color);
    transition: all 0.3s;
  }

  .category-card:hover .explore-link {
    transform: translateX(8px);
    display: inline-block;
  }

  /* Multi-item category card */
  .category-card.multi-item {
    border-style: dashed;
  }

  .items-list {
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-top: 20px;
  }

  .item-link {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 16px 20px;
    background: #fafafa;
    border: 1px solid #e5e5e5;
    text-decoration: none;
    color: inherit;
    transition: all 0.3s;
    position: relative;
  }

  .item-link:hover {
    background: #ffffff;
    border-color: var(--category-color);
    transform: translateX(4px);
  }

  .item-title {
    font-size: 15px;
    font-weight: 500;
    color: #1a1a1a;
    flex: 1;
  }

  .item-description {
    font-size: 13px;
    color: #999;
    flex: 2;
  }

  .item-arrow {
    font-size: 18px;
    color: var(--category-color);
    opacity: 0;
    transition: opacity 0.3s;
  }

  .item-link:hover .item-arrow {
    opacity: 1;
  }

  .quick-navigation {
    max-width: 1400px;
    margin: 0 auto 80px;
  }

  .quick-navigation h3 {
    font-size: 24px;
    font-weight: 300;
    color: #1a1a1a;
    margin-bottom: 30px;
    text-align: center;
  }

  .nav-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 24px;
  }

  .nav-link {
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 24px 32px;
    background: #ffffff;
    border: 1px solid #e5e5e5;
    text-decoration: none;
    color: #1a1a1a;
    font-size: 16px;
    font-weight: 400;
    transition: all 0.3s;
  }

  .nav-link:hover {
    background: #2d5016;
    color: #ffffff;
    border-color: #2d5016;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(45, 80, 22, 0.2);
  }

  .nav-icon {
    font-size: 28px;
  }

  .usage-guide {
    max-width: 1400px;
    margin: 0 auto;
    padding: 80px 0 40px;
    border-top: 1px solid #e5e5e5;
  }

  .usage-guide h3 {
    font-size: 32px;
    font-weight: 300;
    color: #1a1a1a;
    margin-bottom: 50px;
    text-align: center;
  }

  .guide-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 40px;
  }

  .guide-item {
    text-align: center;
  }

  .guide-number {
    width: 70px;
    height: 70px;
    background: linear-gradient(135deg, #2d5016 0%, #3d6820 100%);
    color: #ffffff;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 28px;
    font-weight: 300;
    margin: 0 auto 24px;
    box-shadow: 0 4px 12px rgba(45, 80, 22, 0.2);
  }

  .guide-item h4 {
    font-size: 20px;
    font-weight: 400;
    color: #1a1a1a;
    margin-bottom: 12px;
  }

  .guide-item p {
    font-size: 14px;
    color: #666;
    line-height: 1.7;
  }

  /* Responsive */
  @media (max-width: 1024px) {
    .categories-grid {
      grid-template-columns: 1fr;
    }

    .stats-bar {
      gap: 40px;
    }
  }

  @media (max-width: 640px) {
    .hub-container {
      padding: 60px 30px;
    }

    .hub-header h1 {
      font-size: 40px;
    }

    .header-logo {
      height: 120px;
    }

    .category-card {
      padding: 30px;
    }

    .stats-bar {
      flex-direction: column;
      gap: 30px;
    }

    .guide-grid {
      grid-template-columns: 1fr;
    }
  }
</style>

