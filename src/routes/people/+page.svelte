<script>
    import Exec from './Exec.svelte';
    import TeamPanel from './TeamPanel.svelte';

    import arianRey from '$lib/people/arian-rey.webp';
    import arrowDownDark from '$lib/icons/arrowdowndark.svg';
    import arrowDownLight from '$lib/icons/arrowdownlight.svg';
    import arrowUpDark from '$lib/icons/arrowupdark.svg';
    import arrowUpLight from '$lib/icons/arrowuplight.svg';
    import bastiOrtiz from '$lib/people/basti-ortiz.webp';
    import beaDiokno from '$lib/people/bea-diokno.webp';
    import calebBunye from '$lib/people/caleb-bunye.webp';
    import execFull from '$lib/people/exec.webp';
    import execMedium from '$lib/people/exec-768.webp';
    import execSmall from '$lib/people/exec-640.webp';
    import eyronTanael from '$lib/people/eyron-tanael.webp';
    import hansLorico from '$lib/people/hans-lorico.webp';
    import jellyRaborar from '$lib/people/jelly-raborar.webp';
    import lino from '$lib/lino-hero.svg';

    import { get } from '$lib/stores/color-scheme';

    let pastExec = false;
    const theme = get();
</script>

<section>
    <section class="prose mb-8 flex max-w-none flex-col gap-8">
        <h1 class="w-full font-normal text-3xl text-center text-csi-black md:text-4xl dark:text-csi-white">The 2024-2025 Executive Board</h1>
        <section class="not-prose flex flex-wrap justify-around gap-8">
            <Exec src={lino} alt="Andri Crisostomo" pos="President" />
            <Exec src={lino} alt="Andri Crisostomo" pos="Vice President for Innovation" />
            <Exec src={lino} alt="David Zamuco" pos="Vice President for Service" />
            <Exec src={lino} alt="Victor Reyes" pos="Director for Engineering" />
            <Exec src={lino} alt="Bianca Amurao" pos="Director for Membership & Internals" />
            <Exec src={lino} alt="Clarisse Bucu" pos="Director for Branding & Creatives" />
            <Exec src={lino} alt="Sean Tolentino" pos="Director for External Relations" />
        </section>
    </section>
    <TeamPanel />
</section>
<section>
    <h1 class="w-full text-3xl text-center text-csi-black md:text-4xl dark:text-csi-white">
        The Past Executive Boards
    </h1>

    <button
        class="border-inherit mb-4 w-full border-b-2 text-csi-black dark:text-csi-white"
        on:click={() => {
            pastExec = !pastExec;
        }}
    >
        <div class="flex w-full flex-row items-center text-center">
            {#if pastExec}
                <img
                    src={$theme ? arrowUpLight : arrowUpDark}
                    alt="Toggle Dropdown"
                    class="h-4 pr-2"
                />
            {:else}
                <img
                    src={$theme ? arrowDownLight : arrowDownDark}
                    alt="Toggle Dropdown"
                    class="h-4 pr-2"
                />
            {/if}
            <h2 class="text-xl md:text-2xl">2023-2024</h2>
        </div>
    </button>
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
                <Exec
                    src={jellyRaborar}
                    alt="Jelly Raborar"
                    pos="Director for Branding & Creatives"
                />
                <Exec src={beaDiokno} alt="Bea Diokno" pos="Director for External Relations" />
            </section>
        </section>
    {/if}
</section>
