<script lang="ts">
    import Icon from '@iconify/svelte';

    import ChevronLeft from '@iconify/icons-heroicons/chevron-left-20-solid';
    import ChevronRight from '@iconify/icons-heroicons/chevron-right-20-solid';

    interface Props {
        /** Max number of cards per page in the pagination. */
        pages: number;
        currentPage: number;
    }

    // eslint-disable-next-line prefer-const
    let { pages, currentPage = $bindable() }: Props = $props();

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
</script>

<div class="flex flex-row justify-center">
    <ul class="bg-float !m-0 flex list-none flex-row rounded-lg p-0 shadow-lg">
        <li class="!m-0 p-0">
            <button
                class="hover:bg-invert/10 disabled:text-float-foreground/10 flex size-10 items-center justify-center rounded-l-lg transition-colors ease-in-out disabled:cursor-default disabled:hover:bg-transparent"
                onclick={backPage}
                disabled={currentPage <= 0}
            >
                <Icon icon={ChevronLeft} width="18" height="18" />
            </button>
        </li>
        {#each Array(pages) as _, pageIndex (pageIndex)}
            <li class="!m-0 p-0">
                <button
                    class={[
                        '{neutral} hover:bg-invert/10 flex size-10 items-center justify-center transition-colors ease-in-out',
                        { 'bg-invert/10': pageIndex === currentPage },
                    ]}
                    onclick={() => setPage(pageIndex)}
                >
                    {pageIndex + 1}
                </button>
            </li>
        {/each}
        <li class="!m-0 p-0">
            <button
                class="hover:bg-invert/10 disabled:text-float-foreground/10 flex size-10 items-center justify-center rounded-r-lg transition-colors ease-in-out disabled:cursor-default disabled:hover:bg-transparent"
                onclick={nextPage}
                disabled={currentPage >= pages - 1}
            >
                <Icon icon={ChevronRight} width="18" height="18" />
            </button>
        </li>
    </ul>
</div>
