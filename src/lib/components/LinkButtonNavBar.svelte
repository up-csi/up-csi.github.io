<script lang="ts">
    import type { HTMLAnchorAttributes } from 'svelte/elements';
    import type { Snippet } from 'svelte';

    interface Props extends HTMLAnchorAttributes {
        children?: Snippet;
    }

    const { children, ...rest }: Props = $props();
</script>

<a
    {...rest}
    class="hidden whitespace-nowrap rounded-full border-2 border-csi-blue px-4 py-1 transition-colors duration-300 hover:bg-csi-blue hover:shadow-inner lg:block"
    >{@render children?.()}</a
>
