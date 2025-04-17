<script lang="ts">
    import { MemberCommittees, getCommitteeInfo } from '$lib/types/committees';
    import type { Member } from '$lib/models/member';

    import Card from '$lib/components/cards/MemberCard.svelte';

    const COMMITTEE_FILTERS = ['Everyone', ...Object.keys(MemberCommittees)];

    interface Props {
        team: Member[];
        filteredTeams: Record<string, Member[]>;
    }

    const { team, filteredTeams }: Props = $props();
    let currentCommittee = $state('Executive');
    const filteredTeam = $derived(
        currentCommittee === 'Everyone' ? team : filteredTeams[currentCommittee],
    );
</script>

<section
    class="prose bg-highlight flex w-full max-w-full flex-col items-center gap-8 rounded-3xl px-6 py-16 transition-colors ease-in-out md:p-12"
>
    <div class="flex w-full flex-col items-center text-center lg:w-2/3">
        <p class="!m-0">The Team</p>
        <h1 class="mb-4 w-full text-3xl font-normal transition-colors sm:w-3/4 md:text-4xl">
            Meet the people that make innovation possible.
        </h1>
        <div class="flex flex-row justify-center">
            <ul
                class="!m-0 flex max-w-(--breakpoint-sm) list-none flex-row flex-wrap justify-center gap-4 rounded-lg p-0 lg:max-w-fit"
            >
                {#each COMMITTEE_FILTERS as committee}
                    {@const neutral =
                        currentCommittee === committee
                            ? 'bg-selected-filter text-selected-filter-foreground'
                            : 'bg-filter text-filter-foreground'}
                    <li class="!m-0 p-0">
                        <button
                            class="hover:bg-filter-hover min-h-10 shrink-0 rounded-md px-6 shadow-md transition-colors {neutral}"
                            onclick={() => (currentCommittee = committee)}
                        >
                            {committee}
                        </button>
                    </li>
                {/each}
            </ul>
        </div>
    </div>
    <div
        class="grid grid-cols-2 gap-x-6 gap-y-12 md:grid-cols-3 md:gap-6 lg:grid-cols-4 xl:grid-cols-5"
    >
        {#if filteredTeam}
            {@const { color, foreground } = getCommitteeInfo(currentCommittee)}
            {#each filteredTeam as member}
                <Card {member} {color} {foreground} />
            {/each}
        {/if}
    </div>
</section>
