<script lang="ts">
    import type { Snippet } from 'svelte';

    interface Props {
        title: string; // This could also be a Snippet
        children?: Snippet;
    }
    const { title, children }: Props = $props();
</script>

<div class="max-w-md text-center md:w-1/2 *:prose">
    <h2 class="mb-2 text-2xl font-bold md:text-lg">{title}</h2>
    <div class="text-justify text-sm leading-relaxed md:text-base">
        {@render children?.()}
    </div>
</div>
