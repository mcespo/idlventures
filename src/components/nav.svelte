<script>
	import IDLVentures from './../images/IDL-Ventures.svg';
	let navOpen = false;
	function handleNav() {
		navOpen = !navOpen;
	}
</script>

<header class="bg-white shadow top-0 sticky z-10">
	<div class="max-w-7xl mx-auto px-4 sm:px-6">
		<div class="flex justify-between items-center py-6 md:justify-start md:space-x-10">
			<div class="flex justify-start lg:w-0 lg:flex-1">
				<a href="/">
					<h1 class="sr-only">IDL Ventures</h1>
					<IDLVentures height="4rem" />
				</a>
			</div>
			<div class="-mr-2 -my-2 md:hidden">
				<button
					on:click={handleNav}
					type="button"
					class="bg-white rounded-md p-2 inline-flex items-center justify-center text-idl-gray hover:text-idl-gray-dark hover:bg-idl-gray-light focus:outline-none focus:ring-2 focus:ring-inset focus:ring-idl-blue"
					aria-expanded="false"
				>
					<span class="sr-only">Open menu</span>
					<!-- Heroicon name: outline/menu -->
					<svg
						class="h-6 w-6"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						aria-hidden="true"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 6h16M4 12h16M4 18h16"
						/>
					</svg>
				</button>
			</div>
			<nav class="hidden md:flex space-x-10">
				<a href="#platform" class="uppercase text-base font-medium text-idl-gray hover:text-idl-gray-dark"
					>Platform</a
				>
				<a href="#people" class="uppercase text-base font-medium text-idl-gray hover:text-idl-gray-dark"
					>People</a
				>
				<a href="#fund" class="uppercase text-base font-medium text-idl-gray hover:text-idl-gray-dark"
					>Fund</a
				>
				<a href="#portfolio"class="uppercase text-base font-medium text-idl-gray hover:text-idl-gray-dark"
					>Portfolio</a
				>
			</nav>
		</div>
	</div>
	<div
		class:hidden={!navOpen}
		class="absolute top-0 inset-x-0 z-10 p-2 transition transform origin-top-right md:hidden"
	>
		<div
			class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50"
		>
			<div class="pt-5 pb-6 px-5">
				<div class="flex items-center justify-between">
					<div>
						<svg class="h-8 w-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 652 571">
							<style>
								.cls-1 {
									fill: #ee7623;
								}
								.cls-2 {
									fill: #54565a;
								}
							</style>
							<path
								d="M60 533c-4 0-5-2-6-5l-14-90c-1-4 1-6 5-6h1c3 0 5 1 5 4l11 76 10-76c0-3 2-4 5-4 5 0 6 1 6 6l-14 90c-1 3-3 5-6 5ZM120 438c0-4 2-6 7-6h20c4 0 5 1 5 5s-1 5-5 5h-16v34h15c4 0 5 1 5 5s-1 5-5 5h-15v36h16c4 0 5 1 5 5s-1 5-5 5h-20c-5 0-7-2-7-6ZM224 533c-3 0-5-2-6-6l-17-74v74c0 4-2 6-5 6h-1c-3 0-5-2-5-6v-89c0-5 2-6 7-6h4c3 0 5 1 6 5l16 67v-67c0-4 1-5 5-5s5 1 5 5v89c0 5-1 7-6 7ZM296 442v85c0 4-2 6-6 6s-6-2-6-6v-85h-10c-4 0-5-1-5-5s1-5 5-5h32c4 0 5 1 5 5s-1 5-5 5ZM381 432c4 0 6 1 6 5v78c0 12-6 18-19 18h-3c-13 0-19-6-19-18v-78c0-4 2-5 6-5s6 1 6 5v78c0 5 2 8 7 8h3c5 0 8-3 8-8v-78c0-4 1-5 5-5ZM467 469c0 8-3 14-9 16 6 2 9 6 9 13v29c0 4-2 6-6 6s-6-2-6-6v-28c0-6-3-9-9-9h-8v37c0 4-2 6-6 6s-5-2-5-6v-89c0-4 1-6 6-6h15c12 0 19 6 19 18Zm-12-19c0-5-3-8-8-8h-9v38h9c5 0 8-3 8-9ZM506 438c0-4 2-6 7-6h20c4 0 5 1 5 5s-1 5-5 5h-15v34h14c4 0 5 1 5 5s-1 5-5 5h-14v36h15c4 0 5 1 5 5s-1 5-5 5h-20c-5 0-7-2-7-6ZM606 481c8 6 10 10 10 19v15c0 12-6 18-19 18h-3c-12 0-18-6-18-18v-16c0-4 1-6 5-6s6 2 6 6v16c0 5 2 8 7 8h3c5 0 7-3 7-8v-15c0-5-1-7-5-9l-14-11c-7-5-9-10-9-18v-12c0-13 6-19 18-19h3c12 0 19 6 19 18v13c0 4-2 6-6 6s-6-2-6-6v-13c0-5-2-8-7-8h-2c-5 0-8 3-8 8v13c0 4 2 6 5 9Z"
								class="cls-1"
							/>
							<path
								d="M191 335V95l-38 38v236h38v-34zM293 38h-63v38h61c25 0 37 12 37 38v179c0 26-12 38-37 38h-23V95l-38 38v236h63c49 0 73-23 73-73V111c0-49-24-73-73-73ZM405 38h38v293h-38zM443 331l-38 38h100v-38h-62z"
								class="cls-2"
							/>
							<path d="M153 38h38v38h-38Z" class="cls-1" />
						</svg>
					</div>
					<div class="-mr-2">
						<button
							on:click={handleNav}
							type="button"
							class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
						>
							<span class="sr-only">Close menu</span>
							<!-- Heroicon name: outline/x -->
							<svg
								class="h-6 w-6"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								aria-hidden="true"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M6 18L18 6M6 6l12 12"
								/>
							</svg>
						</button>
					</div>
				</div>
				<div class="mt-6">
					<nav class="grid gap-y-8">
						<a
							href="#platform"
							class="uppercase text-base font-medium text-idl-gray hover:text-idl-gray-dark"
							>Platform</a
						>
						<a
							href="#people"
							class="uppercase text-base font-medium text-idl-gray hover:text-idl-gray-dark"
							>People</a
						>
						<a
							href="/"
							class="uppercase text-base font-medium text-idl-gray hover:text-idl-gray-dark">Fund</a
						>
						<a
							href="/"
							class="uppercase text-base font-medium text-idl-gray hover:text-idl-gray-dark"
							>Portfolio</a
						>
					</nav>
				</div>
			</div>
		</div>
	</div>
</header>
