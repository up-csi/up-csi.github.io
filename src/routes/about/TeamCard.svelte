<script lang="ts">
    // eslint-disable-next-line init-declarations
    export let src: string;
    // eslint-disable-next-line init-declarations
    export let alt: string;
    let isOverlayVisible = false;
</script>

<div
    class="grid-rows-[1fr auto] grid grid-cols-1 content-start items-start overflow-hidden md:aspect-square md:grid-rows-1 md:rounded-2xl md:shadow-lg"
    role="img"
    on:mouseenter={() => (isOverlayVisible = true)}
    on:mouseleave={() => (isOverlayVisible = false)}
>
    <img
        {src}
        {alt}
        height="300px"
        loading="lazy"
        class="col-start-1 row-start-1 m-0 h-56 rounded-2xl object-cover md:h-auto"
    />
    {#if isOverlayVisible}
        <div
            class="z-10 col-start-1 row-start-1 hidden h-full flex-col justify-end gap-2 bg-csi-black/70 p-4 text-csi-white md:flex"
        >
            <slot />
        </div>
    {:else}
        <div
            class="z-10 col-start-1 row-start-1 hidden h-full w-full flex-col justify-end p-1 md:flex"
        >
            <slot name="tag" />
        </div>
    {/if}
    <div class="col-start-1 row-start-2 flex flex-col gap-2 md:hidden">
        <slot />
    </div>
</div>
