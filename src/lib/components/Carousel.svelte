<script>
    import CarouselCard from './CarouselCard.svelte';
    import { flip } from 'svelte/animate';

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

    let shownPartners = partners.slice(0, 7);
    let next = 8;

    const mobilePartnersStart = Math.round(partners.length / 3);
    let shownPartnersMobile = partners.slice(mobilePartnersStart, mobilePartnersStart + 7);
    let nextMobile = mobilePartnersStart + 8;

    $: setTimeout(() => {
        shownPartners = [
            ...shownPartners.slice(1, shownPartners.length),
            ...partners.slice(next, next + 1),
        ];
        next = (next + 1) % partners.length;

        shownPartnersMobile = [
            ...shownPartnersMobile.slice(1, shownPartnersMobile.length),
            ...partners.slice(nextMobile, nextMobile + 1),
        ];
        nextMobile = (nextMobile + 1) % partners.length;
    }, 2000);
    // Note: will need cases when cards are fewer once we have content na
</script>

<div class="flex w-full justify-center gap-5 overflow-clip">
    {#each shownPartners as { id, name } (id)}
        <div animate:flip={{ duration: 500 }}>
            <CarouselCard {name} />
        </div>
    {/each}
</div>

<div class="my-4 flex w-full justify-center gap-5 overflow-clip lg:hidden">
    {#each shownPartnersMobile as { id, name } (id)}
        <div animate:flip={{ duration: 500 }}>
            <CarouselCard {name} />
        </div>
    {/each}
</div>
