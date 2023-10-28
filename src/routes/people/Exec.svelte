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
        <p><strong>{alt}</strong></p>
        <p>{pos}</p>
    </figcaption>
</figure>
