<script>
    import backgroundImage from './../images/idl_orange-grid-background.jpg';
	export let header;
	export let subheader;
</script>

<section class="relative bg-indigo-800">
  <div class="absolute inset-0">
    <img class="w-full h-full object-cover" src="{ backgroundImage }" alt="">
  </div>
  <div class="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
    <h1 class="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">{header}</h1>
    {#if subheader}
    <p class="mt-6 text-xl text-indigo-100 max-w-3xl text-white">{subheader}</p>
    {/if}
  </div>
</section>
