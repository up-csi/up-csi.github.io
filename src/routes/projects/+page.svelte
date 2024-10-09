<script>
    import FilterPagePanel from '$lib/components/FilterPagePanel.svelte';
    import projects from '$lib/projects/projects';

    const filters = ['All', 'Service', 'Innovation', 'Other'];
</script>

<article class="prose max-w-full dark:prose-invert">
    <FilterPagePanel {filters} cardsInfo={projects} />
</article>
