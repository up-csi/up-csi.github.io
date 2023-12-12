<script lang="ts">
    import type { HTMLImgAttributes } from 'svelte/elements';

    // eslint-disable-next-line init-declarations
    export let topText: string;
    // eslint-disable-next-line init-declarations
    export let headerText: string;
    // eslint-disable-next-line init-declarations
    export let bottomText: string;

    // eslint-disable-next-line init-declarations
    export let imageText1: string;
    // eslint-disable-next-line init-declarations
    export let imageText2: string;

    // eslint-disable-next-line init-declarations
    export let src1: HTMLImgAttributes['src'];
    // eslint-disable-next-line init-declarations
    export let src2: HTMLImgAttributes['src'];

    // eslint-disable-next-line init-declarations
    export let alt1: HTMLImgAttributes['alt'];
    // eslint-disable-next-line init-declarations
    export let alt2: HTMLImgAttributes['alt'];
</script>

<div
    class="flex flex-col items-center justify-between gap-12 rounded-3xl bg-warm-white px-8 py-8 md:px-32 md:py-16 lg:flex-row"
>
    <div class="flex flex-1 flex-col gap-4">
        <p class="m-0">{topText}</p>
        <h2 class="m-0 font-dm font-normal text-black">{headerText}</h2>
        <p class="m-0">{bottomText}</p>
    </div>

    <!-- Container for placeholder basic card components -->
    <div class="flex h-full flex-1 flex-col items-center gap-6 lg:flex-row lg:items-start">
        <div class="flex w-full flex-1 flex-col items-center gap-4">
            <img src={src1} alt={alt1} class="m-0 rounded-3xl bg-black text-csi-white" />
            <p class="mx-2 my-0 text-center text-black">{imageText1}</p>
        </div>
        <div class="flex w-full flex-1 flex-col items-center gap-4">
            <img src={src2} alt={alt2} class="m-0 rounded-3xl bg-black text-csi-white" />
            <p class="mx-2 my-0 text-center text-black">{imageText2}</p>
        </div>
    </div>
</div>
