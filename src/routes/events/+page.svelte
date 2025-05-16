<script lang="ts">
    import Events from '$lib/components/panels/EventPanel.svelte';
    import ImageCarousel from '$lib/components/carousels/ImageCarousel.svelte';

    const { data } = $props();
    const { events, filteredEvents } = $derived(data);
</script>

<ImageCarousel items={events} />
<section class="prose">
    <Events {events} {filteredEvents} />
</section>
