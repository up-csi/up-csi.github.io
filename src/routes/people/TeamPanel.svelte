<script lang="ts">
    import { Github, Instagram, Linkedin } from '@steeze-ui/simple-icons';
    import { type Member, COMMITTEES } from '$lib/models/member';
    import { Icon } from '@steeze-ui/svelte-icon';
    import { Link } from '@steeze-ui/heroicons';
    import TeamCard from './TeamCard.svelte';

    // eslint-disable-next-line init-declarations
    export let team: Member[];

    const committeeFilters = ['Everyone', ...COMMITTEES];

    $: currentCommittee = 'Executive';
    $: filteredTeam =
        currentCommittee === 'Everyone'
            ? team
            : team.filter(({ committee }) => committee === currentCommittee);
    $: sortedFilteredTeam = structuredClone(filteredTeam).sort(
        (a, b) => committeeFilters.indexOf(a.committee) - committeeFilters.indexOf(b.committee),
    );

    function getSocialIcon(social: string) {
        switch (social) {
            case 'github':
                return Github;
            case 'linkedin':
                return Linkedin;
            case 'instagram':
                return Instagram;
            default:
                return Link;
        }
    }

    function getCommitteeColor(committee: string) {
        switch (committee) {
            case 'Innovation':
                return 'bg-committees-innov';
            case 'Service':
                return 'bg-committees-service';
            case 'External Relations':
                return 'bg-committees-exte';
            case 'Membership & Internals':
                return 'bg-committees-mni';
            case 'Branding & Creatives':
                return 'bg-committees-bnc';
            case 'Engineering':
                return 'bg-committees-engg';
            default:
                return 'bg-csi-blue';
        }
    }
</script>

<section
    class="prose flex w-full max-w-full flex-col items-center gap-8 rounded-3xl bg-blue-white px-6 py-16 dark:prose-invert md:p-12 dark:bg-black"
>
    <div class="flex w-full flex-col items-center text-center lg:w-2/3">
        <p class="m-0">The Team</p>
        <h1 class="mb-4 w-full text-3xl font-normal sm:w-3/4 md:text-4xl">
            Meet the people that make innovation possible.
        </h1>
        <div class="flex flex-row justify-center">
            <ul
                class="m-0 flex max-w-screen-sm list-none flex-row flex-wrap justify-center gap-4 rounded-lg p-0 lg:max-w-fit"
            >
                {#each committeeFilters as committee}
                    {@const neutral =
                        currentCommittee === committee
                            ? 'bg-black text-csi-white dark:bg-csi-blue dark:text-csi-black'
                            : 'bg-csi-white text-csi-black dark:bg-blue-white'}
                    <li class="m-0 p-0">
                        <button
                            class="min-h-10 shrink-0 rounded-md px-6 shadow-md {neutral} transition-colors"
                            on:click={() => (currentCommittee = committee)}
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
        {#each sortedFilteredTeam as { name, title, committee, src, socials }}
            <TeamCard {src} alt="image of {name}">
                <div>
                    <p class="text-md m-0 md:text-lg">{name}</p>
                    <p class="m-0 text-xs leading-tight">{title}</p>
                </div>
                <div class="flex flex-row flex-wrap gap-2">
                    {#if socials}
                        {#each Object.entries(socials) as [social, href]}
                            {@const src = getSocialIcon(social)}
                            <a {href} target="_blank"
                                ><Icon
                                    {src}
                                    class="size-5 text-csi-black transition-colors hover:text-csi-blue md:text-csi-white dark:text-csi-white"
                                /></a
                            >
                        {/each}
                    {/if}
                </div>
                <div
                    slot="tag"
                    class="h-fit w-fit rounded-full px-3 py-1 {getCommitteeColor(committee)}"
                >
                    <p class="m-0 text-sm text-csi-black">{name}</p>
                </div>
            </TeamCard>
        {/each}
    </div>
</section>
