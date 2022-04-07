<script>
  import Nav from './../components/nav.svelte';
  import HeaderHero from './../components/HeaderHero.svelte';
  import Quote from './../components/Quote.svelte';
  import HeroWithIcons from './../components/HeroWithIcons.svelte';
  import Profiles from './../components/Profiles.svelte';
  import PriceCards from './../components/PriceCards.svelte';
  import ContentWithImage from './../components/ContentWithImage.svelte';
  import Content from './../components/Content.svelte';
  import Brands from './../components/Brands.svelte';
  import Footer from './../components/Footer.svelte';
</script>

<!-- This example requires Tailwind CSS v2.0+ -->
<div class="relative">
  <Nav />
  <main class="lg:relative">
    <HeaderHero header="Finally an Internationalization Platform Designed for Early-Stage Deep Techs" subheader="IDL Ventures' internationalization platform provides all resources to meet deep techs' most fundamental needs." />
    <Quote />
    <HeroWithIcons />
    <ContentWithImage />
    <PriceCards />
    <Profiles />
    <HeaderHero header="Many of these solutions remain unknown, becoming lost because of stigmas associated with emerging countries. Until now." subheader="" />
    <Content />
    <Brands />
  </main>
</div>
<Footer />
