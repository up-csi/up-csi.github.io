<script>
    import CarouselCard from './CarouselCard.svelte';

    const partners = [
        { id: 0, name: 'Lorem' },
        { id: 1, name: 'ipsum' },
        { id: 2, name: 'dolor' },
        { id: 3, name: 'sit' },
        { id: 4, name: 'amet' },
        { id: 5, name: 'consectetur' },
        { id: 6, name: 'Lorem' },
        { id: 7, name: 'ipsum' },
        { id: 8, name: 'dolor' },
        { id: 9, name: 'sit' },
        { id: 10, name: 'amet' },
        { id: 11, name: 'consectetur' },
    ];
</script>

<div class="flex w-full justify-start gap-5 snap-x overflow-x-scroll">
    {#each partners as { id, name } (id)}
        <div>
            <CarouselCard {name} />
        </div>
    {/each}
</div>

<div class="my-4 flex w-full justify-start gap-5 snap-x overflow-x-scroll lg:hidden">
    {#each partners as { id, name } (id)}
        <div>
            <CarouselCard {name} />
        </div>
    {/each}
</div>
