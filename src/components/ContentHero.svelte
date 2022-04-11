<script>
	export let header;
	export let id;
</script>

<section id="{id}" class="relative bg-idl-orange">
	<div class="relative text-center max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8 text-4xl sm:text-5xl lg:text-6xl">
		<h2 class="font-extralight tracking-tight text-white leading-tight">
			{@html header}
		</h2>
	</div>
</section>
