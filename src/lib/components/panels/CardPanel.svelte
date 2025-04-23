<script lang="ts">
    import type { Snippet } from 'svelte';

    interface Props {
        cards: Snippet;
    }

    const { cards }: Props = $props();
</script>

<div class="flex justify-center">
    <div
        class="grid w-fit grid-cols-1 items-center gap-8 transition-colors ease-in-out md:grid-cols-2 lg:grid-cols-3"
    >
        {@render cards?.()}
    </div>
</div>