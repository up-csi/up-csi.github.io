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
    class="rounded-full bg-black px-4 py-3 text-center font-inter text-csi-white no-underline transition-colors ease-in-out hover:bg-csi-blue dark:bg-csi-blue dark:text-csi-black dark:hover:bg-csi-white"
    >{@render children?.()}</a
>
