<script>
    import { pres_term } from '$lib/data/exec';

    import ExecPanel from '$lib/components/panels/ExecPanel.svelte';
    import TeamPanel from '$lib/components/panels/TeamPanel.svelte';

    const { data } = $props();
    const { team, filteredTeams, exec } = $derived(data);
    const pres_board = $derived(exec[pres_term]);
</script>

{#if pres_board}
    <div class="pb-3">
        <ExecPanel board={pres_board} />
    </div>
{/if}

<div class="py-6">
    <TeamPanel {team} {filteredTeams} />
</div>

<section class="w-full">
    <h1 class="text-foreground mb-4 w-full text-center text-3xl transition-colors md:text-4xl">
        The Past Executive Boards
    </h1>

    {#each Object.keys(exec) as term}
        {#if term !== pres_term}
            {@const board = exec[term]}
            {#if board}
                <details class="py-4">
                    <summary class="text-foreground text-xl transition-colors md:text-2xl"
                        >{term}</summary
                    >
                    <div class="my-4">
                        <ExecPanel {board} />
                    </div>
                </details>
            {/if}
        {/if}
    {/each}
</section>
