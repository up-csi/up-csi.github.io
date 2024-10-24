<script lang="ts">
    import type { Snippet } from 'svelte';

    interface Props {
        children?: Snippet;
    }

    const { children }: Props = $props();
</script>

<a
    href="mailto:lino@up-csi.org"
    class="rounded-full bg-black px-4 py-3 text-center font-inter text-csi-white no-underline dark:bg-csi-blue dark:text-csi-black"
>
    {@render children?.()}
</a>
