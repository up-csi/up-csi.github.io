<script lang="ts">
    // eslint-disable-next-line init-declarations
    export let topText: string;
    // eslint-disable-next-line init-declarations
    export let headerText: string;
    // eslint-disable-next-line init-declarations
    export let bottomText: string;
</script>

<div
    class="my-6 flex flex-col items-center justify-between gap-12 rounded-3xl bg-warm-white px-8 py-8 md:px-32 md:py-16 lg:flex-row"
>
    <div class="flex flex-1 flex-col gap-4">
        <p class="m-0">{topText}</p>
        <h2 class="m-0 font-dm font-normal text-black">{headerText}</h2>
        <p class="m-0">{bottomText}</p>
    </div>

    <!-- Container for basic card components -->
    {#if $$slots.cards}
        <div class="flex h-full flex-1 flex-col items-center gap-6 lg:flex-row lg:items-start">
            <slot name="cards" />
        </div>
    {/if}
</div>
