<script lang="ts">
    import Icon from '@iconify/svelte';
    import Link from '@iconify/icons-heroicons/link-solid';

    import GitHub from '@iconify/icons-simple-icons/github';
    import Instagram from '@iconify/icons-simple-icons/instagram';
    import LinkedIn from '@iconify/icons-simple-icons/linkedin';

    import type { Member } from '$lib/models/member';

    interface Props {
        member: Member;
    }

    const { member }: Props = $props();
    const { name, title, socials } = $derived(member);

    function getSocialIcon(social: string) {
        switch (social) {
            case 'github':
                return GitHub;
            case 'linkedin':
                return LinkedIn;
            case 'instagram':
                return Instagram;
            default:
                return Link;
        }
    }

    function getSocialPath(social: string) {
        switch (social) {
            case 'github':
                return 'https://github.com';
            case 'linkedin':
                return 'https://www.linkedin.com/in';
            case 'instagram':
                return 'https://www.instagram.com';
            default:
                return Link;
        }
    }
</script>

<div>
    <p class="text-md m-0 md:text-lg">{name}</p>
    <p class="m-0 text-xs leading-tight">{title}</p>
</div>
<div class="flex flex-row flex-wrap gap-2">
    {#if socials}
        {#each Object.entries(socials) as [social, username]}
            {@const icon = getSocialIcon(social)}
            {@const href = `${getSocialPath(social)}/${username}`}
            <a {href} target="_blank"
                ><Icon
                    {icon}
                    class="size-5 text-csi-black transition-colors hover:text-csi-blue md:text-csi-white dark:text-csi-white"
                /></a
            >
        {/each}
    {/if}
</div>
