<script lang="ts">
    import ChevronDown from '@iconify/icons-heroicons/chevron-down';
    import Icon from '@iconify/svelte';
    import type { Snippet } from 'svelte';
    import { slide } from 'svelte/transition';

    interface Props {
        title: string;
        children?: Snippet;
    }

    let open: boolean = $state(false);

    function toggle() {
        open = !open;
    }

    const { children, title }: Props = $props();
</script>

<div class="w-full rounded-2xl bg-csi-neutral-50 shadow-lg dark:bg-csi-neutral-900">
    <button
        class="flex w-full rounded-2xl bg-csi-neutral-50 px-5 py-4 aria-expanded:bg-csi-neutral-100 dark:bg-csi-neutral-900 aria-expanded:dark:bg-csi-neutral-700"
        onclick={toggle}
        aria-expanded={open}
    >
        <span class="grow text-left font-inter text-lg font-bold text-csi-black dark:text-csi-white"
            >{title}</span
        >
        <span class="grow-0">
            <Icon
                icon={ChevronDown}
                class="size-5 text-csi-black transition-transform aria-expanded:rotate-90 dark:text-csi-white"
                aria-expanded={open}
            />
        </span>
    </button>
    {#if open}
        <div
            class="flex w-full items-center px-5 py-4 text-csi-black dark:text-csi-white"
            transition:slide
        >
            {@render children?.()}
        </div>
    {/if}
</div>
