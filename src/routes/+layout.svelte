<script>
    import './app.css';
    import NavBar from '$lib/components/NavBar.svelte';
    import SidesFooter from '$lib/components/SidesFooter.svelte';
</script>

<header class="sticky top-0">
    <NavBar />
</header>
<main class="m-4 space-y-16 sm:m-8 xl:m-32 xl:my-16">
    <slot />
</main>
<SidesFooter />
