<script lang="ts">
    // eslint-disable-next-line init-declarations
    export let src: string;
</script>

<div class="mb-8 flex h-full flex-col md:mb-0 md:w-2/5 xl:w-3/5">
    <div
        class="flex aspect-square items-center overflow-y-hidden rounded-3xl bg-csi-blue px-2 pt-5"
    >
        <img {src} alt="Corporate Cartoon" />
    </div>
    {#if $$slots.title || $$slots.default}
        <div class="leading-6">
            <h1 class="text-center font-dm text-3xl"><slot name="title" /></h1>
            <p class="text-center text-csi-black dark:text-csi-white"><slot /></p>
        </div>
    {/if}
</div>
