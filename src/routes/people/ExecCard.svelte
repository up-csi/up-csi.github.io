<script lang="ts">
    import { Officer } from '$lib/models/officer';
    import lino from '$lib/lino-hero.svg';

    interface Props {
        officer: Officer;
    }

    const { officer }: Props = $props();
    const { name: alt, pos, src }: Officer = $derived(officer);
</script>

<figure class="max-w-[192px]">
    {#if src}
        <img {src} width="192" height="192" class="block rounded-2xl" {alt} />
    {:else}
        <img src={lino} width="192" height="192" class="block rounded-2xl" {alt} />
    {/if}
    <figcaption>
        <p class="text-csi-black dark:text-csi-white"><strong>{alt}</strong></p>
        <p class="text-csi-black dark:text-csi-white">{pos}</p>
    </figcaption>
</figure>
