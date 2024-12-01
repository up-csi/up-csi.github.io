<script lang="ts">
    import './app.css';
    import { get, init } from '$lib/stores/color-scheme';
    import Footer from './Footer.svelte';
    import NavBar from './NavBar.svelte';
    import type { Snippet } from 'svelte';

    interface Props {
        children?: Snippet;
    }

    const { children }: Props = $props();

    init();
    const theme = get();

    $effect(() => {
        document.documentElement.classList.toggle('dark', $theme);
    });
</script>

<header class="sticky inset-x-0 top-0 z-50 items-center justify-center p-3 lg:px-16">
    <NavBar />
</header>
<main class="transition-colors ease-in-out duration-300 m-4 space-y-16 sm:m-8 sm:mt-2 xl:mx-32">
    <!-- m-4 space-y-16 sm:m-8 xl:m-32 xl:my-16 -->
    {@render children?.()}
</main>
<Footer />
