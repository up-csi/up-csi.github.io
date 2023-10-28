<script lang="ts">
    import type { HTMLImgAttributes } from 'svelte/elements';
    export let src: HTMLImgAttributes['src'];
    export let alt: HTMLImgAttributes['alt'];
    export let pos: string;
</script>

<figure class="max-w-[192px]">
    <img {src} width="192" height="192" class="block rounded-2xl" {alt} />
    <figcaption>
        <p><strong>{alt}</strong></p>
        <p>{pos}</p>
    </figcaption>
</figure>
