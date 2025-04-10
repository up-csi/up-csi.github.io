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

<div class="bg-csi-neutral-50 dark:bg-csi-neutral-900 w-full rounded-2xl shadow-lg">
    <button
        class="bg-csi-neutral-50 aria-expanded:bg-csi-neutral-100 dark:bg-csi-neutral-900 dark:aria-expanded:bg-csi-neutral-700 flex w-full items-center rounded-2xl px-5 py-4"
        onclick={toggle}
        aria-expanded={open}
    >
        <span class="font-inter text-csi-black dark:text-csi-white grow text-left text-lg font-bold"
            >{title}</span
        >
        <span class="grow-0">
            <Icon
                icon={ChevronDown}
                class="text-csi-black dark:text-csi-white size-5 transition-transform aria-expanded:rotate-90"
                aria-expanded={open}
            />
        </span>
    </button>
    {#if open}
        <div
            class="text-csi-black dark:text-csi-white flex w-full items-center px-5 py-4"
            transition:slide
        >
            {@render children?.()}
        </div>
    {/if}
</div>
