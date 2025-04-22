<script lang="ts">
    import type { Board } from '$lib/types/board';
    import Card from '$lib/components/cards/ExecCard.svelte';

    interface Props {
        board: Board;
    }

    const { board }: Props = $props();
    const { term, src, officers }: Board = $derived(board);
</script>

<section class="prose flex max-w-none flex-col gap-8">
    {#if src}
        <figure class="!m-0 flex flex-col items-center">
            <enhanced:img
                {src}
                sizes="(min-width:768px) 768px, (min-width:640px) 640px"
                alt="The {term} Executive Board"
            />
            <figcaption>The {term} Executive Board</figcaption>
        </figure>
    {:else}
        <h1
            class="w-full text-center text-3xl font-normal transition-colors ease-in-out md:text-4xl"
        >
            The {term} Executive Board
        </h1>
    {/if}

    <section class="not-prose flex flex-wrap justify-around gap-8">
        {#each officers as officer}
            <Card {officer} />
        {/each}
    </section>
</section>
