<script>
    import './app.css';
    import NavList from './NavList.svelte';
    import upcsi from '$lib/icons/upcsi.svg';
</script>

<header class="sticky top-0 flex items-center justify-between bg-csi-white p-4 px-8 shadow-md">
    <a href="/">
        <img src={upcsi} alt="UP CSI Logo" class="object-contain" width="20" />
    </a>
    <nav><NavList /></nav>
</header>
<main class="m-4 space-y-16 sm:m-8 xl:m-32 xl:my-16">
    <slot />
</main>
<footer class="p-8 sm:p-12 md:p-16">
    <ul class="flex flex-row flex-wrap justify-center gap-8">
        <!-- TODO: Use actual SVG social icons here. -->
        <li><a href="mailto:lino@up-csi.org">lino@up-csi.org</a></li>
        <li>
            <a target="_blank" rel="noopener" href="https://www.facebook.com/upcsi">Facebook</a>
        </li>
        <li>
            <a target="_blank" rel="noopener" href="https://twitter.com/officialupcsi">Twitter</a>
        </li>
        <li>
            <a
                target="_blank"
                rel="noopener"
                href="https://www.linkedin.com/company/up-center-for-student-innovations/"
                >LinkedIn</a
            >
        </li>
        <li>
            <a target="_blank" rel="noopener" href="https://github.com/up-csi ">GitHub</a>
        </li>
    </ul>
</footer>
