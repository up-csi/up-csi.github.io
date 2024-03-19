<script>
    import upcsi from '$lib/icons/upcsi.svg';
    import darkmode from '$lib/icons/darkmode.svg'
    import lightmode from '$lib/icons/lightmode.svg'
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
            <button class="rounded-lg bg-black px-5 py-2 text-csi-white">Get Started</button>
        </li>
    </ul>
</nav>
