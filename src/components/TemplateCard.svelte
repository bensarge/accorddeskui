<script>
  export let template;
  export let onClick = () => {};
</script>

<div class="template-card" on:click={onClick} on:keydown={(e) => e.key === 'Enter' && onClick()} role="button" tabindex="0">
  <div class="card-body">
    <div class="card-title">{template.title}</div>
    <div class="card-type">
      {#each template.type as type}
        {type}<br>
      {/each}
    </div>
    <div class="divider"></div>
    <div class="card-meta">
      <strong>Author:</strong> {template.author}<br>
      <strong>Date:</strong> {template.date}
    </div>
  </div>
</div>

<style>
  .template-card {
    background: #ffffff;
    border: 1px solid #e5e5e5;
    border-radius: 2px;
    overflow: hidden;
    transition: all 0.3s ease;
    cursor: pointer;
    position: relative;
  }

  .template-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 3px;
    background-color: #385757;
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s ease;
  }

  .template-card:hover::before {
    transform: scaleX(1);
  }

  .template-card:hover {
    border-color: #385757;
    box-shadow: 0 4px 20px rgba(45, 80, 22, 0.08);
  }

  .template-card:active{
    background-color: #C4EACC;
  }

  .card-body {
    padding: 30px 25px;
  }

  .card-title {
    font-size: 15px;
    font-weight: 400;
    margin-bottom: 20px;
    color: #1a1a1a;
    letter-spacing: -0.2px;
  }

  .card-type {
    font-size: 11px;
    font-weight: 400;
    line-height: 2;
    margin-bottom: 25px;
    color: #666;
    letter-spacing: 0.5px;
  }

  .card-meta {
    font-size: 11px;
    line-height: 1.8;
    color: #999;
    font-weight: 300;
  }

  .card-meta strong {
    color: #666;
    font-weight: 400;
  }

  .divider {
    width: 20px;
    height: 1px;
    background-color: #e5e5e5;
    margin: 15px 0;
  }
</style>

