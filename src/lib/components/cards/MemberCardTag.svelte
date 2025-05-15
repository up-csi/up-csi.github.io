<script lang="ts">
    import Icon from '@iconify/svelte';

    import type { Position } from '$lib/models/position';

    import { getSocialMedium } from '$lib/types/social_media';

    interface Props {
        name: string;
        title?: Position[];
        socials?: Record<string, string>;
    }

    const { name, title, socials }: Props = $props();
</script>

<div class="*:!m-0">
    <p class="text-md md:text-lg">{name}</p>
    {#if title}
        <p class="text-xs leading-tight">
            {title.join(', ')}
        </p>
    {/if}
</div>
<div class="flex flex-row flex-wrap gap-2">
    {#if socials}
        {#each Object.entries(socials) as [social, link]}
            {@const { path, icon } = getSocialMedium(social)}
            {@const href = path ? `${path}/${link}` : link}
            <a {href} target="_blank"
                ><Icon
                    {icon}
                    class="text-foreground hover:text-csi-blue md:text-csi-white size-5 transition-colors"
                /></a
            >
        {/each}
    {/if}
</div>
