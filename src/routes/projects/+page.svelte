<script>
    import ProjectsPanel from '$lib/components/EventsPanel.svelte';
    import lino from '$lib/lino-sablay.svg';

    const filters = ['All', 'Service', 'Innovation', 'Other'];

    const events = [
        {
            tag: 'Service',
            state: 'Past',
            type: 'Internal',
            title: 'Service Project',
            dates: 'August 4 - August 6, 2023',
            description: 'Lorep ipsum.',
            src: lino,
            url: '/projects/',
        },
    ];
</script>

<article class="prose max-w-full dark:prose-invert">
    <ProjectsPanel {filters} {events} />
</article>
