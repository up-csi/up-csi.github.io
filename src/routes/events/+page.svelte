<script>
    import events from './events';
    import lino from '$lib/lino-sablay.svg';

    import EventsPanel from '$lib/components/EventsPanel.svelte';
    import FeaturedEvent from './FeaturedEvent.svelte';

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

<article class="prose flex max-w-full flex-col gap-8 dark:prose-invert">
    <FeaturedEvent tags={['App Process']} schedule={['']}>
        <img slot="image" src={lino} alt="Incoming App Process..." />
        <svelte:fragment slot="name">Incoming App Process</svelte:fragment>
        <svelte:fragment slot="description">Stay tuned...</svelte:fragment>
    </FeaturedEvent>
    <EventsPanel {filters} {events} />
</article>
