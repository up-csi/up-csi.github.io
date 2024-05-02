<script>
    import EventCard from "./EventCard.svelte"; 

    import imageSrc from "$lib/cartoon-card-placeholder.svg"
</script>

<article class="prose dark:prose-invert">
    <h1>Events</h1>

    <EventCard imageSrc={imageSrc} pageUrl="/events/">
        <svelte:fragment>
            <p class="m-0">Upcoming - Internal</p>
            <h2 class="m-0">ACENS1ON</h2>
            <p class="m-0">August 4 - August 6, 2023</p>
            <p class="m-0 overflow-hidden grow">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </svelte:fragment>
    </EventCard>
</article>
