<script>
    import Faq from '$lib/components/Faq.svelte';
    import FaqEntry from '$lib/components/FaqEntry.svelte';
    import FilterPagePanel from '$lib/components/FilterPagePanel.svelte';
    import projects from '$lib/projects/projects';
    const filters = ['All', 'Service', 'Innovation', 'Other'];
</script>

<article class="prose max-w-full dark:prose-invert">
    <FilterPagePanel {filters} cardsInfo={projects} />
</article>

<Faq>
    <FaqEntry title="GENERAL FAQ">
        <span
            >Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span
        >
    </FaqEntry>
    <FaqEntry title="GENERAL FAQ">
        <span
            >Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span
        >
    </FaqEntry>
</Faq>