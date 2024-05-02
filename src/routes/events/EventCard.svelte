<script lang='ts'>
    import type { HTMLImgAttributes } from 'svelte/elements';

    export let imageSrc: HTMLImgAttributes['src'];
    export let pageUrl: string;
</script>

<div class="flex flex-col w-72 h-[32rem] rounded-2xl overflow-hidden shadow-lg bg-csi-neutral-50 dark:bg-csi-neutral-900">
    <img src={imageSrc} alt="Corporate Cartoon" class="h-56 object-cover m-0"/>
    <div class="flex flex-col gap-2 h-full justify-between overflow-hidden m-3">
        <slot />
        <p class="m-0"><a href={pageUrl}>More Info</a></p>
    </div>
</div>
