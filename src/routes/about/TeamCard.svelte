<script lang="ts">
    // eslint-disable-next-line init-declarations
    export let src: string;
    // eslint-disable-next-line init-declarations
    export let alt: string;

    let isOverlayVisible = false;

    function setOverlayVisibility(visibility: boolean) {
        isOverlayVisible = visibility;
    }
</script>

<div
    class="group-hover:visible grid grid-cols-1 grid-rows-1 content-end items-end aspect-square overflow-hidden rounded-2xl bg-csi-neutral-50 shadow-lg dark:bg-csi-neutral-900"
    role="img"
    on:mouseenter={_ => setOverlayVisibility(true)}
    on:mouseleave={_ => setOverlayVisibility(false)}
>
    <img {src} {alt} loading="lazy" class="m-0 col-start-1 row-start-1 object-cover" />
    {#if isOverlayVisible}
        <div class="z-10 col-start-1 row-start-1 h-full flex flex-col justify-end p-4 gap-2 text-csi-white bg-csi-black/80">
            <slot />
        </div>
    {:else}
        <div class="relative col-start-1 row-start-1">
            <slot name="tag" />
        </div>
    {/if}
</div>
