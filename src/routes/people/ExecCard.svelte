<script lang="ts">
    import type { HTMLImgAttributes } from 'svelte/elements';

    interface Props {
        src: HTMLImgAttributes['src'];
        alt: HTMLImgAttributes['alt'];
        pos: string;
    }

    const { src, alt, pos }: Props = $props();
</script>

<figure class="max-w-[192px]">
    <img {src} width="192" height="192" class="block rounded-2xl" {alt} />
    <figcaption>
        <p class="text-csi-black dark:text-csi-white"><strong>{alt}</strong></p>
        <p class="text-csi-black dark:text-csi-white">{pos}</p>
    </figcaption>
</figure>
