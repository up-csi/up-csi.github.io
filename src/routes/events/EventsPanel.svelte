<script lang="ts">
    import EventCard from './EventCard.svelte';
    import ascenc10n from '$lib/events/ascension.webp';
    import bootcamp10 from '$lib/events/bootcamp-10.webp';
    import csflight from '$lib/events/csflight.webp';
    import ex2023 from '$lib/events/EX-series-2023.webp';
    import firstGa2023 from '$lib/events/first-GA-2324B.webp';
    import gitWorkshop from '$lib/events/git-workshop.webp';
    import pyrolympics from '$lib/events/pyrolympics.webp';
    import yearEndGa2023 from '$lib/events/year-end-GA-2023.webp';

    const filters = [
        'All',
        'EX Series',
        'App Process',
        'General Assembly',
        'Partnership',
        'Workshop',
        'Other',
    ];

    const events = [
        {
            tag: 'Other',
            state: 'Past',
            type: 'Internal',
            title: 'ASCENS10N',
            dates: 'August 4 - August 6, 2023',
            description:
                'On its tenth year, UP CSI celebrates a decade of innovation and excellence with its members and alumni who became a part of this incredible journey.',
            src: ascenc10n,
            url: '/events/',
        },
        {
            tag: 'EX Series',
            state: 'Past',
            type: 'External',
            title: 'EX Series 2023',
            dates: 'August 4 - August 6, 2023',
            description:
                'Aute incididunt officia exercitation ea aliqua officia culpa incididunt proident aliqua commodo velit.',
            src: ex2023,
            url: '/events/',
        },
        {
            tag: 'App Process',
            state: 'Past',
            type: 'Internal',
            title: 'CSFlight',
            dates: 'August 4 - August 6, 2023',
            description:
                'Qui eu voluptate non nostrud. Et irure reprehenderit pariatur nulla laboris ipsum ut tempor magna officia tempor mollit Lorem reprehenderit.',
            src: csflight,
            url: '/events/',
        },
        {
            tag: 'Partnership',
            state: 'Past',
            type: 'External',
            title: 'Bootcamp 10.0',
            dates: 'August 4 - August 6, 2023',
            description: 'Nisi consequat consequat nisi ipsum. Ut dolore dolore officia ea ipsum.',
            src: bootcamp10,
            url: '/events/',
        },
        {
            tag: 'Workshop',
            state: 'Past',
            type: 'External',
            title: 'Git Workshop',
            dates: 'August 4 - August 6, 2023',
            description:
                'Laboris ullamco do occaecat nostrud nisi irure. Ullamco nulla duis elit fugiat anim sint.',
            src: gitWorkshop,
            url: '/events/',
        },
        {
            tag: 'General Assembly',
            state: 'Past',
            type: 'Internal',
            title: 'Year-end General Assembly 2023',
            dates: 'August 4 - August 6, 2023',
            description: 'Proident in aliqua proident quis ex ad excepteur culpa sunt.',
            src: yearEndGa2023,
            url: '/events/',
        },
        {
            tag: 'App Process',
            state: 'Past',
            type: 'Internal',
            title: 'Pyrolympics',
            dates: 'August 4 - August 6, 2023',
            description:
                'Elit irure elit adipisicing consectetur nisi laborum mollit esse eu dolore nostrud laborum laborum. Excepteur nulla velit aliquip eiusmod duis.',
            src: pyrolympics,
            url: '/events/',
        },
        {
            tag: 'General Assembly',
            state: 'Past',
            type: 'Internal',
            title: 'First GA 2324B',
            dates: 'August 4 - August 6, 2023',
            description:
                'Culpa consectetur enim fugiat in labore laborum et adipisicing Lorem. Enim mollit excepteur est ea nulla in nulla dolor et.',
            src: firstGa2023,
            url: '/events/',
        },
    ];

    $: currentFilter = 'All';
    $: filteredEvents =
        currentFilter === 'All' ? events : events.filter(({ tag }) => tag === currentFilter);

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
