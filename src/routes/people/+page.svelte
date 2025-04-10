<script>
    import ExecPanel from '../../lib/components/panels/ExecPanel.svelte';
    import TeamPanel from '$lib/components/panels/TeamPanel.svelte';

    const { data } = $props();
    const { team, filteredTeams, exec } = $derived(data);
    const [presExec, ...pastExec] = $derived(exec);
</script>

<section>
    {#if presExec}
        <div class="pb-3">
            <ExecPanel exec={presExec} />
        </div>
    {/if}
    <div class="py-6">
        <TeamPanel {team} {filteredTeams} />
    </div>
</section>
<section>
    <h1
        class="text-csi-black dark:text-csi-white mb-4 w-full text-center text-3xl transition-colors md:text-4xl"
    >
        The Past Executive Boards
    </h1>

    {#each pastExec as board}
        <details class="py-4">
            <summary
                class="text-csi-black dark:text-csi-white text-xl transition-colors md:text-2xl"
                >{board.year}</summary
            >
            <div class="my-4">
                <ExecPanel exec={board} />
            </div>
        </details>
    {/each}
</section>
