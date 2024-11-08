<script>
    import ExecPanel from './ExecPanel.svelte';
    import TeamPanel from './TeamPanel.svelte';

    const { data } = $props();
    const { team, exec } = $derived(data);
    const [presExec, ...pastExec] = $derived(exec);
</script>

<section>
    {#if presExec}
        <div class="pb-3">
            <ExecPanel exec={presExec} />
        </div>
    {/if}
    <div class="py-6">
        <TeamPanel {team} />
    </div>
</section>
<section>
    <h1 class="mb-4 w-full text-center text-3xl text-csi-black md:text-4xl dark:text-csi-white">
        The Past Executive Boards
    </h1>

    {#each pastExec as board}
        <details class="py-4">
            <summary class="text-xl text-csi-black md:text-2xl dark:text-csi-white"
                >{board.year}</summary
            >
            <div class="my-4">
                <ExecPanel exec={board} />
            </div>
        </details>
    {/each}
</section>
