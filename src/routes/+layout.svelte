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

<header class="sticky top-0 lg:top-12">
    <NavBar />
</header>
<main class="m-4 space-y-16 sm:m-8 xl:m-32 xl:my-16">
    <slot />
</main>
<Footer />
