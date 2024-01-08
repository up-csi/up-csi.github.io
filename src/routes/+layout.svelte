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
<footer class="p-8 sm:p-12 md:p-16"></footer>
