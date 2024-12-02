<script lang="ts">
    import LinkButton from '$lib/components/LinkButton.svelte';
    import type { Snippet } from 'svelte';
    import { Tag } from '$lib/events/events';

    interface Props {
        tags: Tag[];
        schedule: string[];
        image?: Snippet;
        name?: Snippet;
        description?: Snippet;
    }

    const { tags, schedule, image, name, description }: Props = $props();
</script>

<!--
@component
**Props:**
- `tags: string[]`
- `schedule: string[]`


**Slots:**
- `image`
- `name`
- `description`
-->
<div
    class="flex w-full flex-col items-center justify-center gap-6 rounded-3xl bg-csi-neutral-50 p-4 text-center shadow-lg md:flex-row md:justify-normal md:gap-8 md:text-left dark:bg-csi-neutral-900"
>
    <div class="flex w-full flex-col border-b-2 md:w-1/3 md:flex-row md:border-b-0">
        {@render image?.()}
    </div>

    <div class="flex w-2/3 flex-col items-center gap-6 md:items-start">
        <!-- Tags -->
        <div class="flex gap-4">
            {#each tags as tag}
                <LinkButton href="/#">{tag}</LinkButton>
            {/each}
        </div>

        <!-- Event Name -->
        <h2 class="font-inter text-4xl font-bold">{@render name?.()}</h2>

        <!-- Schedule -->
        <div>
            {#each schedule as sched}
                <p>{sched}</p>
            {/each}
        </div>

        <!-- Description -->
        <p>{@render description?.()}</p>

        <!-- Call to Action (replace button to anchor tag when there is a valid href) -->
        <div class="flex gap-6">
            <LinkButton href="/#">More Info</LinkButton>
            <LinkButton href="/#">Register</LinkButton>
        </div>
    </div>
</div>
