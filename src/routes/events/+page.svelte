<script>
    import EventsPanel from '$lib/components/EventsPanel.svelte';
    import events from './events.js';

    const filters = [
        'All',
        'EX Series',
        'App Process',
        'General Assembly',
        'Partnership',
        'Workshop',
        'Other',
    ]; 
</script>

<article class="prose max-w-full dark:prose-invert">
    <EventsPanel {filters} {events} />
</article>
