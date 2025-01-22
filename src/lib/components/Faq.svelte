<!-- Faq.svelte -->
<script lang="ts">
    import type { Snippet } from 'svelte';

    interface Props {
        children?: Snippet;
    }
    const { children }: Props = $props();
</script>

<div
    class="container mx-auto flex flex-col flex-wrap items-center gap-8 px-20 md:flex-row md:justify-between"
>
    {@render children?.()}
</div>