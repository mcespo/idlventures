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
          <a href="/">
            <h1 class="sr-only">IDL Ventures</h1>
            <svg class="h-20 w-auto" xmlns="http://www.w3.org/2000/svg"viewBox="0 0 934.5 379.6">
                <style>
                  .cls-1{fill:#54565a}.cls-2{fill:#ee7623}
                </style>
              <path d="M70.5 312.2V88.7l-35.3 35.4v220.2h35.3v-32.1zM165 35.9H107V71h56.4c23.8 0 34.8 11.9 34.8 35.7v166.5c0 23.8-11 35.7-34.8 35.7h-21.2V88.7L107 124v220.3h58.2c46.2 0 68.3-22 68.3-68.3V104.2c0-46.3-22-68.3-68.3-68.3ZM269.8 35.9h35.3V309h-35.3zM305 309.1l-35.2 35.2h93.4v-35.2H305z" class="cls-1"/>
              <path d="M35.3 35.9h35.2V71H35.3ZM382.1 234.4c-3.6 0-5-1.4-5.6-4.8l-13.2-83.5c-.7-4 1-6 5-6h.3c3 0 4.8 1.5 5.2 4.4l9.5 70.3 9.5-70.4c.4-2.8 2-4.3 5-4.3h.3c4.2 0 5.7 1.8 5 5.9l-13.3 83.7c-.5 3.3-2 4.8-5.6 4.8ZM437.7 146.5c0-4.4 1.7-6.1 6.1-6.1h18.7c3.7 0 4.9 1.2 4.9 4.8v.3c0 3.6-1.2 4.8-4.9 4.8h-14.1v31H462c3.4 0 4.7 1.3 4.7 4.6v.3c0 3.4-1.3 4.8-4.7 4.8h-13.6v33h14.4c3.6 0 4.8 1.2 4.8 4.8v.3c0 3.6-1.2 4.8-4.8 4.8h-19c-4.4 0-6.1-1.7-6.1-6.1ZM534.8 234.2c-3.3 0-5.3-1.6-6-4.8l-15.7-69v68.8c0 3.3-1.6 5-5 5h-.2c-3.4 0-5-1.7-5-5v-83c0-4.4 1.7-6.2 6.1-6.2h3.6c3.4 0 5.4 1.6 6 4.8l14.5 63.2v-63c0-3.3 1.6-5 5-5h.2c3.4 0 5 1.7 5 5v83c0 4.5-1.7 6.2-6.1 6.2ZM601.1 150.3V229c0 3.8-1.5 5.2-5.2 5.2h-.3c-3.7 0-5.2-1.4-5.2-5.2v-78.7H581c-3.6 0-4.8-1.2-4.8-4.9v-.2c0-3.6 1.2-4.8 4.8-4.8h29.7c3.6 0 4.8 1.2 4.8 4.8v.2c0 3.7-1.2 4.9-4.8 4.9ZM681 140.1c3.7 0 5.2 1.5 5.2 5.2v72c0 11.6-5.7 17.4-17.4 17.4h-3.3c-11.6 0-17.4-5.8-17.4-17.4v-72c0-3.7 1.5-5.2 5.2-5.2h.3c3.7 0 5.2 1.5 5.2 5.2V218c0 4.7 2.4 7 7.1 7h2.5c4.7 0 7.1-2.3 7.1-7v-72.6c0-3.7 1.5-5.2 5.2-5.2ZM760.3 175.1c0 7.6-2.8 12.4-8.3 14.7 5.6 1.5 8.4 5.8 8.4 12.6V229c0 3.8-1.5 5.2-5.2 5.2h-.3c-3.7 0-5.2-1.4-5.2-5.2v-26.2c0-5.5-2.7-8.2-8.1-8.2h-8V229c0 3.8-1.4 5.2-5.1 5.2h-.3c-3.8 0-5.2-1.4-5.2-5.2v-82.5c0-4.4 1.7-6.1 6.1-6.1H743c11.6 0 17.4 5.7 17.4 17.3Zm-10.7-17.9c0-4.7-2.4-7-7.1-7h-8.8v35h8c5.2 0 7.9-2.7 7.9-8ZM797 146.5c0-4.4 1.7-6.1 6.2-6.1h18.7c3.6 0 4.8 1.2 4.8 4.8v.3c0 3.6-1.2 4.8-4.8 4.8h-14.2v31h13.6c3.4 0 4.7 1.3 4.7 4.6v.3c0 3.4-1.3 4.8-4.7 4.8h-13.6v33h14.4c3.7 0 4.9 1.2 4.9 4.8v.3c0 3.6-1.2 4.8-4.9 4.8h-19c-4.4 0-6.1-1.7-6.1-6.1ZM890.3 186.3c6.8 5 9 9.4 9 17.4v13.6c0 11.7-5.8 17.4-17.4 17.4h-3c-11.3 0-17-5.7-17-17v-15c0-3.5 1.4-5 5-5h.3c3.6 0 5 1.5 5 5V218c0 4.7 2.4 7 7.1 7h2.2c4.6 0 7-2.3 7-7v-14c0-4.4-1.3-6.4-4.6-9l-13.1-9.4c-6.8-4.8-9-9.5-9-17.4v-11.3c0-11.6 5.8-17.3 17.4-17.3h2.7c11.3 0 17 5.7 17 17v12c0 3.7-1.4 5.1-5 5.1h-.3c-3.6 0-5-1.4-5-5v-12.4c0-4.7-2.5-7.1-7.1-7.1h-2c-4.6 0-7 2.4-7 7V168c0 4.4 1.5 6.4 4.8 9Z" class="cls-2"/>
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
          <a href="/" class="uppercase text-base font-medium text-idl-gray hover:text-idl-gray-dark">Platform</a>
          <a href="/" class="uppercase text-base font-medium text-idl-gray hover:text-idl-gray-dark">People</a>
          <a href="/" class="uppercase text-base font-medium text-idl-gray hover:text-idl-gray-dark">Fund</a>
          <a href="/" class="uppercase text-base font-medium text-idl-gray hover:text-idl-gray-dark">Portfolio</a>
        </nav>
      </div>
    </div>
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
              <a href="/" class="uppercase text-base font-medium text-idl-gray hover:text-idl-gray-dark">Platform</a>
              <a href="/" class="uppercase text-base font-medium text-idl-gray hover:text-idl-gray-dark">People</a>
              <a href="/" class="uppercase text-base font-medium text-idl-gray hover:text-idl-gray-dark">Fund</a>
              <a href="/" class="uppercase text-base font-medium text-idl-gray hover:text-idl-gray-dark">Portfolio</a>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>

  <main class="lg:relative">
    <!--
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
-->
<div class="bg-white">
  <div class="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 lg:flex lg:justify-between">
    <div class="">
      <h2 class="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">Finally an Internationalization Platform Designed for Early-Stage Deep Techs</h2>
      <p class="mt-5 text-xl text-gray-500">IDL Ventures' internationalization platform provides all resources to meet deep techs' most fundamental needs.</p>
      <button type="submit" class="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Discover</button>
    </div>
  </div>
</div>

  </main>
</div>
