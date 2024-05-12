<script lang="ts">
    import githubIcon from "$lib/icons/github.svg";
    import linkedinIcon from "$lib/icons/linkedin.svg";
    import instagramIcon from "$lib/icons/instagram.svg";
    import linkIcon from "$lib/icons/link.svg";

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

    function getSocialIcon(social: string) {
        switch (social) {
            case 'github':      return githubIcon;
            case 'linkedin':    return linkedinIcon;
            case 'instagram':   return instagramIcon;
            default:            return linkIcon;
        }
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
        {#each filteredTeam as { name, title, imgFilename, socials }}
            <TeamCard src={`/about/${imgFilename}?url`} alt="image of {name}">
                <div>
                    <p class="m-0 text-md md:text-lg">{name}</p>
                    <p class="m-0 text-xs leading-tight">{title}</p>
                </div>
                <div class="flex flex-row gap-2">
                    {#each Object.entries(socials) as [ social, href ]}
                        <a {href} target="_blank"><img class="m-0 w-5 h-5" src={getSocialIcon(social)} alt="{name}'s {social}" /></a>
                    {/each}
                </div>

                <div slot="tag" class="z-10 absolute left-2 bottom-2 w-fit h-fit py-1 px-4 rounded-full bg-csi-white">
                    <p class="m-0 text-csi-black">{name}</p>
                </div>
            </TeamCard>
        {/each}
    </div>
</section>