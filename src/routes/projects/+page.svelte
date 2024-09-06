<script>
    import projects from './projects.js';
    import ProjectsPanel from '$lib/components/EventsPanel.svelte';

    const filters = ['All', 'Service', 'Innovation', 'Other'];
</script>

<article class="prose max-w-full dark:prose-invert">
    <ProjectsPanel {filters} events={projects} />
</article>
