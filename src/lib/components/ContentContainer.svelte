<script lang="ts">
    import type { Snippet } from 'svelte';

    interface Props {
        text: Snippet;
        cards: Snippet;
    }

    const { text, cards }: Props = $props();
</script>

<div
    class="flex flex-col items-center justify-between gap-12 rounded-3xl bg-csi-neutral-50 px-8 py-8 transition-colors ease-in-out md:px-24 md:py-16 xl:flex-row dark:bg-csi-neutral-950"
>
    <div class="flex flex-1 flex-col gap-4">
        {@render text()}
    </div>
    <div class="flex w-5/6 flex-col justify-center gap-4 md:flex-row xl:w-1/2">
        {@render cards()}
    </div>
</div>
