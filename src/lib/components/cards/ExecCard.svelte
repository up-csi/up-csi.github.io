<script lang="ts">
    import type { BoardOfficer } from '$lib/types/board_officer';

    interface Props {
        officer: BoardOfficer;
    }

    const { officer }: Props = $props();
    const { name: alt, src, pos }: BoardOfficer = $derived(officer);
</script>

<figure class="max-w-[192px]">
    <enhanced:img {src} width="192" height="192" class="block rounded-2xl" {alt} />
    <figcaption class="*:text-foreground *:transition-colors *:ease-in-out">
        <p class="font-bold">{alt}</p>
        <p>{pos}</p>
    </figcaption>
</figure>
