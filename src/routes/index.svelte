<script>
	import Nav from './../components/nav.svelte';
	import HeaderHero from './../components/HeaderHero.svelte';
	import ContentHero from './../components/ContentHero.svelte';
	import Quote from './../components/quote.svelte';
	import HeroWithIcons from './../components/HeroWithIcons.svelte';
	import Profiles from './../components/Profiles.svelte';
	import ContentWithImage from './../components/ContentWithImage.svelte';
	import HeroWithIcons2 from './../components/HeroWithIcons2.svelte';
	import ContentHeroAlt from './../components/ContentHeroAlt.svelte';
	import Brands from './../components/Brands.svelte';
	import Footer from './../components/Footer.svelte';
</script>

<!-- This example requires Tailwind CSS v2.0+ -->
<div class="relative">
	<Nav />
	<main class="lg:relative">
		<HeaderHero
			header="Finally an Internationalization Platform Designed for Early-Stage Deep Techs"
			subheader="IDL Ventures' internationalization platform provides all resources to meet deep techs' most fundamental needs."
		/>
		<ContentHero
			header="We enrich ecosystems with more and faster impact solutions, such as to combat climate change, health crises, and food scarcity."
		/>
		<Quote />
		<HeroWithIcons />
		<ContentWithImage />
		<Profiles />
		<ContentHero
			header="Many of these solutions remain unknown, becoming lost because of stigmas associated with emerging countries. Until now."
		/>
		<HeroWithIcons2 />
		<ContentHeroAlt />
		<Brands />
	</main>
</div>
<Footer />
