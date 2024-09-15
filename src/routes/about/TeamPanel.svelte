<script lang="ts">
    import { Github, Instagram, Linkedin } from '@steeze-ui/simple-icons';
    import { Icon } from '@steeze-ui/svelte-icon';
    import { Link } from '@steeze-ui/heroicons';

    import caleb from '$lib/people/caleb-bunye.webp';
    import TeamCard from './TeamCard.svelte';

    const committees = [
        'Everyone',
        'Executive Board',
        'Innovation',
        'Service',
        'External Relations',
        'Membership & Internals',
        'Branding & Creatives',
        'Engineering',
    ];

    const team = [
        {
            name: 'Caleb Bunye',
            title: 'President',
            committee: 'Executive Board',
            img: caleb,
            socials: {
                github: 'https://github.com',
                linkedin: 'https://linkedin.com',
                instagram: 'https://instagram.com',
                website: 'https://google.com',
            },
        },
        {
            name: 'Caleb Bunye 2',
            title: 'President',
            committee: 'Innovation',
            img: caleb,
            socials: {
                github: 'https://github.com',
                linkedin: 'https://linkedin.com',
                instagram: 'https://instagram.com',
                website: 'https://google.com',
            },
        },
        {
            name: 'Caleb Bunye 3',
            title: 'President',
            committee: 'Service',
            img: caleb,
            socials: {
                github: 'https://github.com',
                linkedin: 'https://linkedin.com',
                website: 'https://google.com',
            },
        },
        {
            name: 'Caleb Bunye 4',
            title: 'President',
            committee: 'External Relations',
            img: caleb,
            socials: {
                linkedin: 'https://linkedin.com',
                instagram: 'https://instagram.com',
                website: 'https://google.com',
            },
        },
        {
            name: 'Caleb Bunye 5',
            title: 'President',
            committee: 'Membership & Internals',
            img: caleb,
            socials: {
                github: 'https://github.com',
                linkedin: 'https://linkedin.com',
                instagram: 'https://instagram.com',
            },
        },
        {
            name: 'Caleb Bunye 6',
            title: 'President',
            committee: 'Branding & Creatives',
            img: caleb,
            socials: {
                github: 'https://github.com',
                linkedin: 'https://linkedin.com',
                instagram: 'https://instagram.com',
            },
        },
        {
            name: 'Caleb Bunye 7',
            title: 'President',
            committee: 'Engineering',
            img: caleb,
            socials: {
                github: 'https://github.com',
                instagram: 'https://instagram.com',
                website: 'https://google.com',
            },
        },
        {
            name: 'Caleb Bunye 8',
            title: 'President',
            committee: 'Executive Board',
            img: caleb,
            socials: {
                github: 'https://github.com',
                linkedin: 'https://linkedin.com',
                instagram: 'https://instagram.com',
            },
        },
    ];

    $: currentCommittee = 'Executive Board';
    $: filteredTeam =
        currentCommittee === 'Everyone'
            ? team
            : team.filter(({ committee }) => committee === currentCommittee);
    $: sortedFilteredTeam = structuredClone(filteredTeam).sort(
        (a, b) => committees.indexOf(a.committee) - committees.indexOf(b.committee),
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
                {#each committees as committee}
                    {@const neutral =
                        currentCommittee === committee
                            ? 'bg-black text-csi-white dark:bg-csi-blue dark:text-csi-black'
                            : 'bg-csi-white text-csi-black dark:bg-blue-white'}
                    <li class="m-0 p-0">
                        <button
                            class="min-h-10 shrink-0 rounded-md px-6 shadow-md {neutral}"
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
        {#each sortedFilteredTeam as { name, title, committee, img, socials }}
            <TeamCard src={img} alt="image of {name}">
                <div>
                    <p class="text-md m-0 md:text-lg">{name}</p>
                    <p class="m-0 text-xs leading-tight">{title}</p>
                </div>
                <div class="flex flex-row flex-wrap gap-2">
                    {#each Object.entries(socials) as [social, href]}
                        {@const src = getSocialIcon(social)}
                        <a {href} target="_blank"><Icon {src} class="size-5" /></a>
                    {/each}
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
