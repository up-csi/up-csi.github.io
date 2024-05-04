<script>
    export let src = '';
    export let alt = '';
    export let href = '';
</script>

<div
    class="flex h-auto w-full flex-col overflow-hidden rounded-2xl bg-csi-neutral-50 shadow-lg md:h-[32rem] md:w-72 dark:bg-csi-neutral-900"
>
    <img {src} {alt} class="m-0 h-64 shrink-0 object-cover md:h-48" />
    <div class="m-3 flex h-full flex-col justify-between gap-2 overflow-hidden">
        <slot />
        <p class="m-0"><a {href}>More Info</a></p>
    </div>
</div>
