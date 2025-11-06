<script lang="ts">
  import { Link } from 'svelte-routing';
  
  const showcases = [
    {
      id: 1,
      title: 'Navigation Headers',
      path: '/showcase/logo/navigation-header',
      description: 'Logo presentations in navigation bar contexts with different sizes and layouts',
      variations: 6,
      highlights: [
        'Compact top-left navigation (48px)',
        'Centered header (80px)',
        'Large prominent header (120px)',
        'Sidebar vertical layout (200px)',
        'Fixed floating sticky header (60px)',
        'Responsive mobile header (56px)'
      ]
    },
    {
      id: 2,
      title: 'Hero & Landing Pages',
      path: '/showcase/logo/hero-landing',
      description: 'Large-scale logo presentations for landing pages and hero sections',
      variations: 5,
      highlights: [
        'Centered hero extra large (300px)',
        'Split layout left aligned (250px)',
        'Minimal centered medium (180px)',
        'Full-width banner (100px)',
        'Vertical stack large (220px)'
      ]
    },
    {
      id: 3,
      title: 'Responsive & Adaptive',
      path: '/showcase/logo/responsive-adaptive',
      description: 'Logo presentations that adapt to different screen sizes and device contexts',
      variations: 8,
      highlights: [
        'Fluid percentage-based scaling',
        'Breakpoint-based sizing (desktop/tablet/mobile)',
        'Max-width constrained',
        'Aspect ratio preserved',
        'Viewport-based sizing',
        'CSS clamp with min/max bounds',
        'Grid-based column spanning'
      ]
    },
    {
      id: 4,
      title: 'Creative Effects & Styling',
      path: '/showcase/logo/creative-effects',
      description: 'Visual effects, filters, and creative presentations for different moods',
      variations: 12,
      highlights: [
        'Subtle shadow & elevation',
        'Grayscale to color on hover',
        'Inverted colors for dark backgrounds',
        'Soft glow effect',
        'Sepia vintage tone',
        'Blur to focus interaction',
        'Gradient overlay',
        'Animated pulse',
        '3D tilt on hover'
      ]
    },
    {
      id: 5,
      title: 'Contextual Placements',
      path: '/showcase/logo/contextual-placements',
      description: 'Real-world UI contexts showing logo integration in complete interface designs',
      variations: 8,
      highlights: [
        'Email header template (80px)',
        'Loading/splash screen (200px)',
        'Footer multi-column (70px)',
        'Card/thumbnail (60px)',
        'Modal dialog header (50px)',
        'Print document header (90px)',
        'Mobile app header (44px)',
        'Document watermark (150px, 20% opacity)'
      ]
    },
    {
      id: 6,
      title: 'Home Route Placements',
      path: '/showcase/logo/home-route-placements',
      description: 'Logo placement options specifically for the DraftingManagerView (Sidebar + Template Library)',
      variations: 8,
      highlights: [
        'Logo above sidebar title (100px)',
        'Logo replaces sidebar title (120px)',
        'Compact corner logo (50px)',
        'Logo in main content header (80px)',
        'Centered above template library (90px)',
        'Logo at sidebar bottom (70px)',
        'Dual placement - sidebar & main (60px + 50px)',
        'Sidebar background watermark (200px, 15% opacity)'
      ]
    }
  ];

  const totalVariations = showcases.reduce((sum, showcase) => sum + showcase.variations, 0);
</script>

<div class="index-container">
  <div class="index-header">
    <img src="/accorddesk_logo_alpha.png" alt="AccordDesk Logo" class="header-logo" />
    <h1>AccordDesk Logo Showcase</h1>
    <p class="subtitle">Explore {totalVariations} different visual presentations across {showcases.length} categories</p>
    <p class="description">
      This comprehensive showcase demonstrates various ways to present the AccordDesk logo 
      across different contexts, sizes, and styling approaches. Each category includes multiple 
      variations with specific use cases and implementation details.
    </p>
  </div>

  <div class="showcases-grid">
    {#each showcases as showcase}
      <Link to={showcase.path} class="showcase-card">
        <div class="card-header">
          <div class="card-number">{showcase.id}</div>
          <h2>{showcase.title}</h2>
          <div class="card-badge">{showcase.variations} variations</div>
        </div>
        <p class="card-description">{showcase.description}</p>
        <div class="card-highlights">
          <h4>Includes:</h4>
          <ul>
            {#each showcase.highlights.slice(0, 4) as highlight}
              <li>{highlight}</li>
            {/each}
            {#if showcase.highlights.length > 4}
              <li class="more">+ {showcase.highlights.length - 4} more...</li>
            {/if}
          </ul>
        </div>
        <div class="card-footer">
          <span class="view-link">View Showcase →</span>
        </div>
      </Link>
    {/each}
  </div>

  <div class="quick-links">
    <h3>Quick Navigation</h3>
    <div class="links-grid">
      <Link to="/showcase" class="quick-link">
        ← All Showcases
      </Link>
      <Link to="/" class="quick-link">
        Main App
      </Link>
      <Link to="/showcase/contract-header" class="quick-link">
        Contract Headers
      </Link>
    </div>
  </div>

  <div class="usage-guide">
    <h3>How to Use This Showcase</h3>
    <div class="guide-grid">
      <div class="guide-item">
        <div class="guide-icon">1</div>
        <h4>Browse Categories</h4>
        <p>Click on any showcase card to explore specific logo presentation styles</p>
      </div>
      <div class="guide-item">
        <div class="guide-icon">2</div>
        <h4>Review Variations</h4>
        <p>Each showcase contains multiple variations with different sizes and contexts</p>
      </div>
      <div class="guide-item">
        <div class="guide-icon">3</div>
        <h4>Check Use Cases</h4>
        <p>Every variation includes recommended use cases and implementation notes</p>
      </div>
      <div class="guide-item">
        <div class="guide-icon">4</div>
        <h4>Implement</h4>
        <p>View the source code to see exact CSS and HTML implementation</p>
      </div>
    </div>
  </div>
</div>

<style>
  .index-container {
    min-height: 100vh;
    background-color: #fafafa;
    padding: 80px 60px;
  }

  .index-header {
    max-width: 900px;
    margin: 0 auto 80px;
    text-align: center;
  }

  .header-logo {
    height: 150px;
    width: auto;
    margin-bottom: 40px;
  }

  .index-header h1 {
    font-size: 48px;
    font-weight: 300;
    letter-spacing: -1px;
    margin-bottom: 20px;
    color: #1a1a1a;
  }

  .subtitle {
    font-size: 20px;
    font-weight: 300;
    color: #2d5016;
    margin-bottom: 20px;
    letter-spacing: 0.2px;
  }

  .description {
    font-size: 16px;
    font-weight: 300;
    color: #666;
    line-height: 1.8;
    max-width: 700px;
    margin: 0 auto;
  }

  .showcases-grid {
    max-width: 1400px;
    margin: 0 auto 80px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    gap: 30px;
  }

  .showcase-card {
    background: #ffffff;
    border: 1px solid #e5e5e5;
    padding: 40px;
    text-decoration: none;
    color: inherit;
    transition: all 0.3s ease;
    display: flex;
    flex-direction: column;
  }

  .showcase-card:hover {
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
    transform: translateY(-4px);
    border-color: #2d5016;
  }

  .card-header {
    display: flex;
    align-items: center;
    gap: 15px;
    margin-bottom: 20px;
    flex-wrap: wrap;
  }

  .card-number {
    width: 40px;
    height: 40px;
    background: #2d5016;
    color: #ffffff;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    font-weight: 400;
  }

  .card-header h2 {
    font-size: 24px;
    font-weight: 400;
    color: #1a1a1a;
    flex: 1;
    margin: 0;
  }

  .card-badge {
    font-size: 11px;
    font-weight: 400;
    color: #2d5016;
    background: rgba(45, 80, 22, 0.1);
    padding: 6px 12px;
    border-radius: 12px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  .card-description {
    font-size: 14px;
    color: #666;
    line-height: 1.6;
    margin-bottom: 25px;
  }

  .card-highlights {
    flex: 1;
    margin-bottom: 25px;
  }

  .card-highlights h4 {
    font-size: 12px;
    font-weight: 500;
    color: #1a1a1a;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    margin-bottom: 12px;
  }

  .card-highlights ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .card-highlights li {
    font-size: 13px;
    color: #666;
    margin-bottom: 8px;
    padding-left: 20px;
    position: relative;
  }

  .card-highlights li::before {
    content: '•';
    position: absolute;
    left: 0;
    color: #2d5016;
    font-weight: bold;
  }

  .card-highlights li.more {
    color: #999;
    font-style: italic;
  }

  .card-footer {
    padding-top: 20px;
    border-top: 1px solid #e5e5e5;
  }

  .view-link {
    font-size: 14px;
    font-weight: 400;
    color: #2d5016;
    transition: all 0.3s;
  }

  .showcase-card:hover .view-link {
    transform: translateX(5px);
    display: inline-block;
  }

  .quick-links {
    max-width: 1400px;
    margin: 0 auto 60px;
  }

  .quick-links h3 {
    font-size: 20px;
    font-weight: 400;
    color: #1a1a1a;
    margin-bottom: 20px;
    text-align: center;
  }

  .links-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
  }

  .quick-link {
    display: block;
    padding: 20px 30px;
    background: #ffffff;
    border: 1px solid #e5e5e5;
    text-align: center;
    text-decoration: none;
    color: #1a1a1a;
    font-size: 14px;
    font-weight: 400;
    transition: all 0.3s;
  }

  .quick-link:hover {
    background: #2d5016;
    color: #ffffff;
    border-color: #2d5016;
  }

  .usage-guide {
    max-width: 1400px;
    margin: 0 auto;
    padding: 60px 0;
    border-top: 1px solid #e5e5e5;
  }

  .usage-guide h3 {
    font-size: 28px;
    font-weight: 300;
    color: #1a1a1a;
    margin-bottom: 40px;
    text-align: center;
  }

  .guide-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 30px;
  }

  .guide-item {
    text-align: center;
  }

  .guide-icon {
    width: 60px;
    height: 60px;
    background: #2d5016;
    color: #ffffff;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    font-weight: 300;
    margin: 0 auto 20px;
  }

  .guide-item h4 {
    font-size: 18px;
    font-weight: 400;
    color: #1a1a1a;
    margin-bottom: 12px;
  }

  .guide-item p {
    font-size: 14px;
    color: #666;
    line-height: 1.6;
  }

  /* Responsive */
  @media (max-width: 1024px) {
    .showcases-grid {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 640px) {
    .index-container {
      padding: 60px 30px;
    }

    .index-header h1 {
      font-size: 36px;
    }

    .header-logo {
      height: 100px;
    }

    .showcase-card {
      padding: 30px;
    }

    .guide-grid {
      grid-template-columns: 1fr;
    }
  }
</style>

