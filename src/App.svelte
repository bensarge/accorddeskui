<script>
  import { Router, Route } from 'svelte-routing';
  import DraftingManagerView from './views/DraftingManagerView.svelte';
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

  // Placeholder for future views
  // import ContractView from './views/ContractView.svelte';
  // import NegotiationView from './views/NegotiationView.svelte';
</script>

<Router>
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

  <Route path="/">
    <DraftingManagerView />
  </Route>
</Router>

