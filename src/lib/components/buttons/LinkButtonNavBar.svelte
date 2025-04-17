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
    class="border-csi-blue hover:bg-csi-blue hidden rounded-full border-2 px-4 py-1 whitespace-nowrap hover:shadow-inner lg:block"
    >{@render children?.()}</a
>
