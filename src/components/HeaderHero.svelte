<script>
	import backgroundImage from './../images/Waves_Background_Hero_2.jpg';
	export let header;
	export let subheader;
</script>

<section class="relative bg-indigo-800">
	<div class="absolute inset-0">
		<img class="w-full h-full object-cover" src={backgroundImage} alt="" />
	</div>
	<div class="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8 lg:py-56">
		<h1 class="text-4xl font-extralight tracking-tight text-white sm:text-5xl lg:text-6xl">
			{header}
		</h1>
		{#if subheader}
			<p class="mt-6 text-xl max-w-3xl text-white">{subheader}</p>
		{/if}
		<div class="rounded-md w-40">
			<a href="/" class="flex border-0 items-center justify-center px-8 py-3 text-base font-medium rounded-md text-white bg-idl-orange md:py-4 md:text-lg md:px-10">
				Discover
			</a>
		</div>
	</div>
</section>
