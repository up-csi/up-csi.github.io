<script lang="ts">
    import Events from '$lib/components/panels/EventPanel.svelte';

    const { data } = $props();
    const { events, filteredEvents } = $derived(data);
</script>

<section class="prose">
    <Events {events} {filteredEvents} />
</section>
