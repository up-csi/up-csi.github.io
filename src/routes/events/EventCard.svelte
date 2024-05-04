<script lang='ts'>
    export let src = '';
    export let alt = '';
    export let href = '';
</script>

<div class="flex flex-col w-72 h-[32rem] rounded-2xl overflow-hidden shadow-lg bg-csi-neutral-50 dark:bg-csi-neutral-900">
    <img {src} {alt} class="h-48 object-cover m-0 shrink-0"/>
    <div class="flex flex-col gap-2 h-full justify-between overflow-hidden m-3">
        <slot />
        <p class="m-0"><a {href}>More Info</a></p>
    </div>
</div>
