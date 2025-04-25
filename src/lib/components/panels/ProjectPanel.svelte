<script lang="ts">
    import { type Project, TAGS as projectTags } from '$lib/models/project';

    import CardPanel from '$lib/components/panels/CardPanel.svelte';
    import Item from '$lib/components/items/ProjectItem.svelte';
    import PageControls from '$lib/components/controls/PageControls.svelte';
    import Tags from '$lib/components/controls/TagControls.svelte';

    interface Props {
        /** Max number of cards per page in the pagination. */
        perPage?: number;
        projects: Project[];
        filteredProjects: Record<string, Project[]>;
    }

    const { perPage = 6, projects, filteredProjects }: Props = $props();
    const tags = ['All', ...projectTags];

    let selected = $state(tags[0] ?? 'All');
    const selectedProjects = $derived(filteredProjects[selected] ?? projects);
    const pages = $derived(Math.ceil(selectedProjects.length / perPage));

    // Computes first and last card in the page to do a correct slice
    let currentPage = $state(0);
    const shown = $derived.by(() => {
        const start = currentPage * perPage;
        const end = currentPage === pages ? selectedProjects.length - 1 : start + perPage - 1;
        return selectedProjects.slice(start, end + 1);
    });

    $effect(() => {
        if (selected) {
            currentPage = 0;
        }
    });
</script>

<div class="flex flex-col gap-10 transition-colors ease-in-out">
    <Tags {tags} bind:selected />

    <CardPanel>
        {#snippet cards()}
            {#each shown as project}
                <Item {project} />
            {/each}
        {/snippet}
    </CardPanel>

    <PageControls {pages} bind:currentPage />
</div>
