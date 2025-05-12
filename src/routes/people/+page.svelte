<script>
    import { pres_term } from '$lib/data/exec';

    import AccordionPanel from '$lib/components/panels/AccordionPanel.svelte';
    import Exec from '$lib/components/accordions/Accordion.svelte';
    import ExecPanel from '$lib/components/panels/ExecPanel.svelte';
    import TeamPanel from '$lib/components/panels/TeamPanel.svelte';

    const { data } = $props();
    const { team, filteredTeams, exec } = $derived(data);

    const terms = $derived(Object.keys(exec).sort().reverse());
</script>

<div class="py-6">
    <TeamPanel {team} {filteredTeams} />
</div>

<section class="w-full">
    <h1 class="pb-4 border-b-3 border-csi-blue mb-8 text-3xl text-foreground text-center">Meet the previous executive boards</h1>

    <AccordionPanel>
        {#each terms as term}
            {#if term !== pres_term}
                {@const board = exec[term]}
                {#if board}
                    <Exec title={term}>
                        <ExecPanel {board} />
                    </Exec>
                {/if}
            {/if}
        {/each}
    </AccordionPanel>    
</section>
