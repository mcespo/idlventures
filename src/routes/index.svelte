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

    
<!-- This example requires Tailwind CSS v2.0+ -->
<div class="relative bg-indigo-800">
  <div class="absolute inset-0">
    <img class="w-full h-full object-cover" src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&&sat=-100" alt="">
    <div class="absolute inset-0 bg-indigo-800 mix-blend-multiply" aria-hidden="true"></div>
  </div>
  <div class="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
    <h1 class="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">Get in touch</h1>
    <p class="mt-6 text-xl text-indigo-100 max-w-3xl">Mattis amet hendrerit dolor, quisque lorem pharetra. Pellentesque lacus nisi urna, arcu sociis eu. Orci vel lectus nisl eget eget ut consectetur. Sit justo viverra non adipisicing elit distinctio.</p>
  </div>
</div>


<!-- This example requires Tailwind CSS v2.0+ -->
<section class="py-12 bg-gray-50 overflow-hidden md:py-20 lg:py-24">
  <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="relative">
      <img class="mx-auto h-8" src="https://tailwindui.com/img/logos/workcation-logo-indigo-600-mark-gray-800-and-indigo-600-text.svg" alt="Workcation">
      <blockquote class="mt-10">
        <div class="max-w-3xl mx-auto text-center text-2xl leading-9 font-medium text-gray-900">
          <p>&ldquo;Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.&rdquo;</p>
        </div>
        <footer class="mt-8">
          <div class="md:flex md:items-center md:justify-center">
            <div class="mt-3 text-center md:mt-0 md:ml-4 md:flex md:items-center">
              <div class="max-w-3xl mx-auto text-center text-2xl leading-9 font-medium text-gray-900">
                <p>&ldquo;Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.&rdquo;</p>
              </div>
            </div>
          </div>
        </footer>
      </blockquote>
    </div>
  </div>
</section>



<!-- This example requires Tailwind CSS v2.0+ -->
<div class="relative bg-white py-16 sm:py-24 lg:py-32">
  <div class="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
    <h2 class="text-base font-semibold uppercase tracking-wider text-indigo-600">Deploy faster</h2>
    <p class="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Everything you need to deploy your app</p>
    <p class="mx-auto mt-5 max-w-prose text-xl text-gray-500">Phasellus lorem quam molestie id quisque diam aenean nulla in. Accumsan in quis quis nunc, ullamcorper malesuada. Eleifend condimentum id viverra nulla.</p>
    <div class="mt-12">
      <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <div class="pt-6">
          <div class="flow-root rounded-lg bg-gray-50 px-6 pb-8">
            <div class="-mt-6">
              <div>
                <span class="inline-flex items-center justify-center rounded-md bg-indigo-500 p-3 shadow-lg">
                  <!-- Heroicon name: outline/cloud-upload -->
                  <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                </span>
              </div>
              <h3 class="mt-8 text-lg font-medium tracking-tight text-gray-900">Push to Deploy</h3>
              <p class="mt-5 text-base text-gray-500">Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.</p>
            </div>
          </div>
        </div>

        <div class="pt-6">
          <div class="flow-root rounded-lg bg-gray-50 px-6 pb-8">
            <div class="-mt-6">
              <div>
                <span class="inline-flex items-center justify-center rounded-md bg-indigo-500 p-3 shadow-lg">
                  <!-- Heroicon name: outline/lock-closed -->
                  <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </span>
              </div>
              <h3 class="mt-8 text-lg font-medium tracking-tight text-gray-900">SSL Certificates</h3>
              <p class="mt-5 text-base text-gray-500">Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.</p>
            </div>
          </div>
        </div>

        <div class="pt-6">
          <div class="flow-root rounded-lg bg-gray-50 px-6 pb-8">
            <div class="-mt-6">
              <div>
                <span class="inline-flex items-center justify-center rounded-md bg-indigo-500 p-3 shadow-lg">
                  <!-- Heroicon name: outline/refresh -->
                  <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </span>
              </div>
              <h3 class="mt-8 text-lg font-medium tracking-tight text-gray-900">Simple Queues</h3>
              <p class="mt-5 text-base text-gray-500">Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.</p>
            </div>
          </div>
        </div>

        <div class="pt-6">
          <div class="flow-root rounded-lg bg-gray-50 px-6 pb-8">
            <div class="-mt-6">
              <div>
                <span class="inline-flex items-center justify-center rounded-md bg-indigo-500 p-3 shadow-lg">
                  <!-- Heroicon name: outline/shield-check -->
                  <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </span>
              </div>
              <h3 class="mt-8 text-lg font-medium tracking-tight text-gray-900">Advanced Security</h3>
              <p class="mt-5 text-base text-gray-500">Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.</p>
            </div>
          </div>
        </div>

        <div class="pt-6">
          <div class="flow-root rounded-lg bg-gray-50 px-6 pb-8">
            <div class="-mt-6">
              <div>
                <span class="inline-flex items-center justify-center rounded-md bg-indigo-500 p-3 shadow-lg">
                  <!-- Heroicon name: outline/cog -->
                  <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </span>
              </div>
              <h3 class="mt-8 text-lg font-medium tracking-tight text-gray-900">Powerful API</h3>
              <p class="mt-5 text-base text-gray-500">Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.</p>
            </div>
          </div>
        </div>

        <div class="pt-6">
          <div class="flow-root rounded-lg bg-gray-50 px-6 pb-8">
            <div class="-mt-6">
              <div>
                <span class="inline-flex items-center justify-center rounded-md bg-indigo-500 p-3 shadow-lg">
                  <!-- Heroicon name: outline/server -->
                  <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                  </svg>
                </span>
              </div>
              <h3 class="mt-8 text-lg font-medium tracking-tight text-gray-900">Database Backups</h3>
              <p class="mt-5 text-base text-gray-500">Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>




<!--
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/typography'),
    ],
  }
  ```
-->
<div class="relative bg-white">
  <div class="lg:absolute lg:inset-0">
    <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
      <img class="h-56 w-full object-cover lg:absolute lg:h-full" src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80" alt="">
    </div>
  </div>
  <div class="relative pt-12 pb-16 px-4 sm:pt-16 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:grid lg:grid-cols-2">
    <div class="lg:col-start-1 lg:pl-8">
      <div class="text-base max-w-prose mx-auto lg:max-w-lg lg:mr-4 lg:ml-0">
        <h2 class="leading-6 text-indigo-600 font-semibold tracking-wide uppercase">Work with us</h2>
        <h3 class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">Our Process</h3>
        <p class="mt-8 text-lg text-gray-500">Sagittis scelerisque nulla cursus in enim consectetur quam. Dictum urna sed consectetur neque tristique pellentesque. Blandit amet, sed aenean erat arcu morbi.</p>
        <div class="mt-5 prose prose-indigo text-gray-500">
          <p>Sollicitudin tristique eros erat odio sed vitae, consequat turpis elementum. Lorem nibh vel, eget pretium arcu vitae. Eros eu viverra donec ut volutpat donec laoreet quam urna.</p>
          <p>Bibendum eu nulla feugiat justo, elit adipiscing. Ut tristique sit nisi lorem pulvinar. Urna, laoreet fusce nibh leo. Dictum et et et sit. Faucibus sed non gravida lectus dignissim imperdiet a.</p>
          <p>Dictum magnis risus phasellus vitae quam morbi. Quis lorem lorem arcu, metus, egestas netus cursus. In.</p>
          <ul role="list">
            <li>Quis elit egestas venenatis mattis dignissim.</li>
            <li>Cras cras lobortis vitae vivamus ultricies facilisis tempus.</li>
            <li>Orci in sit morbi dignissim metus diam arcu pretium.</li>
          </ul>
          <p>Rhoncus nisl, libero egestas diam fermentum dui. At quis tincidunt vel ultricies. Vulputate aliquet velit faucibus semper. Pellentesque in venenatis vestibulum consectetur nibh id. In id ut tempus egestas. Enim sit aliquam nec, a. Morbi enim fermentum lacus in. Viverra.</p>
          <h3>How we’re different</h3>
          <p>Tincidunt integer commodo, cursus etiam aliquam neque, et. Consectetur pretium in volutpat, diam. Montes, magna cursus nulla feugiat dignissim id lobortis amet. Laoreet sem est phasellus eu proin massa, lectus. Diam rutrum posuere donec ultricies non morbi. Mi a platea auctor mi.</p>
          <p>Mauris ullamcorper imperdiet nec egestas mi quis quam ante vulputate. Vel faucibus adipiscing lacus, eget. Nunc fermentum id tellus donec. Ut metus odio sit sit varius non nunc orci. Eu, mi neque, ornare suspendisse amet, nibh. Facilisi volutpat lectus id sapien dis mauris rhoncus. Est rhoncus, interdum imperdiet ac eros, diam mauris, tortor. Risus id sit molestie magna.</p>
        </div>
      </div>
    </div>
  </div>
</div>



<!-- This example requires Tailwind CSS v2.0+ -->
<div class="bg-gray-50">
  <div class="relative bg-indigo-600">
    <!-- Overlapping background -->
    <div aria-hidden="true" class="hidden absolute bg-gray-50 w-full h-6 bottom-0 lg:block"></div>

    <div class="relative max-w-2xl mx-auto pt-16 px-4 text-center sm:pt-32 sm:px-6 lg:max-w-7xl lg:px-8">
      <h1 class="text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
        <span class="block lg:inline">Simple pricing,</span>
        <span class="block lg:inline">no commitment.</span>
      </h1>
      <p class="mt-4 text-xl text-indigo-100">Everything you need, nothing you don't. Pick a plan that best suits your business.</p>
    </div>

    <h2 class="sr-only">Plans</h2>

    <!-- Toggle -->
    <div class="relative mt-12 flex justify-center sm:mt-16">
      <div class="bg-indigo-700 p-0.5 rounded-lg flex">
        <button type="button" class="relative bg-white py-2 px-6 border-indigo-700 rounded-md shadow-sm text-sm font-medium text-indigo-700 whitespace-nowrap hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-700 focus:ring-white focus:z-10">Monthly billing</button>
        <button type="button" class="ml-0.5 relative py-2 px-6 border border-transparent rounded-md text-sm font-medium text-indigo-200 whitespace-nowrap hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-700 focus:ring-white focus:z-10">Yearly billing</button>
      </div>
    </div>

    <!-- Cards -->
    <div class="relative mt-8 max-w-2xl mx-auto px-4 pb-8 sm:mt-12 sm:px-6 lg:max-w-7xl lg:px-8 lg:pb-0">
      <!-- Decorative background -->
      <div aria-hidden="true" class="hidden absolute top-4 bottom-6 left-8 right-8 inset-0 bg-indigo-700 rounded-tl-lg rounded-tr-lg lg:block"></div>

      <div class="relative space-y-6 lg:space-y-0 lg:grid lg:grid-cols-3">
        <div class="bg-indigo-700 lg:bg-transparent pt-6 px-6 pb-3 rounded-lg lg:px-8 lg:pt-12">
          <div>
            <h3 class="text-white text-sm font-semibold uppercase tracking-wide">Starter</h3>
            <div class="flex flex-col items-start sm:flex-row sm:items-center sm:justify-between lg:flex-col lg:items-start">
              <div class="mt-3 flex items-center">
                <p class="text-white text-4xl font-extrabold tracking-tight">$5</p>
                <div class="ml-4">
                  <p class="text-white text-sm">USD / mo</p>
                  <p class="text-indigo-200 text-sm">Billed yearly ($56)</p>
                </div>
              </div>
              <a href="#" class="bg-white text-indigo-600 hover:bg-indigo-50 mt-6 w-full inline-block py-2 px-8 border border-transparent rounded-md shadow-sm text-center text-sm font-medium sm:mt-0 sm:w-auto lg:mt-6 lg:w-full">Buy Starter</a>
            </div>
          </div>
          <h4 class="sr-only">Features</h4>
          <ul role="list" class="border-indigo-500 divide-indigo-500 divide-opacity-75 mt-7 border-t divide-y lg:border-t-0">
            <li class="py-3 flex items-center">
              <!-- Heroicon name: solid/check -->
              <svg class="text-indigo-200 w-5 h-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
              <span class="text-white ml-3 text-sm font-medium">Basic invoicing</span>
            </li>

            <li class="py-3 flex items-center">
              <!-- Heroicon name: solid/check -->
              <svg class="text-indigo-200 w-5 h-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
              <span class="text-white ml-3 text-sm font-medium">Easy to use accounting</span>
            </li>

            <li class="py-3 flex items-center">
              <!-- Heroicon name: solid/check -->
              <svg class="text-indigo-200 w-5 h-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
              <span class="text-white ml-3 text-sm font-medium">Mutli-accounts</span>
            </li>
          </ul>
        </div>

        <div class="bg-white ring-2 ring-indigo-700 shadow-md pt-6 px-6 pb-3 rounded-lg lg:px-8 lg:pt-12">
          <div>
            <h3 class="text-indigo-600 text-sm font-semibold uppercase tracking-wide">Scale</h3>
            <div class="flex flex-col items-start sm:flex-row sm:items-center sm:justify-between lg:flex-col lg:items-start">
              <div class="mt-3 flex items-center">
                <p class="text-indigo-600 text-4xl font-extrabold tracking-tight">$19</p>
                <div class="ml-4">
                  <p class="text-gray-700 text-sm">USD / mo</p>
                  <p class="text-gray-500 text-sm">Billed yearly ($220)</p>
                </div>
              </div>
              <a href="#" class="bg-indigo-600 text-white hover:bg-indigo-700 mt-6 w-full inline-block py-2 px-8 border border-transparent rounded-md shadow-sm text-center text-sm font-medium sm:mt-0 sm:w-auto lg:mt-6 lg:w-full">Buy Scale</a>
            </div>
          </div>
          <h4 class="sr-only">Features</h4>
          <ul role="list" class="border-gray-200 divide-gray-200 mt-7 border-t divide-y lg:border-t-0">
            <li class="py-3 flex items-center">
              <!-- Heroicon name: solid/check -->
              <svg class="text-indigo-500 w-5 h-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
              <span class="text-gray-600 ml-3 text-sm font-medium">Advanced invoicing</span>
            </li>

            <li class="py-3 flex items-center">
              <!-- Heroicon name: solid/check -->
              <svg class="text-indigo-500 w-5 h-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
              <span class="text-gray-600 ml-3 text-sm font-medium">Easy to use accounting</span>
            </li>

            <li class="py-3 flex items-center">
              <!-- Heroicon name: solid/check -->
              <svg class="text-indigo-500 w-5 h-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
              <span class="text-gray-600 ml-3 text-sm font-medium">Mutli-accounts</span>
            </li>

            <li class="py-3 flex items-center">
              <!-- Heroicon name: solid/check -->
              <svg class="text-indigo-500 w-5 h-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
              <span class="text-gray-600 ml-3 text-sm font-medium">Tax planning toolkit</span>
            </li>

            <li class="py-3 flex items-center">
              <!-- Heroicon name: solid/check -->
              <svg class="text-indigo-500 w-5 h-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
              <span class="text-gray-600 ml-3 text-sm font-medium">VAT &amp; VATMOSS filing</span>
            </li>

            <li class="py-3 flex items-center">
              <!-- Heroicon name: solid/check -->
              <svg class="text-indigo-500 w-5 h-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
              <span class="text-gray-600 ml-3 text-sm font-medium">Free bank transfers</span>
            </li>
          </ul>
        </div>

        <div class="bg-indigo-700 lg:bg-transparent pt-6 px-6 pb-3 rounded-lg lg:px-8 lg:pt-12">
          <div>
            <h3 class="text-white text-sm font-semibold uppercase tracking-wide">Growth</h3>
            <div class="flex flex-col items-start sm:flex-row sm:items-center sm:justify-between lg:flex-col lg:items-start">
              <div class="mt-3 flex items-center">
                <p class="text-white text-4xl font-extrabold tracking-tight">$12</p>
                <div class="ml-4">
                  <p class="text-white text-sm">USD / mo</p>
                  <p class="text-indigo-200 text-sm">Billed yearly ($140)</p>
                </div>
              </div>
              <a href="#" class="bg-white text-indigo-600 hover:bg-indigo-50 mt-6 w-full inline-block py-2 px-8 border border-transparent rounded-md shadow-sm text-center text-sm font-medium sm:mt-0 sm:w-auto lg:mt-6 lg:w-full">Buy Growth</a>
            </div>
          </div>
          <h4 class="sr-only">Features</h4>
          <ul role="list" class="border-indigo-500 divide-indigo-500 divide-opacity-75 mt-7 border-t divide-y lg:border-t-0">
            <li class="py-3 flex items-center">
              <!-- Heroicon name: solid/check -->
              <svg class="text-indigo-200 w-5 h-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
              <span class="text-white ml-3 text-sm font-medium">Basic invoicing</span>
            </li>

            <li class="py-3 flex items-center">
              <!-- Heroicon name: solid/check -->
              <svg class="text-indigo-200 w-5 h-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
              <span class="text-white ml-3 text-sm font-medium">Easy to use accounting</span>
            </li>

            <li class="py-3 flex items-center">
              <!-- Heroicon name: solid/check -->
              <svg class="text-indigo-200 w-5 h-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
              <span class="text-white ml-3 text-sm font-medium">Mutli-accounts</span>
            </li>

            <li class="py-3 flex items-center">
              <!-- Heroicon name: solid/check -->
              <svg class="text-indigo-200 w-5 h-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
              <span class="text-white ml-3 text-sm font-medium">Tax planning toolkit</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  <!-- Feature comparison (up to lg) -->
  <section aria-labelledby="mobile-comparison-heading" class="lg:hidden">
    <h2 id="mobile-comparison-heading" class="sr-only">Feature comparison</h2>

    <div class="max-w-2xl mx-auto py-16 px-4 space-y-16 sm:px-6">
      <div class="border-t border-gray-200" key="plan.title">
        <div class="border-transparent -mt-px pt-6 border-t-2 sm:w-1/2">
          <h3 class="text-gray-900 text-sm font-bold">Starter</h3>
          <p class="mt-2 text-sm text-gray-500">All your essential business finances, taken care of.</p>
        </div>
        <h4 class="mt-10 text-sm font-bold text-gray-900">Catered for business</h4>

        <div class="mt-6 relative">
          <!-- Fake card background -->
          <div aria-hidden="true" class="hidden absolute inset-0 pointer-events-none sm:block">
            <div class="shadow absolute right-0 w-1/2 h-full bg-white rounded-lg"></div>
          </div>

          <div class="ring-1 ring-black ring-opacity-5 shadow relative py-3 px-4 bg-white rounded-lg sm:p-0 sm:bg-transparent sm:rounded-none sm:ring-0 sm:shadow-none">
            <dl class="divide-y divide-gray-200">
              <div class="py-3 flex items-center justify-between sm:grid sm:grid-cols-2">
                <dt class="pr-4 text-sm font-medium text-gray-600">Tax Savings</dt>
                <dd class="flex items-center justify-end sm:px-4 sm:justify-center">
                  <!-- Heroicon name: solid/check -->
                  <svg class="mx-auto h-5 w-5 text-indigo-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                  <span class="sr-only">Yes</span>
                </dd>
              </div>

              <div class="py-3 flex items-center justify-between sm:grid sm:grid-cols-2">
                <dt class="pr-4 text-sm font-medium text-gray-600">Easy to use accounting</dt>
                <dd class="flex items-center justify-end sm:px-4 sm:justify-center">
                  <!-- Heroicon name: solid/check -->
                  <svg class="mx-auto h-5 w-5 text-indigo-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                  <span class="sr-only">Yes</span>
                </dd>
              </div>

              <div class="py-3 flex items-center justify-between sm:grid sm:grid-cols-2">
                <dt class="pr-4 text-sm font-medium text-gray-600">Multi-accounts</dt>
                <dd class="flex items-center justify-end sm:px-4 sm:justify-center">
                  <span class="text-gray-900 text-sm font-medium">3 accounts</span>
                </dd>
              </div>

              <div class="py-3 flex items-center justify-between sm:grid sm:grid-cols-2">
                <dt class="pr-4 text-sm font-medium text-gray-600">Invoicing</dt>
                <dd class="flex items-center justify-end sm:px-4 sm:justify-center">
                  <span class="text-gray-900 text-sm font-medium">3 invoices</span>
                </dd>
              </div>

              <div class="py-3 flex items-center justify-between sm:grid sm:grid-cols-2">
                <dt class="pr-4 text-sm font-medium text-gray-600">Exclusive offers</dt>
                <dd class="flex items-center justify-end sm:px-4 sm:justify-center">
                  <!-- Heroicon name: solid/x -->
                  <svg class="mx-auto h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                  </svg>
                  <span class="sr-only">No</span>
                </dd>
              </div>

              <div class="py-3 flex items-center justify-between sm:grid sm:grid-cols-2">
                <dt class="pr-4 text-sm font-medium text-gray-600">6 months free advisor</dt>
                <dd class="flex items-center justify-end sm:px-4 sm:justify-center">
                  <!-- Heroicon name: solid/x -->
                  <svg class="mx-auto h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                  </svg>
                  <span class="sr-only">No</span>
                </dd>
              </div>

              <div class="py-3 flex items-center justify-between sm:grid sm:grid-cols-2">
                <dt class="pr-4 text-sm font-medium text-gray-600">Mobile and web access</dt>
                <dd class="flex items-center justify-end sm:px-4 sm:justify-center">
                  <!-- Heroicon name: solid/x -->
                  <svg class="mx-auto h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                  </svg>
                  <span class="sr-only">No</span>
                </dd>
              </div>
            </dl>
          </div>

          <!-- Fake card border -->
          <div aria-hidden="true" class="hidden absolute inset-0 pointer-events-none sm:block">
            <div class="ring-1 ring-black ring-opacity-5 absolute right-0 w-1/2 h-full rounded-lg"></div>
          </div>
        </div>

        <h4 class="mt-10 text-sm font-bold text-gray-900">Other perks</h4>

        <div class="mt-6 relative">
          <!-- Fake card background -->
          <div aria-hidden="true" class="hidden absolute inset-0 pointer-events-none sm:block">
            <div class="shadow absolute right-0 w-1/2 h-full bg-white rounded-lg"></div>
          </div>

          <div class="ring-1 ring-black ring-opacity-5 shadow relative py-3 px-4 bg-white rounded-lg sm:p-0 sm:bg-transparent sm:rounded-none sm:ring-0 sm:shadow-none">
            <dl class="divide-y divide-gray-200">
              <div class="py-3 flex justify-between sm:grid sm:grid-cols-2">
                <dt class="text-sm font-medium text-gray-600 sm:pr-4">24/7 customer support</dt>
                <dd class="text-center sm:px-4">
                  <!-- Heroicon name: solid/check -->
                  <svg class="mx-auto h-5 w-5 text-indigo-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                  <span class="sr-only">Yes</span>
                </dd>
              </div>

              <div class="py-3 flex justify-between sm:grid sm:grid-cols-2">
                <dt class="text-sm font-medium text-gray-600 sm:pr-4">Instant notifications</dt>
                <dd class="text-center sm:px-4">
                  <!-- Heroicon name: solid/check -->
                  <svg class="mx-auto h-5 w-5 text-indigo-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                  <span class="sr-only">Yes</span>
                </dd>
              </div>

              <div class="py-3 flex justify-between sm:grid sm:grid-cols-2">
                <dt class="text-sm font-medium text-gray-600 sm:pr-4">Budgeting tools</dt>
                <dd class="text-center sm:px-4">
                  <!-- Heroicon name: solid/check -->
                  <svg class="mx-auto h-5 w-5 text-indigo-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                  <span class="sr-only">Yes</span>
                </dd>
              </div>

              <div class="py-3 flex justify-between sm:grid sm:grid-cols-2">
                <dt class="text-sm font-medium text-gray-600 sm:pr-4">Digital receipts</dt>
                <dd class="text-center sm:px-4">
                  <!-- Heroicon name: solid/check -->
                  <svg class="mx-auto h-5 w-5 text-indigo-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                  <span class="sr-only">Yes</span>
                </dd>
              </div>

              <div class="py-3 flex justify-between sm:grid sm:grid-cols-2">
                <dt class="text-sm font-medium text-gray-600 sm:pr-4">Pots to separate money</dt>
                <dd class="text-center sm:px-4">
                  <!-- Heroicon name: solid/x -->
                  <svg class="mx-auto h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                  </svg>
                  <span class="sr-only">No</span>
                </dd>
              </div>

              <div class="py-3 flex justify-between sm:grid sm:grid-cols-2">
                <dt class="text-sm font-medium text-gray-600 sm:pr-4">Free bank transfers</dt>
                <dd class="text-center sm:px-4">
                  <!-- Heroicon name: solid/x -->
                  <svg class="mx-auto h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                  </svg>
                  <span class="sr-only">No</span>
                </dd>
              </div>

              <div class="py-3 flex justify-between sm:grid sm:grid-cols-2">
                <dt class="text-sm font-medium text-gray-600 sm:pr-4">Business debit card</dt>
                <dd class="text-center sm:px-4">
                  <!-- Heroicon name: solid/x -->
                  <svg class="mx-auto h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                  </svg>
                  <span class="sr-only">No</span>
                </dd>
              </div>
            </dl>
          </div>

          <!-- Fake card border -->
          <div aria-hidden="true" class="hidden absolute inset-0 pointer-events-none sm:block">
            <div class="ring-1 ring-black ring-opacity-5 absolute right-0 w-1/2 h-full rounded-lg"></div>
          </div>
        </div>
      </div>

      <div class="border-t border-gray-200" key="plan.title">
        <div class="border-indigo-600 -mt-px pt-6 border-t-2 sm:w-1/2">
          <h3 class="text-indigo-600 text-sm font-bold">Scale</h3>
          <p class="mt-2 text-sm text-gray-500">The best financial services for your thriving business.</p>
        </div>
        <h4 class="mt-10 text-sm font-bold text-gray-900">Catered for business</h4>

        <div class="mt-6 relative">
          <!-- Fake card background -->
          <div aria-hidden="true" class="hidden absolute inset-0 pointer-events-none sm:block">
            <div class="shadow-md absolute right-0 w-1/2 h-full bg-white rounded-lg"></div>
          </div>

          <div class="ring-2 ring-indigo-600 shadow-md relative py-3 px-4 bg-white rounded-lg sm:p-0 sm:bg-transparent sm:rounded-none sm:ring-0 sm:shadow-none">
            <dl class="divide-y divide-gray-200">
              <div class="py-3 flex items-center justify-between sm:grid sm:grid-cols-2">
                <dt class="pr-4 text-sm font-medium text-gray-600">Tax Savings</dt>
                <dd class="flex items-center justify-end sm:px-4 sm:justify-center">
                  <!-- Heroicon name: solid/check -->
                  <svg class="mx-auto h-5 w-5 text-indigo-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                  <span class="sr-only">Yes</span>
                </dd>
              </div>

              <div class="py-3 flex items-center justify-between sm:grid sm:grid-cols-2">
                <dt class="pr-4 text-sm font-medium text-gray-600">Easy to use accounting</dt>
                <dd class="flex items-center justify-end sm:px-4 sm:justify-center">
                  <!-- Heroicon name: solid/check -->
                  <svg class="mx-auto h-5 w-5 text-indigo-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                  <span class="sr-only">Yes</span>
                </dd>
              </div>

              <div class="py-3 flex items-center justify-between sm:grid sm:grid-cols-2">
                <dt class="pr-4 text-sm font-medium text-gray-600">Multi-accounts</dt>
                <dd class="flex items-center justify-end sm:px-4 sm:justify-center">
                  <span class="text-indigo-600 text-sm font-medium">Unlimited accounts</span>
                </dd>
              </div>

              <div class="py-3 flex items-center justify-between sm:grid sm:grid-cols-2">
                <dt class="pr-4 text-sm font-medium text-gray-600">Invoicing</dt>
                <dd class="flex items-center justify-end sm:px-4 sm:justify-center">
                  <span class="text-indigo-600 text-sm font-medium">Unlimited invoices</span>
                </dd>
              </div>

              <div class="py-3 flex items-center justify-between sm:grid sm:grid-cols-2">
                <dt class="pr-4 text-sm font-medium text-gray-600">Exclusive offers</dt>
                <dd class="flex items-center justify-end sm:px-4 sm:justify-center">
                  <!-- Heroicon name: solid/check -->
                  <svg class="mx-auto h-5 w-5 text-indigo-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                  <span class="sr-only">Yes</span>
                </dd>
              </div>

              <div class="py-3 flex items-center justify-between sm:grid sm:grid-cols-2">
                <dt class="pr-4 text-sm font-medium text-gray-600">6 months free advisor</dt>
                <dd class="flex items-center justify-end sm:px-4 sm:justify-center">
                  <!-- Heroicon name: solid/check -->
                  <svg class="mx-auto h-5 w-5 text-indigo-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                  <span class="sr-only">Yes</span>
                </dd>
              </div>

              <div class="py-3 flex items-center justify-between sm:grid sm:grid-cols-2">
                <dt class="pr-4 text-sm font-medium text-gray-600">Mobile and web access</dt>
                <dd class="flex items-center justify-end sm:px-4 sm:justify-center">
                  <!-- Heroicon name: solid/check -->
                  <svg class="mx-auto h-5 w-5 text-indigo-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                  <span class="sr-only">Yes</span>
                </dd>
              </div>
            </dl>
          </div>

          <!-- Fake card border -->
          <div aria-hidden="true" class="hidden absolute inset-0 pointer-events-none sm:block">
            <div class="ring-2 ring-indigo-600 absolute right-0 w-1/2 h-full rounded-lg"></div>
          </div>
        </div>

        <h4 class="mt-10 text-sm font-bold text-gray-900">Other perks</h4>

        <div class="mt-6 relative">
          <!-- Fake card background -->
          <div aria-hidden="true" class="hidden absolute inset-0 pointer-events-none sm:block">
            <div class="shadow-md absolute right-0 w-1/2 h-full bg-white rounded-lg"></div>
          </div>

          <div class="ring-2 ring-indigo-600 shadow-md relative py-3 px-4 bg-white rounded-lg sm:p-0 sm:bg-transparent sm:rounded-none sm:ring-0 sm:shadow-none">
            <dl class="divide-y divide-gray-200">
              <div class="py-3 flex justify-between sm:grid sm:grid-cols-2">
                <dt class="text-sm font-medium text-gray-600 sm:pr-4">24/7 customer support</dt>
                <dd class="text-center sm:px-4">
                  <!-- Heroicon name: solid/check -->
                  <svg class="mx-auto h-5 w-5 text-indigo-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                  <span class="sr-only">Yes</span>
                </dd>
              </div>

              <div class="py-3 flex justify-between sm:grid sm:grid-cols-2">
                <dt class="text-sm font-medium text-gray-600 sm:pr-4">Instant notifications</dt>
                <dd class="text-center sm:px-4">
                  <!-- Heroicon name: solid/check -->
                  <svg class="mx-auto h-5 w-5 text-indigo-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                  <span class="sr-only">Yes</span>
                </dd>
              </div>

              <div class="py-3 flex justify-between sm:grid sm:grid-cols-2">
                <dt class="text-sm font-medium text-gray-600 sm:pr-4">Budgeting tools</dt>
                <dd class="text-center sm:px-4">
                  <!-- Heroicon name: solid/check -->
                  <svg class="mx-auto h-5 w-5 text-indigo-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                  <span class="sr-only">Yes</span>
                </dd>
              </div>

              <div class="py-3 flex justify-between sm:grid sm:grid-cols-2">
                <dt class="text-sm font-medium text-gray-600 sm:pr-4">Digital receipts</dt>
                <dd class="text-center sm:px-4">
                  <!-- Heroicon name: solid/check -->
                  <svg class="mx-auto h-5 w-5 text-indigo-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                  <span class="sr-only">Yes</span>
                </dd>
              </div>

              <div class="py-3 flex justify-between sm:grid sm:grid-cols-2">
                <dt class="text-sm font-medium text-gray-600 sm:pr-4">Pots to separate money</dt>
                <dd class="text-center sm:px-4">
                  <!-- Heroicon name: solid/check -->
                  <svg class="mx-auto h-5 w-5 text-indigo-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                  <span class="sr-only">Yes</span>
                </dd>
              </div>

              <div class="py-3 flex justify-between sm:grid sm:grid-cols-2">
                <dt class="text-sm font-medium text-gray-600 sm:pr-4">Free bank transfers</dt>
                <dd class="text-center sm:px-4">
                  <!-- Heroicon name: solid/check -->
                  <svg class="mx-auto h-5 w-5 text-indigo-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                  <span class="sr-only">Yes</span>
                </dd>
              </div>

              <div class="py-3 flex justify-between sm:grid sm:grid-cols-2">
                <dt class="text-sm font-medium text-gray-600 sm:pr-4">Business debit card</dt>
                <dd class="text-center sm:px-4">
                  <!-- Heroicon name: solid/check -->
                  <svg class="mx-auto h-5 w-5 text-indigo-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                  <span class="sr-only">Yes</span>
                </dd>
              </div>
            </dl>
          </div>

          <!-- Fake card border -->
          <div aria-hidden="true" class="hidden absolute inset-0 pointer-events-none sm:block">
            <div class="ring-2 ring-indigo-600 absolute right-0 w-1/2 h-full rounded-lg"></div>
          </div>
        </div>
      </div>

      <div class="border-t border-gray-200" key="plan.title">
        <div class="border-transparent -mt-px pt-6 border-t-2 sm:w-1/2">
          <h3 class="text-gray-900 text-sm font-bold">Growth</h3>
          <p class="mt-2 text-sm text-gray-500">Convenient features to take your business to the next level.</p>
        </div>
        <h4 class="mt-10 text-sm font-bold text-gray-900">Catered for business</h4>

        <div class="mt-6 relative">
          <!-- Fake card background -->
          <div aria-hidden="true" class="hidden absolute inset-0 pointer-events-none sm:block">
            <div class="shadow absolute right-0 w-1/2 h-full bg-white rounded-lg"></div>
          </div>

          <div class="ring-1 ring-black ring-opacity-5 shadow relative py-3 px-4 bg-white rounded-lg sm:p-0 sm:bg-transparent sm:rounded-none sm:ring-0 sm:shadow-none">
            <dl class="divide-y divide-gray-200">
              <div class="py-3 flex items-center justify-between sm:grid sm:grid-cols-2">
                <dt class="pr-4 text-sm font-medium text-gray-600">Tax Savings</dt>
                <dd class="flex items-center justify-end sm:px-4 sm:justify-center">
                  <!-- Heroicon name: solid/check -->
                  <svg class="mx-auto h-5 w-5 text-indigo-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                  <span class="sr-only">Yes</span>
                </dd>
              </div>

              <div class="py-3 flex items-center justify-between sm:grid sm:grid-cols-2">
                <dt class="pr-4 text-sm font-medium text-gray-600">Easy to use accounting</dt>
                <dd class="flex items-center justify-end sm:px-4 sm:justify-center">
                  <!-- Heroicon name: solid/check -->
                  <svg class="mx-auto h-5 w-5 text-indigo-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                  <span class="sr-only">Yes</span>
                </dd>
              </div>

              <div class="py-3 flex items-center justify-between sm:grid sm:grid-cols-2">
                <dt class="pr-4 text-sm font-medium text-gray-600">Multi-accounts</dt>
                <dd class="flex items-center justify-end sm:px-4 sm:justify-center">
                  <span class="text-gray-900 text-sm font-medium">7 accounts</span>
                </dd>
              </div>

              <div class="py-3 flex items-center justify-between sm:grid sm:grid-cols-2">
                <dt class="pr-4 text-sm font-medium text-gray-600">Invoicing</dt>
                <dd class="flex items-center justify-end sm:px-4 sm:justify-center">
                  <span class="text-gray-900 text-sm font-medium">10 invoices</span>
                </dd>
              </div>

              <div class="py-3 flex items-center justify-between sm:grid sm:grid-cols-2">
                <dt class="pr-4 text-sm font-medium text-gray-600">Exclusive offers</dt>
                <dd class="flex items-center justify-end sm:px-4 sm:justify-center">
                  <!-- Heroicon name: solid/check -->
                  <svg class="mx-auto h-5 w-5 text-indigo-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                  <span class="sr-only">Yes</span>
                </dd>
              </div>

              <div class="py-3 flex items-center justify-between sm:grid sm:grid-cols-2">
                <dt class="pr-4 text-sm font-medium text-gray-600">6 months free advisor</dt>
                <dd class="flex items-center justify-end sm:px-4 sm:justify-center">
                  <!-- Heroicon name: solid/check -->
                  <svg class="mx-auto h-5 w-5 text-indigo-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                  <span class="sr-only">Yes</span>
                </dd>
              </div>

              <div class="py-3 flex items-center justify-between sm:grid sm:grid-cols-2">
                <dt class="pr-4 text-sm font-medium text-gray-600">Mobile and web access</dt>
                <dd class="flex items-center justify-end sm:px-4 sm:justify-center">
                  <!-- Heroicon name: solid/x -->
                  <svg class="mx-auto h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                  </svg>
                  <span class="sr-only">No</span>
                </dd>
              </div>
            </dl>
          </div>

          <!-- Fake card border -->
          <div aria-hidden="true" class="hidden absolute inset-0 pointer-events-none sm:block">
            <div class="ring-1 ring-black ring-opacity-5 absolute right-0 w-1/2 h-full rounded-lg"></div>
          </div>
        </div>

        <h4 class="mt-10 text-sm font-bold text-gray-900">Other perks</h4>

        <div class="mt-6 relative">
          <!-- Fake card background -->
          <div aria-hidden="true" class="hidden absolute inset-0 pointer-events-none sm:block">
            <div class="shadow absolute right-0 w-1/2 h-full bg-white rounded-lg"></div>
          </div>

          <div class="ring-1 ring-black ring-opacity-5 shadow relative py-3 px-4 bg-white rounded-lg sm:p-0 sm:bg-transparent sm:rounded-none sm:ring-0 sm:shadow-none">
            <dl class="divide-y divide-gray-200">
              <div class="py-3 flex justify-between sm:grid sm:grid-cols-2">
                <dt class="text-sm font-medium text-gray-600 sm:pr-4">24/7 customer support</dt>
                <dd class="text-center sm:px-4">
                  <!-- Heroicon name: solid/check -->
                  <svg class="mx-auto h-5 w-5 text-indigo-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                  <span class="sr-only">Yes</span>
                </dd>
              </div>

              <div class="py-3 flex justify-between sm:grid sm:grid-cols-2">
                <dt class="text-sm font-medium text-gray-600 sm:pr-4">Instant notifications</dt>
                <dd class="text-center sm:px-4">
                  <!-- Heroicon name: solid/check -->
                  <svg class="mx-auto h-5 w-5 text-indigo-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                  <span class="sr-only">Yes</span>
                </dd>
              </div>

              <div class="py-3 flex justify-between sm:grid sm:grid-cols-2">
                <dt class="text-sm font-medium text-gray-600 sm:pr-4">Budgeting tools</dt>
                <dd class="text-center sm:px-4">
                  <!-- Heroicon name: solid/check -->
                  <svg class="mx-auto h-5 w-5 text-indigo-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                  <span class="sr-only">Yes</span>
                </dd>
              </div>

              <div class="py-3 flex justify-between sm:grid sm:grid-cols-2">
                <dt class="text-sm font-medium text-gray-600 sm:pr-4">Digital receipts</dt>
                <dd class="text-center sm:px-4">
                  <!-- Heroicon name: solid/check -->
                  <svg class="mx-auto h-5 w-5 text-indigo-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                  <span class="sr-only">Yes</span>
                </dd>
              </div>

              <div class="py-3 flex justify-between sm:grid sm:grid-cols-2">
                <dt class="text-sm font-medium text-gray-600 sm:pr-4">Pots to separate money</dt>
                <dd class="text-center sm:px-4">
                  <!-- Heroicon name: solid/check -->
                  <svg class="mx-auto h-5 w-5 text-indigo-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                  <span class="sr-only">Yes</span>
                </dd>
              </div>

              <div class="py-3 flex justify-between sm:grid sm:grid-cols-2">
                <dt class="text-sm font-medium text-gray-600 sm:pr-4">Free bank transfers</dt>
                <dd class="text-center sm:px-4">
                  <!-- Heroicon name: solid/x -->
                  <svg class="mx-auto h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                  </svg>
                  <span class="sr-only">No</span>
                </dd>
              </div>

              <div class="py-3 flex justify-between sm:grid sm:grid-cols-2">
                <dt class="text-sm font-medium text-gray-600 sm:pr-4">Business debit card</dt>
                <dd class="text-center sm:px-4">
                  <!-- Heroicon name: solid/x -->
                  <svg class="mx-auto h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                  </svg>
                  <span class="sr-only">No</span>
                </dd>
              </div>
            </dl>
          </div>

          <!-- Fake card border -->
          <div aria-hidden="true" class="hidden absolute inset-0 pointer-events-none sm:block">
            <div class="ring-1 ring-black ring-opacity-5 absolute right-0 w-1/2 h-full rounded-lg"></div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Feature comparison (lg+) -->
  <section aria-labelledby="comparison-heading" class="hidden lg:block">
    <h2 id="comparison-heading" class="sr-only">Feature comparison</h2>

    <div class="max-w-7xl mx-auto py-24 px-8">
      <div class="w-full border-t border-gray-200 flex items-stretch">
        <div class="-mt-px w-1/4 py-6 pr-4 flex items-end">
          <h3 class="mt-auto text-sm font-bold text-gray-900">Catered for business</h3>
        </div>

        <div aria-hidden="true" class="pr-4 -mt-px pl-4 w-1/4">
          <div class="border-transparent py-6 border-t-2">
            <p class="text-gray-900 text-sm font-bold">Starter</p>
            <p class="mt-2 text-sm text-gray-500">All your essential business finances, taken care of.</p>
          </div>
        </div>

        <div aria-hidden="true" class="pr-4 -mt-px pl-4 w-1/4">
          <div class="border-indigo-600 py-6 border-t-2">
            <p class="text-indigo-600 text-sm font-bold">Scale</p>
            <p class="mt-2 text-sm text-gray-500">The best financial services for your thriving business.</p>
          </div>
        </div>

        <div aria-hidden="true" class="-mt-px pl-4 w-1/4">
          <div class="border-transparent py-6 border-t-2">
            <p class="text-gray-900 text-sm font-bold">Growth</p>
            <p class="mt-2 text-sm text-gray-500">Convenient features to take your business to the next level.</p>
          </div>
        </div>
      </div>

      <div class="relative">
        <!-- Fake card backgrounds -->
        <div class="absolute inset-0 flex items-stretch pointer-events-none" aria-hidden="true">
          <div class="w-1/4 pr-4"></div>
          <div class="w-1/4 px-4">
            <div class="w-full h-full bg-white rounded-lg shadow"></div>
          </div>
          <div class="w-1/4 px-4">
            <div class="w-full h-full bg-white rounded-lg shadow-md"></div>
          </div>
          <div class="w-1/4 pl-4">
            <div class="w-full h-full bg-white rounded-lg shadow"></div>
          </div>
        </div>

        <table class="relative w-full">
          <caption class="sr-only">
            Business feature comparison
          </caption>
          <thead>
            <tr class="text-left">
              <th scope="col">
                <span class="sr-only">Feature</span>
              </th>

              <th scope="col">
                <span class="sr-only">Starter plan</span>
              </th>

              <th scope="col">
                <span class="sr-only">Scale plan</span>
              </th>

              <th scope="col">
                <span class="sr-only">Growth plan</span>
              </th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-100">
            <tr>
              <th scope="row" class="w-1/4 py-3 pr-4 text-left text-sm font-medium text-gray-600">Tax Savings</th>

              <td class="px-4 relative w-1/4 py-0 text-center">
                <span class="relative w-full h-full py-3">
                  <!-- Heroicon name: solid/check -->
                  <svg class="mx-auto h-5 w-5 text-indigo-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                  <span class="sr-only">Yes</span>
                </span>
              </td>

              <td class="px-4 relative w-1/4 py-0 text-center">
                <span class="relative w-full h-full py-3">
                  <!-- Heroicon name: solid/check -->
                  <svg class="mx-auto h-5 w-5 text-indigo-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                  <span class="sr-only">Yes</span>
                </span>
              </td>

              <td class="pl-4 relative w-1/4 py-0 text-center">
                <span class="relative w-full h-full py-3">
                  <!-- Heroicon name: solid/check -->
                  <svg class="mx-auto h-5 w-5 text-indigo-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                  <span class="sr-only">Yes</span>
                </span>
              </td>
            </tr>

            <tr>
              <th scope="row" class="w-1/4 py-3 pr-4 text-left text-sm font-medium text-gray-600">Easy to use accounting</th>

              <td class="px-4 relative w-1/4 py-0 text-center">
                <span class="relative w-full h-full py-3">
                  <!-- Heroicon name: solid/check -->
                  <svg class="mx-auto h-5 w-5 text-indigo-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                  <span class="sr-only">Yes</span>
                </span>
              </td>

              <td class="px-4 relative w-1/4 py-0 text-center">
                <span class="relative w-full h-full py-3">
                  <!-- Heroicon name: solid/check -->
                  <svg class="mx-auto h-5 w-5 text-indigo-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                  <span class="sr-only">Yes</span>
                </span>
              </td>

              <td class="pl-4 relative w-1/4 py-0 text-center">
                <span class="relative w-full h-full py-3">
                  <!-- Heroicon name: solid/check -->
                  <svg class="mx-auto h-5 w-5 text-indigo-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                  <span class="sr-only">Yes</span>
                </span>
              </td>
            </tr>

            <tr>
              <th scope="row" class="w-1/4 py-3 pr-4 text-left text-sm font-medium text-gray-600">Multi-accounts</th>

              <td class="px-4 relative w-1/4 py-0 text-center">
                <span class="relative w-full h-full py-3">
                  <span class="text-gray-900 text-sm font-medium">3 accounts</span>
                </span>
              </td>

              <td class="px-4 relative w-1/4 py-0 text-center">
                <span class="relative w-full h-full py-3">
                  <span class="text-indigo-600 text-sm font-medium">Unlimited accounts</span>
                </span>
              </td>

              <td class="pl-4 relative w-1/4 py-0 text-center">
                <span class="relative w-full h-full py-3">
                  <span class="text-gray-900 text-sm font-medium">7 accounts</span>
                </span>
              </td>
            </tr>

            <tr>
              <th scope="row" class="w-1/4 py-3 pr-4 text-left text-sm font-medium text-gray-600">Invoicing</th>

              <td class="px-4 relative w-1/4 py-0 text-center">
                <span class="relative w-full h-full py-3">
                  <span class="text-gray-900 text-sm font-medium">3 invoices</span>
                </span>
              </td>

              <td class="px-4 relative w-1/4 py-0 text-center">
                <span class="relative w-full h-full py-3">
                  <span class="text-indigo-600 text-sm font-medium">Unlimited invoices</span>
                </span>
              </td>

              <td class="pl-4 relative w-1/4 py-0 text-center">
                <span class="relative w-full h-full py-3">
                  <span class="text-gray-900 text-sm font-medium">10 invoices</span>
                </span>
              </td>
            </tr>

            <tr>
              <th scope="row" class="w-1/4 py-3 pr-4 text-left text-sm font-medium text-gray-600">Exclusive offers</th>

              <td class="px-4 relative w-1/4 py-0 text-center">
                <span class="relative w-full h-full py-3">
                  <!-- Heroicon name: solid/x -->
                  <svg class="mx-auto h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                  </svg>
                  <span class="sr-only">No</span>
                </span>
              </td>

              <td class="px-4 relative w-1/4 py-0 text-center">
                <span class="relative w-full h-full py-3">
                  <!-- Heroicon name: solid/check -->
                  <svg class="mx-auto h-5 w-5 text-indigo-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                  <span class="sr-only">Yes</span>
                </span>
              </td>

              <td class="pl-4 relative w-1/4 py-0 text-center">
                <span class="relative w-full h-full py-3">
                  <!-- Heroicon name: solid/check -->
                  <svg class="mx-auto h-5 w-5 text-indigo-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                  <span class="sr-only">Yes</span>
                </span>
              </td>
            </tr>

            <tr>
              <th scope="row" class="w-1/4 py-3 pr-4 text-left text-sm font-medium text-gray-600">6 months free advisor</th>

              <td class="px-4 relative w-1/4 py-0 text-center">
                <span class="relative w-full h-full py-3">
                  <!-- Heroicon name: solid/x -->
                  <svg class="mx-auto h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                  </svg>
                  <span class="sr-only">No</span>
                </span>
              </td>

              <td class="px-4 relative w-1/4 py-0 text-center">
                <span class="relative w-full h-full py-3">
                  <!-- Heroicon name: solid/check -->
                  <svg class="mx-auto h-5 w-5 text-indigo-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                  <span class="sr-only">Yes</span>
                </span>
              </td>

              <td class="pl-4 relative w-1/4 py-0 text-center">
                <span class="relative w-full h-full py-3">
                  <!-- Heroicon name: solid/check -->
                  <svg class="mx-auto h-5 w-5 text-indigo-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                  <span class="sr-only">Yes</span>
                </span>
              </td>
            </tr>

            <tr>
              <th scope="row" class="w-1/4 py-3 pr-4 text-left text-sm font-medium text-gray-600">Mobile and web access</th>

              <td class="px-4 relative w-1/4 py-0 text-center">
                <span class="relative w-full h-full py-3">
                  <!-- Heroicon name: solid/x -->
                  <svg class="mx-auto h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                  </svg>
                  <span class="sr-only">No</span>
                </span>
              </td>

              <td class="px-4 relative w-1/4 py-0 text-center">
                <span class="relative w-full h-full py-3">
                  <!-- Heroicon name: solid/check -->
                  <svg class="mx-auto h-5 w-5 text-indigo-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                  <span class="sr-only">Yes</span>
                </span>
              </td>

              <td class="pl-4 relative w-1/4 py-0 text-center">
                <span class="relative w-full h-full py-3">
                  <!-- Heroicon name: solid/x -->
                  <svg class="mx-auto h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                  </svg>
                  <span class="sr-only">No</span>
                </span>
              </td>
            </tr>
          </tbody>
        </table>

        <!-- Fake card borders -->
        <div class="absolute inset-0 flex items-stretch pointer-events-none" aria-hidden="true">
          <div class="w-1/4 pr-4"></div>
          <div class="w-1/4 px-4">
            <div class="w-full h-full rounded-lg ring-1 ring-black ring-opacity-5"></div>
          </div>
          <div class="w-1/4 px-4">
            <div class="w-full h-full rounded-lg ring-2 ring-indigo-600 ring-opacity-100"></div>
          </div>
          <div class="w-1/4 pl-4">
            <div class="w-full h-full rounded-lg ring-1 ring-black ring-opacity-5"></div>
          </div>
        </div>
      </div>

      <h3 class="mt-10 text-sm font-bold text-gray-900">Other perks</h3>

      <div class="mt-6 relative">
        <!-- Fake card backgrounds -->
        <div class="absolute inset-0 flex items-stretch pointer-events-none" aria-hidden="true">
          <div class="w-1/4 pr-4"></div>
          <div class="w-1/4 px-4">
            <div class="w-full h-full bg-white rounded-lg shadow"></div>
          </div>
          <div class="w-1/4 px-4">
            <div class="w-full h-full bg-white rounded-lg shadow-md"></div>
          </div>
          <div class="w-1/4 pl-4">
            <div class="w-full h-full bg-white rounded-lg shadow"></div>
          </div>
        </div>

        <table class="relative w-full">
          <caption class="sr-only">
            Perk comparison
          </caption>
          <thead>
            <tr class="text-left">
              <th scope="col">
                <span class="sr-only">Perk</span>
              </th>

              <th scope="col">
                <span class="sr-only">Starter plan</span>
              </th>

              <th scope="col">
                <span class="sr-only">Scale plan</span>
              </th>

              <th scope="col">
                <span class="sr-only">Growth plan</span>
              </th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-100">
            <tr>
              <th scope="row" class="w-1/4 py-3 pr-4 text-left text-sm font-medium text-gray-600">24/7 customer support</th>

              <td class="px-4 relative w-1/4 py-0 text-center">
                <span class="relative w-full h-full py-3">
                  <!-- Heroicon name: solid/check -->
                  <svg class="mx-auto h-5 w-5 text-indigo-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                  <span class="sr-only">Yes</span>
                </span>
              </td>

              <td class="px-4 relative w-1/4 py-0 text-center">
                <span class="relative w-full h-full py-3">
                  <!-- Heroicon name: solid/check -->
                  <svg class="mx-auto h-5 w-5 text-indigo-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                  <span class="sr-only">Yes</span>
                </span>
              </td>

              <td class="pl-4 relative w-1/4 py-0 text-center">
                <span class="relative w-full h-full py-3">
                  <!-- Heroicon name: solid/check -->
                  <svg class="mx-auto h-5 w-5 text-indigo-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                  <span class="sr-only">Yes</span>
                </span>
              </td>
            </tr>

            <tr>
              <th scope="row" class="w-1/4 py-3 pr-4 text-left text-sm font-medium text-gray-600">Instant notifications</th>

              <td class="px-4 relative w-1/4 py-0 text-center">
                <span class="relative w-full h-full py-3">
                  <!-- Heroicon name: solid/check -->
                  <svg class="mx-auto h-5 w-5 text-indigo-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                  <span class="sr-only">Yes</span>
                </span>
              </td>

              <td class="px-4 relative w-1/4 py-0 text-center">
                <span class="relative w-full h-full py-3">
                  <!-- Heroicon name: solid/check -->
                  <svg class="mx-auto h-5 w-5 text-indigo-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                  <span class="sr-only">Yes</span>
                </span>
              </td>

              <td class="pl-4 relative w-1/4 py-0 text-center">
                <span class="relative w-full h-full py-3">
                  <!-- Heroicon name: solid/check -->
                  <svg class="mx-auto h-5 w-5 text-indigo-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                  <span class="sr-only">Yes</span>
                </span>
              </td>
            </tr>

            <tr>
              <th scope="row" class="w-1/4 py-3 pr-4 text-left text-sm font-medium text-gray-600">Budgeting tools</th>

              <td class="px-4 relative w-1/4 py-0 text-center">
                <span class="relative w-full h-full py-3">
                  <!-- Heroicon name: solid/check -->
                  <svg class="mx-auto h-5 w-5 text-indigo-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                  <span class="sr-only">Yes</span>
                </span>
              </td>

              <td class="px-4 relative w-1/4 py-0 text-center">
                <span class="relative w-full h-full py-3">
                  <!-- Heroicon name: solid/check -->
                  <svg class="mx-auto h-5 w-5 text-indigo-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                  <span class="sr-only">Yes</span>
                </span>
              </td>

              <td class="pl-4 relative w-1/4 py-0 text-center">
                <span class="relative w-full h-full py-3">
                  <!-- Heroicon name: solid/check -->
                  <svg class="mx-auto h-5 w-5 text-indigo-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                  <span class="sr-only">Yes</span>
                </span>
              </td>
            </tr>

            <tr>
              <th scope="row" class="w-1/4 py-3 pr-4 text-left text-sm font-medium text-gray-600">Digital receipts</th>

              <td class="px-4 relative w-1/4 py-0 text-center">
                <span class="relative w-full h-full py-3">
                  <!-- Heroicon name: solid/check -->
                  <svg class="mx-auto h-5 w-5 text-indigo-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                  <span class="sr-only">Yes</span>
                </span>
              </td>

              <td class="px-4 relative w-1/4 py-0 text-center">
                <span class="relative w-full h-full py-3">
                  <!-- Heroicon name: solid/check -->
                  <svg class="mx-auto h-5 w-5 text-indigo-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                  <span class="sr-only">Yes</span>
                </span>
              </td>

              <td class="pl-4 relative w-1/4 py-0 text-center">
                <span class="relative w-full h-full py-3">
                  <!-- Heroicon name: solid/check -->
                  <svg class="mx-auto h-5 w-5 text-indigo-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                  <span class="sr-only">Yes</span>
                </span>
              </td>
            </tr>

            <tr>
              <th scope="row" class="w-1/4 py-3 pr-4 text-left text-sm font-medium text-gray-600">Pots to separate money</th>

              <td class="px-4 relative w-1/4 py-0 text-center">
                <span class="relative w-full h-full py-3">
                  <!-- Heroicon name: solid/x -->
                  <svg class="mx-auto h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                  </svg>
                  <span class="sr-only">No</span>
                </span>
              </td>

              <td class="px-4 relative w-1/4 py-0 text-center">
                <span class="relative w-full h-full py-3">
                  <!-- Heroicon name: solid/check -->
                  <svg class="mx-auto h-5 w-5 text-indigo-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                  <span class="sr-only">Yes</span>
                </span>
              </td>

              <td class="pl-4 relative w-1/4 py-0 text-center">
                <span class="relative w-full h-full py-3">
                  <!-- Heroicon name: solid/check -->
                  <svg class="mx-auto h-5 w-5 text-indigo-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                  <span class="sr-only">Yes</span>
                </span>
              </td>
            </tr>

            <tr>
              <th scope="row" class="w-1/4 py-3 pr-4 text-left text-sm font-medium text-gray-600">Free bank transfers</th>

              <td class="px-4 relative w-1/4 py-0 text-center">
                <span class="relative w-full h-full py-3">
                  <!-- Heroicon name: solid/x -->
                  <svg class="mx-auto h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                  </svg>
                  <span class="sr-only">No</span>
                </span>
              </td>

              <td class="px-4 relative w-1/4 py-0 text-center">
                <span class="relative w-full h-full py-3">
                  <!-- Heroicon name: solid/check -->
                  <svg class="mx-auto h-5 w-5 text-indigo-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                  <span class="sr-only">Yes</span>
                </span>
              </td>

              <td class="pl-4 relative w-1/4 py-0 text-center">
                <span class="relative w-full h-full py-3">
                  <!-- Heroicon name: solid/x -->
                  <svg class="mx-auto h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                  </svg>
                  <span class="sr-only">No</span>
                </span>
              </td>
            </tr>

            <tr>
              <th scope="row" class="w-1/4 py-3 pr-4 text-left text-sm font-medium text-gray-600">Business debit card</th>

              <td class="px-4 relative w-1/4 py-0 text-center">
                <span class="relative w-full h-full py-3">
                  <!-- Heroicon name: solid/x -->
                  <svg class="mx-auto h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                  </svg>
                  <span class="sr-only">No</span>
                </span>
              </td>

              <td class="px-4 relative w-1/4 py-0 text-center">
                <span class="relative w-full h-full py-3">
                  <!-- Heroicon name: solid/check -->
                  <svg class="mx-auto h-5 w-5 text-indigo-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                  <span class="sr-only">Yes</span>
                </span>
              </td>

              <td class="pl-4 relative w-1/4 py-0 text-center">
                <span class="relative w-full h-full py-3">
                  <!-- Heroicon name: solid/x -->
                  <svg class="mx-auto h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                  </svg>
                  <span class="sr-only">No</span>
                </span>
              </td>
            </tr>
          </tbody>
        </table>

        <!-- Fake card borders -->
        <div class="absolute inset-0 flex items-stretch pointer-events-none" aria-hidden="true">
          <div class="w-1/4 pr-4"></div>
          <div class="w-1/4 px-4">
            <div class="w-full h-full rounded-lg ring-1 ring-black ring-opacity-5"></div>
          </div>
          <div class="w-1/4 px-4">
            <div class="w-full h-full rounded-lg ring-2 ring-indigo-600 ring-opacity-100"></div>
          </div>
          <div class="w-1/4 pl-4">
            <div class="w-full h-full rounded-lg ring-1 ring-black ring-opacity-5"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>





<!-- This example requires Tailwind CSS v2.0+ -->
<div class="bg-white">
  <div class="max-w-7xl mx-auto py-12 px-4 text-center sm:px-6 lg:px-8 lg:py-24">
    <div class="space-y-12">
      <div class="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
        <h2 class="text-3xl font-extrabold tracking-tight sm:text-4xl">Strategy</h2>
        <p class="text-xl text-gray-500">Ornare sagittis, suspendisse in hendrerit quis. Sed dui aliquet lectus sit pretium egestas vel mattis neque.</p>
      </div>
      <ul role="list" class="mx-auto space-y-16 sm:grid sm:grid-cols-2 sm:gap-16 sm:space-y-0 lg:grid-cols-4 lg:max-w-5xl">
        <li>
          <div class="space-y-6">
            <img class="mx-auto h-40 w-40 rounded-full xl:w-56 xl:h-56" src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80" alt="">
            <div class="space-y-2">
              <div class="text-lg leading-6 font-medium space-y-1">
                <h3>Whitney Francis</h3>
                <p class="text-indigo-600">Copywriter</p>
              </div>
              <ul role="list" class="flex justify-center space-x-5">
                <li>
                  <a href="#" class="text-gray-400 hover:text-gray-500">
                    <span class="sr-only">Twitter</span>
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#" class="text-gray-400 hover:text-gray-500">
                    <span class="sr-only">LinkedIn</span>
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path fill-rule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clip-rule="evenodd" />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li>
          <div class="space-y-6">
            <img class="mx-auto h-40 w-40 rounded-full xl:w-56 xl:h-56" src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80" alt="">
            <div class="space-y-2">
              <div class="text-lg leading-6 font-medium space-y-1">
                <h3>Whitney Francis</h3>
                <p class="text-indigo-600">Copywriter</p>
              </div>
              <ul role="list" class="flex justify-center space-x-5">
                <li>
                  <a href="#" class="text-gray-400 hover:text-gray-500">
                    <span class="sr-only">Twitter</span>
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#" class="text-gray-400 hover:text-gray-500">
                    <span class="sr-only">LinkedIn</span>
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path fill-rule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clip-rule="evenodd" />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li>
          <div class="space-y-6">
            <img class="mx-auto h-40 w-40 rounded-full xl:w-56 xl:h-56" src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80" alt="">
            <div class="space-y-2">
              <div class="text-lg leading-6 font-medium space-y-1">
                <h3>Whitney Francis</h3>
                <p class="text-indigo-600">Copywriter</p>
              </div>
              <ul role="list" class="flex justify-center space-x-5">
                <li>
                  <a href="#" class="text-gray-400 hover:text-gray-500">
                    <span class="sr-only">Twitter</span>
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#" class="text-gray-400 hover:text-gray-500">
                    <span class="sr-only">LinkedIn</span>
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path fill-rule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clip-rule="evenodd" />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li>
          <div class="space-y-6">
            <img class="mx-auto h-40 w-40 rounded-full xl:w-56 xl:h-56" src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80" alt="">
            <div class="space-y-2">
              <div class="text-lg leading-6 font-medium space-y-1">
                <h3>Whitney Francis</h3>
                <p class="text-indigo-600">Copywriter</p>
              </div>
              <ul role="list" class="flex justify-center space-x-5">
                <li>
                  <a href="#" class="text-gray-400 hover:text-gray-500">
                    <span class="sr-only">Twitter</span>
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#" class="text-gray-400 hover:text-gray-500">
                    <span class="sr-only">LinkedIn</span>
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path fill-rule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clip-rule="evenodd" />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li>
          <div class="space-y-6">
            <img class="mx-auto h-40 w-40 rounded-full xl:w-56 xl:h-56" src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80" alt="">
            <div class="space-y-2">
              <div class="text-lg leading-6 font-medium space-y-1">
                <h3>Whitney Francis</h3>
                <p class="text-indigo-600">Copywriter</p>
              </div>
              <ul role="list" class="flex justify-center space-x-5">
                <li>
                  <a href="#" class="text-gray-400 hover:text-gray-500">
                    <span class="sr-only">Twitter</span>
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#" class="text-gray-400 hover:text-gray-500">
                    <span class="sr-only">LinkedIn</span>
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path fill-rule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clip-rule="evenodd" />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li>
          <div class="space-y-6">
            <img class="mx-auto h-40 w-40 rounded-full xl:w-56 xl:h-56" src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80" alt="">
            <div class="space-y-2">
              <div class="text-lg leading-6 font-medium space-y-1">
                <h3>Whitney Francis</h3>
                <p class="text-indigo-600">Copywriter</p>
              </div>
              <ul role="list" class="flex justify-center space-x-5">
                <li>
                  <a href="#" class="text-gray-400 hover:text-gray-500">
                    <span class="sr-only">Twitter</span>
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#" class="text-gray-400 hover:text-gray-500">
                    <span class="sr-only">LinkedIn</span>
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path fill-rule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clip-rule="evenodd" />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li>
          <div class="space-y-6">
            <img class="mx-auto h-40 w-40 rounded-full xl:w-56 xl:h-56" src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80" alt="">
            <div class="space-y-2">
              <div class="text-lg leading-6 font-medium space-y-1">
                <h3>Whitney Francis</h3>
                <p class="text-indigo-600">Copywriter</p>
              </div>
              <ul role="list" class="flex justify-center space-x-5">
                <li>
                  <a href="#" class="text-gray-400 hover:text-gray-500">
                    <span class="sr-only">Twitter</span>
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#" class="text-gray-400 hover:text-gray-500">
                    <span class="sr-only">LinkedIn</span>
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path fill-rule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clip-rule="evenodd" />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li>
          <div class="space-y-6">
            <img class="mx-auto h-40 w-40 rounded-full xl:w-56 xl:h-56" src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80" alt="">
            <div class="space-y-2">
              <div class="text-lg leading-6 font-medium space-y-1">
                <h3>Whitney Francis</h3>
                <p class="text-indigo-600">Copywriter</p>
              </div>
              <ul role="list" class="flex justify-center space-x-5">
                <li>
                  <a href="#" class="text-gray-400 hover:text-gray-500">
                    <span class="sr-only">Twitter</span>
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#" class="text-gray-400 hover:text-gray-500">
                    <span class="sr-only">LinkedIn</span>
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path fill-rule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clip-rule="evenodd" />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="space-y-12">
      <div class="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
        <h2 class="text-3xl font-extrabold tracking-tight sm:text-4xl">Execution</h2>
        <p class="text-xl text-gray-500">Ornare sagittis, suspendisse in hendrerit quis. Sed dui aliquet lectus sit pretium egestas vel mattis neque.</p>
      </div>
      <ul role="list" class="mx-auto space-y-16 sm:grid sm:grid-cols-2 sm:gap-16 sm:space-y-0 lg:grid-cols-4 lg:max-w-5xl">
        <li>
          <div class="space-y-6">
            <img class="mx-auto h-40 w-40 rounded-full xl:w-56 xl:h-56" src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80" alt="">
            <div class="space-y-2">
              <div class="text-lg leading-6 font-medium space-y-1">
                <h3>Whitney Francis</h3>
                <p class="text-indigo-600">Copywriter</p>
              </div>
              <ul role="list" class="flex justify-center space-x-5">
                <li>
                  <a href="#" class="text-gray-400 hover:text-gray-500">
                    <span class="sr-only">Twitter</span>
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#" class="text-gray-400 hover:text-gray-500">
                    <span class="sr-only">LinkedIn</span>
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path fill-rule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clip-rule="evenodd" />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li>
          <div class="space-y-6">
            <img class="mx-auto h-40 w-40 rounded-full xl:w-56 xl:h-56" src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80" alt="">
            <div class="space-y-2">
              <div class="text-lg leading-6 font-medium space-y-1">
                <h3>Whitney Francis</h3>
                <p class="text-indigo-600">Copywriter</p>
              </div>
              <ul role="list" class="flex justify-center space-x-5">
                <li>
                  <a href="#" class="text-gray-400 hover:text-gray-500">
                    <span class="sr-only">Twitter</span>
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#" class="text-gray-400 hover:text-gray-500">
                    <span class="sr-only">LinkedIn</span>
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path fill-rule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clip-rule="evenodd" />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li>
          <div class="space-y-6">
            <img class="mx-auto h-40 w-40 rounded-full xl:w-56 xl:h-56" src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80" alt="">
            <div class="space-y-2">
              <div class="text-lg leading-6 font-medium space-y-1">
                <h3>Whitney Francis</h3>
                <p class="text-indigo-600">Copywriter</p>
              </div>
              <ul role="list" class="flex justify-center space-x-5">
                <li>
                  <a href="#" class="text-gray-400 hover:text-gray-500">
                    <span class="sr-only">Twitter</span>
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#" class="text-gray-400 hover:text-gray-500">
                    <span class="sr-only">LinkedIn</span>
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path fill-rule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clip-rule="evenodd" />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="space-y-12">
      <div class="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
        <h2 class="text-3xl font-extrabold tracking-tight sm:text-4xl">Legal</h2>
        <p class="text-xl text-gray-500">Ornare sagittis, suspendisse in hendrerit quis. Sed dui aliquet lectus sit pretium egestas vel mattis neque.</p>
      </div>
      <ul role="list" class="mx-auto space-y-16 sm:grid sm:grid-cols-2 sm:gap-16 sm:space-y-0 lg:grid-cols-4 lg:max-w-5xl">
        <li>
          <div class="space-y-6">
            <img class="mx-auto h-40 w-40 rounded-full xl:w-56 xl:h-56" src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80" alt="">
            <div class="space-y-2">
              <div class="text-lg leading-6 font-medium space-y-1">
                <h3>Whitney Francis</h3>
                <p class="text-indigo-600">Copywriter</p>
              </div>
              <ul role="list" class="flex justify-center space-x-5">
                <li>
                  <a href="#" class="text-gray-400 hover:text-gray-500">
                    <span class="sr-only">Twitter</span>
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#" class="text-gray-400 hover:text-gray-500">
                    <span class="sr-only">LinkedIn</span>
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path fill-rule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clip-rule="evenodd" />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li>
          <div class="space-y-6">
            <img class="mx-auto h-40 w-40 rounded-full xl:w-56 xl:h-56" src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80" alt="">
            <div class="space-y-2">
              <div class="text-lg leading-6 font-medium space-y-1">
                <h3>Whitney Francis</h3>
                <p class="text-indigo-600">Copywriter</p>
              </div>
              <ul role="list" class="flex justify-center space-x-5">
                <li>
                  <a href="#" class="text-gray-400 hover:text-gray-500">
                    <span class="sr-only">Twitter</span>
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#" class="text-gray-400 hover:text-gray-500">
                    <span class="sr-only">LinkedIn</span>
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path fill-rule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clip-rule="evenodd" />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li>
          <div class="space-y-6">
            <img class="mx-auto h-40 w-40 rounded-full xl:w-56 xl:h-56" src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80" alt="">
            <div class="space-y-2">
              <div class="text-lg leading-6 font-medium space-y-1">
                <h3>Whitney Francis</h3>
                <p class="text-indigo-600">Copywriter</p>
              </div>
              <ul role="list" class="flex justify-center space-x-5">
                <li>
                  <a href="#" class="text-gray-400 hover:text-gray-500">
                    <span class="sr-only">Twitter</span>
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#" class="text-gray-400 hover:text-gray-500">
                    <span class="sr-only">LinkedIn</span>
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path fill-rule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clip-rule="evenodd" />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="space-y-12">
      <div class="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
        <h2 class="text-3xl font-extrabold tracking-tight sm:text-4xl">Advisors</h2>
        <p class="text-xl text-gray-500">Ornare sagittis, suspendisse in hendrerit quis. Sed dui aliquet lectus sit pretium egestas vel mattis neque.</p>
      </div>
      <ul role="list" class="mx-auto space-y-16 sm:grid sm:grid-cols-2 sm:gap-16 sm:space-y-0 lg:grid-cols-4 lg:max-w-5xl">
        <li>
          <div class="space-y-6">
            <img class="mx-auto h-40 w-40 rounded-full xl:w-56 xl:h-56" src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80" alt="">
            <div class="space-y-2">
              <div class="text-lg leading-6 font-medium space-y-1">
                <h3>Whitney Francis</h3>
                <p class="text-indigo-600">Copywriter</p>
              </div>
              <ul role="list" class="flex justify-center space-x-5">
                <li>
                  <a href="#" class="text-gray-400 hover:text-gray-500">
                    <span class="sr-only">Twitter</span>
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#" class="text-gray-400 hover:text-gray-500">
                    <span class="sr-only">LinkedIn</span>
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path fill-rule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clip-rule="evenodd" />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li>
          <div class="space-y-6">
            <img class="mx-auto h-40 w-40 rounded-full xl:w-56 xl:h-56" src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80" alt="">
            <div class="space-y-2">
              <div class="text-lg leading-6 font-medium space-y-1">
                <h3>Whitney Francis</h3>
                <p class="text-indigo-600">Copywriter</p>
              </div>
              <ul role="list" class="flex justify-center space-x-5">
                <li>
                  <a href="#" class="text-gray-400 hover:text-gray-500">
                    <span class="sr-only">Twitter</span>
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#" class="text-gray-400 hover:text-gray-500">
                    <span class="sr-only">LinkedIn</span>
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path fill-rule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clip-rule="evenodd" />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li>
          <div class="space-y-6">
            <img class="mx-auto h-40 w-40 rounded-full xl:w-56 xl:h-56" src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80" alt="">
            <div class="space-y-2">
              <div class="text-lg leading-6 font-medium space-y-1">
                <h3>Whitney Francis</h3>
                <p class="text-indigo-600">Copywriter</p>
              </div>
              <ul role="list" class="flex justify-center space-x-5">
                <li>
                  <a href="#" class="text-gray-400 hover:text-gray-500">
                    <span class="sr-only">Twitter</span>
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#" class="text-gray-400 hover:text-gray-500">
                    <span class="sr-only">LinkedIn</span>
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path fill-rule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clip-rule="evenodd" />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li>
          <div class="space-y-6">
            <img class="mx-auto h-40 w-40 rounded-full xl:w-56 xl:h-56" src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80" alt="">
            <div class="space-y-2">
              <div class="text-lg leading-6 font-medium space-y-1">
                <h3>Whitney Francis</h3>
                <p class="text-indigo-600">Copywriter</p>
              </div>
              <ul role="list" class="flex justify-center space-x-5">
                <li>
                  <a href="#" class="text-gray-400 hover:text-gray-500">
                    <span class="sr-only">Twitter</span>
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#" class="text-gray-400 hover:text-gray-500">
                    <span class="sr-only">LinkedIn</span>
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path fill-rule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clip-rule="evenodd" />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li>
          <div class="space-y-6">
            <img class="mx-auto h-40 w-40 rounded-full xl:w-56 xl:h-56" src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80" alt="">
            <div class="space-y-2">
              <div class="text-lg leading-6 font-medium space-y-1">
                <h3>Whitney Francis</h3>
                <p class="text-indigo-600">Copywriter</p>
              </div>
              <ul role="list" class="flex justify-center space-x-5">
                <li>
                  <a href="#" class="text-gray-400 hover:text-gray-500">
                    <span class="sr-only">Twitter</span>
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#" class="text-gray-400 hover:text-gray-500">
                    <span class="sr-only">LinkedIn</span>
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path fill-rule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clip-rule="evenodd" />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li>
          <div class="space-y-6">
            <img class="mx-auto h-40 w-40 rounded-full xl:w-56 xl:h-56" src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80" alt="">
            <div class="space-y-2">
              <div class="text-lg leading-6 font-medium space-y-1">
                <h3>Whitney Francis</h3>
                <p class="text-indigo-600">Copywriter</p>
              </div>
              <ul role="list" class="flex justify-center space-x-5">
                <li>
                  <a href="#" class="text-gray-400 hover:text-gray-500">
                    <span class="sr-only">Twitter</span>
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#" class="text-gray-400 hover:text-gray-500">
                    <span class="sr-only">LinkedIn</span>
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path fill-rule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clip-rule="evenodd" />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li>
          <div class="space-y-6">
            <img class="mx-auto h-40 w-40 rounded-full xl:w-56 xl:h-56" src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80" alt="">
            <div class="space-y-2">
              <div class="text-lg leading-6 font-medium space-y-1">
                <h3>Whitney Francis</h3>
                <p class="text-indigo-600">Copywriter</p>
              </div>
              <ul role="list" class="flex justify-center space-x-5">
                <li>
                  <a href="#" class="text-gray-400 hover:text-gray-500">
                    <span class="sr-only">Twitter</span>
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#" class="text-gray-400 hover:text-gray-500">
                    <span class="sr-only">LinkedIn</span>
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path fill-rule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clip-rule="evenodd" />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li>
          <div class="space-y-6">
            <img class="mx-auto h-40 w-40 rounded-full xl:w-56 xl:h-56" src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80" alt="">
            <div class="space-y-2">
              <div class="text-lg leading-6 font-medium space-y-1">
                <h3>Whitney Francis</h3>
                <p class="text-indigo-600">Copywriter</p>
              </div>
              <ul role="list" class="flex justify-center space-x-5">
                <li>
                  <a href="#" class="text-gray-400 hover:text-gray-500">
                    <span class="sr-only">Twitter</span>
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#" class="text-gray-400 hover:text-gray-500">
                    <span class="sr-only">LinkedIn</span>
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path fill-rule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clip-rule="evenodd" />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</div>



<!-- This example requires Tailwind CSS v2.0+ -->
<div class="relative bg-indigo-800">
  <div class="absolute inset-0">
    <img class="w-full h-full object-cover" src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&&sat=-100" alt="">
    <div class="absolute inset-0 bg-indigo-800 mix-blend-multiply" aria-hidden="true"></div>
  </div>
  <div class="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
    <h1 class="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">Get in touch</h1>
    <p class="mt-6 text-xl text-indigo-100 max-w-3xl">Mattis amet hendrerit dolor, quisque lorem pharetra. Pellentesque lacus nisi urna, arcu sociis eu. Orci vel lectus nisl eget eget ut consectetur. Sit justo viverra non adipisicing elit distinctio.</p>
  </div>
</div>




<!--
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/typography'),
    ],
  }
  ```
-->
<div class="relative py-16 bg-white overflow-hidden">
  <div class="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
    <div class="relative h-full text-lg max-w-prose mx-auto" aria-hidden="true">
    </div>
  </div>
  <div class="relative px-4 sm:px-6 lg:px-8">
    <div class="text-lg max-w-prose mx-auto">
      <h1>
        <span class="block text-base text-center text-indigo-600 font-semibold tracking-wide uppercase">Introducing</span>
        <span class="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">JavaScript for Beginners</span>
      </h1>
      <p class="mt-8 text-xl text-gray-500 leading-8">Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem. At arcu, sit dui mi, nibh dui, diam eget aliquam. Quisque id at vitae feugiat egestas ac. Diam nulla orci at in viverra scelerisque eget. Eleifend egestas fringilla sapien.</p>
    </div>
    <div class="mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto">
      <p>Faucibus commodo massa rhoncus, volutpat. <strong>Dignissim</strong> sed <strong>eget risus enim</strong>. Mattis mauris semper sed amet vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque erat velit. Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. <a href="#">Mattis mauris semper</a> sed amet vitae sed turpis id.</p>
    </div>
  </div>
</div>




<!-- This example requires Tailwind CSS v2.0+ -->
<div class="bg-white">
  <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
    <p class="text-center text-base font-semibold uppercase text-gray-600 tracking-wider">Trusted by over 5 very average small businesses</p>
    <div class="mt-6 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-8">
      <div class="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
        <img class="max-h-12" src="https://tailwindui.com/img/logos/transistor-logo-gray-400.svg" alt="Workcation">
      </div>
      <div class="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
        <img class="max-h-12" src="https://tailwindui.com/img/logos/mirage-logo-gray-400.svg" alt="Mirage">
      </div>
      <div class="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
        <img class="max-h-12" src="https://tailwindui.com/img/logos/tuple-logo-gray-400.svg" alt="Tuple">
      </div>
      <div class="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
        <img class="max-h-12" src="https://tailwindui.com/img/logos/laravel-logo-gray-400.svg" alt="Laravel">
      </div>
      <div class="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
        <img class="max-h-12" src="https://tailwindui.com/img/logos/statickit-logo-gray-400.svg" alt="StaticKit">
      </div>
      <div class="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
        <img class="max-h-12" src="https://tailwindui.com/img/logos/statamic-logo-gray-400.svg" alt="Statamic">
      </div>
    </div>
  </div>
</div>


<!-- This example requires Tailwind CSS v2.0+ -->
<div class="bg-white">
  <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
    <p class="text-center text-base font-semibold uppercase text-gray-600 tracking-wider">Trusted by over 5 very average small businesses</p>
    <div class="mt-6 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-8">
      <div class="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
        <img class="max-h-12" src="https://tailwindui.com/img/logos/transistor-logo-gray-400.svg" alt="Workcation">
      </div>
      <div class="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
        <img class="max-h-12" src="https://tailwindui.com/img/logos/mirage-logo-gray-400.svg" alt="Mirage">
      </div>
      <div class="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
        <img class="max-h-12" src="https://tailwindui.com/img/logos/tuple-logo-gray-400.svg" alt="Tuple">
      </div>
      <div class="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
        <img class="max-h-12" src="https://tailwindui.com/img/logos/laravel-logo-gray-400.svg" alt="Laravel">
      </div>
      <div class="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
        <img class="max-h-12" src="https://tailwindui.com/img/logos/statickit-logo-gray-400.svg" alt="StaticKit">
      </div>
      <div class="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
        <img class="max-h-12" src="https://tailwindui.com/img/logos/statamic-logo-gray-400.svg" alt="Statamic">
      </div>
    </div>
  </div>
</div>



  </main>
</div>

<!-- This example requires Tailwind CSS v2.0+ -->
<footer class="bg-white">
  <div class="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
    <nav class="-mx-5 -my-2 flex flex-wrap justify-center" aria-label="Footer">
      <div class="px-5 py-2">
        <a href="#" class="text-base text-gray-500 hover:text-gray-900"> About </a>
      </div>

      <div class="px-5 py-2">
        <a href="#" class="text-base text-gray-500 hover:text-gray-900"> Blog </a>
      </div>

      <div class="px-5 py-2">
        <a href="#" class="text-base text-gray-500 hover:text-gray-900"> Jobs </a>
      </div>

      <div class="px-5 py-2">
        <a href="#" class="text-base text-gray-500 hover:text-gray-900"> Press </a>
      </div>

      <div class="px-5 py-2">
        <a href="#" class="text-base text-gray-500 hover:text-gray-900"> Accessibility </a>
      </div>

      <div class="px-5 py-2">
        <a href="#" class="text-base text-gray-500 hover:text-gray-900"> Partners </a>
      </div>
    </nav>
    <div class="mt-8 flex justify-center space-x-6">
      <a href="#" class="text-gray-400 hover:text-gray-500">
        <span class="sr-only">Facebook</span>
        <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" />
        </svg>
      </a>

      <a href="#" class="text-gray-400 hover:text-gray-500">
        <span class="sr-only">Instagram</span>
        <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd" />
        </svg>
      </a>

      <a href="#" class="text-gray-400 hover:text-gray-500">
        <span class="sr-only">Twitter</span>
        <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      </a>

      <a href="#" class="text-gray-400 hover:text-gray-500">
        <span class="sr-only">GitHub</span>
        <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" />
        </svg>
      </a>

      <a href="#" class="text-gray-400 hover:text-gray-500">
        <span class="sr-only">Dribbble</span>
        <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path fill-rule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clip-rule="evenodd" />
        </svg>
      </a>
    </div>
    <p class="mt-8 text-center text-base text-gray-400">&copy; 2020 Workflow, Inc. All rights reserved.</p>
  </div>
</footer>
