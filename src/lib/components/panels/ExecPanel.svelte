<script lang="ts">
    import { Board } from '$lib/models/board';
    import ExecCard from '../cards/ExecCard.svelte';

    interface Props {
        exec: Board;
    }

    const { exec }: Props = $props();
    const { year, officers, src }: Board = $derived(exec);
</script>

<section class="prose flex max-w-none flex-col gap-8">
    {#if src}
        <figure class="m-0 flex flex-col items-center">
            <enhanced:img
                {src}
                sizes="(min-width:768px) 768px, (min-width:640px) 640px"
                alt="The {year} Executive Board"
            />
            <figcaption>The {year} Executive Board</figcaption>
        </figure>
    {:else}
        <h1
            class="w-full text-center text-3xl font-normal text-csi-black transition-colors ease-in-out md:text-4xl dark:text-csi-white"
        >
            The {year} Executive Board
        </h1>
    {/if}

    <section class="not-prose flex flex-wrap justify-around gap-8">
        {#each officers as officer}
            <ExecCard {officer} />
        {/each}
    </section>
</section>
