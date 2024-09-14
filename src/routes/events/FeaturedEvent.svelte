<script lang="ts">
    import { Tag } from './events';
    import Button from '$lib/components/Button.svelte';

    export let tags: Tag[];
    export let schedule: string[];
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
        <slot name="image" />
    </div>

    <div class="flex w-2/3 flex-col items-center gap-6 md:items-start">
        <!-- Tags -->
        <div class="flex gap-4">
            {#each tags as tag}
                <Button>{tag}</Button>
            {/each}
        </div>

        <!-- Event Name -->
        <h2 class="font-inter text-4xl font-bold"><slot name="name" /></h2>

        <!-- Schedule -->
        <div>
            {#each schedule as sched}
                <p>{sched}</p>
            {/each}
        </div>

        <!-- Description -->
        <p><slot name="description" /></p>

        <!-- Call to Action (replace button to anchor tag when there is a valid href) -->
        <div class="flex gap-6">
            <button class="bg-csi-black p-3 text-center text-csi-white">More Info</button>
            <button class="bg-csi-black p-3 text-center text-csi-white">Register</button>
        </div>
    </div>
</div>
