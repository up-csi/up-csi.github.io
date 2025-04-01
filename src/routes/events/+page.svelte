<script>
    import events, { Tag } from '$lib/events/events';
    import FeaturedEvent from './FeaturedEvent.svelte';
    import FilterPagePanel from '$lib/components/FilterPagePanel.svelte';
    import lino from '$lib/lino-owlright.svg';

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
    <FeaturedEvent tags={[Tag.Other]} schedule={['']}>
        {#snippet image()}
            <img src={lino} alt="&num;CURSORSeCSI" />
        {/snippet}
        {#snippet name()}
            Happy April Fools!
        {/snippet}
        {#snippet description()}
            &num;UPCurSIr &num;CURSORSeCSI
        {/snippet}
    </FeaturedEvent>
    <FilterPagePanel {filters} cardsInfo={events} />
</article>
