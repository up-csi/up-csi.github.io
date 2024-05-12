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
    class="grid grid-cols-1 grid-rows-[1fr auto] md:grid-rows-1 content-start items-start md:aspect-square overflow-hidden md:rounded-2xl md:shadow-lg"
    role="img"
    on:mouseenter={_ => setOverlayVisibility(true)}
    on:mouseleave={_ => setOverlayVisibility(false)}
>
    <img {src} {alt} height="300px" loading="lazy" class="m-0 col-start-1 row-start-1 object-cover rounded-2xl h-56 md:h-auto" />
    {#if isOverlayVisible}
        <div class="z-10 col-start-1 row-start-1 h-full hidden md:flex flex-col justify-end p-4 gap-2 text-csi-white bg-csi-black/70">
            <slot />
        </div>
    {:else}
        <div class="z-10 col-start-1 row-start-1 p-1 hidden md:flex flex-col w-full h-full justify-end">
            <slot name="tag" />
        </div>
    {/if}
    <div class="flex md:hidden flex-col gap-2 col-start-1 row-start-2">
        <slot />
    </div>
</div>
