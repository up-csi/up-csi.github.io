<script>
    import './app.css';
    import upcsi from '$lib/icons/upcsi.svg';
</script>

<header
    class="sticky top-0 flex items-center justify-between bg-inherit bg-white p-4 px-8 shadow-md dark:bg-slate-800"
>
    <a href="/">
        <img src="{upcsi}" alt="UP CSI Logo" class="object-contain" width="20" />
    </a>
    <nav>
        <ul class="flex flex-row justify-end gap-4">
            <li><a class="py-4" href="/people/">People</a></li>
            <li><a class="py-4" href="/events/">Events</a></li>
            <li><a class="py-4" href="/partners/">Partnerships</a></li>
            <li><a class="py-4" href="/news/">Newsletter</a></li>
        </ul>
    </nav>
</header>
<main class="m-4 shadow-xl">
    <slot />
</main>
<footer class="p-8 sm:p-12 md:p-16">
    <ul class="flex flex-row flex-wrap justify-center gap-8">
        <!-- TODO: Use actual SVG social icons here. -->
        <li><a href="mailto:lino@up-csi.org">lino@up-csi.org</a></li>
        <li>
            <a target="_blank" rel="noopener" href="https://www.facebook.com/upcsi"> Facebook </a>
        </li>
        <li>
            <a target="_blank" rel="noopener" href="https://twitter.com/officialupcsi"> Twitter </a>
        </li>
        <li>
            <a
                target="_blank"
                rel="noopener"
                href="https://www.linkedin.com/company/up-center-for-student-innovations/"
            >
                LinkedIn
            </a>
        </li>
        <li>
            <a target="_blank" rel="noopener" href="https://github.com/up-csi ">GitHub</a>
        </li>
    </ul>
</footer>
