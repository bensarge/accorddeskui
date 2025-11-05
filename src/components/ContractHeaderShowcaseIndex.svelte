<script>
  import { Link } from 'svelte-routing';
  
  const showcases = [
    {
      id: 1,
      title: 'Condensed Header Layouts',
      path: '/showcase/contract-header/condensed',
      description: 'Space-efficient single-section layouts combining metadata and party information',
      variations: 6,
      highlights: [
        'Horizontal split layout (metadata left, parties right)',
        'Compact card-based grid layout',
        'Tabbed interface (metadata/parties/terms)',
        'Collapsible accordion sections',
        'Inline horizontal flow layout',
        'Minimal single-row header'
      ]
    },
    {
      id: 2,
      title: 'Card Layout Variations',
      path: '/showcase/contract-header/card-variations',
      description: 'Deep dive into card-based layouts with different information density levels',
      variations: 6,
      highlights: [
        'Minimal cards (3 cards, essential fields only)',
        'Standard cards (4 cards, balanced density)',
        'Detailed cards (4 cards, enhanced information)',
        'Expanded cards (6 cards, maximum detail)',
        'Mixed density (prioritized information hierarchy)',
        'Condensed grid (5 cards, ultra-scannable)'
      ]
    }
  ];

  const totalVariations = showcases.reduce((sum, showcase) => sum + showcase.variations, 0);
</script>

<div class="index-container">
  <div class="index-header">
    <h1>Contract Header Layout Showcase</h1>
    <p class="subtitle">Explore {totalVariations} different visual presentations for contract metadata and party information</p>
    <p class="description">
      This showcase demonstrates various approaches to presenting contract metadata, party information, 
      and terms in a vertically condensed format while maintaining visual harmony with the existing 
      AccordDesk design language. Each variation prioritizes space efficiency without sacrificing 
      information clarity or professional aesthetics.
    </p>
    <div class="design-goals">
      <h3>Design Goals</h3>
      <div class="goals-grid">
        <div class="goal-item">
          <div class="goal-icon">📐</div>
          <h4>Vertical Space Efficiency</h4>
          <p>Condense two-section layout to use less height</p>
        </div>
        <div class="goal-item">
          <div class="goal-icon">🎨</div>
          <h4>Visual Harmony</h4>
          <p>Maintain consistency with dark green TOC (#385757)</p>
        </div>
        <div class="goal-item">
          <div class="goal-icon">✨</div>
          <h4>Professional Aesthetics</h4>
          <p>Preserve elegant, clean design language</p>
        </div>
        <div class="goal-item">
          <div class="goal-icon">📊</div>
          <h4>Information Density</h4>
          <p>Display all data without overwhelming users</p>
        </div>
      </div>
    </div>
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
            {#each showcase.highlights as highlight}
              <li>{highlight}</li>
            {/each}
          </ul>
        </div>
        <div class="card-footer">
          <span class="view-link">View Showcase →</span>
        </div>
      </Link>
    {/each}
  </div>

  <div class="back-link">
    <Link to="/">← Back to Home</Link>
  </div>
</div>

<style>
  .index-container {
    min-height: 100vh;
    background-color: #fafafa;
    padding: 60px 40px;
  }

  .index-header {
    max-width: 1200px;
    margin: 0 auto 60px;
    text-align: center;
  }

  .index-header h1 {
    font-size: 48px;
    font-weight: 300;
    letter-spacing: -1px;
    margin-bottom: 20px;
    color: #385757;
  }

  .subtitle {
    font-size: 18px;
    font-weight: 300;
    color: #666;
    margin-bottom: 16px;
    letter-spacing: 0.2px;
  }

  .description {
    font-size: 15px;
    font-weight: 300;
    color: #666;
    line-height: 1.7;
    max-width: 900px;
    margin: 0 auto 40px;
  }

  .design-goals {
    margin-top: 50px;
    padding: 40px;
    background: #ffffff;
    border: 1px solid #e5e5e5;
    border-radius: 4px;
  }

  .design-goals h3 {
    font-size: 20px;
    font-weight: 400;
    color: #385757;
    margin-bottom: 30px;
    text-align: center;
  }

  .goals-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 30px;
  }

  .goal-item {
    text-align: center;
  }

  .goal-icon {
    font-size: 32px;
    margin-bottom: 12px;
  }

  .goal-item h4 {
    font-size: 14px;
    font-weight: 600;
    color: #385757;
    margin-bottom: 8px;
  }

  .goal-item p {
    font-size: 12px;
    font-weight: 300;
    color: #666;
    line-height: 1.5;
  }

  .showcases-grid {
    max-width: 1200px;
    margin: 0 auto 60px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
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
    box-shadow: 0 4px 20px rgba(56, 87, 87, 0.1);
    border-color: #385757;
    transform: translateY(-2px);
  }

  .card-header {
    display: flex;
    align-items: center;
    gap: 16px;
    margin-bottom: 20px;
  }

  .card-number {
    width: 40px;
    height: 40px;
    background-color: #385757;
    color: #ffffff;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    font-weight: 600;
    flex-shrink: 0;
  }

  .card-header h2 {
    font-size: 22px;
    font-weight: 400;
    color: #385757;
    flex: 1;
    margin: 0;
  }

  .card-badge {
    background-color: #f5f5f5;
    color: #666;
    padding: 6px 12px;
    border-radius: 2px;
    font-size: 11px;
    font-weight: 400;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  .card-description {
    font-size: 14px;
    font-weight: 300;
    color: #666;
    line-height: 1.6;
    margin-bottom: 24px;
  }

  .card-highlights {
    flex: 1;
  }

  .card-highlights h4 {
    font-size: 12px;
    font-weight: 600;
    color: #385757;
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
    font-weight: 300;
    color: #666;
    padding: 6px 0;
    padding-left: 20px;
    position: relative;
  }

  .card-highlights li::before {
    content: '→';
    position: absolute;
    left: 0;
    color: #385757;
  }

  .card-footer {
    margin-top: 24px;
    padding-top: 20px;
    border-top: 1px solid #e5e5e5;
  }

  .view-link {
    font-size: 14px;
    font-weight: 400;
    color: #385757;
    letter-spacing: 0.3px;
  }

  .showcase-card:hover .view-link {
    text-decoration: underline;
  }

  .back-link {
    text-align: center;
    margin-top: 40px;
  }

  .back-link :global(a) {
    font-size: 14px;
    font-weight: 300;
    color: #666;
    text-decoration: none;
    transition: color 0.2s ease;
  }

  .back-link :global(a:hover) {
    color: #385757;
  }
</style>

