<script>
    import events from '$lib/data/events';
    import FilterPagePanel from '$lib/components/panels/FilterPagePanel.svelte';

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

<section class="prose flex max-w-full">
    <FilterPagePanel {filters} cardsInfo={events} />
</section>
