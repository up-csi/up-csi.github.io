<script lang="ts">
    import type { Snippet } from 'svelte';

    interface Props {
        children?: Snippet;
        href?: string;
        class?: string;
    }

    const { children, href = '/#' }: Props = $props();
</script>

<a
    {href}
    class="hidden whitespace-nowrap rounded-full border-2 border-csi-blue px-4 py-1 transition-colors duration-300 hover:bg-csi-blue hover:shadow-inner lg:block"
>
    {@render children?.()}
</a>
