<script>
    import './app.css';
    import Footer from './Footer.svelte';
    import NavBar from './NavBar.svelte';
</script>

<header class="sticky top-0 lg:top-12">
    <NavBar />
</header>
<main class="m-4 space-y-16 sm:m-8 xl:m-32 xl:my-16">
    <slot />
</main>
<Footer />
