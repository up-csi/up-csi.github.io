<script lang="ts">
    import { type Event, TAGS as eventTags } from '$lib/models/event';

    import CardPanel from '$lib/components/panels/CardPanel.svelte';
    import Item from '$lib/components/items/EventItem.svelte';
    import PageControls from '$lib/components/controls/PageControls.svelte';
    import Tags from '$lib/components/controls/TagControls.svelte';

    interface Props {
        /** Max number of cards per page in the pagination. */
        perPage?: number;
        events: Event[];
        filteredEvents: Record<string, Event[]>;
    }

    const { perPage = 6, events, filteredEvents }: Props = $props();
    const tags = ['All', ...eventTags];

    let selectedTag = $state(tags[0] ?? 'All');
    const selectedEvents = $derived(filteredEvents[selectedTag] ?? events);
    const pages = $derived(Math.ceil(selectedEvents.length / perPage));

    // Computes first and last card in the page to do a correct slice
    let currentPage = $state(0);
    const shown = $derived.by(() => {
        const start = currentPage * perPage;
        const end = currentPage === pages ? selectedEvents.length - 1 : start + perPage - 1;
        return selectedEvents.slice(start, end + 1);
    });

    $effect(() => {
        if (selectedTag) {
            currentPage = 0;
        }
    });
</script>

<div class="flex flex-col gap-10 transition-colors ease-in-out">
    <Tags {tags} bind:selected={selectedTag} />
    <!-- TODO: add past/ongoing/future and internal/external filters -->

    <CardPanel>
        {#snippet cards()}
            {#each shown as event}
                <Item {event} />
            {/each}
        {/snippet}
    </CardPanel>

    <PageControls {pages} bind:currentPage />
</div>
