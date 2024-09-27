<script>
    import Exec from './Exec.svelte';
    import TeamPanel from './TeamPanel.svelte';

    import arianRey from '$lib/people/arian-rey.webp';
    import bastiOrtiz from '$lib/people/basti-ortiz.webp';
    import beaDiokno from '$lib/people/bea-diokno.webp';
    import calebBunye from '$lib/people/caleb-bunye.webp';
    import execFull from '$lib/people/exec.webp';
    import execMedium from '$lib/people/exec-768.webp';
    import execSmall from '$lib/people/exec-640.webp';
    import eyronTanael from '$lib/people/eyron-tanael.webp';
    import hansLorico from '$lib/people/hans-lorico.webp';
    import jellyRaborar from '$lib/people/jelly-raborar.webp';

    let pastExec = false;
</script>

<section>
    <TeamPanel />
</section>
<section>
    <button on:click={() => { pastExec = !pastExec; }}>2023-2024</button>
    {#if pastExec}
        <section class="prose flex max-w-none flex-col gap-8">
            <figure class="m-0 flex flex-col items-center">
                <picture class="max-w-3xl">
                    <source type="image/webp" srcset={execSmall} media="(max-width:640px)" />
                    <source type="image/webp" srcset={execMedium} />
                    <img src={execFull} width="1568" height="1203" alt="The Executive Board" />
                </picture>
                <figcaption>The 2023-2024 Executive Board</figcaption>
            </figure>
            <section class="not-prose flex flex-wrap justify-around gap-8">
                <Exec src={calebBunye} alt="Caleb Bunye" pos="President" />
                <Exec src={hansLorico} alt="Hans Lorico" pos="Vice President for Innovation" />
                <Exec src={eyronTanael} alt="Eyron Tanael" pos="Vice President for Service" />
                <Exec src={bastiOrtiz} alt="Basti Ortiz" pos="Director for Engineering" />
                <Exec src={arianRey} alt="Arian Rey" pos="Director for Membership & Internals" />
                <Exec src={jellyRaborar} alt="Jelly Raborar" pos="Director for Branding & Creatives" />
                <Exec src={beaDiokno} alt="Bea Diokno" pos="Director for External Relations" />
            </section>
        </section>
    {/if}
</section>
