<script lang="ts">
    import type { Event } from '$lib/data/events';
    import EventCard from '$lib/components/cards/EventCard.svelte';
    import type { Project } from '$lib/data/projects';
    import ProjectCard from '$lib/components/cards/ProjectCard.svelte';

    interface Props {
        /** Max number of events per page in the pagination. */
        perPage?: number;
        filters: string[];
        cardsInfo: (Event | Project)[];
    }

    const { perPage = 6, filters, cardsInfo }: Props = $props();

    let currentFilter = $state('All');
    const filteredCards = $derived(
        currentFilter === 'All' ? cardsInfo : cardsInfo.filter(({ tag }) => tag === currentFilter),
    );
    const pages = $derived(Math.ceil(filteredCards.length / perPage));

    // Computes first and last card in the page to do a correct slice
    let currentPage = $state(0);
    const filteredCardsInPage = $derived.by(() => {
        const pages = Math.ceil(filteredCards.length / perPage);
        const start = currentPage * perPage;
        const end = currentPage === pages ? cardsInfo.length - 1 : start + perPage - 1;
        return filteredCards.slice(start, end + 1);
    });

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
        currentPage = 0; // Reset back to first page to avoid going to a page without cards
    }
</script>

<div class="flex flex-col gap-10 transition-colors ease-in-out">
    <div class="flex flex-row justify-center">
        <ul
            class="bg-float m-0 flex max-w-(--breakpoint-sm) list-none flex-row flex-wrap justify-center gap-2 rounded-lg p-1 shadow-lg lg:max-w-fit"
        >
            {#each filters as filter}
                {@const neutral =
                    currentFilter === filter
                        ? 'bg-csi-blue text-csi-black'
                        : 'bg-invert/10'}
                <li class="m-0 p-0">
                    <button
                        class="hover:bg-invert hover:text-invert-foreground min-h-10 shrink-0 rounded-md px-6 transition-colors ease-in-out {neutral}"
                        onclick={() => setFilter(filter)}
                    >
                        {filter}
                    </button>
                </li>
            {/each}
        </ul>
    </div>
    <div class="flex justify-center">
        <div
            class="grid w-fit grid-cols-1 items-center gap-8 transition-colors ease-in-out md:grid-cols-2 lg:grid-cols-3"
        >
            {#each filteredCardsInPage as cardProps}
                {#if 'event' in cardProps}
                    <EventCard {...cardProps} />
                {:else}
                    <ProjectCard {...cardProps} />
                {/if}
            {/each}
        </div>
    </div>
    <div class="flex flex-row justify-center">
        <ul
            class="bg-float m-0 flex list-none flex-row rounded-lg p-0 shadow-lg"
        >
            <li class="m-0 p-0">
                <button
                    class="hover:bg-invert/10 disabled:text-float-foreground/10 disabled:hover:bg-transparent flex size-10 items-center justify-center rounded-l-lg transition-colors ease-in-out disabled:cursor-default"
                    onclick={backPage}
                    disabled={currentPage <= 0}
                >
                    &lt;
                </button>
            </li>
            {#each Array(pages) as _, pageIndex}
                {@const neutral =
                    pageIndex === currentPage ? 'bg-invert/10' : ''}
                <li class="m-0 p-0">
                    <button
                        class="flex size-10 items-center justify-center transition-colors ease-in-out {neutral} hover:bg-invert/10"
                        onclick={() => setPage(pageIndex)}
                    >
                        {pageIndex + 1}
                    </button>
                </li>
            {/each}
            <li class="m-0 p-0">
                <button
                    class="hover:bg-invert/10 disabled:text-float-foreground/10 disabled:hover:bg-transparent flex size-10 items-center justify-center rounded-r-lg transition-colors ease-in-out disabled:cursor-default"
                    onclick={nextPage}
                    disabled={currentPage >= pages - 1}
                >
                    &gt;
                </button>
            </li>
        </ul>
    </div>
</div>
