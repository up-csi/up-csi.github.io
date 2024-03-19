<script>
    import upcsi from '$lib/icons/upcsi.svg';
</script>

<nav class="flex justify-center items-center">
    <ul
        class="flex flex-row items-center justify-between gap-4 bg-warm-white p-1 w-full lg:w-fit lg:rounded-xl"
    >
        <li class="mx-6 sm:mx-10 lg:ml-8 lg:mr-4">
            <img src={upcsi} alt="UP CSI Logo" class="h-8 object-contain" />
        </li>
        <li class="hidden lg:block">
            <a href="/">Home</a>
        </li>
        <li class="hidden lg:block">
            <a href="/about/">About</a>
        </li>
        <li class="hidden lg:block">
            <a href="/events/">Events</a>
        </li>
        <li class="hidden lg:block">
            <a href="/projects/">Projects</a>
        </li>
        <li class="hidden lg:block">
            <a href="/news/">Newsletter</a>
        </li>
        <li class="hidden lg:block">
            <button class="rounded-xl px-5 py-2 text-black">darkMode</button>
        </li>
        <li class="hidden lg:block">
            <button class="rounded-lg bg-csi-blue px-5 py-2">Get in Touch</button>
        </li>
        <li class="mx-6 sm:mx-10 my-2 lg:hidden">
            <button class="rounded-lg bg-black px-5 py-2 text-csi-white">Get Started</button>
        </li>
    </ul>
</nav>
