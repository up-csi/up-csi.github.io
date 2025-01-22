<script>
    import Faq from '$lib/components/Faq.svelte';
    import FilterPagePanel from '$lib/components/FilterPagePanel.svelte';
    import projects from '$lib/projects/projects';
    const filters = ['All', 'Service', 'Innovation', 'Other'];
    const faqEntries = [
        {title: "GENERAL FAQ", paragraph: faqParagraph1},
        {title: "GENERAL FAQ", paragraph: faqParagraph2}
    ]
</script>

<article class="prose max-w-full dark:prose-invert">
    <FilterPagePanel {filters} cardsInfo={projects} />
</article>

{#snippet faqParagraph1()}
    <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
{/snippet}

{#snippet faqParagraph2()}
    <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
{/snippet}

<Faq {faqEntries}/>