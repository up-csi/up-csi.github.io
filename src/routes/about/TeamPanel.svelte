<script lang="ts">
    import TeamCard from "./TeamCard.svelte";
    import team from "./team.json";

    const committees = [
        'Everyone',
        'Executive Board',
        'Innovation',
        'Service',
        'External Relations',
        'Membership & Internals',
        'Branding & Creatives',
        'Engineering'
    ];

    $: currentCommittee = 'Everyone';
    $: filteredTeam = currentCommittee === 'Everyone' ? team : team.filter(({ committee }) => committee === currentCommittee);

    // Sets current filter
    function setFilter(committee: string) {
        currentCommittee = committee;
    }
</script>

<section class="prose max-w-full dark:prose-invert flex flex-col items-center gap-8 p-6 md:p-12 rounded-3xl w-full bg-blue-white dark:bg-black">
    <div class="flex flex-col items-center text-center w-full lg:w-2/3">
        <p class="m-0">The Team</p>
        <h1 class="mb-4 font-normal text-3xl md:text-4xl w-full sm:w-3/4">Meet the people that make innovation possible.</h1>
        <div class="flex flex-row justify-center">
            <ul
                class="m-0 p-0 flex max-w-screen-sm list-none flex-row flex-wrap justify-center gap-2 rounded-lg lg:max-w-fit" 
            >
                {#each committees as committee}
                    {@const neutral =
                        currentCommittee === committee
                            ? 'bg-black text-csi-white dark:bg-csi-blue dark:text-csi-black'
                            : 'bg-csi-white text-csi-black dark:bg-blue-white'}
                    <li class="m-0 p-0">
                        <button
                            class="min-h-10 shrink-0 rounded-md px-6 shadow-md {neutral}"
                            on:click={_ => setFilter(committee)}
                        >
                            {committee}
                        </button>
                    </li>
                {/each}
            </ul>
        </div>
    </div>
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {#each filteredTeam as member}
            <TeamCard {member} />
        {/each}
    </div>
</section>