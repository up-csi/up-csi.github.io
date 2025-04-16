<script lang="ts">
    import ChevronDown from '@iconify/icons-heroicons/chevron-down';
    import ChevronUp from '@iconify/icons-heroicons/chevron-up';
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

<div class="bg-float w-full rounded-2xl shadow-lg">
    <button
        class="aria-expanded:bg-invert/10 flex w-full items-center rounded-2xl px-5 py-4"
        onclick={toggle}
        aria-expanded={open}
    >
        <span class="font-inter text-float-foreground grow text-left text-lg font-bold"
            >{title}</span
        >
        <span class="grow-0">
            <Icon
                icon={(open) ? ChevronUp : ChevronDown}
                class="text-float-foreground size-5"
            />
        </span>
    </button>
    {#if open}
        <div
            class="text-float-foreground flex w-full items-center px-5 py-4"
            transition:slide
        >
            {@render children?.()}
        </div>
    {/if}
</div>
