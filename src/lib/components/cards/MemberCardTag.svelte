<script lang="ts">
    import Icon from '@iconify/svelte';

    import type { Member } from '$lib/models/member';
    import { getSocialMedium } from '$lib/types/social_media';

    interface Props {
        member: Member;
    }

    const { member }: Props = $props();
    const { name, title, socials } = $derived(member);
</script>

<div>
    <p class="text-md m-0 md:text-lg">{name}</p>
    <p class="m-0 text-xs leading-tight">{title}</p>
</div>
<div class="flex flex-row flex-wrap gap-2">
    {#if socials}
        {#each Object.entries(socials) as [social, link]}
            {@const { path, icon } = getSocialMedium(social)}
            {@const href = path ? `${path}/${link}` : link}
            <a {href} target="_blank"
                ><Icon
                    {icon}
                    class="size-5 text-csi-black transition-colors hover:text-csi-blue md:text-csi-white dark:text-csi-white"
                /></a
            >
        {/each}
    {/if}
</div>
