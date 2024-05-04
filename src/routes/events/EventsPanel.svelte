<script lang="ts">
    import EventCard from './EventCard.svelte';
    import events from './events.json';

    const filters = [
        'All',
        'EX Series',
        'App Process',
        'General Assembly',
        'Partnership',
        'Workshop',
        'Other',
    ];

    $: currentFilter = 'All';
    $: filteredEvents = events.filter(
        ({ tag }) => currentFilter === 'All' || tag === currentFilter,
    );

    export let perPage = 6; // Max number of events per page of the pagination
    $: pages = Math.ceil(filteredEvents.length / perPage);

    let currentPage = 0;

    // Computes first and last card in the page to do a correct slice
    $: start = currentPage * perPage;
    $: end = currentPage === pages ? events.length - 1 : start + perPage - 1;
    $: filteredEventsInPage = filteredEvents.slice(start, end + 1);

    // Goes to the next page in the pagination
    function nextPage() {
        currentPage += 1;
    }

    // Goes to the previous page in the pagingation
    function backPage() {
        currentPage -= 1;
    }

    // Sets page to the page number clicked
    function setPage(newPage: number) {
        currentPage = newPage;
    }

    // Sets current filter
    function setFilter(filter: string) {
        currentFilter = filter;

        // Page is reset back to the first to avoid users from going to a page with no cards
        currentPage = 0;
    }
</script>

<div class="flex flex-col gap-10">
    <div class="flex flex-row justify-center">
        <ul
            class="m-0 flex max-w-screen-sm list-none flex-row flex-wrap justify-center gap-2 rounded-lg bg-csi-neutral-50 p-1 shadow-lg lg:max-w-fit dark:bg-csi-neutral-900"
        >
            {#each filters as filter}
                {@const neutral =
                    currentFilter === filter
                        ? 'bg-csi-blue text-csi-black'
                        : 'bg-csi-neutral-100 dark:bg-csi-neutral-700'}
                <li class="m-0 p-0">
                    <button
                        class="min-h-10 shrink-0 rounded-md px-6 {neutral}"
                        on:click={() => setFilter(filter)}
                    >
                        {filter}
                    </button>
                </li>
            {/each}
        </ul>
    </div>
    <div class="flex justify-center">
        <div class="grid w-fit grid-cols-1 items-center gap-8 md:grid-cols-2 lg:grid-cols-3">
            {#each filteredEventsInPage as { type, state, url, title, src, dates, description }}
                <EventCard {src} alt="image of {title}" href={url}>
                    <svelte:fragment>
                        <p class="m-0">{state} - {type}</p>
                        <h2 class="m-0">{title}</h2>
                        <p class="m-0">{dates}</p>
                        <p class="m-0 grow overflow-hidden">{description}</p>
                    </svelte:fragment>
                </EventCard>
            {/each}
        </div>
    </div>
    <div class="flex flex-row justify-center">
        <ul
            class="m-0 flex list-none flex-row rounded-lg bg-csi-neutral-50 p-0 shadow-lg dark:bg-csi-neutral-900"
        >
            <li class="m-0 p-0">
                <button
                    class="flex size-10 items-center justify-center disabled:cursor-default disabled:text-csi-neutral-200 dark:disabled:text-csi-neutral-500"
                    on:click={backPage}
                    disabled={currentPage <= 0}
                >
                    &lt;
                </button>
            </li>
            {#each Array(pages) as _, pageIndex}
                {@const neutral =
                    pageIndex === currentPage ? 'bg-csi-neutral-100 dark:bg-csi-neutral-700' : ''}
                <li class="m-0 p-0">
                    <button
                        class="flex size-10 items-center justify-center {neutral}"
                        on:click={() => setPage(pageIndex)}
                    >
                        {pageIndex + 1}
                    </button>
                </li>
            {/each}
            <li class="m-0 p-0">
                <button
                    class="flex size-10 items-center justify-center disabled:cursor-default disabled:text-csi-neutral-200 dark:disabled:text-csi-neutral-500"
                    on:click={nextPage}
                    disabled={currentPage >= pages - 1}
                >
                    &gt;
                </button>
            </li>
        </ul>
    </div>
</div>
