<script>
    import { pres_term } from '$lib/data/exec';

    import Accordion from '$lib/components/accordions/Accordion.svelte';
    import AccordionPanel from '$lib/components/panels/AccordionPanel.svelte';
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
    <h1 class="border-csi-blue text-foreground mb-8 border-b-3 pb-4 text-center text-3xl">
        Meet the previous executive boards
    </h1>
    <AccordionPanel>
        {#each terms as term (term)}
            {#if term !== pres_term}
                {@const board = exec[term]}
                {#if board}
                    <Accordion title={term}>
                        <ExecPanel {board} />
                    </Accordion>
                {/if}
            {/if}
        {/each}
    </AccordionPanel>
</section>
