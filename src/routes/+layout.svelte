<script lang="ts">
    import '../app.css';
    import Footer from '$lib/components/footers/Footer.svelte';
    import NavBar from '$lib/components/nav/NavBar.svelte';
    import type { Snippet } from 'svelte';

    interface Props {
        children?: Snippet;
    }

    const { children }: Props = $props();
</script>

<header class="sticky inset-x-0 top-0 z-50 items-center justify-center p-3 lg:px-16">
    <NavBar />
</header>
<main
    class="m-4 flex flex-col items-center space-y-16 transition-colors ease-in-out *:max-w-full sm:m-8 sm:mt-2 xl:mx-32"
>
    <!-- m-4 space-y-16 sm:m-8 xl:m-32 xl:my-16 -->
    {@render children?.()}
</main>
<Footer />
