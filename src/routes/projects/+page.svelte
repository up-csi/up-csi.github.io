<script>
    import Accordion from '$lib/components/Accordion.svelte';
    import FilterPagePanel from '$lib/components/FilterPagePanel.svelte';
    import projects from '$lib/projects/projects';
    const filters = ['All', 'Service', 'Innovation', 'Other'];
</script>

<article class="prose max-w-full dark:prose-invert">
    <FilterPagePanel {filters} cardsInfo={projects} />
</article>

<section>
    <h1 class="mb-4 w-2/5 text-3xl text-csi-black md:text-4xl dark:text-csi-white">FAQs</h1>
    <Accordion title="Lorem ipsum dolor sit amet?">
        <span> Lorem ipsum dolor sit amet adipiscing elit consectitur </span>
    </Accordion>
</section>
