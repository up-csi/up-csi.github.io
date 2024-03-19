<script>
    import upcsi from '$lib/icons/upcsi.svg';
</script>

<nav>
    <ul
        class="flex w-full flex-row items-center justify-between gap-4 bg-warm-white py-1 pl-8 pr-1 lg:w-fit lg:rounded-xl"
    >
        <li>
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
            <button class="rounded-xl bg-csi-blue px-5 py-2">Get in Touch</button>
        </li>
        <li class="lg:hidden">
            <button class="rounded-xl bg-black px-5 py-2 text-csi-white">Get Started</button>
        </li>
    </ul>
</nav>
