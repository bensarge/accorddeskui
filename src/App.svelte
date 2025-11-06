<script>
  import { Router, Route } from 'svelte-routing';
  import DraftingManagerView from './views/DraftingManagerView.svelte';
  import ContractViewerView from './views/ContractViewerView.svelte';

  // Showcase Navigation Hub
  import ShowcaseNavigationHub from './components/ShowcaseNavigationHub.svelte';

  // Individual Showcase Components
  import AddTemplateButtonShowcase from './components/AddTemplateButtonShowcase.svelte';

  // Logo Showcase Components
  import LogoShowcaseIndex from './components/LogoShowcaseIndex.svelte';
  import LogoShowcase1_NavigationHeader from './components/LogoShowcase1_NavigationHeader.svelte';
  import LogoShowcase2_HeroLanding from './components/LogoShowcase2_HeroLanding.svelte';
  import LogoShowcase3_ResponsiveAdaptive from './components/LogoShowcase3_ResponsiveAdaptive.svelte';
  import LogoShowcase4_CreativeEffects from './components/LogoShowcase4_CreativeEffects.svelte';
  import LogoShowcase5_ContextualPlacements from './components/LogoShowcase5_ContextualPlacements.svelte';
  import LogoShowcase_HomeRoute from './components/LogoShowcase_HomeRoute.svelte';

  // Icon Showcase Components
  import DraftingManagerIconShowcase from './components/DraftingManagerIconShowcase.svelte';

  // Contract Header Showcase Components
  import ContractHeaderShowcaseIndex from './components/ContractHeaderShowcaseIndex.svelte';
  import ContractHeaderShowcase_Condensed from './components/ContractHeaderShowcase_Condensed.svelte';
  import ContractHeaderShowcase_CardVariations from './components/ContractHeaderShowcase_CardVariations.svelte';
  import CollapsibleHeaderShowcase from './components/CollapsibleHeaderShowcase.svelte';

  // TOC Navigation Showcase
  import TOCNavigationShowcase from './components/TOCNavigationShowcase.svelte';
</script>

<Router>
  <!-- Main Showcase Navigation Hub -->
  <Route path="/showcase">
    <ShowcaseNavigationHub />
  </Route>

  <!-- Individual Component Showcases -->
  <Route path="/showcase/add-template-buttons">
    <AddTemplateButtonShowcase />
  </Route>

  <!-- Logo Showcase Routes -->
  <Route path="/showcase/logo">
    <LogoShowcaseIndex />
  </Route>
  <Route path="/showcase/logo/navigation-header">
    <LogoShowcase1_NavigationHeader />
  </Route>
  <Route path="/showcase/logo/hero-landing">
    <LogoShowcase2_HeroLanding />
  </Route>
  <Route path="/showcase/logo/responsive-adaptive">
    <LogoShowcase3_ResponsiveAdaptive />
  </Route>
  <Route path="/showcase/logo/creative-effects">
    <LogoShowcase4_CreativeEffects />
  </Route>
  <Route path="/showcase/logo/contextual-placements">
    <LogoShowcase5_ContextualPlacements />
  </Route>
  <Route path="/showcase/logo/home-route-placements">
    <LogoShowcase_HomeRoute />
  </Route>

  <!-- Icon Showcase Routes -->
  <Route path="/showcase/drafting-manager-icons">
    <DraftingManagerIconShowcase />
  </Route>

  <!-- Contract Header Showcase Routes -->
  <Route path="/showcase/contract-header">
    <ContractHeaderShowcaseIndex />
  </Route>
  <Route path="/showcase/contract-header/condensed">
    <ContractHeaderShowcase_Condensed />
  </Route>
  <Route path="/showcase/contract-header/card-variations">
    <ContractHeaderShowcase_CardVariations />
  </Route>
  <Route path="/showcase/collapsible-header">
    <CollapsibleHeaderShowcase />
  </Route>

  <!-- TOC Navigation Showcase Route -->
  <Route path="/showcase/toc-navigation">
    <TOCNavigationShowcase />
  </Route>

  <!-- Contract Viewer Route -->
  <Route path="/contract/:contractId">
    <ContractViewerView />
  </Route>

  <Route path="/">
    <DraftingManagerView />
  </Route>
</Router>

