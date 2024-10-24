<script lang="ts">
    import type { Event } from '$lib/events/events';
    import EventCard from '$lib/components/EventCard.svelte';
    import type { Project } from '$lib/projects/projects';
    import ProjectCard from './ProjectCard.svelte';

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
                        onclick={() => setFilter(filter)}
                    >
                        {filter}
                    </button>
                </li>
            {/each}
        </ul>
    </div>
    <div class="flex justify-center">
        <div class="grid w-fit grid-cols-1 items-center gap-8 md:grid-cols-2 lg:grid-cols-3">
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
            class="m-0 flex list-none flex-row rounded-lg bg-csi-neutral-50 p-0 shadow-lg dark:bg-csi-neutral-900"
        >
            <li class="m-0 p-0">
                <button
                    class="flex size-10 items-center justify-center disabled:cursor-default disabled:text-csi-neutral-200 dark:disabled:text-csi-neutral-500"
                    onclick={backPage}
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
                        onclick={() => setPage(pageIndex)}
                    >
                        {pageIndex + 1}
                    </button>
                </li>
            {/each}
            <li class="m-0 p-0">
                <button
                    class="flex size-10 items-center justify-center disabled:cursor-default disabled:text-csi-neutral-200 dark:disabled:text-csi-neutral-500"
                    onclick={nextPage}
                    disabled={currentPage >= pages - 1}
                >
                    &gt;
                </button>
            </li>
        </ul>
    </div>
</div>
