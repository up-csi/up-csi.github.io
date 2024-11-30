<script lang="ts">
    import type { Snippet } from 'svelte';

    interface Props {
        children?: Snippet;
    }

    const { children }: Props = $props();
</script>

<button
    class="transition-colors hover:bg-csi-blue ease-in-out duration-300 rounded-full bg-black px-4 py-3 text-center font-inter text-csi-white dark:bg-csi-blue dark:text-csi-black dark:hover:bg-csi-white"
>
    {@render children?.()}
</button>
