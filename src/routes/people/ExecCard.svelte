<script lang="ts">
    import { Officer } from "$lib/models/officer";

    interface Props {
        officer: Officer;
    }

    const { officer }: Props = $props();
    const { name: alt, pos, src }: Officer = $derived(officer);
</script>

<figure class="max-w-[192px]">
    <img {src} width="192" height="192" class="block rounded-2xl" {alt} />
    <figcaption>
        <p class="text-csi-black dark:text-csi-white"><strong>{alt}</strong></p>
        <p class="text-csi-black dark:text-csi-white">{pos}</p>
    </figcaption>
</figure>
