<script>
    import events, { Tag } from '$lib/events/events';
    import FeaturedEvent from './FeaturedEvent.svelte';
    import FilterPagePanel from '$lib/components/FilterPagePanel.svelte';
    import lino from '$lib/lino-sablay.svg';

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
    <FeaturedEvent tags={[Tag.App]} schedule={['']}>
        <img slot="image" src={lino} alt="Incoming App Process" />
        <svelte:fragment slot="name">Incoming App Process...</svelte:fragment>
        <svelte:fragment slot="description">Stay tuned...</svelte:fragment>
    </FeaturedEvent>
    <FilterPagePanel {filters} cardsInfo={events} />
</article>
