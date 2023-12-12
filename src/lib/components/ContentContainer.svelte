<script lang="ts">
    import type { HTMLImgAttributes } from 'svelte/elements';

    export let topText: string;
    export let headerText: string;
    export let bottomText: string;

    export let imageText1: string;
    export let imageText2: string;

    export let src1: HTMLImgAttributes['src'];
    export let src2: HTMLImgAttributes['src'];

    export let alt1: HTMLImgAttributes['alt'];
    export let alt2: HTMLImgAttributes['alt'];
</script>

<div class="flex lg:flex-row flex-col justify-between items-center gap-12 md:px-32 md:py-16 px-8 py-8 rounded-3xl bg-warm-white">
    <div class="flex-1 flex flex-col gap-4">
        <p class="m-0">{topText}</p>
        <h2 class="font-dm font-normal text-black m-0">{headerText}</h2>
        <p class="m-0">{bottomText}</p>
    </div>

    <!-- Container for placeholder basic card components -->
    <div class="flex-1 flex lg:flex-row flex-col lg:items-start items-center gap-6 h-full">
        <div class="flex-1 w-full flex flex-col items-center gap-4">
            <img src={src1} alt={alt1} class="m-0 rounded-3xl bg-black text-csi-white"/>
            <p class="mx-2 my-0 text-black text-center">{imageText1}</p>
        </div>
        <div class="flex-1 w-full flex flex-col items-center gap-4">
            <img src={src2} alt={alt2} class="m-0 rounded-3xl bg-black text-csi-white" />
            <p class="mx-2 my-0 text-black text-center">{imageText2}</p>
        </div>
    </div>
</div>
