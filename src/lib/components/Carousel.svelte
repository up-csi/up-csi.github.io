<script>
    import { flip } from 'svelte/animate';
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

    let shownPartners = partners.slice(0, 7);
    let next = 8;

    $: setTimeout(() => {
        shownPartners = [...shownPartners.slice(1, shownPartners.length), ...partners.slice(next, next + 1)];
        next = (next + 1) % partners.length;
    }, 2000);
</script>

<div class="flex justify-center gap-5 w-full overflow-clip">
    {#each shownPartners as partner (partner.id)}
        <div animate:flip|global={{ duration: 500 }}>
            <CarouselCard name={partner.name}/>
        </div>
    {/each}
</div>
