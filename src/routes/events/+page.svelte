<script lang="ts">
    import Events from '$lib/components/panels/EventPanel.svelte';
    import ImageCarousel from '$lib/components/carousels/ImageCarousel.svelte';

    const { data } = $props();
    const { events, filteredEvents, featuredEvents } = $derived(data);
</script>

<ImageCarousel
    items={featuredEvents.map(event => ({
        // TODO: fill in with the correct details
        ...event,
        picture: null,
        type: '',
        registerLink: '',
        duration: '',
    }))}
/>
<section class="prose">
    <Events {events} {filteredEvents} />
</section>
