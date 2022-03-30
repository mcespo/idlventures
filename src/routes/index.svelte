<script>
// 	let navWidth = 0;
	let navOpen = false;
	
	function handleNav() {
		navOpen = !navOpen;
// 		navWidth === 0 ? navWidth = 40 : navWidth = 0;
	}
	
function handleNavWithKey(e) {
	console.log(e.code);
	if (e.code === "F1") {
		navOpen = !navOpen;
	}
}	
	
// 	const openNav = () => {
// 		navOpen = !navOpen;
// 		navWidth = 40;
// 	}
	
// 	const closeNav = () => {
// 		navOpen = !navOpen;
// 		navWidth = 0;
// 	}	
</script>

<!-- This example requires Tailwind CSS v2.0+ -->
<div class="relative">
  <div class="bg-white shadow">
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
      <div class="flex justify-between items-center py-6 md:justify-start md:space-x-10">
        <div class="flex justify-start lg:w-0 lg:flex-1">
          <a href="#">
            <span class="sr-only">Workflow</span>
            <svg  class="h-8 w-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 652 571">
                <style>
                  .cls-1{fill:#ee7623}.cls-2{fill:#54565a}
                </style>
                <path d="M60 533c-4 0-5-2-6-5l-14-90c-1-4 1-6 5-6h1c3 0 5 1 5 4l11 76 10-76c0-3 2-4 5-4 5 0 6 1 6 6l-14 90c-1 3-3 5-6 5ZM120 438c0-4 2-6 7-6h20c4 0 5 1 5 5s-1 5-5 5h-16v34h15c4 0 5 1 5 5s-1 5-5 5h-15v36h16c4 0 5 1 5 5s-1 5-5 5h-20c-5 0-7-2-7-6ZM224 533c-3 0-5-2-6-6l-17-74v74c0 4-2 6-5 6h-1c-3 0-5-2-5-6v-89c0-5 2-6 7-6h4c3 0 5 1 6 5l16 67v-67c0-4 1-5 5-5s5 1 5 5v89c0 5-1 7-6 7ZM296 442v85c0 4-2 6-6 6s-6-2-6-6v-85h-10c-4 0-5-1-5-5s1-5 5-5h32c4 0 5 1 5 5s-1 5-5 5ZM381 432c4 0 6 1 6 5v78c0 12-6 18-19 18h-3c-13 0-19-6-19-18v-78c0-4 2-5 6-5s6 1 6 5v78c0 5 2 8 7 8h3c5 0 8-3 8-8v-78c0-4 1-5 5-5ZM467 469c0 8-3 14-9 16 6 2 9 6 9 13v29c0 4-2 6-6 6s-6-2-6-6v-28c0-6-3-9-9-9h-8v37c0 4-2 6-6 6s-5-2-5-6v-89c0-4 1-6 6-6h15c12 0 19 6 19 18Zm-12-19c0-5-3-8-8-8h-9v38h9c5 0 8-3 8-9ZM506 438c0-4 2-6 7-6h20c4 0 5 1 5 5s-1 5-5 5h-15v34h14c4 0 5 1 5 5s-1 5-5 5h-14v36h15c4 0 5 1 5 5s-1 5-5 5h-20c-5 0-7-2-7-6ZM606 481c8 6 10 10 10 19v15c0 12-6 18-19 18h-3c-12 0-18-6-18-18v-16c0-4 1-6 5-6s6 2 6 6v16c0 5 2 8 7 8h3c5 0 7-3 7-8v-15c0-5-1-7-5-9l-14-11c-7-5-9-10-9-18v-12c0-13 6-19 18-19h3c12 0 19 6 19 18v13c0 4-2 6-6 6s-6-2-6-6v-13c0-5-2-8-7-8h-2c-5 0-8 3-8 8v13c0 4 2 6 5 9Z" class="cls-1"/>
                <path d="M191 335V95l-38 38v236h38v-34zM293 38h-63v38h61c25 0 37 12 37 38v179c0 26-12 38-37 38h-23V95l-38 38v236h63c49 0 73-23 73-73V111c0-49-24-73-73-73ZM405 38h38v293h-38zM443 331l-38 38h100v-38h-62z" class="cls-2"/>
                <path d="M153 38h38v38h-38Z" class="cls-1"/>
              </svg>
          </a>
        </div>
        <div class="-mr-2 -my-2 md:hidden">
          <button on:click={handleNav} type="button" class="bg-white rounded-md p-2 inline-flex items-center justify-center text-idl-gray hover:text-idl-gray-dark hover:bg-idl-gray-light focus:outline-none focus:ring-2 focus:ring-inset focus:ring-idl-blue" aria-expanded="false">
            <span class="sr-only">Open menu</span>
            <!-- Heroicon name: outline/menu -->
            <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        <nav class="hidden md:flex space-x-10">
          <div class="relative">
          </div>

          <a href="#" class="text-base font-medium text-idl-gray hover:text-idl-gray-dark"> Pricing </a>
          <a href="#" class="text-base font-medium text-idl-gray hover:text-idl-gray-dark"> Docs </a>

          <div class="relative">
            <!-- Item active: "text-gray-900", Item inactive: "text-gray-500" -->
            <!--
              'More' flyout menu, show/hide based on flyout menu state.

              Entering: "transition ease-out duration-200"
                From: "opacity-0 translate-y-1"
                To: "opacity-100 translate-y-0"
              Leaving: "transition ease-in duration-150"
                From: "opacity-100 translate-y-0"
                To: "opacity-0 translate-y-1"
            -->
            <div class="absolute left-1/2 z-10 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-md sm:px-0"></div>
          </div>
        </nav>
        <div class="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
          <a href="#" class="whitespace-nowrap text-base font-medium text-idl-gray hover:text-idl-gray-dark"> Sign in </a>
          <a href="#" class="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-idl-blue hover:bg-indigo-700"> Sign up </a>
        </div>
      </div>
    </div>

    <!--
      Mobile menu, show/hide based on mobile menu state.

      Entering: "duration-200 ease-out"
        From: "opacity-0 scale-95"
        To: "opacity-100 scale-100"
      Leaving: "duration-100 ease-in"
        From: "opacity-100 scale-100"
        To: "opacity-0 scale-95"
    -->
    <div class:hidden={!navOpen} class="absolute top-0 inset-x-0 z-10 p-2 transition transform origin-top-right md:hidden">
      <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
        <div class="pt-5 pb-6 px-5">
          <div class="flex items-center justify-between">
            <div>
              <svg  class="h-8 w-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 652 571">
                <style>
                  .cls-1{fill:#ee7623}.cls-2{fill:#54565a}
                </style>
                <path d="M60 533c-4 0-5-2-6-5l-14-90c-1-4 1-6 5-6h1c3 0 5 1 5 4l11 76 10-76c0-3 2-4 5-4 5 0 6 1 6 6l-14 90c-1 3-3 5-6 5ZM120 438c0-4 2-6 7-6h20c4 0 5 1 5 5s-1 5-5 5h-16v34h15c4 0 5 1 5 5s-1 5-5 5h-15v36h16c4 0 5 1 5 5s-1 5-5 5h-20c-5 0-7-2-7-6ZM224 533c-3 0-5-2-6-6l-17-74v74c0 4-2 6-5 6h-1c-3 0-5-2-5-6v-89c0-5 2-6 7-6h4c3 0 5 1 6 5l16 67v-67c0-4 1-5 5-5s5 1 5 5v89c0 5-1 7-6 7ZM296 442v85c0 4-2 6-6 6s-6-2-6-6v-85h-10c-4 0-5-1-5-5s1-5 5-5h32c4 0 5 1 5 5s-1 5-5 5ZM381 432c4 0 6 1 6 5v78c0 12-6 18-19 18h-3c-13 0-19-6-19-18v-78c0-4 2-5 6-5s6 1 6 5v78c0 5 2 8 7 8h3c5 0 8-3 8-8v-78c0-4 1-5 5-5ZM467 469c0 8-3 14-9 16 6 2 9 6 9 13v29c0 4-2 6-6 6s-6-2-6-6v-28c0-6-3-9-9-9h-8v37c0 4-2 6-6 6s-5-2-5-6v-89c0-4 1-6 6-6h15c12 0 19 6 19 18Zm-12-19c0-5-3-8-8-8h-9v38h9c5 0 8-3 8-9ZM506 438c0-4 2-6 7-6h20c4 0 5 1 5 5s-1 5-5 5h-15v34h14c4 0 5 1 5 5s-1 5-5 5h-14v36h15c4 0 5 1 5 5s-1 5-5 5h-20c-5 0-7-2-7-6ZM606 481c8 6 10 10 10 19v15c0 12-6 18-19 18h-3c-12 0-18-6-18-18v-16c0-4 1-6 5-6s6 2 6 6v16c0 5 2 8 7 8h3c5 0 7-3 7-8v-15c0-5-1-7-5-9l-14-11c-7-5-9-10-9-18v-12c0-13 6-19 18-19h3c12 0 19 6 19 18v13c0 4-2 6-6 6s-6-2-6-6v-13c0-5-2-8-7-8h-2c-5 0-8 3-8 8v13c0 4 2 6 5 9Z" class="cls-1"/>
                <path d="M191 335V95l-38 38v236h38v-34zM293 38h-63v38h61c25 0 37 12 37 38v179c0 26-12 38-37 38h-23V95l-38 38v236h63c49 0 73-23 73-73V111c0-49-24-73-73-73ZM405 38h38v293h-38zM443 331l-38 38h100v-38h-62z" class="cls-2"/>
                <path d="M153 38h38v38h-38Z" class="cls-1"/>
              </svg>
            </div>
            <div class="-mr-2">
              <button on:click={handleNav} type="button" class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                <span class="sr-only">Close menu</span>
                <!-- Heroicon name: outline/x -->
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
          <div class="mt-6">
            <nav class="grid gap-y-8">
              <a href="#" class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                <!-- Heroicon name: outline/chart-bar -->
                <svg class="flex-shrink-0 h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                <span class="ml-3 text-base font-medium text-gray-900"> Analytics </span>
              </a>

              <a href="#" class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                <!-- Heroicon name: outline/cursor-click -->
                <svg class="flex-shrink-0 h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                </svg>
                <span class="ml-3 text-base font-medium text-gray-900"> Engagement </span>
              </a>

              <a href="#" class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                <!-- Heroicon name: outline/shield-check -->
                <svg class="flex-shrink-0 h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span class="ml-3 text-base font-medium text-gray-900"> Security </span>
              </a>

              <a href="#" class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                <!-- Heroicon name: outline/view-grid -->
                <svg class="flex-shrink-0 h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
                <span class="ml-3 text-base font-medium text-gray-900"> Integrations </span>
              </a>

              <a href="#" class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                <!-- Heroicon name: outline/refresh -->
                <svg class="flex-shrink-0 h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                <span class="ml-3 text-base font-medium text-gray-900"> Automations </span>
              </a>
            </nav>
          </div>
        </div>
        <div class="py-6 px-5 space-y-6">
          <div class="grid grid-cols-2 gap-y-4 gap-x-8">
            <a href="#" class="text-base font-medium text-gray-900 hover:text-gray-700"> Pricing </a>

            <a href="#" class="text-base font-medium text-gray-900 hover:text-gray-700"> Docs </a>

            <a href="#" class="text-base font-medium text-gray-900 hover:text-gray-700"> Help Center </a>

            <a href="#" class="text-base font-medium text-gray-900 hover:text-gray-700"> Guides </a>

            <a href="#" class="text-base font-medium text-gray-900 hover:text-gray-700"> Events </a>

            <a href="#" class="text-base font-medium text-gray-900 hover:text-gray-700"> Security </a>
          </div>
          <div>
            <a href="#" class="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-idl-green hover:bg-idl-blue"> Sign up </a>
          </div>
        </div>
      </div>
    </div>
  </div>

  <main class="lg:relative">
    <div class="mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-48 lg:text-left">
      <div class="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
        <h1 class="text-4xl tracking-tight font-extrabold text-idl-gray-dark sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
          <span class="block xl:inline">Data to enrich your</span>
          <span class="block text-idl-orange xl:inline">online business</span>
        </h1>
        <p class="mt-3 max-w-md mx-auto text-lg text-idl-gray-dark sm:text-xl md:mt-5 md:max-w-3xl">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.</p>
        <div class="mt-10 sm:flex sm:justify-center lg:justify-start">
        </div>
      </div>
    </div>
    <div class="relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
      <img class="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80" alt="">
    </div>
  </main>
</div>
