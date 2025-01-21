<script>
    import FilterPagePanel from '$lib/components/FilterPagePanel.svelte';
    import SocialMediaPanel from '$lib/components/SocialMediaPanel.svelte';
    import projects from '$lib/projects/projects';
    const filters = ['All', 'Service', 'Innovation', 'Other'];
</script>

<article class="prose max-w-full dark:prose-invert">
    <div class="flex w-auto flex-col items-center space-y-10 md:flex-row md:items-start">
        <FilterPagePanel {filters} cardsInfo={projects} />
        <SocialMediaPanel />
    </div>
</article>
