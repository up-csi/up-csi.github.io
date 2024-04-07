<script>
    import './app.css';
    import { get, init } from '$lib/stores/color-scheme';
    import Footer from './Footer.svelte';
    import NavBar from './NavBar.svelte';
    import { browser } from '$app/environment';

    init();
    const theme = get();
    $: if (browser) document.documentElement.classList.toggle('dark', $theme);
</script>

<header class="sticky lg:fixed top-0 lg:top-10 lg:inset-x-0 z-50">
    <NavBar />
</header>
<main class="m-4 space-y-16 sm:mt-5 sm:m-8 xl:mx-32 xl:mb-16">
    <slot />
</main>
<Footer />