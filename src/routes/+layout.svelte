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

<header
    class="sticky top-0 z-50 bg-csi-white lg:inset-x-0 lg:bg-transparent dark:bg-csi-black dark:lg:bg-transparent"
>
    <NavBar />
</header>
<main class="m-4 space-y-16 sm:m-8 sm:mt-5 lg:my-16 xl:mx-32">
    <!-- m-4 space-y-16 sm:m-8 xl:m-32 xl:my-16 -->
    <slot />
</main>
<Footer />
