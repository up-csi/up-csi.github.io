<script>
    import FilterPagePanel from '$lib/components/FilterPagePanel.svelte';
    import GeneralInfo from './GeneralInfo.svelte';
    import SocialMediaPanel from '$lib/components/SocialMediaPanel.svelte';
    import projects from '$lib/projects/projects';

    const filters = ['All', 'Service', 'Innovation', 'Other'];
</script>

<article class="prose flex max-w-full flex-col gap-4 dark:prose-invert lg:flex-row">
    <div class="grow">
        <FilterPagePanel {filters} cardsInfo={projects} />
    </div>
    <div class="flex flex-col gap-4">
        <GeneralInfo />
        <SocialMediaPanel />
    </div>
</article>
