<script lang="ts">
    import type { HTMLImgAttributes } from 'svelte/elements';
    // eslint-disable-next-line init-declarations
    export let src: HTMLImgAttributes['src'];
    // eslint-disable-next-line init-declarations
    export let alt: HTMLImgAttributes['alt'];
    // eslint-disable-next-line init-declarations
    export let pos: string;
</script>

<figure class="max-w-[192px]">
    <img {src} width="192" height="192" class="block rounded-2xl" {alt} />
    <figcaption>
        <p class="text-csi-black dark:text-csi-white"><strong>{alt}</strong></p>
        <p class="text-csi-black dark:text-csi-white">{pos}</p>
    </figcaption>
</figure>
