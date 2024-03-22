<script>
    import CarouselCard from './CarouselCard.svelte';

    let partners = [
        {id: 0, name: "Lorem"},
        {id: 1, name: "ipsum"},
        {id: 2, name: "dolor"},
        {id: 3, name: "sit"},
        {id: 4, name: "amet"},
        {id: 5, name: "consectetur"},
        {id: 6, name: "Lorem"},
        {id: 7, name: "ipsum"},
        {id: 8, name: "dolor"},
        {id: 9, name: "sit"},
        {id: 10, name: "amet"},
        {id: 11, name: "consectetur"},
    ];

    $: setTimeout(() => {
        partners = [...partners.slice(1, partners.length), ...partners.slice(0, 1)];
    }, 2000);
</script>

<div class="flex justify-center gap-5 w-full overflow-clip">
    {#each partners as partner (partner.id)}
        <CarouselCard name={partner.name}/>
    {/each}
</div>
