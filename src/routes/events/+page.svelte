<script>
    import EventCard from "./EventCard.svelte";

    import events from "./events.json"
</script>

<article class="prose dark:prose-invert max-w-full">
    <h1>Events</h1>

    <div class="flex justify-center">
        <div class="grid w-fit items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {#each events as event}
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
</article>
