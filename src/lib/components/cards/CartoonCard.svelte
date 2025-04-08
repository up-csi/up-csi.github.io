<script lang="ts">
    import type { Snippet } from 'svelte';

    interface Props {
        src: string;
        children?: Snippet;
    }

    const { children, src }: Props = $props();
</script>

<div class="mb-8 flex h-full flex-col md:mb-0 md:w-2/5 xl:w-3/5">
    <div
        class="flex aspect-square items-center overflow-y-hidden rounded-3xl bg-csi-blue px-2 pt-5"
    >
        <img {src} alt="Corporate Cartoon" />
    </div>
    {#if typeof children !== 'undefined'}
        <div class="leading-6">
            <p class="text-center text-csi-black dark:text-csi-white">{@render children()}</p>
        </div>
    {/if}
</div>
