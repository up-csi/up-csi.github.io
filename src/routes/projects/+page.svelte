<script>
    import FilterPagePanel from '$lib/components/FilterPagePanel.svelte';
    import projects from '$lib/projects/projects';
    import GeneralInfo from './GeneralInfo.svelte';
    const filters = ['All', 'Service', 'Innovation', 'Other'];
</script>

<article class="prose max-w-full flex flex-row gap-4 lg:flex-row flex-col dark:prose-invert">
    <div class="grow">
        <FilterPagePanel {filters} cardsInfo={projects} />
    </div>
    <div>
        <GeneralInfo />
    </div>
</article>