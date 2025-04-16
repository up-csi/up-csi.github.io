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
    class="font-inter text-button-foreground bg-button hover:bg-button-hover rounded-full px-4 py-3 text-center no-underline transition-colors ease-in-out"
    >{@render children?.()}</a
>
