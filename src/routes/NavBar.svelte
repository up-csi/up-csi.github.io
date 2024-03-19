<script>
    import upcsi from '$lib/icons/upcsi.svg';
    import darkmode from '$lib/icons/darkmode.svg'
    import lightmode from '$lib/icons/lightmode.svg'

    let mobileMenu = false;
</script>

<nav class="flex justify-center items-center">
    <ul
        class="flex flex-row items-center justify-between gap-4 bg-[#fcfdfd] dark:bg-[#0d0d0d] p-1 w-full lg:w-fit lg:rounded-xl"
    >
        <li class="mx-6 sm:mx-10 lg:ml-8 lg:mr-4">
            <img src={upcsi} alt="UP CSI Logo" class="h-8 object-contain" />
        </li>
        <li class="hidden lg:block">
            <a href="/" class="text-csi-black dark:text-csi-white">Home</a>
        </li>
        <li class="hidden lg:block">
            <a href="/about/" class="text-csi-black dark:text-csi-white">About</a>
        </li>
        <li class="hidden lg:block">
            <a href="/events/" class="text-csi-black dark:text-csi-white">Events</a>
        </li>
        <li class="hidden lg:block">
            <a href="/projects/" class="text-csi-black dark:text-csi-white">Projects</a>
        </li>
        <li class="hidden lg:block">
            <a href="/news/" class="text-csi-black dark:text-csi-white">Newsletter</a>
        </li>
        <li class="hidden lg:block">
            <img src={darkmode} alt="Toggle Dark Mode" class="h-6 mx-4 dark:hidden object-contain" />
            <img src={lightmode} alt="Toggle Light Mode" class="h-6 mx-4 hidden dark:block object-contain" />
        </li>
        <li class="hidden lg:block">
            <button class="rounded-lg bg-csi-blue px-5 py-2">Get in Touch</button>
        </li>
        <li class="mx-6 sm:mx-10 my-2 lg:hidden">
            <button class="rounded-lg bg-black px-5 py-2 text-csi-white" on:click={() => mobileMenu = true}>Get Started</button>
        </li>
    </ul>
</nav>

{#if mobileMenu}
    <div class="h-svh bg-blue-white flex flex-col">
        <div class="fixed bottom-0 w-full">
            <ul class="w-full">
                <li class="m-4">
                    <a href="/" class="font-dm text-csi-black dark:text-csi-white text-2xl">Home</a>
                    <!-- <img src={darkmode} alt="Toggle Dark Mode" class="h-6 mx-4 dark:hidden object-contain" />
                    <img src={lightmode} alt="Toggle Light Mode" class="h-6 mx-4 hidden dark:block object-contain" /> -->
                </li>
                <li class="m-4">
                    <a href="/about/" class="font-dm text-csi-black dark:text-csi-white text-2xl">About</a>
                </li>
                <li class="m-4">
                    <a href="/events/" class="font-dm text-csi-black dark:text-csi-white text-2xl">Events</a>
                </li>
                <li class="m-4">
                    <a href="/projects/" class="font-dm text-csi-black dark:text-csi-white text-2xl">Projects</a>
                </li>
                <li class="m-4">
                    <a href="/news/" class="font-dm text-csi-black dark:text-csi-white text-2xl">Newsletter</a>
                </li>
                <li class="m-4">
                    <button class="font-dm text-csi-black dark:text-csi-white text-2xl">Get in Touch</button>
                </li>
            </ul>
            <div class="w-full flex justify-center items-center my-4"><button class="rounded-full bg-[#eff5f7] py-3 px-6" on:click={() => mobileMenu = false}>Close</button></div>
        </div> 
    </div>
{/if}