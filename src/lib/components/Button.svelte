<script lang="ts">
    import type { Snippet } from 'svelte';

    interface Props {
        children?: Snippet;
    }

    const { children }: Props = $props();
</script>

<button
    class="rounded-full bg-black px-4 py-3 text-center font-inter text-csi-white transition-colors ease-in-out hover:bg-csi-blue dark:bg-csi-blue dark:text-csi-black dark:hover:bg-csi-white"
>
    {@render children?.()}
</button>
