<script lang="ts">
    import type { BoardOfficer } from '$lib/types/board_officer';
    import type { Member } from '$lib/models/member';

    import { fade } from 'svelte/transition';

    import MemberCardTag from '$lib/components/cards/MemberCardTag.svelte';
    
    interface Props {
        member: BoardOfficer | Member;
        socials?: Record<string, string>;
        color: string;
        foreground: string;
    }

    const { member, socials, color, foreground }: Props = $props();
    const { name, src, title } = $derived(member);
    let isOverlayVisible = $state(false);
</script>

<!-- TODO: Prefer using `hover:` modifiers in native CSS. -->
<div
    class="grid-rows-[1fr auto] relative grid grid-cols-1 content-start items-start overflow-hidden *:!m-0 md:aspect-square md:grid-rows-1 md:rounded-2xl md:shadow-lg"
    role="img"
    onmouseenter={() => (isOverlayVisible = true)}
    onmouseleave={() => (isOverlayVisible = false)}
>
    <enhanced:img
        {src}
        alt={name}
        height="300px"
        loading="lazy"
        class="col-start-1 row-start-1 !m-0 aspect-square h-56 w-full rounded-2xl object-cover md:h-full"
    />
    {#if isOverlayVisible}
        <div
            class="bg-csi-black/70 text-csi-white absolute z-10 col-start-1 row-start-1 hidden h-full w-full flex-col justify-end gap-2 p-4 md:flex"
            transition:fade={{ duration: 75 }}
        >
            <MemberCardTag {name} {title} {socials} />
        </div>
    {:else}
        <div
            class="absolute z-10 col-start-1 row-start-1 hidden h-full w-full flex-col justify-end p-1 md:flex"
            in:fade={{ duration: 75 }}
        >
            <div class="h-fit w-fit rounded-full px-3 py-1 {color}">
                <p class="{foreground} !m-0 text-sm">{name}</p>
            </div>
        </div>
    {/if}

    <div class="col-start-1 row-start-2 flex flex-col gap-2 md:hidden">
        <MemberCardTag {name} {title} {socials} />
    </div>
</div>
