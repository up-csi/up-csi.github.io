<script>
    import { page } from "$app/stores";
    import EventCard from "./EventCard.svelte";

    import events from "./events.json"

    export let perPage = 6;
    let pages = Math.ceil(events.length / perPage);

    $: currentPage = 0;
    $: start = currentPage * perPage;
    $: end = (currentPage === pages) ? events.length - 1 : start + perPage - 1;

    $: eventsInPage = events.slice(start, end + 1);

    function nextPage() {
        currentPage += 1;
    }

    function backPage() {
        currentPage -= 1;
    }

    function setPage(newPage = 0) {
        currentPage = newPage;
    }
</script>

<div class="flex flex-col gap-10">
    <div class="flex justify-center">
        <div class="grid w-fit items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {#each eventsInPage as event}
            <EventCard src={event.src} alt={`Image of ${event.title}`} href={event.url}>
                <svelte:fragment>
                    <p class="m-0">{event.state} - {event.type}</p>
                    <h2 class="m-0">{event.title}</h2>
                    <p class="m-0">{event.dates}</p>
                    <p class="m-0 overflow-hidden grow">{event.description}</p>
                </svelte:fragment>
            </EventCard>
            {/each}
        </div>
    </div>
    <div class="flex flex-row justify-center">
        <ul class="list-none m-0 p-0 flex flex-row bg-csi-neutral-50 dark:bg-csi-neutral-900 rounded-lg shadow-lg">
            <li
                class="m-0 p-0">
                <button
                    class="size-10 flex justify-center items-center disabled:cursor-default disabled:text-csi-neutral-200 dark:disabled:text-csi-neutral-500"
                    on:click={backPage}
                    disabled={currentPage <= 0}
                >
                    &lt;
                </button>
            </li>
            {#each [...Array(pages).keys()] as pageIndex}
                <li class="m-0 p-0">
                    <button
                        class="size-10 flex justify-center items-center {(pageIndex === currentPage) ? "bg-csi-neutral-100 dark:bg-csi-neutral-700" : ""}"
                        on:click={_ => setPage(pageIndex)}
                    >
                        {pageIndex + 1}
                    </button>
                </li>
            {/each}
            <li class="m-0 p-0">
                <button
                    class="size-10 flex justify-center items-center disabled:cursor-default disabled:text-csi-neutral-200 dark:disabled:text-csi-neutral-500"
                    on:click={nextPage}
                    disabled={currentPage >= pages - 1}
                >
                    &gt;
                </button>
            </li>
        </ul>
    </div>
</div>