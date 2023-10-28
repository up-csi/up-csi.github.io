<script>
    import Exec from './Exec.svelte';
    import arianRey from '$lib/people/arian-rey.webp';
    import bastiOrtiz from '$lib/people/basti-ortiz.webp';
    import beaDiokno from '$lib/people/bea-diokno.webp';
    import calebBunye from '$lib/people/caleb-bunye.webp';
    import eyronTanael from '$lib/people/eyron-tanael.webp';
    import jellyRaborar from '$lib/people/jelly-raborar.webp';
    import hansLorico from '$lib/people/hans-lorico.webp';
</script>

<article class="prose max-w-none dark:prose-invert">
    <h1>People</h1>
    <section class="not-prose flex flex-wrap gap-4 justify-around">
        <Exec src={calebBunye} alt="Caleb Bunye" pos="President" />
        <Exec src={hansLorico} alt="Hans Lorico" pos="Vice President for Innovation" />
        <Exec src={eyronTanael} alt="Eyron Tanael" pos="Vice President for Service" />
        <Exec src={bastiOrtiz} alt="Basti Ortiz" pos="Director for Engineering" />
        <Exec src={arianRey} alt="Arian Rey" pos="Director for Membership & Internals" />
        <Exec src={jellyRaborar} alt="Jelly Raborar" pos="Director for Branding & Creatives" />
        <Exec src={beaDiokno} alt="Bea Diokno" pos="Director for External Affairs" />
    </section>
</article>
