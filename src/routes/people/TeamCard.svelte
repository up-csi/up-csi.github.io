<script lang="ts">
    import type { HTMLImgAttributes } from 'svelte/elements';
    import type { Snippet } from 'svelte';
    import { fade } from 'svelte/transition';

    interface Props {
        src: HTMLImgAttributes['src'];
        alt: HTMLImgAttributes['alt'];
        tag?: Snippet;
        children?: Snippet;
    }

    const { src, alt, tag, children }: Props = $props();
    let isOverlayVisible = $state(false);
</script>

<!-- TODO: Prefer using `hover:` modifiers in native CSS. -->
<div
    class="grid-rows-[1fr auto] grid grid-cols-1 content-start items-start overflow-hidden md:aspect-square md:grid-rows-1 md:rounded-2xl md:shadow-lg"
    role="img"
    onmouseenter={() => (isOverlayVisible = true)}
    onmouseleave={() => (isOverlayVisible = false)}
>
    <img
        {src}
        {alt}
        height="300px"
        loading="lazy"
        class="col-start-1 row-start-1 m-0 h-56 w-full rounded-2xl object-cover md:h-full"
    />
    {#if isOverlayVisible}
        <div
            class="z-10 col-start-1 row-start-1 hidden h-full flex-col justify-end gap-2 bg-csi-black/70 p-4 text-csi-white md:flex"
            transition:fade={{ duration: 75 }}
        >
            {@render children?.()}
        </div>
    {:else}
        <div
            class="z-10 col-start-1 row-start-1 hidden h-full w-full flex-col justify-end p-1 md:flex"
            in:fade={{ duration: 75 }}
        >
            {@render tag?.()}
        </div>
    {/if}
    <div class="col-start-1 row-start-2 flex flex-col gap-2 md:hidden">
        {@render children?.()}
    </div>
</div>
