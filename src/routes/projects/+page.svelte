<script>
    import EventsPanel from '$lib/components/EventsPanel.svelte';
    import projects from './projects.js';

    const filters = ['All', 'Service', 'Innovation', 'Other'];
</script>

<article class="prose max-w-full dark:prose-invert">
    <EventsPanel {filters} events={projects} />
</article>
